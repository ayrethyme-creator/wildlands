// ---------- CHAPTER IV PATCHES: types, moves, status system ----------
// Additive patches applied after the base data loads.

Object.assign(TYPE_COLORS, { Ice: "#6fb3d9", Bug: "#8fae3c", Night: "#5c548f", Canopy: "#2e8b57" });

Object.assign(CHART, {
  Ice: { Canopy: 2, Aerial: 2, Burrow: 2, Ember: 0.5, Armor: 0.5 },
  Bug: { Canopy: 2, Night: 2, Ember: 0.5, Aerial: 0.5, Armor: 0.5 },
  Night: { Swift: 2, Canopy: 2, Bug: 0.5, Ember: 0.5 },
  Canopy: { Burrow: 2, Aquatic: 2, Ember: 0.5, Ice: 0.5, Bug: 0.5 },
});
CHART.Predator.Canopy = 2; CHART.Predator.Night = 0.5;
CHART.Aerial.Bug = 2; CHART.Aerial.Ice = 0.5;
CHART.Aquatic.Ice = 0.5;
CHART.Burrow.Canopy = 0.5;
CHART.Venom.Canopy = 2; CHART.Venom.Night = 0.5;
CHART.Armor.Ice = 2;
CHART.Swift.Bug = 2;
CHART.Ember.Ice = 2; CHART.Ember.Bug = 2; CHART.Ember.Canopy = 2;

/* NIGHT, brought back into the pack. Ayr, 2026-09-05: "the night type is too
   powerful and doesn't have enough weaknesses."

   Measured against the other twelve before changing anything, and it was not
   close. Night was weak to ONE type and resisted THREE - the best defensive
   profile in the game apart from Wild, which is meant to be neutral. For scale,
   Canopy is weak to six and resists one.

   Worse than the counts is WHICH types. Night resisted Swift and Predator, the
   two commonest attacking types in the game at 311 and 193 species, while its
   single weakness was Bug, one of the rarest at 67. So the answer to a Night
   animal existed on paper and almost never in your party.

   Two changes, and only two, because the type is supposed to be good:

   1. EMBER NOW BEATS NIGHT. Light against the dark - the one matchup a player
      will guess before being told, and the game had it at neutral. */
CHART.Ember.Night = 2;

/* 1b. AND SO DOES AERIAL, which is MOBBING. Find a roosting owl in daylight and
      the crows, jays and songbirds will come from everywhere to scream at it and
      drive it off - one of the most watchable things a bird does, and the reason
      birders play owl calls to bring the woods out. It is the honest answer to
      "what actually beats a night animal", and it is the one that makes the
      weakness reachable: Ember and Bug together are only 92 species, the
      thinnest answer of any type in the game, while Aerial is 189. */
CHART.Aerial.Night = 2;

/* 2. SWIFT NO LONGER BOUNCES OFF IT. This was the real engine of the problem:
      Night hit Swift for double AND took half from it, so against the single
      commonest type in the game it won both halves of the exchange. Night still
      hits Swift hard - that is its identity, you cannot dodge what you cannot
      see - but Swift now hits back for full.

   Night keeps its resistances to Predator and Venom, which are the flavourful
   ones: a nocturnal animal slipping a hunter, and shrugging off what it has
   spent its life eating. That leaves it weak to two and resisting two, which is
   where Aquatic, Ice and Ember already sit - strong, no longer unanswerable. */

Object.assign(MOVES, {
  frostfang: { n: "Frost Fang", t: "Ice", p: 62, acc: 95, fx: "chill", fxc: 0.2 },
  blizzard: { n: "Blizzard", t: "Ice", p: 85, acc: 85, fx: "chill", fxc: 0.1 },
  snowveil: { n: "Snow Veil", t: "Ice", p: 0, acc: 90, fx: "chill", fxc: 1 },
  icestep: { n: "Ice Step", t: "Ice", p: 45, acc: 100 },
  swarmsting: { n: "Swarm Sting", t: "Bug", p: 65, acc: 95 },
  pollenburst: { n: "Pollen Burst", t: "Bug", p: 55, acc: 95, fx: "sleep", fxc: 0.25 },
  silksnare: { n: "Silk Snare", t: "Bug", p: 0, acc: 90, fx: "lowerSpd" },
  buzzrush: { n: "Buzz Rush", t: "Bug", p: 45, acc: 100 },
  hivecall: { n: "Hive Call", t: "Bug", p: 85, acc: 85 },
  nightambush: { n: "Night Ambush", t: "Night", p: 70, acc: 95 },
  dreadhowl: { n: "Dread Howl", t: "Night", p: 0, acc: 90, fx: "fear", fxc: 1 },
  moonstrike: { n: "Moonstrike", t: "Night", p: 85, acc: 88 },
  duskfeint: { n: "Dusk Feint", t: "Night", p: 45, acc: 100 },
  vineswing: { n: "Vine Swing", t: "Canopy", p: 62, acc: 95 },
  canopycrash: { n: "Canopy Crash", t: "Canopy", p: 85, acc: 88 },
  treeleap: { n: "Tree Leap", t: "Canopy", p: 35, acc: 100, pri: 1 },
  leafshroud: { n: "Leaf Shroud", t: "Canopy", p: 0, acc: 100, fx: "raiseDef" },
  lullaby: { n: "Lullaby Croon", t: "Wild", p: 0, acc: 80, fx: "sleep", fxc: 1 },
  quickfocus: { n: "Quick Focus", t: "Swift", p: 0, acc: 100, fx: "raiseSpd" },
});

Object.assign(SFX, {
  sleep: () => { tone(392, 0, 0.2, { type: "sine", vol: 0.06 }); tone(330, 0.22, 0.28, { type: "sine", vol: 0.05, slide: 250 }); },
  fear: () => tone(110, 0, 0.3, { type: "sawtooth", vol: 0.07, slide: 70 }),
  revive: () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.08, 0.12, { type: "triangle", vol: 0.09 })),
});

// New-type flavour on fitting species
const RETYPE = {
  arcticfox: ["Ice", "Swift"], snowleopard: ["Predator", "Ice"], snowleopard_j: ["Predator", "Ice"],
  penguin: ["Aquatic", "Ice"], seal: ["Aquatic", "Ice"], lynx: ["Predator", "Ice"], ibex: ["Armor", "Ice"],
  galago: ["Night", "Canopy"], owl: ["Aerial", "Night"], owl_j: ["Aerial", "Night"], bat: ["Aerial", "Night"],
  manedwolf: ["Night", "Swift"], jaguar: ["Predator", "Night"], chameleon: ["Canopy", "Swift"],
  sloth: ["Canopy", "Armor"], hornbill: ["Aerial", "Canopy"], python: ["Predator", "Canopy"],
  scorpion: ["Bug", "Venom"], tiger: ["Predator", "Canopy"], tiger_j: ["Predator", "Canopy"],
};
Object.entries(RETYPE).forEach(([k, t]) => { if (DEX[k]) DEX[k].t = t; });

const ADDMOVES = {
  arcticfox: [[26, "frostfang"], [34, "icestep"], [40, "blizzard"]],
  snowleopard: [[28, "frostfang"], [40, "blizzard"]],
  lynx: [[28, "frostfang"], [36, "icestep"]],
  penguin: [[24, "icestep"], [40, "frostfang"]],
  seal: [[26, "icestep"], [40, "blizzard"]],
  ibex: [[30, "icestep"], [38, "snowveil"]],
  galago: [[22, "duskfeint"], [34, "nightambush"], [40, "vineswing"]],
  owl: [[28, "nightambush"], [36, "moonstrike"], [40, "dreadhowl"]],
  bat: [[24, "duskfeint"], [34, "nightambush"]],
  manedwolf: [[26, "duskfeint"], [38, "moonstrike"], [42, "dreadhowl"]],
  jaguar: [[36, "nightambush"], [44, "moonstrike"]],
  chameleon: [[24, "vineswing"], [36, "canopycrash"], [30, "treeleap"]],
  sloth: [[26, "vineswing"], [40, "canopycrash"], [22, "leafshroud"]],
  hornbill: [[28, "vineswing"], [44, "canopycrash"]],
  python: [[30, "vineswing"], [42, "canopycrash"]],
  scorpion: [[18, "swarmsting"], [26, "silksnare"], [36, "hivecall"]],
  tiger: [[32, "canopycrash"], [40, "dreadhowl"]],
  dartfrog: [[26, "pollenburst"]],
  lovebird: [[24, "lullaby"]],
  flamingo: [[24, "lullaby"]],
  cheetah: [[34, "quickfocus"]],
  serval: [[26, "quickfocus"]],
  lion: [[24, "dreadhowl"]],
  wolf: [[26, "dreadhowl"]],
  hyena: [[30, "nightambush"]],
  qilin: [[1, "leafshroud"]],
  thunderbird: [[1, "quickfocus"]],
  phoenix: [[1, "dreadhowl"]],
};
Object.entries(ADDMOVES).forEach(([k, ls]) => {
  if (!DEX[k]) return;
  DEX[k].l = [...(DEX[k].l || []), ...ls].sort((a, b) => a[0] - b[0]);
});
DEX.qilin.m = ["harmonystomp", "ironhide", "leafshroud", "harden"];
DEX.thunderbird.m = ["stormdive", "blitz", "dreadhowl", "quickfocus"];
DEX.phoenix.m = ["emberwing", "magmaburst", "dreadhowl", "preen"];
