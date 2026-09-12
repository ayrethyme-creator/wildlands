// ---------- Part 98: WHO LEARNS THE NEW MOVES ----------
// part97 defines the Fossil and Mythic moves, and has to do it early: part17
// builds every generated learnset from the move table as it stands when it
// runs, so the moves must exist before then or Mythic falls through to a
// fallback spread that includes Ember - which is where the burn Ayr was seeing
// came from.
//
// This half has the opposite constraint. part95 adds a hundred mythic species
// and loads at the far end of the order, so anything that hands out moves to
// them has to run after it. Hence the split: the moves early, the ladders late.
//
// part17 has already given generated learnsets to every Fossil and Mythic
// species that existed when IT ran, and those are now drawn from the real pools
// rather than the fallback. What is left for this file is the second hundred,
// which part17 never saw, and any species whose hand-written learnset meant
// part17 left it alone.

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
