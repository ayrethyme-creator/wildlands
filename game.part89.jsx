// ---------- Part 89: THINGS HAPPENING THAT ARE NOT ABOUT YOU ----------
// Ayr, 2026-09-09, choosing what to build next: "3 and everything else you
// suggested except 2."
//
// Three was this. The world varies - part66 deals every save its own ecology -
// but nothing ever HAPPENS in it. Nothing arrives, nothing passes through,
// there is never a reason to go somewhere now rather than later. A world where
// the only events are the ones you cause is a world that is waiting for you.
//
// So: seventeen real gatherings, one at a time, somewhere in the world, for a
// while. You are told when one begins. While it runs, that country is full of
// what came for it.
//
// A CLOCK THE PLAYER DRIVES
// -------------------------
// Events run on STEPS WALKED, not on the calendar, and that is the whole
// design. An event on a real clock is an event you can miss by putting the game
// down for a week, and this game does not do that to people - part66's standing
// rule is that nothing is ever locked away, and a migration you missed because
// you had exams is exactly that. Walk, and the world turns. Put it down for a
// month, and it is where you left it.
//
// Which event is on is derived from the step count the same way weather is
// derived from the clock: index = steps / span, dealt from the save's seed. No
// list of past events to keep, nothing to go stale, and two saves see different
// years.
//
// SEASONS ARE A THUMB, NOT A GATE
// -------------------------------
// A salmon run belongs in autumn and coral spawns in spring, and honouring that
// costs nothing when it is a weighting. Gating on it would mean a player who
// starts in February never sees half of these, which is the locked-away failure
// again wearing a nature documentary's coat. In its own season an event is
// three times as likely. Out of it, it can still come round.
//
// WHY NO EVENT NAMES A SPECIES IT NEEDS
// -------------------------------------
// An event says which TYPES of animal it brings out, and separately offers a
// few species it would favour if they happen to live there. The types always
// work. The species are a bonus that is filtered against the map's own pool at
// the moment it is used, so an event can never promise an animal the country
// cannot deliver - and the check at the bottom of this file reports any hint
// that never resolves anywhere, which is the only way a wrong key here would
// ever come to light. The prose is free to talk about wildebeest either way:
// a sentence about the Serengeti is true whether or not the roster spells it
// the way this file guessed.

const EV_RUN = 800;                // steps an event lasts
const EV_QUIET = 300;              // steps of nothing between them
const EV_CYCLE = EV_RUN + EV_QUIET;

/* The seventeen. `z` is the zones it happens in, `t` the types it brings out,
   `who` the species it would favour if they live there, `m` the months it
   really belongs to, and `text` is what you are told.

   The text is the point of the feature as much as the weighting is. Every one
   of these is a real thing that really happens, and the reason to know about it
   is not that it is impressive - it is what it explains. */
const EVENTS = [
  { k: "migration", n: "The Great Migration", em: "🦓",
    z: ["savanna", "savannaz", "highveld"], t: { Wild: 1.9, Swift: 1.6, Predator: 1.5 },
    who: ["wildebeest", "zebra", "lion", "cheetah", "hyena", "croc", "crocodile", "vulture"],
    m: [6, 7, 8, 9],
    text: "Somewhere over the horizon a million and a half wildebeest are walking, and a quarter of a million zebra are walking with them. It is not a herd so much as a weather system - it follows the rain in a circle a thousand kilometres round, and it has been going round that circle for longer than there have been people to watch it. Everything that eats a wildebeest is on the move too, and so is everything that eats what is left." },

  { k: "sardinerun", n: "The Sardine Run", em: "🐟",
    z: ["kelpz", "oceanz"], t: { Aquatic: 1.9, Aerial: 1.5, Predator: 1.5 },
    who: ["sardine", "gannet", "dolphin", "penguin", "shark", "brydeswhale", "seal"],
    m: [5, 6, 7],
    text: "A cold current runs north up the coast and the sardines run with it, in shoals fifteen kilometres long. Then the bill is presented: dolphins drive them into a ball, gannets fall out of the sky at sixty miles an hour and swim down after them, sharks and whales come up through the middle. It is the largest gathering of hunters anywhere on earth, and the whole thing exists because a strip of water is a few degrees colder than the water beside it." },

  { k: "rains", n: "The Rains Break", em: "🐸",
    z: ["wetland", "savanna", "savannaz", "jungle"], t: { Venom: 1.9, Aquatic: 1.6, Bug: 1.4 },
    who: ["dartfrog", "toad", "frog", "treefrog", "bullfrog", "axolotl"],
    m: [3, 4, 10, 11],
    text: "The first real rain after the dry, and the ground answers. Frogs that have been buried for months come up in one night and every pan and puddle is deafening - this is explosive breeding, and the whole point of it is to be simultaneous, because a predator can only eat so many in a night. Some of these frogs will be tadpoles and out of the water again before the puddle dries." },

  { k: "salmon", n: "The Salmon Run", em: "🐻",
    z: ["taigaz", "alpine"], t: { Aquatic: 1.8, Predator: 1.7, Aerial: 1.4 },
    who: ["salmon", "grizzly", "bear", "baldeagle", "eagle", "wolf", "otter"],
    m: [8, 9, 10],
    text: "The salmon are going home, upriver, against the current, to the exact gravel they hatched in - and they will not eat again on the way. The bears are at the falls waiting for them. What almost nobody notices is the third act: the carcasses the bears drag into the trees are how the ocean gets into the forest. You can measure sea nitrogen in the trunk of a spruce a hundred metres from the water." },

  { k: "coralspawn", n: "The Coral Spawning", em: "🪸",
    z: ["reefz"], t: { Aquatic: 1.7, Bug: 1.3 },
    who: ["staghorncoral", "coral", "brancoral", "clownfish", "parrotfish"],
    m: [10, 11, 12],
    text: "For a few nights after a full moon, on a signal nobody has fully explained, the whole reef spawns at once - every coral of a species releasing at the same minute, until the water is a blizzard of pink and white going upward. Doing it together is the defence: no predator can eat a reef's worth of eggs in one night. A coral that spawned on its own would simply be dinner." },

  { k: "arribada", n: "The Arribada", em: "🐢",
    z: ["reefz", "oceanz", "kelpz"], t: { Armor: 1.8, Aquatic: 1.5 },
    who: ["kempsridley", "hawksbill", "seaturtle", "greenturtle", "leatherback"],
    m: [5, 6, 7, 8],
    text: "Arribada means arrival. Sea turtles that have spent their lives spread across an ocean come ashore on one beach in a single wave - tens of thousands of them in a few nights, so many that later ones dig up the nests of the earlier ones. In 1947 a home movie caught around forty-two thousand Kemp's ridleys nesting on one Mexican beach in a day. By 1985 the entire species managed about seven hundred nests." },

  { k: "batemergence", n: "The Emergence", em: "🦇",
    z: ["cavezone"], t: { Night: 1.9, Aerial: 1.7, Bug: 0.6 },
    who: ["bat", "freetailedbat", "fruitbat"],
    m: [6, 7, 8],
    text: "At dusk the cave breathes out. Millions of bats leave in a column you can see on weather radar, and they will eat tons of insects before morning - which is worth more to the farms below than any pesticide, and costs nothing. They find their way out through the crush by shouting and listening, in a din so loud that most of it is above anything you can hear." },

  { k: "monarch", n: "The Overwintering", em: "🦋",
    z: ["grove", "canopyz"], t: { Bug: 2.0, Aerial: 1.3 },
    who: ["monarch", "butterfly"],
    m: [11, 12, 1, 2],
    text: "The butterflies hanging in these trees are four generations removed from the ones that left here last spring, and not one of them has been this way before. They are on a map nobody has found yet. They cluster so thickly that branches break under them, and the whole forest ticks quietly with wings." },

  { k: "horseshoe", n: "The Horseshoe Crab Moon", em: "🦀",
    z: ["kelpz", "oceanz"], t: { Armor: 1.8, Aerial: 1.6, Bug: 1.3 },
    who: ["horseshoecrab", "redknot", "crab", "sandpiper"],
    m: [5, 6],
    text: "On the spring tides of the new moon the horseshoe crabs come up the beach to spawn, as they have since before there were dinosaurs. And the red knots arrive on the same day, having flown from Tierra del Fuego, to eat the eggs - they land at half their body weight and must double it in two weeks or they will not reach the Arctic. Two animals with nothing in common, keeping an appointment." },

  { k: "calving", n: "The Calving Grounds", em: "🦌",
    z: ["tundraz"], t: { Wild: 1.8, Swift: 1.5, Predator: 1.4 },
    who: ["caribou", "reindeer", "wolf", "arcticfox", "muskox"],
    m: [5, 6],
    text: "The caribou have walked a thousand kilometres to drop their calves in the same weeks on the same ground, and a calf is standing within an hour and running with the herd within a day - it has to be. The wolves have walked the same distance for the same reason. Nothing about this is a coincidence of timing; it IS the timing." },

  { k: "polarnight", n: "The Long Night", em: "🐧",
    z: ["polarz"], t: { Ice: 1.9, Night: 1.5, Aerial: 0.7 },
    who: ["emperorpenguin", "penguin", "sealeopard", "seal", "orca"],
    m: [6, 7, 8],
    text: "The sun has gone and will not be back for months. The emperor penguins are doing the strangest thing any bird does: breeding in it. The males stand through the dark with an egg on their feet at sixty below, shuffling through a huddle that turns slowly so that everyone takes a turn on the windward side, eating nothing at all, for two months." },

  { k: "cicada", n: "The Brood", em: "🎺",
    z: ["grove", "jungle"], t: { Bug: 2.1, Aerial: 1.4, Canopy: 1.3 },
    who: ["cicada", "bird", "jay"],
    m: [5, 6, 7],
    text: "They have been underground drinking root sap for seventeen years, counting, and this is the year they all agreed on. They come up in the millions per hectare and the woods go to a hundred decibels. Seventeen is a prime number, and that is thought to be the whole trick: a predator that peaks every two, three or five years can never line its good years up with theirs." },

  { k: "redcrab", n: "The Crab Migration", em: "🦀",
    z: ["jungle", "canopyz"], t: { Armor: 1.9, Bug: 1.3 },
    who: ["redcrab", "crab", "coconutcrab"],
    m: [10, 11, 12],
    text: "Fifty million land crabs leave the forest at once and walk to the sea to spawn, and they will not go round anything - roads are closed, bridges are built for them, and the island simply gives way for a few weeks. They are timed to the turning of the tide at the last quarter moon, and they are the forest's gardeners the rest of the year: what they eat and what they dig is why it grows the way it does." },

  { k: "flamingo", n: "The Soda Lake Gathering", em: "🦩",
    z: ["wetland", "highveld"], t: { Aerial: 1.9, Aquatic: 1.4 },
    who: ["flamingo", "pelican", "stork", "heron"],
    m: [7, 8, 9],
    text: "A million flamingos on water hot enough and caustic enough to strip skin, eating the one alga that thrives in it - which is also what makes them pink; they are born grey. Almost nothing else can live here, and that is exactly why they can. The safest place in the world is the one nobody else can enter." },

  { k: "superbloom", n: "The Bloom", em: "🌼",
    z: ["desert", "outbackz"], t: { Bug: 2.0, Aerial: 1.4, Burrow: 1.3 },
    who: ["bee", "butterfly", "hummingbird", "moth"],
    m: [3, 4, 5],
    text: "Enough rain fell at the right time, and seeds that have been waiting in the sand for years - sometimes decades - have all decided at once that this is the year. The desert goes to colour from horizon to horizon and every pollinator for a hundred miles is here. In a few weeks it will be sand again, with a fresh bank of seed under it waiting for the next one." },

  { k: "therut", n: "The Rut", em: "🦌",
    z: ["taigaz", "alpine", "summit"], t: { Wild: 1.8, Armor: 1.4, Predator: 1.3 },
    who: ["reddeer", "deer", "elk", "moose", "bighornsheep", "ibex", "markhor"],
    m: [9, 10, 11],
    text: "The stags are roaring, and the roar is doing most of the work: two animals will bellow at each other for an hour and then walk away, because both of them can hear from the depth of it roughly how the fight would go. The clash only happens when they are too evenly matched to tell. Almost everything you think is a battle is an argument about whether to have one." },

  { k: "fallout", n: "The Fall-out", em: "🐦",
    z: ["grove", "wetland", "canopyz", "jungle"], t: { Aerial: 2.0, Canopy: 1.4, Bug: 1.2 },
    who: ["warbler", "songbird", "swallow", "thrush", "flycatcher"],
    m: [4, 5, 9, 10],
    text: "Overnight the trees have filled with birds that were not here yesterday and will be gone tomorrow. Most of them crossed open water in the dark, navigating by the stars and by the earth's magnetic field, and if they meet a headwind on the far side they come down all at once wherever land appears. Birders call that a fall-out. It is a disaster for the birds and the finest morning of the year for anyone watching." },
];

const EV_BY_KEY = {};
EVENTS.forEach((e) => { EV_BY_KEY[e.k] = e; });

const evHash = (seed, s) => {
  let h = Math.imul((seed | 0) ^ 0x6d2b79f5, 0x9e3779b1);
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0xc2b2ae35);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
};

/* Which event this stretch of walking belongs to.

   Weighted by season, so a salmon run in October is three times as likely as a
   salmon run in March - but never impossible, because a save that can never
   show you a thing is the failure this whole file is written around. */
const eventForIndex = (seed, idx) => {
  const month = new Date().getMonth() + 1;
  const weights = EVENTS.map((e) => (e.m && e.m.indexOf(month) >= 0 ? 3 : 1));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = evHash(seed || 1, "ev" + idx) * total;
  for (let i = 0; i < EVENTS.length; i++) {
    r -= weights[i];
    if (r <= 0) return EVENTS[i];
  }
  return EVENTS[EVENTS.length - 1];
};

// Where the walking has got to. Null during the quiet stretch between events.
const eventNow = (st) => {
  if (!st) return null;
  const steps = st.steps || 0;
  const idx = Math.floor(steps / EV_CYCLE);
  if (steps % EV_CYCLE >= EV_RUN) return null;         // the quiet between
  return eventForIndex(st.runSeed, idx);
};

// How far through it you are, so the guide can say "nearly over".
const eventLeft = (st) => {
  const steps = (st && st.steps) || 0;
  const inCycle = steps % EV_CYCLE;
  return inCycle < EV_RUN ? EV_RUN - inCycle : 0;
};

// Is it happening HERE? An event is somewhere, and being somewhere else is the
// point of it - it is what gives you a reason to travel.
const eventHere = (st, mapKey) => {
  const e = eventNow(st);
  if (!e) return null;
  const m = MAPS[mapKey || (st && st.map)];
  if (!m || !m.zone) return null;
  return e.z.indexOf(m.zone) >= 0 ? e : null;
};

/* The pool, while it is on. Types first, because those always work; then a
   bigger lift for any species the event named that genuinely lives here.

   Floored like everything else. An event makes a country busy with one kind of
   life - it never empties it of the rest. */
const eventPool = (pool, st, mapKey) => {
  if (!pool || !pool.length) return pool;
  const e = eventHere(st, mapKey);
  if (!e) return pool;
  const named = e.who || [];
  return pool.map(([sp, w]) => {
    let mult = 1;
    const types = (DEX[sp] && DEX[sp].t) || [];
    types.forEach((t) => { if (e.t[t]) mult *= e.t[t]; });
    if (named.indexOf(sp) >= 0) mult *= 2.2;
    return [sp, Math.max(0.3, w * mult)];
  });
};

// Which maps a player would have to reach, named rather than described, so the
// announcement can say where to go instead of hinting.
const eventPlaces = (e) => {
  if (!e || typeof MAPS === "undefined") return [];
  const seen = [];
  Object.keys(MAPS).forEach((k) => {
    const m = MAPS[k];
    if (!m || !m.zone || e.z.indexOf(m.zone) < 0) return;
    if (m.name && seen.indexOf(m.name) < 0) seen.push(m.name);
  });
  return seen;
};

const eventAnnounce = (e) => {
  if (!e) return null;
  const places = eventPlaces(e);
  const where = places.length
    ? (places.length <= 3 ? places.join(", ") : places.slice(0, 3).join(", ") + " and " + (places.length - 3) + " more")
    : "out in the country";
  return e.em + " " + e.n + "\n\n" + e.text + "\n\nWord is it can be seen around " + where + ".";
};

/* THE CHECK. Two things here would be invisible for months otherwise.

   A zone in an event's list that no map in the world actually uses means an
   event that can never happen anywhere - it would simply be a quiet stretch
   with a name. And a species hint that resolves nowhere is a key I guessed
   wrong; the event still works, because the types carry it, but the animal it
   was written about is not the one being favoured.

   The second one is why the hints are hints. This file cannot know how the
   roster spells things without reading DEX, and reading DEX by hand is how this
   project has got species facts wrong before - so it asks the running game
   instead, every time it starts. */
{
  const zones = (typeof MAPS !== "undefined")
    ? new Set(Object.values(MAPS).map((m) => m && m.zone).filter(Boolean)) : new Set();
  const deadZones = [];
  EVENTS.forEach((e) => {
    const live = e.z.filter((z) => zones.has(z));
    if (!live.length) deadZones.push(e.k + "(" + e.z.join("/") + ")");
  });

  // A hint resolves if the species exists AND appears in a pool of some map in
  // one of the event's zones. Anything else is a hint that will never fire.
  let hints = 0, landed = 0;
  const missed = [];
  EVENTS.forEach((e) => {
    const here = new Set();
    Object.keys(MAPS || {}).forEach((k) => {
      const m = MAPS[k];
      if (!m || !m.zone || e.z.indexOf(m.zone) < 0) return;
      ["pool", "poolN", "poolWater"].forEach((p) => (m[p] || []).forEach(([sp]) => here.add(sp)));
    });
    (e.who || []).forEach((sp) => {
      hints++;
      if (here.has(sp)) landed++; else missed.push(e.k + ":" + sp);
    });
  });

  console.log("[part89] the world gets on with it: " + EVENTS.length + " events"
    + " | one runs for " + EV_RUN + " steps, then " + EV_QUIET + " quiet"
    + " | species hints that land: " + landed + "/" + hints
    + (deadZones.length ? " | EVENT WITH NO LIVE ZONE: " + deadZones.join(", ") : "")
    + (missed.length ? " | hints that resolve nowhere (types still carry these): " + missed.join(", ") : ""));
}
