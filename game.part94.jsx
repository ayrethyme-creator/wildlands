// ---------- Part 94: ZURI WANTS SOMETHING ----------
// The fourth of the four. Zuri is the most underused thing in this game: a
// warm, funny character who turns up, loses, and cheers up. She has no want and
// nothing changes about her, so she is a mood rather than a person.
//
// So give her one want and let it break.
//
// WHAT SHE WANTS: to be the one who settles the guardians. Not to beat you -
// that is what she SAYS, loudly, and it is cover. She has heard the same story
// you have and she wants to be the person it happens to.
//
// WHAT HAPPENS: you get there first. You are going to; the game is built that
// way, she loses five set-piece battles by design, and pretending otherwise
// would be a lie the player can see through. So the arc is not whether she gets
// it. It is what she does about not getting it.
//
// AND SHE IS NOT THE VILLAIN, because part47's rule holds everywhere and it
// holds hardest here. The obvious cheap move is to have her turn bitter and
// become the antagonist, and it would be the worst thing this game could do to
// itself. Wanting something and not getting it does not make a person wicked.
// It makes them a person. She is upset for exactly as long as a real friend is
// upset, and then she is the one who tells everyone what you did.
//
// It costs no new state: badges and legends are already kept, and part90
// already put her out on the trail.

/* Her roaming lines, in five stages, driven by how far the guardian thread has
   got rather than by the badge count alone - so what she says tracks the story
   and not just your progress.

   Stage 0 is the game as it is now: nothing has started, she is just about.
   Stage 4 is after all three. */
const ZURI_ARC = [
  // 0 — before the land is visibly wrong
  [
    "🏃 Zuri: \"HA! Knew it was you — I could hear you coming a field away. I have been walking since dawn and I have not seen ONE thing worth writing down. Then you turn up. Typical.\"",
    "🏃 Zuri: \"Oh good, a witness. I have just been beaten by a gym leader, a rock, and a bird, in that order. My mood is EXCELLENT. Battle me.\"",
    "🏃 Zuri: \"Fancy meeting you in the middle of absolutely nowhere. Suspicious, honestly. Are you following ME?\"",
  ],
  // 1 — she has noticed
  [
    "🏃 Zuri: \"Did you see the ring out on the flats? I paced it. Nine across. I have been telling people and they keep saying 'fairy ring' in a very calm voice.\"",
    "🏃 Zuri: \"Something's up with this place and everyone's decided it's fine. It's NOT fine. I'm going to find out what it is before you do, obviously, but mainly I want to know.\"",
    "🏃 Zuri: \"I've started a notebook. Don't laugh. YOU have a whole field guide, I'm allowed a notebook.\"",
  ],
  // 2 — she has worked out what she wants
  [
    "🏃 Zuri: \"Three guardians. Three things going wrong. I did the maths in the bath and nearly drowned.\n\nI'm going to be the one who settles them. I've decided. It's happening.\"",
    "🏃 Zuri: \"Right — how many badges have you got? ...Don't answer that. Forget I asked. Battle me instead, I need the practice and you need the humbling.\"",
    "🏃 Zuri: \"I went up to the altar. It's cold and it counts your badges and it did NOT like my number. So that's my week planned.\"",
  ],
  // 3 — you are getting there first, and she knows
  [
    "🏃 Zuri: \"You've done one, haven't you. I can tell because the grass out east is GREEN and I have been staring at it like an idiot for an hour.\n\n...Good. That's good. I'm being normal about it.\"",
    "🏃 Zuri: \"I'm going to say a true thing and then we're never mentioning it. I wanted it to be me.\n\nRight. Done. Battle?\"",
    "🏃 Zuri: \"Everyone in town is talking about you. I told them I taught you everything you know, which is a LIE, and they believed it, which is worse.\"",
  ],
  // 4 — after all three
  [
    "🏃 Zuri: \"There she is. The one who fixed the world.\n\nI've been going round telling people what you did, in detail, at length, until they leave. Somebody has to and you're rubbish at it.\"",
    "🏃 Zuri: \"I've worked out what I'm for, by the way. I'm not the one who does the enormous thing. I'm the one who notices it first and won't shut up about it.\n\nThat's a job. Acacia says it's a job.\"",
    "🏃 Zuri: \"Battle me. Not for anything. Just because it's nice out and you're here.\"",
  ],
];

/* Which stage she is at. Guardians settled matter most, because they are what
   she wants; badges move her along before any are done, because that is the
   part of the story she can see happening. */
const zuriStage = (st) => {
  if (!st) return 0;
  const done = ["qilin", "thunderbird", "phoenix"].filter((k) => st.legends && st.legends[k]).length;
  if (done >= 3) return 4;
  if (done >= 1) return 3;
  const b = st.badges || 0;
  if (b >= 5) return 2;
  if (b >= 2) return 1;
  return 0;
};

// One line, stable for a given moment so she does not change her mind halfway
// through a conversation.
const zuriLine = (st) => {
  const set = ZURI_ARC[zuriStage(st)] || ZURI_ARC[0];
  const i = Math.floor(((st && st.steps) || 0) / 7) % set.length;
  return set[i];
};

/* THE ONE SHE DOES NOT WANT TO FIGHT.

   At stage 3 - you have settled one, she has settled none - she turns up and
   does not ask for a battle at all. That is the whole arc in one meeting: the
   character whose only mode is "fight me" has a day when she does not want to,
   and says so, and it lands precisely because every other meeting was a
   challenge.

   Once, and only once. A friend who is sad at you every time is a different and
   much worse character. */
const zuriQuietDue = (st) => zuriStage(st) === 3 && !(st && st.zuriTalk);

const ZURI_QUIET =
  "🏃 Zuri sits down on a rock without being asked.\n\n"
  + "\"Not battling. Just sitting. You can go if you want.\"\n\n"
  + "She pulls up a stem of grass and shreds it.\n\n"
  + "\"I had this whole thing planned. Me, the altar, everyone finding out. I'd got as far as what I'd say.\n\n"
  + "And then I watched you do it, and the honest truth is you were better at it than I would have been, and I've spent three days deciding whether I'm allowed to be pleased about that.\"\n\n"
  + "She throws the grass away.\n\n"
  + "🏃 Zuri: \"Verdict: I'm allowed. Took ages though.\n\nRight. Two left. Go on — I'll tell everyone you're coming.\"";

console.log("[part94] Zuri wants something: " + ZURI_ARC.length + " stages, "
  + ZURI_ARC.reduce((n, s) => n + s.length, 0) + " lines"
  + " | driven by guardians settled, then badges"
  + " | one meeting where she does not want to fight, once");
