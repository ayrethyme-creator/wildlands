// ---------- Part 92: THE LAND IS ACTUALLY SICK ----------
// Ayr, 2026-09-10: "I feel like there needs to be more story and plot. it's
// very flat."
//
// The story was not missing. It was BOOKENDED, and the middle was empty.
//
// Prof. Acacia's opening speech names three symptoms - grass dying in rings,
// storms knotted over the peaks, embers rising off the water - and each of the
// three guardian altars explains exactly one of them: the Qilin, whose unquiet
// sleep makes the grass forget to grow; the Thunderbird, whose chained storms
// circle without rain; the Phoenix, whose stalled renewal leaves the land
// holding its breath. That is a properly built mystery with a real answer.
//
// And then the altars wait for the full badge ladder. So it is stated in minute
// five, answered at the end, and in between - twelve badges, the whole game -
// the phrase "grass dying in rings" appears in exactly one string in the entire
// source. The land is dying and not one person mentions it.
//
// So this is not new plot. It is the plot that was already written, put into
// the middle of the game where you can see it.
//
// THE RULE THIS WORKS INSIDE
// --------------------------
// part47: everyone is behaving reasonably and there is no villain anywhere.
// That is the moral spine of the fifteen arcs and it is not up for negotiation.
// But no villain is not the same as no antagonist - THE SICKNESS ITSELF pushes
// back, and it needs nobody to blame. That is what lets the game have a second
// act without anyone in it being wicked.
//
// IT GETS WORSE, AND THEN IT GETS BETTER
// --------------------------------------
// This is the part that makes it a story rather than a mood. Each symptom
// deepens as you climb the badge ladder - and the moment you calm that
// guardian, its symptom STOPS, everywhere, for good. You do not read that you
// fixed it. You walk back through country you crossed when it was dying and the
// rings are gone.
//
// No new save state: badges and st.legends are both already kept.

const BLIGHT = {
  qilin: {
    n: "the rings", em: "🌾",
    zones: ["savanna", "savannaz", "highveld", "wetland", "grove", "outbackz"],
    // What people say about it, one line per stage. Stage 0 is never shown.
    talk: [
      null,
      "Have you seen the grass out on the flats? There's a circle of it dead, perfectly round. Fairy ring, my grandmother would have said.",
      "That's the fourth ring this month, and the first one hasn't come back. Grass grows back. That's the whole thing grass does.",
      "You can stand in one now and not see the edge of it. Nothing will graze in there. The animals go round.",
      "Half that pasture is bare and it is the wrong colour. I have farmed it for thirty years and I have never seen ground refuse.",
    ],
    healed: "The rings are greening over from the middle out. Nobody has ever seen grass come back that way, and nobody is complaining.",
  },
  thunderbird: {
    n: "the dry storms", em: "⛈️",
    zones: ["alpine", "summit", "taigaz", "tundraz", "polarz"],
    talk: [
      null,
      "There was lightning over the ridge last night out of a clear sky. No cloud in it at all. Odd, but the mountains are odd.",
      "It has been thundering up there for nine days and not one drop has fallen on us. The streams are down.",
      "The storm sits on the peak and turns. It does not come and it does not go. You can hear it from the valley all night.",
      "The high springs have stopped. The rain is all up there, going round, and it cannot get down to us.",
    ],
    healed: "It rained on the high ground for two days straight and the springs are running again. The storm went somewhere it was needed.",
  },
  phoenix: {
    n: "the cold embers", em: "🔥",
    zones: ["oceanz", "kelpz", "reefz", "volcanic", "desert"],
    talk: [
      null,
      "Sparks come up off the water at dusk. Not reflections - they rise. Pretty, honestly.",
      "The embers don't burn. I put my hand through one. It was cold, and that put me off my supper.",
      "Nothing is rotting down. The kelp wrack has sat on that beach since spring and it has not broken up.",
      "It is like the whole coast is holding its breath. Nothing new is starting. Nothing old is finishing.",
    ],
    healed: "The embers have stopped, and the wrack on the beach has gone back to earth at last. Things are ending properly again, which turns out to be a thing to be glad of.",
  },
};

const BLIGHT_KEYS = ["qilin", "thunderbird", "phoenix"];

/* How bad each symptom is right now, 0 to 4.

   Badges drive it up, and calming the guardian takes it to zero for good. The
   ladder is deliberately slow at the start: nothing at all until the second
   badge, because the opening hours belong to learning the game, and a world
   that is already visibly dying in the first town gives a new player nowhere
   to escalate to. */
const blightLevel = (st, key) => {
  if (!st) return 0;
  if (st.legends && st.legends[key]) return 0;         // calmed: over, everywhere
  const b = st.badges || 0;
  if (b < 2) return 0;
  if (b < 5) return 1;
  if (b < 8) return 2;
  if (b < 11) return 3;
  return 4;
};

// Has this one been put right? Used for the one-off line people say afterwards,
// which is the reward for the whole thread.
const blightHealed = (st, key) => !!(st && st.legends && st.legends[key]);

// Which symptom belongs to the country you are standing in, and how bad it is
// here. A zone gets at most one - three plagues at once on one map is a mess
// rather than a mood.
const blightHere = (st, zone) => {
  if (!st || !zone) return null;
  for (const key of BLIGHT_KEYS) {
    if (BLIGHT[key].zones.indexOf(zone) < 0) continue;
    const lvl = blightLevel(st, key);
    return { key, lvl, healed: blightHealed(st, key), ...BLIGHT[key] };
  }
  return null;
};

/* What somebody standing here would say about it.

   Fed into the ordinary chat NPCs rather than into new people. The world
   already has hundreds of them saying one fixed line each, and a world where
   everybody is suddenly talking about the same thing is a world where something
   is happening. They only bring it up sometimes - a village where all nine
   people say the identical sentence is a broken record, not a rumour. */
const blightTalk = (st, zone) => {
  const b = blightHere(st, zone);
  if (!b) return null;
  if (b.healed) return b.healed;
  if (!b.lvl) return null;
  return b.talk[Math.min(b.lvl, b.talk.length - 1)];
};

/* WHERE THE RINGS ARE.

   Derived from the map rather than stored, and drawn rather than written into
   the rows. part91 explains why nothing that is only a picture ever goes in the
   rows: a ring of dead grass that was solid would be a wall you could walk into
   in the middle of a field.

   Positions come from the map key, so the same field has its rings in the same
   places every time you cross it - a ring that moved when you looked away would
   read as a rendering fault rather than as a thing in the world. */
const blightHash = (s, n) => {
  let h = Math.imul(n + 1, 0x9e3779b1);
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 0x85ebca6b);
  h ^= h >>> 15;
  return (h >>> 0) / 4294967295;
};

const blightRings = (mapKey, rows, st) => {
  const m = MAPS[mapKey];
  if (!m || !rows) return [];
  const b = blightHere(st, m.zone);
  if (!b || b.key !== "qilin" || !b.lvl) return [];
  // Grass tiles only, and only ever a few: one ring at the first stage, four at
  // the worst. The point is that you notice them, not that the map is ruined.
  const grass = [];
  rows.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) if (row[x] === "G") grass.push([x, y]);
  });
  if (!grass.length) return [];
  const want = Math.min(b.lvl, 4);
  const out = [];
  for (let i = 0; i < want; i++) {
    const pick = grass[Math.floor(blightHash(mapKey + ":" + i, i * 31) * grass.length)];
    if (!pick) continue;
    if (out.some((o) => o.x === pick[0] && o.y === pick[1])) continue;
    // Bigger rings later, so the country visibly loses ground rather than
    // acquiring more spots.
    out.push({ key: mapKey + ":ring" + i, x: pick[0], y: pick[1], r: 0.55 + b.lvl * 0.12 });
  }
  return out;
};

/* THE COLD EMBERS. part67 already has an `ember` speck - it is what the
   volcanic zone uses - so this borrows the shape and makes it wrong: they rise
   off water, they are pale rather than hot, and there are more of them as it
   worsens. */
const blightSpecks = (zone, st) => {
  const b = blightHere(st, zone);
  if (!b || b.key !== "phoenix" || !b.lvl || typeof ambientSpecks !== "function") return [];
  return ambientSpecks(
    { kind: "ember", when: "any", n: 5 + b.lvl * 5, c: "#cfe6ff" },
    9311 + zone.length * 17
  );
};

// Is the sky doing the thing it should not? part5 flashes on this.
const blightStorm = (st, zone) => {
  const b = blightHere(st, zone);
  return b && b.key === "thunderbird" && b.lvl ? b.lvl : 0;
};

/* What Acacia says now, which is the thread's voice. She opened the mystery, so
   she is the one who should be tracking it - a professor who never mentions the
   thing she sent you out about is the whole problem in one person. */
const blightBriefing = (st) => {
  const done = BLIGHT_KEYS.filter((k) => blightHealed(st, k));
  const worst = Math.max(...BLIGHT_KEYS.map((k) => blightLevel(st, k)));
  if (done.length === 3) {
    return "⛺ Prof. Acacia: \"The rings are green, the high springs are running, and the wrack on the beach is rotting down like wrack should. Three guardians settled. I have been writing this up for a month and I still cannot make it sound like anything but a miracle, which is a poor word for a great deal of walking.\"";
  }
  if (!worst) return null;
  if (worst >= 4) {
    return "⛺ Prof. Acacia: \"I am not going to soften it. Every report on this desk is worse than the one under it, and the three of them are the same shape - something that ought to turn has stopped turning. The altars are open to you now. Go.\"";
  }
  if (worst >= 3) {
    return "⛺ Prof. Acacia: \"Rings, dry storms, cold embers. Three symptoms, three guardians on the tablets, and I have stopped believing that is a coincidence. Get the badges. The altars will not open for anybody less.\"";
  }
  if (worst >= 2) {
    return "⛺ Prof. Acacia: \"You have seen the rings by now. And the shepherds are telling me the high storms have not dropped rain in a fortnight. I would like very much for these to be two unrelated things.\"";
  }
  return "⛺ Prof. Acacia: \"There is a ring of dead grass out past the meadow. Perfectly circular, and the grass has not come back. Keep your eyes open out there, and tell me what you see.\"";
};

console.log("[part92] the land is actually sick: 3 symptoms across "
  + BLIGHT_KEYS.reduce((n, k) => n + BLIGHT[k].zones.length, 0) + " zones"
  + " | 5 stages each, driven by badges, and each one ends for good when its guardian is calmed"
  + " | " + BLIGHT_KEYS.reduce((n, k) => n + BLIGHT[k].talk.filter(Boolean).length + 1, 0)
  + " things for people to say about it");
