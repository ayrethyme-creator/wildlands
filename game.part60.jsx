// ---------- PART 60: THE NATURALIST'S ARCHIVE, ACHIEVEMENTS ----------
// Three additive systems, none of which touch the battle engine or the badge
// ladder: a post-Champion item that steers wild encounters toward species not
// yet in the guide, a set of achievements read straight off state that
// already exists, and a small building offering paid, reasoning-based exams
// distinct from the field exams gyms already give.

// ---- THE NATURALIST'S ARCHIVE ----
// A new building bolted onto Baobab Base's unused east wall, the same way
// part19 grafts the four habitat outposts onto their host maps: find a
// walkable border tile, cut a door through it, and drop a small interior in
// behind it.
(() => {
  const host = MAPS.town1;
  if (!host) { console.warn("[part60] no town1 to attach the Archive to"); return; }
  const W = host.rows[0].length;
  let doorY = null;
  for (const y of [3, 5, 7, 4, 6, 2, 8]) {
    if (host.rows[y] && ".gGp*".includes(host.rows[y][W - 2])) { doorY = y; break; }
  }
  if (doorY === null) { console.warn("[part60] no door row for the Archive"); return; }
  host.rows = withRow(host.rows, doorY, host.rows[doorY].slice(0, W - 1) + "e");
  host.exits = { ...host.exits, [(W - 1) + "," + doorY]: { map: "archive", x: 7, y: 1 } };

  const ARCHIVE_ROWS = [
    "^^^^^^^s^^^^^^^^",
    "^..............^",
    "^..............^",
    "^....!....!....^",
    "^..............^",
    "^......R.......^",
    "^..............^",
    "^..............^",
    "^..............^",
    "^^^^^^^^^^^^^^^^",
  ];
  MAPS.archive = {
    name: "The Naturalist's Archive", zone: "savanna", music: "town",
    rows: ARCHIVE_ROWS,
    exits: { "7,0": { map: "town1", x: W - 2, y: doorY } },
  };
  SIGNS["archive:5,3"] = "🪧 'Sit an assessment. Answer from reasoning, not memory — a lookup will not save you in here.'";
  SIGNS["archive:10,3"] = "🪧 'Every shell paid out here comes from the same trade-shell purse as everywhere else. Spend wisely.'";
  TRAINERS["archive:7,5"] = {
    name: "Archivist Sesi", em: "🧑🏾‍🏫",
    line: "\"Anyone can recite a fact. I want to know what you'd conclude from one. Sit an assessment — the harder the reasoning, the better it pays.\"",
    quizHouse: true,
  };
  console.log("[part60] Naturalist's Archive attached to town1 at door", doorY);
})();

// ---- CRITICAL-THINKING QUIZZES ----
// Every question below asks the player to reason from a scenario to a
// conclusion — infer, compare, isolate a variable, weigh a tradeoff — rather
// than recall a fact already printed in the Field Guide. That is the
// difference from a gym's written exam on purpose: those test whether you
// read the guide, these test what you'd do with what's in it. Unlike a gym
// exam, one wrong answer does not end the attempt — every question answered
// correctly pays out, so this is grindable income rather than a gate.
const CRIT_TIERS = [
  {
    id: "notes", name: "Field Notes", badge: 0, reward: 15,
    blurb: "Warm-up reasoning about ordinary animal behaviour.",
    qs: [
      { q: "Two lizards share a rocky outcrop. One is bright turquoise and slow to flee; the other is dull brown and bolts at the first sign of movement. What does the turquoise lizard's colouring most likely signal?",
        opts: ["It is toxic or unpalatable, so it doesn't need to hide", "It is simply the juvenile form of the brown lizard", "It is nocturnal and colour doesn't matter", "It has unusually poor eyesight"], a: 0,
        explain: "Bright, contrasting colour on a slow-moving animal is usually a warning label, not camouflage — it advertises that eating it has a cost." },
      { q: "A pond turns green with algae every summer, right when the farm upstream irrigates its fields. What's the most likely cause?",
        opts: ["Fertiliser runoff feeding an algae bloom", "The pond is naturally seasonal and this is unrelated", "Fish are stirring up sediment", "Rainfall is diluting the water"], a: 0,
        explain: "Fertiliser is built to make plants grow — algae is a plant. Runoff timed to irrigation is the standard cause of a seasonal bloom." },
      { q: "A ground-nesting songbird population crashes the same year an invasive rat is introduced to their island. What evidence would most strongly confirm the rat caused the crash, rather than the timing being a coincidence?",
        opts: ["Rat droppings containing feathers and eggshell, concentrated around nesting season", "The two events happened in the same year", "A resident survey saying they'd 'seen more rats lately'", "The bird population was already declining slowly before the rats arrived"], a: 0,
        explain: "Direct evidence of the mechanism — rats actually eating eggs and chicks — beats a coincidence of timing every time." },
      { q: "An animal has forward-facing eyes, sharp claws, and a light, narrow build. What can you reasonably infer about how it lives?",
        opts: ["It is probably an active predator that judges distance for a chase or pounce", "It is probably a filter feeder", "It is probably a burrowing scavenger", "It is probably a slow grazer"], a: 0,
        explain: "Forward-facing eyes give overlapping fields of view — depth perception — which matters most to something that has to time a strike." },
      { q: "A normally solitary rescue animal starts pacing and losing weight after being moved from a large outdoor enclosure into a small indoor one. What's the most likely explanation, and the first thing worth trying?",
        opts: ["Stress from lost space and stimulation — restore space or add enrichment", "It is simply getting old and this is expected", "It caught an unrelated illness", "It just skipped one meal, no cause needed"], a: 0,
        explain: "The change lines up exactly with the symptom. Rule out the obvious cause before reaching for an unrelated one." },
    ],
  },
  {
    id: "trials", name: "Ranger Trials", badge: 4, reward: 30,
    blurb: "Cause, effect, and the difference between the two.",
    qs: [
      { q: "A grassland loses its large grazing herbivores to poaching. A few years later, wildfires there become far more intense. What's the connection?",
        opts: ["Without grazers, dry grass builds up as unburned fuel", "Poachers are setting the fires directly", "Fewer herbivores somehow means less rainfall", "There is no connection — fire severity is random"], a: 0,
        explain: "Grazers keep grass short, which keeps fuel load down. Remove them and the same land carries far more to burn." },
      { q: "An island has finches with two beak shapes: thick-and-short, and long-and-thin. A drought kills off most of the small, soft seeds, leaving mainly large, tough ones. Which beak shape should become more common over the following generations, and why?",
        opts: ["Thick, short beaks — better at cracking the tough seeds that remain", "Long, thin beaks — better suited to nectar", "Both equally — beak shape doesn't affect survival here", "Neither — seed hardness has nothing to do with beaks"], a: 0,
        explain: "This is natural selection in miniature: whichever beak can actually eat what's left survives to breed, and the population shifts toward it." },
      { q: "A large predator is reintroduced to a region after decades of absence. Deer numbers start dropping — but botanists also notice young trees finally growing back along the riverbanks. What best links the predator to the trees?",
        opts: ["The predator changes where and how long deer linger to graze near rivers, so saplings stop getting eaten down", "The predator eats insects that were damaging the trees", "It's an unrelated shift in the climate", "Predators fertilise the soil"], a: 0,
        explain: "This is a trophic cascade: predators change prey behaviour as much as prey numbers, and that alone can let a riverbank regrow." },
      { q: "A species of frog turns out to be more common in ponds that contain fish than in ponds that don't — which seems backwards, since fish eat tadpoles. Before concluding fish help frogs, what should you check first?",
        opts: ["Whether the fish are eating a predatory insect that kills even more tadpoles than the fish do", "Whether frogs prefer the taste of fish-pond water", "Whether fish ponds are always warmer", "Whether the sample size is simply too small to mean anything, and stopping there"], a: 0,
        explain: "An indirect effect — fish suppressing a worse tadpole predator — is a real, checkable mechanism, and it's the kind of thing a surprising correlation should make you go looking for." },
      { q: "A group argues a captive breeding program, run hundreds of miles from the species' wild habitat, is worthless for conservation. A biologist disagrees. Which argument best supports the biologist?",
        opts: ["A genetically diverse captive population is a safety net, and can supply animals for reintroduction once the original threats are dealt with", "Captive-bred animals are always released the moment they're born", "Captive animals behave identically to wild ones after a single generation", "Location doesn't matter because all habitats are interchangeable"], a: 0,
        explain: "The value isn't the zoo itself — it's insurance against extinction while the underlying threat gets fixed, with reintroduction as the actual goal." },
    ],
  },
  {
    id: "masters", name: "Master Naturalist", badge: 8, reward: 60,
    blurb: "Weighing evidence like it's your job, because for five questions it is.",
    qs: [
      { q: "Two reefs face the same rise in sea temperature. One has strict no-fishing rules and keeps stable fish numbers; the unprotected reef nearby crashes. What does this comparison suggest about the cause of the crash?",
        opts: ["Local fishing pressure, not temperature alone, is the main driver of the crash in the unprotected reef", "Temperature has no effect on reef fish at all", "The protected reef must simply be cooler water", "The fish most likely migrated from one reef to the other"], a: 0,
        explain: "Holding temperature roughly equal between the two reefs isolates fishing pressure as the variable that actually differs — and that's where the outcome differs too." },
      { q: "A pesticide is banned after being shown to thin the eggshells of birds of prey. Decades later, populations recover. A skeptic says the ban gets too much credit — habitat protection efforts were already stabilising numbers beforehand. How could you test that claim?",
        opts: ["Compare recovery timing and rate between regions that got the ban versus regions that only got habitat protection", "Simply trust whichever study came first", "Assume the skeptic is wrong because bans are usually effective", "Ignore habitat protection since it's a separate policy"], a: 0,
        explain: "Two causes were happening at once, so the only way to credit one over the other is to find places where they didn't both happen, and compare." },
      { q: "A manager proposes culling an 'overpopulated' deer herd to save the forest undergrowth. A critic asks whether the real cause is that top predators were removed decades ago, and whether culling fixes that or just papers over it. What's the strongest response?",
        opts: ["Treat culling as a short-term fix while pursuing predator reintroduction or other measures that address the root cause", "Dismiss the critic since the deer count is objectively high right now", "Argue predators are irrelevant to deer populations", "Claim the undergrowth damage has nothing to do with deer density"], a: 0,
        explain: "The critic isn't wrong that culling treats a symptom — the strongest answer accepts that and treats the two ideas as compatible on different timescales, not as a false choice." },
      { q: "A study finds towns with more streetlights have fewer moths, and concludes streetlights kill moths. A careful reader points out correlation isn't causation. What evidence would most strengthen the causal claim?",
        opts: ["Comparing moth counts at the same sites before and after streetlights are installed", "A larger survey covering even more towns with streetlights", "Interviewing residents about how many moths they remember seeing", "Counting the exact number of streetlights more precisely"], a: 0,
        explain: "A before/after comparison at the same sites controls for everything else about the location. A bigger survey of the same kind of comparison doesn't fix the underlying problem — it just repeats it at scale." },
      { q: "One conservation group wants an invasive plant removed entirely. Another points out local animals have started relying on it for food and shelter, and abrupt removal could do more harm than good. What's the most defensible middle path?",
        opts: ["Phased removal paired with restoring native alternatives first, monitoring how much animals actually depend on it as you go", "Remove all of it immediately regardless of what's now using it", "Do nothing, since animals have already adapted to it", "Plant more of the invasive species since local animals like it"], a: 0,
        explain: "The tradeoff is real in both directions — leaving it does ongoing ecological harm, and yanking it out fast does immediate harm to what now depends on it. Sequencing the fix around that is the reasoning move, not picking a side and ignoring the other cost." },
    ],
  },
];

// ---- ACHIEVEMENTS ----
// Every check reads fields that already exist on save state — nothing new to
// track for these, which is why they can be computed live rather than stored.
// (compass ownership and quiz completions are the two genuinely new counters,
// added to state alongside `achv`.)
const ACHIEVEMENTS = [
  { id: "first_sighting", icon: "👀", tier: "bronze", name: "First Sighting", desc: "See your first wild animal.",
    check: (st) => Object.values(st.dex || {}).some((v) => v >= 1) },
  { id: "first_friend", icon: "🤝", tier: "bronze", name: "First Friend", desc: "Befriend your first animal.",
    check: (st) => Object.values(st.dex || {}).some((v) => v === 2) },
  { id: "guide_25", icon: "📖", tier: "bronze", name: "Field Recorder", desc: "See 25 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v >= 1).length >= 25 },
  { id: "guide_75", icon: "📚", tier: "silver", name: "Well-Travelled", desc: "See 75 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v >= 1).length >= 75 },
  { id: "friends_25", icon: "🐾", tier: "silver", name: "Growing Collection", desc: "Befriend 25 species.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v === 2).length >= 25 },
  { id: "friends_half", icon: "🌗", tier: "gold", name: "Half the Guide", desc: "Befriend half of every species in the guide.",
    check: (st) => Object.values(st.dex || {}).filter((v) => v === 2).length >= Object.keys(DEX).length / 2 },
  { id: "friends_all", icon: "🏆", tier: "gold", name: "Complete Record", desc: "Befriend every species in the guide.",
    check: (st) => Object.keys(DEX).length > 0 && Object.values(st.dex || {}).filter((v) => v === 2).length >= Object.keys(DEX).length },
  { id: "badge_1", icon: "🥉", tier: "bronze", name: "First Badge", desc: "Earn your first badge.",
    check: (st) => (st.badges || 0) >= 1 },
  { id: "badge_all", icon: "🥇", tier: "gold", name: "Full Ladder", desc: "Earn every badge.",
    check: (st) => (st.badges || 0) >= GYM_COUNT },
  { id: "champion", icon: "👑", tier: "gold", name: "Champion", desc: "Beat the Elite Four and the Champion.",
    check: (st) => !!(st.trainersBeaten || {})["summit:7,1"] },
  { id: "guardian_1", icon: "🗿", tier: "silver", name: "Guardian's Trust", desc: "Calm your first mythic guardian.",
    check: (st) => Object.keys(st.legends || {}).length >= 1 },
  { id: "guardian_all", icon: "🌀", tier: "gold", name: "Peacemaker", desc: "Calm all three mythic guardians.",
    check: (st) => ["qilin", "thunderbird", "phoenix"].every((k) => (st.legends || {})[k]) },
  { id: "scholar", icon: "📝", tier: "silver", name: "Scholar", desc: "Pass 5 written field exams.",
    check: (st) => Object.values(st.quiz || {}).filter(Boolean).length >= 5 },
  { id: "explorer", icon: "🗺️", tier: "bronze", name: "Explorer", desc: "Visit 10 different towns.",
    check: (st) => Object.keys(st.visited || {}).length >= 10 },
  { id: "well_off", icon: "💰", tier: "silver", name: "Well Off", desc: "Carry ₡1,000 in trade shells at once.",
    check: (st) => (st.items?.coins || 0) >= 1000 },
  { id: "rich", icon: "💎", tier: "gold", name: "Trade Baron", desc: "Carry ₡5,000 in trade shells at once.",
    check: (st) => (st.items?.coins || 0) >= 5000 },
  { id: "archivist", icon: "🔎", tier: "bronze", name: "Critical Thinker", desc: "Pass your first assessment at the Naturalist's Archive.",
    check: (st) => Object.values(st.quizWins || {}).some((n) => n > 0) },
  { id: "archivist_master", icon: "🎓", tier: "gold", name: "Master Naturalist", desc: "Answer every question right in a Master Naturalist assessment.",
    check: (st) => !!(st.quizPerfect || {}).masters },
  { id: "compass", icon: "🧭", tier: "silver", name: "Uncharted", desc: "Earn the Champion's Compass.",
    check: (st) => (st.items?.compass || 0) > 0 },
];
