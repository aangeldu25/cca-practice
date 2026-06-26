import type { Question } from "../types";
import { shadingMatrixSvg, polygonDotsSvg, shapeSeqSvg } from "./svg";

export const abstractQuestions: Question[] = [
  /* ===================== composite-figure sequences ===================== */
  {
    id: "abs-101",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Three things change at once: the number of sides, the pointer, and the shading. Which option (A–D) comes next?",
    svg: shapeSeqSvg(
      [
        { sides: 3, hand: 0, fill: true },
        { sides: 4, hand: 90, fill: false },
        { sides: 5, hand: 180, fill: true },
        "Q",
      ],
      [
        { sides: 6, hand: 270, fill: false },
        { sides: 6, hand: 270, fill: true },
        { sides: 6, hand: 180, fill: false },
        { sides: 5, hand: 270, fill: false },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "Sides increase by one (3→4→5→6), the pointer rotates 90° clockwise (up→right→down→left), and the shading alternates (filled, empty, filled, empty). The next figure is a six-sided shape, pointer left, unfilled — option A.",
    tip: "When several things change together, track each rule on its own line — sides, rotation, shading — then build the answer from all three at once.",
  },
  {
    id: "abs-102",
    category: "abstract",
    difficulty: 3,
    prompt:
      "The outer shape loses a side each step while the dots increase. Which option (A–D) comes next?",
    svg: shapeSeqSvg(
      [
        { sides: 6, dots: 1 },
        { sides: 5, dots: 2 },
        { sides: 4, dots: 3 },
        "Q",
      ],
      [
        { sides: 3, dots: 4 },
        { sides: 3, dots: 3 },
        { sides: 4, dots: 4 },
        { sides: 3, dots: 5 },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "Two opposite counters: sides go 6→5→4→3, while dots go 1→2→3→4. The next figure is a triangle with 4 dots — option A.",
    tip: "Look for counters moving in opposite directions. One feature shrinks while another grows — extend both.",
  },
  {
    id: "abs-103",
    category: "abstract",
    difficulty: 3,
    prompt:
      "The pointer rotates and the shading changes. Which option (A–D) comes next?",
    svg: shapeSeqSvg(
      [
        { sides: 4, hand: 0, fill: false },
        { sides: 4, hand: 315, fill: true },
        { sides: 4, hand: 270, fill: false },
        "Q",
      ],
      [
        { sides: 4, hand: 225, fill: true },
        { sides: 4, hand: 225, fill: false },
        { sides: 4, hand: 180, fill: true },
        { sides: 4, hand: 270, fill: true },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "The pointer turns 45° anticlockwise each step (up → up-left → left → down-left), and the shading alternates (empty, filled, empty, filled). The next square has the pointer down-left and is filled — option A.",
    tip: "Anticlockwise rotations are easy to misread as clockwise. Fix the direction from the first two frames and keep the fill pattern separate.",
  },
  {
    id: "abs-104",
    category: "abstract",
    difficulty: 3,
    prompt:
      "The outer shape alternates and the pointer rotates. Which option (A–D) comes next?",
    svg: shapeSeqSvg(
      [
        { sides: 4, hand: 0 },
        { sides: 3, hand: 90 },
        { sides: 4, hand: 180 },
        "Q",
      ],
      [
        { sides: 3, hand: 270 },
        { sides: 4, hand: 270 },
        { sides: 3, hand: 180 },
        { sides: 3, hand: 0 },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "The outer shape alternates square, triangle, square, triangle, and the pointer rotates 90° clockwise each step. The fourth frame is a triangle with the pointer pointing left — option A.",
    tip: "An alternating attribute (square/triangle) follows position parity. Combine it with the steady rotation of the pointer.",
  },
  {
    id: "abs-105",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Sides, dots and shading all change each step. Which option (A–D) comes next?",
    svg: shapeSeqSvg(
      [
        { sides: 6, dots: 1, fill: true },
        { sides: 5, dots: 2, fill: false },
        { sides: 4, dots: 3, fill: true },
        "Q",
      ],
      [
        { sides: 3, dots: 4, fill: false },
        { sides: 3, dots: 4, fill: true },
        { sides: 3, dots: 3, fill: false },
        { sides: 4, dots: 4, fill: false },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "Three rules run together: sides 6→5→4→3, dots 1→2→3→4, shading filled/empty alternating. The next figure is a triangle with 4 dots, unfilled — option A.",
    tip: "Three simultaneous rules is the real difficulty ceiling. Note each rule, predict each value, then find the single option that satisfies all three.",
  },

  /* ===================== logical shading matrices ===================== */
  {
    id: "abs-106",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In each row, a small square is shaded in box 3 only if it is shaded in exactly ONE of boxes 1 and 2 (XOR). Which option completes the grid?",
    svg: shadingMatrixSvg(
      [
        [["TL", "BR"], ["TL", "TR"], ["TR", "BR"]],
        [["TL", "TR", "BL"], ["TR"], ["TL", "BL"]],
        [["TL", "BR", "BL"], ["TL", "TR", "BR"], "Q"],
      ],
      [
        ["TR", "BL"],
        ["TL", "TR", "BL", "BR"],
        ["TL", "BR"],
        ["TR", "BL", "BR"],
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "XOR: a square survives only where exactly one of the first two boxes is shaded. Bottom row: TL and BR are shaded in both (cancel), TR and BL only once (stay) → top-right and bottom-left, option A.",
    tip: "Test AND, OR and XOR on the two complete rows. If shared squares vanish but unique ones remain, it's XOR.",
  },
  {
    id: "abs-107",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In each row, a square is shaded in box 3 only if it is shaded in BOTH boxes 1 and 2 (AND). Which option completes the grid?",
    svg: shadingMatrixSvg(
      [
        [["TL", "TR", "BL"], ["TL", "BR"], ["TL"]],
        [["TL", "TR", "BR"], ["TR", "BR", "BL"], ["TR", "BR"]],
        [["TL", "TR", "BL", "BR"], ["TR", "BL"], "Q"],
      ],
      [
        ["TR", "BL"],
        ["TL", "TR", "BL", "BR"],
        ["TR"],
        ["TL", "BR"],
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "AND keeps only squares shaded in both boxes. Bottom row: the full square AND {TR, BL} leaves exactly TR and BL — option A.",
    tip: "AND always produces equal or fewer shaded squares than either input. If box 3 is the 'overlap', it's AND.",
  },
  {
    id: "abs-108",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In each row, a square is shaded in box 3 if it is shaded in EITHER box 1 or box 2 (OR). Which option completes the grid?",
    svg: shadingMatrixSvg(
      [
        [["TL"], ["BR"], ["TL", "BR"]],
        [["TL", "TR"], ["BL"], ["TL", "TR", "BL"]],
        [["TR"], ["TL", "BL"], "Q"],
      ],
      [
        ["TL", "TR", "BL"],
        ["TR"],
        ["TL", "TR", "BL", "BR"],
        ["TL", "BL"],
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "OR shades every square that is shaded in either input. Bottom row: {TR} or {TL, BL} = TL, TR and BL — option A.",
    tip: "OR combines everything. If box 3 has all the shaded squares of boxes 1 and 2 together, the rule is OR.",
  },
  {
    id: "abs-109",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Reading each row left to right, one more square is shaded each step, added in clockwise order. Which option completes the grid?",
    svg: shadingMatrixSvg(
      [
        [["TL"], ["TL", "TR"], ["TL", "TR", "BR"]],
        [["TR"], ["TR", "BR"], ["TR", "BR", "BL"]],
        [["BR"], ["BR", "BL"], "Q"],
      ],
      [
        ["BR", "BL", "TL"],
        ["BR", "BL"],
        ["BL", "TL", "TR"],
        ["TL", "TR", "BR", "BL"],
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "Each row starts at a different corner and adds the next square clockwise every step. The bottom row goes BR, then BR+BL, so the third box adds TL → BR, BL, TL (option A).",
    tip: "Find the start corner and direction of accumulation, then add one more square in that direction.",
  },
  {
    id: "abs-110",
    category: "abstract",
    difficulty: 3,
    prompt:
      "A single shaded square advances one corner clockwise for every step right AND every step down. Which option completes the grid?",
    svg: shadingMatrixSvg(
      [
        [["TL"], ["TR"], ["BR"]],
        [["TR"], ["BR"], ["BL"]],
        [["BR"], ["BL"], "Q"],
      ],
      [["TL"], ["BL"], ["BR"], ["TR"]]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "The shaded corner moves clockwise (TL→TR→BR→BL→TL) for each step right and each step down. The bottom-left cell is BL, so one more step lands on TL — option A.",
    tip: "Movement matrices combine two rules at once (across and down). Apply both to reach the missing cell.",
  },

  /* ===================== odd-one-out by hidden relationship ===================== */
  {
    id: "abs-111",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In three figures the number of dots equals the number of sides. Which figure breaks the rule?",
    svg: polygonDotsSvg([
      { sides: 3, dots: 3 },
      { sides: 4, dots: 4 },
      { sides: 5, dots: 5 },
      { sides: 6, dots: 5 },
    ]),
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 3,
    explanation:
      "Dots should match sides: triangle 3, square 4, pentagon 5. Figure 4 is a hexagon (6 sides) with only 5 dots — it breaks the rule.",
    tip: "When two features are linked (dots ↔ sides), check each figure against the relationship; the outlier is the single mismatch.",
  },
  {
    id: "abs-112",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In three figures the number of dots is one MORE than the number of sides. Which figure breaks the rule?",
    svg: polygonDotsSvg([
      { sides: 3, dots: 4 },
      { sides: 4, dots: 5 },
      { sides: 5, dots: 6 },
      { sides: 6, dots: 6 },
    ]),
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 3,
    explanation:
      "The rule is dots = sides + 1: triangle 4, square 5, pentagon 6. Figure 4 is a hexagon (6 sides) but shows 6 dots, not 7 — it breaks the rule.",
    tip: "Don't assume the relationship is 'equal'. Derive the exact offset (here +1) from the figures that agree, then test the rest.",
  },

  /* ===================== hard numeric & alphabetic abstractions ===================== */
  {
    id: "abs-113",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n2, 3, 5, 9, 17, 33, ?",
    options: ["49", "63", "65", "66"],
    answerIndex: 2,
    explanation:
      "The differences double each step: +1, +2, +4, +8, +16, then +32. 33 + 32 = 65.",
    tip: "When the gaps themselves double (1, 2, 4, 8…), the next gap is double the last. Add it on.",
  },
  {
    id: "abs-114",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n2, 12, 30, 56, 90, ?",
    options: ["120", "126", "132", "150"],
    answerIndex: 2,
    explanation:
      "The differences are 10, 18, 26, 34 — rising by 8 each time. The next difference is 42, so 90 + 42 = 132.",
    tip: "If the first differences aren't constant, take the second differences. A constant second difference means a quadratic pattern.",
  },
  {
    id: "abs-115",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n7, 26, 63, 124, ?",
    options: ["199", "215", "216", "218"],
    answerIndex: 1,
    explanation:
      "Each term is one less than a cube: 2³−1=7, 3³−1=26, 4³−1=63, 5³−1=124, so 6³−1 = 215.",
    tip: "If terms sit just beside familiar cubes or squares (n³ ± 1), test that. 8, 27, 64, 125, 216 are the nearby cubes.",
  },
  {
    id: "abs-116",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Find the missing number. Each row follows one rule:\n2   3   13\n4   1   17\n5   2   ?",
    options: ["21", "27", "29", "39"],
    answerIndex: 2,
    explanation:
      "The third value is the sum of the squares of the first two: 2²+3²=13, 4²+1²=17, so 5²+2² = 25+4 = 29.",
    tip: "When the third number is much larger than the first two, test squares or products before plain addition.",
  },
  {
    id: "abs-117",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n4, 9, 19, 39, 79, ?",
    options: ["119", "139", "158", "159"],
    answerIndex: 3,
    explanation:
      "Each term is the previous doubled plus one: 4×2+1=9, 9×2+1=19, … 79×2+1 = 159.",
    tip: "If a term is roughly double the last, test ×2 then a small constant (+1, −1). It cracks a huge share of series.",
  },
  {
    id: "abs-118",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n5, 7, 12, 19, 31, 50, ?",
    options: ["69", "75", "81", "100"],
    answerIndex: 2,
    explanation:
      "Each term is the sum of the previous two (Fibonacci-style): 12+19=31, 19+31=50, 31+50 = 81.",
    tip: "If a term equals the sum of the two before it, you've found a Fibonacci-type rule — confirm with one addition.",
  },
  {
    id: "abs-119",
    category: "abstract",
    difficulty: 3,
    prompt: "Which letter pair comes next?\nAZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "EW"],
    answerIndex: 0,
    explanation:
      "The first letters go forward (A, B, C, D, E) while the second letters go backward (Z, Y, X, W, V). The next pair is EV.",
    tip: "Split paired-letter series into two streams and read each direction separately — one often ascends while the other descends.",
  },
  {
    id: "abs-120",
    category: "abstract",
    difficulty: 3,
    prompt: "Which letter continues the pattern?\nB, C, E, H, L, ?",
    options: ["O", "P", "Q", "R"],
    answerIndex: 2,
    explanation:
      "The gaps grow +1, +2, +3, +4, then +5. L is the 12th letter; 12 + 5 = 17 = Q.",
    tip: "Convert letters to numbers and watch the gaps. A growing staircase (+1,+2,+3,+4) means the next jump is +5.",
  },
  {
    id: "abs-121",
    category: "abstract",
    difficulty: 3,
    prompt: "Which number does NOT belong with the others?",
    options: ["144", "121", "100", "84"],
    answerIndex: 3,
    explanation:
      "144 = 12², 121 = 11², 100 = 10² are perfect squares. 84 is not, so it is the odd one out.",
    tip: "Keep squares to 15² on instant recall. 84 falls between 81 (9²) and 100 (10²), so it cannot itself be a perfect square.",
  },
  {
    id: "abs-122",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Find the missing number. The third column follows one rule:\n7   3   4\n9   5   4\n8   2   ?",
    options: ["4", "6", "10", "16"],
    answerIndex: 1,
    explanation:
      "The third value is the first minus the second: 7−3=4, 9−5=4, so 8−2 = 6.",
    tip: "If addition overshoots, try subtraction (first − second). Validate the rule on every complete row before using it.",
  },
  {
    id: "abs-123",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n1, 11, 21, 1211, 111221, ?",
    options: ["112211", "312211", "13112221", "1321131211"],
    answerIndex: 1,
    explanation:
      "This is the 'look-and-say' sequence: each term reads the previous one aloud in runs of identical digits. 111221 is 'three 1s, two 2s, one 1' = 31-22-11 = 312211.",
    tip: "Look-and-say: describe the previous term digit-group by digit-group ('two 1s' → 21). It's a classic lateral-thinking series, not arithmetic.",
  },
];
