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
  {
    id: "ver-017",
    category: "verbal",
    difficulty: 2,
    prompt: "EPHEMERAL most nearly means:",
    options: ["Lasting", "Fleeting", "Solid", "Frequent"],
    answerIndex: 1,
    explanation:
      "Ephemeral means short-lived or fleeting (lasting a very short time). 'Lasting' is the opposite.",
    tip: "Unfamiliar word? Recall any phrase you've seen it in ('ephemeral beauty') to recover its flavour — here, something that doesn't last.",
  },
  {
    id: "ver-018",
    category: "verbal",
    difficulty: 1,
    prompt: "Select the word most OPPOSITE in meaning to EXPAND.",
    options: ["Grow", "Stretch", "Contract", "Widen"],
    answerIndex: 2,
    explanation:
      "Expand means to grow larger; its opposite is contract (to shrink). Grow, stretch and widen are all synonyms of expand.",
    tip: "Spot the three-synonyms-plus-one pattern: if three options mean roughly the same, the loner is the antonym you want.",
  },
  {
    id: "ver-019",
    category: "verbal",
    difficulty: 1,
    prompt: "PAINTER is to BRUSH as WRITER is to:",
    options: ["Paper", "Pen", "Book", "Word"],
    answerIndex: 1,
    explanation:
      "A painter works with a brush; a writer works with a pen. The link is 'craftsperson → primary tool.' Paper and book are materials/products, not the tool.",
    tip: "Lock the relationship as 'person → the tool they hold,' then reject options that are the material or the end product.",
  },
  {
    id: "ver-020",
    category: "verbal",
    difficulty: 2,
    prompt: "PACK is to WOLVES as SCHOOL is to:",
    options: ["Fish", "Birds", "Lions", "Ants"],
    answerIndex: 0,
    explanation:
      "A group of wolves is a pack; a group of fish is a school. The relationship is 'collective noun → its animal.'",
    tip: "Collective-noun analogies test vocabulary: pack/wolves, flock/birds, school/fish, pride/lions, colony/ants. Match the exact pairing.",
  },
  {
    id: "ver-021",
    category: "verbal",
    difficulty: 1,
    prompt: "Which word does NOT belong with the others?",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answerIndex: 2,
    explanation:
      "Apple, banana and mango are fruits; a carrot is a vegetable. Group by the most specific shared category.",
    tip: "Find the category that fits exactly three. 'All are foods/plants' is too broad — push for the tightest grouping.",
  },
  {
    id: "ver-022",
    category: "verbal",
    difficulty: 2,
    prompt: "CANDID most nearly means:",
    options: ["Honest", "Secretive", "Rude", "Shy"],
    answerIndex: 0,
    explanation:
      "Candid means frank and straightforward — honest. Secretive is the opposite; rude and shy are unrelated.",
    tip: "Don't confuse 'blunt' connotations (rude) with the core meaning. Candid is neutral-positive: openly truthful.",
  },
  {
    id: "ver-023",
    category: "verbal",
    difficulty: 2,
    prompt:
      "The witness's account was ________, matching the physical evidence at every point.",
    options: ["contradictory", "consistent", "vague", "fabricated"],
    answerIndex: 1,
    explanation:
      "'Matching the evidence at every point' means the account agreed with the facts — it was consistent. The other words describe accounts that don't match.",
    tip: "Let the descriptive clause define the blank. 'Matching at every point' is the dictionary definition of consistent.",
  },
  {
    id: "ver-024",
    category: "verbal",
    difficulty: 2,
    prompt: "Select the word most OPPOSITE in meaning to ABUNDANCE.",
    options: ["Plenty", "Scarcity", "Wealth", "Surplus"],
    answerIndex: 1,
    explanation:
      "Abundance means a large quantity; its opposite is scarcity (shortage). Plenty, wealth and surplus all signal 'a lot.'",
    tip: "Three 'a-lot' words plus one 'too-little' word — the odd meaning out is your antonym.",
  },
  {
    id: "ver-025",
    category: "verbal",
    difficulty: 2,
    prompt: "THERMOMETER is to TEMPERATURE as CLOCK is to:",
    options: ["Time", "Hour", "Speed", "Distance"],
    answerIndex: 0,
    explanation:
      "A thermometer measures temperature; a clock measures time. 'Hour' is a unit of time, not the quantity measured — too narrow.",
    tip: "Instrument analogies link a device to the quantity it measures, not to one of that quantity's units. Pick the general quantity.",
  },
  {
    id: "ver-026",
    category: "verbal",
    difficulty: 3,
    prompt:
      "All roses are flowers. Some flowers fade quickly. Which statement MUST be true?",
    options: [
      "All roses fade quickly.",
      "Some roses fade quickly.",
      "No roses fade quickly.",
      "It cannot be determined whether any roses fade quickly.",
    ],
    answerIndex: 3,
    explanation:
      "Roses are flowers, but the 'some flowers' that fade quickly might be entirely non-rose flowers. Nothing forces roses to be among them, nor to be excluded — so it cannot be determined.",
    tip: "'Some X are Y' tells you nothing certain about a specific subset of X. When the overlap isn't guaranteed, 'cannot be determined' is usually correct.",
  },
  {
    id: "ver-027",
    category: "verbal",
    difficulty: 2,
    prompt:
      "PRUDENT spending kept the company solvent through the downturn. PRUDENT most nearly means:",
    options: ["Careful", "Reckless", "Generous", "Random"],
    answerIndex: 0,
    explanation:
      "Prudent means showing good judgement and caution — careful. The context (kept the company solvent) confirms a positive, cautious sense.",
    tip: "Use the outcome in the sentence as a clue: spending that 'kept the company solvent' must have been sensible — i.e. careful.",
  },
  {
    id: "ver-028",
    category: "verbal",
    difficulty: 2,
    prompt: "Select the word most OPPOSITE in meaning to TRANSPARENT.",
    options: ["Clear", "Opaque", "Glassy", "Visible"],
    answerIndex: 1,
    explanation:
      "Transparent means see-through; its opposite is opaque (not see-through). Clear, glassy and visible all align with transparent.",
    tip: "Anchor on the literal sense (see-through vs blocks light). The single 'blocks light' word is the antonym.",
  },
  {
    id: "ver-029",
    category: "verbal",
    difficulty: 1,
    prompt: "LIBRARY is to BOOKS as ARMORY is to:",
    options: ["Soldiers", "Weapons", "Food", "Vehicles"],
    answerIndex: 1,
    explanation:
      "A library stores books; an armory stores weapons. The link is 'storehouse → what it holds.'",
    tip: "'Place → thing stored there' analogies: match the building to its characteristic contents, not its users (soldiers).",
  },
  {
    id: "ver-030",
    category: "verbal",
    difficulty: 2,
    prompt:
      "Choose the pair that makes the sentence logically consistent: 'Because demand ________, prices ________.'",
    options: [
      "fell … rose",
      "rose … rose",
      "rose … fell",
      "stayed flat … doubled",
    ],
    answerIndex: 1,
    explanation:
      "Higher demand normally pushes prices up. 'Demand rose → prices rose' is the consistent cause-and-effect. The others invert or break the relationship.",
    tip: "For economics-style blanks, apply the basic rule (demand up → price up) unless the sentence signals an exception.",
  },
  {
    id: "ver-031",
    category: "verbal",
    difficulty: 2,
    prompt: "OBSOLETE most nearly means:",
    options: ["Modern", "Outdated", "Essential", "Rare"],
    answerIndex: 1,
    explanation:
      "Obsolete means no longer in use or out of date — outdated. Modern is the opposite.",
    tip: "Root hint: 'obsolete' shares ground with 'old.' If two options are near-opposites (modern vs outdated), the test wants the meaning that matches the word's tone.",
  },
  {
    id: "ver-032",
    category: "verbal",
    difficulty: 3,
    prompt:
      "Every certified product passes inspection. This product did NOT pass inspection. Therefore:",
    options: [
      "It is certified.",
      "It is not certified.",
      "It will be re-inspected.",
      "It is defective.",
    ],
    answerIndex: 1,
    explanation:
      "'Certified → passes inspection.' This product didn't pass, so it cannot be certified (contrapositive). We can't conclude it's defective or will be re-inspected.",
    tip: "Reach for the contrapositive: 'if A then B' + 'not B' = 'not A.' Ignore tempting but unsupported extras like 'defective.'",
  },
  {
    id: "ver-033",
    category: "verbal",
    difficulty: 3,
    prompt: "DROUGHT is to RAIN as FAMINE is to:",
    options: ["Food", "Water", "Hunger", "Crops"],
    answerIndex: 0,
    explanation:
      "A drought is a severe shortage of rain; a famine is a severe shortage of food. The relationship is 'crisis → the thing it lacks.'",
    tip: "Define the first word as 'a lack of ___,' fill the blank, then apply the identical 'lack of ___' frame to the second pair.",
  },
  {
    id: "ver-034",
    category: "verbal",
    difficulty: 1,
    prompt: "Which word does NOT belong with the others?",
    options: ["Run", "Sprint", "Jog", "Sit"],
    answerIndex: 3,
    explanation:
      "Run, sprint and jog are all ways of moving on foot at speed. 'Sit' is stationary — it breaks the shared idea of locomotion.",
    tip: "Identify the action three share (here, running/moving). The outlier is the one that isn't that action at all.",
  },
  {
    id: "ver-035",
    category: "verbal",
    difficulty: 2,
    prompt: "RELUCTANT most nearly means:",
    options: ["Eager", "Unwilling", "Cheerful", "Prompt"],
    answerIndex: 1,
    explanation:
      "Reluctant means hesitant or unwilling to do something. Eager and prompt suggest the opposite enthusiasm.",
    tip: "If the options split into 'keen' vs 'hesitant,' decide which camp the target word lives in. Reluctant = hesitant.",
  },
];
