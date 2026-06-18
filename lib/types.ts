// Niche-agnostic curriculum data model.
// The same shapes are produced whether the source syllabus is a sailing
// licence, a security-guard exam, or a hairdresser journeyman exam.

export type PracticeQuestion = {
  question: string;
  options: string[]; // exactly 4
  correctIndex: number; // 0-3
  explanation: string;
};

export type Flashcard = {
  front: string;
  back: string;
};

export type LessonContent = {
  intro: string;
  sections: { heading: string; body: string }[];
  summary: string;
};

export type Lesson = {
  title: string;
  objectives: string[];
  // Only the generated sample lesson carries rich content.
  content?: LessonContent;
  practiceQuestions?: PracticeQuestion[];
  flashcards?: Flashcard[];
};

export type Module = {
  title: string;
  lessons: Lesson[];
};

export type Course = {
  title: string;
  description: string;
  niche: string; // e.g. "Sportbootführerschein Binnen"
  language: string; // "de" | "en"
  examName: string;
  modules: Module[];
  // index path to the enriched sample lesson, always [0, 0] for the MVP
  sampleLesson: { moduleIndex: number; lessonIndex: number };
  source: "ai" | "demo";
};
