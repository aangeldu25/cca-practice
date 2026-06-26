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
  {
    id: "num-017",
    category: "numerical",
    difficulty: 1,
    prompt: "What number comes next?\n5, 10, 20, 40, ?",
    options: ["60", "70", "80", "100"],
    answerIndex: 2,
    explanation: "Each term doubles: 5, 10, 20, 40, 80.",
    tip: "If terms keep doubling (ratio of 2), just multiply the last by 2. Check the ratio between two pairs to confirm it's geometric.",
  },
  {
    id: "num-018",
    category: "numerical",
    difficulty: 1,
    prompt: "What is 20% of 150?",
    options: ["25", "30", "35", "45"],
    answerIndex: 1,
    explanation: "10% of 150 = 15, so 20% = 30.",
    tip: "Get 10% by moving the decimal one place, then scale. 20% is just double 10%.",
  },
  {
    id: "num-019",
    category: "numerical",
    difficulty: 1,
    prompt: "What is the average of 7, 11 and 15?",
    options: ["10", "11", "12", "13"],
    answerIndex: 1,
    explanation: "Sum = 7 + 11 + 15 = 33. Average = 33 ÷ 3 = 11.",
    tip: "For evenly spaced numbers the average is just the middle value — here, 11. A handy shortcut for arithmetic sequences.",
  },
  {
    id: "num-020",
    category: "numerical",
    difficulty: 2,
    prompt:
      "A total of $70 is split between two people in the ratio 3 : 4. How much does the smaller share receive?",
    options: ["$20", "$30", "$40", "$35"],
    answerIndex: 1,
    explanation:
      "Total parts = 3 + 4 = 7, so one part = 70 ÷ 7 = 10. Smaller share = 3 parts = $30.",
    tip: "Sum the ratio terms, divide the total by that, then multiply by the term you need. The '3' is the smaller share here.",
  },
  {
    id: "num-021",
    category: "numerical",
    difficulty: 2,
    prompt: "A cyclist covers 60 km in 45 minutes. What is the average speed in km/h?",
    options: ["75 km/h", "80 km/h", "90 km/h", "70 km/h"],
    answerIndex: 1,
    explanation:
      "45 minutes = 0.75 hours. Speed = 60 ÷ 0.75 = 80 km/h.",
    tip: "Convert minutes to hours before dividing (45 min = 0.75 h). Speed = distance ÷ time in consistent units.",
  },
  {
    id: "num-022",
    category: "numerical",
    difficulty: 2,
    prompt: "What number comes next?\n100, 50, 25, 12.5, ?",
    options: ["5", "6", "6.25", "7.5"],
    answerIndex: 2,
    explanation: "Each term is halved: 100, 50, 25, 12.5, 6.25.",
    tip: "Falling series often halve or divide by a constant. Confirm by dividing two consecutive terms (here, always ÷2).",
  },
  {
    id: "num-023",
    category: "numerical",
    difficulty: 2,
    prompt:
      "An item costing $200 is sold for $250. What is the profit as a percentage of cost?",
    options: ["20%", "25%", "30%", "50%"],
    answerIndex: 1,
    explanation: "Profit = 250 − 200 = 50. 50 ÷ 200 = 0.25 = 25%.",
    tip: "Profit % is always profit ÷ cost. Don't divide by the selling price.",
  },
  {
    id: "num-024",
    category: "numerical",
    difficulty: 1,
    prompt: "If 2/3 of a number is 60, what is the number?",
    options: ["80", "90", "100", "120"],
    answerIndex: 1,
    explanation: "N = 60 × 3 ÷ 2 = 90. (One third = 30, so the whole = 90.)",
    tip: "Divide by the numerator to get one part, then multiply by the denominator to rebuild the whole.",
  },
  {
    id: "num-025",
    category: "numerical",
    difficulty: 2,
    prompt: "A value rises from 80 to 100. What is the percentage increase?",
    options: ["20%", "25%", "% 80", "120%"],
    answerIndex: 1,
    explanation:
      "Increase = 100 − 80 = 20. Percentage increase = 20 ÷ 80 = 25% (measured against the original 80).",
    tip: "Percentage change uses the ORIGINAL value as the denominator — 80 here, not 100. A common trap is dividing by the new value.",
  },
  {
    id: "num-026",
    category: "numerical",
    difficulty: 1,
    prompt: "A jacket priced at $250 has a 20% discount. What is the sale price?",
    options: ["$180", "$200", "$210", "$230"],
    answerIndex: 1,
    explanation: "20% of 250 = 50, so sale price = 250 − 50 = $200. (Or 250 × 0.8 = 200.)",
    tip: "For a discount, multiply by (1 − rate): 20% off means ×0.8. One step, no separate subtraction.",
  },
  {
    id: "num-027",
    category: "numerical",
    difficulty: 3,
    prompt:
      "6 machines produce 600 units in 2 hours. How many units do 4 machines produce in 3 hours at the same rate?",
    options: ["400", "500", "600", "800"],
    answerIndex: 2,
    explanation:
      "Rate per machine per hour = 600 ÷ (6 × 2) = 50 units. So 4 machines × 3 hours × 50 = 600 units.",
    tip: "Reduce to a single unit rate (per machine per hour), then multiply back up by the new machines × hours.",
  },
  {
    id: "num-028",
    category: "numerical",
    difficulty: 2,
    prompt: "What number comes next?\n2, 5, 10, 17, 26, ?",
    options: ["35", "36", "37", "38"],
    answerIndex: 2,
    explanation:
      "The differences are odd numbers: +3, +5, +7, +9, then +11. 26 + 11 = 37. (These are n² + 1.)",
    tip: "When differences are consecutive odd numbers, the sequence is square-based. Spotting +3,+5,+7 tells you the next gap is +9, +11…",
  },
  {
    id: "num-029",
    category: "numerical",
    difficulty: 2,
    prompt:
      "$1,000 is shared between A, B and C in the ratio 2 : 3 : 5. How much does C receive?",
    options: ["$300", "$400", "$500", "$200"],
    answerIndex: 2,
    explanation:
      "Total parts = 2 + 3 + 5 = 10, so one part = $100. C = 5 parts = $500.",
    tip: "With three-way ratios, the parts conveniently sum to 10 here, making each part $100. Always total the parts first.",
  },
  {
    id: "num-030",
    category: "numerical",
    difficulty: 2,
    prompt:
      "What is the simple interest on $1,000 at 5% per year for 2 years?",
    options: ["$50", "$100", "$105", "$110"],
    answerIndex: 1,
    explanation:
      "Simple interest = principal × rate × time = 1000 × 0.05 × 2 = $100.",
    tip: "Simple interest is linear: principal × rate × years. Don't compound unless the question says so.",
  },
  {
    id: "num-031",
    category: "numerical",
    difficulty: 2,
    prompt: "What is 50% of 40% of 200?",
    options: ["20", "30", "40", "80"],
    answerIndex: 2,
    explanation: "40% of 200 = 80, then 50% of 80 = 40.",
    tip: "Chain percentages as multipliers: 200 × 0.4 × 0.5 = 40. Order doesn't matter — multiplication commutes.",
  },
  {
    id: "num-032",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A class of 10 students has an average score of 70. An 11th student scores 81. What is the new average?",
    options: ["70", "71", "72", "75"],
    answerIndex: 1,
    explanation:
      "Old total = 10 × 70 = 700. New total = 700 + 81 = 781. New average = 781 ÷ 11 = 71.",
    tip: "Work with totals, not averages. The new score is 11 above the old average, spread over 11 people = +1 to the average.",
  },
  {
    id: "num-033",
    category: "numerical",
    difficulty: 1,
    prompt: "A 40-litre solution is 25% acid. How many litres of acid does it contain?",
    options: ["8", "10", "12", "15"],
    answerIndex: 1,
    explanation: "25% of 40 = 0.25 × 40 = 10 litres.",
    tip: "25% is just one quarter — divide by 4. 40 ÷ 4 = 10.",
  },
  {
    id: "num-034",
    category: "numerical",
    difficulty: 2,
    prompt: "What number comes next?\n1, 8, 27, 64, ?",
    options: ["100", "115", "125", "144"],
    answerIndex: 2,
    explanation: "These are the cubes: 1³, 2³, 3³, 4³, so next is 5³ = 125.",
    tip: "Recognise the cubes (1, 8, 27, 64, 125, 216) on sight, just like the squares. They appear often in series questions.",
  },
  {
    id: "num-035",
    category: "numerical",
    difficulty: 3,
    prompt:
      "Two cars are 300 km apart and drive toward each other at 50 km/h and 70 km/h. After how long do they meet?",
    options: ["2 hours", "2.5 hours", "3 hours", "4 hours"],
    answerIndex: 1,
    explanation:
      "Closing speed = 50 + 70 = 120 km/h. Time = 300 ÷ 120 = 2.5 hours.",
    tip: "When two objects move toward each other, ADD their speeds to get the closing speed, then divide the gap by it.",
  },
  {
    id: "num-036",
    category: "numerical",
    difficulty: 2,
    prompt: "A value of 200 increases by 50%, then decreases by 50%. What is the final value?",
    options: ["100", "150", "200", "250"],
    answerIndex: 1,
    explanation:
      "200 × 1.5 = 300, then 300 × 0.5 = 150. A +50% then −50% does not return to the start.",
    tip: "Equal up-then-down percentages never cancel: ×1.5 then ×0.5 = ×0.75. The obvious answer (200) is the trap.",
  },
  {
    id: "num-037",
    category: "numerical",
    difficulty: 1,
    prompt:
      "A recipe uses 2 cups of flour for every 1 cup of sugar. How much sugar is needed for 8 cups of flour?",
    options: ["2 cups", "3 cups", "4 cups", "6 cups"],
    answerIndex: 2,
    explanation:
      "Flour : sugar = 2 : 1. For 8 cups of flour (×4), sugar = 1 × 4 = 4 cups.",
    tip: "Find the scaling factor (8 ÷ 2 = 4) and apply it to the other quantity. Ratios scale up together.",
  },
  {
    id: "num-038",
    category: "numerical",
    difficulty: 2,
    prompt: "Which fraction is the largest?",
    options: ["2/3", "3/5", "5/8", "7/10"],
    answerIndex: 3,
    explanation:
      "As decimals: 2/3 ≈ 0.667, 3/5 = 0.6, 5/8 = 0.625, 7/10 = 0.7. The largest is 7/10.",
    tip: "Convert each fraction to a decimal (numerator ÷ denominator) to compare quickly, or cross-multiply pairs.",
  },
  {
    id: "num-039",
    category: "numerical",
    difficulty: 2,
    prompt: "A is 25% more than B. If B = 80, what is A?",
    options: ["95", "100", "105", "120"],
    answerIndex: 1,
    explanation: "A = 80 × 1.25 = 100.",
    tip: "'25% more than' means ×1.25. Turn 'more/less than' phrases straight into a multiplier.",
  },
  {
    id: "num-040",
    category: "numerical",
    difficulty: 3,
    prompt:
      "$1,000 is invested at 10% compound interest per year. What is it worth after 2 years?",
    options: ["$1,100", "$1,200", "$1,210", "$1,220"],
    answerIndex: 2,
    explanation:
      "Year 1: 1000 × 1.1 = 1100. Year 2: 1100 × 1.1 = 1210. (Or 1000 × 1.1² = 1210.)",
    tip: "Compound interest multiplies by (1 + rate) each year: 1000 × 1.1². The extra $10 over simple interest is interest on the first year's interest.",
  },
];
