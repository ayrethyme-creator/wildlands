// ---------- Part 36: NIGHT FALLS, AND THE CROWD THINS ----------
// Two jobs Ayr asked for.
//
// 1. DECORATIVE OBSTACLE PEOPLE. An "R" or "V" tile with no real trainer behind
//    it does nothing when you walk into it — the handler hits `if (!tr) return`
//    — but it STILL blocks you, because R/V aren't floor. So they are invisible
//    walls wearing a person. Convert every empty one to the map's own walkable
//    floor so they simply vanish and you can walk through.
//
// 2. A day/night cycle you can actually SEE. It already dims the map slightly
//    and swaps some spawns, but it's easy to miss. Make night unmistakable:
//    a deep blue wash instead of a faint dim, lamp posts that light up in towns,
//    and lanterns through the wilds. The lights stay dark by day.

// ---- 1. clear the decorative obstacles ----
// Pick the floor character this map actually uses, so the patch is invisible.
const floorChar = (m) => {
  const counts = {};
  m.rows.forEach((r) => [...r].forEach((c) => { if (".gGp".includes(c)) counts[c] = (counts[c] || 0) + 1; }));
  let best = ".", n = -1;
  Object.entries(counts).forEach(([c, k]) => { if (k > n) { best = c; n = k; } });
  return best;
};

let cleared = 0;
Object.keys(MAPS).forEach((mk) => {
  const m = MAPS[mk];
  if (!m.rows) return;
  const f = floorChar(m);
  m.rows = m.rows.map((row, y) =>
    [...row].map((ch, x) => {
      if (ch !== "R" && ch !== "V") return ch;
      const t = TRAINERS[`${mk}:${x},${y}`];
      const real = t && (t.team || t.chat || t.line);
      const rival = ch === "V" && typeof RIVAL_TILES !== "undefined" && RIVAL_TILES[`${mk}:${x},${y}`];
      if (real || rival) return ch;
      cleared++;
      return f;
    }).join("")
  );
});
console.log("[part36] decorative obstacle people removed:", cleared);

// ---- 2. lighting ----
// Two new decorative tiles that are always walkable and purely visual:
//   ! = lamp post (towns)      ¡ = lantern (wilds)
// They render as an unlit post by day and a glowing one by night. We place them
// automatically: along town paths, and scattered near trainers/landmarks in
// the wilds so the wilds feel lit rather than pitch black.

// make them walkable in the engine's movement check + the exit scan is untouched
if (typeof WALK_EXTRA === "undefined") { globalThis.WALK_EXTRA = "¦¡"; }

// The night wash. Instead of a flat brightness cut, tint toward deep blue and
// drop saturation and brightness harder, so night reads instantly.
const NIGHT_FILTER = "brightness(.52) saturate(.7) hue-rotate(205deg) contrast(1.05)";
const DUSK_FILTER = "brightness(.72) saturate(.85) hue-rotate(210deg)";
// expose for the renderer
globalThis.NIGHT_FILTER = NIGHT_FILTER;
globalThis.DUSK_FILTER = DUSK_FILTER;

// finer clock: real dawn/dusk bands, not just a hard 6/19 flip
globalThis.dayPhase = () => {
  const h = new Date().getHours();
  if (h >= 6 && h < 8) return "dawn";
  if (h >= 8 && h < 18) return "day";
  if (h >= 18 && h < 20) return "dusk";
  return "night";
};

// --- place the lights ---
// Towns: a lamp post beside the care center door and at path junctions.
const TOWN_KEYS = Object.keys(MAPS).filter((k) => /^town/.test(k) || k === "hearthgate");
let posts = 0, lanterns = 0;

// collect every tile that some exit lands the player onto, per map — never
// drop a light there, or the player materialises standing on a lamp post and
// the landing-tile check (rightly) fails.
const landingTiles = {};
Object.keys(MAPS).forEach((mk) => {
  const m = MAPS[mk];
  if (!m || !m.exits) return;
  Object.values(m.exits).forEach((e) => {
    if (!e || e.map == null) return;
    (landingTiles[e.map] = landingTiles[e.map] || new Set()).add(`${e.x},${e.y}`);
  });
});

const setTile = (m, x, y, ch, mk) => {
  if (y < 0 || y >= m.rows.length || x < 0 || x >= m.rows[0].length) return false;
  if (m.rows[y][x] !== ".") return false;               // only replace plain floor
  if (TRAINERS[`${mk}:${x},${y}`]) return false;
  if (landingTiles[mk] && landingTiles[mk].has(`${x},${y}`)) return false;
  m.rows[y] = m.rows[y].slice(0, x) + ch + m.rows[y].slice(x + 1);
  return true;
};

TOWN_KEYS.forEach((mk) => {
  const m = MAPS[mk];
  if (!m.rows) return;
  const W = m.rows[0].length, H = m.rows.length;
  // corners of the walkable interior + a couple of mid-edge posts
  const spots = [[2, 2], [W - 3, 2], [2, H - 3], [W - 3, H - 3], [Math.floor(W / 2), 2], [Math.floor(W / 2), H - 2]];
  spots.forEach(([x, y]) => { if (setTile(m, x, y, "¦", mk)) posts++; });
});

// Wilds: a lantern every few tiles near where a trainer stands, so the lit path
// follows the route rather than dotting the whole map. Skip caves (they have
// their own torch system) and water maps.
const WILD_KEYS = Object.keys(MAPS).filter((k) =>
  !/^town/.test(k) && k !== "hearthgate" && !/cave|abyss|reef|kelp|ocean|delta|shrine/.test(k) && MAPS[k].rows
);
WILD_KEYS.forEach((mk) => {
  const m = MAPS[mk];
  const near = [];
  Object.keys(TRAINERS).forEach((tk) => {
    if (!tk.startsWith(mk + ":")) return;
    const [, xy] = tk.split(":"); const [x, y] = xy.split(",").map(Number);
    near.push([x, y]);
  });
  // one lantern diagonally adjacent to up to three trainers, plus a couple at edges
  near.slice(0, 3).forEach(([x, y]) => {
    if (setTile(m, x + 1, y + 1, "¡", mk) || setTile(m, x - 1, y + 1, "¡", mk) || setTile(m, x + 1, y - 1, "¡", mk)) lanterns++;
  });
  // a lantern near each landing so you arrive somewhere lit
  const W = m.rows[0].length, H = m.rows.length;
  [[2, Math.floor(H / 2)], [W - 3, Math.floor(H / 2)]].forEach(([x, y]) => { if (setTile(m, x, y, "¡", mk)) lanterns++; });
});

console.log("[part36] lamp posts placed:", posts, "| lanterns placed:", lanterns);
