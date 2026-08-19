// ---------- Part 43: SLOWER GROWING, HARDER LIVING ----------
// Two balance passes.
//
// 1. Evolution was arriving a little early — the median species matured at 22,
//    which meant a team could be fully grown before the fourth gym and the
//    juvenile forms barely got played. Everything shifts up about a sixth.
//
// 2. The economy was one number going up. Wild animals paid three times their
//    level, every trainer paid a flat hundred, and everything in the shop was
//    on the shelf from the first town. There was no reason to budget, and no
//    way to be short of anything.
//
//    FireRed's economy works because money comes almost entirely from trainers,
//    and each trainer pays exactly once. You cannot grind for cash; you can only
//    spend what the road gave you. That single constraint is what makes buying
//    a Revive a decision instead of a formality.

// ---- 1. slower evolution ----
(() => {
  const SCALE = 1.16;   // about a sixth later
  const nextOf = (k) => { const g = DEX[k] && DEX[k].grows; return g ? (g.to || g.toM || g.toF) : null; };

  let moved = 0;
  Object.keys(DEX).forEach((k) => {
    const d = DEX[k];
    if (!d.grows) return;
    const was = d.grows.at;
    d.grows.at = Math.min(58, Math.round(was * SCALE));
    if (d.grows.at !== was) moved++;
  });

  // Re-apply the two guards from part41, because scaling can break both.
  const topSpawn = {};
  Object.keys(MAPS).forEach((m) => {
    const A = MAPS[m];
    if (!A || !A.pool) return;
    A.pool.forEach(([sp, lv]) => { if (!topSpawn[sp] || lv > topSpawn[sp]) topSpawn[sp] = lv; });
  });
  let lifted = 0;
  Object.keys(DEX).forEach((k) => {
    const d = DEX[k];
    if (!d.grows) return;
    const hi = topSpawn[k];
    if (hi !== undefined && d.grows.at <= hi) { d.grows.at = hi + 3; lifted++; }
  });

  const heads = new Set(Object.keys(DEX).filter((k) => DEX[k].grows));
  Object.keys(DEX).forEach((k) => { const n = nextOf(k); if (n) heads.delete(n); });
  let respaced = 0;
  heads.forEach((h) => {
    let cur = h, prev = null, guard = 0;
    while (cur && DEX[cur] && DEX[cur].grows && guard++ < 8) {
      if (prev !== null && DEX[cur].grows.at < prev + 5) { DEX[cur].grows.at = prev + 5; respaced++; }
      prev = DEX[cur].grows.at;
      cur = nextOf(cur);
    }
  });
  const ats = Object.keys(DEX).filter((k) => DEX[k].grows).map((k) => DEX[k].grows.at).sort((a, b) => a - b);
  console.log("[part43] evolution slowed:", moved, "species | re-lifted", lifted, "| re-spaced", respaced,
    "| now min", ats[0], "median", ats[Math.floor(ats.length / 2)], "max", ats[ats.length - 1]);
})();

// ---- 2. the economy ----
// Prices, and what has to be true before a shop will stock a thing. Gating by
// badge does the work FireRed does by putting better goods in later towns: you
// cannot skip ahead to the good healing, so early fights have to be won with
// the cheap stuff.
const SHOP_STOCK = [
  { key: "treats",      n: "🍖 Trail Treat",   price: 30,  badge: 0,  desc: "Earn a wild animal's trust long enough to study it" },
  { key: "berries",     n: "🫐 Berry Snack",   price: 20,  badge: 0,  desc: "+30 HP in battle" },
  { key: "antidote",    n: "🧪 Antidote",      price: 30,  badge: 0,  desc: "Cures poison ☠️" },
  { key: "wakeberry",   n: "⏰ Rouse Berry",   price: 30,  badge: 0,  desc: "Cures sleep 💤" },
  { key: "bigberries",  n: "🍇 Big Berry",     price: 70,  badge: 2,  desc: "+70 HP in battle" },
  { key: "calmbalm",    n: "🍵 Calming Herb",  price: 35,  badge: 2,  desc: "Cures fear 😨" },
  { key: "coolbalm",    n: "🧣 Warm Wrap",     price: 35,  badge: 3,  desc: "Cures chill 🧊" },
  { key: "freshair",    n: "🩹 Burn Salve",    price: 35,  badge: 3,  desc: "Cures burn 🔥" },
  { key: "honeycombs",  n: "🍯 Honeycomb",     price: 120, badge: 3,  desc: "Restores all PP of your active friend" },
  { key: "balms",       n: "🌿 Soothe Balm",   price: 90,  badge: 4,  desc: "Cures every condition at once" },
  { key: "goldberries", n: "🍯 Golden Berry",  price: 180, badge: 5,  desc: "+150 HP in battle" },
  { key: "revives",     n: "✨ Revive",        price: 350, badge: 6,  desc: "Wakes a fainted bench friend at half HP" },
  { key: "prismberries",n: "💎 Prism Berry",   price: 320, badge: 8,  desc: "+200 HP in battle" },
];
const LANTERN_PRICE = 200;

// Sell at half, rounded down, the way every shop in every one of these games
// has always worked. Selling is the release valve when a run goes badly.
const sellPrice = (key) => {
  if (key === "lantern") return 0;
  const it = SHOP_STOCK.find((s) => s.key === key);
  return it ? Math.floor(it.price / 2) : 0;
};

// A trainer's purse scales with what they actually fielded, so a late-game
// battler is worth fighting and an early one is not a shortcut.
const trainerPrize = (team, base) => {
  const lv = Math.max(1, ...(team || []).map((a) => a.lvl || 1));
  return Math.max(base || 35, Math.round(lv * 9));
};

// Blacking out costs more the further in you are, because by then you have more
// to lose and more ways to have avoided it. Early on it is a slap, not a
// setback.
const blackoutLoss = (coins, badges) =>
  Math.floor((coins || 0) * Math.min(0.34, 0.08 + 0.022 * (badges || 0)));

// ---- 3. what solving a knot is worth ----
//
// Until now: nothing. An arc that worked printed its good ending and paid the
// player in prose, which left the economy with a hole in the middle of it.
// Everything else that pays is finite - a road battler pays once and is then
// beaten for good - and a wild animal yields floor(level/3), about ten coins
// late on, deliberately, so that grinding grass is not an income. Add up what
// is actually renewable after the eighth badge and it is close to nothing,
// against a Revive at 350 and a Prism Berry at 320. The arcs were the obvious
// thing to pay for and they paid nothing at all.
//
// So they pay now, and they are the largest single sum in the game, because
// they are the longest thing in it: five findings gathered across a whole
// stretch of country, a pitch that has to be argued from evidence, and a build
// that can fail and cost you the attempt. Amara funds work that is shown to
// her; this is the funding arriving.
//
// Scaled on the arc's own region so the late knots, which cost more to reach
// and more to get wrong, are worth more than the beehives outside Town 1.
const ARC_REWARD = (arcId) => {
  const n = Math.max(1, (ARCS[arcId] && ARCS[arcId].region) || 1);
  const coins = 220 + n * 65;
  // Paid in kind as well as coin, weighted to what that stage of the game is
  // short of: early runs want healing, late runs want the expensive things a
  // player will not otherwise be able to afford at all.
  const items = n >= 11 ? { revives: 1, prismberries: 1, balms: 1 }
    : n >= 7 ? { revives: 1, goldberries: 1 }
    : n >= 4 ? { bigberries: 2, balms: 1 }
    : { berries: 3, treats: 2 };
  return { coins, items };
};

// One line the player can read, for the dialog after a build succeeds.
const rewardLine = (r) => {
  const names = { revives: "✨ Revive", prismberries: "💎 Prism Berry", goldberries: "🍯 Golden Berry",
    bigberries: "🍇 Big Berry", berries: "🫐 Berry Snack", balms: "🌿 Soothe Balm", treats: "🍖 Trail Treat" };
  const kind = Object.keys(r.items)
    .map((k) => (r.items[k] > 1 ? r.items[k] + "x " : "") + (names[k] || k))
    .join(", ");
  return `💰 The station releases ₡${r.coins} against the work` + (kind ? `, and sends up ${kind}.` : ".");
};

// ARCS is defined in part47, which loads after this file, so the reward is only
// ever read at call time - never here.
console.log("[part43] economy: trainers pay by level, shop gates on badges, selling at half,",
  "solved arcs pay ₡285-₡1325 by region");
