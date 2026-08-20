// ---------- Part 52: THE CATS OF REEDWATER ----------
// Arc two, and deliberately a different shape from arc one.
//
// Beeloud was one man, one animal, one physical fix. This is fifty households
// and no villain at all — the cats are doing what cats do, the people love
// their cats, and the fen is losing ground-nesting birds. Nobody here is even
// slightly in the wrong, and there is no barrier you can build.
//
// The real answer is not a fence. It is a collar cover in a colour birds see
// well and cats do not care about, plus keeping cats in at dawn and dusk when
// most hunting happens. It works because it changes what the BIRD can see, not
// what the cat can do — which is why cat owners accept it when they will not
// accept keeping a cat indoors.
//
// Accuracy note: the trials on collar covers report large reductions in birds
// caught and much smaller effects on mammals, which is why the dialogue says
// "birds mostly" rather than quoting a figure. Nobody in this arc claims a
// number that is not in the literature.

ARCS.reedwater = {
  region: 2,
  title: "The Cats of Reedwater",
  where: "route2",
  blurb: "The fen is losing its ground-nesters. Fifty households have cats, and every one of them is loved.",

  evidence: {
    counts: {
      label: "What the fen is actually losing",
      detail: "Warden's counts: lapwing and reed bunting down by half in six years. Ducks and geese unchanged.",
      how: "Ask the fen warden what she is counting, and over how long.",
    },
    when: {
      label: "When they hunt",
      detail: "Dawn and the hour after dusk, overwhelmingly. Almost nothing in the middle of the day.",
      how: "Sit with the warden through a dawn and a dusk.",
    },
    who: {
      label: "Which cats, and how many",
      detail: "Fifty-one households on the fen edge. Most cats stay in the gardens. Eleven regularly cross into the reeds.",
      how: "Walk the fen edge at dusk and see whose cats are where.",
    },
    bells: {
      label: "Whether bells work",
      detail: "Half the cats here already wear bells and the counts fell anyway. The evidence for bells is thin.",
      how: "Look at what the cats are already wearing.",
    },
    owners: {
      label: "What the owners will actually agree to",
      detail: "Nobody will keep a cat in permanently. Almost everybody will put something on a collar, "
            + "and about half will bring a cat in overnight if asked properly.",
      how: "Knock on doors along the houses on the fen edge. Ask, do not tell.",
    },
  },

  proposals: {
    collars: {
      label: "Bright collar covers, and a dawn-and-dusk ask",
      needs: ["counts", "when", "owners"],
      cost: 0,
      works: true,
      pitch: "A wide collar cover in a colour birds pick out early. It does nothing to the cat and it does "
           + "not stop it hunting mice — but a lapwing sees it coming and goes. Pair it with asking people "
           + "to bring cats in at dawn and dusk, which is when almost all of it happens.",
    },
    indoors: {
      label: "Ask everyone to keep their cats indoors",
      needs: ["counts"],
      cost: 0,
      works: false,
      pitch: "The cleanest answer. No cat in the reeds, no cats taking birds.",
      why: "Eleven households agreed. Four lasted a month. One man kept his cat in for six weeks and it "
         + "sprayed the house and cried at the door until three in the morning, and he let it out, and "
         + "he has not spoken to the station since.\n\nA solution that only works if everyone complies "
         + "forever is not a solution. It is a wish.",
    },
    bellsOnly: {
      label: "Hand out bells",
      needs: [],
      cost: 0,
      works: false,
      pitch: "Cheap, easy, everyone already understands it.",
      why: "Half of them were already wearing bells. The counts fell anyway.\n\nIt was the easy answer and "
         + "you did not check whether it was the right one — which is the whole reason she makes you bring "
         + "her evidence.",
    },
    trap: {
      label: "Trap and remove the cats that cross into the reeds",
      needs: [],
      cost: 0,
      works: false,
      pitch: "Eleven cats are doing most of it. Remove those eleven.",
      why: "They are somebody's cats. The first one you take is somebody's, and by the evening the whole "
         + "fen edge knows what the station does, and nobody opens a door to you again.\n\nThe birds needed "
         + "fifty-one households on your side. You have none.",
    },
  },

  outcome: {
    good: "Thirty-eight collars out, and the warden says the reed bunting nests came off better this spring "
        + "than the last three. It is one season and she will not call it proof — she has written it down, "
        + "which is what she can do.\n\nThe cats do not care. Not one of them has noticed.",
    bad: "It did not hold. The warden is still counting, the birds are still going, and the fen edge is "
       + "warier of you than it was.\n\nNothing is finished. What do we try instead?",
  },
};

console.log("[part52] arc two loaded:", ARCS.reedwater.title,
  "|", Object.keys(ARCS.reedwater.evidence).length, "findings,",
  Object.keys(ARCS.reedwater.proposals).length, "proposals");

// ---- placed in the world ----
(() => {
  const put = (key, def) => {
    const [map, xy] = key.split(":");
    const [x, y] = xy.split(",").map(Number);
    const M = MAPS[map];
    if (!M || !M.rows[y]) { console.warn("[part52] no tile at", key); return; }
    if (M.rows[y][x] !== "R" && M.rows[y][x] !== "V") {
      M.rows[y] = M.rows[y].slice(0, x) + "R" + M.rows[y].slice(x + 1);
    }
    TRAINERS[key] = { chat: true, ...def };
  };

  // The warden, on the fen. She is the one with the numbers, and she is tired.
  put("route2:3,1", {
    name: "Warden Beatrix Nel",
    em: "👩🏼‍🌾",
    line: "You'll be from the station. Let me guess — somebody's told you the fen is fine.\n\n"
        + "It is not fine. It is the ground-nesting birds — lapwing, reed bunting — and it is the cats.\n\n"
        + "I have walked this transect every April for nineteen years and I can tell you "
        + "what is not here any more. And the first thing everyone says to me is that cats have always "
        + "been here, which is true, and useless, because there were nine houses on that edge when I "
        + "started and there are fifty-one now.",
    arc: "reedwater",
    // Beatrix is the one with the problem and the one who walks the transect,
    // so the funded work goes in with her.
    builds: "reedwater",
    buildLine: "Amara signed it off? Right. Then let us get it on the collars before the lapwings come back.",
    learns: { key: "counts",
      text: "📓 Beatrix: \"Lapwing down by half in six years. Reed bunting the same. Ducks and geese are "
          + "fine — they nest on water and they are big enough to argue.\"\n\n"
          + "It is the ground-nesters. It is only ever the ground-nesters." },
  });

  // Moved off route2, which already carries Beatrix herself. The road is where
  // you are told about the problem; the boardwalk out into the fen is where you
  // start finding it, and this fills the one screen of that walk that was bare.
  put("seg_w2:4,10", {
    name: "The fen edge at dusk",
    em: "🌾",
    line: "You walk the boundary as the light goes and count what crosses. Most of the cats on this edge "
        + "never leave their own gardens. A handful go straight through the fence line and into the reeds "
        + "like they have somewhere to be, because they do.",
    arc: "reedwater",
    learns: { key: "who",
      text: "📓 Fifty-one households. Eleven cats regularly working the reeds.\n\n"
          + "It is not fifty-one problems. It is eleven — but you will need all fifty-one households "
          + "on your side to fix those eleven." },
  });

  // Spread along the fen rather than all on one screen. Everything here is
  // still Reedwater water - the crossing, the bend and the approach are the
  // same fen as route2 - so the fiction holds and gathering it is a walk.
  put("seg_w1:6,3", {
    name: "Dawn and dusk",
    em: "🌅",
    line: "You sit out a dawn with Beatrix, and then a dusk. Almost everything happens in those two hours. "
        + "Through the middle of the day the reeds are quiet and the cats are asleep on somebody's windowsill.",
    arc: "reedwater",
    learns: { key: "when",
      text: "📓 Dawn and the hour after dusk, overwhelmingly.\n\n"
          + "Which means you do not have to ask anyone to keep a cat in. You have to ask them to keep it in "
          + "twice, briefly, at times most of them are asleep anyway." },
  });

  put("seg_w3:7,4", {
    name: "What the cats are wearing",
    em: "🔔",
    line: "You get close enough to look at collars. Roughly half of them already have a bell on. "
        + "Somebody clearly did this before, or the owners did it themselves because everybody knows "
        + "bells are what you do.",
    arc: "reedwater",
    learns: { key: "bells",
      text: "📓 Half of them already wear bells, and Beatrix's counts fell anyway.\n\n"
          + "The evidence for bells was never strong. It is the answer everybody reaches for because it "
          + "is cheap and it feels like doing something." },
  });

  // The households on the fen edge, and where you find out what people will
  // accept. This used to be placed on the "rescue" map because the arc calls
  // this row of houses Rescue Row - but there is already a map of that name,
  // Rescue Row in the hearth zone, which is the animal rescue at the end of the
  // kennel chain at level 56-60. Reedwater is a region 2 arc, so its fifth
  // finding sat about fifty levels of progression away and could not be
  // collected. The houses on the Delta Approach are the fen's own edge, and
  // in region 2 where the rest of the arc is.
  put("seg_w4:9,1", {
    name: "Mr Adeyemi",
    em: "🧓🏿",
    line: "Cats. Right. I've been waiting for somebody to come about the cats.\n\n"
        + "Before you start — I know what she does. Beatrix showed me a photograph of a lapwing chick "
        + "in 2019 and I have not forgotten it. I am not the enemy here.\n\n"
        + "But I am not keeping her in. She's fourteen, she's been going out that door her whole life, "
        + "and I am not spending her last years listening to her cry at it. Tell me something else and "
        + "I will do it today.",
    arc: "reedwater",
    learns: { key: "owners",
      text: "📓 You knock on eleven more doors and get the same answer eleven times, in different words.\n\n"
          + "Nobody will keep a cat in permanently. Almost everybody will put something on a collar. "
          + "About half will bring a cat in overnight if you ask properly and explain why.\n\n"
          + "They are not refusing to help. They are refusing one specific thing." },
  });

  console.log("[part52] Reedwater placed: 5 findings across four maps of the fen");
})();
