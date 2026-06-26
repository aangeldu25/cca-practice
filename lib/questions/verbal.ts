import type { Question } from "../types";

export const verbalQuestions: Question[] = [
  {
    id: "ver-201",
    category: "verbal",
    difficulty: 3,
    prompt: "PERFUNCTORY most nearly means:",
    options: ["Careless", "Thorough", "Eager", "Hostile"],
    answerIndex: 0,
    explanation:
      "Perfunctory means done routinely, with minimal effort or care — i.e. careless/cursory. 'Thorough' is its opposite.",
    tip: "For tough vocabulary, recall the word in a phrase ('a perfunctory glance') to recover its dismissive, careless tone.",
  },
  {
    id: "ver-202",
    category: "verbal",
    difficulty: 3,
    prompt: "Select the word most OPPOSITE in meaning to GREGARIOUS.",
    options: ["Sociable", "Reclusive", "Friendly", "Outgoing"],
    answerIndex: 1,
    explanation:
      "Gregarious means fond of company and sociable; its opposite is reclusive. Sociable, friendly and outgoing are all synonyms.",
    tip: "Three near-synonyms plus one true opposite — the lone word with the reversed meaning is the antonym.",
  },
  {
    id: "ver-203",
    category: "verbal",
    difficulty: 3,
    prompt: "GARRULOUS is to TALKATIVE as TACITURN is to:",
    options: ["Silent", "Loud", "Rude", "Honest"],
    answerIndex: 0,
    explanation:
      "Garrulous and talkative are synonyms (excessively chatty). The synonym of taciturn (reserved, saying little) is silent.",
    tip: "Decide the base pair's relationship first. Here it's 'synonyms', so match TACITURN with its synonym, not its opposite.",
  },
  {
    id: "ver-204",
    category: "verbal",
    difficulty: 3,
    prompt: "OBFUSCATE most nearly means:",
    options: ["Clarify", "Confuse", "Reveal", "Simplify"],
    answerIndex: 1,
    explanation:
      "To obfuscate is to make something obscure or unclear — to confuse. Clarify, reveal and simplify are opposites.",
    tip: "The prefix and harsh sound hint at something negative; obfuscate = deliberately muddy or confuse.",
  },
  {
    id: "ver-205",
    category: "verbal",
    difficulty: 3,
    prompt: "Select the word most OPPOSITE in meaning to MITIGATE.",
    options: ["Soothe", "Lessen", "Aggravate", "Ease"],
    answerIndex: 2,
    explanation:
      "Mitigate means to make less severe; its opposite is aggravate (to worsen). Soothe, lessen and ease are synonyms.",
    tip: "Watch for the cluster of synonyms (soothe/lessen/ease) surrounding one antonym. Aggravate is the only 'make worse' word.",
  },
  {
    id: "ver-206",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Her ________ remarks, though brief, cut deeper than any lengthy tirade.",
    options: ["verbose", "trenchant", "rambling", "hesitant"],
    answerIndex: 1,
    explanation:
      "'Brief' yet cutting points to trenchant (sharp and incisive). Verbose and rambling mean wordy — the opposite of brief — and hesitant doesn't fit 'cut deeper'.",
    tip: "Use the contrast 'though brief': the blank must be a short-but-powerful quality. Trenchant fits incisiveness.",
  },
  {
    id: "ver-207",
    category: "verbal",
    difficulty: 3,
    prompt:
      "All valid arguments are sound. This argument is NOT sound. Therefore, it is:",
    options: ["valid", "not valid", "persuasive", "true"],
    answerIndex: 1,
    explanation:
      "'Valid → sound.' This argument is not sound, so by the contrapositive it is not valid.",
    tip: "'If A then B' plus 'not B' gives 'not A.' Don't be distracted by tempting words like 'persuasive' or 'true'.",
  },
  {
    id: "ver-208",
    category: "verbal",
    difficulty: 3,
    prompt: "PARSIMONIOUS is to GENEROUS as VERBOSE is to:",
    options: ["Concise", "Wordy", "Loud", "Clear"],
    answerIndex: 0,
    explanation:
      "Parsimonious (stingy) and generous are opposites. The opposite of verbose (using too many words) is concise.",
    tip: "Establish the base pair as antonyms, then supply the antonym of VERBOSE. 'Wordy' is a synonym — a trap.",
  },
  {
    id: "ver-209",
    category: "verbal",
    difficulty: 3,
    prompt: "INTREPID most nearly means:",
    options: ["Fearless", "Timid", "Weak", "Cautious"],
    answerIndex: 0,
    explanation:
      "Intrepid means fearless and bold. Timid and cautious are opposites.",
    tip: "Think of an 'intrepid explorer' — the word carries courage and daring.",
  },
  {
    id: "ver-210",
    category: "verbal",
    difficulty: 3,
    prompt: "Select the word most OPPOSITE in meaning to ZENITH.",
    options: ["Peak", "Nadir", "Summit", "Apex"],
    answerIndex: 1,
    explanation:
      "Zenith is the highest point; its opposite is nadir, the lowest point. Peak, summit and apex are synonyms of zenith.",
    tip: "Zenith/nadir is a classic high/low pair. The three 'top' synonyms can't be the antonym.",
  },
  {
    id: "ver-211",
    category: "verbal",
    difficulty: 3,
    prompt:
      "No mammal can breathe underwater unaided. Whales are mammals. Which conclusion is necessarily true?",
    options: [
      "Whales cannot breathe underwater unaided.",
      "Whales are not mammals.",
      "Some mammals breathe underwater.",
      "Whales live only on land.",
    ],
    answerIndex: 0,
    explanation:
      "Whales belong to the class 'mammal', and no mammal can breathe underwater unaided, so neither can whales. (That they live in water doesn't contradict this.)",
    tip: "Apply the universal rule directly to the member: if no X can do it and a whale is an X, the whale can't either.",
  },
  {
    id: "ver-212",
    category: "verbal",
    difficulty: 3,
    prompt:
      "The critic's ________ review was so ________ that the author considered abandoning the project.",
    options: [
      "scathing … discouraging",
      "glowing … inspiring",
      "balanced … neutral",
      "brief … uplifting",
    ],
    answerIndex: 0,
    explanation:
      "Only a harsh review would make an author consider quitting: 'scathing … discouraging' is internally consistent. The positive pairings contradict the outcome.",
    tip: "Test each two-word option against the result clause. The pair must logically cause 'considered abandoning the project'.",
  },
  {
    id: "ver-213",
    category: "verbal",
    difficulty: 3,
    prompt: "CAPRICIOUS most nearly means:",
    options: ["Fickle", "Steady", "Reliable", "Calm"],
    answerIndex: 0,
    explanation:
      "Capricious means given to sudden, unpredictable changes — fickle. Steady and reliable are opposites.",
    tip: "Capricious shares the sense of 'whim'. The answer is the word meaning changeable/unpredictable.",
  },
  {
    id: "ver-214",
    category: "verbal",
    difficulty: 3,
    prompt: "DROUGHT is to DELUGE as FAMINE is to:",
    options: ["Feast", "Hunger", "Scarcity", "Want"],
    answerIndex: 0,
    explanation:
      "A drought (too little water) and a deluge (too much) are opposite extremes. The opposite extreme of famine (too little food) is a feast (too much).",
    tip: "Identify the dimension (too little ↔ too much) and find the 'excess' counterpart. Hunger/scarcity restate famine, not its opposite.",
  },
  {
    id: "ver-215",
    category: "verbal",
    difficulty: 3,
    prompt: "Select the word most OPPOSITE in meaning to LACONIC.",
    options: ["Wordy", "Brief", "Terse", "Quiet"],
    answerIndex: 0,
    explanation:
      "Laconic means using very few words; its opposite is wordy. Brief and terse are synonyms, and quiet is unrelated.",
    tip: "Laconic = concise to the point of curtness. Its antonym is the verbose/wordy end of the scale.",
  },
  {
    id: "ver-216",
    category: "verbal",
    difficulty: 3,
    prompt: "UBIQUITOUS most nearly means:",
    options: ["Rare", "Omnipresent", "Hidden", "Scarce"],
    answerIndex: 1,
    explanation:
      "Ubiquitous means present everywhere — omnipresent. Rare, hidden and scarce are opposites.",
    tip: "Think 'smartphones are ubiquitous': found everywhere. The answer is the 'everywhere' synonym.",
  },
  {
    id: "ver-217",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Despite the company's ________ profits, executives warned the boom was ________ and urged caution.",
    options: [
      "soaring … unsustainable",
      "falling … permanent",
      "modest … endless",
      "stable … temporary",
    ],
    answerIndex: 0,
    explanation:
      "'Despite … profits' plus a warning and 'urged caution' implies impressive but fragile profits: soaring … unsustainable. The other pairings are internally contradictory.",
    tip: "'Despite' sets up tension: strong profits (soaring) undercut by a hidden risk (unsustainable).",
  },
  {
    id: "ver-218",
    category: "verbal",
    difficulty: 3,
    prompt: "NOVICE is to EXPERT as ________ is to VETERAN:",
    options: ["Recruit", "Soldier", "General", "Officer"],
    answerIndex: 0,
    explanation:
      "A novice is a beginner and an expert is experienced; the beginner counterpart to a veteran (experienced soldier) is a recruit.",
    tip: "Keep the relationship 'beginner → experienced' consistent. Match VETERAN's beginner, which is RECRUIT.",
  },
  {
    id: "ver-219",
    category: "verbal",
    difficulty: 3,
    prompt: "PRAGMATIC most nearly means:",
    options: ["Practical", "Idealistic", "Theoretical", "Emotional"],
    answerIndex: 0,
    explanation:
      "Pragmatic means dealing with things sensibly and realistically — practical. Idealistic and theoretical are contrasting approaches.",
    tip: "Pragmatic ≈ 'what works in practice'. The answer is the down-to-earth, practical option.",
  },
  {
    id: "ver-220",
    category: "verbal",
    difficulty: 3,
    prompt: "Select the word most OPPOSITE in meaning to AMELIORATE.",
    options: ["Improve", "Worsen", "Enhance", "Repair"],
    answerIndex: 1,
    explanation:
      "To ameliorate is to make better; its opposite is to worsen. Improve, enhance and repair are synonyms.",
    tip: "The root 'melior' means 'better'. Its antonym is the single 'make worse' word.",
  },
  {
    id: "ver-221",
    category: "verbal",
    difficulty: 3,
    prompt: "INSIDIOUS most nearly means:",
    options: ["Treacherous", "Obvious", "Honest", "Harmless"],
    answerIndex: 0,
    explanation:
      "Insidious means proceeding harmfully in a subtle, stealthy way — treacherous. Obvious and harmless are opposites.",
    tip: "Insidious danger creeps up unseen. The answer carries hidden harm: treacherous.",
  },
  {
    id: "ver-222",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Every certified electrician passes the safety exam. Tom did not pass the safety exam. Therefore:",
    options: [
      "Tom is a certified electrician.",
      "Tom is not a certified electrician.",
      "Tom will retake the exam.",
      "Tom is unsafe.",
    ],
    answerIndex: 1,
    explanation:
      "'Certified → passes.' Tom didn't pass, so he cannot be certified (contrapositive). The other options add unsupported claims.",
    tip: "'If A then B' and 'not B' guarantees 'not A.' Reject options that introduce facts you weren't given.",
  },
  {
    id: "ver-223",
    category: "verbal",
    difficulty: 3,
    prompt: "PROLIFIC most nearly means:",
    options: ["Productive", "Lazy", "Barren", "Scarce"],
    answerIndex: 0,
    explanation:
      "Prolific means producing a great deal — highly productive. Barren and scarce suggest the opposite.",
    tip: "A prolific writer publishes a lot. The answer is the 'abundant output' synonym.",
  },
  {
    id: "ver-224",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Choose the option that best completes the analogy: CACOPHONY is to HARMONY as CHAOS is to:",
    options: ["Order", "Noise", "Confusion", "Disorder"],
    answerIndex: 0,
    explanation:
      "Cacophony (harsh, discordant sound) is the opposite of harmony; the opposite of chaos is order. Noise, confusion and disorder restate chaos rather than oppose it.",
    tip: "The base pair are antonyms, so find the antonym of CHAOS. Discard the three words that merely echo 'chaos'.",
  },
];
