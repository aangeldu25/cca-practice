import type { Question } from "../types";

export const verbalQuestions: Question[] = [
  {
    id: "ver-001",
    category: "verbal",
    difficulty: 1,
    prompt: "BOOK is to READING as FORK is to:",
    options: ["Kitchen", "Eating", "Metal", "Food"],
    answerIndex: 1,
    explanation:
      "A book is the tool used for reading; a fork is the tool used for eating. The relationship is 'instrument → its primary action.' 'Food' is what you eat, not the action, and 'kitchen/metal' describe location/material.",
    tip: "For analogies, say the relationship out loud as a short sentence ('a BOOK is used for READING') and plug the second pair into the exact same sentence. The right option makes the sentence true.",
  },
  {
    id: "ver-002",
    category: "verbal",
    difficulty: 1,
    prompt: "Which word does NOT belong with the others?",
    options: ["Rose", "Tulip", "Oak", "Lily"],
    answerIndex: 2,
    explanation:
      "Rose, tulip and lily are flowers; an oak is a tree. Group by the most specific shared category — three are flowers, one is not.",
    tip: "Odd-one-out: find the category that fits exactly three items. The outlier breaks that single category, not a vaguer one ('all are plants' is too broad).",
  },
  {
    id: "ver-003",
    category: "verbal",
    difficulty: 1,
    prompt: "Select the word most similar in meaning to ABUNDANT.",
    options: ["Scarce", "Plentiful", "Rare", "Empty"],
    answerIndex: 1,
    explanation:
      "Abundant means existing in large quantities — i.e. plentiful. Scarce, rare and empty are all opposites.",
    tip: "When most options are antonyms of the target, the single synonym stands out. Quickly tag each option as 'same' or 'opposite' meaning.",
  },
  {
    id: "ver-004",
    category: "verbal",
    difficulty: 2,
    prompt: "Select the word most OPPOSITE in meaning to FRUGAL.",
    options: ["Thrifty", "Economical", "Wasteful", "Careful"],
    answerIndex: 2,
    explanation:
      "Frugal means careful and economical with money or resources. Its opposite is wasteful. Thrifty, economical and careful are all synonyms of frugal — distractors.",
    tip: "In antonym questions watch for the trap of three synonyms + one true opposite. If three words mean the same thing, none of them is the answer.",
  },
  {
    id: "ver-005",
    category: "verbal",
    difficulty: 2,
    prompt:
      "Despite being praised for its ________, the essay contained many factual errors.",
    options: ["brevity", "accuracy", "style", "length"],
    answerIndex: 1,
    explanation:
      "'Despite' signals a contrast. The essay was praised for something that 'factual errors' directly undercut — accuracy. Brevity, style and length don't logically clash with containing errors.",
    tip: "Sentence completion: circle the linking word ('despite', 'because', 'although'). It tells you whether the blank should agree with or contrast the rest of the sentence.",
  },
  {
    id: "ver-006",
    category: "verbal",
    difficulty: 2,
    prompt: "OPTIMIST is to HOPEFUL as PESSIMIST is to:",
    options: ["Cheerful", "Gloomy", "Realistic", "Confident"],
    answerIndex: 1,
    explanation:
      "An optimist is characterised by being hopeful; a pessimist is characterised by being gloomy. The pair links a person to the outlook that defines them.",
    tip: "Beware the 'almost right' distractor. 'Realistic' is how a pessimist might describe themselves, but the parallel to HOPEFUL (an emotional outlook) is the emotional word GLOOMY.",
  },
  {
    id: "ver-007",
    category: "verbal",
    difficulty: 2,
    prompt: "SCALPEL is to SURGEON as ________ is to CARPENTER:",
    options: ["Patient", "Hammer", "Hospital", "Wood"],
    answerIndex: 1,
    explanation:
      "A scalpel is the characteristic tool of a surgeon; a hammer is a characteristic tool of a carpenter. Wood is the material worked on, not the tool.",
    tip: "Keep the relationship direction consistent: tool → user. Don't switch to 'material' or 'workplace' halfway through.",
  },
  {
    id: "ver-008",
    category: "verbal",
    difficulty: 2,
    prompt: "METICULOUS most nearly means:",
    options: ["Careless", "Precise", "Quick", "Bored"],
    answerIndex: 1,
    explanation:
      "Meticulous means showing great attention to detail — precise and thorough. Careless is the opposite.",
    tip: "If a word is unfamiliar, mine its 'feel' from context you've seen it in ('a meticulous plan'). It usually carries a positive, detail-oriented sense.",
  },
  {
    id: "ver-009",
    category: "verbal",
    difficulty: 3,
    prompt:
      "All managers attended the meeting. Some attendees arrived late. Which statement MUST be acceptable?",
    options: [
      "All managers arrived late.",
      "Some managers may have arrived late.",
      "No managers arrived late.",
      "All late arrivals were managers.",
    ],
    answerIndex: 1,
    explanation:
      "Managers were among the attendees, and some attendees were late — but we don't know whether the late ones were managers or not. So it is only possible (not certain) that some managers were late. The other three make certainty claims the facts don't support.",
    tip: "With 'all/some' statements, prefer the option using cautious language ('may', 'possibly'). Reject any option that claims certainty the premises don't guarantee.",
  },
  {
    id: "ver-010",
    category: "verbal",
    difficulty: 3,
    prompt:
      "No heroes are cowards. Some soldiers are cowards. Therefore:",
    options: [
      "All soldiers are heroes.",
      "Some soldiers are not heroes.",
      "No soldiers are heroes.",
      "Some heroes are soldiers.",
    ],
    answerIndex: 1,
    explanation:
      "The cowardly soldiers cannot be heroes (since no heroes are cowards). So at least those soldiers are not heroes → 'some soldiers are not heroes.' We can't conclude anything about the non-cowardly soldiers, so 'no soldiers are heroes' is too strong.",
    tip: "Chain the two facts through the shared term ('cowards'). Only conclude about the overlap you can actually trace — here, the cowardly soldiers.",
  },
  {
    id: "ver-011",
    category: "verbal",
    difficulty: 2,
    prompt: "BENEVOLENT is most nearly OPPOSITE to:",
    options: ["Kind", "Generous", "Cruel", "Caring"],
    answerIndex: 2,
    explanation:
      "Benevolent means well-meaning and kind. Its opposite is cruel. Kind, generous and caring are synonyms — distractors.",
    tip: "Three-synonyms-plus-one pattern again: the lone word with a different emotional charge is your answer.",
  },
  {
    id: "ver-012",
    category: "verbal",
    difficulty: 1,
    prompt:
      "The new policy was met with strong ________; employees protested for weeks.",
    options: ["enthusiasm", "indifference", "resistance", "approval"],
    answerIndex: 2,
    explanation:
      "Weeks of protest indicates opposition, i.e. resistance. Enthusiasm and approval are positive; indifference would mean no reaction at all.",
    tip: "Let the evidence clause ('protested for weeks') define the blank. Pick the word that the second half of the sentence proves.",
  },
  {
    id: "ver-013",
    category: "verbal",
    difficulty: 2,
    prompt: "WHISPER is to SHOUT as DRIZZLE is to:",
    options: ["Rain", "Downpour", "Cloud", "Snow"],
    answerIndex: 1,
    explanation:
      "A whisper and a shout are the same action (vocalising) at low vs high intensity. A drizzle and a downpour are the same event (rain) at low vs high intensity.",
    tip: "Identify the dimension that changes — here, intensity. The answer must be the high-intensity version of the same thing, not a related-but-different item ('cloud', 'snow').",
  },
  {
    id: "ver-014",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Read: 'Every employee who exceeded their target received a bonus. Maria did not receive a bonus.' Which conclusion is valid?",
    options: [
      "Maria did not exceed her target.",
      "Maria exceeded her target.",
      "Maria has no target.",
      "Everyone except Maria got a bonus.",
    ],
    answerIndex: 0,
    explanation:
      "'Exceeded target → bonus.' Maria got no bonus, so she cannot have exceeded her target (contrapositive). We can say nothing about anyone else.",
    tip: "'If A then B' plus 'not B' always gives 'not A' (contrapositive). This is one of the most reliable deductions on the test — memorise it.",
  },
  {
    id: "ver-015",
    category: "verbal",
    difficulty: 1,
    prompt: "Choose the word that best completes the analogy: CAUTIOUS is to RECKLESS as HUMBLE is to:",
    options: ["Modest", "Arrogant", "Shy", "Quiet"],
    answerIndex: 1,
    explanation:
      "Cautious and reckless are opposites. The pair to humble that is its opposite is arrogant. Modest is a synonym; shy and quiet are unrelated traits.",
    tip: "First decide whether the base pair is synonyms or antonyms. Here they're antonyms, so the answer must be the antonym of HUMBLE — ignore any synonym in the options.",
  },
  {
    id: "ver-016",
    category: "verbal",
    difficulty: 2,
    prompt: "Which pair of words best completes the sentence: 'The manager's ________ tone made the team feel ________.'",
    options: [
      "encouraging … demoralised",
      "supportive … motivated",
      "harsh … confident",
      "neutral … overjoyed",
    ],
    answerIndex: 1,
    explanation:
      "Only 'supportive → motivated' is internally consistent: a supportive tone naturally produces a motivated team. The others pair a cause with a mismatched effect.",
    tip: "For two-blank items, test each option as a cause-and-effect pair. Eliminate any pairing where the two words pull in opposite directions.",
  },
];
