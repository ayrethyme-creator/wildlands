// ---------- Part 100: SIGNS, PEOPLE, CLUES AND TRAINERS OUT OF THE DOORWAY --
// Ayr, on seeing part99's fix: "There are still things in the way. Water and
// buildings are ok, but not clues, people, or signs, all of which are still
// present." Then, on the first version of this file, which left battle
// trainers standing on the theory that fighting them is the game working as
// designed: "No. I wanted the trainers to be moved specifically as well." So
// they move too now - the theory was mine, not Ayr's, and Ayr's word on their
// own game wins. A relocated trainer is still exactly as strong, still gives
// the same prize, still has to be fought if you walk up and bump it - it is
// only no longer sitting on the one line between a door and its exit.
//
// SIGNS ALREADY HAD A FIX - part82, 2026-09-04, this exact ask - but it runs
// ONCE, early in load order, over whatever MAPS holds at that moment. part96
// creates eight new region rooms LATER, each one built from RIFT_END - the
// same template rift10 uses, "!" already baked in at (7,3) - and hands them
// straight to `rows` with no fork. Those eight maps did not exist yet when
// part82 ran, so their sign was never even checked once.
//
// "PEOPLE" AND "CLUES" NEVER HAD A FIX AT ALL, because they are not signs.
// part65 places both an investigation's person and its findings the same
// way - literally the same function, `placeOn` - and both come out as an 'R'
// tile registered in TRAINERS with `chat: true`. Ordinary route trainers use
// the same character with no such flag. Once Ayr said trainers should move
// too, the distinction stopped mattering for THIS file's purpose - every 'R'
// and every 'V' is now a candidate, chat or not.
//
// FIVE POSITIONS ARE KEPT FIXED ON PURPOSE: the story rival's five encounters
// (RIVAL_TILES - route1/3/5/7 and the summit, all at "7,1"). Those are staged
// narrative beats, not scenery a player happens to walk into, and moving one
// would only relocate the drama, not remove an obstacle. Flagging this rather
// than silently deciding it: if Ayr wants those moved too, say so and they
// come out of the exclusion the same way ordinary trainers came out of it.
//
// THE ALGORITHM IS PART82'S, RUN AGAIN AND WIDENED TO MORE CHARACTERS. Not
// rewritten - the reachability bookkeeping there is exactly what this needs,
// and there is no reason to risk a second, differently-buggy version of it.
// obstructs() asks whether removing this one tile shortens some door-to-door
// walk; if it does, the tile relocates to the nearest ring tile that touches
// a shortest-path walkway, is not itself an obstruction once it is standing
// there, and does not cost a single reachable tile anywhere on the map. If no
// such tile exists, it stays and is reported rather than forced.
//
// A HAZARD PART82 CARRIED WITHOUT KNOWING IT, closed here. `put()` writes
// `rows[y] = ...` on WHATEVER ARRAY OBJECT `m.rows` POINTS TO. RIFT_END is one
// array shared, unforked, by nine maps (rift10 and the eight regions) - so a
// mutation aimed at one of them would have landed on all nine at once. This
// happened to be harmless the one time it mattered (all nine start from
// identical geometry, so the same fix suits all of them) but it was luck, not
// safety. Every map gets its own array - `m.rows = m.rows.slice()` - before
// this file writes to it, the same guarantee withRow gives, so nothing here
// can leak between maps that happen to still share a template.
if (typeof MAPS === "undefined" || typeof TRAINERS === "undefined") {
  console.warn("[part100] MAPS or TRAINERS missing - relocation skipped");
} else {

const MARKS = (typeof MAP_MARKS !== "undefined") ? MAP_MARKS : "";
const WALK = ".gGp*" + MARKS + "nsec";
const FLOOR = ".gp*";

const at = (rows, x, y) => (rows[y] || "")[x];
const put = (rows, x, y, c) => { rows[y] = rows[y].slice(0, x) + c + rows[y].slice(x + 1); };

const flood = (rows, sx, sy, openTarget, targetCh) => {
  const H = rows.length, W = rows[0].length;
  const d = Array.from({ length: H }, () => new Array(W).fill(-1));
  const ok = (x, y) => {
    const c = at(rows, x, y);
    return c !== undefined && (WALK.indexOf(c) >= 0 || (openTarget && c === targetCh));
  };
  if (!ok(sx, sy)) return d;
  const q = [[sx, sy]]; d[sy][sx] = 0;
  for (let i = 0; i < q.length; i++) {
    const [x, y] = q[i];
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
      const nx = x + dx, ny = y + dy;
      if (ny < 0 || ny >= H || nx < 0 || nx >= (rows[ny] || "").length) return;
      if (d[ny][nx] !== -1 || !ok(nx, ny)) return;
      d[ny][nx] = d[y][x] + 1; q.push([nx, ny]);
    });
  }
  return d;
};

const reachSet = (rows, sx, sy) => {
  const d = flood(rows, sx, sy, false, null), out = new Set();
  d.forEach((row, y) => row.forEach((v, x) => { if (v >= 0) out.add(x + "," + y); }));
  return out;
};

// Runs the whole part82 algorithm for one glyph on one map. `movable(x,y)`
// decides whether the specific tile at that spot is a candidate at all -
// for "!" every sign is; for "R" only the chat-registered ones are.
const relocate = (id, m, ch, movable, onMoved) => {
  const exits = Object.keys(m.exits).map((k) => k.split(",").map(Number));
  if (exits.length < 2) return { checked: 0, moved: 0, stuck: 0 };

  const spots = [];
  m.rows.forEach((row, y) => { for (let x = 0; x < row.length; x++) if (row[x] === ch && movable(x, y)) spots.push([x, y]); });
  if (!spots.length) return { checked: 0, moved: 0, stuck: 0 };

  const walkway = new Set();
  const dFrom = exits.map(([x, y]) => flood(m.rows, x, y, true, ch));
  for (let a = 0; a < exits.length; a++) {
    for (let b = a + 1; b < exits.length; b++) {
      const [bx, by] = exits[b];
      const total = dFrom[a][by] === undefined ? -1 : dFrom[a][by][bx];
      if (total === undefined || total < 0) continue;
      m.rows.forEach((row, y) => {
        for (let x = 0; x < row.length; x++) {
          const da = dFrom[a][y][x], db = dFrom[b][y][x];
          if (da >= 0 && db >= 0 && da + db === total) walkway.add(x + "," + y);
        }
      });
    }
  }

  const obstructs = (sx, sy) => {
    if (exits.some(([ex, ey]) => Math.abs(ex - sx) + Math.abs(ey - sy) <= 1)) return true;
    const solid = exits.map(([x, y]) => flood(m.rows, x, y, false, null));
    put(m.rows, sx, sy, ".");
    const open = exits.map(([x, y]) => flood(m.rows, x, y, false, null));
    put(m.rows, sx, sy, ch);
    for (let a = 0; a < exits.length; a++) {
      for (let b = a + 1; b < exits.length; b++) {
        const [bx, by] = exits[b];
        const was = solid[a][by] === undefined ? -1 : solid[a][by][bx];
        const now = open[a][by] === undefined ? -1 : open[a][by][bx];
        if (now >= 0 && (was < 0 || was > now)) return true;
      }
    }
    return false;
  };

  let checked = 0, moved = 0, stuck = 0;
  spots.forEach(([sx, sy]) => {
    checked++;
    if (!obstructs(sx, sy)) return;

    const before = reachSet(m.rows, exits[0][0], exits[0][1]);
    const cands = [];
    for (let r = 1; r <= 3; r++) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const nx = sx + dx, ny = sy + dy, key = nx + "," + ny;
        const c = at(m.rows, nx, ny);
        if (c === undefined || FLOOR.indexOf(c) < 0) continue;
        if (m.exits[key]) continue;
        const touches = [[1, 0], [-1, 0], [0, 1], [0, -1]]
          .some(([ax, ay]) => walkway.has((nx + ax) + "," + (ny + ay)));
        if (!touches) continue;
        cands.push([nx, ny]);
      }
      if (cands.length) break;
    }

    let done = false;
    for (const [nx, ny] of cands) {
      const oldCh = at(m.rows, nx, ny);
      put(m.rows, sx, sy, ".");
      put(m.rows, nx, ny, ch);
      const after = reachSet(m.rows, exits[0][0], exits[0][1]);
      const lost = [...before].filter((k) => k !== nx + "," + ny && !after.has(k));
      const exitsOk = exits.every(([ex, ey]) => after.has(ex + "," + ey));
      if (!lost.length && exitsOk && !obstructs(nx, ny)) {
        onMoved(sx, sy, nx, ny);
        moved++; done = true; break;
      }
      put(m.rows, nx, ny, oldCh);
      put(m.rows, sx, sy, ch);
    }
    if (!done) stuck++;
  });
  return { checked, moved, stuck };
};

const RIVAL_FIXED = (typeof RIVAL_TILES !== "undefined") ? RIVAL_TILES : {};

let sChecked = 0, sMoved = 0, sStuck = 0, sTextCarried = 0;
let tChecked = 0, tMoved = 0, tStuck = 0;

Object.keys(MAPS).forEach((id) => {
  const m = MAPS[id];
  if (!m || !m.rows || !m.exits) return;
  // Fork first. m.rows may still be a template several other maps share -
  // RIFT_END is one array standing under nine keys at once - and every write
  // below goes through the SAME rows reference for every call this map makes,
  // so it only has to happen once, here, rather than once per glyph.
  m.rows = m.rows.slice();

  const signRes = relocate(id, m, "!", () => true, (sx, sy, nx, ny) => {
    if (typeof SIGNS !== "undefined") {
      const oldKey = id + ":" + sx + "," + sy, newKey = id + ":" + nx + "," + ny;
      if (SIGNS[oldKey] !== undefined) { SIGNS[newKey] = SIGNS[oldKey]; delete SIGNS[oldKey]; sTextCarried++; }
    }
  });
  sChecked += signRes.checked; sMoved += signRes.moved; sStuck += signRes.stuck;

  // Every 'R' and every 'V' is a candidate now - a battle trainer, a rival,
  // a chat-only investigation person, a finding, all of it - except the five
  // staged rival encounters, which keep their fixed stage.
  const onMovedTrainer = (sx, sy, nx, ny) => {
    const oldKey = id + ":" + sx + "," + sy, newKey = id + ":" + nx + "," + ny;
    if (TRAINERS[oldKey] !== undefined) { TRAINERS[newKey] = TRAINERS[oldKey]; delete TRAINERS[oldKey]; }
  };
  ["R", "V"].forEach((glyph) => {
    const movable = (x, y) => !RIVAL_FIXED[id + ":" + x + "," + y];
    const res = relocate(id, m, glyph, movable, onMovedTrainer);
    tChecked += res.checked; tMoved += res.moved; tStuck += res.stuck;
  });
});

console.log("[part100] signs: " + sMoved + " moved of " + sChecked + " checked ("
  + sTextCarried + " text carried, " + sStuck + " no room) | trainers/rivals/"
  + "people/clues: " + tMoved + " moved of " + tChecked + " checked (" + tStuck
  + " no room) | the five staged rival encounters kept their fixed spot");

}
