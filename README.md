# Syllabai

**From exam syllabus to a complete course in minutes.**

AI-native curriculum software & marketplace for regulated niche exams (sailing licence, security-guard §34a, pilot theory, trades, care work). Built as an MVP for the "go-niche, AI-native tes.com" case. Beachhead niche: **Sportbootführerschein (SBF) Binnen**.

## What it does

1. **Upload / paste** an official exam question catalog (PDF, .txt, or pasted text).
2. The **AI engine** turns it into a structured course: modules → lessons → learning objectives, plus one fully written **sample lesson**, **10 practice questions** with explanations, and **flashcards**.
3. A **marketplace** mockup shows how schools package and sell those courses (80% creator / 20% platform).

The generation engine is **niche-agnostic** — the same pipeline works on any closed exam catalog.

## Tech

- Next.js 14 (App Router) + TypeScript + Tailwind
- Anthropic Claude (`claude-sonnet-4-6`) via tool-use for structured output
- `unpdf` for serverless PDF text extraction
- Deploys to Vercel as-is

## Run locally

```bash
npm install
cp .env.example .env.local   # then paste your key into .env.local (optional)
npm run dev                  # http://localhost:3000
```

**Without an API key the app still works** — it serves a baked-in SBF Binnen sample course, so the live link never looks broken. Add a key to generate live from any uploaded syllabus.

Get a key at https://console.anthropic.com → set `ANTHROPIC_API_KEY`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com): **Add New → Project → import the repo**.
3. (Optional) Add environment variable `ANTHROPIC_API_KEY` in project settings.
4. Deploy. You get a live `https://….vercel.app` link.

## Structure

```
app/page.tsx              Generator (input → result)
app/marketplace/page.tsx  Marketplace listing mockup
app/api/generate/route.ts API: parse syllabus → Claude → structured course (demo fallback)
lib/generate.ts           Claude prompt + forced-JSON tool schema
lib/demo.ts               Baked-in SBF sample course
lib/sampleSyllabus.ts     ELWIS-style sample input for the "Load sample" button
components/CourseView.tsx  Tabbed course viewer (curriculum / lesson / practice / flashcards)
```
