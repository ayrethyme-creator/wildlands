// ---------- Part 82: SIGNS OUT OF THE DOORWAY ----------
// Ayr, 2026-09-04: "please move the signs out of the direct walk ways of
// entrance to exit."
//
// WHAT "IN THE WAY" MEANS HERE, measurably, rather than by eye. A sign is solid,
// so it can never literally be on the route you walk - it is the reason the
// route bends. So the test is: treat every sign on the map as floor, find the
// shortest paths between each pair of exits, and ask whether a sign is standing
// on one of them. If it is, the walk from the door you came in by to the door
// you are leaving by has to go round it, and you bump the sign on the way.
//
// Measured before writing this: 26 exit-pairs across the game are pushed off
// their shortest line by a sign. The clearest case is the dig sites and rift6 -
// exits at (7,0) and (7,9), sign at (7,3), planted dead centre in the one
// straight line between them.
//
// WHERE THEY GO. One tile aside, to the nearest floor that is NOT on a shortest
// path but IS next to one, so the sign is still read by walking past it. A sign
// nobody can reach is worse than a sign in the way.
//
// THE TEXT MOVES WITH THE SIGN. part4 reads a sign as
// SIGNS[map + ":" + x + "," + y], falling back to a map-wide line and then to
// "the letters have long worn away" - so moving the glyph and leaving the key
// behind would silently blank the specific ones and nothing would report it.
//
// NOTHING IS TRUSTED. A sign becomes solid where it lands, so every move is
// checked the way part80 checks a footstep: flood the map before and after, and
// put the sign back if a single walkable tile stopped being reachable. This file
// cannot seal anything in.

(() => {
  if (typeof MAPS === "undefined") return;
  const MARKS = (typeof MAP_MARKS !== "undefined") ? MAP_MARKS : "";
  // What the player can cross. "nsec" are the map-edge transitions: they are the
  // destinations here, so they have to be reachable.
  const WALK = ".gGp*" + MARKS + "nsec";
  // Where a sign may be planted. Deliberately narrower - not tall grass, which
  // is an encounter, and not a mark, which already says something of its own.
  const FLOOR = ".gp*";

  const at = (rows, x, y) => (rows[y] || "")[x];
  const put = (rows, x, y, c) => { rows[y] = rows[y].slice(0, x) + c + rows[y].slice(x + 1); };

  // BFS over the map. `openSigns` treats every sign as floor, which is how the
  // walkway is found in the first place.
  const flood = (rows, sx, sy, openSigns) => {
    const H = rows.length, W = rows[0].length;
    const d = Array.from({ length: H }, () => new Array(W).fill(-1));
    const ok = (x, y) => {
      const c = at(rows, x, y);
      return c !== undefined && (WALK.indexOf(c) >= 0 || (openSigns && c === "!"));
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

  // Every tile the player can still get to, as a set of "x,y".
  const reachSet = (rows, sx, sy) => {
    const d = flood(rows, sx, sy, false), out = new Set();
    d.forEach((row, y) => row.forEach((v, x) => { if (v >= 0) out.add(x + "," + y); }));
    return out;
  };

  let moved = 0, stuck = 0, checked = 0, textCarried = 0;
  const stuckOn = [], movedList = [];

  Object.keys(MAPS).forEach((id) => {
    const m = MAPS[id];
    if (!m || !m.rows || !m.exits) return;
    const exits = Object.keys(m.exits).map((k) => k.split(",").map(Number));
    if (exits.length < 2) return;

    const signs = [];
    m.rows.forEach((row, y) => { for (let x = 0; x < row.length; x++) if (row[x] === "!") signs.push([x, y]); });
    if (!signs.length) return;
    checked += signs.length;

    /* The walkway: every tile lying on SOME shortest path between SOME pair of
       exits, with the signs taken out of the way. A tile is on a shortest path
       from a to b exactly when dist(a,t) + dist(t,b) === dist(a,b), which is why
       both floods are needed rather than one route.

       This set is used to choose WHERE a sign goes, not whether it moves. On an
       open floor every staircase route between two doors is equally short, so
       nearly the whole room is "on a shortest path" and the set says almost
       nothing - which is exactly what the first version of this file got wrong:
       it wanted to move 43 signs and could find nowhere to put 18 of them,
       because in the myth hub and the tidewater hall there is no "off the path"
       to move to. */
    const walkway = new Set();
    const dFrom = exits.map(([x, y]) => flood(m.rows, x, y, true));
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

    /* WHETHER a sign moves is a stricter question, asked of that sign alone:
       take just this one out and does any door-to-door walk get shorter? That is
       the difference between a sign standing in a corridor, which costs you
       steps every time, and a sign standing in a hall, which you walk past. A
       sign in the doorway itself counts too — no detour, but you bump it going
       through. */
    const obstructs = (sx, sy) => {
      if (exits.some(([ex, ey]) => Math.abs(ex - sx) + Math.abs(ey - sy) <= 1)) return true;
      // Every pair of doors, not just the pairs involving the first one. A sign
      // can sit squarely between the east and west doors of a hall and be
      // nowhere near the north one.
      const solid = exits.map(([x, y]) => flood(m.rows, x, y, false));
      put(m.rows, sx, sy, ".");
      const open = exits.map(([x, y]) => flood(m.rows, x, y, false));
      put(m.rows, sx, sy, "!");
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

    signs.forEach(([sx, sy]) => {
      if (!obstructs(sx, sy)) return;               // you walk past it, not round it

      const before = reachSet(m.rows, exits[0][0], exits[0][1]);

      /* Candidates in rings outward, so the sign moves as little as possible and
         stays where the same person would look for it. It has to TOUCH the
         walkway - a sign in the corner of a field is not a sign, it is scenery -
         and it must not obstruct from its new spot either, which is checked
         below once it is actually standing there. */
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
          cands.push([nx, ny, r]);
        }
        if (cands.length) break;                    // nearest ring wins
      }

      let done = false;
      for (const [nx, ny] of cands) {
        const oldCh = at(m.rows, nx, ny);
        put(m.rows, sx, sy, ".");
        put(m.rows, nx, ny, "!");
        const after = reachSet(m.rows, exits[0][0], exits[0][1]);
        // The tile the sign now stands on is allowed to be lost - that is what a
        // sign is. Nothing else may be. Same exemption part80 needed for a
        // walker's destination, and for the same reason.
        const lost = [...before].filter((k) => k !== nx + "," + ny && !after.has(k));
        const exitsOk = exits.every(([ex, ey]) => after.has(ex + "," + ey));
        // And the new spot must not obstruct in its turn. This is the same
        // question asked of the same sign in its new home, which is stricter and
        // simpler than "off the walkway" - and it is what lets a sign move at
        // all in an open hall, where every tile is on somebody's shortest path
        // and "off the walkway" describes nowhere.
        if (!lost.length && exitsOk && !obstructs(nx, ny)) {
          if (typeof SIGNS !== "undefined") {
            const oldKey = id + ":" + sx + "," + sy, newKey = id + ":" + nx + "," + ny;
            if (SIGNS[oldKey] !== undefined) {
              SIGNS[newKey] = SIGNS[oldKey];
              delete SIGNS[oldKey];
              textCarried++;
            }
          }
          moved++; movedList.push(id + " " + sx + "," + sy + "->" + nx + "," + ny); done = true; break;
        }
        put(m.rows, nx, ny, oldCh);
        put(m.rows, sx, sy, "!");
      }
      if (!done) { stuck++; stuckOn.push(id + ":" + sx + "," + sy); }
    });
  });

  console.log(`[part82] signs out of the doorway: ${moved} moved of ${checked} checked`
    + ` | sign text carried across: ${textCarried}`
    + (moved ? ` | ${movedList.join(" ")}` : "")
    + (stuck ? ` | NO ROOM TO MOVE: ${stuckOn.join(" ")}` : ""));
})();
