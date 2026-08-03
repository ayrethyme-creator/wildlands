// ---------- Part 55: DRAWN MAP TILES ----------
// A third of the world was emoji. Trees and mountains alone are 29% of every
// tile on every map, and the rest of the game is hand-drawn: the animals, the
// ranger, the grass. Two art languages sat side by side and the drawn one was
// better, which made the other read as placeholder.
//
// Emoji are also not the same picture twice. A mountain is a grey lump on one
// phone, a blue-tinted one on another, and flat on a third, so the game had no
// look of its own in the places it used them - it had whatever look the
// player's operating system shipped.
//
// Same mechanism as the grass in part45: an SVG string, cached as a data URI,
// handed back as one background image. No extra elements, no change to the DOM,
// and the tile keeps rendering exactly as it did.
//
// The palettes already say what each zone's "tree" and "mountain" depict, and
// it is not always a tree or a mountain - the emoji range over pines, palms,
// cactus, boulders, wheat, ice, graves, dunes and open sky. Rather than edit
// twenty palettes, the emoji character is read as the name of a shape.

const TILE_KIND = {
  // mountains and the things standing in for them
  "⛰️": "hill", "🏔️": "peak", "🏜️": "dune", "🪨": "boulder", "🌋": "volcano",
  "🧺": "thicket", "🪦": "stone", "🗿": "statue", "🐚": "shell", "🪵": "log",
  // trees and the things standing in for them
  "🌳": "broadleaf", "🌲": "conifer", "🌴": "palm", "🌵": "cactus",
  "🌾": "grain", "🧊": "ice", "🌌": "stars", "🪸": "coral", "🌿": "fern",
  "🕳️": "void", "🌊": "wave", "🌱": "sprout", "🦴": "bone",
};

// Deterministic per tile: a range of mountains should not be one stamp
// repeated 1,494 times, and it must not shimmer when the screen redraws.
const tileVariant = (x, y, n) => {
  let h = (x * 374761393) ^ (y * 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) % n;
};

/* Tile shading is pushed harder than sprite shading. A sprite is looked at on
   its own at a decent size; a map tile is about 24 pixels on a phone with its
   neighbours crowding it, and the gentle steps that model a face on an animal
   flatten into one colour at that size. Measured across all 22 shapes, the
   original steps gave a luminance spread that mostly did not read at all. */
const tsh = (c, amt) => sh(c, amt < 0 ? amt * 1.75 : amt * 1.7);

const svgWrap = (inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">${inner}</svg>`;

/* Every shape is drawn to fill its tile rather than to sit in the middle of
   it. A forest should look like canopy, not like a grid of tree stamps with
   gaps showing between them - the same reasoning the grass tiles use. */
const TILE_SHAPES = {
  broadleaf: (c, v) => {
    // Canopy, not a lollipop. The trunk stays inside the tile instead of
    // poking out of the bottom, and the crown is built from overlapping lumps
    // with a dark underside so a block of forest reads as foliage rather than
    // as a grid of identical round trees.
    const dark = tsh(c, -0.34), light = tsh(c, 0.2), trunk = tsh(c, -0.5);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<path d="M15 30 q1 -8 1 -12 h2 q0 4 1 12 Z" fill="${trunk}"/>` +
      `<path d="M${1 + off} 20 q${2} -9 ${8} -11 q${5} -6 ${11} -1 q${7} 0 ${9} 9 q${1} 8 -8 10 q-9 3 -14 -1 q-6 -1 -6 -6 Z" fill="${dark}"/>` +
      `<path d="M${5 + off} 15 q4 -7 11 -6 q6 1 8 6 q-4 5 -10 5 q-7 0 -9 -5 Z" fill="${c}"/>` +
      `<path d="M${8 + off} 11 q3 -4 8 -3 q-2 4 -8 5 Z" fill="${light}" opacity=".75"/>`);
  },
  conifer: (c, v) => {
    const dark = tsh(c, -0.34), light = tsh(c, 0.14), trunk = tsh(c, -0.6);
    const lean = [0, 1.5, -1.5, 0.8][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.14)}"/>` +
      `<rect x="14.5" y="20" width="3" height="10" fill="${trunk}"/>` +
      `<path d="M${16 + lean} 1 L29 14 L3 14 Z" fill="${dark}"/>` +
      `<path d="M${16 + lean} 7 L30 22 L2 22 Z" fill="${c}"/>` +
      `<path d="M${16 + lean} 7 L${23 + lean} 22 L${9 + lean} 22 Z" fill="${light}" opacity=".45"/>`);
  },
  palm: (c, v) => {
    // Fronds are filled wedges, not strokes. The previous version built them
    // from a path that collapsed to a hairline and left a trunk with a dot.
    const dark = tsh(c, -0.34), trunk = tsh(c, -0.5), light = tsh(c, 0.3);
    const lean = [0, 2, -2, 1][v] || 0;
    const cx = 16 + lean, cy = 12;
    const frond = (dx, dy, fill) =>
      `<path d="M${cx} ${cy} L${cx + dx} ${cy + dy} L${cx + dx * 0.72} ${cy + dy + 4.5} Z" fill="${fill}"/>`;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<path d="M${cx - 1.6} 31 q-1.5 -11 ${0.6 - lean * 0.3} -19 h3 q-1.6 8 0.4 19 Z" fill="${trunk}"/>` +
      frond(-15, 1, dark) + frond(15, 1, dark) +
      frond(-11, -7, c) + frond(11, -7, c) +
      frond(-4, -11, light) + frond(5, -11, light) +
      `<circle cx="${cx}" cy="${cy}" r="2.6" fill="${dark}"/>`);
  },
  cactus: (c, v) => {
    // Filled silhouette in one dark shape with a lighter body on top. Drawing
    // it as a dark stroke under a light stroke turned it into a horseshoe.
    const dark = tsh(c, -0.42), light = tsh(c, 0.3);
    const arm = v % 2
      ? `M6.5 24 v-7 a5 5 0 0 1 7.5 -4.3 v5 a1.6 1.6 0 0 0 -2.5 1.4 v4.9 Z`
      : `M25.5 25 v-8 a5 5 0 0 0 -7.5 -4.3 v5 a1.6 1.6 0 0 1 2.5 1.4 v5.9 Z`;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.1)}"/>` +
      `<path d="${arm}" fill="${dark}"/>` +
      `<rect x="11" y="3" width="10" height="28" rx="5" fill="${dark}"/>` +
      `<rect x="12.6" y="4.6" width="6.8" height="25" rx="3.4" fill="${c}"/>` +
      `<rect x="13.8" y="6.5" width="2" height="21" rx="1" fill="${light}" opacity=".65"/>`);
  },
  grain: (c, v) => {
    // Heads taper to a point. Round-capped ellipses read as spoons.
    const stalk = tsh(c, -0.34), head = tsh(c, 0.3), dark = tsh(c, -0.2);
    const xs = [[3, 9, 15, 21, 27], [5, 11, 17, 23, 29], [2, 8, 16, 22, 28], [6, 12, 18, 24, 30]][v % 4];
    return svgWrap(
      `<rect width="32" height="32" fill="${dark}"/>` +
      xs.map((x, i) => {
        const lean = (i % 2 ? 1 : -1) * (1 + (i % 3));
        const tx = x + lean * 1.4, ty = 12 - (i % 2) * 2;
        return `<path d="M${x} 31 q${lean} -10 ${lean * 1.4} -16" stroke="${stalk}" stroke-width="1.4" fill="none"/>` +
               `<path d="M${tx} ${ty - 6} q3 4 0 8 q-3 -4 0 -8 Z" fill="${head}"/>`;
      }).join(""));
  },
  fern: (c, v) => {
    // The floor was so dark the fronds had nothing to sit against. Floor
    // lifted, fronds broadened, and the middle one carries the highlight.
    // The highlight was near-white against a green floor and read as bone
    // rather than leaf, so it stays inside the green.
    const floor = tsh(c, -0.26), mid = tsh(c, -0.02), light = tsh(c, 0.16);
    const blade = (x, y, dir, h, fill) =>
      `<path d="M${x} ${y} Q${x + dir * 9} ${y - h * 0.55} ${x + dir * 11} ${y - h}` +
      ` Q${x + dir * 4} ${y - h * 0.5} ${x + dir * 2.5} ${y} Z" fill="${fill}"/>`;
    return svgWrap(
      `<rect width="32" height="32" fill="${floor}"/>` +
      blade(5, 31, -1, 17, mid) +
      blade(27, 31, 1, 17, mid) +
      blade(14, 32, -1, 24, light) +
      blade(18, 32, 1, 24, light) +
      `<path d="M16 32 v-11" stroke="${tsh(c, -0.34)}" stroke-width="1.6"/>`);
  },
  sprout: (c, v) => {
    const dark = tsh(c, -0.28), light = tsh(c, 0.2);
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.1)}"/>` +
      `<path d="M16 30 v-12" stroke="${dark}" stroke-width="2.4" stroke-linecap="round"/>` +
      `<ellipse cx="10" cy="16" rx="6.5" ry="4" fill="${c}" transform="rotate(-24 10 16)"/>` +
      `<ellipse cx="22" cy="18" rx="6" ry="3.6" fill="${light}" transform="rotate(22 22 18)"/>`);
  },

  hill: (c, v) => {
    const dark = tsh(c, -0.3), light = tsh(c, 0.2), face = tsh(c, 0.06);
    const off = [0, 3, -3, 1.5][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.18)}"/>` +
      `<path d="M-2 32 L${11 + off} 8 L${20 + off} 20 L${25 + off} 13 L34 32 Z" fill="${dark}"/>` +
      `<path d="M-2 32 L${11 + off} 8 L${18 + off} 32 Z" fill="${face}"/>` +
      `<path d="M${11 + off} 8 L${15 + off} 15 L${7 + off} 15 Z" fill="${light}"/>`);
  },
  peak: (c, v) => {
    const rock = tsh(c, -0.24), snow = tsh(c, 0.42), shade = tsh(c, -0.05);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<path d="M-2 32 L${14 + off} 3 L34 32 Z" fill="${rock}"/>` +
      `<path d="M${14 + off} 3 L${23 + off} 18 L34 32 L${14 + off} 32 Z" fill="${shade}"/>` +
      `<path d="M${14 + off} 3 L${21 + off} 14 L${17 + off} 12 L${13 + off} 16 L${9 + off} 12 Z" fill="${snow}"/>`);
  },
  dune: (c, v) => {
    const dark = tsh(c, -0.18), light = tsh(c, 0.16);
    const off = [0, 4, -4, 2][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${c}"/>` +
      `<path d="M-2 32 q${10 + off} -18 ${34} -6 L34 32 Z" fill="${dark}"/>` +
      `<path d="M-2 32 q${10 + off} -18 ${34} -6" stroke="${light}" stroke-width="2" fill="none"/>` +
      `<path d="M4 26 q8 -5 16 -2" stroke="${light}" stroke-width="1" fill="none" opacity=".5"/>`);
  },
  boulder: (c, v) => {
    const dark = tsh(c, -0.3), light = tsh(c, 0.24), mid = tsh(c, -0.06);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<ellipse cx="${16 + off}" cy="30" rx="15" ry="4" fill="${dark}" opacity=".5"/>` +
      `<path d="M${3 + off} 29 L${7 + off} 12 L${17 + off} 6 L${27 + off} 14 L${29 + off} 29 Z" fill="${mid}"/>` +
      `<path d="M${7 + off} 12 L${17 + off} 6 L${19 + off} 15 Z" fill="${light}"/>` +
      `<path d="M${19 + off} 15 L${27 + off} 14 L${29 + off} 29 L${19 + off} 29 Z" fill="${dark}"/>`);
  },
  volcano: (c, v) => {
    const rock = tsh(c, -0.32), glow = "#e8703a", hot = "#f2c14a";
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.2)}"/>` +
      `<path d="M-2 32 L11 7 L21 7 L34 32 Z" fill="${rock}"/>` +
      `<path d="M11 7 L21 7 L25 15 L7 15 Z" fill="${tsh(c, -0.1)}"/>` +
      `<ellipse cx="16" cy="7.5" rx="5.5" ry="2.2" fill="${glow}"/>` +
      `<ellipse cx="16" cy="7.5" rx="3" ry="1.2" fill="${hot}"/>` +
      (v % 2 ? `<path d="M13 8 q-2 8 -5 12" stroke="${glow}" stroke-width="2" fill="none" opacity=".75" stroke-linecap="round"/>` : ""));
  },
  thicket: (c, v) => {
    // Dense low scrub. Round blobs alone read as sand dunes in a pale palette,
    // so the gaps between bushes are cut dark and a few twigs break the outline.
    const dark = tsh(c, -0.4), mid = tsh(c, -0.12), light = tsh(c, 0.22);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${dark}"/>` +
      `<path d="M${4 + off} 30 q-3 -9 4 -12 q2 -7 9 -5 q7 -3 10 4 q5 3 2 13 Z" fill="${mid}"/>` +
      `<path d="M${9 + off} 30 q-2 -8 3 -10 q4 -4 8 0 q4 3 2 10 Z" fill="${c}"/>` +
      `<g stroke="${dark}" stroke-width="1.2" fill="none" opacity=".8">` +
      `<path d="M${12 + off} 30 q1 -7 -1 -11"/><path d="M${20 + off} 30 q-1 -6 1 -10"/></g>` +
      `<path d="M${13 + off} 15 q3 -3 6 -1 q-2 3 -6 1 Z" fill="${light}" opacity=".7"/>`);
  },
  stone: (c, v) => {
    const dark = tsh(c, -0.3), light = tsh(c, 0.26), mid = tsh(c, -0.04);
    const lean = [0, 1.5, -1.5, 0.6][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<ellipse cx="16" cy="30" rx="12" ry="3" fill="${dark}" opacity=".45"/>` +
      `<path d="M${10 + lean} 30 L${10 + lean * 1.6} 12 a6 6 0 0 1 12 0 L${22 + lean * 1.6} 30 Z" fill="${mid}"/>` +
      `<path d="M${10 + lean} 30 L${10 + lean * 1.6} 12 a6 6 0 0 1 4 -5.6 L${14 + lean} 30 Z" fill="${light}" opacity=".55"/>` +
      `<rect x="${14 + lean}" y="15" width="4" height="1.6" fill="${dark}" opacity=".55"/>`);
  },
  ice: (c, v) => {
    const deep = tsh(c, -0.26), pale = tsh(c, 0.4);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.1)}"/>` +
      `<path d="M${4 + off} 30 L${9 + off} 9 L${18 + off} 4 L${27 + off} 12 L${28 + off} 30 Z" fill="${c}"/>` +
      `<path d="M${9 + off} 9 L${18 + off} 4 L${19 + off} 16 Z" fill="${pale}"/>` +
      `<path d="M${19 + off} 16 L${27 + off} 12 L${28 + off} 30 L${19 + off} 30 Z" fill="${deep}"/>`);
  },
  stars: (c, v) => {
    const pts = [[5, 7], [13, 3], [22, 9], [28, 5], [9, 17], [19, 21], [27, 19], [3, 26], [15, 28], [24, 27]];
    const shift = v % 4;
    return svgWrap(
      `<rect width="32" height="32" fill="${c}"/>` +
      `<ellipse cx="16" cy="16" rx="18" ry="16" fill="${tsh(c, 0.14)}" opacity=".35"/>` +
      pts.map(([x, y], i) => {
        const r = ((i + shift) % 3 === 0) ? 1.5 : ((i + shift) % 3 === 1) ? 1 : 0.7;
        return `<circle cx="${x}" cy="${y}" r="${r}" fill="${tsh(c, 0.75)}" opacity="${0.5 + ((i + shift) % 3) * 0.2}"/>`;
      }).join(""));
  },
  statue: (c, v) => {
    const dark = tsh(c, -0.3), light = tsh(c, 0.24), mid = tsh(c, -0.04);
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.16)}"/>` +
      `<ellipse cx="16" cy="30" rx="11" ry="3" fill="${dark}" opacity=".45"/>` +
      `<path d="M9 30 L10 12 q6 -9 12 0 L23 30 Z" fill="${mid}"/>` +
      `<path d="M9 30 L10 12 q3 -4.5 6 -5 L15 30 Z" fill="${light}" opacity=".5"/>` +
      `<ellipse cx="13" cy="17" rx="1.6" ry="2.2" fill="${dark}"/>` +
      `<ellipse cx="19.5" cy="17" rx="1.6" ry="2.2" fill="${dark}"/>` +
      `<path d="M13 24 q3 2 6 0" stroke="${dark}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`);
  },
  shell: (c, v) => {
    const dark = tsh(c, -0.28), light = tsh(c, 0.28);
    const off = [0, 2, -2, 1][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.12)}"/>` +
      `<path d="M${16 + off} 29 a14 13 0 1 1 0.1 0 Z" fill="${c}"/>` +
      [-9, -4.5, 0, 4.5, 9].map((dx) =>
        `<path d="M${16 + off} 29 q${dx * 0.5} -13 ${dx} -19" stroke="${dark}" stroke-width="1.2" fill="none" opacity=".65"/>`).join("") +
      `<path d="M${16 + off} 29 a14 13 0 0 1 -8 -23" fill="${light}" opacity=".35"/>`);
  },
  coral: (c, v) => {
    // Branches taper rather than ending in beads.
    const dark = tsh(c, -0.3), light = tsh(c, 0.3);
    const lean = [0, 1.5, -1.5, 0.7][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.18)}"/>` +
      [[16, 0, 0], [8, -1, 1], [24, 1, 2]].map(([x, d, i]) => {
        const bx = x + lean, tipx = bx + d * 6, tipy = 8 + i * 2;
        return `<path d="M${bx - 2.6} 31 q${d * 2} -10 ${d * 6 + (d ? 0 : 0)} -${23 - i * 2} q1.6 0 2.6 0.6 q${-d * 4} ${13 - i * 2} ${-d * 4 + 2.6} ${22 - i * 2} Z" fill="${i === 0 ? c : dark}"/>`;
      }).join("") +
      `<path d="M${13 + lean} 12 q3 -5 6 0 q-3 3 -6 0 Z" fill="${light}" opacity=".8"/>`);
  },
  void: (c, v) => {
    const edge = tsh(c, 0.3);
    return svgWrap(
      `<rect width="32" height="32" fill="${c}"/>` +
      `<ellipse cx="16" cy="16" rx="14" ry="13" fill="${tsh(c, -0.5)}"/>` +
      `<ellipse cx="16" cy="16" rx="14" ry="13" fill="none" stroke="${edge}" stroke-width="1" opacity=".35"/>` +
      `<ellipse cx="16" cy="16" rx="8" ry="7" fill="#000" opacity=".55"/>` +
      (v % 2 ? `<circle cx="24" cy="9" r="1" fill="${edge}" opacity=".6"/>` : "") +
      `<circle cx="7" cy="23" r="0.9" fill="${edge}" opacity=".45"/>`);
  },
  wave: (c, v) => {
    const deep = tsh(c, -0.28), foam = tsh(c, 0.45);
    const off = [0, 3, -3, 1.5][v] || 0;
    return svgWrap(
      `<rect width="32" height="32" fill="${c}"/>` +
      `<path d="M-2 20 q${8 + off} -10 16 0 t16 0 L34 34 L-2 34 Z" fill="${deep}"/>` +
      `<path d="M-2 20 q${8 + off} -10 16 0 t16 0" stroke="${foam}" stroke-width="1.8" fill="none"/>` +
      `<path d="M-2 27 q${8 - off} -7 16 0 t16 0" stroke="${foam}" stroke-width="1.1" fill="none" opacity=".45"/>`);
  },
  log: (c, v) => {
    const dark = tsh(c, -0.3), light = tsh(c, 0.2), ring = tsh(c, -0.45);
    return svgWrap(
      `<rect width="32" height="32" fill="${tsh(c, -0.14)}"/>` +
      `<rect x="1" y="12" width="30" height="12" rx="6" fill="${c}"/>` +
      `<rect x="1" y="12" width="30" height="4" rx="2" fill="${light}" opacity=".5"/>` +
      `<rect x="1" y="20" width="30" height="4" rx="2" fill="${dark}" opacity=".5"/>` +
      `<ellipse cx="27" cy="18" rx="4" ry="6" fill="${dark}"/>` +
      `<ellipse cx="27" cy="18" rx="1.6" ry="2.6" fill="${ring}"/>`);
  },
};

// A shape may stand for either a tree or a mountain depending on the zone, so
// the lookup is by what the palette says the tile depicts, not by which slot
// it occupies.
const TILE_ART_CACHE = {};
const tileArtBg = (kind, colour, v) => {
  const key = `${kind}|${colour}|${v}`;
  if (!TILE_ART_CACHE[key]) {
    const build = TILE_SHAPES[kind];
    if (!build) return null;
    TILE_ART_CACHE[key] = `url("data:image/svg+xml,${encodeURIComponent(build(colour, v))}")`;
  }
  return TILE_ART_CACHE[key];
};

/* The public helper, shaped like GRASS_TILE: hand it a tile character, its
   position and the zone palette, get back a background image or null. Null
   means this tile has no drawn form yet and should keep rendering its emoji,
   so adding a shape later is additive and nothing has to be removed. */
const TILE_ART = (ch, x, y, pal) => {
  if (!pal) return null;
  const src = ch === "T" ? pal.tree : ch === "^" ? pal.mount : null;
  if (!src || !src.em) return null;
  const kind = TILE_KIND[src.em];
  if (!kind || !TILE_SHAPES[kind]) return null;
  return tileArtBg(kind, src.bg, tileVariant(x, y, 4));
};

// Which of the world's emoji tiles now have a drawn form.
{
  const drawn = Object.keys(TILE_KIND).filter((em) => TILE_SHAPES[TILE_KIND[em]]);
  console.log(`[part55] drawn map tiles | ${Object.keys(TILE_SHAPES).length} shapes covering ${drawn.length} of ${Object.keys(TILE_KIND).length} tile emoji`);
}
