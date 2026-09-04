// ---------- Part 80: THE PEOPLE GO SOMEWHERE ----------
// Ayr, 2026-09-03: "almost all of the ppl don't move. it would be nice if all
// of the ones who don't battle or block gates, move."
//
// They were breathing - part5 gives every person tile an idle - but breathing in
// one square forever is not the same as being somewhere. There are 297 people on
// the 133 maps: 141 who want to battle you, 8 guards on gym doors, and 148 who
// are only there to be talked to. Those 148 are the ones this moves.
//
// WHY THE GLYPH ITSELF MOVES ON THE GRID. Everything in this game asks the map
// what is at a tile: part4 reads m.rows to decide whether you can walk there and
// what happens when you bump it, part5 reads the same rows to draw it. Moving
// the character in the row means all of that keeps working with no changes -
// collision, drawing, the emoji, the idle animation, every one of them, free.
//
// WHY THE IDENTITY DOES NOT MOVE WITH IT. The game names a person by where they
// stand: TRAINERS["town1:16,8"], and so do the arc tables, the solved-text
// tables and the findings, across nine files. If a person's key changed when
// they took a step, Nan Ifeoma would forget who she was every few seconds. So
// the position moves and the KEY DOES NOT: wanderKey() translates the tile you
// bumped into back to the tile that person came from, and one line in part4 and
// one in part5 use it. Everything downstream still sees the home coordinate.
//
// NOTHING HERE IS EVER SAVED. This mutates MAPS in memory, and MAPS is rebuilt
// from source on every load, so the whole cast is home again on the next visit
// and no save can carry a person somewhere strange.

// homeKey -> { map, hx, hy, ch }        who lives where
const WANDER = {};
// "map:x,y" -> homeKey                  who is standing here right now
const WANDER_AT = {};
// homeKey -> { x, y, dx, dy, at }       where they are, and the step they took
const WANDER_POS = {};
const WANDER_BUILT = {};

// The floor a person may stand on. Deliberately narrow: plain ground and paved
// path only. Not grass - a person in the long grass is an encounter waiting to
// be misread - and not tracks, hives, webs or nests, which are things to find
// rather than places to loiter.
const WANDER_FLOOR = ".p";

// What the PLAYER can cross, used only for the trap check below. Wider than the
// above on purpose, and it includes the map-edge exit characters, because the
// question that check has to answer is "can she still get everywhere she could
// get a moment ago", and leaving the map is part of everywhere.
const WANDER_PASSABLE = ".pgG*nsec";

const wanderPassable = (ch) =>
  WANDER_PASSABLE.indexOf(ch) >= 0 ||
  (typeof MAP_MARKS !== "undefined" && MAP_MARKS.indexOf(ch) >= 0);

/* Who is allowed to wander. Not a whitelist of names - a rule, so people added
   later are covered without anybody remembering to come back here.

   Out: anyone with a team (they are standing there to challenge you), the gym
   guards on X, the one quiz house and the one station keeper. A station keeper
   is posted at a specific counter, and a shopkeeper drifting three tiles from
   the shop is worse than one standing still. */
const wanderAllowed = (tr) => {
  if (!tr) return true;                       // an R with no entry: scenery, let it walk
  if (tr.team) return false;                  // battler
  if (tr.station || tr.quizHouse) return false;
  return true;
};

const wanderBuild = (map) => {
  if (WANDER_BUILT[map]) return;
  WANDER_BUILT[map] = 1;
  const m = MAPS[map];
  if (!m || !m.rows) return;
  m.rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch !== "R" && ch !== "V") continue;
      const key = map + ":" + x + "," + y;
      if (!wanderAllowed(TRAINERS[key])) continue;
      WANDER[key] = { map, hx: x, hy: y, ch };
      WANDER_POS[key] = { x, y, dx: 0, dy: 0, at: 0 };
    }
  });
};

/* The translation the rest of the game needs: given a tile, whose home key is
   it? Returns null for everything that has not moved, so the ordinary case
   costs one object lookup and the caller falls back to the plain coordinate. */
const wanderKey = (map, x, y) => WANDER_AT[map + ":" + x + "," + y] || null;

/* Which way somebody just stepped, so part5 can slide them in from the tile
   they came from instead of teleporting. Expires on its own. */
const WANDER_STEP_MS = 420;
const wanderArrival = (map, x, y) => {
  const key = WANDER_AT[map + ":" + x + "," + y];
  if (!key) return null;
  const p = WANDER_POS[key];
  if (!p || !p.at || Date.now() - p.at > WANDER_STEP_MS) return null;
  return p.dx < 0 ? "r" : p.dx > 0 ? "l" : p.dy < 0 ? "d" : p.dy > 0 ? "u" : null;
};

const wanderSet = (m, x, y, ch) => {
  const row = m.rows[y];
  m.rows[y] = row.slice(0, x) + ch + row.slice(x + 1);
};

/* Can the player still reach everything she could reach a moment ago?

   part4 carries a scar about exactly this: two things placed independently
   pinched a tile off between them, and Ayr saved while standing on it and
   loaded in unable to move at all. A person who wanders into a doorway could do
   the same thing, and unlike a fixed placement it would be different every time
   and impossible to reproduce.

   So this does not reason about corridors or count neighbours - it floods the
   map from where she is standing and refuses any step that makes even one tile
   unreachable. A whole map is a few hundred cells; this is cheaper than the
   render it precedes. */
const wanderReach = (m, sx, sy) => {
  const seen = new Set();
  const stack = [[sx, sy]];
  while (stack.length) {
    const [x, y] = stack.pop();
    const k = x + "," + y;
    if (seen.has(k)) continue;
    const row = m.rows[y];
    if (!row || x < 0 || x >= row.length) continue;
    if (!wanderPassable(row[x]) && !(x === sx && y === sy)) continue;
    seen.add(k);
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  return seen;
};

const WANDER_RANGE = 2;   // how far from home anybody will drift

const wanderStep = (st) => {
  if (!st || st.screen !== "world" || st.battle || st.dialog || st.menu) return false;
  const map = st.map, m = MAPS[map];
  if (!m || !m.rows) return false;
  wanderBuild(map);
  const mine = Object.keys(WANDER).filter((k) => WANDER[k].map === map);
  if (!mine.length) return false;

  const before = wanderReach(m, st.x, st.y);
  let moved = false;

  // One person per tick, chosen at random, so a town square drifts rather than
  // marching in step.
  const key = mine[Math.floor(Math.random() * mine.length)];
  const home = WANDER[key], pos = WANDER_POS[key];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const [dx, dy] = dirs[Math.floor(Math.random() * 4)];
  const nx = pos.x + dx, ny = pos.y + dy;

  const row = m.rows[ny];
  if (!row || nx < 0 || nx >= row.length) return false;
  // Home is always a legal destination even though it is bare floor now.
  const goingHome = nx === home.hx && ny === home.hy;
  if (!goingHome && WANDER_FLOOR.indexOf(row[nx]) < 0) return false;
  if (Math.abs(nx - home.hx) > WANDER_RANGE || Math.abs(ny - home.hy) > WANDER_RANGE) return false;
  if (nx === st.x && ny === st.y) return false;
  if (m.exits && m.exits[nx + "," + ny]) return false;
  // Stand still while she is right next to you. Somebody walking out from under
  // your hand as you go to speak to them reads as a bug, not as life.
  if (Math.abs(pos.x - st.x) + Math.abs(pos.y - st.y) <= 1) return false;

  // Take the step, then check it, then keep it or put it back.
  const wasHere = row[nx];
  wanderSet(m, pos.x, pos.y, ".");
  wanderSet(m, nx, ny, home.ch);
  const after = wanderReach(m, st.x, st.y);
  // Everything still reachable EXCEPT the square they are now standing in -
  // that one is theirs, and losing it is the whole point of a person being
  // there. Comparing the sets without that exemption rejects every move ever,
  // which is exactly what it did on the first run: 148 people, none of whom
  // took a step, because the destination can never survive its own arrival.
  const dest = nx + "," + ny;
  let ok = true;
  for (const k of before) if (k !== dest && !after.has(k)) { ok = false; break; }
  if (!ok) {
    wanderSet(m, nx, ny, wasHere);
    wanderSet(m, pos.x, pos.y, home.ch);
    return false;
  }

  delete WANDER_AT[map + ":" + pos.x + "," + pos.y];
  pos.x = nx; pos.y = ny; pos.dx = dx; pos.dy = dy; pos.at = Date.now();
  if (nx !== home.hx || ny !== home.hy) WANDER_AT[map + ":" + nx + "," + ny] = key;
  moved = true;
  return moved;
};

console.log("[part80] the people go somewhere: "
  + Object.keys(MAPS).reduce((n, id) => {
      const rows = MAPS[id].rows;
      if (!rows) return n;
      rows.forEach((row, y) => { for (let x = 0; x < row.length; x++) {
        if ((row[x] === "R" || row[x] === "V") && wanderAllowed(TRAINERS[id + ":" + x + "," + y])) n++;
      } });
      return n;
    }, 0)
  + " of them can walk, within " + WANDER_RANGE + " tiles of home");
