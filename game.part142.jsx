// ---------- Part 142: GROUND WITH A SURFACE, AND LIGHT ACROSS THE MAP ----------
// 2026-09-27. Ayr, passing on Eric: the graphics can be improved - "the
// resolution... the quality of the colors and textures". Looked at in the
// running game, three things made the map read cheap: grass as rows of tick
// marks (redrawn in part45), bare ground as one flat colour, and every field
// one even tone from edge to edge. This part is the other two.
//
// GROUND. Earth, sand, snow, rock floor - whatever the zone's ground colour -
// gets a surface: a soft mottle, specks of grit, now and then a pebble, and a
// darker worn rim where a road or a yard meets grass.
//
// UNDER EVERYTHING. A tree, a rock, a person, a hut each painted its own
// square of flat ground colour, so the new texture would have stopped dead
// at every one of them - a field of grass with a flat green box round each
// tree. So those drawings lose that one square (unfloor, below: cached, so
// once per drawing) and the terrain is laid underneath them instead: short
// grass under a tree in a field, ground under a trader in a square.
//
// LIGHT. One layer over the whole map (TerrainShade) carries broad soft
// patches of light and shade, the way cloud and uneven ground break up a real
// field. It is one static layer, not a per-tile effect - per-tile anything
// either draws the grid or costs a repaint per step (see part103's
// WaterGlint for both lessons) - and each patch sits wholly inside the map,
// so nothing is cut off at a seam. The palette itself is untouched: it was
// mixed down on purpose on 2026-08-19 (part3), and this works with it.

const GROUND_CACHE = {};
const groundSvg = (base, v, worn) => {
  const r = grassRng(v * 15485863 + 29);
  const mot = tileMottle(base, v, "dm" + (Math.abs(hashStr(base)) % 9973), 3, 0.09);
  const dark = sh(base, -0.28), light = sh(base, 0.18);
  let grit = "";
  for (let i = 0; i < 9; i++) {
    grit += `<circle cx="${(0.8 + r() * 14.4).toFixed(2)}" cy="${(0.8 + r() * 14.4).toFixed(2)}" r="${(0.18 + r() * 0.22).toFixed(2)}"` +
            ` fill="${i % 3 ? dark : light}" opacity="${i % 3 ? ".32" : ".42"}"/>`;
  }
  let pebbles = "";
  const nPeb = r() < 0.55 ? 1 : (r() < 0.3 ? 2 : 0);
  for (let i = 0; i < nPeb; i++) {
    const cx = 3 + r() * 10, cy = 3 + r() * 10, rx = 0.7 + r() * 0.5;
    pebbles += `<ellipse cx="${cx.toFixed(2)}" cy="${(cy + 0.25).toFixed(2)}" rx="${rx.toFixed(2)}" ry="${(rx * 0.55).toFixed(2)}" fill="${dark}" opacity=".35"/>` +
               `<ellipse cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" rx="${rx.toFixed(2)}" ry="${(rx * 0.6).toFixed(2)}" fill="${light}" opacity=".6"/>`;
  }
  // A worn rim along each side that meets grass: the edge of a path is where
  // feet and wheels scuff, and it is also what seats the torn grass edge.
  let rim = "", rimDefs = "";
  (worn || "").split("").forEach((side) => {
    const id = "wr" + side;
    const [x1, y1, x2, y2] = { n: [0, 0, 0, 1], s: [0, 1, 0, 0], w: [0, 0, 1, 0], e: [1, 0, 0, 0] }[side];
    rimDefs += `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">` +
               `<stop offset="0" stop-color="${dark}" stop-opacity=".38"/><stop offset=".3" stop-color="${dark}" stop-opacity="0"/></linearGradient>`;
    rim += `<rect width="16" height="16" fill="url(#${id})"/>`;
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 16 16">` +
         `<defs>${mot.defs}${rimDefs}</defs><rect width="16" height="16" fill="${base}"/>` +
         `${mot.body}${rim}${pebbles}${grit}</svg>`;
};
const GROUND_TILE = (x, y, bg, worn) => {
  const v = grassVariant(x, y);
  const key = `${bg}|${v}|${worn || ""}`;
  if (!GROUND_CACHE[key]) GROUND_CACHE[key] = `url("data:image/svg+xml,${encodeURIComponent(groundSvg(bg, v, worn))}")`;
  return GROUND_CACHE[key];
};

// What lies under a tile: short grass if its ground is grass, the zone's
// ground otherwise, with a worn rim on any side that meets grass. Null for
// water and for colours this does not recognise (a lamp's glow, the dark).
const TERRAIN_UNDER = (ch, x, y, bg, pal, rows) => {
  if (!pal || !bg) return null;
  if (bg === pal.grass2 || bg === pal.grass) return GRASS_TILE("g", x, y, pal.grass2, null);
  if (bg !== pal.ground) return null;
  let worn = "";
  if (rows && (ch === "." || ch === "p")) {
    [["n", x, y - 1], ["e", x + 1, y], ["s", x, y + 1], ["w", x - 1, y]].forEach(([side, nx, ny]) => {
      const c = (rows[ny] || "")[nx];
      if (c === "g" || c === "G") worn += side;
    });
  }
  return GROUND_TILE(x, y, bg, worn);
};

// A drawing without its own painted square of ground, so the terrain laid
// under it shows through. Only SVG drawings are touched; a painted person
// (PNG) has no square to take away.
const UNFLOOR_CACHE = {};
const UNFLOOR_HEAD = 'url("data:image/svg+xml,';
const unfloor = (img) => {
  if (!img || img.indexOf(UNFLOOR_HEAD) !== 0) return img;
  if (img in UNFLOOR_CACHE) return UNFLOOR_CACHE[img];
  let out = img;
  try {
    const svg = decodeURIComponent(img.slice(UNFLOOR_HEAD.length, -2));
    const cut = svg.replace(/<rect width="(32|16)" height="(32|16)" fill="[^"]*"\/>/, "");
    if (cut !== svg) out = UNFLOOR_HEAD + encodeURIComponent(cut) + '")';
  } catch (e) { /* leave it as it was */ }
  UNFLOOR_CACHE[img] = out;
  return out;
};

// Broad light and shade over the whole map, seeded by the map so it is always
// the same. Patches are placed wholly inside the map: one cut off at the edge
// would draw a straight line across a seam.
const TerrainShade = React.memo(function TerrainShade({ mapKey }) {
  const m = MAPS[mapKey];
  if (!m || m.dark || !m.rows || !m.rows.length) return null;
  const H = m.rows.length, W = [...m.rows[0]].length;
  if (W < 10 || H < 10) return null;
  const r = grassRng(Math.abs(hashStr(mapKey)) + 17);
  /* ONE PATCH PER BLOCK, NOT A SCATTER. Ayr, 2026-09-27, the same day: "there
     is a dark patch in the center of each town and map." The first version
     scattered patches at random but kept every one wholly inside the map, so
     they piled up in the middle - and two in three were shade. Every map came
     out dark in the centre. Now the map is cut into even blocks and each
     block holds one patch that stays inside its own block, light and shade
     alternating like a chessboard: the same amount of each everywhere, the
     edges as covered as the middle, and still nothing crossing a seam. */
  const B = 7;
  const cols = Math.max(1, Math.round(W / B)), rowsN = Math.max(1, Math.round(H / B));
  const bw = W / cols, bh = H / rowsN;
  const layers = [];
  for (let by = 0; by < rowsN; by++) {
    for (let bx = 0; bx < cols; bx++) {
      const rad = Math.min(bw, bh) * (0.36 + r() * 0.12);
      const cx = bx * bw + rad + r() * (bw - 2 * rad), cy = by * bh + rad + r() * (bh - 2 * rad);
      const shade = (bx + by) % 2 === 0;
      const col = shade ? "20,26,14" : "255,246,220";
      const a = shade ? 0.08 + r() * 0.03 : 0.07 + r() * 0.03;
      layers.push(`radial-gradient(circle calc(var(--tile) * ${rad.toFixed(2)}) at calc(var(--tile) * ${cx.toFixed(2)}) calc(var(--tile) * ${cy.toFixed(2)}), ` +
        `rgba(${col},${a.toFixed(3)}), rgba(${col},0))`);
    }
  }
  return (
    <div aria-hidden="true" style={{
      position: "absolute", left: 0, top: 0,
      width: `calc(var(--tile) * ${W})`, height: `calc(var(--tile) * ${H})`,
      pointerEvents: "none", zIndex: 3, backgroundImage: layers.join(", "),
      // Its own compositor layer, painted once. Without this every tile that
      // changed under it - a step, a rustle - repainted a dozen soft gradients
      // over that tile too (2026-09-28: walking had gone choppy).
      willChange: "transform", transform: "translateZ(0)",
    }} />
  );
});

// ---- buildings, drawn at the size of a building ----
// A clinic, a shop, a hut, an arena and the Professor's tent were each
// squeezed into one tile - the same size as a flower - which is what made a
// town read as an empty square with a few icons in it. They are drawn the way
// landmarks are (part106): large, standing on their own tile and rising over
// the ground behind it, under the ranger and the animals. The tile is still
// the one you walk into; only the picture is bigger. A building written
// across two or more tiles (an arena's "YY") is drawn once, across all of
// them.
const BIG_BUILD = new Set(["H", "C", "M", "Y", "P"]);
const BIG_BUILD_CACHE = {};
const bigBuildingsOf = (mapKey) => {
  const m = MAPS[mapKey];
  if (!m || !m.rows) return [];
  const sig = mapKey + "|" + m.rows.join("");
  if (BIG_BUILD_CACHE[mapKey] && BIG_BUILD_CACHE[mapKey].sig === sig) return BIG_BUILD_CACHE[mapKey].list;
  const rows = m.rows.map((r) => [...r]);
  const list = [];
  rows.forEach((row, y) => row.forEach((ch, x) => {
    if (!BIG_BUILD.has(ch)) return;
    if (row[x - 1] === ch || (rows[y - 1] || [])[x] === ch) return;   // not this building's first tile
    let w = 1, h = 1;
    while (row[x + w] === ch) w++;
    while ((rows[y + h] || [])[x] === ch) h++;
    list.push({ x, y, w, h, ch });
  }));
  BIG_BUILD_CACHE[mapKey] = { sig, list };
  return list;
};
