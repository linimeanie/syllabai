import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import type { Course } from "./types";

// JSON Schema for a complete course. Shared by both providers.
const COURSE_SCHEMA = {
  type: "object",
  required: ["title", "description", "niche", "examName", "language", "modules"],
  properties: {
    title: { type: "string", description: "Course title in the source language" },
    description: { type: "string", description: "2-3 sentence course description" },
    niche: { type: "string", description: "The exam / niche this prepares for" },
    examName: { type: "string", description: "Name of the source exam or catalog" },
    language: { type: "string", enum: ["de", "en"], description: "Content language" },
    modules: {
      type: "array",
      description: "3-8 logically grouped modules covering the whole syllabus",
      items: {
        type: "object",
        required: ["title", "lessons"],
        properties: {
          title: { type: "string" },
          lessons: {
            type: "array",
            items: {
              type: "object",
              required: ["title", "objectives"],
              properties: {
                title: { type: "string" },
                objectives: { type: "array", items: { type: "string" } },
                content: {
                  type: "object",
                  properties: {
                    intro: { type: "string" },
                    sections: {
                      type: "array",
                      items: {
                        type: "object",
                        required: ["heading", "body"],
                        properties: { heading: { type: "string" }, body: { type: "string" } },
                      },
                    },
                    summary: { type: "string" },
                  },
                },
                practiceQuestions: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["question", "options", "correctIndex", "explanation"],
                    properties: {
                      question: { type: "string" },
                      options: { type: "array", items: { type: "string" } },
                      correctIndex: { type: "integer" },
                      explanation: { type: "string" },
                    },
                  },
                },
                flashcards: {
                  type: "array",
                  items: {
                    type: "object",
                    required: ["front", "back"],
                    properties: { front: { type: "string" }, back: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
} as const;

const SYSTEM = `You are an expert curriculum designer for regulated vocational and licensing exams (sailing, flying, security, trades, care work, etc.).

You receive the raw text of an exam syllabus or official question catalog. Produce a COMPLETE, well-structured course.

Rules:
- Detect the language of the source document and write ALL course content in that language (German source -> German course).
- Create 3-8 logical modules; each module has 3-10 lessons; each lesson has a title and 2-4 concrete learning objectives. Cover the whole syllabus.
- For the FIRST lesson of the FIRST module ONLY, additionally produce:
  - content: an intro paragraph (>=80 words), at least 2 sections each with a heading and a body (>=100 words), and a summary paragraph.
  - practiceQuestions: EXACTLY 10 novel multiple-choice questions (4 options each, one correct via correctIndex 0-3, a >=40-word explanation). NEW questions inspired by the topic, never verbatim copies.
  - flashcards: at least 8 cards (short front, concise back).
- All other lessons: title + objectives only.
- Be accurate to the subject matter. Do not invent regulations that contradict the source.`;

function finalize(data: Omit<Course, "source" | "sampleLesson">): Course {
  return { ...data, source: "ai", sampleLesson: { moduleIndex: 0, lessonIndex: 0 } };
}

export async function generateCourse(syllabusText: string, nicheHint?: string): Promise<Course> {
  const trimmed = syllabusText.slice(0, 40000);
  const userText =
    (nicheHint ? `The target exam/niche is: ${nicheHint}.\n\n` : "") +
    `Here is the exam syllabus / question catalog text:\n\n${trimmed}`;

  // Prefer Groq (free tier) if configured, else Anthropic.
  if (process.env.GROQ_API_KEY) {
    return generateWithGroq(userText);
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return generateWithAnthropic(userText);
  }
  throw new Error("NO_API_KEY");
}

// Llama function-calling is unreliable for large nested schemas, so we use
// Groq's JSON mode and describe the exact shape in the prompt instead.
const JSON_SHAPE = `Return ONLY a JSON object with this exact shape:
{
  "title": string,
  "description": string,
  "niche": string,
  "examName": string,
  "language": "de" | "en",
  "modules": [
    {
      "title": string,
      "lessons": [
        {
          "title": string,
          "objectives": [string, ...],          // 2-4 items, every lesson
          // The following 3 keys ONLY on the FIRST lesson of the FIRST module:
          "content": {
            "intro": string,                      // >=80 words
            "sections": [{ "heading": string, "body": string }, ...],  // >=2, body >=100 words
            "summary": string
          },
          "practiceQuestions": [                  // EXACTLY 10
            { "question": string, "options": [string,string,string,string], "correctIndex": 0-3, "explanation": string }
          ],
          "flashcards": [{ "front": string, "back": string }, ...]   // >=8
        }
      ]
    }
  ]
}`;

async function generateWithGroq(userText: string): Promise<Course> {
  const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  const res = await client.chat.completions.create({
    model,
    max_tokens: 8000,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: `${SYSTEM}\n\n${JSON_SHAPE}` },
      { role: "user", content: userText },
    ],
  });

  const content = res.choices[0]?.message?.content;
  if (!content) throw new Error("Model returned empty content.");
  const data = JSON.parse(content) as Omit<Course, "source" | "sampleLesson">;
  if (!data.modules?.length) throw new Error("Model returned no modules.");
  return finalize(data);
}

async function generateWithAnthropic(userText: string): Promise<Course> {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";

  const res = await client.messages.create({
    model,
    max_tokens: 8000,
    system: SYSTEM,
    tools: [
      {
        name: "emit_course",
        description: "Emit the complete structured course generated from the syllabus.",
        input_schema: COURSE_SCHEMA as unknown as Anthropic.Tool.InputSchema,
      },
    ],
    tool_choice: { type: "tool", name: "emit_course" },
    messages: [{ role: "user", content: userText }],
  });

  const toolUse = res.content.find((b) => b.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error("Model did not return a structured course.");
  }
  return finalize(toolUse.input as Omit<Course, "source" | "sampleLesson">);
}
