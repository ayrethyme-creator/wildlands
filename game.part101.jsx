// ---------- Part 101: SIT STILL AND THEY COME BACK ----------
// Ayr, in the endgame, collecting the last of the roster: "It's very grindy and
// repetitive. Is there a way we can make it feel different without making it
// more difficult" - then, choosing between the options: "The wait mechanic
// seems the coolest to me. When you are not in a town and just sitting in grass
// or water, the animals will come to you."
//
// WHY THIS IS THE RIGHT FIX AND NOT JUST A RATE TWEAK. By the endgame the
// player is not failing to CATCH anything - they are failing to FIND it. The
// grind is the search, and the search has exactly one verb in it: walk through
// grass until the dice come up. Every other lever (raise the rate, widen the
// pool, hand out a better treat) leaves that verb alone and just shortens the
// same activity. This replaces it. You stop, you wait, and the country comes
// to you - which is also what actually happens, and is most of what field
// craft is. The nearest thing to it the game already had is the Champion's
// Compass, and that steers what arrives rather than how you go looking.
//
// THIS FILE OWNS THE POLICY; part4 OWNS THE CLOCK. part4 cannot delegate the
// timer - stillness is measured in real seconds and only the component knows
// when a key was last pressed - but everything else is decided here, behind a
// single function, so the rules can move without touching the movement code.
//
// NOTHING ABOUT THE ENCOUNTER ITSELF IS REIMPLEMENTED. waitingSpot only says
// "yes, here, this kind"; part4 then calls the ordinary rollEncounter, so
// weather, the per-save ecology, per-patch pressure, events, the night pools,
// the Compass and a live trail all apply exactly as they do on foot. A rate
// multiplier is the only difference, and it is the only number here that
// changes the odds of anything.

// How long you have to be genuinely still before the first one shows. Long
// enough that stopping to read a sign or think about where to go next is not
// mistaken for sitting down; short enough that the pause does not feel like a
// punishment. Counted from the last input of any kind, including walking into
// a wall, because bumping a tree is not sitting quietly.
const WAIT_SETTLE = 3500;

// What waiting is worth, against the ordinary chance of a step. The base rate
// is .1 in grass and .08 in water, rolled here about once a second, so 3.5x
// puts the first arrival somewhere near four seconds after you settle - call
// it seven or eight from the moment you stop. That is a deliberate improvement
// on walking rather than a match for it: Ayr asked for different-but-not-
// harder, and a hide that paid the same as pacing would just be pacing with
// extra steps. It is also the one line to change if it turns out too fast.
const WAIT_RATE = 3.5;

/* Where sitting works, and what kind of water or grass it is.

   TOWNS ARE OUT BY NAME, as asked - but it is worth writing down that they were
   already out by accident: no town map defines a pool at all, and rollEncounter
   returns early without one, so a pond in Baobab Base was never going to
   produce anything. The explicit test is here so the rule is a rule rather than
   a side effect of how the towns happen to be written, and so it still holds if
   a town ever gets a pool of its own.

   The tall-grass test mirrors rollEncounter's own pool choice exactly,
   including the night pool, so a patch that can produce nothing while you walk
   through it cannot produce anything while you sit in it either. */
const waitingSpot = (st, idleMs) => {
  if (!st || st.screen !== "world") return null;
  if (st.dialog || st.menu || st.battle) return null;
  if (idleMs < WAIT_SETTLE) return null;

  const key = st.map;
  if (typeof MAPS === "undefined" || !MAPS[key] || !MAPS[key].rows) return null;
  if (key.indexOf("town") === 0) return null;
  if (typeof TOWN_LIST !== "undefined" && TOWN_LIST.some(([k]) => k === key)) return null;

  const m = MAPS[key];
  const ch = (m.rows[st.y] || "")[st.x];

  if (ch === "G") {
    const pool = (typeof isNight === "function" && isNight() && m.poolN) ? m.poolN : m.pool;
    return pool ? { kind: "grass", rate: WAIT_RATE } : null;
  }
  // You can only be standing on water if you are already swimming - the walk
  // rule in part4 allows "W" on no other terms - so this is belt and braces.
  if (ch === "W" && st.swimming) {
    return m.poolWater ? { kind: "water", rate: WAIT_RATE } : null;
  }
  return null;
};

/* Said once, the first time a player settles somewhere it works, because
   otherwise the whole mechanic is invisible: there is no button for it and
   nothing on screen says the grass is worth sitting in. Once per session
   rather than once per save - it costs nothing to be reminded, and it avoids
   touching the save format for a hint. */
const WAIT_HINT = (kind) => kind === "water"
  ? "You stop swimming and simply float, letting the water go flat around you.\n\nStay still long enough and you stop being an event. Things come back."
  : "You stop, and stay stopped. The grass closes back over your knees.\n\nStay still long enough in wild country and you stop being an event. Things come back out.";

console.log("[part101] sitting still works in tall grass and open water outside towns"
  + " | settle " + WAIT_SETTLE + "ms, then about one roll a second at " + WAIT_RATE + "x"
  + " | weather, ecology, pressure, events, night pools, the Compass and trails all still apply");
