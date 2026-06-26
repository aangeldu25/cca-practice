import type { Question } from "../types";

export const logicalQuestions: Question[] = [
  {
    id: "log-201",
    category: "logical",
    difficulty: 3,
    prompt:
      "All P are Q. No Q are R. Some R are S. Which statement MUST be true?",
    options: ["No P are R.", "All S are R.", "Some P are S.", "No P are S."],
    answerIndex: 0,
    explanation:
      "Every P is a Q, and no Q is an R, so no P can be an R. The S premise is a distractor — it tells us nothing certain about P.",
    tip: "Trace only the links you can follow. P ⊂ Q and Q is disjoint from R, so P is disjoint from R. Ignore unconnected premises.",
  },
  {
    id: "log-202",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n1, 2, 6, 24, 120, ?",
    options: ["240", "600", "720", "840"],
    answerIndex: 2,
    explanation:
      "Each term multiplies by an increasing factor (×2, ×3, ×4, ×5, then ×6): 120 × 6 = 720. These are the factorials.",
    tip: "Growing ratios (×2, ×3, ×4…) signal factorials: 1, 2, 6, 24, 120, 720.",
  },
  {
    id: "log-203",
    category: "logical",
    difficulty: 3,
    prompt:
      "All A are B. Some B are C. No C are D. Which statement MUST be true?",
    options: [
      "Some B are not D.",
      "No A are D.",
      "Some A are C.",
      "All C are B.",
    ],
    answerIndex: 0,
    explanation:
      "Some B are C, and no C are D, so those B which are C cannot be D — therefore some B are not D. We can't conclude anything certain about A and D.",
    tip: "Find the guaranteed overlap (the B that are C) and apply the exclusion (no C are D) only to it.",
  },
  {
    id: "log-204",
    category: "logical",
    difficulty: 3,
    prompt:
      "A is taller than B. C is shorter than D but taller than A. List from tallest to shortest.",
    options: [
      "D, C, A, B",
      "C, D, A, B",
      "D, C, B, A",
      "A, C, D, B",
    ],
    answerIndex: 0,
    explanation:
      "C < D and A < C and B < A give D > C > A > B. Tallest to shortest: D, C, A, B.",
    tip: "Convert every clue into a single direction (>) and merge them into one chain before reading off the order.",
  },
  {
    id: "log-205",
    category: "logical",
    difficulty: 3,
    prompt:
      "A's mother is the sister of B's father. How is B related to A?",
    options: ["Sibling", "Cousin", "Uncle", "Nephew"],
    answerIndex: 1,
    explanation:
      "A's mother and B's father are siblings, so A and B are children of siblings — they are cousins.",
    tip: "When two people's parents are siblings, the people themselves are cousins. Resolve each 'parent' link first.",
  },
  {
    id: "log-206",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n5, 11, 23, 47, ?",
    options: ["71", "85", "94", "95"],
    answerIndex: 3,
    explanation:
      "Each term is the previous doubled plus 1: 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1 = 95.",
    tip: "Roughly-doubling series: test ×2 then a constant. Here it's ×2 + 1.",
  },
  {
    id: "log-207",
    category: "logical",
    difficulty: 3,
    prompt:
      "Either the report is late or the manager is absent (or both). The manager is present. Therefore:",
    options: [
      "The report is late.",
      "The report is on time.",
      "The manager is late.",
      "Nothing can be concluded.",
    ],
    answerIndex: 0,
    explanation:
      "In an 'A or B' statement, if B is false (manager present), then A must be true — the report is late.",
    tip: "Disjunctive syllogism: 'A or B' plus 'not B' forces A. Eliminate the false option and keep the other.",
  },
  {
    id: "log-208",
    category: "logical",
    difficulty: 3,
    prompt: "Which letter continues the pattern?\nB, E, J, Q, ?",
    options: ["X", "Y", "Z", "W"],
    answerIndex: 2,
    explanation:
      "The gaps are +3, +5, +7, then +9 (consecutive odd numbers). Q is the 17th letter; 17 + 9 = 26 = Z.",
    tip: "Map letters to numbers and inspect the gaps — odd-number gaps (3,5,7,9) are a common disguise.",
  },
  {
    id: "log-209",
    category: "logical",
    difficulty: 3,
    prompt:
      "No cats are dogs. All poodles are dogs. Which statement MUST be true?",
    options: [
      "No poodles are cats.",
      "Some cats are poodles.",
      "All dogs are poodles.",
      "Some poodles are cats.",
    ],
    answerIndex: 0,
    explanation:
      "All poodles are dogs, and no dogs are cats, so no poodle can be a cat.",
    tip: "Chain through the shared class (dogs). Poodles sit inside dogs, which are entirely outside cats.",
  },
  {
    id: "log-210",
    category: "logical",
    difficulty: 3,
    prompt:
      "In a straight row of houses, a house is 4th from the left and 3rd from the right. How many houses are in the row?",
    options: ["5", "6", "7", "8"],
    answerIndex: 1,
    explanation:
      "Total = (position from left) + (position from right) − 1 = 4 + 3 − 1 = 6.",
    tip: "Add the two positions and subtract 1, because the house itself is counted from both ends.",
  },
  {
    id: "log-211",
    category: "logical",
    difficulty: 3,
    prompt:
      "If 1 January is a Monday, what day of the week is 1 February (non-leap year)?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answerIndex: 1,
    explanation:
      "January has 31 days. 31 ÷ 7 leaves a remainder of 3, so 1 Feb is 3 days after Monday = Thursday.",
    tip: "Day-of-week jumps depend on the remainder when the day count is divided by 7. 31 mod 7 = 3.",
  },
  {
    id: "log-212",
    category: "logical",
    difficulty: 3,
    prompt:
      "All published authors have an editor. Maria does not have an editor. Therefore:",
    options: [
      "Maria is a published author.",
      "Maria is not a published author.",
      "Maria will be published soon.",
      "Maria writes alone.",
    ],
    answerIndex: 1,
    explanation:
      "'Published author → has editor.' Maria has no editor, so by the contrapositive she is not a published author.",
    tip: "'If A then B' combined with 'not B' always yields 'not A.' Memorise this contrapositive move.",
  },
  {
    id: "log-213",
    category: "logical",
    difficulty: 3,
    prompt:
      "Facing South, you turn 90° clockwise, then 180°, then 90° anticlockwise. Which direction do you now face?",
    options: ["North", "South", "East", "West"],
    answerIndex: 0,
    explanation:
      "South → (90° CW) West → (180°) East → (90° ACW) North.",
    tip: "Apply each turn in order around the compass. Clockwise: N→E→S→W; anticlockwise reverses it.",
  },
  {
    id: "log-214",
    category: "logical",
    difficulty: 3,
    prompt:
      "A man walks 10 m north, 10 m east, 10 m north, then 10 m east. How far is he from the start (to the nearest metre)?",
    options: ["20 m", "28 m", "34 m", "40 m"],
    answerIndex: 1,
    explanation:
      "Net displacement is 20 m north and 20 m east. Distance = √(20² + 20²) = √800 ≈ 28.3 m.",
    tip: "Sum the north–south and east–west legs separately, then use Pythagoras on the two totals.",
  },
  {
    id: "log-215",
    category: "logical",
    difficulty: 3,
    prompt:
      "In a code, CAT becomes ECV (each letter +2). How is DOG written in the same code?",
    options: ["FQI", "FPI", "EQI", "FQH"],
    answerIndex: 0,
    explanation:
      "Shift each letter forward by 2: D→F, O→Q, G→I = FQI.",
    tip: "Find the shift from the example (here +2), then apply the identical shift to each letter of the target.",
  },
  {
    id: "log-216",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n1, 3, 7, 15, 31, ?",
    options: ["47", "63", "62", "64"],
    answerIndex: 1,
    explanation:
      "Each term is one less than a power of 2: 2¹−1, 2²−1, 2³−1, 2⁴−1, 2⁵−1, so 2⁶−1 = 63. (Also: each term ×2 + 1.)",
    tip: "Numbers like 1, 3, 7, 15, 31 are 2ⁿ − 1. Recognising them makes the next term instant.",
  },
  {
    id: "log-217",
    category: "logical",
    difficulty: 3,
    prompt:
      "The day after tomorrow is Sunday. What day was yesterday?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    answerIndex: 1,
    explanation:
      "If the day after tomorrow is Sunday, today is Friday, so yesterday was Thursday.",
    tip: "Anchor 'today' first from the clue, then step backwards or forwards as asked.",
  },
  {
    id: "log-218",
    category: "logical",
    difficulty: 3,
    prompt:
      "Three friends each prefer one drink: tea, coffee or juice. Ann does not like tea. Ben likes coffee. Which drink does Ann prefer?",
    options: ["Tea", "Coffee", "Juice", "Cannot tell"],
    answerIndex: 2,
    explanation:
      "Ben takes coffee, so Ann must have tea or juice. Ann doesn't like tea, so Ann has juice (and Carl has tea).",
    tip: "Eliminate by assignment: once Ben has coffee and Ann rejects tea, only juice remains for Ann.",
  },
  {
    id: "log-219",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n7, 10, 8, 11, 9, 12, ?",
    options: ["10", "13", "14", "8"],
    answerIndex: 0,
    explanation:
      "The steps alternate +3, −2, +3, −2, +3, then −2: 12 − 2 = 10.",
    tip: "When a series rises and dips, look for two alternating operations (+3, −2) and apply whichever comes next.",
  },
  {
    id: "log-220",
    category: "logical",
    difficulty: 3,
    prompt:
      "Every student passed except those who missed the exam. John missed the exam. Did John pass?",
    options: [
      "Yes, John passed.",
      "No, John did not pass.",
      "John was not a student.",
      "Cannot be determined.",
    ],
    answerIndex: 1,
    explanation:
      "The rule says everyone passed except absentees. John was absent, so John is one of the exceptions — he did not pass.",
    tip: "Watch the word 'except': it carves out a group for whom the main claim does NOT hold.",
  },
  {
    id: "log-221",
    category: "logical",
    difficulty: 3,
    prompt:
      "If A = 1, B = 2, … Z = 26, and a word's value is the sum of its letters, what is the value of 'ACE'?",
    options: ["8", "9", "10", "15"],
    answerIndex: 1,
    explanation: "A + C + E = 1 + 3 + 5 = 9.",
    tip: "Convert letters to positions and add. Keeping A=1…E=5 memorised makes short words instant.",
  },
  {
    id: "log-222",
    category: "logical",
    difficulty: 3,
    prompt:
      "Some artists are poets. All poets are dreamers. Which statement MUST be true?",
    options: [
      "All artists are dreamers.",
      "Some artists are dreamers.",
      "No artists are dreamers.",
      "All dreamers are artists.",
    ],
    answerIndex: 1,
    explanation:
      "The artists who are poets must also be dreamers (all poets are dreamers), so some artists are dreamers — but not necessarily all.",
    tip: "A 'some' premise can only yield a 'some' conclusion. The overlap (artist-poets) inherits the poets' properties.",
  },
  {
    id: "log-223",
    category: "logical",
    difficulty: 3,
    prompt:
      "A clock loses 5 minutes every hour. How far behind real time is it after 6 real hours?",
    options: ["25 min", "30 min", "35 min", "60 min"],
    answerIndex: 1,
    explanation: "5 minutes lost per hour × 6 hours = 30 minutes behind.",
    tip: "A constant error per hour accumulates linearly: multiply the per-hour loss by the number of hours.",
  },
  {
    id: "log-224",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n2, 3, 5, 7, 11, 13, ?",
    options: ["15", "16", "17", "19"],
    answerIndex: 2,
    explanation:
      "These are the prime numbers in order: …11, 13, 17 (15 is not prime).",
    tip: "If a series skips around with no arithmetic rule, check whether they're primes. The next prime after 13 is 17.",
  },
  {
    id: "log-225",
    category: "logical",
    difficulty: 3,
    prompt:
      "If LISTEN is coded as NETSIL, how is SILENT coded in the same way?",
    options: ["TNELIS", "TNESIL", "SILTNE", "LISTNE"],
    answerIndex: 0,
    explanation:
      "LISTEN reversed is NETSIL, so the code reverses the word. SILENT reversed is TNELIS.",
    tip: "Before hunting for letter shifts, test the simplest transformation: is it just the word spelt backwards?",
  },
  {
    id: "log-226",
    category: "logical",
    difficulty: 3,
    prompt:
      "Five people finish a race. R finished before S. T finished after S but before U. Q finished before R. Who finished last?",
    options: ["Q", "R", "S", "U"],
    answerIndex: 3,
    explanation:
      "Q < R < S < T < U (each clue links into one chain). U is last.",
    tip: "Stitch the pairwise clues into a single order. Whoever sits at the end of the chain finishes last.",
  },
];
