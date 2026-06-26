import type { Question } from "../types";
import { shadingMatrixSvg, triangleSeqSvg, polygonDotsSvg } from "./svg";

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
  {
    id: "abs-013",
    category: "abstract",
    difficulty: 2,
    prompt:
      "A dot moves around the corners of the square. Which corner holds the dot in the fourth frame?",
    svg: `<svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A dot moving clockwise around the corners of a square across three frames, then a question mark">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="4" width="52" height="52" rx="6"/>
        <rect x="74" y="4" width="52" height="52" rx="6"/>
        <rect x="144" y="4" width="52" height="52" rx="6"/>
        <rect x="214" y="4" width="52" height="52" rx="6"/>
      </g>
      <g fill="currentColor">
        <circle cx="17" cy="15" r="4"/>
        <circle cx="117" cy="15" r="4"/>
        <circle cx="187" cy="45" r="4"/>
      </g>
      <text x="240" y="40" text-anchor="middle" font-size="30" fill="currentColor">?</text>
    </svg>`,
    options: ["Top-left", "Top-right", "Bottom-right", "Bottom-left"],
    answerIndex: 3,
    explanation:
      "The dot moves clockwise: top-left → top-right → bottom-right → bottom-left. The fourth position is bottom-left.",
    tip: "For 'moving element' patterns, fix the direction of travel from the first two frames, then advance one more step.",
  },
  {
    id: "abs-014",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Each figure has one more side than the last. What is the fourth figure?",
    svg: `<svg viewBox="0 0 280 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle, a square and a pentagon, then a question mark">
      <g fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2">
        <polygon points="30,12 14,46 46,46"/>
        <rect x="88" y="14" width="32" height="32"/>
        <polygon points="170,12 187,24 181,45 159,45 153,24"/>
      </g>
      <text x="240" y="38" text-anchor="middle" font-size="30" fill="currentColor">?</text>
    </svg>`,
    options: [
      "A hexagon (6 sides)",
      "Another pentagon (5 sides)",
      "A heptagon (7 sides)",
      "A circle",
    ],
    answerIndex: 0,
    explanation:
      "The side counts are 3 (triangle), 4 (square), 5 (pentagon), so the next has 6 sides — a hexagon.",
    tip: "When figures grow in complexity, count the defining feature (sides here) and extend the number sequence: 3, 4, 5 → 6.",
  },
  {
    id: "abs-016",
    category: "abstract",
    difficulty: 3,
    prompt:
      "The arrow on the left is reflected in the dashed vertical mirror. Which way does its reflection point?",
    svg: `<svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An arrow pointing up and to the right, a dashed vertical mirror line, and an empty frame">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="8" width="60" height="60" rx="6"/>
        <rect x="136" y="8" width="60" height="60" rx="6"/>
      </g>
      <g transform="translate(34,38) rotate(-45)" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="currentColor">
        <line x1="-12" y1="0" x2="8" y2="0"/>
        <polygon points="8,-6 8,6 18,0" stroke="none"/>
      </g>
      <line x1="100" y1="8" x2="100" y2="72" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="166" y="48" text-anchor="middle" font-size="28" fill="currentColor">?</text>
    </svg>`,
    options: [
      "Up and to the left (NW)",
      "Up and to the right (NE)",
      "Down and to the right (SE)",
      "Down and to the left (SW)",
    ],
    answerIndex: 0,
    explanation:
      "A vertical mirror swaps left and right but keeps up/down. The arrow points up-right (NE), so its reflection points up-left (NW).",
    tip: "A vertical mirror flips the horizontal direction only. 'Up' stays up; 'right' becomes 'left'.",
  },
  {
    id: "abs-017",
    category: "abstract",
    difficulty: 2,
    prompt:
      "The arrow rotates by the same amount each step. Which way does the fourth arrow point?",
    svg: `<svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arrows pointing east, north-east and north, then a question mark">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="4" width="52" height="52" rx="6"/>
        <rect x="74" y="4" width="52" height="52" rx="6"/>
        <rect x="144" y="4" width="52" height="52" rx="6"/>
        <rect x="214" y="4" width="52" height="52" rx="6"/>
      </g>
      <g stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="currentColor">
        <g transform="translate(30,30) rotate(0)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
        <g transform="translate(100,30) rotate(-45)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
        <g transform="translate(170,30) rotate(-90)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
      </g>
      <text x="240" y="40" text-anchor="middle" font-size="30" fill="currentColor" stroke="none">?</text>
    </svg>`,
    options: ["North-west", "West", "North-east", "South"],
    answerIndex: 0,
    explanation:
      "The arrow turns 45° anticlockwise each step: east → north-east → north → north-west.",
    tip: "Fix the turn size and direction from the first two frames (here 45° anticlockwise) and apply one more turn.",
  },
  {
    id: "abs-018",
    category: "abstract",
    difficulty: 2,
    prompt:
      "The shaded quarter moves the same way each step. Which quarter is shaded in the fourth square?",
    svg: `<svg viewBox="0 0 280 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Squares with the shaded quarter rotating clockwise, then a question mark">
      <g fill="currentColor" fill-opacity="0.55">
        <rect x="10" y="8" width="20" height="20"/>
        <rect x="100" y="8" width="20" height="20"/>
        <rect x="170" y="28" width="20" height="20"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="1.8">
        <rect x="10" y="8" width="40" height="40"/>
        <line x1="30" y1="8" x2="30" y2="48"/>
        <line x1="10" y1="28" x2="50" y2="28"/>
        <rect x="80" y="8" width="40" height="40"/>
        <line x1="100" y1="8" x2="100" y2="48"/>
        <line x1="80" y1="28" x2="120" y2="28"/>
        <rect x="150" y="8" width="40" height="40"/>
        <line x1="170" y1="8" x2="170" y2="48"/>
        <line x1="150" y1="28" x2="190" y2="28"/>
        <rect x="220" y="8" width="40" height="40"/>
        <line x1="240" y1="8" x2="240" y2="48"/>
        <line x1="220" y1="28" x2="260" y2="28"/>
      </g>
      <text x="240" y="36" text-anchor="middle" font-size="22" fill="currentColor" stroke="none">?</text>
    </svg>`,
    options: [
      "Top-left",
      "Top-right",
      "Bottom-right",
      "Bottom-left",
    ],
    answerIndex: 3,
    explanation:
      "The shaded quarter rotates clockwise: top-left → top-right → bottom-right → bottom-left.",
    tip: "Treat the shaded region like a moving dot: identify the rotation direction, then step it one quarter further.",
  },
  {
    id: "abs-019",
    category: "abstract",
    difficulty: 1,
    prompt: "Which figure is the odd one out?",
    svg: `<svg viewBox="0 0 280 78" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four arrows; three point right and one points left">
      <g fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5">
        <rect x="4" y="4" width="52" height="52" rx="6"/>
        <rect x="74" y="4" width="52" height="52" rx="6"/>
        <rect x="144" y="4" width="52" height="52" rx="6"/>
        <rect x="214" y="4" width="52" height="52" rx="6"/>
      </g>
      <g stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="currentColor">
        <g transform="translate(30,30) rotate(0)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
        <g transform="translate(100,30) rotate(0)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
        <g transform="translate(170,30) rotate(180)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
        <g transform="translate(240,30) rotate(0)"><line x1="-12" y1="0" x2="8" y2="0"/><polygon points="8,-6 8,6 18,0" stroke="none"/></g>
      </g>
      <g fill="currentColor" font-size="13" text-anchor="middle" stroke="none">
        <text x="30" y="72">1</text>
        <text x="100" y="72">2</text>
        <text x="170" y="72">3</text>
        <text x="240" y="72">4</text>
      </g>
    </svg>`,
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 2,
    explanation:
      "Figures 1, 2 and 4 point right; figure 3 points left. Orientation is the shared feature, and figure 3 breaks it.",
    tip: "For arrow/shape sets, compare orientation, size and shading. Here only the direction differs — spot the one that's flipped.",
  },
  {
    id: "abs-020",
    category: "abstract",
    difficulty: 2,
    prompt:
      "The clock hand turns the same way each step. Where does it point in the fourth clock?",
    svg: `<svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clock hands pointing to 12, 3 and 6 o'clock, then a question mark">
      <g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.8">
        <circle cx="30" cy="32" r="22"/>
        <circle cx="100" cy="32" r="22"/>
        <circle cx="170" cy="32" r="22"/>
        <circle cx="240" cy="32" r="22"/>
      </g>
      <g stroke="currentColor" stroke-width="3" stroke-linecap="round">
        <line x1="30" y1="32" x2="30" y2="14"/>
        <line x1="100" y1="32" x2="118" y2="32"/>
        <line x1="170" y1="32" x2="170" y2="50"/>
      </g>
      <g fill="currentColor"><circle cx="30" cy="32" r="3"/><circle cx="100" cy="32" r="3"/><circle cx="170" cy="32" r="3"/></g>
      <text x="240" y="40" text-anchor="middle" font-size="24" fill="currentColor">?</text>
    </svg>`,
    options: ["9 o'clock", "12 o'clock", "3 o'clock", "6 o'clock"],
    answerIndex: 0,
    explanation:
      "The hand turns 90° clockwise each step: 12 → 3 → 6 → 9 o'clock.",
    tip: "A rotating hand is the same as a rotating arrow. Track the quarter-turns: 12, 3, 6, then 9.",
  },
  {
    id: "abs-023",
    category: "abstract",
    difficulty: 1,
    prompt: "Which figure is the odd one out?",
    svg: `<svg viewBox="0 0 280 78" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four circles; three are filled and one is an outline only">
      <g stroke="currentColor" stroke-width="2">
        <circle cx="30" cy="30" r="16" fill="currentColor"/>
        <circle cx="100" cy="30" r="16" fill="currentColor"/>
        <circle cx="170" cy="30" r="16" fill="none"/>
        <circle cx="240" cy="30" r="16" fill="currentColor"/>
      </g>
      <g fill="currentColor" font-size="13" text-anchor="middle">
        <text x="30" y="68">1</text>
        <text x="100" y="68">2</text>
        <text x="170" y="68">3</text>
        <text x="240" y="68">4</text>
      </g>
    </svg>`,
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 2,
    explanation:
      "Figures 1, 2 and 4 are filled; figure 3 is an outline only. Shading is the shared feature that figure 3 breaks.",
    tip: "When the shapes are identical, the difference is usually shading or fill. Scan for the one that's empty (or full) when the rest aren't.",
  },
  {
    id: "abs-024",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. In each row, the third value follows one rule:\n2   4   8\n3   3   9\n5   2   ?",
    options: ["7", "10", "12", "25"],
    answerIndex: 1,
    explanation:
      "Each row multiplies the first two numbers: 2×4=8, 3×3=9, so 5×2=10.",
    tip: "Confirm the operation on the two complete rows before applying it. Multiply works on both here.",
  },
  {
    id: "abs-025",
    category: "abstract",
    difficulty: 2,
    prompt: "Which letter continues the pattern?\nA, B, D, G, K, ?",
    options: ["N", "O", "P", "Q"],
    answerIndex: 2,
    explanation:
      "The gaps grow: +1 (A→B), +2 (B→D), +3 (D→G), +4 (G→K), so next is +5. K is the 11th letter; 11 + 5 = 16 = P.",
    tip: "Map letters to numbers and watch the gaps. A +1,+2,+3,+4 staircase points to +5 next.",
  },
  {
    id: "abs-026",
    category: "abstract",
    difficulty: 1,
    prompt: "Which number does NOT belong with the others?",
    options: ["16", "25", "36", "40"],
    answerIndex: 3,
    explanation:
      "16 = 4², 25 = 5², 36 = 6² are perfect squares. 40 is not, so it's the odd one out.",
    tip: "Test perfect squares first when numbers are mid-sized and 'neat'. 40 sits between 36 and 49, so it can't be a square.",
  },
  {
    id: "abs-027",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. Each row follows the same rule:\n4   5   9\n6   2   8\n7   3   ?",
    options: ["9", "10", "11", "21"],
    answerIndex: 1,
    explanation:
      "Each row adds the first two numbers: 4+5=9, 6+2=8, so 7+3=10.",
    tip: "If 'add' explains the first two rows, trust it for the third. Always verify on every complete row.",
  },
  {
    id: "abs-028",
    category: "abstract",
    difficulty: 2,
    prompt: "Which shape has exactly TWO lines of symmetry?",
    options: [
      "A square",
      "A (non-square) rectangle",
      "An equilateral triangle",
      "A circle",
    ],
    answerIndex: 1,
    explanation:
      "A rectangle has exactly 2 lines of symmetry (one vertical, one horizontal). A square has 4, an equilateral triangle 3, and a circle infinitely many.",
    tip: "Memorise symmetry counts: rectangle 2, equilateral triangle 3, square 4, regular pentagon 5, circle infinite.",
  },
  {
    id: "abs-029",
    category: "abstract",
    difficulty: 1,
    prompt: "What number comes next?\n8, 27, 64, 125, ?",
    options: ["180", "196", "216", "256"],
    answerIndex: 2,
    explanation:
      "These are the cubes 2³, 3³, 4³, 5³, so the next is 6³ = 216.",
    tip: "Spot the cubes (8, 27, 64, 125, 216). Like squares, keeping them on recall saves time.",
  },
  {
    id: "abs-030",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. Each row follows the same rule:\n9   4   5\n8   3   5\n10  6   ?",
    options: ["4", "5", "6", "16"],
    answerIndex: 0,
    explanation:
      "Each row subtracts the second number from the first: 9−4=5, 8−3=5, so 10−6=4.",
    tip: "If addition doesn't fit, try subtraction (first minus second). Test it on both complete rows.",
  },
  {
    id: "abs-031",
    category: "abstract",
    difficulty: 1,
    prompt:
      "A large square is to a small square as a large circle is to:",
    options: [
      "a small circle",
      "a large triangle",
      "a small square",
      "a large circle",
    ],
    answerIndex: 0,
    explanation:
      "Only the size changes (large → small); the shape stays the same. A large circle maps to a small circle.",
    tip: "Change exactly the attribute that changed in the first pair (size), and keep everything else (shape) fixed.",
  },
  {
    id: "abs-032",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n3, 6, 5, 10, 9, 18, ?",
    options: ["16", "17", "19", "36"],
    answerIndex: 1,
    explanation:
      "The operations alternate ×2 then −1: 3×2=6, 6−1=5, 5×2=10, 10−1=9, 9×2=18, then 18−1=17.",
    tip: "If no single rule fits, look for two alternating operations (×2, −1). Apply whichever comes next in the cycle.",
  },
  {
    id: "abs-033",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Which capital letter looks the same after being rotated 180° (turned upside down)?",
    options: ["H", "E", "F", "P"],
    answerIndex: 0,
    explanation:
      "H has 180° rotational symmetry — turning it upside down leaves it unchanged. E, F and P all look different rotated.",
    tip: "Letters with 180° symmetry include H, I, N, O, S, X, Z. For 'upside-down' questions, picture the letter rotated, not mirrored.",
  },
  {
    id: "abs-034",
    category: "abstract",
    difficulty: 2,
    prompt:
      "Find the missing number. Each row follows the same rule:\n2   4   8\n3   6   12\n5   10  ?",
    options: ["15", "20", "25", "40"],
    answerIndex: 1,
    explanation:
      "Across each row the value doubles: 2→4→8, 3→6→12, 5→10→20. The missing number is 20.",
    tip: "Read the grid left-to-right and test the per-step rule (here ×2). Confirm it on the rows you can see.",
  },
  {
    id: "abs-035",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Which capital letter looks the same when reflected in a HORIZONTAL mirror (flipped top-to-bottom)?",
    options: ["B", "A", "T", "V"],
    answerIndex: 0,
    explanation:
      "B is symmetric about a horizontal axis, so a top-to-bottom flip leaves it unchanged. A, T and V are only symmetric left-to-right, not top-to-bottom.",
    tip: "A horizontal mirror swaps top and bottom. Letters that survive include B, C, D, E, H, I, K, O, X — not A or V (those are vertical-axis only).",
  },
  {
    id: "abs-036",
    category: "abstract",
    difficulty: 1,
    prompt: "Which shape does NOT belong with the others?",
    options: ["Square", "Rectangle", "Rhombus", "Triangle"],
    answerIndex: 3,
    explanation:
      "A square, rectangle and rhombus are all four-sided (quadrilaterals). A triangle has three sides, so it breaks the group.",
    tip: "Group by side count. Three shapes are quadrilaterals; the triangle is the outlier.",
  },
  {
    id: "abs-037",
    category: "abstract",
    difficulty: 1,
    prompt: "What number comes next?\n3, 6, 12, 24, ?",
    options: ["36", "42", "48", "30"],
    answerIndex: 2,
    explanation: "Each term doubles: 3, 6, 12, 24, 48.",
    tip: "Constant ratio = geometric series. Multiply the last term by the ratio (×2 here).",
  },
  {
    id: "abs-038",
    category: "abstract",
    difficulty: 2,
    prompt: "What number comes next?\n2, 3, 5, 8, 13, ?",
    options: ["18", "20", "21", "26"],
    answerIndex: 2,
    explanation:
      "Each term is the sum of the previous two (a Fibonacci-style rule): 8 + 13 = 21.",
    tip: "If each term looks like the sum of the two before it, test that rule — it confirms in one addition.",
  },
  {
    id: "abs-039",
    category: "abstract",
    difficulty: 1,
    prompt: "If 2 → 6 and 3 → 9, then 4 → ?",
    options: ["7", "8", "12", "16"],
    answerIndex: 2,
    explanation:
      "The rule multiplies by 3: 2×3=6, 3×3=9, so 4×3=12.",
    tip: "Find the single operation that turns the inputs into their outputs (×3 here) and apply it to the new input.",
  },
  {
    id: "abs-040",
    category: "abstract",
    difficulty: 3,
    prompt: "What number comes next?\n1, 10, 2, 9, 3, 8, ?",
    options: ["4", "7", "5", "11"],
    answerIndex: 0,
    explanation:
      "Two series are interleaved: an ascending one (1, 2, 3, 4 …) and a descending one (10, 9, 8 …). After 8 comes the next ascending term, 4.",
    tip: "When numbers zig-zag, split them into alternate positions. Here the odd positions count up (1,2,3) and the even positions count down (10,9,8).",
  },
  {
    id: "abs-041",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In each row, the third square combines the first two. A small square is shaded only if it is shaded in exactly ONE of the first two boxes. Which option (A–D) completes the grid?",
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
      "This is an exclusive-OR (XOR) rule: a square is shaded in the third box only when it is shaded in just one of the first two. For the bottom row, the first box shades TL, BR, BL and the second shades TL, TR, BR. TL and BR appear in both (so they switch off); TR and BL appear once (so they stay on). The result is the top-right and bottom-left squares — option A.",
    tip: "For combining-grid matrices, test the three logic rules in turn: AND (shaded in both), OR (shaded in either), XOR (shaded in exactly one). Confirm whichever rule fits the two complete rows.",
  },
  {
    id: "abs-042",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In each row, a small square is shaded in the third box only if it is shaded in BOTH of the first two boxes. Which option (A–D) completes the grid?",
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
      "This is an AND rule: only squares shaded in both of the first two boxes survive. In the bottom row the first box is fully shaded and the second shades TR and BL, so the overlap is exactly TR and BL — option A.",
    tip: "AND keeps only the common shading; OR keeps everything; XOR keeps the differences. Here the third box always has fewer shaded squares than either input, which points to AND.",
  },
  {
    id: "abs-043",
    category: "abstract",
    difficulty: 3,
    prompt:
      "Reading each row left to right, one more square is shaded each step, added in clockwise order. Which option (A–D) completes the grid?",
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
      "Each row starts at a different corner and adds the next square clockwise on every step. The bottom row starts at BR, then adds BL, so the third box adds the next clockwise square, TL — giving BR, BL and TL (option A).",
    tip: "When shaded squares accumulate, find the starting corner and the direction of travel, then add one more in that direction for the missing box.",
  },
  {
    id: "abs-044",
    category: "abstract",
    difficulty: 3,
    prompt:
      "A single shaded square advances one position clockwise with every step to the right AND every step down. Which option (A–D) completes the grid?",
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
      "The shaded square moves one corner clockwise (TL → TR → BR → BL → TL …) for each step right and each step down. The bottom-left cell is shaded BL, so one more clockwise step lands on TL — option A.",
    tip: "Treat moving-element matrices as two rules at once (one across, one down). Apply both to reach the bottom-right cell.",
  },
  {
    id: "abs-045",
    category: "abstract",
    difficulty: 3,
    prompt:
      "The triangle changes by two rules at once each step. Which option (A–D) comes next?",
    svg: triangleSeqSvg(
      [
        { rot: 0, filled: true },
        { rot: 90, filled: false },
        { rot: 180, filled: true },
        "Q",
      ],
      [
        { rot: 270, filled: false },
        { rot: 270, filled: true },
        { rot: 0, filled: false },
        { rot: 90, filled: false },
      ]
    ),
    options: ["Option A", "Option B", "Option C", "Option D"],
    answerIndex: 0,
    explanation:
      "Two rules run together: the triangle rotates 90° clockwise each step (up → right → down → left), and its fill alternates (filled, empty, filled, empty). The fourth frame is therefore a left-pointing, unfilled triangle — option A.",
    tip: "When a single element changes in more than one way, track each attribute (rotation, fill, size) on its own line, then combine them for the answer.",
  },
  {
    id: "abs-046",
    category: "abstract",
    difficulty: 3,
    prompt:
      "In three of these figures the number of dots equals the number of sides of the shape. Which figure breaks the rule?",
    svg: polygonDotsSvg([
      { sides: 3, dots: 3 },
      { sides: 4, dots: 4 },
      { sides: 5, dots: 5 },
      { sides: 6, dots: 5 },
    ]),
    options: ["Figure 1", "Figure 2", "Figure 3", "Figure 4"],
    answerIndex: 3,
    explanation:
      "Figure 1 (triangle, 3 dots), figure 2 (square, 4 dots) and figure 3 (pentagon, 5 dots) all match dots to sides. Figure 4 is a hexagon (6 sides) but shows only 5 dots, breaking the rule.",
    tip: "When a hidden relationship links two features (here dots ↔ sides), check each figure against it. The odd one out is the single figure where the relationship fails.",
  },
];
