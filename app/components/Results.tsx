"use client";

import { useMemo, useState } from "react";
import type { Attempt, Category } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import { scoreAttempt } from "@/lib/engine";

const CATEGORY_HACKS: Record<Category, string[]> = {
  verbal: [
    "Phrase analogies as a sentence and reuse it for the second pair.",
    "Watch for 'three synonyms + one antonym' traps in same/opposite questions.",
    "Circle linking words (although, because, despite) — they flip the meaning of a blank.",
    "'If A then not-B' deductions: use the contrapositive, it's almost always an option.",
  ],
  numerical: [
    "Turn percentages into multipliers (×1.25, ×0.9) and chain them in order.",
    "Convert every average into a total (average × count) before doing anything.",
    "Build odd percentages from 10% and 5% blocks.",
    "Estimate first — eliminate answers that are obviously too big or too small.",
  ],
  logical: [
    "Map letters to numbers (A=1…Z=26) to crack letter series instantly.",
    "Memorise contrapositive: 'if A then B' + 'not B' = 'not A'.",
    "Draw nested circles for all/some/none syllogisms.",
    "Replace family/relation phrases with the actual person step by step.",
  ],
  abstract: [
    "Track one changing attribute at a time: count, rotation, size, shading.",
    "Visual quantity patterns are just number series — count and find the step.",
    "Know your squares to 15² and the early Fibonacci numbers cold.",
    "For grids, test add / subtract / multiply on the first two cells of each row.",
  ],
};

function pacingNote(avg: number, unanswered: number): string {
  if (unanswered > 8)
    return "You left a lot blank — work faster and guess on anything you can't crack in ~25s. A blank scores the same as a wrong answer, so never leave one.";
  if (avg > 35)
    return "You're spending too long per question. Set a mental 30-second cap and move on; flag and return if time allows.";
  if (avg < 18 && unanswered === 0)
    return "Great pace. If accuracy is below target, you can afford to slow down slightly and read more carefully.";
  return "Solid pacing. Keep the ~30-second-per-question rhythm and bank time on the easy ones for the hard ones.";
}

export default function Results({
  attempt,
  onRetake,
  onHome,
}: {
  attempt: Attempt;
  onRetake: () => void;
  onHome: () => void;
}) {
  const result = useMemo(() => scoreAttempt(attempt), [attempt]);
  const [filter, setFilter] = useState<"all" | "wrong">("all");
  const pct = Math.round((result.correct / result.total) * 100);

  const reviewItems = attempt.test.questions
    .map((q, i) => ({ q, i }))
    .filter(({ i }) => {
      if (filter === "all") return true;
      return attempt.answers[i] !== attempt.test.questions[i].answerIndex;
    });

  return (
    <div className="space-y-8">
      {/* Score hero */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Your result
        </p>
        <div className="mt-2 text-5xl font-bold text-slate-900">
          {result.correct}
          <span className="text-2xl text-slate-400"> / {result.total}</span>
        </div>
        <p className="mt-1 text-slate-600">{pct}% correct</p>
        <div className="mx-auto mt-4 max-w-md rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Estimated percentile band:{" "}
          <strong className="text-slate-900">
            ~{result.estimatedPercentile}th
          </strong>{" "}
          <span className="text-slate-400">
            (rough CCAT-style guide, not an official score)
          </span>
        </div>
      </div>

      {/* Category breakdown */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          By category
        </h2>
        <div className="mt-4 space-y-4">
          {result.byCategory.map((c) => {
            const cpct = c.total ? Math.round((c.correct / c.total) * 100) : 0;
            return (
              <div key={c.category}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">
                    {CATEGORY_LABELS[c.category]}
                  </span>
                  <span className="text-slate-500">
                    {c.correct}/{c.total} ({cpct}%)
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full ${
                      cpct >= 70
                        ? "bg-emerald-500"
                        : cpct >= 50
                        ? "bg-amber-400"
                        : "bg-red-400"
                    }`}
                    style={{ width: `${cpct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pacing */}
      <section className="grid gap-4 sm:grid-cols-3">
        <MiniStat
          label="Answered"
          value={`${result.answered}/${result.total}`}
        />
        <MiniStat
          label="Avg / question"
          value={`${Math.round(result.avgSecondsPerQuestion)}s`}
        />
        <MiniStat
          label="Focus losses"
          value={`${attempt.focusLosses}`}
          warn={attempt.focusLosses > 0}
        />
      </section>
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        💡 {pacingNote(result.avgSecondsPerQuestion, result.unanswered)}
      </div>

      {/* Category hacks */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">
          Speed hacks by question type
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {(Object.keys(CATEGORY_HACKS) as Category[]).map((cat) => (
            <div key={cat} className="rounded-xl bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-brand">
                {CATEGORY_LABELS[cat]}
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                {CATEGORY_HACKS[cat].map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Full review */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">
            Answer review
          </h2>
          <div className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-md px-3 py-1 font-medium ${
                filter === "all"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("wrong")}
              className={`rounded-md px-3 py-1 font-medium ${
                filter === "wrong"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Mistakes only
            </button>
          </div>
        </div>

        {reviewItems.length === 0 && (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            No mistakes to review here — nice work. 🎉
          </p>
        )}

        {reviewItems.map(({ q, i }) => {
          const chosen = attempt.answers[i];
          const isCorrect = chosen === q.answerIndex;
          const isBlank = chosen === null || chosen === undefined;
          return (
            <div
              key={q.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Q{i + 1} · {CATEGORY_LABELS[q.category]}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    isCorrect
                      ? "bg-emerald-100 text-emerald-700"
                      : isBlank
                      ? "bg-slate-100 text-slate-500"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {isCorrect ? "Correct" : isBlank ? "Skipped" : "Incorrect"}
                </span>
              </div>

              <p className="prompt-text font-medium text-slate-900">
                {q.prompt}
              </p>
              {q.svg && (
                <div
                  className="my-3 flex justify-center text-slate-800"
                  dangerouslySetInnerHTML={{ __html: q.svg }}
                />
              )}

              <div className="mt-3 space-y-1.5">
                {q.options.map((opt, oi) => {
                  const isAnswer = oi === q.answerIndex;
                  const isChosen = oi === chosen;
                  return (
                    <div
                      key={oi}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                        isAnswer
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                          : isChosen
                          ? "border-red-300 bg-red-50 text-red-900"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      <span className="font-semibold">
                        {String.fromCharCode(65 + oi)}.
                      </span>
                      <span>{opt}</span>
                      {isAnswer && (
                        <span className="ml-auto text-xs font-semibold text-emerald-700">
                          ✓ correct
                        </span>
                      )}
                      {isChosen && !isAnswer && (
                        <span className="ml-auto text-xs font-semibold text-red-600">
                          your answer
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
                <strong className="text-slate-900">Why:</strong> {q.explanation}
              </div>
              <div className="mt-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-900">
                <strong>⚡ Hack:</strong> {q.tip}
              </div>
            </div>
          );
        })}
      </section>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          onClick={onRetake}
          className="rounded-xl bg-brand px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Take another test →
        </button>
        <button
          onClick={onHome}
          className="rounded-xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  warn,
}: {
  label: string;
  value: string;
  warn?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div
        className={`text-2xl font-bold ${
          warn ? "text-red-600" : "text-slate-900"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}
