// ---------- Part 41: GROWING UP PROPERLY ----------
// Two fixes to how animals mature.
//
// 1. TARGET LEVELS THAT ARE ACTUALLY TARGETS
// Evolution fires on `my.lvl >= grows.at`. That reads as a milestone only if
// the animal is caught below it. A handful of species spawn in the wild at or
// above their own threshold, so a freshly caught one evolved on its very next
// level-up — no growing-up period at all, just an instant change. This lifts
// those thresholds clear of the highest level the species spawns at, so there
// is always real distance to travel, and re-spaces multi-stage chains so each
// stage still lands well after the one before it.
//
// 2. NO MORE MOVE AVALANCHE (the scheduling half lives in part4)
// The catch-up list is built here in spirit but applied by the battle engine:
// on evolving, an animal learned every starting move of its new form plus every
// level-up move at or below its current level — up to nine at once, which with
// the four-move cap meant four learned and five stacked "wants to learn"
// prompts in a single screen. Now it learns one on the spot and grows into the
// rest over the following levels.

(() => {
  // ---- highest level each species appears at in the wild ----
  const topSpawn = {};
  Object.keys(MAPS).forEach((m) => {
    const A = MAPS[m];
    if (!A || !A.pool) return;
    A.pool.forEach(([sp, lv]) => {
      if (!topSpawn[sp] || lv > topSpawn[sp]) topSpawn[sp] = lv;
    });
  });

  const nextOf = (k) => {
    const g = DEX[k] && DEX[k].grows;
    if (!g) return null;
    return g.to || g.toM || g.toF;
  };

  // ---- 1a. no threshold may sit at or below where the animal is found ----
  const MARGIN = 3;
  let lifted = 0;
  Object.keys(DEX).forEach((k) => {
    const d = DEX[k];
    if (!d.grows) return;
    const hi = topSpawn[k];
    if (hi === undefined) return;
    if (d.grows.at <= hi) {
      d.grows.at = hi + MARGIN;
      lifted++;
    }
  });

  // ---- 1b. keep every chain properly spaced ----
  // A stage must sit at least GAP levels beyond the stage before it, or the
  // second transformation lands almost on top of the first.
  const GAP = 5;
  const heads = new Set(Object.keys(DEX).filter((k) => DEX[k].grows));
  Object.keys(DEX).forEach((k) => { const n = nextOf(k); if (n) heads.delete(n); });

  let respaced = 0;
  heads.forEach((head) => {
    let cur = head, prev = null, guard = 0;
    while (cur && DEX[cur] && DEX[cur].grows && guard++ < 8) {
      const at = DEX[cur].grows.at;
      if (prev !== null && at < prev + GAP) {
        DEX[cur].grows.at = prev + GAP;
        respaced++;
      }
      prev = DEX[cur].grows.at;
      cur = nextOf(cur);
    }
  });

  console.log("[part41] evolve levels lifted above spawn range:", lifted,
              "| chain stages re-spaced:", respaced);
})();
