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
const GRASS_VARIANTS = 8;

// Gradient ids have to be unique per colour, or two different grass palettes on
// one page would share a definition and one would render with the other's bed.
const hashStr = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return h;
};

/* REDRAWN 2026-09-27. Ayr, passing on Eric: the graphics could be better -
   "the resolution... the quality of the colors and textures". Short grass
   was four tufts in a straight row along the bottom of every tile, in four
   fixed layouts, so a field read as rows of tick marks: wallpaper. Now each
   of eight variants scatters its tufts anywhere in the tile, in two tones,
   with a soft mottle of light and shade under them and a few specks of seed
   and soil - drawn from a seeded generator, so a variant always looks the
   same and nothing shimmers. Tall grass is two layers of blades, a dark back
   row and a lit front row, so it stays unmistakable as the encounter grass.

   The mottle is radial and fades to nothing well inside the tile, so it never
   reaches an edge: a tone that reached the edge would draw the grid back on
   (see the note on the flat tall-grass bed below). */
const grassRng = (seed) => {
  let s2 = seed >>> 0;
  return () => { s2 = (s2 * 1664525 + 1013904223) >>> 0; return s2 / 4294967296; };
};
// Soft patches of light and shade, wholly inside the tile.
const tileMottle = (base, v, idp, n, amt) => {
  const r = grassRng(v * 7919 + 101);
  let defs = "", body = "";
  for (let i = 0; i < n; i++) {
    const cx = 4 + r() * 8, cy = 4 + r() * 8, rad = 2.6 + r() * 1.6;
    const col = i % 2 ? sh(base, amt) : sh(base, -amt);
    const id = `${idp}${v}m${i}`;
    defs += `<radialGradient id="${id}"><stop offset="0" stop-color="${col}" stop-opacity=".55"/>` +
            `<stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient>`;
    body += `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${rad.toFixed(2)}" fill="url(#${id})"/>`;
  }
  return { defs, body };
};

const grassSvg = (base, blade, tall, v, edges) => {
  // The neighbour's colour reaching across the join. Painted after the bed and
  // before the blades, so grass grows up THROUGH the tear rather than being
  // covered by it - which is what stops the overlap reading as a sticker laid
  // on top of the tile.
  const torn = edges
    ? ["n", "e", "s", "w"].filter((s) => edges[s]).map((s) => tornEdge(s, edges[s], v)).join("")
    : "";
  const r = grassRng(v * 104729 + (tall ? 7 : 3));
  const light = sh(base, 0.24);

  if (tall) {
    // Tall grass has to be unmistakable - it is where encounters happen, so it
    // is a gameplay signal before it is decoration. A dark back row, then the
    // front row in the blade colour with a lighter tip on each.
    const back = sh(base, -0.52), tip = sh(base, 0.3);
    let blades = "";
    for (let layer = 0; layer < 2; layer++) {
      for (let i = 0; i < 7; i++) {
        const x = (i + 0.2 + r() * 0.8) * (16 / 7);
        const lean = (r() - 0.5) * 2.2;
        const h = layer ? 8 + r() * 5 : 10 + r() * 5;
        const tx = x + lean * 2.4;
        const col = layer ? blade : back;
        blades += `<path d="M${x.toFixed(2)} 16.4 Q${(x + lean * 0.8).toFixed(2)} ${(16 - h * 0.55).toFixed(2)} ${tx.toFixed(2)} ${(16 - h).toFixed(2)}"` +
                  ` stroke="${col}" stroke-width="${layer ? 1.7 : 1.9}" fill="none" stroke-linecap="round"/>`;
        if (layer) blades += `<path d="M${(x + lean * 0.4).toFixed(2)} ${(16 - h * 0.5).toFixed(2)} Q${(x + lean * 1.4).toFixed(2)} ${(16 - h * 0.8).toFixed(2)} ${tx.toFixed(2)} ${(16 - h).toFixed(2)}"` +
                  ` stroke="${tip}" stroke-width=".8" fill="none" stroke-linecap="round" opacity=".8"/>`;
      }
    }
    // FLAT base, deliberately. Any vertical gradient inside a cell means the
    // bottom of one tile is a different value from the top of the tile below
    // it, so every horizontal cell boundary becomes a visible seam - which is
    // the grid reappearing, in gentler form, for the third time.
    return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">` +
           `<rect width="16" height="16" fill="${base}"/>${torn}${blades}</svg>`;
  }

  // Short grass is a texture, not a feature: mottle, scattered small tufts in
  // two tones, a few specks - enough that a field is never one flat fill,
  // never enough to compete with the tall grass beside it.
  const mot = tileMottle(base, v, "gm" + (Math.abs(hashStr(base)) % 9973), 3, 0.11);
  let tufts = "";
  for (let i = 0; i < 7; i++) {
    const x = 1 + r() * 14, y = 3.5 + r() * 11.5;
    const col = i % 3 === 2 ? light : blade;
    const op = i % 3 === 2 ? 0.55 : 0.62;
    const n = 2 + Math.floor(r() * 2);
    for (let b = 0; b < n; b++) {
      const dx = (b - (n - 1) / 2) * 0.9 + (r() - 0.5) * 0.4;
      const h = 1.4 + r() * 1.6;
      tufts += `<path d="M${x.toFixed(2)} ${y.toFixed(2)} q${(dx * 0.4).toFixed(2)} ${(-h * 0.6).toFixed(2)} ${dx.toFixed(2)} ${(-h).toFixed(2)}"` +
               ` stroke="${col}" stroke-width=".6" fill="none" stroke-linecap="round" opacity="${op}"/>`;
    }
  }
  let specks = "";
  for (let i = 0; i < 5; i++) {
    specks += `<circle cx="${(1 + r() * 14).toFixed(2)}" cy="${(1 + r() * 14).toFixed(2)}" r="${(0.22 + r() * 0.2).toFixed(2)}"` +
              ` fill="${i % 2 ? light : sh(base, -0.3)}" opacity=".45"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">` +
         `<defs>${mot.defs}</defs>` +
         `<rect width="16" height="16" fill="${base}"/>${mot.body}` +
         `${torn}${specks}${tufts}</svg>`;
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
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">` +
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

/* ---- moving water, as one surface ----
   Ayr, 2026-09-25, when the per-tile shimmer was taken out: "Yes I do want
   the water to move somehow."

   What went wrong before was that every tile moved on its own: its own band,
   its own delay, so neighbours never matched and a river read as squares.
   The movement now belongs to the WORLD, not the tile: two soft sheets of
   glints on blocks five and seven tiles wide, drifting over all the water at
   once. These are the sheets; part103's WaterGlint lays them over the map as
   one layer and moves them. The block sizes divide the map height (24)
   evenly, so a seam lands on the pattern the next map was already showing. */
const WATER_GLINT_S = 16;   // seconds for one full drift of both sheets
const waterGlint = (bg) => [
  `radial-gradient(ellipse 34% 16% at 50% 50%, ${sh(bg, 0.42)}b3, ${sh(bg, 0.42)}00 74%)`,
  `radial-gradient(ellipse 26% 11% at 50% 50%, ${sh(bg, 0.36)}8c, ${sh(bg, 0.36)}00 74%)`,
];

console.log("[part45] grass and water drawn as tiles |", GRASS_VARIANTS,
  "variants | torn edges on terrain joins");
