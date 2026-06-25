import type { Question } from "../types";

export const numericalQuestions: Question[] = [
  {
    id: "num-001",
    category: "numerical",
    difficulty: 1,
    prompt: "What number comes next in the series?\n2, 6, 12, 20, 30, ?",
    options: ["38", "40", "42", "44"],
    answerIndex: 2,
    explanation:
      "The gaps grow by 2 each time: +4, +6, +8, +10, so the next gap is +12. 30 + 12 = 42.",
    tip: "When a series jumps around, write the differences underneath. If the differences form their own simple pattern, you've cracked it.",
  },
  {
    id: "num-002",
    category: "numerical",
    difficulty: 2,
    prompt:
      "A shirt costs $40. The price is increased by 25%, then later decreased by 20%. What is the final price?",
    options: ["$38", "$40", "$42", "$44"],
    answerIndex: 1,
    explanation:
      "40 × 1.25 = 50. Then 50 × 0.80 = 40. A 25% rise followed by a 20% fall returns to the start because 1.25 × 0.80 = 1.",
    tip: "Apply successive percentage changes as multipliers (×1.25 then ×0.80), never by adding/subtracting the percentages. The multipliers can conveniently cancel.",
  },
  {
    id: "num-003",
    category: "numerical",
    difficulty: 2,
    prompt:
      "The average of 5 numbers is 18. One number is removed and the average of the remaining 4 is 20. What was the removed number?",
    options: ["8", "10", "12", "14"],
    answerIndex: 1,
    explanation:
      "Total of 5 numbers = 5 × 18 = 90. Total of remaining 4 = 4 × 20 = 80. Removed number = 90 − 80 = 10.",
    tip: "Convert averages to totals immediately (average × count = sum). Most average puzzles collapse into a simple subtraction of two sums.",
  },
  {
    id: "num-004",
    category: "numerical",
    difficulty: 1,
    prompt:
      "A sum of $600 is divided between A and B in the ratio 2 : 3. How much does B receive?",
    options: ["$240", "$300", "$360", "$400"],
    answerIndex: 2,
    explanation:
      "There are 2 + 3 = 5 parts. Each part = 600 ÷ 5 = 120. B has 3 parts = 3 × 120 = $360.",
    tip: "Add the ratio numbers to get total parts, divide the total by that, then multiply by the share you need. Three quick steps.",
  },
  {
    id: "num-005",
    category: "numerical",
    difficulty: 1,
    prompt:
      "A train travels 240 km in 3 hours. At the same speed, how far will it travel in 5 hours?",
    options: ["360 km", "380 km", "400 km", "420 km"],
    answerIndex: 2,
    explanation:
      "Speed = 240 ÷ 3 = 80 km/h. In 5 hours: 80 × 5 = 400 km.",
    tip: "Find the unit rate first (per 1 hour, per 1 item). Once you have the rate, the rest is one multiplication.",
  },
  {
    id: "num-006",
    category: "numerical",
    difficulty: 2,
    prompt: "What number comes next?\n3, 7, 15, 31, ?",
    options: ["47", "55", "63", "62"],
    answerIndex: 2,
    explanation:
      "Each term is the previous one doubled plus 1: 3→7 (×2+1), 7→15, 15→31, 31×2+1 = 63.",
    tip: "If terms roughly double, test the rule ×2 then adjust by a small constant (+1, −1, +2). It catches a huge share of 'next number' items.",
  },
  {
    id: "num-007",
    category: "numerical",
    difficulty: 2,
    prompt:
      "If 4 workers build a wall in 6 days, how many days would 3 workers take, working at the same rate?",
    options: ["7", "8", "9", "4.5"],
    answerIndex: 1,
    explanation:
      "The job is 4 × 6 = 24 worker-days. With 3 workers: 24 ÷ 3 = 8 days. Fewer workers means more days (inverse proportion).",
    tip: "For workers/days problems, compute the constant 'worker-days' (people × time). Then divide by the new number of people.",
  },
  {
    id: "num-008",
    category: "numerical",
    difficulty: 1,
    prompt: "What is 15% of 240?",
    options: ["24", "30", "36", "42"],
    answerIndex: 2,
    explanation:
      "10% of 240 = 24, and 5% = 12. So 15% = 24 + 12 = 36.",
    tip: "Build awkward percentages from 10% and 5%. 10% is just moving the decimal; 5% is half of that.",
  },
  {
    id: "num-009",
    category: "numerical",
    difficulty: 2,
    prompt:
      "An item is bought for $80 and sold for $100. What is the profit as a percentage of the cost?",
    options: ["20%", "25%", "80%", "125%"],
    answerIndex: 1,
    explanation:
      "Profit = 100 − 80 = 20. Profit % = 20 ÷ 80 = 0.25 = 25%. Profit percentage is always measured against cost price, not selling price.",
    tip: "Percentage change = (change ÷ original) × 100. The 'original' for profit is always the cost you started from.",
  },
  {
    id: "num-010",
    category: "numerical",
    difficulty: 2,
    prompt: "If 3/5 of a number is 36, what is the number?",
    options: ["48", "54", "60", "72"],
    answerIndex: 2,
    explanation:
      "3/5 of N = 36 → N = 36 × 5 ÷ 3 = 60. (One fifth is 36 ÷ 3 = 12, so the whole is 12 × 5 = 60.)",
    tip: "To undo 'fraction of N', multiply by the upside-down fraction. Or find one part (÷ numerator) then scale to five parts (× denominator).",
  },
  {
    id: "num-011",
    category: "numerical",
    difficulty: 1,
    prompt: "What number comes next?\n1, 1, 2, 3, 5, 8, ?",
    options: ["11", "12", "13", "15"],
    answerIndex: 2,
    explanation:
      "Fibonacci: each term is the sum of the previous two. 5 + 8 = 13.",
    tip: "Memorise the Fibonacci start (1,1,2,3,5,8,13,21). It shows up often and is instantly recognisable.",
  },
  {
    id: "num-012",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A laptop priced at $1,000 has a 10% discount applied, then 5% sales tax is added to the discounted price. What is the final amount paid?",
    options: ["$945", "$950", "$955", "$1,045"],
    answerIndex: 0,
    explanation:
      "After discount: 1000 × 0.90 = 900. After tax: 900 × 1.05 = 945.",
    tip: "Chain the multipliers in order: discount first (×0.90), then tax (×1.05). Don't combine the 10% and 5% into 5% — they apply to different bases.",
  },
  {
    id: "num-013",
    category: "numerical",
    difficulty: 3,
    prompt:
      "Anna is twice as old as Ben. In 5 years, their combined age will be 40. How old is Anna now?",
    options: ["16", "18", "20", "24"],
    answerIndex: 2,
    explanation:
      "Let Ben = b, Anna = 2b, combined now = 3b. In 5 years each gains 5, so combined = 3b + 10 = 40 → 3b = 30 → b = 10. Anna = 2 × 10 = 20.",
    tip: "Define one variable for the simplest person, express the other in terms of it, and remember to age everyone when the problem says 'in X years.'",
  },
  {
    id: "num-014",
    category: "numerical",
    difficulty: 2,
    prompt:
      "A population of 800 grows by 10%, then falls by 10% the following year. What is the final population?",
    options: ["800", "792", "808", "780"],
    answerIndex: 1,
    explanation:
      "800 × 1.10 = 880, then 880 × 0.90 = 792. A rise then an equal-percentage fall always lands slightly below the start (1.1 × 0.9 = 0.99).",
    tip: "A +x% then −x% is NOT a wash — it loses x²/100 percent. Spotting this saves you from the obvious-but-wrong answer of '800'.",
  },
  {
    id: "num-015",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A and B share money in the ratio 5 : 3. A receives $40 more than B. What is the total amount shared?",
    options: ["$120", "$160", "$200", "$320"],
    answerIndex: 1,
    explanation:
      "The difference is 5 − 3 = 2 parts, equal to $40, so one part = $20. Total = 8 parts × $20 = $160.",
    tip: "When a ratio gives you a difference, set 'difference in parts = the given amount' to find one part's value, then scale to the total parts.",
  },
  {
    id: "num-016",
    category: "numerical",
    difficulty: 2,
    prompt:
      "A car covers 150 km using 12 litres of fuel. How many litres are needed for 250 km at the same consumption?",
    options: ["18", "20", "22", "24"],
    answerIndex: 1,
    explanation:
      "Consumption = 12 ÷ 150 = 0.08 L/km. For 250 km: 250 × 0.08 = 20 litres. (Or: 250/150 × 12 = 20.)",
    tip: "Set up as a proportion: litres/km is constant, so litres = (new distance ÷ old distance) × old litres. Cross-multiplying avoids decimals.",
  },
];
