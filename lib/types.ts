export type Category = "verbal" | "numerical" | "logical" | "abstract";

export const CATEGORY_LABELS: Record<Category, string> = {
  verbal: "Verbal Reasoning",
  numerical: "Numerical Reasoning",
  logical: "Logical Reasoning",
  abstract: "Abstract / Spatial Reasoning",
};

export interface Question {
  /** Stable unique id, e.g. "num-012" */
  id: string;
  category: Category;
  /** 1 = easy, 2 = medium, 3 = hard */
  difficulty: 1 | 2 | 3;
  /** Question stem. May contain newlines; rendered preserving whitespace. */
  prompt: string;
  /** Optional inline SVG markup for abstract/spatial items. */
  svg?: string;
  /** 4–5 answer options. */
  options: string[];
  /** Index into `options` of the correct answer. */
  answerIndex: number;
  /** Worked explanation of why the answer is correct. */
  explanation: string;
  /** A fast tactic / hack for this question type under time pressure. */
  tip: string;
}

export interface AssembledTest {
  id: string;
  createdAt: number;
  /** Ordered list of question ids in this attempt. */
  questions: Question[];
  /** Total time budget in seconds. */
  durationSeconds: number;
}

export interface Attempt {
  test: AssembledTest;
  /** answers[i] = chosen option index for questions[i], or null if skipped. */
  answers: (number | null)[];
  /** Wall-clock seconds actually spent before submit. */
  elapsedSeconds: number;
  /** Number of times the user left the tab / window. */
  focusLosses: number;
}
