// ---------- Part 107: THE FIVE GYMS NOBODY NEEDED ----------
// Ayr, 2026-09-24: "There's a bug that's been there for a long time. When you
// go into a room to the left that has grass in it, it has an entrance to the
// left that leads you to a room where the local gym is. It's a [weird] room,
// and there's one every region." And, when asked how to fix it: "I've never
// had to battle those gyms. I think they are just duplicates. Check again."
//
// Checked, and Ayr was right. Winning a gym sets your badges to
//   Math.max(badges, that gym's number)            (part4, battle end)
// so beating Delta Town - gym 3 - straight after Marula - gym 1 - jumps you to
// three and gym 2 is simply stepped over. Five gyms sat off the main road and
// every one of them could be skipped this way, and was:
//
//   2  Keeper Wren       Thornwood Apiary     behind Bramble Thicket
//   5  Tide-Warden Sipho  Tidewater Cove       on the main road
//   6  Arborist Kaia     Highcanopy Station   behind Emerald Canopy Walk
//   10 Kepler Inuk       Frostwatch Station   behind Hoarfrost Tundra
//   12 Falconer Sable    Windward Eyrie       behind the peak
//
// Worse than pointless, they misled: after your first badge Prof. Acacia sent
// you to "Badge 2 ... in Thornwood Apiary", a walled room behind a side room.
// Ayr chose to remove them.
//
// THE INTERNAL NUMBERS DO NOT MOVE. Badge numbers are load-bearing across the
// game - the shop stocks by them, Swim and Soar and boulder-pushing unlock on
// them, the legends and the Elite Four wait for the last one, and every save
// stores the highest one it has reached. Renumbering would have shifted the
// meaning of all of those at once and meant converting every save. Instead the
// eight town gyms keep the numbers they have always had (1,3,4,7,8,9,11,13),
// progression is exactly what it was, and what the PLAYER SEES becomes "badge
// 2 of 8". The display helpers below are the only place the difference lives.
//
// Nothing is lost: none of the four rooms holds an animal that lives nowhere
// else, and the one person in them - Dr. Diane Ferris - moves out into Emerald
// Canopy Walk under the identity she has always had, so a save that beat her
// still has.

const REMOVED_GYMS = ["apiary", "tidewater", "highstation", "frostwatch", "eyrie"];
REMOVED_GYMS.forEach((k) => { delete GYMS[k]; });

// The gyms that remain, in order. Everything the player reads about badges is
// counted against this list, never against the internal numbers.
const GYM_LIST = Object.keys(GYMS).map((map) => ({ map, g: GYMS[map] })).sort((a, b) => a.g.id - b.g.id);
const BADGES_TOTAL = GYM_LIST.length;
const LAST_GYM_ID = GYM_LIST.length ? GYM_LIST[GYM_LIST.length - 1].g.id : GYM_COUNT;
// How many badges a save holds, as the player counts them: the real gyms at or
// below its internal number.
const badgesShown = (b) => GYM_LIST.filter((e) => e.g.id <= (b || 0)).length;
// The next gym a save actually has to beat, or null once all are done.
const nextGymAfter = (b) => GYM_LIST.find((e) => e.g.id > (b || 0)) || null;
const BADGE_WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

{
  // ---- close the doors into the four dead-end rooms ----
  // Each door was a tile on the side area's edge. It becomes the same wall as
  // the tiles either side of it, so the edge reads as unbroken rather than as
  // a doorway that does not open.
  const SEALED = { thicket: "apiary", canopywalk: "highstation", tundra: "frostwatch", peak: "eyrie" };
  let sealed = 0;
  Object.entries(SEALED).forEach(([from, room]) => {
    const m = MAPS[from];
    if (!m || !m.exits) return;
    Object.keys(m.exits).forEach((t) => {
      if (m.exits[t].map !== room) return;
      delete m.exits[t];
      const [x, y] = t.split(",").map(Number);
      const along = [(m.rows[y - 1] || "")[x], (m.rows[y + 1] || "")[x], m.rows[y][x - 1], m.rows[y][x + 1]];
      const wall = along.find((c) => c === "T" || c === "^") || "T";
      m.rows = m.rows.map((r, ry) => (ry === y ? r.slice(0, x) + wall + r.slice(x + 1) : r));
      sealed++;
    });
  });

  // ---- Tidewater Cove stays: it is the road to the reef, the kelp and the
  // open ocean. Only its arena goes, and the ground where it stood is ground.
  const cove = MAPS.tidewater;
  let arenaTiles = 0;
  if (cove) {
    cove.rows = cove.rows.map((r) => r.replace(/Y/g, () => { arenaTiles++; return "."; }));
  }

  // ---- Dr. Diane Ferris moves out of Highcanopy Station ----
  // Onto open ground in Emerald Canopy Walk, and only onto a tile whose loss
  // cannot cut anything off - the same test part100 applies to every person it
  // moves. Her name stays "highstation:10,2" (see part103 on why a name must
  // not follow a position), so her record and any rematch come with her.
  const walk = ".gGp*" + (typeof MAP_MARKS !== "undefined" ? MAP_MARKS : "") + "nsec";
  const reach = (rows, sx, sy) => {
    const seen = new Set([sx + "," + sy]), q = [[sx, sy]];
    while (q.length) {
      const [x, y] = q.shift();
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => {
        const nx = x + dx, ny = y + dy, k = nx + "," + ny;
        const c = (rows[ny] || "")[nx];
        if (c !== undefined && !seen.has(k) && walk.indexOf(c) >= 0) { seen.add(k); q.push([nx, ny]); }
      });
    }
    return seen;
  };
  let dianeMoved = false;
  const walkway = MAPS.canopywalk;
  if (walkway && walkway.exits && TRAINERS["highstation:10,2"]) {
    const [ex, ey] = Object.keys(walkway.exits)[0].split(",").map(Number);
    const before = reach(walkway.rows, ex, ey);
    const H = walkway.rows.length, W = walkway.rows[0].length;
    outer: for (let y = 1; y < H - 1; y++) {
      for (let x = 1; x < W - 1; x++) {
        if (walkway.rows[y][x] !== "." || walkway.exits[x + "," + y]) continue;
        const trial = walkway.rows.map((r, ry) => (ry === y ? r.slice(0, x) + "R" + r.slice(x + 1) : r));
        const after = reach(trial, ex, ey);
        if ([...before].every((k) => k === x + "," + y || after.has(k))) {
          walkway.rows = trial;
          MAP_ALIAS["canopywalk:" + x + "," + y] = "highstation:10,2";
          dianeMoved = true;
          break outer;
        }
      }
    }
  }

  console.log(`[part107] gyms: ${BADGES_TOTAL} remain (internal numbers kept: ${GYM_LIST.map((e) => e.g.id).join(",")})`
    + ` | doors sealed: ${sealed} | Tidewater arena tiles cleared: ${arenaTiles}`
    + ` | Dr. Diane Ferris moved: ${dianeMoved}`);
}
