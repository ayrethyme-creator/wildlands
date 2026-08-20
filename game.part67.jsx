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
  // "meadow" was never a zone. No map has ever used that name, so these nine
  // fireflies - the example this whole part opens with - have never once been
  // drawn. The picture was right and the key was wrong: long grass after dark
  // is Long Grass Savanna, which until now had nothing in its air at all.
  savannaz: [{ kind: "fly",   when: "night", n: 9,  c: "#ffe9a3" }],
  savanna:  [{ kind: "fly",   when: "night", n: 7,  c: "#ffe1a0" },
             { kind: "dust",  when: "day",   n: 6,  c: "#e8d9b8" }],
  wetland:  [{ kind: "fly",   when: "night", n: 10, c: "#d8f0a8" },
             { kind: "glint", when: "day",   n: 6,  c: "#eaf8ff" }],
  jungle:   [{ kind: "fly",   when: "night", n: 8,  c: "#bff0c0" },
             { kind: "leaf",  when: "day",   n: 5,  c: "#5e8a58" }],
  grove:    [{ kind: "fly",   when: "night", n: 12, c: "#c8f0a0" },
             { kind: "leaf",  when: "day",   n: 8,  c: "#b8794a" }],
  alpine:   [{ kind: "snow",  when: "any",   n: 14, c: "#ffffff" }],
  summit:   [{ kind: "snow",  when: "any",   n: 10, c: "#eef4fa" }],
  desert:   [{ kind: "dust",  when: "day",   n: 8,  c: "#e8d0a3" }],
  volcanic: [{ kind: "ember", when: "any",   n: 9,  c: "#ffb055" }],
  highveld: [{ kind: "dust",  when: "day",   n: 5,  c: "#d9cbb0" }],
  // Water catches the light. The shimmer band already travelling across a lake
  // says the surface is moving; a glint says the sun is on it. Daylight only -
  // a sparkle at midnight is a torch, not a reflection - and slow, because a
  // fast twinkle reads as a broken pixel.
  kelpz:    [{ kind: "glint", when: "day", n: 7, c: "#eaffff" }],
  reefz:    [{ kind: "glint", when: "day", n: 8, c: "#f2ffff" }],
  oceanz:   [{ kind: "glint", when: "day", n: 6, c: "#e8f8ff" }],
  polarz:   [{ kind: "glint", when: "day", n: 5, c: "#f4ffff" }],

  // The wider regions had nothing in their air at all - every map added after
  // the original eight biomes was silent. Same rules as above: one kind per
  // zone unless the place genuinely changes character after dark, and counts
  // low enough that you notice the air rather than the specks.
  canopyz:  [{ kind: "leaf",  when: "day",   n: 5,  c: "#4c7a3c" },
             { kind: "fly",   when: "night", n: 8,  c: "#c0f0b8" }],
  outbackz: [{ kind: "dust",  when: "day",   n: 8,  c: "#d9a06c" }],
  tundraz:  [{ kind: "snow",  when: "any",   n: 7,  c: "#f4fafe" }],
  taigaz:   [{ kind: "snow",  when: "any",   n: 5,  c: "#e8f0f6" }],
  fossil:   [{ kind: "dust",  when: "day",   n: 6,  c: "#ded0b0" }],

  // Ember Hollow is the only cave that is lit. The other two are `dark`, and
  // the render skips ambient there entirely, so this reaches exactly the one
  // map it should.
  cavezone: [{ kind: "ember", when: "any",   n: 5,  c: "#ff9a4a" }],

  // No sun reaches the Midnight Zone, so a glint would be a lie down there.
  // What is actually in that water is animals making their own light, which is
  // the firefly behaviour exactly - wandering, breathing, lit from within.
  abyssz:   [{ kind: "fly",   when: "any",   n: 7,  c: "#7fd8ff" }],

  // The rifts are not weather. Slow motes, always, in a colour nothing else
  // in the game uses, because these places should not feel like anywhere.
  rift:     [{ kind: "fly",   when: "any",   n: 9,  c: "#cbb0ff" }],

  // The Vigil is a memorial to animals that are gone, and it should not
  // sparkle. Grey dust, very few, drifting in still air - the look of a room
  // nobody has come into for a long time.
  vigilz:   [{ kind: "dust",  when: "any",   n: 4,  c: "#9aa0ac" }],

  // "What We Kept" is the far end of that walk, and the only one of those maps
  // where something was saved. It is the one place in the region with living
  // light in it, and it is the whole point of the region that it looks
  // different from the nine rooms before it.
  hopez:    [{ kind: "fly",   when: "night", n: 10, c: "#b8f0a0" }],

  // Hearthside is somebody's back garden after dark, full of animals that live
  // with people. Fireflies over a lawn, warmer than the wild ones.
  hearth:   [{ kind: "fly",   when: "night", n: 7,  c: "#ffddaa" }],

  // `arena` is deliberately absent: the battle outposts are rooms, and rooms
  // do not have weather.
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
    const size = spec.kind === "glint" ? 1.4 + ambSeed(i, salt + 7) * 1.6
      : spec.kind === "snow" ? 2 + ambSeed(i, salt + 7) * 2.4
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
        boxShadow: (spec.kind === "fly" || spec.kind === "ember" || spec.kind === "glint")
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

// Every mark this file lays down.
//
// part4 treats all of these as floor. They were solid at first, read by walking
// into them like a sign, and that turned each one into a wall. Requiring three
// open sides at placement was not enough: two marks placed independently can
// still pinch a tile off between them, and nine maps ended up with an isolated
// square. Save while standing on one and you load in unable to move - which is
// what happened to Ayr.
//
// Floor removes the whole class of fault instead of narrowing it. Nothing this
// file adds to a map can trap anybody, because nothing it adds is solid.
const MAP_MARKS = "⁂⁃⁄⁅";

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
        // Marks are floor, so this can no longer block anything. Kept because
        // a set of prints out in the open reads better than one wedged against
        // a wall.
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
  { ch: "\u2043", kind: "hive", zones: ["savanna", "savannaz"],
    // "meadow" again - the same zone that never existed, so in practice the
    // hive has only ever appeared in savanna. Long Grass Savanna is the map
    // that name was reaching for.
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

// ---------- SEAL THE POCKETS ----------
// Seven maps carried a single square of floor with no way in: six share one
// corner of a segment template where a tree closes off the last tile against
// the border, and Beeloud Clearing has one walled in behind two hand-placed
// people.
//
// Nobody can be trapped in one, because nobody can reach one to stand there.
// The harm is subtler: they are floor, so anything that looks for somewhere to
// put a finding, a person or a lantern can choose one, and whatever goes there
// can never be collected. part65 was doing exactly that until its bounds check
// was fixed a moment ago.
//
// Rather than hand-edit seven maps and hope no future one grows an eighth, any
// floor tile with no walkable neighbour at all becomes terrain. That is a
// pocket by definition - a tile you could only stand on by teleporting - and
// filling it in costs the player nothing.
const sealPockets = () => {
  if (typeof MAPS === "undefined") return 0;
  const WALK = ".gGp*W" + (typeof MAP_MARKS !== "undefined" ? MAP_MARKS : "");
  let sealed = 0;
  Object.keys(MAPS).forEach((mk) => {
    const m = MAPS[mk];
    if (!m || !m.rows) return;
    const at = (x, y) => {
      const r = m.rows[y];
      if (!r || x < 0 || x >= r.length) return "";
      return r.charAt(x);
    };
    const walkable = (x, y) => { const c = at(x, y); return c !== "" && WALK.includes(c); };
    for (let y = 0; y < m.rows.length; y++) {
      for (let x = 0; x < m.rows[y].length; x++) {
        if (!walkable(x, y)) continue;
        const open = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => walkable(x + dx, y + dy));
        if (open) continue;
        // Fill with whatever is already crowding it, so it disappears rather
        // than becoming a lone rock in the middle of a tree line.
        const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => at(x + dx, y + dy))
          .filter((c) => c === "T" || c === "^");
        const fill = nb[0] || "T";
        m.rows = m.rows.map((r, ry) => ry === y ? r.slice(0, x) + fill + r.slice(x + 1) : r);
        sealed++;
      }
    }
  });
  return sealed;
};

console.log("[part67] unreachable floor pockets sealed:", sealPockets());

// ---------- BIRDS ----------
// From the same list as the weather: "birds scattering out of trees as you
// pass."
//
// The obvious version fires whenever you walk beside a "T", and it would be
// wrong twice over.
//
// "T" is not a tree. It is whatever that zone puts in the way, and the palette
// decides what it looks like: a cactus in the desert, a rock on the highveld
// and in the Outback, a block of ice in the polar sea, coral on the reef, a
// volcano in the ash. Coral does not hold sparrows. So this is limited to the
// zones where "T" is genuinely something a bird could have been sitting in,
// and the colour comes with it - birds read as silhouettes, and a silhouette
// against jungle is not the same colour as one against snow.
//
// The second mistake would be firing every time. A tree that empties itself
// on every pass is a machine, not a bird. Roughly one pass in four does
// anything, and which one is decided from the map, the tile and the step
// counter rather than Math.random - so it is unpredictable to the player but
// identical across every redraw of the same step, which is what stops React
// re-rolling it halfway through the animation.
const BIRD_ZONES = {
  savanna:  "#3a2e24", savannaz: "#3a2e24",
  wetland:  "#2e3a2c",          // reeds, and reeds are where birds really do go up
  jungle:   "#22301f", canopyz:  "#22301f",
  grove:    "#2a2436",
  alpine:   "#3a4048", taigaz:   "#3a4048",
};

// Returns null far more often than not. When it does return, part5 has
// everything it needs to draw: which tile they came out of, what colour they
// are, and one entry per bird.
const birdsFrom = (mapKey, zone, rows, x, y, step) => {
  const col = BIRD_ZONES[zone];
  if (!col || x == null || y == null) return null;

  const at = (tx, ty) => {
    const r = rows[ty];
    return (!r || tx < 0 || tx >= r.length) ? "" : r.charAt(tx);
  };

  // Only the four tiles you could have reached out and touched. Diagonals
  // would fire from trees you never actually came near.
  const trees = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(([tx, ty]) => at(tx, ty) === "T");
  if (!trees.length) return null;

  // Hash the whole key, not its length. Using mapKey.length meant any two maps
  // whose names happen to be the same length produced identical flocks from a
  // tree at the same coordinates - invisible in play, but it is the kind of
  // accidental twinning that shows up later as "why do these two look the same".
  let mh = 0;
  for (let i = 0; i < mapKey.length; i++) mh = (Math.imul(mh, 31) + mapKey.charCodeAt(i)) | 0;
  const salt = (mh ^ Math.imul(step, 3)) | 0;
  const [tx, ty] = trees[Math.floor(ambSeed(step, salt) * trees.length) % trees.length];
  if (ambSeed(tx * 71 + ty, salt) > 0.28) return null;   // most passes, nothing happens

  // Away from you, so they break in the direction that makes sense. If the
  // tree is directly above or below, there is no "away" horizontally and they
  // pick a side instead.
  const dirX = tx === x ? (ambSeed(step, tx + ty) < 0.5 ? -1 : 1) : Math.sign(tx - x);

  const n = 2 + Math.floor(ambSeed(step, tx * 13 + ty) * 3);   // two to four
  const birds = [];
  for (let i = 0; i < n; i++) {
    birds.push({
      key: "b" + i,
      dx: ((18 + ambSeed(i, tx * 5 + ty + step) * 26) * dirX).toFixed(1),
      dy: (-(20 + ambSeed(i, ty * 7 + tx + step) * 22)).toFixed(1),
      // They do not all leave at once. The stagger is most of what separates
      // a flock from a firework.
      delay: (ambSeed(i, step + tx + ty * 3) * 0.18).toFixed(2),
      dur: (0.75 + ambSeed(i, step * 3 + tx) * 0.4).toFixed(2),
      size: (7 + ambSeed(i, tx + ty * 11) * 3).toFixed(1),
    });
  }
  return { tx, ty, col, birds };
};

console.log("[part67] birds live in", Object.keys(BIRD_ZONES).length, "zones");

// ---------- PUDDLES ----------
// Also from Ayr's list: "puddles reflecting lantern light."
//
// The reflecting is the whole point, so a puddle is only worth putting down
// where there is something to reflect. The lights in this world are the 37 lamp
// posts - the "¦" tiles, lit from dusk to dawn - so puddles are laid beside
// those and nowhere else. A puddle out in unlit country is a grey smear.
//
// Not every lamp gets one. Standing water under every light in town reads as a
// flooded street rather than weather that has been and gone, so about half of
// them do, chosen the same deterministic way as everything else here.
//
// And not in every zone. Water does not stand on sand or on hot rock.
//
// Named as the places it CANNOT form rather than the places it can, which is
// the opposite of how AMBIENT and BIRD_ZONES are written, and deliberately so.
// An allow-list of zones goes quietly dead: the first draft of this listed
// wetland, savannaz, canopyz, taigaz and tundraz, and not one of those has a
// lamp post anywhere in it, so five of the eleven entries could never have
// produced anything - the same silent nothing as the fireflies keyed to a
// "meadow" that does not exist. A deny-list cannot fail that way. Anywhere a
// lamp is ever added gets its puddles for free, and the only thing that needs
// maintaining is the short list of country where standing water would be a lie.
const PUDDLE_DRY = {
  desert: 1, outbackz: 1, volcanic: 1, summit: 1, fossil: 1, cavezone: 1,
  // Underwater zones: the whole screen is water, so a puddle means nothing.
  reefz: 1, oceanz: 1, abyssz: 1, kelpz: 1, polarz: 1,
};

// Ground a puddle can lie on. Bare earth and paths only: a puddle drawn over
// tall grass floats on top of the blades, because the grass is a background
// image filling the whole cell and the puddle would sit above it.
const PUDDLE_GROUND = ".p*";

const puddlesFor = (mapKey, rows, zone) => {
  if (PUDDLE_DRY[zone] || !rows || !rows.length) return null;

  const lamps = [];
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      if (rows[y].charAt(x) === "¦") lamps.push([x, y]);
    }
  }
  if (!lamps.length) return null;

  let mh = 0;
  for (let i = 0; i < mapKey.length; i++) mh = (Math.imul(mh, 31) + mapKey.charCodeAt(i)) | 0;

  const groundBy = (lx, ly) => [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
    .map(([dx, dy]) => [lx + dx, ly + dy])
    .filter(([x, y]) => {
      const r = rows[y];
      return r && x >= 0 && x < r.length && PUDDLE_GROUND.includes(r.charAt(x));
    });

  // Roughly half the lamps, but never none. Frost Town has four lamps standing
  // on open ground and all four lost the toss - and because the toss is
  // deterministic it lost it permanently, so that town could never have had a
  // puddle in it. part36 keeps at least one lantern on every map for the same
  // reason. A rule that is allowed to return nothing eventually will.
  const wet = lamps.filter((l, li) => ambSeed(li, mh ^ 9781) <= 0.55);
  const use = wet.length ? wet : lamps.filter((l) => groundBy(l[0], l[1]).length).slice(0, 1);

  const out = [];
  use.forEach(([lx, ly]) => {
    const li = lamps.findIndex(([ax, ay]) => ax === lx && ay === ly);
    const near = groundBy(lx, ly);
    if (!near.length) return;
    const [x, y] = near[Math.floor(ambSeed(li, mh ^ 4423) * near.length) % near.length];
    out.push({
      key: "pd" + li,
      x: x, y: y,
      // Puddles are not round and not all the same size. Width and height vary
      // independently so they read as something water did rather than a stamp.
      w: (44 + ambSeed(li, mh ^ 271) * 30).toFixed(0),
      h: (26 + ambSeed(li, mh ^ 617) * 18).toFixed(0),
      // Where the reflected light sits in the puddle, so the highlight is not
      // dead centre in every one of them.
      cx: (38 + ambSeed(li, mh ^ 811) * 24).toFixed(0),
      // The shimmer is slow. Fast water reads as a broken pixel, the same way
      // a fast glint does.
      dur: (5.5 + ambSeed(li, mh ^ 1013) * 3.5).toFixed(2),
      delay: (-ambSeed(li, mh ^ 1289) * 6).toFixed(2),
    });
  });
  return out.length ? out : null;
};

console.log("[part67] puddles: dry country listed for", Object.keys(PUDDLE_DRY).length, "zones");

// ---------- SEASONAL FRUIT ----------
// The last of the effects Ayr asked for, and the one that needed a calendar.
//
// There was no season in this game and there did not need to be a new clock for
// one: part36's day phase already reads the real time of day off the machine,
// so a tree here fruits in the real month it would fruit in. Walk past a stand
// of marulas in February and they are loaded; come back in June and they are
// bare. Nothing is stored and nothing ticks.
//
// Deliberately only a thing to look at. Ayr ruled out berry bushes - "that's a
// mechanic from Pokemon I don't want yet" - so there is nothing to pick here,
// no item, no counter. A tree that is in fruit looks like a tree that is in
// fruit, and that is the whole feature.
//
// Months are 0-11. The species are real and so are the seasons: marulas fruit
// in the southern late summer, prickly pear through the desert summer, elders
// in early autumn, and conifers hold their cones into the back end of the year.
const FRUIT = {
  savanna:  { c: "#e9c85c", months: [0, 1, 2],       what: "marula" },
  savannaz: { c: "#e9c85c", months: [0, 1, 2],       what: "marula" },
  jungle:   { c: "#6b3f7a", months: [5, 6, 7, 8, 9], what: "figs" },
  canopyz:  { c: "#6b3f7a", months: [5, 6, 7, 8, 9], what: "figs" },
  grove:    { c: "#7a2338", months: [7, 8, 9],       what: "elderberries" },
  desert:   { c: "#c43a6b", months: [6, 7, 8],       what: "prickly pear" },
  alpine:   { c: "#6b4a30", months: [8, 9, 10],      what: "cones" },
  taigaz:   { c: "#6b4a30", months: [8, 9, 10],      what: "cones" },
};

// Every tree does not fruit, and the ones that do are not all equally loaded.
// A whole screen of identically studded trees is wallpaper - the same reason
// there is at most one hive per map.
const FRUIT_MAX = 8;

const fruitFor = (mapKey, rows, zone, month) => {
  const F = FRUIT[zone];
  if (!F || !rows || !rows.length) return null;
  const mo = month == null ? new Date().getMonth() : month;
  if (F.months.indexOf(mo) < 0) return null;

  let mh = 0;
  for (let i = 0; i < mapKey.length; i++) mh = (Math.imul(mh, 31) + mapKey.charCodeAt(i)) | 0;

  // Every fruiting tree on the map first, then thin them down. Taking the first
  // eight in scan order instead put every fruit in the top rows of a dense
  // wood and left the bottom half of the screen bare, which looks like a bug
  // rather than a season. Thinning by an even stride keeps them spread from
  // the top of the map to the bottom.
  const cand = [];
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      if (rows[y].charAt(x) !== "T") continue;
      const seed = mh ^ Math.imul(x + 1, 73856093) ^ Math.imul(y + 1, 19349663);
      if (ambSeed(x + y * 31, seed) > 0.42) continue;      // most trees are bare
      cand.push([x, y, seed]);
    }
  }
  if (!cand.length) return null;

  const keep = cand.length <= FRUIT_MAX
    ? cand
    : Array.from({ length: FRUIT_MAX }, (_, i) => cand[Math.floor((i * cand.length) / FRUIT_MAX)]);

  const out = keep.map(([x, y, seed]) => {
    const n = 2 + Math.floor(ambSeed(x, seed ^ 55) * 3);   // two to four on a tree
    const dots = [];
    for (let i = 0; i < n; i++) {
      dots.push({
        // Kept inside the crown rather than the cell, so fruit never floats off
        // the side of a tree onto the ground beside it.
        left: (26 + ambSeed(i, seed ^ (i * 101 + 7)) * 48).toFixed(1),
        top:  (22 + ambSeed(i, seed ^ (i * 211 + 13)) * 40).toFixed(1),
        r:    (1.6 + ambSeed(i, seed ^ (i * 307 + 19)) * 1.3).toFixed(2),
      });
    }
    return { key: "f" + x + "_" + y, x: x, y: y, dots: dots };
  });
  return out.length ? { c: F.c, what: F.what, trees: out } : null;
};

console.log("[part67] fruit seasons written for", Object.keys(FRUIT).length, "zones");
