// ---------- Part 97: FOSSIL AND MYTHIC LEARN TO HIT BACK ----------
// Ayr, 2026-09-12: "I want some fossil and mythic moves since they are already
// their own types."
//
// They are, and looking into it turned up something worse than a missing move
// list. THE GAME HAS 139 MOVES ACROSS 13 TYPES AND NEITHER FOSSIL NOR MYTHIC
// HAS A SINGLE ONE. Every fossil and every myth in the game fights with
// borrowed weapons.
//
// That matters more than it sounds, because of one line in part4:
//
//     const stab = (DEX[att.sp].t || []).indexOf(mv.t) >= 0 ? STAB : 1;
//
// Same-type attack bonus is 1.5x, and it is the single largest multiplier an
// ordinary attack gets. A creature can only earn it by using a move of its own
// type. So 71 fossils and around 200 myths - 271 species, a quarter of the
// roster - have never once been able to earn it. They have been fighting at a
// permanent disadvantage that no player could see and nothing in the game
// explained.
//
// Twenty moves here, ten each, built to the shape the other thirteen types
// already use: a cheap fast one, a couple in the middle, one heavy one with the
// accuracy to match, and three or four that do something other than damage.
// Powers sit inside the established range - the game's own median attack is 60
// and its ceiling is 100 - so nothing here is stronger than what already exists.
//
// WHAT THIS FILE DELIBERATELY DOES NOT DO
// ---------------------------------------
// It does not give Fossil or Mythic a row in the type chart. Neither type has
// one, which means a Fossil attack is neutral against all fifteen types and
// nothing in the game is strong or weak against either of them. Fixing that is
// a real balance change touching every battle and 271 species on defence as
// well as offence, and it is a decision rather than an oversight, so it is
// Ayr's to make. See the note at the bottom for what I would propose.
//
// These moves are worth having either way: STAB does not need a chart row. A
// fossil using a Fossil move goes from 1x to 1.5x today.

Object.assign(MOVES, {
  // ---- FOSSIL ----
  // Deep time, stone, bone, and the particular ways the earth keeps a body.
  // The status moves are all about being SLOWED OR HELD, because that is what
  // the fossil record actually does to an animal: tar, amber, silt, ice.
  boneclub:    { n: "Bone Club",      t: "Fossil", p: 45, acc: 100 },
  shalesplit:  { n: "Shale Split",    t: "Fossil", p: 58, acc: 95 },
  bonebed:     { n: "Bonebed",        t: "Fossil", p: 68, acc: 95 },
  stratacrush: { n: "Strata Crush",   t: "Fossil", p: 85, acc: 85 },
  deeptime:    { n: "Deep Time",      t: "Fossil", p: 95, acc: 80 },
  tarpit:      { n: "Tar Pit",        t: "Fossil", p: 0,  acc: 90, fx: "lowerSpd" },
  amberlock:   { n: "Amber Lock",     t: "Fossil", p: 0,  acc: 85, fx: "para", fxc: 1 },
  petrify:     { n: "Petrify",        t: "Fossil", p: 0,  acc: 100, fx: "raiseDef" },
  oldbloodroar:{ n: "Old-Blood Roar", t: "Fossil", p: 0,  acc: 90, fx: "fear", fxc: 1 },
  siltfall:    { n: "Silt Fall",      t: "Fossil", p: 52, acc: 100, fx: "lowerSpd", fxc: 0.25 },

  // ---- MYTHIC ----
  // Not magic. STORY - the thing a myth actually does to the person hearing it.
  // It frightens, it confuses, it gets repeated until it is believed, and it
  // outlasts everybody who told it. So the effects are fear, lowered accuracy
  // and sleep rather than fire and lightning, which the game has already.
  hearsay:     { n: "Hearsay",        t: "Mythic", p: 42, acc: 100 },
  talltale:    { n: "Tall Tale",      t: "Mythic", p: 0,  acc: 95, fx: "lowerAcc" },
  rumour:      { n: "Rumour",         t: "Mythic", p: 60, acc: 95 },
  omen:        { n: "Omen",           t: "Mythic", p: 0,  acc: 90, fx: "fear", fxc: 1 },
  storysong:   { n: "Story-Song",     t: "Mythic", p: 0,  acc: 80, fx: "sleep", fxc: 1 },
  glamour:     { n: "Glamour",        t: "Mythic", p: 55, acc: 100, fx: "lowerAtk", fxc: 0.3 },
  wondertouch: { n: "Wonder-Touch",   t: "Mythic", p: 65, acc: 95 },
  legendweight:{ n: "Legend's Weight",t: "Mythic", p: 85, acc: 85 },
  olderthanus: { n: "Older Than Us",  t: "Mythic", p: 95, acc: 80 },
  retold:      { n: "Retold",         t: "Mythic", p: 0,  acc: 100, fx: "raiseAtk" },
});

/* GIVING THEM OUT.

   Every Fossil species gets Fossil moves and every Mythic species gets Mythic
   ones, chosen by how far into the game the species is rather than handed out
   flat - a level-12 ammonite should not know Deep Time.

   The learnset is APPENDED to what the species already has and sorted, exactly
   the way part3b adds Ice and Night moves to the animals that grew into them.
   Nothing is removed, so no save loses a move it had.

   part17 snapshots MOVES into the pools that generated learnsets are built
   from, and it has already run by the time this file loads - which is why this
   adds levels directly to DEX[k].l rather than hoping a generator picks them
   up. part85 learned that the hard way and its note says so. */
const FOSSIL_LADDER = [[1, "boneclub"], [14, "siltfall"], [20, "shalesplit"],
  [26, "tarpit"], [32, "bonebed"], [38, "petrify"], [44, "oldbloodroar"],
  [50, "stratacrush"], [56, "amberlock"], [62, "deeptime"]];
const MYTHIC_LADDER = [[1, "hearsay"], [16, "talltale"], [22, "rumour"],
  [28, "omen"], [34, "glamour"], [40, "storysong"], [46, "wondertouch"],
  [52, "retold"], [58, "legendweight"], [64, "olderthanus"]];

{
  let fossil = 0, mythic = 0, added = 0;
  Object.keys(DEX).forEach((k) => {
    const types = (DEX[k] && DEX[k].t) || [];
    const ladder = types.indexOf("Fossil") >= 0 ? FOSSIL_LADDER
      : types.indexOf("Mythic") >= 0 ? MYTHIC_LADDER : null;
    if (!ladder) return;
    if (ladder === FOSSIL_LADDER) fossil++; else mythic++;
    const have = new Set((DEX[k].l || []).map(([, mv]) => mv));
    const give = ladder.filter(([, mv]) => !have.has(mv));
    added += give.length;
    DEX[k].l = [...(DEX[k].l || []), ...give].sort((a, b) => a[0] - b[0]);
  });

  // Every move named in a ladder must exist, or a species learns nothing at
  // that level and the gap is silent.
  const bad = [...FOSSIL_LADDER, ...MYTHIC_LADDER].map(([, mv]) => mv).filter((mv) => !MOVES[mv]);
  const newMoves = Object.keys(MOVES).filter((k) => MOVES[k].t === "Fossil" || MOVES[k].t === "Mythic");

  console.log("[part97] fossil and mythic can hit back: " + newMoves.length + " new moves"
    + " | learnsets extended for " + fossil + " fossils and " + mythic + " myths"
    + " (" + added + " entries added)"
    + " | they earn STAB for the first time"
    + (bad.length ? " | LADDER NAMES A MOVE THAT DOES NOT EXIST: " + bad.join(", ") : ""));
}

/* WHAT I WOULD PROPOSE FOR THE TYPE CHART, when Ayr wants to decide it.

   Neither type has a row, so a Fossil attack is neutral against everything and
   nothing on earth is strong against a myth. The shape that fits this game's
   own writing is:

     FOSSIL beats MYTHIC. part29's rule is that a myth is best explained by
     what people were actually looking at, and half that book is fossils - the
     griffin is a Protoceratops in gold-bearing ground, the cyclops is a dwarf
     elephant skull with a nasal cavity where the eye should be. When you find
     the bone, the monster stops being a monster. The game already believes
     this; the chart could say it.

     MYTHIC resists almost everything and beats little. A story is hard to kill
     and does not hit back - that is closer to what a myth IS than making it a
     damage type.

     FOSSIL is weak to ICE and ARMOR. Ice because the best-preserved things we
     have came out of permafrost, and Armor because bone breaks against bone.

   It is a real change - 271 species on defence as well as offence, every
   battle - so it is not being made on my own initiative. */
