// ---------- Part 93: THE ONE WHO WENT FIRST ----------
// Two of the four things Ayr asked for, and they turned out to be one thing.
//
// THE TABLETS. Acacia says "the old tablets speak of three guardians" in the
// first five minutes and no tablet ever appears in this game. That is the
// clearest possible symptom of the flatness: the plot names its own evidence
// and then never produces it.
//
// THE ONE WHO CAME BEFORE. A human question running the length of the trail
// that is not a fight, which is the only kind this game is allowed - part47's
// rule is that nobody is a villain, and it is right.
//
// They are the same thread, because the person who came first is the person who
// could read the tablets. So what you find out there is not a stone you cannot
// read: it is a page of somebody's notes, with their translation on it, and
// their handwriting getting worse.
//
// AND THEY WROTE THE FIELD GUIDE.
// -------------------------------
// This is the part that makes the thread cost nothing to set up. The guide has
// never had an author - I checked, there is no line anywhere claiming one - and
// the player has been reading it since the first animal they met. So the
// character is already established before their first note is found. Every
// entry on vaquita and axolotl and staghorn coral, every "one of eight
// pangolins", was theirs. You have known this person's voice for hours. You
// just did not know it was a person.
//
// Nothing here is a boss and nothing here is a chase. It is somebody's working
// papers, dropped along a route they walked before you did.

const NOTE_CH = "⁌";                 // walkable floor, like part67's marks

/* Twelve notes. They are ordered, and they are placed in the order a player
   travels rather than at fixed coordinates - see the placement below - so the
   story arrives in sequence however the world is laid out.

   Amadi is written they/them throughout, and their voice is the guide's voice,
   because it is. */
const NOTES = [
  { id: 1, t: "A page, weighted under a stone",
    s: "If you are reading this I have dropped it, which happens. Amadi — I write the entries for the field guide, the one in your pack. I am walking the whole trail to check them, because I wrote about half of it out of books and I have started to suspect the books were copying each other." },
  { id: 2, t: "A page, folded into a fork of a branch",
    s: "Correction to my own entry: the meerkat sentry does not stand up to look further. It stands up to be SEEN standing, which is a different job. Struck through and rewritten. I have been wrong in print for six years and it is a lovely feeling to fix it." },
  { id: 3, t: "A page, pressed flat under bark",
    s: "There is a circle of dead grass out on the flats. Perfectly round, about nine paces. I have sketched it. Fairy ring, everyone says, and everyone is comfortable saying it, which is how you can tell nobody knows." },
  { id: 4, t: "A page with a pressed stem in it",
    s: "Went back to the ring. It is eleven paces now. I measured the first time with the same feet.\n\nGrass does not do this. Grass is the most patient thing there is — burn it, graze it, drive on it, and it comes back. This has not come back and nothing will eat in it." },
  { id: 5, t: "A page, torn along one edge",
    s: "Thunder on the ridge for nine days out of an empty sky. I climbed to look. There is no cloud. There is a sound like a drum and the streams below are dropping.\n\nI have started keeping two notebooks: one for the animals, and one for this. I would like it very much if the second one turned out to be nonsense." },
  { id: 6, t: "A page, damp and dried again",
    s: "Sparks coming off the water at dusk, rising. I caught one in my hand and it was COLD.\n\nThree things now. A thing that will not grow, a thing that will not fall, and a thing that will not burn. I keep turning them over and they keep coming out the same shape: something that ought to turn has stopped turning." },
  { id: 7, t: "A rubbing of carved stone, folded twice",
    s: "The old tablets. Everyone quotes them, nobody has read them, and it turns out that is because the script is a dead one and there are four people alive who can make a start on it. I have made myself the fifth. Six months.\n\nFirst line, and I am fairly confident: 'Three keep the turning. When one sleeps, one part of the world forgets its work.'" },
  { id: 8, t: "A rubbing, with a translation squeezed into the margin",
    s: "Second tablet. 'The first walks where balance holds; the grass answers its feet.' That is the Qilin, and that is my ring on the flats.\n\nThird: 'The second carries the storms where they are needed.' The drum on the ridge that will not move on.\n\nFourth: 'The third burns the old to feed the new.' The wrack on the beach that has not rotted since spring.\n\nSo it is not three problems. It is one, three times." },
  { id: 9, t: "A page written in a hurry",
    s: "The tablets say the guardians answer to a proven ranger and I have assumed for a year that this is temple language for 'a worthy soul'.\n\nIt is not. There is a word in it that also appears on a boundary stone and in a fishing right. It means someone the district has AGREED IS COMPETENT. Certified. It means badges." },
  { id: 10, t: "A page, and the handwriting is worse",
    s: "Went to the first altar anyway. Cold as a step. Faint script surfaced and I could read enough of it to know it was counting something I did not have.\n\nI have no badges. I am forty-six years old, I have written a thousand entries about these animals, and the door does not open for the person who wrote the book. It opens for someone who walked the arenas.\n\nI am not going to pretend I took that well." },
  { id: 11, t: "A page, and it has been screwed up and flattened out again",
    s: "Tried the gyms. Got as far as the second and was beaten so thoroughly that the leader asked, kindly, whether I was quite all right.\n\nHere is the thing I have not written down before. I am good at watching. I have never once been good at the other part — the standing in front of someone and competing. It turns out those are not the same skill and I have spent my whole life quietly hoping nobody would notice." },
  { id: 12, t: "The last page, weighted with three stones",
    s: "So I am stopping. Not giving up — stopping, which is different and took me a month to tell apart.\n\nThe work I can do is the guide, and the guide is nearly done. The work I cannot do is the trail. Somebody is going to walk it who can do both, and when they do they will want the tablets, so I have left everything I have where they will be walking.\n\nI will be up at the hollow, finishing the last entries. Come and find me and I will tell you the rest of it. Bring the notes. — A." },
];

const NOTE_BY_ID = {};
NOTES.forEach((n) => { NOTE_BY_ID[n.id] = n; });

// mapKey -> note id. Built once at load and never saved: the maps are rebuilt
// from source every session, so this is rebuilt with them.
const NOTE_AT = {};

/* WHERE THEY GO.

   Not fixed coordinates - the notes are dealt to maps in order of how deep into
   the game the map is, so the story arrives in the order a player travels. A
   note about being beaten by the second gym leader turning up in the first
   meadow would be the whole thread told backwards.

   Placement is part67's rule exactly, and for its reason: the character is
   floor, so it can never block anything. part4 already carries a scar about a
   tile pinched off between two independently placed things. */
const placeNotes = () => {
  if (typeof MAPS === "undefined") return 0;
  const wild = Object.keys(MAPS).filter((mk) => {
    const m = MAPS[mk];
    if (!m || !m.rows || !m.pool || !m.pool.length) return false;
    if (/^town/.test(mk)) return false;
    if (/cave|shrine|rift|vig|dig|kennel|cattery|rescue|arena/.test(mk)) return false;
    return true;
  });
  // Depth first, then key, so the order is stable between sessions.
  wild.sort((a, b) => (((MAPS[a].lvl || [0])[0]) - ((MAPS[b].lvl || [0])[0])) || (a < b ? -1 : 1));
  if (!wild.length) return 0;

  let placed = 0;
  NOTES.forEach((note, i) => {
    // Spread across the whole run of the game rather than bunched at the start.
    const idx = Math.min(wild.length - 1, Math.floor((i * wild.length) / NOTES.length));
    // Walk forward from there to the first map that has room and is not taken.
    for (let step = 0; step < wild.length; step++) {
      const mk = wild[(idx + step) % wild.length];
      if (NOTE_AT[mk]) continue;
      const m = MAPS[mk];
      const H = m.rows.length, W0 = m.rows[0].length;
      let spot = null;
      for (let y = 1; y < H - 1 && !spot; y++) {
        for (let x = 1; x < W0 - 1 && !spot; x++) {
          if (m.rows[y][x] !== ".") continue;
          const at = (dx, dy) => (m.rows[y + dy] || "")[x + dx];
          const open = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            .filter(([dx, dy]) => ".gG*p".includes(at(dx, dy) || "")).length;
          if (open >= 3) spot = [x, y];
        }
      }
      if (!spot) continue;
      const [x, y] = spot;
      m.rows = m.rows.map((r, ry) => ry === y ? r.slice(0, x) + NOTE_CH + r.slice(x + 1) : r);
      NOTE_AT[mk] = note.id;
      placed++;
      break;
    }
  });
  return placed;
};

const noteHere = (mapKey) => NOTE_AT[mapKey] || null;
const notesFound = (st) => NOTES.filter((n) => st && st.notes && st.notes[n.id]);

/* What picking one up says.

   The twelfth is held back until the other eleven are in hand. Not to be
   awkward: it is the one that tells you where they are, and finding it first
   would hand you the ending of a story you had not been told. If you reach it
   early it is simply still there when you come back. */
const readNote = (id, st) => {
  const n = NOTE_BY_ID[id];
  if (!n) return null;
  if (id === 12 && notesFound(st).length < 11) {
    return { text: "📜 Three stones hold down a folded page, and the wind has not moved it in a long time.\n\nThe first line reads: \"If you have not got the others, go and get them. It will not make sense otherwise, and I have gone to some trouble.\"\n\nYou put it back under the stones.", keep: false };
  }
  return { text: "📜 " + n.t + "\n\n" + n.s, keep: true };
};

/* THE HOLLOW.

   Amadi is not placed on a map. There is no new person standing anywhere, no
   tile to conflict with, nothing to seal - the meeting is a scene that plays
   when you pick up the last note, in the place where the last note is. That is
   also better writing: they told you where they would be, and they are there.

   No fight, no reward that matters, no twist. Somebody who could not do the
   thing tells the person who can, and hands over their work. */
const AMADI_MEETING =
  "🥾 The hollow is out of the wind, and there is a camp in it that has clearly been here a while — a tarp, a kettle, and papers held down with stones in rows.\n\n"
  + "A ranger in their forties looks up from a page, sees the notes in your hand, and goes very still.\n\n"
  + "\"You found all of them.\"\n\n"
  + "🥾 Amadi: \"Sit down. I have been rehearsing this for two years and I am going to get it wrong anyway.\"";

const AMADI_TELLS =
  "🥾 Amadi: \"Right. The tablets, properly, and then you can go.\n\n"
  + "Three guardians hold three turnings — growth, weather, and decay. Not creatures that guard the world; creatures whose ordinary living IS the turning. When one stops, the thing it does stops with it. The grass forgets. The storm will not travel. Nothing rots.\n\n"
  + "They are not angry and there is nobody to blame. That was the part I got wrong for a year — I kept looking for who did it. Something has gone unquiet, and it needs somebody the country has agreed is competent to go and stand in front of it. That is not a metaphor. It is written into the stone as a legal term.\"\n\n"
  + "They push the stack of rubbings across to you.\n\n"
  + "🥾 Amadi: \"I could read the door and I could not open it. You can open it. Between us that is a whole person, which is how most things get done.\"";

const AMADI_GUIDE =
  "🥾 Amadi: \"One more thing, and then I will stop talking.\n\n"
  + "The guide in your pack. The entries — the vaquita, the axolotl, the one about the pangolin's scales being fingernails and doing nothing. Those are mine. I have been writing them for eleven years and I am nearly done.\n\n"
  + "You have been reading me the whole way here. It is a strange thing to be told, so I am telling you at the end.\"\n\n"
  + "They go back to their page.\n\n"
  + "🥾 Amadi: \"Go on. The altars are counting badges, not merit — I checked that twice, bitterly. Come back and tell me what they say. I will write it down properly.\"";

// Called here rather than inside the log below, where it would be a side
// effect hidden in a string and would vanish the day somebody quietens the
// console.
const NOTES_PLACED = placeNotes();

console.log("[part93] the one who went first: " + NOTES.length + " notes | placed on "
  + NOTES_PLACED + " maps"
  + (NOTES_PLACED < NOTES.length ? " | NOT ALL PLACED - " + (NOTES.length - NOTES_PLACED) + " had nowhere to go" : "")
  + " | the last one waits for the other eleven"
  + " | no new person is placed anywhere: the meeting is a scene where the last note is");
