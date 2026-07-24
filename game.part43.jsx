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
  { key: "treats",      n: "🍖 Trail Treat",   price: 30,  badge: 0,  desc: "Befriend wild animals" },
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

console.log("[part43] economy: trainers pay by level, shop gates on badges, selling at half");
