import type { Question } from "../types";

export const logicalQuestions: Question[] = [
  {
    id: "log-001",
    category: "logical",
    difficulty: 2,
    prompt: "Which letter comes next?\nA, C, F, J, O, ?",
    options: ["S", "T", "U", "V"],
    answerIndex: 2,
    explanation:
      "The gaps between letters grow: +2 (A→C), +3 (C→F), +4 (F→J), +5 (J→O), so next is +6. O is the 15th letter; 15 + 6 = 21 = U.",
    tip: "Convert letters to their position numbers (A=1 … Z=26). Letter series are just number series in disguise.",
  },
  {
    id: "log-002",
    category: "logical",
    difficulty: 2,
    prompt:
      "In a certain code, CAT is written as DBU. How is DOG written in that code?",
    options: ["EPH", "CPF", "EPG", "FPI"],
    answerIndex: 0,
    explanation:
      "Each letter shifts forward by one: C→D, A→B, T→U. Apply the same +1 to DOG: D→E, O→P, G→H = EPH.",
    tip: "Find the shift on the example by comparing letter positions, then apply the identical shift to the target word.",
  },
  {
    id: "log-003",
    category: "logical",
    difficulty: 1,
    prompt:
      "All cats are mammals. All mammals are animals. Therefore:",
    options: [
      "All animals are cats.",
      "All cats are animals.",
      "Some mammals are not animals.",
      "No cats are animals.",
    ],
    answerIndex: 1,
    explanation:
      "If every cat is a mammal and every mammal is an animal, then every cat is an animal. The chain runs one direction only — you cannot reverse it to 'all animals are cats.'",
    tip: "Picture nested circles: cats inside mammals inside animals. Conclusions flow from the small circle outward, never inward.",
  },
  {
    id: "log-004",
    category: "logical",
    difficulty: 3,
    prompt:
      "Pointing at a man, a woman says: 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    options: ["Sister", "Aunt", "Mother", "Grandmother"],
    answerIndex: 2,
    explanation:
      "'The only daughter of my mother' is the speaker herself. So the man's mother is the woman — she is his mother.",
    tip: "Replace each relationship phrase with the actual person. 'The only daughter of my mother' resolves to 'me' (assuming the speaker is that daughter).",
  },
  {
    id: "log-005",
    category: "logical",
    difficulty: 1,
    prompt:
      "In a queue, A is ahead of B, B is ahead of C, and C is ahead of D. Who is first in the queue?",
    options: ["A", "B", "C", "D"],
    answerIndex: 0,
    explanation:
      "The order from front to back is A, B, C, D. A is ahead of everyone, so A is first.",
    tip: "Lay sequence clues on a single line in one consistent direction. Don't flip 'ahead/behind' mid-problem.",
  },
  {
    id: "log-006",
    category: "logical",
    difficulty: 1,
    prompt: "Which letter comes next?\nZ, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    answerIndex: 1,
    explanation:
      "The letters step backward by 2 each time: Z, X, V, T, R.",
    tip: "Descending series are as common as ascending ones. Check the direction of the step before assuming it goes up.",
  },
  {
    id: "log-007",
    category: "logical",
    difficulty: 2,
    prompt: "Which number does NOT belong with the others?",
    options: ["3", "5", "9", "11"],
    answerIndex: 2,
    explanation:
      "3, 5 and 11 are prime numbers; 9 = 3 × 3 is not prime. The shared property is 'prime', and 9 breaks it.",
    tip: "When all items are numbers, test classic properties: prime, even/odd, perfect squares, multiples of something. One property usually isolates the odd one.",
  },
  {
    id: "log-008",
    category: "logical",
    difficulty: 3,
    prompt:
      "If it rains, the match is cancelled. The match was NOT cancelled. Therefore:",
    options: [
      "It rained.",
      "It did not rain.",
      "The match was postponed.",
      "It might have rained.",
    ],
    answerIndex: 1,
    explanation:
      "'Rain → cancelled.' The match was not cancelled, so it cannot have rained (if it had, the match would have been cancelled). This is the contrapositive.",
    tip: "'If A then B' combined with 'not B' guarantees 'not A.' This single rule answers many logic items — drill it until it's automatic.",
  },
  {
    id: "log-009",
    category: "logical",
    difficulty: 2,
    prompt:
      "A person walks 3 km north, then turns right and walks 4 km. How far are they from the starting point (straight-line distance)?",
    options: ["1 km", "5 km", "7 km", "12 km"],
    answerIndex: 1,
    explanation:
      "North then east forms a right angle. The straight-line distance is the hypotenuse: √(3² + 4²) = √25 = 5 km.",
    tip: "Right-angle direction problems are Pythagoras in disguise. Memorise the 3-4-5 and 5-12-13 triangles to skip the arithmetic.",
  },
  {
    id: "log-010",
    category: "logical",
    difficulty: 2,
    prompt:
      "If 1 = 5, 2 = 25, and 3 = 125, then 4 = ?",
    options: ["250", "500", "625", "1000"],
    answerIndex: 2,
    explanation:
      "Each result is 5 raised to the number: 5¹=5, 5²=25, 5³=125, so 5⁴=625.",
    tip: "When values explode quickly, suspect powers. Check whether each term is a fixed base raised to the position.",
  },
  {
    id: "log-011",
    category: "logical",
    difficulty: 1,
    prompt: "What number comes next?\n1, 4, 9, 16, 25, ?",
    options: ["30", "32", "36", "49"],
    answerIndex: 2,
    explanation:
      "These are the perfect squares: 1², 2², 3², 4², 5², so next is 6² = 36.",
    tip: "Keep the first dozen squares (1,4,9,16,25,36,49,64,81,100,121,144) on instant recall — they appear constantly.",
  },
  {
    id: "log-012",
    category: "logical",
    difficulty: 3,
    prompt:
      "Some pens are pencils. All pencils are erasers. Which statement MUST be true?",
    options: [
      "All pens are erasers.",
      "Some pens are erasers.",
      "No pens are erasers.",
      "All erasers are pens.",
    ],
    answerIndex: 1,
    explanation:
      "The pens that are pencils must also be erasers (all pencils are erasers). So at least some pens are erasers. We can't say 'all', because only some pens are pencils.",
    tip: "Trace the guaranteed overlap: the 'some pens' that are pencils inherit every property of pencils. That overlap gives a 'some' conclusion, never an 'all'.",
  },
  {
    id: "log-013",
    category: "logical",
    difficulty: 3,
    prompt:
      "Four people sit in a row of four seats. O sits at the left end. M is not at either end. N sits immediately to M's right. P is not next to O. Who sits at the right end?",
    options: ["M", "N", "O", "P"],
    answerIndex: 3,
    explanation:
      "O is seat 1. P can't be seat 2 (next to O). If M=seat 3 then N=seat 4, forcing P into seat 2 — not allowed. So M=seat 2, N=seat 3, leaving seat 4 for P. P is at the right end.",
    tip: "Pin the fixed clue first (O at the end), then test the few remaining placements. Eliminate any arrangement that violates a constraint.",
  },
  {
    id: "log-014",
    category: "logical",
    difficulty: 2,
    prompt:
      "If MONDAY is written as YADNOM, how is FRIDAY written in the same code?",
    options: ["YADIRF", "YADRIF", "FRIYAD", "IRFYAD"],
    answerIndex: 0,
    explanation:
      "The code simply reverses the word. FRIDAY reversed letter-by-letter is YADIRF.",
    tip: "Before hunting for shifts, check the simplest transformation: is the answer just the word spelled backwards?",
  },
  {
    id: "log-015",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n2, 3, 5, 9, 17, ?",
    options: ["25", "31", "33", "34"],
    answerIndex: 2,
    explanation:
      "The added amount doubles each step: +1, +2, +4, +8, then +16. 17 + 16 = 33.",
    tip: "If first differences double (1,2,4,8…), you've found the rule. The next difference is simply double the last one.",
  },
  {
    id: "log-016",
    category: "logical",
    difficulty: 2,
    prompt:
      "Four books are stacked. The yellow book is on top. The red book is somewhere above the blue book. The green book is below the blue book. Which book is at the bottom?",
    options: ["Yellow", "Red", "Blue", "Green"],
    answerIndex: 3,
    explanation:
      "Yellow is on top. Red is above blue, and green is below blue, so the order top-to-bottom is yellow, red, blue, green. Green is at the bottom.",
    tip: "Stack problems are vertical sequence problems. Write the positions top-to-bottom and slot each clue in until only one arrangement fits.",
  },
];
