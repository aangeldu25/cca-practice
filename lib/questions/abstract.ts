import type { Question } from "../types";

export const abstractQuestions: Question[] = [
  {
    id: "abs-001",
    category: "abstract",
    difficulty: 2,
    prompt:
      "The arrows rotate by a fixed amount each step. Which way does the arrow in the fourth box point?",
    svg: `<svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three arrows pointing up, right, down, then a box with a question mark">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="4" width="52" height="52" rx="6"/>
        <rect x="74" y="4" width="52" height="52" rx="6"/>
        <rect x="144" y="4" width="52" height="52" rx="6"/>
        <rect x="214" y="4" width="52" height="52" rx="6"/>
      </g>
      <g stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="currentColor">
        <g transform="translate(30,30) rotate(0)"><line x1="0" y1="12" x2="0" y2="-8"/><polygon points="0,-18 -8,-4 8,-4" stroke="none"/></g>
        <g transform="translate(100,30) rotate(90)"><line x1="0" y1="12" x2="0" y2="-8"/><polygon points="0,-18 -8,-4 8,-4" stroke="none"/></g>
        <g transform="translate(170,30) rotate(180)"><line x1="0" y1="12" x2="0" y2="-8"/><polygon points="0,-18 -8,-4 8,-4" stroke="none"/></g>
      </g>
      <text x="240" y="40" text-anchor="middle" font-size="30" fill="currentColor" stroke="none">?</text>
    </svg>`,
    options: ["Up", "Right", "Down", "Left"],
    answerIndex: 3,
    explanation:
      "The arrow turns 90° clockwise each step: up → right → down → left. The fourth arrow points left.",
    tip: "For rotation sequences, fix the direction (clockwise/anticlockwise) and the step size from the first two frames, then just keep turning by that amount.",
  },
  {
    id: "abs-002",
    category: "abstract",
    difficulty: 1,
    prompt:
      "The number of dots increases by a fixed rule. How many dots belong in the fourth box?",
    svg: `<svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boxes containing one, three and five dots, then a question mark">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="8" width="52" height="44" rx="6"/>
        <rect x="74" y="8" width="52" height="44" rx="6"/>
        <rect x="144" y="8" width="52" height="44" rx="6"/>
        <rect x="214" y="8" width="52" height="44" rx="6"/>
      </g>
      <g fill="currentColor">
        <circle cx="30" cy="30" r="4"/>
        <circle cx="90" cy="30" r="4"/><circle cx="100" cy="30" r="4"/><circle cx="110" cy="30" r="4"/>
        <circle cx="150" cy="30" r="4"/><circle cx="160" cy="30" r="4"/><circle cx="170" cy="30" r="4"/><circle cx="180" cy="30" r="4"/><circle cx="190" cy="30" r="4"/>
      </g>
      <text x="240" y="40" text-anchor="middle" font-size="30" fill="currentColor">?</text>
    </svg>`,
    options: ["6", "7", "8", "9"],
    answerIndex: 1,
    explanation:
      "The counts are 1, 3, 5 — increasing by 2 each time. The next term is 5 + 2 = 7.",
    tip: "Visual quantity patterns are number series. Count the elements, write the numbers down, and find the step.",
  },
  {
    id: "abs-003",
    category: "abstract",
    difficulty: 1,
    prompt: "Which figure is the odd one out?",
    svg: `<svg viewBox="0 0 280 74" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square, a rectangle, a triangle and a parallelogram, numbered one to four">
      <g fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2">
        <rect x="14" y="8" width="32" height="32"/>
        <rect x="78" y="14" width="44" height="22"/>
        <polygon points="170,8 152,42 188,42"/>
        <polygon points="224,42 238,12 266,12 252,42"/>
      </g>
      <g fill="currentColor" font-size="13" text-anchor="middle">
        <text x="30" y="62">1</text>
        <text x="100" y="62">2</text>
        <text x="170" y="62">3</text>
        <text x="240" y="62">4</text>
      </g>
    </svg>`,
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 2,
    explanation:
      "Figures 1, 2 and 4 are four-sided (square, rectangle, parallelogram). Figure 3 is a triangle — three sides. The shared property is 'quadrilateral', and the triangle breaks it.",
    tip: "For shape sets, count sides, corners, lines of symmetry, or shaded regions. The odd one differs on exactly one of these countable features.",
  },
  {
    id: "abs-004",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. In each row, the third value follows the same rule:\n2   3   6\n4   5   20\n3   6   ?",
    options: ["12", "15", "18", "24"],
    answerIndex: 2,
    explanation:
      "Each row multiplies the first two numbers to get the third: 2×3=6, 4×5=20, so 3×6=18.",
    tip: "In number grids, test the simplest operations between the first two cells (add, subtract, multiply) and check the rule holds on every completed row before using it.",
  },
  {
    id: "abs-005",
    category: "abstract",
    difficulty: 2,
    prompt: "Which number does NOT belong with the others?",
    options: ["121", "144", "180", "196"],
    answerIndex: 2,
    explanation:
      "121 = 11², 144 = 12², 196 = 14² are perfect squares. 180 is not a perfect square, so it is the odd one out.",
    tip: "When numbers look 'round', test for perfect squares or cubes. Knowing squares up to 15² lets you spot the intruder instantly.",
  },
  {
    id: "abs-006",
    category: "abstract",
    difficulty: 2,
    prompt: "Which letter continues the pattern?\nB, D, G, K, ?",
    options: ["M", "N", "O", "P"],
    answerIndex: 3,
    explanation:
      "The gaps increase: +2 (B→D), +3 (D→G), +4 (G→K), so next is +5. K is the 11th letter; 11 + 5 = 16 = P.",
    tip: "Map letters to numbers and look at the gaps. A growing gap (+2,+3,+4…) is one of the most common abstract patterns.",
  },
  {
    id: "abs-007",
    category: "abstract",
    difficulty: 1,
    prompt:
      "A small filled circle is to a large filled circle as a small filled square is to:",
    options: [
      "an empty large square",
      "a large filled square",
      "a small filled triangle",
      "a large filled circle",
    ],
    answerIndex: 1,
    explanation:
      "Only the size changes (small → large); shape and shading stay the same. So a small filled square maps to a large filled square.",
    tip: "In shape analogies, list every attribute (size, shape, shading, count, orientation) and change only the one that changed in the first pair.",
  },
  {
    id: "abs-008",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. The third column follows a single rule across rows:\n5   2   7\n8   3   11\n6   4   ?",
    options: ["8", "9", "10", "12"],
    answerIndex: 2,
    explanation:
      "Each row adds the first two numbers: 5+2=7, 8+3=11, so 6+4=10.",
    tip: "Always confirm a grid rule on two complete rows before applying it to the unknown. If add works on both, trust it.",
  },
  {
    id: "abs-009",
    category: "abstract",
    difficulty: 2,
    prompt:
      "A sequence of shapes has 3, 4, 5 and 6 sides in order. How many sides does the next shape have?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation:
      "The number of sides increases by one each step: 3, 4, 5, 6, then 7 (a heptagon).",
    tip: "When figures grow more complex, the count of sides/corners/lines is usually the variable. Track that single number.",
  },
  {
    id: "abs-010",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Which capital letter looks exactly the same after being reflected in a vertical mirror (left–right flip)?",
    options: ["A", "E", "F", "G"],
    answerIndex: 0,
    explanation:
      "A is symmetric about a vertical axis, so a left–right flip leaves it unchanged. E and F are only symmetric top-to-bottom, and G has no such symmetry.",
    tip: "For mirror questions, decide which axis the mirror sits on. A vertical mirror swaps left and right, so only left–right symmetric figures survive unchanged.",
  },
  {
    id: "abs-011",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. Each row follows the same rule:\n1   2   4\n2   4   8\n3   6   ?",
    options: ["9", "12", "18", "24"],
    answerIndex: 1,
    explanation:
      "Across each row the value doubles: 1→2→4, 2→4→8, 3→6→12. The missing number is 12.",
    tip: "Read grids both across and down. Here the rule runs left-to-right (×2 each step), not top-to-bottom.",
  },
  {
    id: "abs-012",
    category: "abstract",
    difficulty: 2,
    prompt: "Which figure has NO line of symmetry?",
    options: [
      "A square",
      "A circle",
      "An equilateral triangle",
      "A scalene triangle",
    ],
    answerIndex: 3,
    explanation:
      "A square, a circle and an equilateral triangle all have at least one line of symmetry. A scalene triangle (all sides different) has none.",
    tip: "Symmetry questions reward visual recall: regular shapes are highly symmetric, while 'irregular/scalene' shapes usually have zero symmetry lines.",
  },
];
