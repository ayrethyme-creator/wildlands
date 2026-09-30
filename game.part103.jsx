// ---------- Part 103: THE CONTINUOUS WORLD ----------
// Ayr, 2026-09-23, choosing how the rebuilt maps join: "Continuous map".
//
// Until now every map was a room. You left one by stepping onto a door tile on
// its edge and arrived somewhere else, with nothing between. Fire Red is not
// built like that: Route 1 simply carries on into Viridian City, and walking up
// to the top of one map shows you the bottom of the next one before you get
// there. That is what this file adds, for maps that have been rebuilt at the
// new size (part104 onward); every map not yet rebuilt keeps its doors.
//
// THREE THINGS HAVE TO BE TRUE FOR THE WORLD TO FEEL CONTINUOUS, and each one
// is a different mechanism:
//
//   1. You can walk off an edge.       MAP_LINKS + crossEdge, used by part4
//   2. You can SEE across the edge.    <MapSurround>, drawn by part5
//   3. Nobody forgets who they are.    MAP_ALIAS + mapAlias, see below
//
// The third is the one that is not obvious. The game names every person by the
// tile they stood on when they were written - TRAINERS["route1:4,4"] is Scout
// Jabu, and so are the arc tables, the solved-text, the rematch record, and
// the beaten-flag in every save anyone has ever made. A rebuilt map puts Jabu
// somewhere else. If his name followed him he would lose every one of those,
// and every existing save would un-beat him. So his NAME stays "route1:4,4"
// and the tile he now stands on is translated back to it - exactly the rule
// part80 already uses for townsfolk who wander: the position moves, the key
// does not. It is why rebuilding a region needs no save migration beyond
// moving the player's own feet.
//
// This file only DEFINES. part104 onward supply regions, and part105 checks
// them against the live game and applies them - so nothing here changes the
// world on its own.

// Each rebuilt region pushes itself here: { name, maps, inbound }.
const REBUILT_REGIONS = [];

// "map:x,y" of a tile a person stands on -> the identity key they have always had.
const MAP_ALIAS = {};
// map -> { n|s|e|w: { map, off } }. off is where the neighbour's column 0 (for
// n/s) or row 0 (for e/w) sits in THIS map's coordinates.
const MAP_LINKS = {};
// map -> [x, y]: where a new game, a blackout, a Soar, or an old save wakes up.
const MAP_LAND = {};
// map -> the rebuild generation it was last rebuilt in. A save made before that
// generation, standing on that map, is standing on coordinates that no longer
// mean what they meant, and is moved to MAP_LAND on load.
const MAP_GEN = {};

const mapAlias = (map, x, y) => MAP_ALIAS[map + ":" + x + "," + y] || null;

/* The one resolution every lookup needs: who is standing on this tile? A
   wanderer out of their home square first (part80), then a person on a rebuilt
   map (above), then the plain coordinate as it has always been. part4, part5
   and part80 all ask this; asking it three different ways is how the Beeloud
   payoff ended up keyed to empty ground. */
const idAt = (map, x, y) =>
  (typeof wanderKey === "function" && wanderKey(map, x, y))
  || mapAlias(map, x, y)
  || map + ":" + x + "," + y;

// [7, 8] is where every town put you before any map was rebuilt, and is still
// right for the ones that have not been.
const landOf = (map) => MAP_LAND[map] || [7, 8];

/* Walking off the edge of `map` at (x, y) - a coordinate one step outside it.
   Returns where that puts you, or null if nothing is there. */
const crossEdge = (map, x, y) => {
  const m = MAPS[map], L = MAP_LINKS[map];
  if (!m || !L) return null;
  const H = m.rows.length, W = m.rows[0].length;
  const dir = y < 0 ? "n" : y >= H ? "s" : x < 0 ? "w" : x >= W ? "e" : null;
  const link = dir && L[dir];
  if (!link || !MAPS[link.map]) return null;
  const n = MAPS[link.map], nH = n.rows.length, nW = n.rows[0].length;
  const off = link.off || 0;
  let tx, ty;
  if (dir === "n") { tx = x - off; ty = nH - 1; }
  else if (dir === "s") { tx = x - off; ty = 0; }
  else if (dir === "w") { tx = nW - 1; ty = y - off; }
  else { tx = 0; ty = y - off; }
  if (ty < 0 || ty >= nH || tx < 0 || tx >= nW) return null;
  return { map: link.map, x: tx, y: ty };
};

/* What a seam may be crossed onto. Deliberately narrow - plain ground, path,
   grass, flowers and the walk-on marks - because crossing a seam skips the
   full walk rule in part4, and it can afford to only because the maps are
   built so a seam is only ever open ground (mapforge refuses anything
   else, and part105 checks again). A tree or a person on a seam simply stops
   you, which is the right answer and never a surprise. */
const SEAM_OPEN = ".gGp*" + (typeof MAP_MARKS !== "undefined" ? MAP_MARKS : "");

/* ---------------------------------------------------------------- DRAWING ---
   THE WORLD PAST THE EDGE. The camera (part102) is a window 15 tiles across
   that follows the ranger even to the very edge of a map, so up to seven tiles
   of whatever lies beyond are on screen. On a room that is black, as it is in
   Fire Red. On a rebuilt outdoor map it is one of two things:

     - the next map, if one joins on that side - drawn tile for tile, so the
       road you are about to walk onto is already there;
     - otherwise the forest the map is set in, running on past its border, so
       the world does not end in a painted edge.

   Drawn as its own memoised component because none of it changes when you take
   a step - only when you change map. part5's own tiles re-render every step;
   these do not, which is what keeps a map this size cheap on a phone.

   It paints BEHIND the map (z-index -1). The map's tiles are opaque and cover
   their own area exactly, so this only ever shows where the map is not. */
const SURROUND_RX = (typeof CAM_CX === "number" ? CAM_CX : 7) + 1;
const SURROUND_RY = (typeof CAM_CY === "number" ? CAM_CY : 6) + 1;

// One static tile, the way part5 would draw it minus the motion. Motion is
// left out on purpose: grass swaying over the border of a map you are not on
// would draw the eye to the one place nothing can happen.
const surroundTile = (mm, mapKey, x, y, pal) => {
  const ch = mm.rows[y][x];
  const t = TILE_STYLE(ch, pal);
  let em = t.em;
  // Same two rules part5 draws the map itself by (see part106): a thing
  // stands in the ground around it, and a landmark is drawn as itself.
  const eff = (c, cx, cy, b) => (b === pal.ground && c !== "." && c !== "p") ? groundUnder(mm.rows, cx, cy, pal) : b;
  const bg = eff(ch, x, y, t.bg);
  // A landmark's tile is ground; MapSurround draws the landmark itself, large.
  const lm = LANDMARK_AT[mapKey + ":" + x + "," + y];
  if (lm) em = "";
  if (ch === "R" || ch === "V") {
    const tr = TRAINERS[idAt(mapKey, x, y)];
    if (tr && tr.em) em = tr.em;
  }
  if (ch === "¡") em = "🪵";
  if (ch === "¦") em = "🔦";
  const edges = (ch === "G" || ch === "g" || ch === "W") ? (() => {
    const out = {};
    [["n", x, y - 1], ["s", x, y + 1], ["w", x - 1, y], ["e", x + 1, y]].forEach(([side, nx, ny]) => {
      const r = mm.rows[ny];
      if (!r || nx < 0 || nx >= r.length) return;
      const nb = TILE_STYLE(r[nx], pal);
      if (!nb) return;
      const nbg = eff(r[nx], nx, ny, nb.bg);
      if (nbg === bg) return;
      if (ch !== "W" && r[nx] === "W") return;
      out[side] = nbg;
    });
    return Object.keys(out).length ? out : null;
  })() : null;
  const img = (typeof GRASS_TILE !== "undefined" && GRASS_TILE(ch, x, y, bg, edges))
    || (ch === "W" && typeof WATER_TILE !== "undefined" && WATER_TILE(ch, x, y, bg, edges))
    || (!lm && typeof TILE_ART !== "undefined" && TILE_ART(ch, x, y, pal, bg))
    || (typeof PERSON_TILE !== "undefined" && PERSON_TILE(em, bg))
    || (typeof PROP_TILE !== "undefined" && !(typeof BIG_BUILD !== "undefined" && BIG_BUILD.has(ch)) && PROP_TILE(ch, em, bg))
    || null;
  // A building is drawn large by MapSurround, as it is on the map itself.
  if (typeof BIG_BUILD !== "undefined" && BIG_BUILD.has(ch)) em = "";
  // The same ground underneath as on the map itself (part142), or the
  // texture would stop dead at every seam.
  const isSurface = ch === "G" || ch === "g" || ch === "W";
  const under = (!isSurface && typeof TERRAIN_UNDER === "function") ? TERRAIN_UNDER(ch, x, y, bg, pal, mm.rows) : null;
  const top = under && img ? unfloor(img) : img;
  const sh2 = (u) => (typeof shortUrl === "function" ? shortUrl(u) : u);
  const all = [sh2(top), sh2(under)].filter(Boolean).join(", ") || null;
  return { bg, img: all, em: img ? "" : em, water: ch === "W" };
};

/* Each cell is drawn one pixel wider and taller than a tile, overlapping its
   neighbours to the right and below. On a phone whose pixel ratio is not a
   whole number (2.625 is common) a whole-pixel tile still lands on fractions
   of a device pixel, and between two absolutely placed squares that leaves a
   hairline of whatever is behind them - here, the dark of the viewport. The
   map itself hides the same hairlines with a ground-coloured backing (part5);
   out here the ground changes from map to map, so the cells cover the gaps
   themselves. Found 2026-09-25 as a grid across the next map's ground - the
   same grid Ayr caught on the roads. */
const SurroundCell = React.memo(({ gx, gy, cell }) => (
  <div aria-hidden="true" style={{
    position: "absolute", left: `calc(var(--tile) * ${gx})`, top: `calc(var(--tile) * ${gy})`,
    width: "calc(var(--tile) + 1px)", height: "calc(var(--tile) + 1px)", backgroundColor: cell.bg,
    backgroundImage: (cell.img && typeof shortUrl === "function" ? shortUrl(cell.img) : cell.img) || undefined,
    backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "calc(var(--tile) * .62)", lineHeight: 1,
  }}>{cell.em}</div>
));

/* WHAT LIES PAST THE EDGE, WORKED OUT ONCE AND BUILT ONLY NEAR THE CAMERA.
   Ayr, 2026-09-29: crossing onto the next map "still jumps/stalls". Measured:
   an ordinary step is 4-5ms of work, the step that crosses a seam 30-43ms -
   every time, not only the first - because crossing rebuilt everything past
   all four edges from scratch: a thousand cells, most of them nowhere near
   the ranger. On a phone that is a visible stall.

   So the strip is now two halves. surroundData() works out every cell and
   big picture past the edges ONCE per map and keeps it; MapSurround draws only
   the ones within reach of the camera, re-cut as the ranger moves in blocks
   of four tiles. And prewarmSurround() works out the NEXT maps' data in the
   browser's idle time while you walk, so a crossing has nothing to compute. */
const SURROUND_DATA = {};
// A cell whose picture is worked out on first use and then kept: building a
// whole map's worth at once took ~80ms on a desktop, far worse on a phone.
const lazyCell = (k, gx, gy, make) => {
  let got = null;
  return { k, gx, gy, get cell() { return got || (got = make()); }, get ready() { return !!got; } };
};
const surroundData = (mapKey) => {
  if (SURROUND_DATA[mapKey]) return SURROUND_DATA[mapKey];
  const m = MAPS[mapKey];
  if (!m || !MAP_LINKS[mapKey] || m.dark) return (SURROUND_DATA[mapKey] = { cells: [], pics: [] });
  const W = m.rows[0].length, H = m.rows.length;
  const RX = SURROUND_RX, RY = SURROUND_RY;
  const cells = [];         // {k, gx, gy, cell}
  const pics = [];          // {k, x0, y0, x1, y1, style} - landmarks and buildings, drawn large
  const taken = new Set();
  const big = (k, left, top, w, h, img) => pics.push({ k, x0: left, y0: top, x1: left + w, y1: top + h, img, style: {
    position: "absolute", left: `calc(var(--tile) * ${left})`, top: `calc(var(--tile) * ${top})`,
    width: `calc(var(--tile) * ${w})`, height: `calc(var(--tile) * ${h})`,
    backgroundImage: img, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
  } });

  // Neighbouring maps first, so where one exists it wins over the forest.
  Object.entries(MAP_LINKS[mapKey]).forEach(([dir, link]) => {
    const n = MAPS[link.map];
    if (!n) return;
    const npal = palOf(n);
    const nW = n.rows[0].length, nH = n.rows.length, off = link.off || 0;
    const place = (nx, ny) => dir === "n" ? [nx + off, ny - nH] : dir === "s" ? [nx + off, H + ny]
      : dir === "w" ? [nx - nW, ny + off] : [W + nx, ny + off];
    for (let ny = 0; ny < nH; ny++) {
      for (let nx = 0; nx < nW; nx++) {
        const [gx, gy] = place(nx, ny);
        if (gx < -RX || gx >= W + RX || gy < -RY || gy >= H + RY) continue;
        const k = gx + "," + gy;
        if (taken.has(k)) continue;
        taken.add(k);
        // Worked out the first time it is needed, not now (see lazyCell).
        cells.push(lazyCell("n" + k, gx, gy, () => surroundTile(n, link.map, nx, ny, npal)));
        // ...and a landmark on the next map is drawn at the size it will be
        // when you get there, not shrunk to a tile until you cross.
        const lm = LANDMARK_AT[link.map + ":" + nx + "," + ny];
        const img = lm && landmarkImg(lm.kind);
        if (img) {
          const [sw, shh] = markScale(lm.kind);
          big("lm" + k, gx + 0.5 - sw / 2, gy + 1 - shh, sw, shh, img);
        }
      }
    }
    // The next map's buildings, at building size (part142) - drawn small out
    // here they would grow the moment you crossed, which is a jump.
    if (typeof bigBuildingsOf === "function") bigBuildingsOf(link.map).forEach((b) => {
      const [gx, gy] = place(b.x, b.y);
      if (gx < -RX - 2 || gx >= W + RX + 2 || gy < -RY - 2 || gy >= H + RY + 2) return;
      const img = typeof PROP_TILE !== "undefined" ? unfloor(PROP_TILE(b.ch, TILE_STYLE(b.ch, npal).em, npal.ground)) : null;
      if (!img) return;
      const sw = b.w + 0.8, shh = b.h + 0.8;
      big("bld" + gx + "," + gy, gx + b.w / 2 - sw / 2, gy + b.h - shh, sw, shh, img);
    });
  });

  // Then the wild country, everywhere else within reach of the camera.
  //
  // It was one unbroken wall of trees, every tile the same kind, and Ayr
  // called it out by name: "The large walls of trees is awkward." Real bush
  // is not a hedge. So roughly one tile in eight is a rock outcrop instead,
  // chosen by position so it never shimmers between redraws, and it all
  // stands in the same ground the map itself is mostly made of - grass for a
  // grassland map - rather than bare earth that stops at the map's edge.
  const pal = palOf(m);
  const border = m.border || "T";
  const flat = m.rows.join("");
  const grassy = (flat.split("g").length - 1) + (flat.split("G").length - 1) > flat.length / 4;
  const floor = grassy ? pal.grass2 : pal.ground;
  // What lies past a CLOSED edge can be something other than forest - the
  // river south of Baobab Base, say - set per side by the region (m.beyond).
  // Only open country gets it; the corners past a side edge stay forest.
  const beyond = m.beyond || {};
  const sideOf = (gx, gy) => gy < 0 ? "n" : gy >= H ? "s" : gx < 0 ? "w" : "e";
  // THE ROAD GOES ON PAST A DOORWAY. Ayr: the shrine entrances were "not
  // obvious enough that it's a path way" - the road ran to the map's edge and
  // this drew forest straight across the end of it, so a doorway read as a dead
  // end. Now a trail runs on out through the trees from every door on an edge,
  // as far as the camera can see, and the forest stands either side of it.
  Object.keys(m.exits || {}).forEach((t) => {
    const [ex, ey] = t.split(",").map(Number);
    const out = ex === 0 ? [-1, 0] : ex === W - 1 ? [1, 0] : ey === 0 ? [0, -1] : ey === H - 1 ? [0, 1] : null;
    if (!out) return;
    for (let st = 1; st <= Math.max(RX, RY); st++) {
      const gx = ex + out[0] * st, gy = ey + out[1] * st, k = gx + "," + gy;
      if (taken.has(k)) break;
      taken.add(k);
      const under = typeof GROUND_TILE === "function" ? GROUND_TILE(gx, gy, pal.ground, "") : null;
      cells.push({ k: "p" + k, gx, gy, cell: { bg: pal.ground, img: under, em: "" } });
    }
  });

  const bcell = (gx, gy) => {
    const b = beyond[sideOf(gx, gy)];
    if (b === "W" && typeof WATER_TILE !== "undefined") {
      return { bg: pal.water, img: WATER_TILE("W", gx, gy, pal.water, null), em: "", water: true };
    }
    const ch = (typeof tileVariant === "function" && tileVariant(gx + 4096, gy + 4096, 8) === 0) ? "^" : border;
    return { bg: floor, img: (typeof TILE_ART !== "undefined" && TILE_ART(ch, gx, gy, pal, floor)) || null, em: "" };
  };
  for (let gy = -RY; gy < H + RY; gy++) {
    for (let gx = -RX; gx < W + RX; gx++) {
      if (gx >= 0 && gx < W && gy >= 0 && gy < H) continue;
      const k = gx + "," + gy;
      if (taken.has(k)) continue;
      cells.push(lazyCell("b" + k, gx, gy, () => {
        const c = bcell(gx, gy);
        if (!c.img) c.em = pal.tree && pal.tree.em;
        return c;
      }));
    }
  }
  return (SURROUND_DATA[mapKey] = { cells, pics });
};

// Work out the next maps' strips while the browser is idle, a few cells at a
// time and never past the idle slot's deadline, so a key pressed meanwhile is
// answered at once and crossing into any of them finds its pictures made.
const prewarmSurround = (mapKey) => {
  const next = Object.values(MAP_LINKS[mapKey] || {}).map((l) => l.map).filter(Boolean);
  const idle = (typeof requestIdleCallback === "function") ? requestIdleCallback : (f) => setTimeout(() => f({ timeRemaining: () => 8 }), 60);
  let mi = 0, ci = 0, cells = null;
  const work = (deadline) => {
    while (deadline.timeRemaining() > 3) {
      if (!cells) {
        if (mi >= next.length) return;
        try { cells = surroundData(next[mi]).cells; } catch (e) { cells = []; }
        ci = 0;
      }
      if (ci >= cells.length) { cells = null; mi++; continue; }
      const c = cells[ci++];
      if (!c.ready) { try { void c.cell; } catch (e) { /* drawn on arrival instead */ } }
    }
    idle(work);
  };
  if (next.length) idle(work);
};

// Only what the camera can reach: the ranger's position, rounded to a block of
// four so this redraws once every few steps rather than on every one, plus a
// margin wide enough that nothing is ever missing at the edge of the view.
const SURROUND_BLOCK = 4;
const MapSurround = React.memo(function MapSurround({ mapKey, bx, by }) {
  const d = surroundData(mapKey);
  React.useEffect(() => { prewarmSurround(mapKey); }, [mapKey]);
  if (!d.cells.length) return null;
  const cx = bx * SURROUND_BLOCK, cy = by * SURROUND_BLOCK;
  const rx = CAM_CX + SURROUND_BLOCK + 3, ry = CAM_CY + SURROUND_BLOCK + 3;
  const near = (x0, y0, x1, y1) => x1 >= cx - rx && x0 <= cx + rx && y1 >= cy - ry && y0 <= cy + ry;
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, width: 0, height: 0, zIndex: -1 }}>
      {d.cells.filter((c) => near(c.gx, c.gy, c.gx + 1, c.gy + 1)).map((c) =>
        <SurroundCell key={c.k} gx={c.gx} gy={c.gy} cell={c.cell} />)}
      {d.pics.filter((p) => near(p.x0, p.y0, p.x1, p.y1)).map((p) => <div key={p.k} style={p.style} />)}
    </div>
  );
});

/* ---------------------------------------------------------------- WATER ---
   MOVING WATER THAT COSTS NOTHING. Ayr, 2026-09-25: "I do want the water to
   move somehow" - and then, once it did: "now there's a lag ... The movement
   of the player is choppy."

   The first version animated each water tile's own background. A background
   is painted, not composited, so a hundred water tiles meant a hundred tiles
   repainted every frame - on top of the camera sliding with every step. That
   is the lag.

   So the glints are now ONE layer over the whole map, shaped to the water by a
   mask, and it is moved with a transform, which the phone's graphics chip does
   on its own without repainting anything. Two sheets of glints (part45's
   waterGlint), each drifting its own way on the same clock, laid out in world
   coordinates so the pattern runs straight on past the map's edge and across a
   seam. The water tiles themselves are still again - drawn once, never
   repainted. */
const waterCellsOf = (mapKey) => {
  const m = MAPS[mapKey];
  const out = [];
  if (!m) return out;
  const W = m.rows[0].length, H = m.rows.length;
  m.rows.forEach((r, y) => [...r].forEach((c, x) => { if (c === "W") out.push([x, y]); }));
  if (!MAP_LINKS[mapKey]) return out;
  // The same precedence MapSurround draws by: next map, then road past a
  // doorway, then whatever lies beyond a closed edge.
  const RX = SURROUND_RX, RY = SURROUND_RY, taken = new Set();
  Object.entries(MAP_LINKS[mapKey]).forEach(([dir, link]) => {
    const n = MAPS[link.map];
    if (!n) return;
    const nW = n.rows[0].length, nH = n.rows.length, off = link.off || 0;
    for (let ny = 0; ny < nH; ny++) for (let nx = 0; nx < nW; nx++) {
      let gx, gy;
      if (dir === "n") { gx = nx + off; gy = ny - nH; }
      else if (dir === "s") { gx = nx + off; gy = H + ny; }
      else if (dir === "w") { gx = nx - nW; gy = ny + off; }
      else { gx = W + nx; gy = ny + off; }
      if (gx < -RX || gx >= W + RX || gy < -RY || gy >= H + RY) continue;
      const k = gx + "," + gy;
      if (taken.has(k)) continue;
      taken.add(k);
      if ([...n.rows[ny]][nx] === "W") out.push([gx, gy]);
    }
  });
  Object.keys(m.exits || {}).forEach((t) => {
    const [ex, ey] = t.split(",").map(Number);
    const o = ex === 0 ? [-1, 0] : ex === W - 1 ? [1, 0] : ey === 0 ? [0, -1] : ey === H - 1 ? [0, 1] : null;
    if (o) for (let s = 1; s <= Math.max(RX, RY); s++) taken.add((ex + o[0] * s) + "," + (ey + o[1] * s));
  });
  const beyond = m.beyond || {};
  if (Object.values(beyond).includes("W")) {
    for (let gy = -RY; gy < H + RY; gy++) for (let gx = -RX; gx < W + RX; gx++) {
      if ((gx >= 0 && gx < W && gy >= 0 && gy < H) || taken.has(gx + "," + gy)) continue;
      const side = gy < 0 ? "n" : gy >= H ? "s" : gx < 0 ? "w" : "e";
      if (beyond[side] === "W") out.push([gx, gy]);
    }
  }
  return out;
};

const WaterGlint = React.memo(function WaterGlint({ mapKey, tile }) {
  const m = MAPS[mapKey];
  const refA = React.useRef(null), refB = React.useRef(null);
  const cells = React.useMemo(() => (m && !m.dark && typeof waterGlint === "function") ? waterCellsOf(mapKey) : [], [mapKey]);
  React.useEffect(() => {
    if (!cells.length || !tile) return undefined;
    if (typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const ms = WATER_GLINT_S * 1000;
    const phase = (typeof performance !== "undefined" ? performance.now() : 0) % ms;
    const anims = [[refA, 5, 3], [refB, -7, 4]].map(([r, dx, dy]) => {
      if (!r.current || !r.current.animate) return null;
      const a = r.current.animate(
        [{ transform: "translate3d(0,0,0)" }, { transform: `translate3d(${dx * tile}px, ${dy * tile}px, 0)` }],
        { duration: ms, iterations: Infinity });
      // One clock for every map, so a seam never jumps the pattern.
      a.currentTime = phase;
      return a;
    });
    return () => anims.forEach((a) => a && a.cancel());
  }, [mapKey, tile, cells.length]);
  if (!cells.length) return null;

  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  cells.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); });
  const w = x1 - x0 + 1, h = y1 - y0 + 1;
  // The mask: the water tiles, as runs along each row.
  const rows = {};
  cells.forEach(([x, y]) => { (rows[y] = rows[y] || []).push(x); });
  let rects = "";
  Object.entries(rows).forEach(([y, xs]) => {
    xs.sort((a, b) => a - b);
    let s = xs[0], p = xs[0];
    xs.slice(1).concat([Infinity]).forEach((x) => {
      if (x === p + 1) { p = x; return; }
      rects += `<rect x="${s}" y="${y}" width="${p - s + 1}" height="1"/>`;
      s = p = x;
    });
  });
  const mask = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x0} ${y0} ${w} ${h}" preserveAspectRatio="none">` +
    `<g fill="#fff" shape-rendering="crispEdges">${rects}</g></svg>`)}")`;
  const pal = palOf(m);
  const [ga, gb] = waterGlint(pal.water);
  const T = (n) => `calc(var(--tile) * ${n})`;
  const sheet = (ref, img, bw, bh, left, top, extraW, extraH) => (
    <div ref={ref} style={{
      position: "absolute", left: T(left), top: T(top),
      width: `calc(100% + var(--tile) * ${extraW})`, height: `calc(100% + var(--tile) * ${extraH})`,
      backgroundImage: img, backgroundSize: `${T(bw)} ${T(bh)}`, backgroundRepeat: "repeat",
      // anchored to the world's origin, not the sheet's, so every map lines up
      backgroundPosition: `${T(-(x0 + left))} ${T(-(y0 + top))}`,
      willChange: "transform",
    }} />
  );
  return (
    <div aria-hidden="true" style={{
      position: "absolute", left: T(x0), top: T(y0), width: T(w), height: T(h),
      overflow: "hidden", pointerEvents: "none", zIndex: 1,
      maskImage: mask, WebkitMaskImage: mask, maskSize: "100% 100%", WebkitMaskSize: "100% 100%",
      maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat",
    }}>
      {sheet(refA, ga, 5, 3, -5, -3, 5, 3)}
      {sheet(refB, gb, 7, 4, 0, -4, 7, 4)}
    </div>
  );
});
