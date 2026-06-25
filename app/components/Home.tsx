"use client";

import { TEST_SIZE, DURATION_SECONDS } from "@/lib/engine";
import { bankStats } from "@/lib/bank";

const minutes = Math.round(DURATION_SECONDS / 60);

export default function Home({ onStart }: { onStart: () => void }) {
  const stats = bankStats();

  return (
    <div className="space-y-8">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Cognitive Aptitude Trainer
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Practice Test — Revolut S&amp;O style
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          A timed simulation in the style of the CriteriaCorp&nbsp;/&nbsp;SHL
          cognitive aptitude assessment: verbal, numerical, logical and abstract
          reasoning. Mirrors the real format so you can build speed and accuracy
          before the live test.
        </p>
      </header>

      <section className="grid grid-cols-3 gap-3 text-center">
        <Stat value={`${TEST_SIZE}`} label="Questions" />
        <Stat value={`${minutes}:00`} label="Minutes (strict)" />
        <Stat value={`${Math.round((DURATION_SECONDS / TEST_SIZE) * 10) / 10}s`} label="Per question" />
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">How it works</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>
            • <strong>{TEST_SIZE} questions in {minutes} minutes</strong>, a
            single strict countdown that cannot be paused — exactly like the real
            assessment.
          </li>
          <li>
            • Questions are sampled from a pool of{" "}
            <strong>{stats.total}</strong> items ({stats.verbal} verbal,{" "}
            {stats.numerical} numerical, {stats.logical} logical,{" "}
            {stats.abstract} abstract). Each attempt is freshly shuffled.
          </li>
          <li>
            • You can flag questions, jump around with the navigator, and change
            answers any time before submitting.
          </li>
          <li>
            • At the end you get your score, a per-category breakdown, pacing
            analysis, and a full review with the correct answer,{" "}
            <strong>a worked explanation, and a speed hack</strong> for every
            question.
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-lg font-semibold text-amber-900">
          Before you start — match the real conditions
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-amber-800">
          <li>• Sit somewhere quiet where you won&apos;t be interrupted for {minutes} minutes.</li>
          <li>• Keep a pen, paper and calculator handy (allowed in the real test).</li>
          <li>
            • Do <strong>not</strong> switch tabs or minimise the window — this
            trainer counts focus losses, just as the live proctoring flags them.
          </li>
          <li>• Answer fast: it&apos;s normal not to finish. Accuracy + speed both count.</li>
        </ul>
      </section>

      <div className="flex justify-center">
        <button
          onClick={onStart}
          className="rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Start {minutes}-minute test →
        </button>
      </div>

      <p className="text-center text-xs text-slate-400">
        Unofficial practice tool. Not affiliated with Revolut, CriteriaCorp or SHL.
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-bold text-brand">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </div>
    </div>
  );
}
