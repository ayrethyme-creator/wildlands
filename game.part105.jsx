// ---------- Part 105: CHECK THE REBUILT REGIONS, THEN APPLY THEM ----------
// part103 is the engine and part104 onward are the regions, as data. This is
// the only place any of it touches the world, and it will not touch it until
// the region has been checked against the game as it actually is.
//
// WHY A SECOND CHECK, WHEN mapforge ALREADY CHECKED. mapforge sees geometry and
// nothing else. It cannot see TRAINERS, SIGNS or RIVAL_TILES, so it cannot know
// whether "route1:4,4" is anybody, whether a sign it placed has any words, or
// whether the rebuilt route1 has quietly lost someone the old one had. Those
// are the failures that would matter most and show least - a trainer who is
// simply never there again - so they are checked here, where the answer is.
//
// A REGION THAT FAILS IS NOT APPLIED AT ALL. The old maps stay, whole, and the
// console says why. Half-applying a region is how you get a door into a map
// that has not been rebuilt yet, landing someone in a tree; falling back to the
// old world entire is always playable.
{
  const WALKABLE = ".gGp*" + (typeof MAP_MARKS !== "undefined" ? MAP_MARKS : "");
  const DOORS = "nsec";
  const standable = (ch) => ch !== undefined && (WALKABLE.indexOf(ch) >= 0 || DOORS.indexOf(ch) >= 0);
  const report = { applied: [], refused: [], problems: [], signsRestored: 0, solvedRekeyed: 0, landmarks: 0, finds: 0 };
  const findIds = new Set();

  REBUILT_REGIONS.forEach((region) => {
    const P = [];
    const keys = Object.keys(region.maps);
    const inRegion = new Set(keys);

    // Everyone placed, and nobody twice.
    const placed = new Set();
    keys.forEach((k) => Object.values(region.maps[k].cast).forEach((id) => {
      if (placed.has(id)) P.push(`${id} is placed twice`);
      placed.add(id);
    }));

    keys.forEach((k) => {
      const d = region.maps[k], old = MAPS[k];
      if (!old) { P.push(`${k}: there is no such map`); return; }
      const H = d.rows.length, W = d.rows[0].length;
      d.rows.forEach((r, y) => { if ([...r].length !== W) P.push(`${k}: row ${y} is ${[...r].length} wide, not ${W}`); });

      // NOBODY VANISHES. Everyone standing on the old map must stand somewhere
      // in the new region. This is the check that would have caught the
      // Beeloud findings being left behind, had it existed then.
      old.rows.forEach((row, y) => {
        [...row].forEach((ch, x) => {
          if (ch !== "R" && ch !== "V" && ch !== "!") return;
          const id = k + ":" + x + "," + y;
          if (!placed.has(id)) P.push(`${id} (${ch}) stands on the old ${k} and nowhere in the new one`);
        });
      });

      // Everyone placed is somebody, and stands on the glyph they need.
      // A sign may be wordless only if it was wordless before - Marula Town has
      // one worn past reading, and has always had it. What must not happen is
      // a sign that HAD words arriving without them.
      const oldSigns = new Set();
      old.rows.forEach((row, y) => [...row].forEach((ch, x) => { if (ch === "!") oldSigns.add(k + ":" + x + "," + y); }));
      Object.entries(d.cast).forEach(([xy, id]) => {
        const [x, y] = xy.split(",").map(Number);
        const ch = [...d.rows[y]][x];
        if (ch === "!") {
          if (SIGNS[id] === undefined && !oldSigns.has(id)) P.push(`${k} ${xy}: the sign ${id} has no words`);
        } else if (ch === "R" || ch === "V") {
          if (!TRAINERS[id] && !(typeof RIVAL_TILES !== "undefined" && RIVAL_TILES[id])) P.push(`${k} ${xy}: ${id} is nobody`);
        } else P.push(`${k} ${xy}: ${id} is placed on a '${ch}', not a person or a sign`);
      });

      // ...and nobody is standing there WITHOUT a name. An unnamed person tile
      // would take whatever identity its raw coordinate happens to spell, and
      // on a rebuilt map that can be someone else entirely.
      d.rows.forEach((row, y) => [...row].forEach((ch, x) => {
        if ((ch === "R" || ch === "V" || ch === "!") && !d.cast[x + "," + y]) P.push(`${k} ${x},${y}: a '${ch}' with no identity`);
      }));

      // Doors lead somewhere real.
      Object.entries(d.exits).forEach(([xy, e]) => {
        const t = MAPS[e.map];
        const tRows = inRegion.has(e.map) ? region.maps[e.map].rows : (t && t.rows);
        if (!tRows) { P.push(`${k} ${xy}: door to ${e.map}, which does not exist`); return; }
        if (!standable([...(tRows[e.y] || "")][e.x])) P.push(`${k} ${xy}: door to ${e.map} ${e.x},${e.y}, which is not ground`);
      });

      // Seams are open ground on BOTH sides or closed on both. part103 skips
      // the full walk rule when you cross one, and can only afford to because
      // this holds.
      Object.entries(d.links).forEach(([dir, link]) => {
        const nd = region.maps[link.map];
        if (!nd) { P.push(`${k}: ${dir} link to ${link.map}, outside this region`); return; }
        const back = { n: "s", s: "n", e: "w", w: "e" }[dir];
        if (!nd.links[back] || nd.links[back].map !== k) P.push(`${k}: ${dir} to ${link.map}, but not back`);
        if (dir === "n" || dir === "s") {
          const mine = [...d.rows[dir === "n" ? 0 : H - 1]];
          const theirs = [...nd.rows[dir === "n" ? nd.rows.length - 1 : 0]];
          mine.forEach((ch, x) => {
            const tc = theirs[x - (link.off || 0)];
            if (standable(ch) !== standable(tc)) P.push(`${k}/${link.map} seam col ${x}: '${ch}' against '${tc}'`);
          });
        }
      });

      if (!standable([...(d.rows[d.land[1]] || "")][d.land[0]])) P.push(`${k}: landing ${d.land} is not ground`);

      // Landmarks are somebody's words: the id must exist in part106.
      Object.entries(d.marks || {}).forEach(([xy, id]) => {
        const [x, y] = xy.split(",").map(Number);
        if (!LANDMARKS[id]) P.push(`${k} ${xy}: landmark ${id} has no words`);
        if ([...d.rows[y]][x] !== "Ω") P.push(`${k} ${xy}: landmark ${id} is not on a landmark tile`);
      });
      // Pouches hold a real item, lie on ground, and each has its own id -
      // across the whole game, because the save remembers them by id alone.
      Object.entries(d.finds || {}).forEach(([xy, f]) => {
        const [x, y] = xy.split(",").map(Number);
        if (f.item !== "coins" && !SHOP_STOCK.some((s) => s.key === f.item)) P.push(`${k} ${xy}: pouch ${f.id} holds "${f.item}", which is not an item`);
        if (!(f.n > 0)) P.push(`${k} ${xy}: pouch ${f.id} is empty`);
        if (!standable([...d.rows[y]][x])) P.push(`${k} ${xy}: pouch ${f.id} is not on ground`);
        if (findIds.has(f.id)) P.push(`${k} ${xy}: pouch id ${f.id} is used twice`);
        findIds.add(f.id);
      });
    });

    // Doors elsewhere that lead in here, re-aimed at the new ground.
    region.inbound.forEach((b) => {
      const m = MAPS[b.from];
      if (!m || !m.exits || !m.exits[b.tile]) { P.push(`inbound: ${b.from} has no door at ${b.tile}`); return; }
      const rows = region.maps[b.map] && region.maps[b.map].rows;
      if (!rows || !standable([...(rows[b.y] || "")][b.x])) P.push(`inbound: ${b.from} ${b.tile} lands on ${b.map} ${b.x},${b.y}, which is not ground`);
    });

    if (P.length) {
      report.refused.push(region.name);
      report.problems.push(...P.map((p) => region.name + ": " + p));
      return;
    }

    // ---- apply. Everything above passed, so none of this can half-happen.
    keys.forEach((k) => {
      const d = region.maps[k], m = MAPS[k];
      // Count the signs that had words but no tile to stand on, and now do.
      const oldSigns = new Set();
      m.rows.forEach((row, y) => [...row].forEach((ch, x) => { if (ch === "!") oldSigns.add(k + ":" + x + "," + y); }));
      Object.entries(d.cast).forEach(([xy, id]) => {
        const [x, y] = xy.split(",").map(Number);
        if ([...d.rows[y]][x] === "!" && !oldSigns.has(id)) report.signsRestored++;
      });

      m.rows = d.rows.slice();
      m.exits = d.exits;
      m.border = "T";
      m.beyond = d.beyond || {};
      MAP_LINKS[k] = d.links;
      MAP_LAND[k] = d.land;
      MAP_GEN[k] = d.gen;
      Object.entries(d.cast).forEach(([xy, id]) => { MAP_ALIAS[k + ":" + xy] = id; });
      Object.entries(d.marks || {}).forEach(([xy, id]) => { LANDMARK_AT[k + ":" + xy] = { ...LANDMARKS[id], id }; report.landmarks++; });
      Object.entries(d.finds || {}).forEach(([xy, f]) => { FIND_AT[k + ":" + xy] = f; report.finds++; });
      // Rematches. part84 worked out who could stand their ground when beaten
      // on the OLD layouts. On a rebuilt map nobody stands on a road - mapforge
      // refuses the map otherwise - so every battler here can hold theirs.
      if (typeof REMATCH_HOLD !== "undefined") {
        Object.entries(d.cast).forEach(([xy, id]) => {
          const [x, y] = xy.split(",").map(Number);
          const t = TRAINERS[id];
          if ([...d.rows[y]][x] === "R" && t && t.team && !t.chat) REMATCH_HOLD[id] = true;
        });
      }
    });
    region.inbound.forEach((b) => {
      const m = MAPS[b.from];
      m.exits = { ...m.exits, [b.tile]: { ...m.exits[b.tile], map: b.map, x: b.x, y: b.y } };
    });
    report.applied.push(region.name);
  });

  /* THE BEELOUD PAYOFF, RE-AIMED. Once Thabo's hives are on steel, five things
     in his story are meant to say something new - "Rebuilt on steel", Thabo
     shaking your hand. That after-text is keyed by where each one stood, and
     four of the five were moved to other roads long ago without it (part65 put
     each arc's people on the road out of their town). So four of the five
     could never show: their keys pointed at bare ground on seg_m4. Found while
     rebuilding exactly these maps, 2026-09-23.

     Matched by NAME, which is what both tables agree on, and only where the old
     key has nobody at it - so a text that already works is never moved. */
  if (typeof beeloudSolvedText !== "undefined") {
    Object.keys(beeloudSolvedText).forEach((k) => {
      if (TRAINERS[k]) return;
      const want = beeloudSolvedText[k].name;
      const hit = Object.keys(TRAINERS).find((t) => TRAINERS[t].chat && TRAINERS[t].name === want);
      if (hit && !beeloudSolvedText[hit]) {
        beeloudSolvedText[hit] = beeloudSolvedText[k];
        delete beeloudSolvedText[k];
        report.solvedRekeyed++;
      }
    });
  }

  if (typeof window !== "undefined") window.__MAPCHECK = report;
  console.log(`[part105] regions applied: ${report.applied.join(", ") || "none"}`
    + (report.refused.length ? ` | REFUSED: ${report.refused.join(", ")}` : "")
    + ` | signs given back a tile: ${report.signsRestored}`
    + ` | Beeloud after-texts re-aimed: ${report.solvedRekeyed}`
    + ` | landmarks: ${report.landmarks} | pouches: ${report.finds}`);
  report.problems.forEach((p) => console.warn("[part105] " + p));
}

// The newest rebuild generation any map is at. Saves record it, so a save made
// before a region was rebuilt can be recognised on load and moved off
// coordinates that now mean something else.
const MAPS_GEN = Math.max(0, ...Object.values(MAP_GEN));
