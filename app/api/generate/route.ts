import { NextRequest, NextResponse } from "next/server";
import { generateCourse } from "@/lib/generate";
import { getDemoCourse } from "@/lib/demo";

export const runtime = "nodejs";
export const maxDuration = 60;

async function extractText(req: NextRequest): Promise<{ text: string; niche?: string }> {
  const contentType = req.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await req.json();
    return { text: body.text || "", niche: body.niche };
  }

  // multipart/form-data: optional pasted text + optional file
  const form = await req.formData();
  const niche = (form.get("niche") as string) || undefined;
  let text = (form.get("text") as string) || "";

  const file = form.get("file") as File | null;
  if (file && file.size > 0) {
    const buf = Buffer.from(await file.arrayBuffer());
    if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      const { extractText: extractPdf, getDocumentProxy } = await import("unpdf");
      const pdf = await getDocumentProxy(new Uint8Array(buf));
      const { text: pdfText } = await extractPdf(pdf, { mergePages: true });
      text = pdfText;
    } else {
      text = buf.toString("utf-8");
    }
  }

  return { text, niche };
}

export async function POST(req: NextRequest) {
  try {
    const { text, niche } = await extractText(req);

    const hasKey = !!(process.env.GROQ_API_KEY || process.env.ANTHROPIC_API_KEY);
    if (!hasKey) {
      // Live-link fallback: always return a believable course.
      return NextResponse.json({ course: getDemoCourse(niche), demo: true });
    }

    if (!text || text.trim().length < 30) {
      return NextResponse.json(
        { error: "No usable syllabus text found. Paste some text or upload a PDF." },
        { status: 400 }
      );
    }

    const course = await generateCourse(text, niche);
    return NextResponse.json({ course, demo: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Generation failed.";
    if (message === "NO_API_KEY") {
      return NextResponse.json({ course: getDemoCourse(), demo: true });
    }
    console.error("generate error:", err);
    return NextResponse.json(
      { error: "Generation failed. Please try again or use the sample.", detail: message },
      { status: 500 }
    );
  }
}
