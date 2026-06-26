import type { Question } from "../types";

export const numericalQuestions: Question[] = [
  {
    id: "num-201",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A retailer marks up cost by 40%, then offers a 25% discount on the marked price. What is the profit as a percentage of cost?",
    options: ["5%", "10%", "15%", "0%"],
    answerIndex: 0,
    explanation:
      "Cost = 100 → marked 100×1.4 = 140 → sold 140×0.75 = 105. Profit = 5, i.e. 5% of cost.",
    tip: "Anchor cost at 100 and chain the multipliers (×1.4 then ×0.75 = ×1.05). The factor minus 1 is the profit rate.",
  },
  {
    id: "num-202",
    category: "numerical",
    difficulty: 3,
    prompt:
      "The average of 6 numbers is 15. The average of the first 4 is 12 and the average of the last 3 is 22. What is the 4th number?",
    options: ["18", "20", "22", "24"],
    answerIndex: 3,
    explanation:
      "Total = 90. First 4 = 48, last 3 = 66. They overlap only on the 4th number: 48 + 66 = 90 + 4th → 4th = 24.",
    tip: "When two groups overlap, (sum A) + (sum B) − (grand total) = the shared member.",
  },
  {
    id: "num-203",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A train travels at 72 km/h. How many metres does it cover in 5 seconds?",
    options: ["72 m", "100 m", "120 m", "144 m"],
    answerIndex: 1,
    explanation:
      "72 km/h = 72000 m ÷ 3600 s = 20 m/s. In 5 s: 20 × 5 = 100 m.",
    tip: "Convert km/h to m/s by multiplying by 5/18 (72 × 5/18 = 20). It's the most common unit trap.",
  },
  {
    id: "num-204",
    category: "numerical",
    difficulty: 3,
    prompt:
      "If 5 men can do a job in 12 days, and 8 women can do the same job in 12 days, how long will 5 men and 8 women take together?",
    options: ["4 days", "6 days", "8 days", "10 days"],
    answerIndex: 1,
    explanation:
      "5 men do 1/12 of the job per day; 8 women also 1/12 per day. Together 1/12 + 1/12 = 1/6 per day → 6 days.",
    tip: "Add the per-day work rates of each team, then invert to get the time. Rates add; times don't.",
  },
  {
    id: "num-205",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A sum of money doubles in 8 years under simple interest. What is the annual interest rate?",
    options: ["8%", "10%", "12.5%", "16%"],
    answerIndex: 2,
    explanation:
      "Doubling means the interest equals the principal over 8 years: rate × 8 = 100% → rate = 12.5% per year.",
    tip: "Under simple interest, 'doubles in n years' means rate = 100/n percent.",
  },
  {
    id: "num-206",
    category: "numerical",
    difficulty: 3,
    prompt:
      "20 litres of a solution is 30% acid. How much water must be added to make it 25% acid?",
    options: ["3 L", "4 L", "5 L", "6 L"],
    answerIndex: 1,
    explanation:
      "Acid = 6 L (fixed). Need 6 ÷ (20 + x) = 0.25 → 20 + x = 24 → x = 4 L.",
    tip: "In dilution problems the solute stays constant. Set solute ÷ new total = target fraction and solve.",
  },
  {
    id: "num-207",
    category: "numerical",
    difficulty: 3,
    prompt:
      "After a 20% discount, an item costs $160. What was the original price?",
    options: ["$180", "$192", "$200", "$210"],
    answerIndex: 2,
    explanation:
      "160 is 80% of the original: original = 160 ÷ 0.8 = $200.",
    tip: "To reverse a percentage change, divide by the multiplier — not add the percentage back. 20% off = ÷0.8.",
  },
  {
    id: "num-208",
    category: "numerical",
    difficulty: 3,
    prompt:
      "The ratio of boys to girls is 5 : 3. If 8 more girls join, the ratio becomes 5 : 4. How many boys are there?",
    options: ["24", "32", "40", "48"],
    answerIndex: 2,
    explanation:
      "Let boys = 5x, girls = 3x. Then 5x/(3x+8) = 5/4 → 20x = 15x + 40 → 5x = 40 → x = 8. Boys = 5×8 = 40.",
    tip: "Express both quantities with the same unknown (5x and 3x), then turn the new ratio into an equation.",
  },
  {
    id: "num-209",
    category: "numerical",
    difficulty: 3,
    prompt: "What number comes next?\n3, 8, 18, 38, ?",
    options: ["68", "76", "78", "80"],
    answerIndex: 2,
    explanation:
      "Each term is the previous doubled plus 2: 3×2+2=8, 8×2+2=18, 18×2+2=38, 38×2+2 = 78.",
    tip: "If terms slightly more than double, test ×2 + constant. Here the constant is +2.",
  },
  {
    id: "num-210",
    category: "numerical",
    difficulty: 3,
    prompt:
      "Pipe A fills a tank in 6 hours and pipe B in 4 hours. With both open, how long to fill the tank?",
    options: ["2 h", "2.4 h", "2.5 h", "3 h"],
    answerIndex: 1,
    explanation:
      "Rates: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour → time = 12/5 = 2.4 hours.",
    tip: "Add fill rates over a common denominator, then invert. 1/6 + 1/4 = 5/12, so the answer is 12/5.",
  },
  {
    id: "num-211",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A car travels 60 km at 30 km/h and returns the same 60 km at 60 km/h. What is the average speed for the whole trip?",
    options: ["35 km/h", "40 km/h", "45 km/h", "50 km/h"],
    answerIndex: 1,
    explanation:
      "Time out = 2 h, time back = 1 h, total 3 h for 120 km. Average = 120 ÷ 3 = 40 km/h (not 45 — average speed weights time, not distance).",
    tip: "Average speed = total distance ÷ total time. Never just average the two speeds.",
  },
  {
    id: "num-212",
    category: "numerical",
    difficulty: 3,
    prompt: "If x + 1/x = 3, what is x² + 1/x²?",
    options: ["6", "7", "9", "11"],
    answerIndex: 1,
    explanation:
      "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 9, so x² + 1/x² = 9 − 2 = 7.",
    tip: "Squaring x + 1/x gives the cross term 2. Subtract it to isolate x² + 1/x².",
  },
  {
    id: "num-213",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A is 50% more than B, and B is 20% less than C. A is what percentage of C?",
    options: ["110%", "120%", "130%", "150%"],
    answerIndex: 1,
    explanation:
      "B = 0.8C, A = 1.5 × B = 1.5 × 0.8C = 1.2C → A is 120% of C.",
    tip: "Chain the relationships as multipliers anchored to C: ×0.8 then ×1.5.",
  },
  {
    id: "num-214",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A worker A finishes a job in 10 days and B in 15 days. They start together, but A leaves after 2 days. How many total days to finish the job?",
    options: ["10", "11", "12", "13"],
    answerIndex: 2,
    explanation:
      "Together they do 1/10 + 1/15 = 1/6 per day. In 2 days: 2/6 = 1/3 done. B alone finishes 2/3 at 1/15 per day → (2/3)/(1/15) = 10 days. Total = 2 + 10 = 12.",
    tip: "Compute work done in the shared phase, then divide the remainder by the lone worker's rate.",
  },
  {
    id: "num-215",
    category: "numerical",
    difficulty: 3,
    prompt: "What number comes next?\n1, 4, 27, 256, ?",
    options: ["1024", "2500", "3125", "4096"],
    answerIndex: 2,
    explanation:
      "Each term is n to the power n: 1¹, 2², 3³, 4⁴, so 5⁵ = 3125.",
    tip: "When values explode far faster than simple powers, test nⁿ (1, 4, 27, 256, 3125).",
  },
  {
    id: "num-216",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A price increases by 25%. By what percentage must it then fall to return to the original price?",
    options: ["20%", "25%", "30%", "75%"],
    answerIndex: 0,
    explanation:
      "New price = 1.25× original. To undo it: fall = 0.25/1.25 = 0.20 = 20% of the higher price.",
    tip: "A rise of x% needs a fall of x/(100+x) percent to reverse — the fall is always smaller than the rise.",
  },
  {
    id: "num-217",
    category: "numerical",
    difficulty: 3,
    prompt: "What is 7! ÷ 5!?",
    options: ["2", "30", "42", "120"],
    answerIndex: 2,
    explanation:
      "7! ÷ 5! = 7 × 6 = 42 (the 5! cancels).",
    tip: "Factorials cancel: n!/(n−2)! = n(n−1). No need to compute the full factorials.",
  },
  {
    id: "num-218",
    category: "numerical",
    difficulty: 3,
    prompt:
      "Two dice are rolled. What is the probability that the sum is 7?",
    options: ["1/9", "1/6", "5/36", "7/36"],
    answerIndex: 1,
    explanation:
      "There are 6 ways to total 7 (1-6, 2-5, 3-4, 4-3, 5-2, 6-1) out of 36 outcomes: 6/36 = 1/6.",
    tip: "7 is the most likely dice total, with 6 of 36 combinations. Count favourable outcomes over 36.",
  },
  {
    id: "num-219",
    category: "numerical",
    difficulty: 3,
    prompt:
      "The sum of five consecutive integers is 100. What is the largest of them?",
    options: ["20", "21", "22", "24"],
    answerIndex: 2,
    explanation:
      "The middle integer is 100 ÷ 5 = 20, so the five are 18, 19, 20, 21, 22. The largest is 22.",
    tip: "For an odd count of consecutive integers, the average equals the middle term. Build outward from there.",
  },
  {
    id: "num-220",
    category: "numerical",
    difficulty: 3,
    prompt: "What number comes next?\n2, 12, 36, 80, ?",
    options: ["120", "144", "150", "160"],
    answerIndex: 2,
    explanation:
      "Each term is n²(n+1): 1²·2=2, 2²·3=12, 3²·4=36, 4²·5=80, so 5²·6 = 150.",
    tip: "If a series grows fast and irregularly, test position-based formulas like n²(n+1) or n(n+1)(n+2).",
  },
  {
    id: "num-221",
    category: "numerical",
    difficulty: 3,
    prompt:
      "$8,000 is invested at 10% compound interest per year. How much interest is earned after 2 years?",
    options: ["$1,600", "$1,680", "$1,700", "$1,764"],
    answerIndex: 1,
    explanation:
      "8000 × 1.1² = 8000 × 1.21 = 9680. Interest = 9680 − 8000 = $1,680.",
    tip: "Compound interest multiplies by (1+r) each year. The extra over simple interest is interest earned on interest.",
  },
  {
    id: "num-222",
    category: "numerical",
    difficulty: 3,
    prompt:
      "Two squares have sides in the ratio 2 : 3. What is the ratio of their areas?",
    options: ["2 : 3", "4 : 6", "4 : 9", "8 : 27"],
    answerIndex: 2,
    explanation:
      "Area scales with the square of the side: (2 : 3)² = 4 : 9.",
    tip: "Lengths ratio r → areas ratio r², volumes ratio r³. A classic trap is leaving it at the linear ratio.",
  },
  {
    id: "num-223",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A shopkeeper buys oranges at 6 for $5 and sells them at 5 for $6. What is the profit percentage?",
    options: ["20%", "30%", "44%", "50%"],
    answerIndex: 2,
    explanation:
      "Take 30 oranges: cost = 30/6 × 5 = $25; revenue = 30/5 × 6 = $36. Profit = 11/25 = 44%.",
    tip: "Pick a quantity that divides both group sizes (LCM of 6 and 5 = 30) to avoid fractions of an orange.",
  },
  {
    id: "num-224",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A clock shows 3:00. What is the smaller angle between the hour and minute hands?",
    options: ["60°", "75°", "90°", "120°"],
    answerIndex: 2,
    explanation:
      "At 3:00 the minute hand is at 12 and the hour hand at 3 — exactly a quarter of the dial = 90°.",
    tip: "Each hour mark is 30° apart (360°/12). Three marks between the hands at 3:00 = 90°.",
  },
  {
    id: "num-225",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A population grows 20% one year and 20% the next. By what total percentage has it grown?",
    options: ["40%", "42%", "44%", "48%"],
    answerIndex: 2,
    explanation:
      "1.2 × 1.2 = 1.44, a 44% total increase — more than 40% because the second rise is on a larger base.",
    tip: "Successive percentage growths compound: multiply the factors. +20% then +20% = ×1.44, not +40%.",
  },
  {
    id: "num-226",
    category: "numerical",
    difficulty: 3,
    prompt:
      "If 3 cats catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    options: ["3", "33", "100", "300"],
    answerIndex: 0,
    explanation:
      "One cat catches one mouse in 3 minutes, so in 100 minutes one cat catches about 33 mice. 3 cats catch 99–100 mice in 100 minutes — 3 cats suffice.",
    tip: "Reduce to the rate per single unit (1 cat, 1 minute) before scaling. The famous trap answer here is 100.",
  },
  {
    id: "num-227",
    category: "numerical",
    difficulty: 3,
    prompt:
      "A 25% increase followed by a 20% decrease leaves a final value of $120. What was the original value?",
    options: ["$110", "$120", "$125", "$130"],
    answerIndex: 1,
    explanation:
      "Net multiplier = 1.25 × 0.80 = 1.00, so the final value equals the original: $120.",
    tip: "Multiply the change factors first. Here 1.25 × 0.8 = 1, so the value is unchanged.",
  },
  {
    id: "num-228",
    category: "numerical",
    difficulty: 3,
    prompt: "What is the sum 1 + 2 + 4 + 8 + 16 + 32?",
    options: ["56", "62", "63", "64"],
    answerIndex: 2,
    explanation:
      "A geometric series of powers of 2: the sum of 2⁰ through 2⁵ is 2⁶ − 1 = 63.",
    tip: "Powers of 2 sum to one less than the next power: 1+2+…+2ⁿ = 2ⁿ⁺¹ − 1.",
  },
];
