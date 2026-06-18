import Anthropic from "@anthropic-ai/sdk";
import type { Course } from "./types";

// The model is asked to call this single tool, which forces a fully
// structured, validated course object out of the LLM — no fragile JSON
// parsing of free text.
const COURSE_TOOL: Anthropic.Tool = {
  name: "emit_course",
  description:
    "Emit a complete structured course generated from an exam syllabus / question catalog.",
  input_schema: {
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
        minItems: 3,
        description: "3-8 logically grouped modules covering the whole syllabus",
        items: {
          type: "object",
          required: ["title", "lessons"],
          properties: {
            title: { type: "string" },
            lessons: {
              type: "array",
              minItems: 1,
              items: {
                type: "object",
                required: ["title", "objectives"],
                properties: {
                  title: { type: "string" },
                  objectives: {
                    type: "array",
                    minItems: 2,
                    maxItems: 4,
                    items: { type: "string" },
                  },
                  // Only the FIRST lesson of the FIRST module must be enriched.
                  content: {
                    type: "object",
                    properties: {
                      intro: { type: "string" },
                      sections: {
                        type: "array",
                        items: {
                          type: "object",
                          required: ["heading", "body"],
                          properties: {
                            heading: { type: "string" },
                            body: { type: "string" },
                          },
                        },
                      },
                      summary: { type: "string" },
                    },
                  },
                  practiceQuestions: {
                    type: "array",
                    description: "Exactly 10 for the sample lesson, omit otherwise",
                    items: {
                      type: "object",
                      required: ["question", "options", "correctIndex", "explanation"],
                      properties: {
                        question: { type: "string" },
                        options: { type: "array", minItems: 4, maxItems: 4, items: { type: "string" } },
                        correctIndex: { type: "integer", minimum: 0, maximum: 3 },
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
  },
};

const SYSTEM = `You are an expert curriculum designer for regulated vocational and licensing exams (sailing, flying, security, trades, care work, etc.).

You receive the raw text of an exam syllabus or official question catalog. Produce a COMPLETE, well-structured course by calling the emit_course tool.

Rules:
- Detect the language of the source document and write ALL course content in that language (German source -> German course).
- Create 3-8 logical modules; each module has 3-10 lessons; each lesson has a title and 2-4 concrete learning objectives. Cover the whole syllabus, not just part of it.
- For the FIRST lesson of the FIRST module ONLY, additionally produce:
  - content: an intro paragraph (>=80 words), at least 2 sections each with a heading and a body (>=100 words), and a summary paragraph.
  - practiceQuestions: EXACTLY 10 novel multiple-choice questions (4 options each, one correct, a >=40-word explanation). These must be NEW questions inspired by the topic, never verbatim copies from the catalog.
  - flashcards: at least 8 cards (short front, concise back).
- All other lessons: title + objectives only.
- Be accurate to the subject matter. Do not invent regulations that contradict the source.`;

export async function generateCourse(syllabusText: string, nicheHint?: string): Promise<Course> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("NO_API_KEY");

  const client = new Anthropic({ apiKey });
  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";

  // Keep token usage sane on very large catalogs.
  const trimmed = syllabusText.slice(0, 40000);

  const userText =
    (nicheHint ? `The target exam/niche is: ${nicheHint}.\n\n` : "") +
    `Here is the exam syllabus / question catalog text:\n\n${trimmed}`;

  const res = await client.messages.create({
    model,
    max_tokens: 8000,
    system: SYSTEM,
    tools: [COURSE_TOOL],
    tool_choice: { type: "tool", name: "emit_course" },
    messages: [{ role: "user", content: userText }],
  });

  const toolUse = res.content.find((b) => b.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error("Model did not return a structured course.");
  }

  const data = toolUse.input as Omit<Course, "source" | "sampleLesson">;
  return {
    ...data,
    source: "ai",
    sampleLesson: { moduleIndex: 0, lessonIndex: 0 },
  };
}
