"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AssembledTest, Attempt } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";

function formatTime(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function TestRunner({
  test,
  onFinish,
}: {
  test: AssembledTest;
  onFinish: (attempt: Attempt) => void;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    new Array(test.questions.length).fill(null)
  );
  const [current, setCurrent] = useState(0);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [remaining, setRemaining] = useState(test.durationSeconds);
  const [focusLosses, setFocusLosses] = useState(0);
  const [showFocusWarning, setShowFocusWarning] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const endTimeRef = useRef<number>(Date.now() + test.durationSeconds * 1000);
  const submittedRef = useRef(false);

  const total = test.questions.length;
  const q = test.questions[current];
  const answeredCount = useMemo(
    () => answers.filter((a) => a !== null).length,
    [answers]
  );

  const submit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    const elapsed = Math.min(
      test.durationSeconds,
      Math.round((Date.now() - (endTimeRef.current - test.durationSeconds * 1000)) / 1000)
    );
    onFinish({
      test,
      answers,
      elapsedSeconds: elapsed,
      focusLosses,
    });
  }, [answers, focusLosses, onFinish, test]);

  // Strict countdown driven by an absolute deadline (drift-proof).
  useEffect(() => {
    const tick = () => {
      const left = Math.round((endTimeRef.current - Date.now()) / 1000);
      setRemaining(left);
      if (left <= 0) submit();
    };
    tick();
    const id = setInterval(tick, 250);
    return () => clearInterval(id);
  }, [submit]);

  // Detect tab/window focus loss, like live proctoring.
  useEffect(() => {
    const onHidden = () => {
      if (document.visibilityState === "hidden") {
        setFocusLosses((n) => n + 1);
        setShowFocusWarning(true);
      }
    };
    const onBlur = () => setShowFocusWarning(true);
    const onFocus = () => setShowFocusWarning(false);
    document.addEventListener("visibilitychange", onHidden);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      document.removeEventListener("visibilitychange", onHidden);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  function choose(optionIndex: number) {
    setAnswers((prev) => {
      const next = prev.slice();
      next[current] = next[current] === optionIndex ? null : optionIndex;
      return next;
    });
  }

  function toggleFlag() {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(current)) next.delete(current);
      else next.add(current);
      return next;
    });
  }

  const low = remaining <= 60;

  return (
    <div className="space-y-5">
      {/* Sticky header: timer + progress */}
      <div className="sticky top-0 z-10 -mx-4 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-medium text-slate-600">
            Question{" "}
            <span className="font-bold text-slate-900">{current + 1}</span> / {total}
            <span className="ml-3 hidden text-slate-400 sm:inline">
              {answeredCount} answered
            </span>
          </div>
          <div
            className={`rounded-lg px-3 py-1 font-mono text-lg font-bold tabular-nums ${
              low ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-800"
            }`}
            aria-live="polite"
          >
            {formatTime(remaining)}
          </div>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-brand transition-all"
            style={{ width: `${((current + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {showFocusWarning && (
        <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
          ⚠️ You left the test window. In the real assessment this is flagged.
          Stay focused — the timer keeps running.
        </div>
      )}

      {/* Question card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
            {CATEGORY_LABELS[q.category]}
          </span>
          <button
            onClick={toggleFlag}
            className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
              flagged.has(current)
                ? "bg-amber-100 text-amber-800"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {flagged.has(current) ? "★ Flagged" : "☆ Flag"}
          </button>
        </div>

        <p className="prompt-text text-lg font-medium leading-relaxed text-slate-900">
          {q.prompt}
        </p>

        {q.svg && (
          <div
            className="my-4 flex justify-center text-slate-800"
            // SVG is authored statically in our own bank — safe to inline.
            dangerouslySetInnerHTML={{ __html: q.svg }}
          />
        )}

        <div className="mt-5 space-y-2">
          {q.options.map((opt, i) => {
            const selected = answers[current] === i;
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  selected
                    ? "border-brand bg-blue-50 ring-2 ring-blue-200"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                    selected
                      ? "border-brand bg-brand text-white"
                      : "border-slate-300 text-slate-500"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-slate-800">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
        >
          ← Prev
        </button>
        {current < total - 1 ? (
          <button
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
            className="rounded-lg bg-brand px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            className="rounded-lg bg-emerald-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Finish & review
          </button>
        )}
      </div>

      {/* Question navigator */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded bg-brand" /> answered
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded border border-slate-300 bg-white" />{" "}
            unanswered
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-3 w-3 rounded bg-amber-400" /> flagged
          </span>
        </div>
        <div className="grid grid-cols-8 gap-2 sm:grid-cols-10">
          {test.questions.map((_, i) => {
            const isAnswered = answers[i] !== null;
            const isFlagged = flagged.has(i);
            const isCurrent = i === current;
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative h-9 rounded-lg text-sm font-semibold transition ${
                  isCurrent
                    ? "ring-2 ring-brand ring-offset-1"
                    : ""
                } ${
                  isAnswered
                    ? "bg-brand text-white"
                    : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {i + 1}
                {isFlagged && (
                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-amber-400 ring-2 ring-white" />
                )}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => setConfirming(true)}
          className="mt-4 w-full rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
        >
          Submit test ({answeredCount}/{total} answered)
        </button>
      </div>

      {/* Submit confirmation */}
      {confirming && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-slate-900">Submit test?</h3>
            <p className="mt-2 text-sm text-slate-600">
              You answered <strong>{answeredCount}</strong> of {total}.
              {total - answeredCount > 0 &&
                ` ${total - answeredCount} unanswered will be marked wrong.`}{" "}
              You can&apos;t come back after submitting.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setConfirming(false)}
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Keep going
              </button>
              <button
                onClick={submit}
                className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
