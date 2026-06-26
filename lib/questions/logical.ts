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
  {
    id: "log-017",
    category: "logical",
    difficulty: 2,
    prompt: "Which letter comes next?\nC, E, H, L, ?",
    options: ["O", "P", "Q", "R"],
    answerIndex: 2,
    explanation:
      "The gaps grow: +2 (C→E), +3 (E→H), +4 (H→L), so next is +5. L is the 12th letter; 12 + 5 = 17 = Q.",
    tip: "Number the letters and track the gaps. A growing-gap pattern (+2,+3,+4…) is extremely common.",
  },
  {
    id: "log-018",
    category: "logical",
    difficulty: 2,
    prompt: "In a code, RED is written as SFE. How is BLUE written?",
    options: ["CMVF", "CMUF", "AMVF", "CLVF"],
    answerIndex: 0,
    explanation:
      "Each letter shifts +1: R→S, E→F, D→E. Apply +1 to BLUE: B→C, L→M, U→V, E→F = CMVF.",
    tip: "Establish the shift from the example, then apply the exact same shift to every letter of the target.",
  },
  {
    id: "log-019",
    category: "logical",
    difficulty: 2,
    prompt:
      "No fish are mammals. All whales are mammals. Therefore:",
    options: [
      "All whales are fish.",
      "No whales are fish.",
      "Some whales are fish.",
      "All fish are whales.",
    ],
    answerIndex: 1,
    explanation:
      "Whales are mammals, and no mammals are fish, so no whales can be fish.",
    tip: "Chain through the shared term (mammals): whales sit inside mammals, and mammals are entirely outside fish — so whales are too.",
  },
  {
    id: "log-020",
    category: "logical",
    difficulty: 2,
    prompt:
      "A is B's father. B is C's sister. How is A related to C?",
    options: ["Brother", "Father", "Uncle", "Grandfather"],
    answerIndex: 1,
    explanation:
      "B and C are siblings (B is C's sister). A is B's father, so A is also C's father.",
    tip: "Siblings share parents. Once you know B and C are siblings, any parent of B is a parent of C.",
  },
  {
    id: "log-021",
    category: "logical",
    difficulty: 3,
    prompt:
      "A person walks 5 km east, turns left and walks 5 km, then turns left again and walks 5 km. Where are they relative to the start?",
    options: [
      "5 km north of the start",
      "5 km south of the start",
      "Back at the start",
      "5 km east of the start",
    ],
    answerIndex: 0,
    explanation:
      "East 5, then left = north 5, then left = west 5. The east and west cancel, leaving 5 km north of the start.",
    tip: "Track east–west and north–south separately. Opposite legs cancel; whatever's left is your displacement.",
  },
  {
    id: "log-022",
    category: "logical",
    difficulty: 2,
    prompt: "Which number does NOT belong with the others?",
    options: ["8", "27", "64", "100"],
    answerIndex: 3,
    explanation:
      "8 = 2³, 27 = 3³, 64 = 4³ are perfect cubes. 100 is a perfect square but not a cube, so it's the odd one out.",
    tip: "When numbers look like powers, test cubes as well as squares. 100 fits 'square' but breaks the 'cube' pattern the others share.",
  },
  {
    id: "log-023",
    category: "logical",
    difficulty: 3,
    prompt:
      "Whenever the alarm rings, the door locks. The door is currently unlocked. Therefore:",
    options: [
      "The alarm rang.",
      "The alarm did not ring.",
      "The door is broken.",
      "The alarm will ring soon.",
    ],
    answerIndex: 1,
    explanation:
      "'Alarm rings → door locks.' The door is unlocked (not locked), so the alarm cannot have rung (contrapositive).",
    tip: "'If A then B' + 'not B' = 'not A.' The unlocked door is 'not B,' so conclude 'not A' — the alarm didn't ring.",
  },
  {
    id: "log-024",
    category: "logical",
    difficulty: 1,
    prompt: "What number comes next?\n7, 14, 28, 56, ?",
    options: ["84", "98", "112", "120"],
    answerIndex: 2,
    explanation: "Each term doubles: 7, 14, 28, 56, 112.",
    tip: "Check the ratio between terms. A constant ×2 means just double the last value.",
  },
  {
    id: "log-025",
    category: "logical",
    difficulty: 1,
    prompt:
      "Tom is taller than Sam. Sam is taller than Ron. Who is the shortest?",
    options: ["Tom", "Sam", "Ron", "Cannot tell"],
    answerIndex: 2,
    explanation:
      "Tom > Sam > Ron in height, so Ron is the shortest.",
    tip: "Lay rankings on a single line in one direction (tallest → shortest). The person at the bottom is your answer.",
  },
  {
    id: "log-026",
    category: "logical",
    difficulty: 2,
    prompt:
      "If A = 1, B = 2, C = 3 … and a word's value is the sum of its letters, what is the value of BAD?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation: "B + A + D = 2 + 1 + 4 = 7.",
    tip: "Convert letters to positions and add. Keep A=1…E=5 memorised so small words are instant.",
  },
  {
    id: "log-027",
    category: "logical",
    difficulty: 2,
    prompt:
      "If LISTEN is coded as NETSIL, how is SILENT coded?",
    options: ["TNELIS", "TNESIL", "SILTNE", "LISTNE"],
    answerIndex: 0,
    explanation:
      "LISTEN reversed is NETSIL, so the code reverses the word. SILENT reversed is TNELIS.",
    tip: "Test the simplest rule first: is the code just the word backwards? Reverse the target to confirm.",
  },
  {
    id: "log-028",
    category: "logical",
    difficulty: 3,
    prompt:
      "All doctors are graduates. Some graduates are wealthy. Which statement MUST be true?",
    options: [
      "All doctors are wealthy.",
      "Some doctors are wealthy.",
      "No doctors are wealthy.",
      "It cannot be determined whether any doctor is wealthy.",
    ],
    answerIndex: 3,
    explanation:
      "Doctors are graduates, but the 'some graduates' who are wealthy need not include any doctors. So we can't conclude anything certain about doctors' wealth.",
    tip: "'Some graduates are wealthy' doesn't pin the wealth onto the doctor subset. With no guaranteed overlap, 'cannot be determined' wins.",
  },
  {
    id: "log-029",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n1, 2, 4, 5, 7, 8, ?",
    options: ["9", "10", "11", "12"],
    answerIndex: 1,
    explanation:
      "The steps alternate +1, +2, +1, +2 … : 1 (+1) 2 (+2) 4 (+1) 5 (+2) 7 (+1) 8 (+2) 10.",
    tip: "When a single difference rule fails, check for an alternating pattern (+1,+2,+1,+2). The next step continues the cycle.",
  },
  {
    id: "log-030",
    category: "logical",
    difficulty: 2,
    prompt:
      "You are facing North. You turn 90° clockwise, then 90° clockwise again. Which direction are you now facing?",
    options: ["East", "South", "West", "North"],
    answerIndex: 1,
    explanation:
      "North → (90° CW) East → (90° CW) South. Two clockwise quarter-turns equal a half-turn, so you face South.",
    tip: "Each 90° clockwise turn goes N→E→S→W. Count the quarter-turns around the compass.",
  },
  {
    id: "log-031",
    category: "logical",
    difficulty: 2,
    prompt: "3 is to 27 as 4 is to:",
    options: ["12", "48", "64", "81"],
    answerIndex: 2,
    explanation: "3³ = 27, so the rule is 'cube it.' 4³ = 64.",
    tip: "Test simple power relationships (square, cube) when the second number is much larger than the first. 27 = 3³ gives it away.",
  },
  {
    id: "log-032",
    category: "logical",
    difficulty: 3,
    prompt:
      "Pointing to a photo, a man says: 'This is the child of my father's only son.' Who is in the photo?",
    options: ["His brother", "His father", "His child", "Himself"],
    answerIndex: 2,
    explanation:
      "'My father's only son' is the speaker himself. So the photo is of his child.",
    tip: "Resolve nested relations inside-out. 'My father's only son' = me, so 'the child of me' = my child.",
  },
  {
    id: "log-033",
    category: "logical",
    difficulty: 2,
    prompt:
      "In a test, P scored more than Q but less than R. S scored more than R. Who scored the highest?",
    options: ["P", "Q", "R", "S"],
    answerIndex: 3,
    explanation:
      "Q < P < R and R < S, so the order is S > R > P > Q. S is highest.",
    tip: "Combine the inequalities into one chain. Whatever ends up on top of the chain is the highest.",
  },
  {
    id: "log-034",
    category: "logical",
    difficulty: 2,
    prompt: "What number comes next?\n81, 64, 49, 36, ?",
    options: ["25", "27", "30", "16"],
    answerIndex: 0,
    explanation:
      "These are descending squares: 9², 8², 7², 6², so next is 5² = 25.",
    tip: "Falling perfect squares are easy to miss. If terms shrink and look 'square,' check 9²,8²,7²…",
  },
  {
    id: "log-035",
    category: "logical",
    difficulty: 2,
    prompt:
      "In a code, DOG is written as CNF (each letter shifted back by one). How is CAT written?",
    options: ["BZS", "DBU", "BYS", "BZT"],
    answerIndex: 0,
    explanation:
      "Each letter shifts −1: D→C, O→N, G→F. Apply −1 to CAT: C→B, A→Z (wraps around), T→S = BZS.",
    tip: "Watch for wrap-around: A−1 loops to Z. Letter codes are cyclic, so subtracting past A returns to the end of the alphabet.",
  },
  {
    id: "log-036",
    category: "logical",
    difficulty: 3,
    prompt:
      "All P are Q. No Q are R. Some R are S. Which statement MUST be true?",
    options: [
      "No P are R.",
      "All S are R.",
      "Some P are S.",
      "No P are S.",
    ],
    answerIndex: 0,
    explanation:
      "Every P is a Q, and no Q is an R, so no P can be an R. The S statement is a distractor: 'some R are S' tells us nothing certain about P.",
    tip: "Chain only the links you can trace. P sits inside Q, and Q is entirely separate from R, so P must be separate from R too. Ignore premises (about S) that don't connect.",
  },
  {
    id: "log-037",
    category: "logical",
    difficulty: 3,
    prompt: "What number comes next?\n1, 2, 6, 24, 120, ?",
    options: ["240", "600", "720", "840"],
    answerIndex: 2,
    explanation:
      "Each term is the previous one multiplied by an increasing factor: ×2, ×3, ×4, ×5, then ×6. 120 × 6 = 720. (These are the factorials 1!, 2!, 3!, 4!, 5!, 6!.)",
    tip: "If the ratios between terms grow (×2, ×3, ×4…), the next multiplier is one larger. Recognising factorials (1, 2, 6, 24, 120, 720) makes this instant.",
  },
];
