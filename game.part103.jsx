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
    || (typeof PROP_TILE !== "undefined" && PROP_TILE(ch, em, bg))
    || null;
  return { bg, img, em: img ? "" : em, water: ch === "W" };
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
// Water out here moves with the water on the map (part45's glints). gx/gy are
// already in this map's coordinates, so the pattern runs straight on across
// the edge.
const SurroundCell = ({ gx, gy, cell, mapKey }) => {
  const glint = cell.water && cell.img && typeof waterGlint === "function";
  return (
  <div aria-hidden="true" className={glint ? "wl-water" : undefined} style={{
    position: "absolute", left: `calc(var(--tile) * ${gx})`, top: `calc(var(--tile) * ${gy})`,
    width: "calc(var(--tile) + 1px)", height: "calc(var(--tile) + 1px)", backgroundColor: cell.bg,
    ...(glint ? {
      "--wx": gx, "--wy": gy,
      backgroundImage: `${waterGlint(cell.bg).join(", ")}, ${cell.img}`,
      backgroundSize: `${WATER_GLINT_SIZE}, 100% 100%`, backgroundRepeat: "repeat, repeat, no-repeat",
      backgroundPosition: `${WATER_GLINT_POS}, 0 0`, animationDelay: waterDelay(mapKey),
    } : { backgroundImage: cell.img || undefined, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }),
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: "calc(var(--tile) * .62)", lineHeight: 1,
  }}>{cell.em}</div>
  );
};

const MapSurround = React.memo(function MapSurround({ mapKey }) {
  const m = MAPS[mapKey];
  if (!m || !MAP_LINKS[mapKey]) return null;       // not rebuilt: leave the black
  const W = m.rows[0].length, H = m.rows.length;
  const RX = SURROUND_RX, RY = SURROUND_RY;
  const cells = [];
  const landmarks = [];     // drawn after every tile, so no tile covers one
  const taken = new Set();

  // Neighbouring maps first, so where one exists it wins over the forest.
  Object.entries(MAP_LINKS[mapKey]).forEach(([dir, link]) => {
    const n = MAPS[link.map];
    if (!n) return;
    const npal = PALS[n.zone] || PALS.savanna;
    const nW = n.rows[0].length, nH = n.rows.length, off = link.off || 0;
    for (let ny = 0; ny < nH; ny++) {
      for (let nx = 0; nx < nW; nx++) {
        // this neighbour tile, in THIS map's coordinates
        let gx, gy;
        if (dir === "n") { gx = nx + off; gy = ny - nH; }
        else if (dir === "s") { gx = nx + off; gy = H + ny; }
        else if (dir === "w") { gx = nx - nW; gy = ny + off; }
        else { gx = W + nx; gy = ny + off; }
        if (gx < -RX || gx >= W + RX || gy < -RY || gy >= H + RY) continue;
        const k = gx + "," + gy;
        if (taken.has(k)) continue;
        taken.add(k);
        cells.push(<SurroundCell key={"n" + k} mapKey={mapKey} gx={gx} gy={gy} cell={surroundTile(n, link.map, nx, ny, npal)} />);
        // ...and a landmark on the next map is drawn at the size it will be
        // when you get there, not shrunk to a tile until you cross.
        const lm = LANDMARK_AT[link.map + ":" + nx + "," + ny];
        const img = lm && landmarkImg(lm.kind);
        const [sw, shh] = lm ? markScale(lm.kind) : [1, 1];
        if (img) landmarks.push(
          <div key={"lm" + k} style={{
            position: "absolute", left: `calc(var(--tile) * ${gx + 0.5 - sw / 2})`,
            top: `calc(var(--tile) * ${gy + 1 - shh})`,
            width: `calc(var(--tile) * ${sw})`, height: `calc(var(--tile) * ${shh})`,
            backgroundImage: img, backgroundSize: "100% 100%", backgroundRepeat: "no-repeat",
          }} />);
      }
    }
  });

  // Then the wild country, everywhere else within reach of the camera.
  //
  // It was one unbroken wall of trees, every tile the same kind, and Ayr
  // called it out by name: "The large walls of trees is awkward." Real bush
  // is not a hedge. So roughly one tile in eight is a rock outcrop instead,
  // chosen by position so it never shimmers between redraws, and it all
  // stands in the same ground the map itself is mostly made of - grass for a
  // grassland map - rather than bare earth that stops at the map's edge.
  const pal = PALS[m.zone] || PALS.savanna;
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
    for (let s = 1; s <= Math.max(RX, RY); s++) {
      const gx = ex + out[0] * s, gy = ey + out[1] * s, k = gx + "," + gy;
      if (taken.has(k)) break;
      taken.add(k);
      cells.push(<SurroundCell key={"p" + k} mapKey={mapKey} gx={gx} gy={gy} cell={{ bg: pal.ground, img: null, em: "" }} />);
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
      const c = bcell(gx, gy);
      if (!c.img) c.em = pal.tree && pal.tree.em;
      cells.push(<SurroundCell key={"b" + k} mapKey={mapKey} gx={gx} gy={gy} cell={c} />);
    }
  }
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, width: 0, height: 0, zIndex: -1 }}>
      {cells}
      {landmarks}
    </div>
  );
});
