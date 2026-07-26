// ---------- Part 49: THE ONES WHO WORK WITH YOU ----------
// Studying a species in the field logs it in the Guide. It does not take it out
// of the wild — the animal goes back to what it was doing. What studying a
// species does is qualify you to work with an animal of that species who is
// already at the station and cannot go back.
//
// Every one of them is a specific animal with a name and a reason. None were
// taken. Confiscated, imprinted, injured, surrendered, or born somewhere with
// nowhere wild to return to. That is not a disclaimer bolted onto the game —
// it is true of every non-releasable animal in every real sanctuary, and it is
// the most honest thing this game can say about the exotic pet trade.
//
// Tier one: the individuals a player will actually meet in the first region.
// Everything else gets a name and a one-line reason so nothing is ever blank.

const INDIVIDUALS = {
  badger: {
    name: "Amandla",
    sex: "F",
    story: "Confiscated at eleven weeks from a man selling her at a roadside as a \"mini bear.\" "
         + "Hand-reared, which means she has no fear of people at all and would walk straight into "
         + "the next village that had chickens.\n\n"
         + "She cannot be released and she knows none of this. She is enormously pleased with her life. "
         + "She has learned to open the feed bin, the gate latch and, once, memorably, the truck.\n\n"
         + "Two hundred and forty days at the station. Zero successful attempts to keep her out of anything.",
    since: "240 days at the station",
  },
  dog: {
    name: "Kofi",
    sex: "M",
    story: "Turned up at the station gate during the second week of rains, thin, with a collar and "
         + "no name on it. Nobody claimed him.\n\n"
         + "He is not a livestock guardian breed and everyone was clear about that. He is also, it "
         + "turns out, extremely good at standing between a goat and the treeline and objecting "
         + "loudly, which is most of the job.\n\n"
         + "He sleeps in the doorway of whichever building has people in it.",
    since: "Arrived in the rains, two years ago",
  },
  barnowl: {
    name: "Sethunya",
    sex: "F",
    story: "Flew into a window at the co-operative store and broke her left wing in two places. "
         + "It healed, but not straight. She can fly the length of the flight pen and no further, "
         + "which is not enough to hunt.\n\n"
         + "She has been at the station four years. Every August she lays two infertile eggs and sits "
         + "on them for a month, and every year the staff let her, because there is no reason not to.",
    since: "Four years at the station",
  },
  cow: {
    name: "Nomvula",
    sex: "F",
    story: "Bought at auction as a calf by a man who had not thought it through, then given up. "
         + "Nobody rescues a cow. She was two hundred rand from a truck.\n\n"
         + "She has no job here. She is not a working animal and she never will be. She stands at the "
         + "fence in the mornings and watches whatever is happening with total absorption, and she is "
         + "the single calmest presence on this station.\n\n"
         + "Some animals you take on because you can, and that is a whole reason.",
    since: "Three years at the station",
  },
  meerkat: {
    name: "Tiisetso",
    sex: "M",
    story: "Came in with a group of four seized from a courier at the border, in a crate meant for "
         + "poultry. Two did not survive the week. He and his sister did.\n\n"
         + "Meerkats do not do anything alone — not eat, not sleep, not stand watch. He has his sister "
         + "and he has the staff, and he has decided the staff are also meerkats. Somebody is always "
         + "on the roof of the feed shed watching the sky.",
    since: "Seized at the border, 18 months ago",
  },
  redfox: {
    name: "Sili",
    sex: "F",
    story: "Raised in a bedroom by someone who had watched a video and wanted one. Fed on cat food and "
         + "affection, neither of which is enough, and surrendered at fourteen months when she started "
         + "doing what foxes do to furniture.\n\n"
         + "Her teeth are bad and her coat has never come in properly. She is bright, restless, and has "
         + "never once in her life had to find her own food.\n\n"
         + "She is not sad. She has a large enclosure, things to dig, and a person she likes. But she "
         + "is what happens.",
    since: "Surrendered at fourteen months",
  },
  hedgehog: {
    name: "Pin",
    sex: "M",
    story: "Found upside down in a cattle grid, dehydrated, missing most of one back foot. "
         + "The foot was old damage, long healed — he had been managing on three and a half for a while.\n\n"
         + "He can walk, dig and climb perfectly well. He cannot right himself reliably on smooth ground, "
         + "which in a landscape with cattle grids in it is the thing that would eventually kill him.\n\n"
         + "He is asleep. He is almost always asleep.",
    since: "Two years at the station",
  },
  stoat: {
    name: "Reta",
    sex: "F",
    story: "Came out of a woodpile in a crate of firewood delivered to the station kitchen, which is not "
         + "a story anybody planned. By the time she was found she had been in a heated building for three "
         + "weeks and had lost her winter coat entirely, out of season.\n\n"
         + "She was kept until it grew back. It grew back wrong — patchy white in summer, which in the open "
         + "is a advertisement to every hawk in the district.\n\n"
         + "She will moult properly next year. Until then she stays, and she is furious about it.",
    since: "Since the firewood, last winter",
  },
};

// Anything without a written individual still gets a name and a reason, so the
// game never shows a blank where a life should be.
const GENERIC_REASONS = [
  "Surrendered by an owner who had not understood what they were taking on.",
  "Confiscated from the pet trade too young to have learned to be wild.",
  "Injured, healed, and left without the speed to feed itself.",
  "Hand-reared after its mother was killed, and imprinted on people.",
  "Born in a facility three generations deep, with nowhere wild to be returned to.",
];
const FALLBACK_NAMES = [
  "Ayo", "Bem", "Chidi", "Dalia", "Efa", "Femi", "Gugu", "Hasa", "Imani", "Jabu",
  "Kesi", "Lulu", "Mosi", "Naija", "Obi", "Pili", "Quia", "Rafi", "Sena", "Tavi",
  "Uzo", "Vela", "Wema", "Xola", "Yaro", "Zina",
];

// Deterministic, so an animal is always the same animal.
const individualOf = (sp) => {
  if (INDIVIDUALS[sp]) return INDIVIDUALS[sp];
  let h = 0;
  for (let i = 0; i < sp.length; i++) h = (h * 31 + sp.charCodeAt(i)) >>> 0;
  return {
    name: FALLBACK_NAMES[h % FALLBACK_NAMES.length],
    sex: h % 2 ? "F" : "M",
    story: GENERIC_REASONS[h % GENERIC_REASONS.length],
    since: "At the station",
    generic: true,
  };
};

// ---------- the clearing changes ----------
// Once the stands are in, the things you examined say something different and
// the hives on the map stop being wreckage. This is the visible payoff, and it
// has to be visible from the tile, not buried in a menu.
const beeloudSolvedText = {
  "seg_m4:13,8": {
    em: "🐝",
    name: "The outer hives",
    line: "Rebuilt on steel. The legs are smooth and a hand taller than they were, and there are "
        + "claw marks on the first forty centimetres and nothing above that. She tried. She could not hold on.",
  },
  "seg_m4:4,8": {
    em: "🐝",
    name: "The old hives",
    line: "Untouched, the same as they have been for years. The new stands match them now.",
  },
  "seg_m4:6,10": {
    em: "🍯",
    name: "The hive rows",
    line: "Forty stands, all of them on steel. Thabo has started keeping a book — which hives, which nights, "
        + "what the weather did. He says a woman at the station told him that in three years neither of them "
        + "would remember otherwise.",
  },
  "seg_m4:2,10": {
    em: "🌳",
    name: "Under the marula roots",
    line: "The track is still worn. The cubs are bigger — one of them watched you the whole way in "
        + "and did not bother to hide.",
  },
  "seg_m4:11,10": {
    em: "🧑🏿‍🌾",
    name: "Thabo Sithole",
    line: "Forty hives and a badger. I said I would shake the hand of whoever managed it.\n\n"
        + "Here. Take it.\n\n"
        + "She was here before the hives were, you know. I did not know that. Sixty years my family has "
        + "kept bees on this ground and nobody thought to look at the old stands.",
  },
};

console.log("[part49] individuals written:", Object.keys(INDIVIDUALS).length,
  "| fallback names:", FALLBACK_NAMES.length,
  "| beeloud after-state:", Object.keys(beeloudSolvedText).length, "spots");
