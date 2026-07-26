// ---------- Part 48: BEELOUD CLEARING, ON THE GROUND ----------
// The first arc placed in the world. Everything here is a `chat` NPC or an
// examinable spot — nothing fights, nothing blocks, and none of it is required
// to reach the gym. A player who walks straight past will simply never know
// Thabo had a problem, which is its own quiet point.

(() => {
  const put = (key, def) => { TRAINERS[key] = { chat: true, ...def }; };

  // ---- Thabo Sithole, on the south edge of the clearing ----
  // He is not angry at the animal and the game should establish that in his
  // first breath, because the whole arc collapses if he reads as a villain.
  put("seg_m4:11,10", {
    name: "Thabo Sithole",
    em: "🧑🏿‍🌾",
    line: "You are here about the badger. Everyone is here about the badger. "
        + "Let me tell you what nobody from the station has asked me yet — I do not hate that animal. "
        + "My grandfather kept bees on this ground and he lost hives too, and he did not hate it either. "
        + "What I hate is that I have nine fewer colonies than I had in March, and a debt at the co-operative. "
        + "If somebody can tell me how to have forty hives AND a badger, I will shake their hand. "
        + "Nobody has. So I have a rifle.",
    arc: "beeloud",
    // Asking about the money rather than the animal is the finding. It is
    // deliberately the least obvious question to ask a man complaining about
    // wildlife.
    learns: { key: "loss",
      text: "📓 Thabo: \"A colony? Producing, established, a good one — about twelve hundred. "
          + "Nine of them since the rains. I borrowed against this year's honey before I knew.\"\n\n"
          + "You write it down. It is the first thing anyone has written down." },
  });

  // ---- the wrecked outer hives ----
  put("seg_m4:13,8", {
    name: "Wrecked hives",
    em: "🍯",
    line: "Four hives on the outer row, all of them knocked flat. The brood comb is torn out. "
        + "The stand legs are rough-sawn timber, and there are fresh claw marks running right up them.",
    arc: "beeloud",
    learns: { key: "climbs",
      text: "📓 She climbs. The legs are rough timber and she can get a grip on them all the way to the lid.\n\n"
          + "Whatever you do about this, it has to be something she cannot hold on to." },
  });

  // ---- the untouched inner hives ----
  put("seg_m4:4,8", {
    name: "The old hives",
    em: "🐝",
    line: "The inner rows. Older stands, greyer timber, hives still standing. "
        + "Nothing here has been touched this season — but the legs carry claw marks so old the wood has healed around them.",
    arc: "beeloud",
    learns: { key: "history",
      text: "📓 These marks are years old. She did not arrive this year.\n\n"
          + "She has always been here. The hives came to her." },
  });

  // ---- which rows go ----
  put("seg_m4:6,10", {
    name: "The hive rows",
    em: "📋",
    line: "You walk the rows and count. Forty stands. Nine wrecked, and every single one of them "
        + "on the two outer rows nearest the treeline. The inner rows have not lost a hive all year.",
    arc: "beeloud",
    learns: { key: "edges",
      text: "📓 Only the outer rows, nearest the trees. She is not raiding an apiary — she is raiding "
          + "the edge of one, and coming no further into the open than she has to." },
  });

  // ---- the den ----
  put("seg_m4:2,10", {
    name: "Under the marula roots",
    em: "🌳",
    line: "A worn track runs from the treeline to a gap under the marula roots. "
        + "Something has been going in and out of here every night for weeks. "
        + "You lie flat and wait, and eventually two small heads look back at you.",
    arc: "beeloud",
    learns: { key: "nursing",
      text: "📓 Two cubs, maybe ten weeks. She is nursing.\n\n"
          + "She is not wrecking nine hives out of spite. She is feeding three animals "
          + "on whatever she can open in a night." },
  });

  // ---- Amara, at the base ----
  put("town1:6,4", {
    name: "Prof. Amara Okonjo-Reyes",
    em: "👩🏿‍🏫",
    line: "I funded this station, I fund your boots, and I will fund whatever you can argue for. "
        + "Argue, mind. I have been pitched forty-one projects this year and I funded six. "
        + "The other thirty-five were people who loved animals very much and had no idea what they were asking me to buy. "
        + "Love them on your own time. In here, show your working.",
    pitchArc: "beeloud",
  });

  // ---- Zuri, at the end of the region ----
  put("town2:13,11", {   // beside the arena door, where she waits to see what you built
    name: "Zuri",
    em: "🧑🏽‍✈️",
    line: "You want to hand a farmer some steel and call it conservation. I want a fence, a warden and a law with teeth. "
        + "Here is what I actually think, since you keep asking — your way is better when it works. Mine works more often. "
        + "I would rather have a living population behind a fence than a beautiful partnership that falls apart "
        + "the first bad season and leaves nothing at all. Prove me wrong. Genuinely. I would like to be wrong.",
  });

  console.log("[part48] Beeloud Clearing placed: 5 findings, Amara, Zuri");
})();
