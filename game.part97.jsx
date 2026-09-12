// ---------- Part 97: FOSSIL AND MYTHIC LEARN TO HIT BACK ----------
// Ayr, 2026-09-12: "I want some fossil and mythic moves since they are already
// their own types."
//
// They are, and the gap turned out to be worse than a missing move list. The
// game had 139 moves across 13 types and NEITHER FOSSIL NOR MYTHIC HAD ONE.
//
// That is not cosmetic, because of one line in part4:
//
//     const stab = (DEX[att.sp].t || []).indexOf(mv.t) >= 0 ? STAB : 1;
//
// Same-type attack bonus is 1.5x and it is the largest multiplier an ordinary
// attack gets. A creature earns it only with a move of its own type, so 71
// fossils and about 200 myths - a quarter of the roster - had never once been
// able to earn it.
//
// WHY THIS FILE LOADS HERE, DIRECTLY AFTER part85 AND LONG BEFORE part4.
// It was written at the end of the load order, which broke something. part17
// builds every generated learnset out of a table it makes from MOVES AT THE
// MOMENT IT RUNS, and it carries a fallback for exactly this situation:
//
//     Mythic: ["Wild", "Predator", "Aerial", "Ember", "Night", "Venom"]
//
// Because Mythic had no moves of its own, every myth in the game drew its
// learnset from that spread - and Ember is where all six burning moves live.
// Ayr, playing: "there seems to be an error that every time I fight a mythic,
// my animal gets a burn, regardless of the move used." That is the cause. Not
// the move the player chose: nearly every myth in the game had quietly been
// taught fire.
//
// Defining these moves BEFORE part17 runs makes poolFor find a real Mythic pool
// and never reach the fallback. A Phoenix still burns you, because a Phoenix is
// Mythic/Ember and Ember is its second type. A kappa no longer does.
//
// The learnset ladders that go with these moves are in part98, which has to run
// after part95 so that the second hundred exists to be given them.

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

/* THE TYPE CHART. Ayr, 2026-09-12: "Yeah all that sounds good, fossil beats
   mythic."

   Until now neither type had a row, so a Fossil attack was neutral against all
   fifteen types and nothing anywhere was strong or weak against a myth - which
   mattered more once part95 took Mythic to about two hundred species.

   FOSSIL BEATS MYTHIC, and it is the one entry here that the game has already
   spent a hundred field-guide entries arguing for. part29's rule is that a myth
   is best explained by what people were actually looking at, and half that book
   is fossils: the griffin is a Protoceratops lying in gold-bearing ground, the
   cyclops is a dwarf elephant skull with a nasal cavity where the eye should
   be. When you find the bone, the monster stops being a monster.

   The rest is kept deliberately small, because 271 species are affected on
   defence as well as offence:
     a story cannot dent a fact          Mythic hits Fossil for half
     you dig a fossil up                 Burrow hits Fossil hard
     bone breaks against bone            Armor hits Fossil hard
     ice preserves, it does not destroy  Ice hits Fossil for half, and Fossil
                                         gets little out of hitting ice

   Fossil is now the designated answer to Mythic, which is a job the chart
   needed filling the moment Mythic became a fifth of the roster. */
CHART.Fossil = { Mythic: 2, Ice: 0.5 };
CHART.Mythic = { Fossil: 0.5 };
CHART.Burrow.Fossil = 2;
CHART.Armor.Fossil = 2;
CHART.Ice.Fossil = 0.5;

{
  const fossilMoves = Object.keys(MOVES).filter((k) => MOVES[k].t === "Fossil").length;
  const mythicMoves = Object.keys(MOVES).filter((k) => MOVES[k].t === "Mythic").length;
  console.log("[part97] fossil and mythic can hit back: " + fossilMoves + " fossil moves, "
    + mythicMoves + " mythic | defined before part17, so no myth draws its"
    + " learnset from the Ember fallback any more"
    + " | chart: Fossil beats Mythic, Fossil weak to Burrow and Armor");
}
