# CCA Practice — Cognitive Aptitude Test Trainer

A timed practice-test web app in the style of the **CriteriaCorp / SHL cognitive
aptitude assessment** used in the **Revolut** hiring process (e.g. Strategy &
Operations Manager). Built with **Next.js (App Router) + TypeScript + Tailwind**,
designed to deploy on **Vercel** from **GitHub**.

## Features

- **40 questions, 20:00 strict countdown** — single non-pausable timer, just like the real test.
- Four reasoning types: **verbal, numerical, logical, abstract/spatial** (some abstract items render as inline SVG).
- Each attempt is **freshly sampled and shuffled** from a curated bank (questions *and* answer options shuffle).
- **Flag** questions, jump around with a **question navigator**, change answers any time before submitting.
- **Focus-loss detection** — counts tab/window switches, mirroring live proctoring.
- Full **results screen**: score, estimated percentile band, per-category breakdown, pacing analysis, and a
  complete **answer review** with a worked explanation **and a speed hack** for every question.
- Built-in **"speed hacks by question type"** cheat-sheet.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build / production check:

```bash
npm run build
npm start
```

## Deploy to Vercel from GitHub

1. Create a new GitHub repo and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: CCA practice trainer"
   git branch -M main
   git remote add origin https://github.com/<you>/cca-practice.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), **Import** the repo.
3. Framework preset auto-detects **Next.js** — no config needed. Click **Deploy**.
4. Every push to `main` redeploys automatically.

No environment variables or database are required — the question bank is static and bundled.

## Adding more questions

The bank lives in `lib/questions/{verbal,numerical,logical,abstract}.ts`. Each item is a
`Question` (see `lib/types.ts`):

```ts
{
  id: "num-017",
  category: "numerical",
  difficulty: 2,            // 1 easy · 2 medium · 3 hard
  prompt: "….",            // newlines are preserved
  svg: "<svg …>…</svg>",   // optional, for visual/abstract items
  options: ["A", "B", "C", "D"],
  answerIndex: 1,           // index of the correct option
  explanation: "Why this is right.",
  tip: "A fast tactic for this type under time pressure.",
}
```

Add objects to the relevant array — they're picked up automatically. The test
assembler (`lib/engine.ts`) samples 10 verbal / 12 numerical / 10 logical / 8
abstract per 40-question test; grow each category bank for more variety across
repeated attempts.

## Project structure

```
app/
  layout.tsx            Root layout + metadata
  page.tsx              View orchestrator (home → running → results)
  globals.css           Tailwind + base styles
  components/
    Home.tsx            Landing / instructions
    TestRunner.tsx      Timed engine, navigator, focus detection
    Results.tsx         Scoring, breakdown, full review, hacks
lib/
  types.ts              Shared types
  bank.ts               Combines category banks
  engine.ts             Test assembly + scoring
  questions/*.ts        Curated question banks by category
```

## Disclaimer

Unofficial study aid. Not affiliated with, endorsed by, or using content from
Revolut, CriteriaCorp, or SHL. Questions are original and written to *resemble*
the public practice format only.
