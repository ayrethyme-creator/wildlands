// ---------- Part 66: A WORLD THAT IS NOT THE SAME TWICE ----------
// Ayr, having caught all 1000: "the game overall still feels repetitive and
// predictable. replay value is low once you actually catch all 1000 and that's
// very grindy, though i did it."
//
// The diagnosis is not that there is too little content. It is that the game
// only ever asks one question - have you got this one yet - and asks it a
// thousand times. Every run visits the same species in the same order at the
// same rates, so the second playthrough is the first playthrough with the
// answers already written down. A thousand species does not deepen that loop,
// it lengthens it, which is exactly how it turned into grind.
//
// Two systems here, and one rule above both of them.
//
// THE RULE: every animal stays catchable, every run, with more than one chance
// at it. Ayr was explicit about this and she is right - a collection game that
// locks a species out of a save punishes the player for the seed they were
// dealt. So nothing below can ever set a weight to zero. Rarity here means
// "less often, and at particular times", never "not at all", and every scarce
// species is given a window where it becomes easy to find.

// ---- 1. this run's ecology ----
//
// A seed per save. Each species is dealt a standing in this particular world -
// abundant, ordinary, or scarce - and the same seed always deals the same
// world, so a save is consistent with itself across sessions.
const RUN_TIERS = [
  { k: "abundant", w: 1.75, share: 0.22 },
  { k: "ordinary", w: 1.0,  share: 0.56 },
  { k: "scarce",   w: 0.42, share: 0.22 },
];

// Cheap deterministic hash of seed + species. Not cryptographic and does not
// need to be: it needs to be stable and evenly spread, which this is.
const runHash = (seed, sp) => {
  let h = (seed | 0) ^ 0x9e3779b9;
  for (let i = 0; i < sp.length; i++) h = Math.imul(h ^ sp.charCodeAt(i), 0x85ebca6b);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967295;
};

const runTier = (seed, sp) => {
  if (!seed) return RUN_TIERS[1];               // no seed: the old flat world
  const r = runHash(seed, sp);
  let acc = 0;
  for (const t of RUN_TIERS) { acc += t.share; if (r < acc) return t; }
  return RUN_TIERS[1];
};

// The window in which a scarce species stops being scarce.
//
// This is the half of the rule that keeps the promise. A scarce animal is not
// merely rarer for the whole run - it has a time when it is genuinely common,
// so a player who knows what they are looking for can go and get it rather
// than standing in grass hoping. Which window a species gets is dealt from the
// same seed, so it is a fact about this world that can be learned.
//
// Two axes, because one would make every scarce animal a night animal:
//   night      the species is easy to find after dark
//   day        the species is easy to find before dark
//   settled    it becomes common once you are far enough into the run
const RUN_WINDOWS = ["night", "day", "settled"];
const runWindow = (seed, sp) => RUN_WINDOWS[Math.floor(runHash(seed, sp + "|w") * RUN_WINDOWS.length) % RUN_WINDOWS.length];

const windowOpen = (win, badges) => {
  if (win === "night") return typeof isNight === "function" ? isNight() : false;
  if (win === "day") return typeof isNight === "function" ? !isNight() : true;
  return (badges || 0) >= 4;
};

// ---- 2. populations that answer back ----
//
// Standing in one patch of grass taking everything that walks into it was the
// most efficient way to play and the least interesting. Pressure makes a patch
// thin out as it is worked, and recover when it is left alone - so moving on is
// rewarded and the map is worth re-reading rather than memorising once.
//
// Floored, hard, at a quarter. A worked patch gets quiet; it never goes empty,
// because an empty patch is a locked species for anyone who does not realise
// they have to walk away and come back.
const PRESSURE_STEP = 0.55;    // added each time one is taken from a map
const PRESSURE_FADE = 0.04;    // shed per step spent elsewhere
const PRESSURE_FLOOR = 0.25;   // the quietest a patch may ever get

const pressureKey = (mapKey, sp) => mapKey + "|" + sp;
const pressureWeight = (pressure, mapKey, sp) => {
  const p = (pressure && pressure[pressureKey(mapKey, sp)]) || 0;
  return Math.max(PRESSURE_FLOOR, 1 / (1 + p));
};

// ---- putting them together ----
//
// One pool, reweighted. Base weights from the map are multiplied by the run's
// standing for that species, opened up if its window is currently open, and cut
// by however hard this patch has been worked lately. Nothing is removed and
// nothing reaches zero, so `pickPool` still sees every species the map has.
const ecologyPool = (pool, opts) => {
  if (!pool || !pool.length) return pool;
  const { seed, pressure, mapKey, badges } = opts || {};
  const out = pool.map(([sp, w]) => {
    const t = runTier(seed, sp);
    let mult = t.w;
    // An open window lifts a scarce animal to better than ordinary, which is
    // what makes "come back at night" a real answer rather than a consolation.
    if (seed && t.k === "scarce" && windowOpen(runWindow(seed, sp), badges)) mult = 1.35;
    mult *= pressureWeight(pressure, mapKey, sp);
    return [sp, Math.max(0.35, w * mult)];
  });
  return out;
};

// What the Field Guide can tell the player about this run, so the system is
// legible rather than mysterious. A player who cannot tell scarce from unlucky
// just thinks the game is broken.
const ecologyNote = (seed, sp) => {
  if (!seed) return null;
  const t = runTier(seed, sp);
  if (t.k === "abundant") return "🌿 Thriving here this season — you will not go far without meeting one.";
  if (t.k !== "scarce") return null;
  const w = runWindow(seed, sp);
  return w === "night" ? "🌙 Scarce this season, and abroad mostly after dark."
    : w === "day" ? "☀️ Scarce this season, and abroad mostly in daylight."
    : "🏅 Scarce this season. They settle back once the country is better known — after the fourth badge.";
};

console.log("[part66] per-run ecology: 3 tiers, 3 windows, pressure floor",
  PRESSURE_FLOOR, "| nothing ever reaches zero");
