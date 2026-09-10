// ---------- Part 90: ZURI TURNS UP ----------
// Ayr: the rival turning up unannounced on a route instead of on a fixed tile.
//
// Zuri stands on five tiles in the whole game - route1, route3, route5, route7
// and the summit - and between them she does not exist. She is supposed to be
// the person walking the same trail as you, a step behind and loud about it,
// and instead she is scenery that activates at five coordinates. You always
// know where she is, which means she is never news.
//
// So she also just turns up. Somewhere out in the country, once a chapter,
// while you are on your way to something else.
//
// WHY THIS ONE ASKS AND THE FIXED TILES DO NOT
// --------------------------------------------
// You cannot flee a trainer battle. That is right for the five tiles - she is
// stood in the road and getting past her IS the chapter - but it is a trap for
// an ambush. A rival who appears without warning, on the step after a fight you
// only just survived, and cannot be declined, is not tension: it is the game
// taking your save away. part4 already carries a scar of exactly that shape
// from an enemy that never ran out of PP.
//
// Two guards, and they are the whole reason this is safe to ship:
//   1. she asks, and "not now" costs nothing at all
//   2. she does not appear unless something in your party is above half health
//
// The second one matters more than the first. Being ASKED to fight a battle you
// cannot win is still a bad moment, even if you can say no - it is the game
// offering you something it knows is not for you. So she waits until you are in
// a state to be challenged, which is also just what a person would do.
//
// ONCE A CHAPTER. Tracked against the badge count, so she turns up about as
// often as the game changes gear. Any more and the ambush becomes a tax on
// walking; any less and it never happens to you at all.

// Where she has been, in her own voice. She is behind you and cheerful about
// it, which is the whole character - she is not a bully, she is a friend who
// keeps losing and keeps coming back with a better team.
const ZURI_ROAM = [
  "🏃 Zuri: \"HA! Knew it was you — I could hear you coming a field away. I've been walking since dawn and I have not seen ONE thing worth writing down. Then you turn up. Typical.\"",
  "🏃 Zuri: \"Oh good, a witness. I've just been beaten by a gym leader, a rock, and a bird, in that order. My mood is EXCELLENT. Battle me.\"",
  "🏃 Zuri: \"Don't say it. I know you're ahead. I looked at the board in town and I made a NOISE.\"",
  "🏃 Zuri: \"I've been following your footprints for an hour thinking they were something rare. That is the single most insulting thing that has ever happened to me.\"",
  "🏃 Zuri: \"You know what I've worked out? You're not better than me. You just go OUTSIDE more. Right. Fixing that. Starting now.\"",
  "🏃 Zuri: \"Two hours I sat in that grass. Two. For one animal, which left. And here you are strolling about like the place belongs to you.\"",
  "🏃 Zuri: \"There you are! I've got something new on the team and if I don't show someone I'll burst.\"",
  "🏃 Zuri: \"Fancy meeting you in the middle of absolutely nowhere. Suspicious, honestly. Are you following ME?\"",
];

// Her team out here tracks the chapter you are in rather than a fixed tile, so
// she is always the right size to be a real fight and never a wall.
const rivalRoamStage = (badges) => Math.min(4, Math.max(1, Math.ceil((badges || 0) / 3)));

const ZURI_MIN_STEPS = 220;        // walking between one meeting and the next
const ZURI_CHANCE = 1 / 260;       // per step of open country

/* Is she about to walk round the corner?

   Everything here is a refusal, in the order that makes the cheapest one first.
   The only positive is the last line. */
const rivalRoamDue = (st) => {
  if (!st || st.screen !== "world" || st.battle || st.dialog || st.menu) return false;
  if (!(st.badges > 0)) return false;                       // not before the first badge
  const m = (typeof MAPS !== "undefined") && MAPS[st.map];
  if (!m || !m.pool || !m.pool.length) return false;        // open country only, never a town
  if (m.dark) return false;                                 // and not in a cave
  if (typeof GYMS !== "undefined" && GYMS[st.map]) return false;

  // Once a chapter.
  const met = st.metRival || {};
  if (met[st.badges]) return false;

  // Not on top of the last one, however the badge count moved.
  const steps = st.steps || 0;
  if (steps - (met.at || 0) < ZURI_MIN_STEPS) return false;

  // THE GUARD THAT MATTERS. She does not challenge somebody who is in no state
  // to be challenged.
  const fit = (st.party || []).some((a) => a.hp > a.maxHp * 0.5);
  if (!fit) return false;

  return Math.random() < ZURI_CHANCE;
};

const rivalRoamLine = (st) => {
  const i = Math.floor(((st && st.steps) || 0) / 7 + (st && st.badges || 0)) % ZURI_ROAM.length;
  return ZURI_ROAM[i];
};

console.log("[part90] Zuri walks the trail too: " + ZURI_ROAM.length + " things to say"
  + " | at most once per badge, and never below half health"
  + " | roughly one meeting per " + Math.round(1 / ZURI_CHANCE) + " steps of open country");
