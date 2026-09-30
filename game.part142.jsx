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
// One map's patches, as gradients placed at (ox, oy) tiles from the layer's
// corner.
const shadeLayersOf = (mapKey, ox, oy) => {
  const m = MAPS[mapKey];
  if (!m || m.dark || !m.rows || !m.rows.length) return [];
  const H = m.rows.length, W = [...m.rows[0]].length;
  if (W < 10 || H < 10) return [];
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
      layers.push(`radial-gradient(circle calc(var(--tile) * ${rad.toFixed(2)}) at calc(var(--tile) * ${(cx + ox).toFixed(2)}) calc(var(--tile) * ${(cy + oy).toFixed(2)}), ` +
        `rgba(${col},${a.toFixed(3)}), rgba(${col},0))`);
    }
  }
  return layers;
};

/* THE NEXT MAPS ARE LIT TOO. Ayr, 2026-09-28, once the black flash had gone:
   "Now there's a little screen jump instead of a flash." The light covered
   only the map you were on, so the moment you crossed a seam the map behind
   you lost its patches and the one ahead gained them - the lighting of half
   the screen changed in one frame. Now the layer reaches past every edge as
   far as the next map is drawn (MapSurround, part103), and lights each
   neighbour with that neighbour's own patches, placed where it lies. After a
   crossing the same patches are in the same places on screen. */
//
// ONE PIECE PER MAP, KEPT ACROSS A SEAM (2026-09-29, the crossing stall). It
// was one big layer holding this map's patches and its neighbours', so every
// crossing made a new picture of the whole thing and the phone repainted it.
// Now each map's light is its own piece, keyed by the map, placed by
// transform: crossing a seam keeps both pieces and only moves them, which the
// graphics chip does without painting anything.
const SHADE_IMG = {};
const shadeImgOf = (mapKey) => (mapKey in SHADE_IMG) ? SHADE_IMG[mapKey]
  : (SHADE_IMG[mapKey] = shadeLayersOf(mapKey, 0, 0).join(", ") || null);
const TerrainShade = React.memo(function TerrainShade({ mapKey, ox = 0, oy = 0 }) {
  const m = MAPS[mapKey];
  if (!m || m.dark || !m.rows || !m.rows.length) return null;
  const H = m.rows.length, W = [...m.rows[0]].length;
  const pieces = [[mapKey, ox, oy, W, H]];
  Object.entries(MAP_LINKS[mapKey] || {}).forEach(([dir, link]) => {
    const n = MAPS[link.map];
    if (!n || !n.rows) return;
    const nW = [...n.rows[0]].length, nH = n.rows.length, off = link.off || 0;
    let gx, gy;
    if (dir === "n") { gx = off; gy = -nH; }
    else if (dir === "s") { gx = off; gy = H; }
    else if (dir === "w") { gx = -nW; gy = off; }
    else { gx = W; gy = off; }
    pieces.push([link.map, gx + ox, gy + oy, nW, nH]);
  });
  return (
    <React.Fragment>
      {pieces.map(([k, gx, gy, w, h]) => {
        const img = shadeImgOf(k);
        if (!img) return null;
        return (
          <div key={"shade:" + k} aria-hidden="true" style={{
            position: "absolute", left: 0, top: 0,
            width: `calc(var(--tile) * ${w})`, height: `calc(var(--tile) * ${h})`,
            transform: `translate3d(calc(var(--tile) * ${gx}), calc(var(--tile) * ${gy}), 0)`,
            pointerEvents: "none", zIndex: 3, backgroundImage: img,
            // Its own compositor layer, painted once. Without this every tile
            // that changed under it - a step, a rustle - repainted a dozen soft
            // gradients over that tile too (2026-09-28: walking had gone choppy).
            willChange: "transform",
          }} />
        );
      })}
    </React.Fragment>
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


// ---- short links for the pictures ----
// Every tile's pictures were written into its style as the whole SVG, 1-3KB
// each and two or three to a tile, so each map change handed the browser most
// of a megabyte of style text to read before it could draw (2026-09-29: the
// stall on crossing a seam). Each distinct picture is now registered once as a
// blob and the style names it by a short link. Same picture, same link, so
// the browser's own image cache works across maps.
const SHORT_URL = new Map();
const DATA_HEAD = 'url("data:image/svg+xml,';
const shortUrl = (u) => {
  if (!u || u.indexOf(DATA_HEAD) !== 0 || typeof URL === "undefined" || typeof Blob === "undefined") return u;
  let s2 = SHORT_URL.get(u);
  if (!s2) {
    try {
      const svg = decodeURIComponent(u.slice(DATA_HEAD.length, -2));
      s2 = 'url("' + URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" })) + '")';
    } catch (e) { s2 = u; }
    SHORT_URL.set(u, s2);
  }
  return s2;
};


/* ---- ONE GROUND FOR THE WHOLE ROAD ----
   Ayr, 2026-09-29: crossing onto the next map "still jumps/stalls". Eric, the
   day before: render it beyond where the player can see.

   Each map was drawn in its own coordinates, so the same patch of ground had
   a different name on each side of a seam: crossing one renamed - and so
   remade - every tile on screen, and the next map's strip past the edge was
   a different kind of thing again. However cheap each piece was made, the
   step that crossed did all of it at once.

   So every map joined by seams now has a place on one plane (mapOrigin), and
   the ground is drawn and named on that plane: the tiles of the map you are
   on, the next map's tiles near the edge, and the country past a closed
   edge, all one list, each tile named by where it is on the plane. Walking
   across a seam is now, to the ground, one more step: the same tiles, the
   same names, the same place. Only what belongs to one map alone - the
   ranger, animals, landmarks, prints - is still remade when the map
   changes. */
const MAP_ORIGIN = {};
const mapOrigin = (key) => {
  if (MAP_ORIGIN[key]) return MAP_ORIGIN[key];
  MAP_ORIGIN[key] = [0, 0];
  const q = [key];
  while (q.length) {
    const a = q.shift();
    const A = MAPS[a];
    if (!A || !A.rows) continue;
    const [ax, ay] = MAP_ORIGIN[a];
    const W = [...A.rows[0]].length, H = A.rows.length;
    Object.entries(MAP_LINKS[a] || {}).forEach(([dir, l]) => {
      const b = l.map, B = MAPS[b];
      if (!B || !B.rows || MAP_ORIGIN[b]) return;
      const nW = [...B.rows[0]].length, nH = B.rows.length, off = l.off || 0;
      MAP_ORIGIN[b] = dir === "n" ? [ax + off, ay - nH] : dir === "s" ? [ax + off, ay + H]
        : dir === "w" ? [ax - nW, ay + off] : [ax + W, ay + off];
      q.push(b);
    });
  }
  return MAP_ORIGIN[key];
};

// The ground past this map's edges within reach of the camera - the next
// maps' tiles and the wild country - as tiles on the plane, named "t:x,y"
// exactly as the map's own tiles are, so a tile keeps its element when the
// map it belongs to becomes the one you are on.
const PREWARMED = {};
const beyondGround = (mapKey, ox, oy, px, py) => {
  if (typeof surroundData !== "function") return [];
  // Start working out the next maps' ground in idle moments, once per map
  // (part103, prewarmSurround), so crossing into one finds it ready.
  if (!PREWARMED[mapKey] && typeof prewarmSurround === "function") { PREWARMED[mapKey] = 1; prewarmSurround(mapKey); }
  const d = surroundData(mapKey);
  if (!d.cells.length) return [];
  const rx = CAM_CX + 3, ry = CAM_CY + 3;
  const out = [];
  d.cells.forEach((c) => {
    if (Math.abs(c.gx - px) > rx || Math.abs(c.gy - py) > ry) return;
    const cell = c.cell;
    const gx = c.gx + ox, gy = c.gy + oy;
    out.push(
      <div key={"t:" + gx + "," + gy} aria-hidden="true" style={{
        backgroundColor: cell.bg,
        backgroundImage: (cell.img && typeof shortUrl === "function" ? shortUrl(cell.img) : cell.img) || undefined,
        backgroundSize: cell.img ? "100% 100%" : undefined, backgroundRepeat: cell.img ? "no-repeat" : undefined,
        aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "calc(var(--tile) * .62)", lineHeight: 1,
        position: "absolute", left: `calc(var(--tile) * ${gx})`, top: `calc(var(--tile) * ${gy})`,
        // A hair over a tile, as the old strip was: on a phone whose pixel
        // ratio is not whole, two squares side by side can leave a hairline.
        width: "calc(var(--tile) + 1px)", height: "calc(var(--tile) + 1px)",
      }}>{cell.em || ""}</div>);
  });
  return out;
};

// The next maps' landmarks and buildings, drawn large, on the plane.
const beyondPics = (mapKey, ox, oy, px, py) => {
  if (typeof surroundData !== "function") return [];
  const d = surroundData(mapKey);
  const rx = CAM_CX + 5, ry = CAM_CY + 5;
  return d.pics.filter((p) => p.x1 >= px - rx && p.x0 <= px + rx && p.y1 >= py - ry && p.y0 <= py + ry)
    .map((p) => (
      <div key={"pic:" + (p.x0 + ox) + "," + (p.y0 + oy) + ":" + p.k} aria-hidden="true" style={{
        position: "absolute", pointerEvents: "none", zIndex: 2,
        left: `calc(var(--tile) * ${p.x0 + ox})`, top: `calc(var(--tile) * ${p.y0 + oy})`,
        width: `calc(var(--tile) * ${p.x1 - p.x0})`, height: `calc(var(--tile) * ${p.y1 - p.y0})`,
        backgroundImage: p.img && typeof shortUrl === "function" ? shortUrl(p.img) : p.img,
        backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
      }} />));
};
