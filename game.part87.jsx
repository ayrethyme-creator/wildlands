// ---------- Part 87: THE ANIMALS ARE OUT THERE ----------
// Ayr, 2026-09-09, asked what would make the game feel more alive and more
// action packed, and picked this out of three: animals you can SEE.
//
// Everything else in this world is visible. 148 people walk around, birds cross
// overhead, tracks lie in the dust, rain drifts through 26 zones, fruit comes in
// season. The animals were the one thing that did not exist until they were
// suddenly in your face - you walked in grass, an invisible die rolled, and a
// menu opened.
//
// So: a shape moving through the reeds, and bumping it starts THAT encounter,
// with that species. Three things follow from it, and they are the reason this
// was worth doing rather than tuning the dice.
//
//   YOU STALK INSTEAD OF BEING AMBUSHED. Seeing something across the field and
//   deciding to go to it is a completely different act from having a fight
//   handed to you.
//
//   YOU CAN WALK AROUND A FIGHT YOU DO NOT WANT. That fixes the interruption
//   problem at the root instead of lowering a percentage.
//
//   A RARE ANIMAL BECOMES A SIGHTING. Catching a glimpse of something you have
//   not got yet, over there, is the whole feeling the Field Guide is for.
//
// HOW IT WORKS, AND WHY IT IS BUILT THIS WAY
// ------------------------------------------
// The animal is written INTO THE MAP ROW, exactly like part80's townspeople,
// because everything in this game asks the map what is at a tile. part4 reads
// m.rows to decide whether you can walk somewhere and what happens when you
// bump it. Putting a character in the row means collision and bumping work with
// no changes at all - the tile is not in the walkable list, so a step into it
// falls through to interact(), and interact() starts the encounter.
//
// But it is DRAWN as a layer of its own, like the ranger, and not as the tile's
// background like a townsperson. Two reasons, both learned the hard way in this
// file's ancestors. A tile that carries the animal cannot also carry the grass,
// so a visible animal would punch a flat square into a drawn field. And a layer
// positioned by transform can be TRANSITIONED, so the animal glides from tile to
// tile instead of teleporting - which is what part5's note beside the
// townspeople says it could not do, because sliding a tile's background slides
// the ground with it and leaves a hole travelling alongside.
//
// So part5 paints the tile as whatever ground is underneath (roamGround tells
// it) and draws the animal over the top.
//
// NOTHING HERE IS EVER SAVED. Like part80 this mutates MAPS in memory, and MAPS
// is rebuilt from source on every load. A field is re-rolled every time you walk
// into it, so coming back to a route finds different animals in it - which is
// true of a real field and costs nothing to be true of this one.
//
// PORTED 2026-09-24. This file was written on 2026-09-10 on a branch of its own
// (wip/visible-animals) and parked before it was ever seen running. Ayr asked
// for it again when the rebuilt savanna came back "very empty", and it came
// across with two changes for the game as it now is:
//
//   - wildPool also applies the weather (part88) and whatever is happening in
//     the world (part89). Both were added to the hidden roll after this file
//     was parked; without them the animals you can see would have been drawn
//     from a different world than the ones you cannot - the exact split this
//     file's own note below says one shared function exists to prevent.
//   - an animal is never dealt onto a tile holding a pouch (part106), which
//     would hide the pouch under it.
//
// It sits well with the continuous world (part103) for one reason worth
// knowing: a field is dealt when you ARRIVE on a map and cleared when you leave,
// so the neighbouring map drawn beyond a seam never has animals half-standing
// in it - you see its ground, and its animals are there when you get there.

const ROAM_CH = "⁘";          // ⁘ - checked against all 133 maps, unused

// Where each visible animal is. "map:x,y" -> the animal standing there.
// { map, x, y, sp, kind, ground, dx, dy, key }
const ROAM = {};
// map -> 1 once its field has been dealt, so it is dealt once per visit
const ROAM_DEALT = {};
// which map the player was on last tick, so leaving one can clear it
let ROAM_HERE = null;
let ROAM_SEQ = 1;                  // stable React keys, so a moving animal is
                                   // the SAME element and its transform can
                                   // transition rather than jump

/* HOW MANY. Grass counts run from 8 tiles to 72 across the 89 maps that have
   both grass and a pool, so a flat number would be a crowd on a peak and a
   rumour on a route. One animal per eighteen tiles of grass, capped at four.

   Sparse on purpose. Four animals in seventy tiles is a field you cross without
   always meeting one, which is what keeps a sighting worth something. The
   hidden roll is still there for everything you do not see. */
const roamCap = (m, kind) => {
  if (!m || !m.rows) return 0;
  let n = 0;
  const want = kind === "water" ? "W" : "G";
  m.rows.forEach((r) => { for (const c of r) if (c === want) n++; });
  if (kind === "water") {
    if (!m.poolWater || !m.poolWater.length) return 0;
    return Math.min(3, Math.floor(n / 40));
  }
  if (!m.pool || !m.pool.length) return 0;
  return Math.min(4, Math.round(n / 18));
};

/* WHICH SPECIES. The same rules the hidden roll uses, in one place, so the
   animal you can see and the animal you cannot are drawn from the same world:
   the night pool after dark, the Champion's Compass steering toward species not
   yet in the guide, and part66's per-save ecology reweighting for how hard this
   patch has been worked. part4's rollEncounter calls this too - it used to have
   its own copy of all three, and two copies of a rule is one rule waiting to go
   out of step. */
const wildPool = (mapKey, kind, st) => {
  const m = MAPS[mapKey];
  if (!m) return null;
  const water = kind === "water";
  const pool = water ? m.poolWater : (isNight() && m.poolN ? m.poolN : m.pool);
  if (!pool || !pool.length) return null;
  let usePool = pool;
  if (st && st.items && st.items.compass > 0 && st.compassOn) {
    const undiscovered = pool.filter(([sp]) => (st.dex[sp] || 0) < 2);
    if (undiscovered.length) usePool = undiscovered;
  }
  if (typeof ecologyPool === "function" && st) {
    usePool = ecologyPool(usePool, {
      seed: st.runSeed, pressure: st.pressure, mapKey, badges: st.badges,
    });
  }
  // ...then the sky (part88), and last whatever is happening here (part89) -
  // the same order and the same reasons as they had in part4's own copy, which
  // this replaces. Both floor every weight, so neither can take a species off
  // the map.
  if (typeof weatherPool === "function" && st) usePool = weatherPool(usePool, st);
  if (typeof eventPool === "function" && st) usePool = eventPool(usePool, st, mapKey);
  return usePool;
};

const roamSet = (m, x, y, ch) => {
  const row = m.rows[y];
  m.rows[y] = row.slice(0, x) + ch + row.slice(x + 1);
};

/* Can the player still reach everything she could reach a moment ago?

   part4 carries a scar about exactly this and part80 carries the fix: two
   things placed independently pinched a tile off between them, Ayr saved while
   standing on it, and loaded in unable to move. An animal standing in a
   one-tile gap in a hedge could do the same, and unlike a fixed placement it
   would be different every time and impossible to reproduce.

   Wider than part80's set because it includes W: a ranger who can swim gets
   about the map through the water as well, and a route she can only take
   swimming is still a route this must not seal. */
const ROAM_PASSABLE = ".pgG*nsecW";
const roamPassable = (ch) =>
  ROAM_PASSABLE.indexOf(ch) >= 0 ||
  (typeof MAP_MARKS !== "undefined" && MAP_MARKS.indexOf(ch) >= 0);

const roamReach = (m, sx, sy) => {
  const seen = new Set();
  const stack = [[sx, sy]];
  while (stack.length) {
    const [x, y] = stack.pop();
    const k = x + "," + y;
    if (seen.has(k)) continue;
    const row = m.rows[y];
    if (!row || x < 0 || x >= row.length) continue;
    if (!roamPassable(row[x]) && !(x === sx && y === sy)) continue;
    seen.add(k);
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  return seen;
};

// Does putting `ch` at nx,ny leave every tile still reachable? The destination
// itself is exempt - it is the animal's now, and losing it is the whole point
// of an animal being there. part80 shipped without that exemption once and 148
// people stood perfectly still, because a destination can never survive its own
// arrival.
const roamSafe = (m, st, nx, ny, ch, from) => {
  const before = roamReach(m, st.x, st.y);
  const was = m.rows[ny][nx];
  if (from) roamSet(m, from.x, from.y, from.ground);
  roamSet(m, nx, ny, ch);
  const after = roamReach(m, st.x, st.y);
  const dest = nx + "," + ny;
  let ok = true;
  for (const k of before) if (k !== dest && !after.has(k)) { ok = false; break; }
  if (!ok) {
    roamSet(m, nx, ny, was);
    if (from) roamSet(m, from.x, from.y, ROAM_CH);
  }
  return ok;
};

const roamAt = (map, x, y) => ROAM[map + ":" + x + "," + y] || null;
const roamList = (map) => Object.keys(ROAM)
  .filter((k) => ROAM[k].map === map).map((k) => ROAM[k]);
// What part5 should paint the tile as: the ground the animal is standing on.
const roamGround = (map, x, y) => {
  const a = ROAM[map + ":" + x + "," + y];
  return a ? a.ground : null;
};

// Put a field back the way it was found. Called when the player leaves a map,
// so nothing accumulates and no map is ever left holding a character that its
// source does not have.
const roamClear = (map) => {
  const m = MAPS[map];
  Object.keys(ROAM).forEach((k) => {
    const a = ROAM[k];
    if (a.map !== map) return;
    if (m && m.rows && m.rows[a.y] && m.rows[a.y][a.x] === ROAM_CH) roamSet(m, a.x, a.y, a.ground);
    delete ROAM[k];
  });
  delete ROAM_DEALT[map];
};

/* Take one off the map, because you have just walked into it and it is in the
   fight now. Whatever happens next - befriended, beaten, fled from - it is not
   standing in that field any more, which is the honest outcome and also the one
   that makes a worked patch visibly empty out. */
const roamTake = (map, x, y) => {
  const key = map + ":" + x + "," + y;
  const a = ROAM[key];
  if (!a) return null;
  const m = MAPS[map];
  if (m && m.rows && m.rows[y][x] === ROAM_CH) roamSet(m, x, y, a.ground);
  delete ROAM[key];
  return a;
};

/* Put one animal somewhere sensible, or give up quietly.

   THE DISTANCE RULE IS THE IMPORTANT ONE. An animal that appears four tiles
   away is something you noticed; an animal that appears next to you is a random
   encounter wearing a costume, and worse, it looks like a rendering fault. So
   nothing is ever placed within four tiles of the ranger, and the top-up below
   is rare enough that you are almost never looking at the tile when it happens. */
const ROAM_MIN_DIST = 4;

const roamPlace = (st, kind) => {
  const map = st.map, m = MAPS[map];
  if (!m || !m.rows) return false;
  const pool = wildPool(map, kind, st);
  if (!pool || !pool.length) return false;
  const want = kind === "water" ? "W" : "G";

  // Collect the legal ground, then take one at random - cheaper to reason about
  // than dart at the map hoping to hit grass, and it makes "this map has nowhere
  // to put one" an answer rather than a hang.
  const spots = [];
  m.rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] !== want) continue;
      if (Math.abs(x - st.x) + Math.abs(y - st.y) < ROAM_MIN_DIST) continue;
      if (m.exits && m.exits[x + "," + y]) continue;
      // never on a pouch - it would lie hidden under the animal (part106)
      if (typeof FIND_AT !== "undefined" && FIND_AT[map + ":" + x + "," + y]) continue;
      spots.push([x, y]);
    }
  });
  if (!spots.length) return false;

  const [x, y] = spots[Math.floor(Math.random() * spots.length)];
  if (!roamSafe(m, st, x, y, ROAM_CH, null)) return false;
  const sp = pickPool(pool);
  if (!DEX[sp]) { roamSet(m, x, y, want); return false; }
  ROAM[map + ":" + x + "," + y] = {
    map, x, y, x0: x, y0: y, sp, kind, ground: want, dx: 0, dy: 0,
    key: "roam" + (ROAM_SEQ++),
  };
  return true;
};

const roamCount = (map, kind) => roamList(map).filter((a) => !kind || a.kind === kind).length;

// Deal a whole field at once when you walk into it, so the animals were already
// there when you arrived rather than fading up around you.
const roamDeal = (st) => {
  const map = st.map, m = MAPS[map];
  if (!m || ROAM_DEALT[map]) return;
  ROAM_DEALT[map] = 1;
  ["grass", "water"].forEach((kind) => {
    const cap = roamCap(m, kind);
    for (let i = 0; i < cap; i++) roamPlace(st, kind);
  });
};

/* How far one will drift from where it was dealt. Wider than part80's two tiles
   for people, because a person is outside their own front door and an animal is
   not going anywhere in particular. It stays in its own terrain either way -
   a grass animal only ever steps onto grass, a water one only onto water -
   which is what keeps them out of doorways and off the roads without needing a
   rule about doorways or roads. */
const ROAM_RANGE = 5;
const ROAM_STEP_CHANCE = 0.55;     // per tick, per chosen animal
const ROAM_REFILL = 0.05;          // per tick, chance to try a top-up

/* ARRIVING SOMEWHERE. Put the last field back, then deal this one.

   THIS IS NOT PART OF THE HEARTBEAT, and the first version had it there, which
   was wrong twice over. A heartbeat is throttled the moment the page is not the
   thing being looked at, so a field could stay empty for as long as the browser
   felt like it - and roamStep quite rightly refuses to move anything while a
   dialog is open, which is exactly the state you are in when you walk into a
   new place. Both together meant walking into a field and finding nothing in
   it, for no reason you could see.

   Walking into somewhere is an event React already knows about, so part4 calls
   this on the map changing and the animals are simply there when you arrive.
   The heartbeat only moves them around afterwards. Idempotent - ROAM_DEALT
   gates the work - so calling it from both places costs one lookup. */
const roamArrive = (st) => {
  if (!st || st.screen !== "world") return false;
  const map = st.map;
  if (!map || !MAPS[map]) return false;
  if (map === ROAM_HERE && ROAM_DEALT[map]) return false;
  if (ROAM_HERE && ROAM_HERE !== map) roamClear(ROAM_HERE);
  ROAM_HERE = map;
  roamDeal(st);
  return true;
};

const roamStep = (st) => {
  if (!st || st.screen !== "world" || st.battle || st.dialog || st.menu) return false;
  const map = st.map, m = MAPS[map];
  if (!m || !m.rows) return false;
  // A safety net only: part4 deals the field on arrival. If that somehow did
  // not happen - a map reached by a route nobody thought about - the field
  // still fills rather than staying mysteriously empty.
  if (roamArrive(st)) return true;

  const mine = roamList(map);

  // A field that has been worked refills slowly, and only up to what it holds.
  if (Math.random() < ROAM_REFILL) {
    for (const kind of ["grass", "water"]) {
      if (roamCount(map, kind) < roamCap(m, kind)) return roamPlace(st, kind);
    }
  }
  if (!mine.length) return false;
  if (Math.random() > ROAM_STEP_CHANCE) return false;

  const a = mine[Math.floor(Math.random() * mine.length)];
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const [dx, dy] = dirs[Math.floor(Math.random() * 4)];
  const nx = a.x + dx, ny = a.y + dy;
  const row = m.rows[ny];
  if (!row || nx < 0 || nx >= row.length) return false;
  if (row[nx] !== a.ground) return false;                  // its own country only
  // It drifts around where it was dealt rather than crossing the whole map. Not
  // for realism - so that a field you looked at a minute ago still has animals
  // in roughly the places you saw them, and walking toward one is a plan rather
  // than a chase.
  if (Math.abs(nx - a.x0) > ROAM_RANGE || Math.abs(ny - a.y0) > ROAM_RANGE) return false;
  if (nx === st.x && ny === st.y) return false;
  if (m.exits && m.exits[nx + "," + ny]) return false;
  if (typeof FIND_AT !== "undefined" && FIND_AT[map + ":" + nx + "," + ny]) return false;
  /* HOLD STILL WHEN SHE IS RIGHT NEXT TO YOU. part80's rule, and it matters more
     here: an animal that steps out from under your hand as you reach for it is
     not shyness, it is the game taking the bump away from you at the exact
     moment you earned it. Approaching is the whole verb this feature adds, so
     the last tile of the approach is never allowed to move. */
  if (Math.abs(a.x - st.x) + Math.abs(a.y - st.y) <= 1) return false;

  if (!roamSafe(m, st, nx, ny, ROAM_CH, a)) return false;

  delete ROAM[map + ":" + a.x + "," + a.y];
  a.x = nx; a.y = ny; a.dx = dx; a.dy = dy;
  ROAM[map + ":" + nx + "," + ny] = a;
  return true;
};

/* THE ANIMAL, DRAWN ON THE MAP.

   Not part2's <Sprite>, and the difference is one number: Sprite takes a size in
   pixels, and a map cell is a fraction of the grid whose width depends on the
   map and the screen. A 22px sprite is right on a phone and a stamp on a
   desktop. This takes the same art and lets it fill whatever cell it is given,
   which is what every other layer over this map already does.

   Sized slightly over the cell and hung from the bottom, exactly like the
   ranger: an animal whose feet are on the tile line and whose head is over the
   one behind reads as standing IN the field. Fitted neatly inside the square it
   reads as an icon sitting ON it. */
function RoamSprite({ sp, flip }) {
  const d = DEX[sp];
  if (!d) return null;
  const er = d.juv ? 1.35 : 1;
  const style = {
    width: "100%", height: "100%", display: "block",
    filter: "drop-shadow(1px 2px 2px rgba(0,0,0,.4))",
    transform: flip ? "scaleX(-1)" : undefined,
  };
  if (typeof PHOTO_ART !== "undefined" && PHOTO_ART[sp]) {
    return <img src={"art/" + sp + ".png"} alt="" style={{ ...style, objectFit: "contain" }} />;
  }
  return (
    <svg viewBox="0 0 64 64" style={style}>
      {d.juv ? <g transform="translate(6.4, 9) scale(.8)">{ART[d.art](er)}</g> : ART[d.art](er)}
    </svg>
  );
}

console.log("[part87] the animals are out there: "
  + Object.keys(MAPS).filter((k) => roamCap(MAPS[k], "grass") + roamCap(MAPS[k], "water") > 0).length
  + " maps hold them | most on one map: "
  + Object.keys(MAPS).reduce((n, k) => Math.max(n, roamCap(MAPS[k], "grass") + roamCap(MAPS[k], "water")), 0)
  + " | they are drawn on the map and bumping one starts that encounter");
