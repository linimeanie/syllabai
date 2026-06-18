"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import type { Course, Lesson, PracticeQuestion } from "@/lib/types";
import {
  BookOpen,
  GraduationCap,
  ListChecks,
  Layers,
  CheckCircle2,
  XCircle,
  Store,
  Sparkles,
  CalendarDays,
  Timer,
  Trophy,
  Play,
  RotateCcw,
} from "lucide-react";

type Tab = "curriculum" | "lesson" | "practice" | "flashcards" | "schedule" | "exam";

export default function CourseView({ course }: { course: Course }) {
  const [tab, setTab] = useState<Tab>("curriculum");
  const sample: Lesson | undefined =
    course.modules[course.sampleLesson.moduleIndex]?.lessons[course.sampleLesson.lessonIndex];

  const moduleCount = course.modules.length;
  const lessonCount = course.modules.reduce((n, m) => n + m.lessons.length, 0);

  // All AI-generated questions across the course form the exam question bank.
  const examPool = useMemo(
    () => course.modules.flatMap((m) => m.lessons.flatMap((l) => l.practiceQuestions ?? [])),
    [course]
  );

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "curriculum", label: "Curriculum", icon: <Layers size={16} /> },
    { id: "schedule", label: "Schedule", icon: <CalendarDays size={16} /> },
    { id: "lesson", label: "Sample lesson", icon: <BookOpen size={16} /> },
    { id: "practice", label: `Practice (${sample?.practiceQuestions?.length ?? 0})`, icon: <ListChecks size={16} /> },
    { id: "flashcards", label: `Flashcards (${sample?.flashcards?.length ?? 0})`, icon: <GraduationCap size={16} /> },
    { id: "exam", label: "Exam simulation", icon: <Timer size={16} /> },
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
            <div className="flex gap-4 mt-4 text-sm text-stone-500 flex-wrap">
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
        {tab === "schedule" && <Schedule course={course} />}
        {tab === "lesson" && <SampleLesson lesson={sample} />}
        {tab === "practice" && <Practice lesson={sample} />}
        {tab === "flashcards" && <Flashcards lesson={sample} />}
        {tab === "exam" && <ExamSimulation pool={examPool} examName={course.examName} />}
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

// ---------- Schedule / learning path ----------

const PACES: Record<string, { label: string; perWeek: number }> = {
  relaxed: { label: "Relaxed (2 lessons/week)", perWeek: 2 },
  standard: { label: "Standard (4 lessons/week)", perWeek: 4 },
  intensive: { label: "Intensive (8 lessons/week)", perWeek: 8 },
};

function Schedule({ course }: { course: Course }) {
  const [pace, setPace] = useState<keyof typeof PACES>("standard");
  const perWeek = PACES[pace].perWeek;

  const flatLessons = useMemo(
    () =>
      course.modules.flatMap((m) =>
        m.lessons.map((l) => ({ module: m.title, lesson: l.title }))
      ),
    [course]
  );

  const weeks = useMemo(() => {
    const out: { module: string; lesson: string }[][] = [];
    for (let i = 0; i < flatLessons.length; i += perWeek) {
      out.push(flatLessons.slice(i, i + perWeek));
    }
    return out;
  }, [flatLessons, perWeek]);

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        <p className="text-sm text-stone-600">
          A suggested study plan / learning path generated from the curriculum — {flatLessons.length}{" "}
          lessons over {weeks.length + 1} weeks, ending with a mock exam.
        </p>
        <select
          value={pace}
          onChange={(e) => setPace(e.target.value as keyof typeof PACES)}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm bg-white"
        >
          {Object.entries(PACES).map(([k, v]) => (
            <option key={k} value={k}>
              {v.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {weeks.map((wk, wi) => (
          <div key={wi} className="rounded-xl border border-stone-200 bg-white flex overflow-hidden">
            <div className="w-24 shrink-0 bg-sky-50 text-sky-800 flex flex-col items-center justify-center py-3 border-r border-sky-100">
              <span className="text-xs uppercase tracking-wide">Week</span>
              <span className="text-2xl font-bold">{wi + 1}</span>
            </div>
            <ul className="flex-1 divide-y divide-stone-100">
              {wk.map((item, ii) => (
                <li key={ii} className="px-4 py-2.5">
                  <div className="text-sm font-medium text-stone-800">{item.lesson}</div>
                  <div className="text-xs text-stone-400">{item.module}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Final exam week */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 flex overflow-hidden">
          <div className="w-24 shrink-0 bg-emerald-100 text-emerald-800 flex flex-col items-center justify-center py-3">
            <span className="text-xs uppercase tracking-wide">Week</span>
            <span className="text-2xl font-bold">{weeks.length + 1}</span>
          </div>
          <div className="flex-1 px-4 py-3 flex items-center gap-2 text-emerald-800">
            <Trophy size={18} />
            <span className="text-sm font-medium">
              Final revision + mock exam simulation, then sit the real {course.niche} exam.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SampleLesson({ lesson }: { lesson?: Lesson }) {
  if (!lesson?.content) return <Empty text="No sample lesson content available." />;
  const c = lesson.content;
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-7 max-w-none">
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

function PracticeCard({ index, q }: { index: number; q: PracticeQuestion }) {
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

// ---------- Exam simulation ----------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const PASS_THRESHOLD = 0.7;
const SECONDS_PER_Q = 45;

function ExamSimulation({ pool, examName }: { pool: PracticeQuestion[]; examName: string }) {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);

  const total = questions.length;

  const finish = useCallback(() => setPhase("done"), []);

  const start = useCallback(() => {
    const qs = shuffle(pool);
    setQuestions(qs);
    setAnswers({});
    setTimeLeft(qs.length * SECONDS_PER_Q);
    setPhase("running");
  }, [pool]);

  // Countdown timer with auto-submit.
  useEffect(() => {
    if (phase !== "running") return;
    if (timeLeft <= 0) {
      finish();
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft, finish]);

  if (pool.length === 0) return <Empty text="No questions available to build an exam yet." />;

  if (phase === "idle") {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center">
        <Timer size={32} className="text-sky-600 mx-auto" />
        <h3 className="text-lg font-bold text-stone-900 mt-3">Mock exam — {examName}</h3>
        <p className="text-stone-600 mt-2 max-w-md mx-auto text-sm">
          {pool.length} questions · {Math.ceil((pool.length * SECONDS_PER_Q) / 60)} min limit · pass
          mark {Math.round(PASS_THRESHOLD * 100)}%. Questions are shuffled and auto-submit when time
          runs out — just like the real exam.
        </p>
        <button
          onClick={start}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white px-5 py-3 font-medium hover:bg-sky-700"
        >
          <Play size={16} /> Start mock exam
        </button>
      </div>
    );
  }

  if (phase === "running") {
    const answeredCount = Object.keys(answers).length;
    const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const ss = String(timeLeft % 60).padStart(2, "0");
    const low = timeLeft <= 30;
    return (
      <div>
        <div className="sticky top-16 z-10 flex items-center justify-between bg-white border border-stone-200 rounded-xl px-4 py-3 mb-4">
          <span className="text-sm text-stone-600">
            {answeredCount}/{total} answered
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-mono font-semibold ${
              low ? "text-red-600" : "text-stone-800"
            }`}
          >
            <Timer size={16} /> {mm}:{ss}
          </span>
        </div>
        <div className="space-y-4">
          {questions.map((q, i) => (
            <div key={i} className="rounded-xl border border-stone-200 bg-white p-5">
              <div className="font-medium text-stone-900">
                <span className="text-stone-400 mr-2">{i + 1}.</span>
                {q.question}
              </div>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => (
                  <label
                    key={oi}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm cursor-pointer transition ${
                      answers[i] === oi
                        ? "border-sky-400 bg-sky-50"
                        : "border-stone-200 hover:border-sky-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${i}`}
                      checked={answers[i] === oi}
                      onChange={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                    />
                    <span>
                      <span className="text-stone-400 mr-2">{String.fromCharCode(97 + oi)})</span>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={finish}
          className="mt-5 w-full rounded-xl bg-stone-900 text-white px-5 py-3.5 font-medium hover:bg-stone-700"
        >
          Submit exam
        </button>
      </div>
    );
  }

  // done
  const correct = questions.reduce((n, q, i) => n + (answers[i] === q.correctIndex ? 1 : 0), 0);
  const pct = total > 0 ? correct / total : 0;
  const passed = pct >= PASS_THRESHOLD;
  return (
    <div>
      <div
        className={`rounded-xl border p-6 text-center ${
          passed ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"
        }`}
      >
        <Trophy size={30} className={`mx-auto ${passed ? "text-emerald-600" : "text-red-500"}`} />
        <div className="text-3xl font-bold mt-2 text-stone-900">{Math.round(pct * 100)}%</div>
        <div className={`font-semibold mt-1 ${passed ? "text-emerald-700" : "text-red-600"}`}>
          {passed ? "Bestanden ✓" : "Nicht bestanden"} · {correct}/{total} correct
        </div>
        <button
          onClick={start}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium hover:bg-stone-50"
        >
          <RotateCcw size={15} /> Try again
        </button>
      </div>

      <h4 className="font-semibold text-stone-800 mt-6 mb-3">Review</h4>
      <div className="space-y-4">
        {questions.map((q, i) => {
          const yours = answers[i];
          const isCorrect = yours === q.correctIndex;
          return (
            <div key={i} className="rounded-xl border border-stone-200 bg-white p-5">
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                )}
                <div className="font-medium text-stone-900">
                  <span className="text-stone-400 mr-2">{i + 1}.</span>
                  {q.question}
                </div>
              </div>
              <div className="mt-2 ml-7 text-sm space-y-1">
                <div className="text-emerald-700">
                  Richtig: {String.fromCharCode(97 + q.correctIndex)}) {q.options[q.correctIndex]}
                </div>
                {yours !== undefined && !isCorrect && (
                  <div className="text-red-600">
                    Deine Antwort: {String.fromCharCode(97 + yours)}) {q.options[yours]}
                  </div>
                )}
                {yours === undefined && <div className="text-stone-400">Nicht beantwortet</div>}
                <div className="text-stone-600 pt-1">{q.explanation}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-400">
      {text}
    </div>
  );
}
