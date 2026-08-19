// ---------- Part 45: GRASS THAT IS DRAWN, NOT TYPED ----------
// Tall grass was the character "ᵛᵛ" printed in the middle of a coloured square.
// Short grass was a square with nothing in it. That is most of every screen, so
// it is the single biggest thing separating this from a drawn world.
//
// The rule I got wrong last time: do not decorate the cell, replace what is
// inside it. These tiles are CSS background images, so they fill the cell
// edge to edge with no margin and no centring. Adjacent grass tiles run
// together into one continuous field exactly the way they should, and there is
// nothing to outline where one cell ends and the next begins.

// A handful of variants, chosen by position, so a meadow does not read as one
// stamp repeated three hundred times. Kept to four per type: enough to break
// the pattern, few enough that the browser only ever decodes four images.
const GRASS_VARIANTS = 4;

// Gradient ids have to be unique per colour, or two different grass palettes on
// one page would share a definition and one would render with the other's bed.
const hashStr = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return h;
};

const grassSvg = (base, blade, tall, v, edges) => {
  // The neighbour's colour reaching across the join. Painted after the bed and
  // before the blades, so grass grows up THROUGH the tear rather than being
  // covered by it - which is what stops the overlap reading as a sticker laid
  // on top of the tile.
  const torn = edges
    ? ["n", "e", "s", "w"].filter((s) => edges[s]).map((s) => tornEdge(s, edges[s], v)).join("")
    : "";
  // Blade positions per variant. Some run off the tile edge on purpose - a
  // blade clipped by the cell boundary is what stops the eye finding the grid.
  const sets = [
    [[2, 16, 1], [5, 16, -1], [8, 16, 1], [11, 16, 0], [14, 16, -1], [0, 16, 1]],
    [[1, 16, 0], [4, 16, 1], [7, 16, -1], [10, 16, 1], [13, 16, 0], [15, 16, -1]],
    [[3, 16, -1], [6, 16, 1], [9, 16, 0], [12, 16, -1], [15, 16, 1], [0, 16, 0]],
    [[0, 16, 1], [3, 16, 0], [6, 16, -1], [9, 16, 1], [12, 16, 0], [15, 16, -1]],
  ];
  const shade = sh(base, -0.16);

  if (tall) {
    // Tall grass has to be unmistakable - it is where encounters happen, so it
    // is a gameplay signal before it is decoration. Dense clumps rising most of
    // the cell height, a darker bed beneath, and a lighter tip on each blade.
    const tip = sh(base, 0.3);
    const blades = sets[v % sets.length].map(([x, , lean], i) => {
      const h = 10 + (i % 3) * 2;                 // 10-14 of 16, so it reads tall
      const tx = x + lean * 2.6;
      return `<path d="M${x} 16 Q${x + lean * 0.8} ${16 - h * 0.55} ${tx} ${16 - h}"` +
             ` stroke="${blade}" stroke-width="2" fill="none" stroke-linecap="round"/>` +
             `<path d="M${x + lean * 0.4} ${16 - h * 0.5} Q${x + lean * 1.4} ${16 - h * 0.8} ${tx} ${16 - h}"` +
             ` stroke="${tip}" stroke-width=".9" fill="none" stroke-linecap="round" opacity=".75"/>`;
    }).join("");
    // FLAT base, deliberately. Any vertical gradient inside a cell means the
    // bottom of one tile is a different value from the top of the tile below
    // it, so every horizontal cell boundary becomes a visible seam - which is
    // the grid reappearing, in gentler form, for the third time. The blades
    // carry all the depth instead: a dark stroke with a lighter tip drawn over
    // it, which reads as grass catching the light without touching the
    // background at all.
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">` +
           `<rect width="16" height="16" fill="${base}"/>${torn}${blades}</svg>`;
  }

  // Short grass is a texture, not a feature: a faint mottle and a few small
  // tufts, enough that a field is not one flat fill but never enough to
  // compete with the tall grass beside it.
  const tufts = sets[v % sets.length].slice(0, 4).map(([x, , lean]) =>
    `<path d="M${x} 14 q${lean * 0.8} -2 ${lean * 1.6} -3.2"` +
    ` stroke="${blade}" stroke-width="1.1" fill="none" stroke-linecap="round" opacity=".8"/>`).join("");
  const gid3 = "gs" + Math.abs(hashStr(base + "s")) % 100000;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">` +
         `<defs><radialGradient id="${gid3}" cx="0.35" cy="0.62" r="0.75">` +
         `<stop offset="0" stop-color="${shade}" stop-opacity=".2"/>` +
         `<stop offset="1" stop-color="${shade}" stop-opacity="0"/></radialGradient></defs>` +
         `<rect width="16" height="16" fill="${base}"/>` +
         `<rect width="16" height="16" fill="url(%23${gid3})"/>` +
         `${torn}${tufts}</svg>`;
};

// ---- torn edges ----
//
// Ayr, after the lighting pass: "the blockyness still looks bad to me."
// Lighting could never have fixed it. The grid is visible because terrain
// changes on a hard cell boundary - grass stops and ground begins along a
// perfectly straight line, sixteen pixels of it, repeated down the whole join.
// However well an individual tile is drawn, the eye finds the ruled edges
// between them.
//
// So a tile now draws its neighbour's colour intruding a little way across the
// shared edge, along a wobbling profile rather than a straight one. The join
// becomes a torn overlap. Drawn on the grass side only: if both sides drew
// their own spill they would paint over each other and the boundary would end
// up straight again, two pixels further out.
//
// The wobble is derived from the tile's own variant, so a given patch of
// ground always tears the same way and nothing shimmers on redraw.
const tornEdge = (side, colour, v) => {
  // Four fixed profiles, picked by variant. Hand-written rather than random so
  // the tear reads as torn paper and not as noise.
  const p = [
    [2.9, 1.5, 3.4, 2.0, 2.6],
    [1.7, 3.1, 2.2, 3.5, 1.9],
    [3.3, 2.0, 1.6, 2.8, 3.2],
    [2.1, 2.7, 3.5, 1.7, 2.4],
  ][v % 4];
  // Points across the edge, then back along the outside.
  const pts = p.map((d, i) => [i * 4, d]);
  let d;
  if (side === "n") {
    d = `M0 0 H16 V${pts[4][1]} ` + pts.slice().reverse().map(([x, o]) => `L${x} ${o}`).join(" ") + " Z";
  } else if (side === "s") {
    d = `M0 16 H16 V${16 - pts[4][1]} ` + pts.slice().reverse().map(([x, o]) => `L${x} ${16 - o}`).join(" ") + " Z";
  } else if (side === "w") {
    d = `M0 0 V16 H${pts[4][1]} ` + pts.slice().reverse().map(([y, o]) => `L${o} ${y}`).join(" ") + " Z";
  } else {
    d = `M16 0 V16 H${16 - pts[4][1]} ` + pts.slice().reverse().map(([y, o]) => `L${16 - o} ${y}`).join(" ") + " Z";
  }
  return `<path d="${d}" fill="${colour}"/>`;
};

// Cache by colour, variant and the exact edge signature, so the same images are
// reused everywhere rather than rebuilt for all 280 tiles on a map. Interior
// tiles - which are most of any map - carry an empty signature and so still
// share the same four images they always did.
const GRASS_CACHE = {};
const grassBg = (base, blade, tall, v, edges) => {
  const sig = edges ? ["n", "e", "s", "w"].map((s) => (edges[s] ? s + edges[s] : "")).join("") : "";
  const key = `${base}|${blade}|${tall ? 1 : 0}|${v}|${sig}`;
  if (!GRASS_CACHE[key]) {
    GRASS_CACHE[key] = `url("data:image/svg+xml,${encodeURIComponent(grassSvg(base, blade, tall, v, edges))}")`;
  }
  return GRASS_CACHE[key];
};

// Deterministic variant per tile, so grass does not shimmer when the screen
// redraws and a given patch always looks the same.
const grassVariant = (x, y) => {
  let h = (x * 73856093) ^ (y * 19349663);
  h = (h ^ (h >>> 13)) >>> 0;
  return h % GRASS_VARIANTS;
};

// The public helper: hand it a tile character and its position, get back a
// background, or null if this tile is not grass and should render as before.
//
// `edges` is optional and carries the colours of whichever of the four
// neighbours are a different terrain - {n,e,s,w}, any of them absent when that
// side matches. Called without it, grass renders exactly as it did before.
const GRASS_TILE = (ch, x, y, bg, edges) => {
  if (ch !== "G" && ch !== "g") return null;
  const tall = ch === "G";
  const blade = sh(bg, tall ? -0.46 : -0.22);
  return grassBg(bg, blade, tall, grassVariant(x, y), edges);
};

// ---- water ----
//
// Water had no drawn tile at all. It was a flat fill with one pale band slid
// across it on a nine second loop, which is why a lake read as a blue
// rectangle with a highlight travelling over it rather than as water: no
// surface, and a shoreline ruled dead straight against the sand.
//
// Two things fix that, and they are the same two that fixed the grass. The
// surface gets drawn - ripple lines at rest, short and broken, so the eye has
// something to sit on - and the shore gets torn, so the join with the land is
// ragged instead of ruled.
//
// The ripples are deliberately faint. The shimmer band still slides over the
// top of this, and a busy surface underneath a moving highlight reads as
// static, not as depth.
const waterSvg = (base, v, edges) => {
  const torn = edges
    ? ["n", "e", "s", "w"].filter((s) => edges[s]).map((s) => tornEdge(s, edges[s], v)).join("")
    : "";
  const pale = sh(base, 0.26);
  const deep = sh(base, -0.14);
  // Ripple runs per variant: y position, start x, length. Broken lines rather
  // than full-width strokes, because a line that spans the tile edge to edge
  // lines up with its neighbour and draws the grid straight back on.
  const runs = [
    [[3.5, 1, 6], [7.5, 8, 6], [11, 3, 5], [13.5, 9, 4]],
    [[2.5, 6, 6], [6, 2, 5], [9.5, 7, 6], [13, 1, 5]],
    [[4, 4, 7], [8, 1, 5], [11.5, 8, 6], [14, 3, 4]],
    [[3, 9, 5], [6.5, 3, 6], [10, 6, 6], [13.5, 2, 5]],
  ][v % 4];
  const ripples = runs.map(([y, x0, len], i) =>
    `<path d="M${x0} ${y} q${len / 2} ${i % 2 ? -0.9 : 0.9} ${len} 0"` +
    ` stroke="${i % 2 ? pale : deep}" stroke-width=".9" fill="none"` +
    ` stroke-linecap="round" opacity="${i % 2 ? ".42" : ".30"}"/>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">` +
         `<rect width="16" height="16" fill="${base}"/>${torn}${ripples}</svg>`;
};

const WATER_CACHE = {};
const waterBg = (base, v, edges) => {
  const sig = edges ? ["n", "e", "s", "w"].map((s) => (edges[s] ? s + edges[s] : "")).join("") : "";
  const key = `${base}|${v}|${sig}`;
  if (!WATER_CACHE[key]) {
    WATER_CACHE[key] = `url("data:image/svg+xml,${encodeURIComponent(waterSvg(base, v, edges))}")`;
  }
  return WATER_CACHE[key];
};

// Same contract as GRASS_TILE: character, position, colour, and whichever
// neighbours differ. Returns null for anything that is not water.
const WATER_TILE = (ch, x, y, bg, edges) => {
  if (ch !== "W") return null;
  return waterBg(bg, grassVariant(x, y), edges);
};

console.log("[part45] grass and water drawn as tiles |", GRASS_VARIANTS,
  "variants | torn edges on terrain joins");
