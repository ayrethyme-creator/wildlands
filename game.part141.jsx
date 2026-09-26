// ---------- Part 141: THE ELITE FOUR, WITHOUT A NURSE ----------
// 2026-09-26. Ayr: "the elite 4 in pokemon does not allow you to go to the
// poke center to heal. You have to use items. Do this. If it's too hard,
// lower the level of their pokemon. Not being able to heal adds a lot of
// challenge."
//
// THE RUN. It begins when the first Elite falls and ends when the Champion
// does. In between:
//   - the Summit Citadel's Care Center is closed (part4),
//   - the Sanctuary will not swap a fresh animal in (part5),
//   - and leaving the Citadel by any road - walking out, Soaring, blacking
//     out - ends the run: every Elite takes their seat again and it starts
//     from the first (part4). The written exams stay passed.
// Items still work, and the Citadel's shop is still open: that is the point.
//
// THE LEVELS came down to match (part3): 65-69 for the Four, 70-72 for Zuri.
// With no healing between them, 66-75 asked a team that arrives from the
// Victory Trail at about 62-64 to climb a wall; this is still above anything
// else before the Champion (64 at most), which was the first rule.

const ELITE_SEATS = ["summit:7,9", "summit:7,7", "summit:7,5", "summit:7,3"];

// True from the first Elite beaten until the Champion is.
const leagueRun = (st) => {
  const b = (st && st.trainersBeaten) || {};
  return !b["summit:7,1"] && ELITE_SEATS.some((k) => b[k]);
};
