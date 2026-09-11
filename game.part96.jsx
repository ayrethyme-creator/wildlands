// ---------- Part 96: WHERE THE SECOND HUNDRED LIVE ----------
// A species nobody can meet is not in the game, it is in a file. part95 wrote a
// hundred creatures; this puts them somewhere.
//
// FOLLOWING A DECISION SOMEBODY ELSE ALREADY MADE WELL.
// The first six rifts are geographic - Olympus, Aurora, and so on - but part12
// then added four more that are THEMATIC: the Weaving for tricksters, the
// Deluge for flood stories, the Underworld Gate for the animal that guards the
// door of the dead. That was the better idea, because it puts creatures next to
// the thing they have in common rather than next to their neighbours, and the
// sign in each rift gets to say what that thing is.
//
// So the second hundred extends the thematic chain rather than crowding the six
// regional pools, which would have diluted every one of them and made the
// original hundred harder to find as a side effect of adding to it.
//
// Eight new rifts, each one a shape that turns up across unconnected cultures:
// small people who make things, a foot pointing the wrong way, what the ice
// takes, the dead nobody buried. That last one is the reason gashadokuro,
// abiku, the jiangshi and the soucouyant end up in the same room despite coming
// from four continents - they are all about the same fear, and the game can now
// say so out loud.
//
// The chain is built with part12's own DEEP pattern and its own row templates,
// so a rift added here behaves exactly like a rift added there.

// rift10 was the end of the road - RIFT_END has no door in its north wall - so
// it gets one, the same way part12 opened rift6 to reach rift7.
if (MAPS.rift10 && typeof RIFT_MID !== "undefined") {
  MAPS.rift10.rows = RIFT_MID;
  MAPS.rift10.exits = { ...MAPS.rift10.exits, "7,0": { map: "rift11", x: 7, y: 8 } };
}

const DEEP2 = [
  { k: "rift11", n: "The Small Makers", lvl: [59, 63], prev: { map: "rift10", x: 7, y: 1 }, next: "rift12",
    sign: "🪧 'THE SMALL MAKERS — every people who ever built anything difficult has a story about small folk who built it overnight. It is how a community says: we do not quite know how our grandparents did this.'",
    who: ["menehune", "lamiak", "knocker", "nisse", "domovoi", "korpokkur", "yumboe", "veli", "para", "dokkaebi", "basajaun", "bannik"] },

  { k: "rift12", n: "The Backwards Foot", lvl: [60, 64], prev: { map: "rift11", x: 7, y: 1 }, next: "rift13",
    sign: "🪧 'THE BACKWARDS FOOT — Brazil, Trinidad and the Philippines all put the same detail on their forest guardians: the feet point the wrong way, so the tracks lead out when the thing is going in. Nobody copied it from anybody.'",
    who: ["curupira", "douen", "chullachaqui", "teakettler", "hidebehind", "agropelter", "squonk", "boggart", "tiyanak", "kapre"] },

  { k: "rift13", n: "What the Ice Takes", lvl: [60, 65], prev: { map: "rift12", x: 7, y: 1 }, next: "rift14",
    sign: "🪧 'WHAT THE ICE TAKES — the far north has the most practical monsters on earth. Nearly every one of them is standing exactly where the ground is thin, the light is flat, or a person alone is about to make a mistake.'",
    who: ["qalupalik", "amarok", "ijiraq", "amikuk", "tupilaq", "stallo", "yukionna", "huldra", "draugr", "fossegrim", "nightmara", "kamuyhuci", "tokoloshe", "zduhac"] },

  { k: "rift14", n: "The Unburied", lvl: [61, 65], prev: { map: "rift13", x: 7, y: 1 }, next: "rift15",
    sign: "🪧 'THE UNBURIED — a body without rites becomes a problem, and four continents came to the same answer independently. What is feared is never the death. It is the part that was left undone afterwards.'",
    who: ["gashadokuro", "abiku", "huakaipo", "jiangshi", "lilith", "ghul", "soucouyant", "manananggal", "obayifo", "ilomba", "adze", "ifrit", "nasnas"] },

  { k: "rift15", n: "The Watchers of the Wood", lvl: [62, 66], prev: { map: "rift14", x: 7, y: 1 }, next: "rift16",
    sign: "🪧 'THE WATCHERS OF THE WOOD — a forest with something in it does not get cut. These stories have protected more old trees than any law, and several of them were doing conservation centuries before there was a word for it.'",
    who: ["patupaiarehe", "ponaturi", "tipua", "eloko", "asanbosam", "jorogumo", "penghou", "bungisngis", "blackshuck", "redcap", "dullahan", "cwnannwn", "bultungin", "gumiho"] },

  { k: "rift16", n: "What the Water Holds", lvl: [62, 67], prev: { map: "rift15", x: 7, y: 1 }, next: "rift17",
    sign: "🪧 'WHAT THE WATER HOLDS — notice how many of these come with a rule about WHEN. Do not swim at noon. Do not swim in that week. The monster is a calendar, and the calendar is usually right about the current.'",
    who: ["marakihau", "dakuwaqa", "nanaue", "berberoka", "vodyanoy", "rusalka", "pincoya", "lusca", "jengu", "nyaminyami", "shahmaran", "medjed"] },

  { k: "rift17", n: "The Made Things", lvl: [63, 67], prev: { map: "rift16", x: 7, y: 1 }, next: "rift18",
    sign: "🪧 'THE MADE THINGS — a kettle, a broom, a hut, a word written on clay. Half the world decided that a thing used long enough and then discarded would eventually have something to say about it.'",
    who: ["golem", "babayagahut", "nurikabe", "ashiaraiyashiki", "kasaobake", "betobetosan", "bulgasari", "baize", "xiezhi", "serpopard", "likho", "namazu"] },

  { k: "rift18", n: "What Walked Before", lvl: [64, 69], prev: { map: "rift17", x: 7, y: 1 }, next: null,
    sign: "🪧 'WHAT WALKED BEFORE — some of these are not inventions at all. Haast's eagle was real and hunted people. The giant ground sloth was real. A myth is sometimes just a very long memory, kept by people who had no other way to write it down.'",
    who: ["pouakai", "mapinguari", "camahueto", "centaur", "gorgon", "tartalo", "olgoikhorkhoi", "kamapuaa", "akualele", "boitata", "snallygaster", "jerseydevil", "huma"] },
];

/* Weights. The rarest thing in each rift is the one with the best story, which
   is the wrong way round for a collector and the right way round for a game:
   the pouākai and the mapinguari should take some finding. Everything else
   sits in a band narrow enough that no species is a wall. */
const riftWeight = (sp, i, n) => {
  const rare = ["pouakai", "mapinguari", "gashadokuro", "golem", "draugr", "centaur",
    "gorgon", "olgoikhorkhoi", "nyaminyami", "lusca", "dakuwaqa", "huakaipo"];
  if (rare.indexOf(sp) >= 0) return 4;
  return 9 - Math.floor((i / Math.max(1, n - 1)) * 3);      // 9 down to 6
};

DEEP2.forEach((d) => {
  // Filtered against DEX exactly as part12 filters its own, so a key that never
  // made it into the roster leaves a thinner pool instead of a broken one.
  const pool = d.who.filter((sp) => DEX[sp]).map((sp, i, a) => [sp, riftWeight(sp, i, a.length)]);
  MAPS[d.k] = {
    name: d.n, zone: "rift", music: "legend",
    rows: d.next ? RIFT_MID : RIFT_END,
    exits: { "7,9": d.prev, ...(d.next ? { "7,0": { map: d.next, x: 7, y: 8 } } : {}) },
    pool, lvl: d.lvl,
  };
  SIGNS[d.k + ":7,3"] = d.sign;
});

/* THE CHECK, and it is the one that matters most in this file.

   A creature written, given a sprite, and placed in no pool is invisible - it
   exists in the guide as a locked entry that can never be unlocked, which is
   worse than not adding it at all. So every one of part95's hundred is counted
   back out of the maps, and anything that did not land is named. */
{
  const placed = new Set();
  Object.keys(MAPS).forEach((mk) => {
    ["pool", "poolN", "poolWater"].forEach((p) => (MAPS[mk][p] || []).forEach(([sp]) => placed.add(sp)));
  });
  const mine = (typeof M2 !== "undefined") ? M2.map((r) => r[0]) : [];
  const lost = mine.filter((sp) => !placed.has(sp));
  const reachable = DEEP2.every((d) => MAPS[d.k] && MAPS[d.k].pool.length);

  console.log("[part96] where the second hundred live: " + DEEP2.length + " new rifts"
    + " | placed " + mine.filter((sp) => placed.has(sp)).length + " of " + mine.length
    + " | the chain runs rift10 -> rift18 and every rift has a pool: " + reachable
    + (lost.length ? " | NOWHERE TO BE FOUND: " + lost.join(", ") : ""));
}
