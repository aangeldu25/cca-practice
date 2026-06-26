import { BANK_BY_CATEGORY } from "./bank";
import type {
  AssembledTest,
  Attempt,
  Category,
  Question,
} from "./types";

export const TEST_SIZE = 40;
export const DURATION_SECONDS = 20 * 60; // 20 minutes, strictly timed

/** Target number of questions per category (sums to TEST_SIZE). */
const CATEGORY_TARGETS: Record<Category, number> = {
  verbal: 10,
  numerical: 12,
  logical: 10,
  abstract: 8,
};

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sample `n` questions without replacement, biased toward harder items.
 * Each question's selection weight is difficulty² (so a difficulty-3 item is
 * ~9× as likely as a difficulty-1 item per draw), which raises the overall
 * difficulty of every assembled test while still mixing in easier questions.
 */
function weightedSample(pool: Question[], n: number): Question[] {
  const items = pool.slice();
  const result: Question[] = [];
  const take = Math.min(n, items.length);
  for (let k = 0; k < take; k++) {
    const total = items.reduce((s, q) => s + q.difficulty * q.difficulty, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < items.length; idx++) {
      r -= items[idx].difficulty * items[idx].difficulty;
      if (r <= 0) break;
    }
    idx = Math.min(idx, items.length - 1);
    result.push(items[idx]);
    items.splice(idx, 1);
  }
  return result;
}

/** Randomise the order of a question's options, keeping answerIndex correct. */
function shuffleOptions(q: Question): Question {
  const order = shuffle(q.options.map((_, i) => i));
  const options = order.map((i) => q.options[i]);
  const answerIndex = order.indexOf(q.answerIndex);
  return { ...q, options, answerIndex };
}

/**
 * Build a fresh 40-question test. Picks each category's target count at random
 * from the bank, fills any shortfall from the remaining pool, interleaves the
 * categories, and shuffles every question's options for replay variety.
 */
export function assembleTest(): AssembledTest {
  const picked: Question[] = [];
  const usedIds = new Set<string>();

  (Object.keys(CATEGORY_TARGETS) as Category[]).forEach((cat) => {
    const chosen = weightedSample(BANK_BY_CATEGORY[cat], CATEGORY_TARGETS[cat]);
    for (const q of chosen) {
      picked.push(q);
      usedIds.add(q.id);
    }
  });

  // Fill any shortfall (if a category bank is smaller than its target) from the
  // rest of the bank so we always reach TEST_SIZE.
  if (picked.length < TEST_SIZE) {
    const leftovers = shuffle(
      (Object.keys(BANK_BY_CATEGORY) as Category[])
        .flatMap((c) => BANK_BY_CATEGORY[c])
        .filter((q) => !usedIds.has(q.id))
    );
    for (const q of leftovers) {
      if (picked.length >= TEST_SIZE) break;
      picked.push(q);
      usedIds.add(q.id);
    }
  }

  const questions = shuffle(picked).slice(0, TEST_SIZE).map(shuffleOptions);

  return {
    id: `test-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
    createdAt: Date.now(),
    questions,
    durationSeconds: DURATION_SECONDS,
  };
}

export interface CategoryScore {
  category: Category;
  correct: number;
  total: number;
}

export interface ScoreResult {
  correct: number;
  total: number;
  answered: number;
  unanswered: number;
  byCategory: CategoryScore[];
  /** Rough CCAT-style percentile band, for motivational context only. */
  estimatedPercentile: number;
  avgSecondsPerQuestion: number;
}

/**
 * Very rough raw-score → percentile band, loosely modelled on published CCAT
 * norms. For self-coaching context only — not an official score.
 */
function estimatePercentile(raw: number): number {
  const table: [number, number][] = [
    [40, 99],
    [37, 98],
    [34, 95],
    [31, 90],
    [28, 80],
    [25, 70],
    [22, 55],
    [19, 40],
    [16, 25],
    [13, 15],
    [10, 8],
    [0, 2],
  ];
  for (const [threshold, pct] of table) {
    if (raw >= threshold) return pct;
  }
  return 1;
}

export function scoreAttempt(attempt: Attempt): ScoreResult {
  const { test, answers, elapsedSeconds } = attempt;
  const cats: Category[] = ["verbal", "numerical", "logical", "abstract"];
  const byCategory: Record<Category, CategoryScore> = {
    verbal: { category: "verbal", correct: 0, total: 0 },
    numerical: { category: "numerical", correct: 0, total: 0 },
    logical: { category: "logical", correct: 0, total: 0 },
    abstract: { category: "abstract", correct: 0, total: 0 },
  };

  let correct = 0;
  let answered = 0;

  test.questions.forEach((q, i) => {
    byCategory[q.category].total += 1;
    const a = answers[i];
    if (a !== null && a !== undefined) {
      answered += 1;
      if (a === q.answerIndex) {
        correct += 1;
        byCategory[q.category].correct += 1;
      }
    }
  });

  const total = test.questions.length;
  return {
    correct,
    total,
    answered,
    unanswered: total - answered,
    byCategory: cats.map((c) => byCategory[c]),
    estimatedPercentile: estimatePercentile(correct),
    avgSecondsPerQuestion: answered > 0 ? elapsedSeconds / answered : 0,
  };
}
