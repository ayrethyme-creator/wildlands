// ---------- Part 96: WHERE THE SECOND HUNDRED LIVE ----------
// A species nobody can meet is not in the game, it is in a file. part95 wrote a
// hundred creatures; this puts them somewhere, and the somewhere has to be the
// RIGHT somewhere.
//
// THE FIRST VERSION OF THIS FILE PUT THEM ALL BEHIND THE AMERICAS.
// Ayr, 2026-09-11: "you put the new rooms all behind the Americas entrance. the
// correct cultures should go in the right area."
//
// Correct, and it was a plain misreading of the map. The myth hub opens into six
// rifts that are GEOGRAPHIC - Olympus for Greece, Aurora for the north, Hearth
// for Africa and the Near East, Celestial for East Asia, Monsoon for southern
// Asia and Oceania, Twilight for the Americas. part12 then hung four THEMATIC
// rooms off the back of Twilight - the Weaving, the Deluge - and I followed that
// chain and added eight more to the end of it.
//
// Which put the entire second hundred behind the Americas. To reach a Slavic
// bathhouse spirit you walked through the Americas, through four thematic rooms,
// and out the far side. A Hawaiian shark god was in the same corridor. The hub's
// whole organising idea - that the world is laid out by where things come from -
// was quietly cancelled by a chain of doors.
//
// So the thematic framing is dropped and these are REGIONS, each opening off the
// rift it belongs to. Four of the six rifts get a door in each side wall, two get
// one, and Greece needs no room at all: the centaur and the gorgon go straight
// into Olympus, where they always belonged.
//
// The region is read from the `org` field part95 already carries on every
// species, so the placement is derived from the roster rather than typed out a
// second time, and cannot drift away from it.

// rift10 is the end of part12's thematic chain again. The first version of this
// file cut a north door in it to reach the rooms beyond. Nothing is beyond it.
if (MAPS.rift10 && typeof RIFT_END !== "undefined") {
  MAPS.rift10.rows = RIFT_END;
  const ex = { ...MAPS.rift10.exits };
  delete ex["7,0"];
  MAPS.rift10.exits = ex;
}

/* Which culture belongs to which part of the world. Every `org` part95 uses is
   listed here; anything missing is REPORTED at the bottom rather than quietly
   dropped into a default, because a creature filed under the wrong continent
   without complaint is the exact fault this file exists to fix. */
const REGION_OF = {
  Greek: "olympus",

  Slavic: "north", Serbian: "north", Norse: "north", Norwegian: "north",
  Finnish: "north", "Sámi": "north",

  English: "isles", Welsh: "isles", Cornish: "isles", Irish: "isles",
  Scottish: "isles", Basque: "isles",

  Ewe: "africa", Zulu: "africa", Ashanti: "africa", Mongo: "africa",
  Yoruba: "africa", Kanuri: "africa", Sawa: "africa", Tonga: "africa",
  Bemba: "africa", Wolof: "africa", Swahili: "africa",

  Arabian: "neareast", Persian: "neareast", Anatolian: "neareast",
  Jewish: "neareast", Egyptian: "neareast",

  Japanese: "eastasia", Chinese: "eastasia", Korean: "eastasia",
  Ainu: "eastasia", Mongolian: "eastasia",

  Hawaiian: "oceania", "Māori": "oceania", Fijian: "oceania", Filipino: "oceania",

  Inuit: "arctic", Greenlandic: "arctic",

  "American folklore": "americas", Tupi: "americas", Amazonian: "americas",
  Chilote: "americas", Trinidadian: "americas", Bahamian: "americas",
};

/* The rooms. `off` is the rift each one opens from and `side` is which wall, so
   you walk into a region from the part of the world it belongs to.

   Levels sit a little above the parent rift, which is what part12's chain
   already did: going further in should mean going up. */
const REGIONS = [
  { k: "rift_north", n: "The Long Winter", region: "north", off: "rift2", side: "w", lvl: [53, 57],
    sign: "🪧 'THE LONG WINTER — notice how many of these live in the house. The stove, the bathhouse, the barn. Where winter is long enough, the thing you must stay on good terms with is indoors with you.'" },

  { k: "rift_isles", n: "The Old Stones", region: "isles", off: "rift2", side: "e", lvl: [53, 57],
    sign: "🪧 'THE OLD STONES — a black dog on a lonely road, hounds heard passing overhead, knocking in the rock ahead of you. These are the sounds of being out after dark in a small country, given shapes.'" },

  { k: "rift_africa", n: "The Long Grass", region: "africa", off: "rift3", side: "w", lvl: [54, 58],
    sign: "🪧 'THE LONG GRASS — the adze is a firefly that brings fever, and it is a mosquito. Some of the oldest correct medicine anywhere is written down as a monster, because a monster was the only way to write anything down.'" },

  { k: "rift_neareast", n: "The Smokeless Fire", region: "neareast", off: "rift3", side: "e", lvl: [54, 58],
    sign: "🪧 'THE SMOKELESS FIRE — the jinn are not ghosts and not angels. They are a third kind of person, with their own laws and their own religions, who were here first. Nearly everything the word genie does to that idea is a loss.'" },

  { k: "rift_eastasia", n: "The Hundred Demons", region: "eastasia", off: "rift4", side: "w", lvl: [55, 59],
    sign: "🪧 'THE HUNDRED DEMONS — a wall that will not let you past. Footsteps that stop when you stop. An umbrella that has reached a hundred years old and woken up. Half of these are not monsters at all; they are explanations with faces put on them.'" },

  { k: "rift_oceania", n: "The Long Voyage", region: "oceania", off: "rift5", side: "w", lvl: [55, 59],
    sign: "🪧 'THE LONG VOYAGE — the pouākai was real. Haast's eagle had a three-metre span, hunted moa, and was easily capable of killing a person. It was gone by about 1400. Some of what is filed under myth is only a very long memory.'" },

  { k: "rift_arctic", n: "The Thin Ice", region: "arctic", off: "rift6", side: "w", lvl: [56, 60],
    sign: "🪧 'THE THIN ICE — the qalupalik hums under the floe and takes children who go too near the edge. Every creature in this room is standing exactly where the ground is dangerous. These are the most practical stories on earth.'" },

  { k: "rift_americas", n: "The Deep Woods", region: "americas", off: "rift6", side: "e", lvl: [56, 60],
    sign: "🪧 'THE DEEP WOODS — the curupira wears his feet backwards so his tracks lead hunters out of the forest, and he punishes anyone who takes more than they need. That is a conservation ethic, written down several centuries before there was a word for it.'" },
];

/* Cutting a door. Row 6 is the open corridor across the middle of every rift
   room - "T..............T" - so a side door there always opens onto walkable
   floor, and part4 already treats `e` as an exit tile.

   THE ROWS ARE REPLACED, NEVER EDITED IN PLACE. All six rifts are declared with
   `rows: ROWS_RIFT`, which is ONE shared array - mutating it would put the same
   door in all six at once. withRow returns a new array, which is why part12 used
   it for the same job. */
const DOOR_Y = 6;
const riftDoor = (parentKey, side, target) => {
  const m = MAPS[parentKey];
  if (!m || !m.rows) return false;
  const row = m.rows[DOOR_Y];
  const x = side === "w" ? 0 : row.length - 1;
  m.rows = withRow(m.rows, DOOR_Y, x === 0 ? "e" + row.slice(1) : row.slice(0, x) + "e");
  m.exits = { ...m.exits, [x + "," + DOOR_Y]: { map: target, x: 7, y: 8 } };
  return true;
};

// Every species sorted into its region by the culture part95 gave it.
const REGION_MEMBERS = {};
if (typeof M2 !== "undefined") {
  M2.forEach((r) => {
    const reg = REGION_OF[r[7]];
    if (!reg) return;
    (REGION_MEMBERS[reg] = REGION_MEMBERS[reg] || []).push(r[0]);
  });
}

/* Weights. The rarest thing in each room is the one with the best story, which
   is the wrong way round for a collector and the right way round for a game. */
const RIFT_RARE = ["pouakai", "mapinguari", "gashadokuro", "golem", "draugr",
  "centaur", "gorgon", "olgoikhorkhoi", "nyaminyami", "lusca", "dakuwaqa", "huakaipo"];
const riftWeight = (sp, i, n) =>
  RIFT_RARE.indexOf(sp) >= 0 ? 4 : 9 - Math.floor((i / Math.max(1, n - 1)) * 3);

REGIONS.forEach((d) => {
  const who = (REGION_MEMBERS[d.region] || []).filter((sp) => DEX[sp]);
  if (!who.length) return;
  MAPS[d.k] = {
    name: d.n, zone: "rift", music: "legend",
    rows: RIFT_END,
    exits: { "7,9": { map: d.off, x: d.side === "w" ? 1 : 14, y: DOOR_Y } },
    pool: who.map((sp, i, a) => [sp, riftWeight(sp, i, a.length)]),
    lvl: d.lvl,
  };
  riftDoor(d.off, d.side, d.k);
  SIGNS[d.k + ":7,3"] = d.sign;
});

/* Greece already has a rift, and the centaur and the gorgon are the two most
   Greek things in the whole second hundred. They go into Olympus rather than
   into a room of their own - the first version of this file had them eight
   doors away, behind the Americas. */
if (MAPS.rift1 && (REGION_MEMBERS.olympus || []).length) {
  const add = REGION_MEMBERS.olympus.filter((sp) => DEX[sp]);
  MAPS.rift1.pool = [...MAPS.rift1.pool, ...add.map((sp) => [sp, 5])];
}

/* THE CHECK. Three things could be wrong here and not one would announce itself.

   A creature in no pool is invisible - a guide entry that can never be unlocked.
   A culture missing from REGION_OF silently loses every creature in it. And a
   room whose door was never cut is a room nobody can walk into, which is the
   same as not existing. */
{
  const placed = new Set();
  Object.keys(MAPS).forEach((mk) => {
    ["pool", "poolN", "poolWater"].forEach((p) => (MAPS[mk][p] || []).forEach(([sp]) => placed.add(sp)));
  });
  const mine = (typeof M2 !== "undefined") ? M2.map((r) => r[0]) : [];
  const lost = mine.filter((sp) => !placed.has(sp));
  const noRegion = [...new Set((typeof M2 !== "undefined" ? M2 : [])
    .map((r) => r[7]).filter((o) => !REGION_OF[o]))];
  const shut = REGIONS.filter((d) => {
    const m = MAPS[d.off];
    if (!MAPS[d.k] || !m) return true;
    const x = d.side === "w" ? 0 : m.rows[DOOR_Y].length - 1;
    return !(m.exits || {})[x + "," + DOOR_Y];
  }).map((d) => d.k);

  const spread = REGIONS.map((d) => d.n + " " + ((MAPS[d.k] || {}).pool || []).length).join(", ");
  console.log("[part96] the second hundred, by where they come from: "
    + REGIONS.length + " regions | " + spread
    + " | Olympus +" + (REGION_MEMBERS.olympus || []).length
    + " | placed " + mine.filter((sp) => placed.has(sp)).length + " of " + mine.length
    + (noRegion.length ? " | CULTURE WITH NO REGION: " + noRegion.join(", ") : "")
    + (shut.length ? " | ROOM WITH NO DOOR: " + shut.join(", ") : "")
    + (lost.length ? " | NOWHERE TO BE FOUND: " + lost.join(", ") : ""));
}
