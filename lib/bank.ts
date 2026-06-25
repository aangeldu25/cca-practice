import type { Category, Question } from "./types";
import { verbalQuestions } from "./questions/verbal";
import { numericalQuestions } from "./questions/numerical";
import { logicalQuestions } from "./questions/logical";
import { abstractQuestions } from "./questions/abstract";

export const QUESTION_BANK: Question[] = [
  ...verbalQuestions,
  ...numericalQuestions,
  ...logicalQuestions,
  ...abstractQuestions,
];

export const BANK_BY_CATEGORY: Record<Category, Question[]> = {
  verbal: verbalQuestions,
  numerical: numericalQuestions,
  logical: logicalQuestions,
  abstract: abstractQuestions,
};

/** Sanity check used by a unit-style runtime assertion in dev. */
export function bankStats() {
  return {
    total: QUESTION_BANK.length,
    verbal: verbalQuestions.length,
    numerical: numericalQuestions.length,
    logical: logicalQuestions.length,
    abstract: abstractQuestions.length,
  };
}
