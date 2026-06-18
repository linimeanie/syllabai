"use client";

import { useState } from "react";
import Link from "next/link";
import type { Course, Lesson } from "@/lib/types";
import {
  BookOpen,
  GraduationCap,
  ListChecks,
  Layers,
  CheckCircle2,
  XCircle,
  Store,
  Sparkles,
} from "lucide-react";

type Tab = "curriculum" | "lesson" | "practice" | "flashcards";

export default function CourseView({ course }: { course: Course }) {
  const [tab, setTab] = useState<Tab>("curriculum");
  const sample: Lesson | undefined =
    course.modules[course.sampleLesson.moduleIndex]?.lessons[course.sampleLesson.lessonIndex];

  const moduleCount = course.modules.length;
  const lessonCount = course.modules.reduce((n, m) => n + m.lessons.length, 0);

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "curriculum", label: "Curriculum", icon: <Layers size={16} /> },
    { id: "lesson", label: "Sample lesson", icon: <BookOpen size={16} /> },
    { id: "practice", label: `Practice (${sample?.practiceQuestions?.length ?? 0})`, icon: <ListChecks size={16} /> },
    { id: "flashcards", label: `Flashcards (${sample?.flashcards?.length ?? 0})`, icon: <GraduationCap size={16} /> },
  ];

  return (
    <div className="w-full">
      {/* Header card */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-sky-700 bg-sky-50 rounded-full px-3 py-1 w-fit mb-3">
              <Sparkles size={13} />
              {course.source === "ai" ? "AI-generated from your syllabus" : "Sample course (demo data)"}
            </div>
            <h2 className="text-2xl font-bold text-stone-900">{course.title}</h2>
            <p className="text-stone-600 mt-2 max-w-2xl">{course.description}</p>
            <div className="flex gap-4 mt-4 text-sm text-stone-500">
              <span>📦 {moduleCount} modules</span>
              <span>📘 {lessonCount} lessons</span>
              <span>🎯 {course.niche}</span>
            </div>
          </div>
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 rounded-xl bg-stone-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-stone-700 transition"
          >
            <Store size={16} /> Publish to marketplace
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mt-6 border-b border-stone-200 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px whitespace-nowrap transition ${
              tab === t.id
                ? "border-sky-600 text-sky-700"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "curriculum" && <Curriculum course={course} />}
        {tab === "lesson" && <SampleLesson lesson={sample} />}
        {tab === "practice" && <Practice lesson={sample} />}
        {tab === "flashcards" && <Flashcards lesson={sample} />}
      </div>
    </div>
  );
}

function Curriculum({ course }: { course: Course }) {
  return (
    <div className="space-y-4">
      {course.modules.map((m, mi) => (
        <div key={mi} className="rounded-xl border border-stone-200 bg-white overflow-hidden">
          <div className="bg-stone-50 px-5 py-3 font-semibold text-stone-800">{m.title}</div>
          <ul className="divide-y divide-stone-100">
            {m.lessons.map((l, li) => {
              const isSample =
                mi === course.sampleLesson.moduleIndex && li === course.sampleLesson.lessonIndex;
              return (
                <li key={li} className="px-5 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-stone-800">{l.title}</span>
                    {isSample && (
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-0.5">
                        fully generated ↓
                      </span>
                    )}
                  </div>
                  {l.objectives?.length > 0 && (
                    <ul className="mt-1.5 ml-4 list-disc text-sm text-stone-500 space-y-0.5">
                      {l.objectives.map((o, oi) => (
                        <li key={oi}>{o}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SampleLesson({ lesson }: { lesson?: Lesson }) {
  if (!lesson?.content) return <Empty text="No sample lesson content available." />;
  const c = lesson.content;
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-7 prose-stone max-w-none">
      <h3 className="text-xl font-bold text-stone-900">{lesson.title}</h3>
      {lesson.objectives?.length > 0 && (
        <div className="mt-3 rounded-lg bg-sky-50 border border-sky-100 p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-sky-700 mb-1.5">
            Learning objectives
          </div>
          <ul className="list-disc ml-5 text-sm text-stone-700 space-y-1">
            {lesson.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-5 text-stone-700 leading-relaxed">{c.intro}</p>
      {c.sections.map((s, i) => (
        <div key={i} className="mt-5">
          <h4 className="font-semibold text-stone-900">{s.heading}</h4>
          <p className="mt-1.5 text-stone-700 leading-relaxed">{s.body}</p>
        </div>
      ))}
      <div className="mt-6 rounded-lg bg-stone-50 border border-stone-200 p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1.5">
          Summary
        </div>
        <p className="text-stone-700 leading-relaxed">{c.summary}</p>
      </div>
    </article>
  );
}

function Practice({ lesson }: { lesson?: Lesson }) {
  const qs = lesson?.practiceQuestions ?? [];
  if (qs.length === 0) return <Empty text="No practice questions available." />;
  return (
    <div className="space-y-4">
      {qs.map((q, i) => (
        <PracticeCard key={i} index={i} q={q} />
      ))}
    </div>
  );
}

function PracticeCard({ index, q }: { index: number; q: import("@/lib/types").PracticeQuestion }) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="font-medium text-stone-900">
        <span className="text-stone-400 mr-2">{index + 1}.</span>
        {q.question}
      </div>
      <div className="mt-3 space-y-2">
        {q.options.map((opt, oi) => {
          const isCorrect = oi === q.correctIndex;
          const show = answered && (oi === picked || isCorrect);
          return (
            <button
              key={oi}
              disabled={answered}
              onClick={() => setPicked(oi)}
              className={`w-full text-left rounded-lg border px-4 py-2.5 text-sm flex items-center justify-between transition ${
                show
                  ? isCorrect
                    ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                    : "border-red-300 bg-red-50 text-red-900"
                  : "border-stone-200 hover:border-sky-300 hover:bg-sky-50/50"
              }`}
            >
              <span>
                <span className="text-stone-400 mr-2">{String.fromCharCode(97 + oi)})</span>
                {opt}
              </span>
              {show && isCorrect && <CheckCircle2 size={18} className="text-emerald-600" />}
              {show && !isCorrect && oi === picked && <XCircle size={18} className="text-red-500" />}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 rounded-lg bg-stone-50 border border-stone-200 p-3 text-sm text-stone-700">
          <span className="font-semibold">Erklärung: </span>
          {q.explanation}
        </div>
      )}
    </div>
  );
}

function Flashcards({ lesson }: { lesson?: Lesson }) {
  const cards = lesson?.flashcards ?? [];
  if (cards.length === 0) return <Empty text="No flashcards available." />;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card, i) => (
        <FlashcardItem key={i} front={card.front} back={card.back} />
      ))}
    </div>
  );
}

function FlashcardItem({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      className={`flip-card h-40 text-left ${flipped ? "flipped" : ""}`}
    >
      <div className="flip-inner h-full w-full">
        <div className="flip-face absolute inset-0 rounded-xl border border-stone-200 bg-white p-4 flex items-center justify-center text-center shadow-sm">
          <span className="font-semibold text-stone-900">{front}</span>
        </div>
        <div className="flip-face flip-back absolute inset-0 rounded-xl border border-sky-200 bg-sky-50 p-4 flex items-center justify-center text-center">
          <span className="text-sm text-stone-700">{back}</span>
        </div>
      </div>
    </button>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-400">
      {text}
    </div>
  );
}
