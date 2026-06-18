"use client";

import { useState } from "react";
import Link from "next/link";
import { SAMPLE_SYLLABUS } from "@/lib/sampleSyllabus";
import type { Course } from "@/lib/types";
import CourseView from "@/components/CourseView";
import { Upload, Wand2, FileText, Loader2, Ship, Store, RotateCcw } from "lucide-react";

const NICHES = [
  "Sportbootführerschein (sailing licence)",
  "§34a Sachkundeprüfung (security guard)",
  "Pilot theory / PPL",
  "Hairdresser journeyman exam",
  "Care-worker recognition course",
];

export default function Home() {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [niche, setNiche] = useState(NICHES[0]);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<Course | null>(null);
  const [demo, setDemo] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("text", text);
      form.append("niche", niche);
      if (file) form.append("file", file);
      const res = await fetch("/api/generate", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Generation failed.");
      } else {
        setCourse(data.course);
        setDemo(!!data.demo);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setCourse(null);
    setError(null);
  }

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-lg">
            <Ship size={22} className="text-sky-600" />
            Syllabai
          </div>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900"
          >
            <Store size={16} /> Marketplace
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-10">
        {!course && (
          <>
            {/* Hero */}
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 text-balance">
                From exam syllabus to a complete course in minutes
              </h1>
              <p className="mt-4 text-lg text-stone-600 text-balance">
                AI-native curriculum software & marketplace for regulated niche exams. Upload an
                official question catalog — get a structured curriculum, a written lesson, practice
                questions and flashcards, ready to sell.
              </p>
            </div>

            {/* Input card */}
            <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Target exam / niche
              </label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm mb-5 bg-white"
              >
                {NICHES.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <label className="block text-sm font-medium text-stone-700 mb-1.5">
                Paste the exam syllabus / question catalog
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste the official question catalog or syllabus text here…"
                rows={8}
                className="w-full rounded-lg border border-stone-300 px-3 py-2.5 text-sm font-mono resize-y"
              />

              <div className="flex flex-wrap items-center gap-3 mt-3">
                <label className="inline-flex items-center gap-2 rounded-lg border border-stone-300 px-3 py-2 text-sm cursor-pointer hover:bg-stone-50">
                  <Upload size={15} />
                  {fileName ? "Change PDF" : "Upload PDF / .txt"}
                  <input
                    type="file"
                    accept=".pdf,.txt"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0] || null;
                      setFile(f);
                      setFileName(f?.name || null);
                    }}
                  />
                </label>
                {fileName && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-stone-500">
                    <FileText size={14} /> {fileName}
                  </span>
                )}
                <button
                  onClick={() => {
                    setText(SAMPLE_SYLLABUS);
                    setFile(null);
                    setFileName(null);
                  }}
                  className="text-sm text-sky-700 hover:underline ml-auto"
                >
                  Load sample (SBF Binnen)
                </button>
              </div>

              {error && (
                <div className="mt-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                onClick={generate}
                disabled={loading}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3.5 font-medium hover:bg-sky-700 disabled:opacity-60 transition"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Generating course…
                  </>
                ) : (
                  <>
                    <Wand2 size={18} /> Generate course
                  </>
                )}
              </button>
              <p className="text-xs text-stone-400 mt-3 text-center">
                The engine is niche-agnostic: the same pipeline turns any closed exam catalog —
                sailing, security, flight theory, trades — into a course.
              </p>
            </div>

            {/* Three building blocks */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {[
                {
                  t: "Curriculum software",
                  d: "Modules, lessons and learning objectives generated and structured automatically.",
                },
                {
                  t: "Content & materials",
                  d: "Written lessons, practice questions with explanations, and flashcards.",
                },
                {
                  t: "Marketplace",
                  d: "Package and sell your course to other schools — 80% to you, 20% commission.",
                },
              ].map((b) => (
                <div key={b.t} className="rounded-xl border border-stone-200 bg-white p-5">
                  <div className="font-semibold text-stone-900">{b.t}</div>
                  <p className="text-sm text-stone-600 mt-1.5">{b.d}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {course && (
          <>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 mb-5"
            >
              <RotateCcw size={15} /> Generate another course
            </button>
            {demo && (
              <div className="mb-5 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
                Showing sample data — no <code>ANTHROPIC_API_KEY</code> is configured on this
                deployment. Add one to generate live from any uploaded syllabus.
              </div>
            )}
            <CourseView course={course} />
          </>
        )}
      </div>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-400">
        Syllabai — AI curriculum software & marketplace for niche exams · Demo built with Claude
      </footer>
    </main>
  );
}
