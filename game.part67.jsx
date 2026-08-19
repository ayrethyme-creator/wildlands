// ---------- Part 67: WEATHER, AND THINGS IN THE AIR ----------
// Ayr, after the lanterns: "any ideas for more cool effects and fun objects?"
//
// The map moves a little already - grass sways, water shimmers, a lamp
// flickers - but nothing moves through it. Everything that stirs is nailed to
// a tile. Air is what is missing: fireflies over a meadow after dark, leaves
// coming down in the grove, snow drifting across the pass.
//
// All of it is CSS on a handful of spans laid over the map. No tiles are
// touched, no state is kept, and nothing runs per frame in JavaScript - the
// browser animates them and the game does not know they exist. Turning the
// whole layer off is one line, and prefers-reduced-motion already stops every
// animation in the game, this one included.

// What is in the air where, and when. `when` is checked against the day phase,
// so a firefly is a night animal and a falling leaf is not.
//
// Kept deliberately thin: two or three specks per screen reads as air moving.
// Twenty reads as a screensaver, and on a phone it reads as a fault.
const AMBIENT = {
  meadow:   [{ kind: "fly",   when: "night", n: 9,  c: "#ffe9a3" }],
  savanna:  [{ kind: "fly",   when: "night", n: 7,  c: "#ffe1a0" },
             { kind: "dust",  when: "day",   n: 6,  c: "#e8d9b8" }],
  wetland:  [{ kind: "fly",   when: "night", n: 10, c: "#d8f0a8" }],
  jungle:   [{ kind: "fly",   when: "night", n: 8,  c: "#bff0c0" },
             { kind: "leaf",  when: "day",   n: 5,  c: "#5e8a58" }],
  grove:    [{ kind: "fly",   when: "night", n: 12, c: "#c8f0a0" },
             { kind: "leaf",  when: "day",   n: 8,  c: "#b8794a" }],
  alpine:   [{ kind: "snow",  when: "any",   n: 14, c: "#ffffff" }],
  summit:   [{ kind: "snow",  when: "any",   n: 10, c: "#eef4fa" }],
  desert:   [{ kind: "dust",  when: "day",   n: 8,  c: "#e8d0a3" }],
  volcanic: [{ kind: "ember", when: "any",   n: 9,  c: "#ffb055" }],
  highveld: [{ kind: "dust",  when: "day",   n: 5,  c: "#d9cbb0" }],
};

// Deterministic scatter. A firefly that jumps to a new place on every redraw is
// worse than no firefly, and Math.random() in a render does exactly that.
const ambSeed = (i, salt) => {
  let h = Math.imul(i + 1, 374761393) ^ Math.imul(salt, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};

// One spec becomes a list of specks, each with its own position, size, delay
// and duration. Everything here is a style object; part5 only has to render it.
const ambientSpecks = (spec, salt) => {
  const out = [];
  for (let i = 0; i < spec.n; i++) {
    const x = ambSeed(i, salt) * 100;
    const y = ambSeed(i, salt + 17) * 100;
    const dur = 5 + ambSeed(i, salt + 33) * 9;
    const delay = -ambSeed(i, salt + 51) * dur;      // negative: already in motion
    const size = spec.kind === "snow" ? 2 + ambSeed(i, salt + 7) * 2.4
      : spec.kind === "leaf" ? 3 + ambSeed(i, salt + 7) * 2
      : 1.8 + ambSeed(i, salt + 7) * 1.8;
    out.push({
      key: spec.kind + i,
      cls: "amb amb-" + spec.kind,
      style: {
        left: x.toFixed(2) + "%",
        top: y.toFixed(2) + "%",
        width: size.toFixed(1) + "px",
        height: size.toFixed(1) + "px",
        background: spec.c,
        animationDuration: dur.toFixed(2) + "s",
        animationDelay: delay.toFixed(2) + "s",
        // Fireflies and embers glow; leaves, snow and dust are lit by the sky.
        boxShadow: (spec.kind === "fly" || spec.kind === "ember")
          ? `0 0 ${(size * 2.4).toFixed(1)}px ${spec.c}` : undefined,
        borderRadius: spec.kind === "leaf" ? "60% 10% 60% 10%" : "50%",
      },
    });
  }
  return out;
};

// Everything currently in the air on this map. `phase` is the day phase the
// world clock is already keeping, so this follows the same dawn/dusk/night the
// lighting does rather than inventing its own.
const ambientFor = (zone, phase) => {
  const specs = AMBIENT[zone];
  if (!specs) return [];
  const night = phase === "night";
  const out = [];
  specs.forEach((spec, si) => {
    if (spec.when === "night" && !night) return;
    if (spec.when === "day" && night) return;
    out.push(...ambientSpecks(spec, si * 101 + zone.length * 7));
  });
  return out;
};

console.log("[part67] air:", Object.keys(AMBIENT).length, "zones with weather |",
  Object.values(AMBIENT).reduce((n, a) => n + a.length, 0), "kinds in total");

// ---------- TRACKS ----------
// The second thing Ayr asked for, and the one with teeth: "tracks and
// droppings that hint which species live in that patch, readable before you
// meet anything."
//
// This is the piece the ecology in part66 has been missing. A save now decides
// privately that a fennec is scarce this season and abroad only after dark, and
// the only place that is stated is the Field Guide - which you have to already
// own an entry for. Standing in grass, a player has no way to tell a quiet
// patch from bad luck, and that is exactly the blind grinding the ecology was
// meant to remove.
//
// A set of tracks reads the ground. It names two animals that genuinely live
// on this map, favours the ones you have not befriended yet, and says plainly
// when one of them is having a scarce season and when it is abroad. No new
// state: the answer is derived from the map's own pool and the save's seed, so
// it is consistent with what the grass will actually give you.

const TRACK_CHAR = "\u2042";           // ⁂ - a character no map uses for terrain

// Where a set of tracks makes sense: beside grass, on open ground, on a wild
// map. Not in towns - a paw print outside the market is a joke, not a hint.
const placeTracks = () => {
  if (typeof MAPS === "undefined") return 0;
  let placed = 0;
  Object.keys(MAPS).forEach((mk) => {
    const m = MAPS[mk];
    if (!m.rows || !m.pool || !m.pool.length) return;
    if (/^town/.test(mk) || /cave|shrine|rift|vig|dig|kennel|cattery|rescue/.test(mk)) return;
    // one per map, on plain ground with tall grass next to it
    const H = m.rows.length, W = m.rows[0].length;
    let best = null;
    for (let y = 1; y < H - 1 && !best; y++) {
      for (let x = 1; x < W - 1 && !best; x++) {
        if (m.rows[y][x] !== ".") continue;
        const at = (dx, dy) => (m.rows[y + dy] || "")[x + dx];
        const touchesGrass = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => at(dx, dy) === "G");
        // Tracks are read by walking into them, like a sign, so the tile stops
        // being walkable the moment one is laid. Dropping that into a corridor
        // would wall the map in half. Requiring three open sides keeps them out
        // in the open where there is always a way round.
        const open = [[1, 0], [-1, 0], [0, 1], [0, -1]]
          .filter(([dx, dy]) => ".gG*p".includes(at(dx, dy) || "")).length;
        if (touchesGrass && open >= 3) best = [x, y];
      }
    }
    if (!best) return;
    const [x, y] = best;
    m.rows = m.rows.map((r, ry) => ry === y ? r.slice(0, x) + TRACK_CHAR + r.slice(x + 1) : r);
    placed++;
  });
  return placed;
};

// What the ground says. Two animals, the unmet ones first, with their standing
// this season spelled out - so "come back after dark" is something the world
// tells you rather than something you have to infer.
const readTracks = (mapKey, st) => {
  const m = MAPS[mapKey];
  const pool = (m && m.pool) || [];
  if (!pool.length) return "🐾 The ground is scuffed, but nothing here is legible.";

  const seed = st && st.runSeed;
  const dex = (st && st.dex) || {};
  // Prefer what the player has never befriended: a hint about an animal already
  // in the party is a hint nobody needed.
  const ranked = pool.slice().sort((a, b) => ((dex[a[0]] || 0) - (dex[b[0]] || 0)) || (b[1] - a[1]));
  const picks = ranked.slice(0, 2).filter(([sp]) => DEX[sp]);
  if (!picks.length) return "🐾 Old prints, all of them yours.";

  const lines = picks.map(([sp]) => {
    const name = DEX[sp].n;
    const tier = (typeof runTier === "function" && seed) ? runTier(seed, sp).k : "ordinary";
    if (tier === "abundant") return `${name} — and plenty of them, by the state of it.`;
    if (tier !== "scarce") return `${name} — a few, coming and going.`;
    const w = (typeof runWindow === "function") ? runWindow(seed, sp) : null;
    const when = w === "night" ? "moves after dark this season"
      : w === "day" ? "moves in daylight this season"
      : "has been keeping away, though they settle once the country is better known";
    return `${name} — thin on the ground, and ${when}.`;
  });

  return "🐾 Tracks, and what they say:\n\n" + lines.map((l) => "· " + l).join("\n");
};

console.log("[part67] tracks laid on", placeTracks(), "maps");

// ---------- SET DRESSING ----------
// The rest of Ayr's list that is an object rather than an effect: a beehive in
// the meadow, a web strung in the jungle, a nest in the grove.
//
// Placed the same careful way the tracks are. These are things you walk into
// and read, so the tile stops being walkable, so each one needs open ground
// with a way round it - and at most one of each kind per map, because a hive
// every eight paces stops being a discovery and becomes wallpaper.
const DRESSING = [
  { ch: "\u2043", kind: "hive", zones: ["meadow", "savanna"],
    line: "🍯 A hive on a rough stand, and the air busy around it. Somebody keeps these — the grass is trodden in a ring." },
  { ch: "\u2044", kind: "web", zones: ["jungle", "grove"],
    line: "🕸️ A web strung between two trunks, wet with morning. The spider sits dead centre and does not move as you pass." },
  { ch: "\u2045", kind: "nest", zones: ["grove", "wetland", "jungle"],
    line: "🪹 A cup of twigs, low in the fork of a branch. Three eggs, still warm. Whatever laid them is watching you from somewhere close, so you step back." },
];

const placeDressing = () => {
  if (typeof MAPS === "undefined") return 0;
  let placed = 0;
  Object.keys(MAPS).forEach((mk) => {
    const m = MAPS[mk];
    if (!m.rows || !m.zone) return;
    if (/^town/.test(mk) || /cave|shrine|rift|vig|dig|kennel|cattery|rescue/.test(mk)) return;
    DRESSING.forEach((d) => {
      if (!d.zones.includes(m.zone)) return;
      // deterministic per map, so the same world always dresses the same way
      const H = m.rows.length, W = m.rows[0].length;
      const start = (mk.length * 7 + d.kind.length * 13) % Math.max(1, H - 2);
      let spot = null;
      for (let i = 0; i < H - 2 && !spot; i++) {
        const y = 1 + ((start + i) % (H - 2));
        for (let x = 1; x < W - 1 && !spot; x++) {
          if (m.rows[y][x] !== ".") continue;
          const at = (dx, dy) => (m.rows[y + dy] || "")[x + dx];
          const open = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            .filter(([dx, dy]) => ".gG*p".includes(at(dx, dy) || "")).length;
          if (open >= 3) spot = [x, y];
        }
      }
      if (!spot) return;
      const [x, y] = spot;
      m.rows = m.rows.map((r, ry) => ry === y ? r.slice(0, x) + d.ch + r.slice(x + 1) : r);
      placed++;
    });
  });
  return placed;
};

// What each says when you walk into it.
const DRESSING_LINE = {};
DRESSING.forEach((d) => { DRESSING_LINE[d.ch] = d.line; });

console.log("[part67] set dressing placed:", placeDressing());
