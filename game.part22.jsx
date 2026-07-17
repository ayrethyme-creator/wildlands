// ---------- CHAPTER XVIII — Part 22: THE TOWNS ----------
// Every town in the game was the same 16x12 template with the furniture moved
// around. They are now 20x14 — 46% more ground — and each one is its own place,
// with water, and with people in it.
//
// The hard part isn't the layout: it's that every road lands on a hardcoded
// coordinate INSIDE a town. Change the shape and travellers arrive inside a
// wall. So the door positions are declared once here and every inbound exit in
// the game is rewritten to match, automatically.

const TOWN_W = 20, TOWN_H = 14;
// where the doors are in the new shape
const DOOR = { n: [10, 0], s: [10, TOWN_H - 1], w: [0, 7], e: [TOWN_W - 1, 7] };
// where a traveller coming through each door should land
// the north landing sits BELOW the gym gate: the gate is what stands between
// a traveller and the road onward, exactly as it did in the old layout
const LAND = { n: [10, 2], s: [10, TOWN_H - 2], w: [1, 7], e: [TOWN_W - 2, 7] };

// T tree/wall · H house · C clinic · M market · Y arena · P tent · X gym gate
// W water · G tall grass · g lawn · R/V people · ! sign · * flowers
const TOWNS = {
  town1: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T..................T",
    "T..HH...!.....HH...T",
    "T..HH.........HH...T",
    "T.........*........T",
    "T..PP..........gg..T",
    "T..PP....WWW...gg..T",
    "T........WWW.......T",
    "T..*.....WWW....R..T",
    "T..gg..............T",
    "T..gg....V.....HH..T",
    "T..............HH..T",
    "T.......!..........T",
    "TTTTTTTTTTTTTTTTTTTT",
  ],
  town2: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T..HH.........MMM..T",
    "T..HH....!....MMM..T",
    "T.........*........T",
    "T..CCC.............T",
    "T..CCC...WW....gg..T",
    "e........WW....gg..T",
    "T..R.....WW........T",
    "T..gg.........YY...T",
    "T..gg....V....YY...T",
    "T..*...............T",
    "T.......!.......R..T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town3: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T.WWW..HH.....HH.WWT",
    "T.WWW..HH..!..HH.WWT",
    "T.WW......*.....WWWT",
    "T..CCC..........WWWT",
    "T..CCC..WWWW.......T",
    "T.......WWWW....R..T",
    "T..MMM..WWWW...gg..T",
    "T..MMM..........gg.T",
    "T.WW.....V......WWWT",
    "T.WWW..YY.......WWWT",
    "T.WWW..YY..!.....WWT",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town4: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "TT.HH....T....HH..TT",
    "T..HH..!.......HH..T",
    "T....*....T....*...T",
    "T..CCC.........MMM.T",
    "T.TCCC...WW....MMM.T",
    "T........WW......T.T",
    "T..R.....WW....gg..T",
    "TT..GG........gg..TT",
    "T...GG...V.....YY..T",
    "T.T............YY..T",
    "T.....!.....R......T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town5: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T..HH..........MMM.T",
    "T..HH....!.....MMM.T",
    "T........*.........T",
    "T..CCC.............T",
    "T..CCC...WWW...HH..T",
    "e........WWW...HH..T",
    "T..R.....WWW.......T",
    "T..gg.....*....YY..T",
    "T..gg....V.....YY..T",
    "T...............R..T",
    "T.......!..........T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town6: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T^.HH..........HH.^T",
    "T..HH....!.....HH..T",
    "T^........*.......^T",
    "T..CCC.........MMM.T",
    "T..CCC..WW.....MMM.T",
    "T^......WW........^T",
    "T..R....WW.....gg..T",
    "T..gg..........gg..T",
    "T^.gg....V.....YY.^T",
    "T..............YY..T",
    "T^......!.......R.^T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town7: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T..HH..........HH..T",
    "T..HH....!.....HH..T",
    "T.WW......*......WWT",
    "T.WW.CCC.......MMM.T",
    "T....CCC.WWW...MMM.T",
    "T........WWW.......T",
    "T..R.....WWW...gg..T",
    "T.WW...........gg..T",
    "T.WW.....V.....YY..T",
    "T..............YY..T",
    "T.......!.......R..T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town8: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T..HH..........MMM.T",
    "T..HH....!.....MMM.T",
    "T........*.........T",
    "T..CCC.............T",
    "T..CCC...WW....HH..T",
    "T........WW....HH..e",
    "T..R.....WW........T",
    "T..gg..........YY..T",
    "T..gg....V.....YY..T",
    "T..............*...T",
    "T.......!.......R..T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
  town9: [
    "TTTTTTTTTTnTTTTTTTTT",
    "T.........X........T",
    "T..HH..........HH..T",
    "T..HH....!.....HH..T",
    "T.........*........T",
    "T..CCC.........MMM.T",
    "T..CCC...WW....MMM.T",
    "e........WW........T",
    "T..R.....WW....gg..T",
    "T..GG..........gg..T",
    "T..GG....V.....YY..T",
    "T..............YY..T",
    "T.......!.......R..T",
    "TTTTTTTTTTsTTTTTTTTT",
  ],
};

// classify an old door by where it sat on the old map
const sideOf = (xy, m) => {
  const [x, y] = xy.split(",").map(Number);
  if (y === 0) return "n";
  if (y === m.rows.length - 1) return "s";
  if (x === 0) return "w";
  if (x === m.rows[0].length - 1) return "e";
  return null;
};
// classify an inbound landing by where it sat, so we know which door it used
const sideOfLanding = (e, m) => {
  const H = m.rows.length, W = m.rows[0].length;
  if (e.y <= 2) return "n";
  if (e.y >= H - 3) return "s";
  if (e.x <= 2) return "w";
  if (e.x >= W - 3) return "e";
  return "n";
};

let rebuilt = 0, inboundFixed = 0;
Object.entries(TOWNS).forEach(([key, rows]) => {
  const m = MAPS[key];
  if (!m) { console.warn("[part22] no town", key); return; }

  // 1. remember every old door and which side it was on
  const oldDoors = {};
  Object.entries(m.exits || {}).forEach(([xy, e]) => {
    const s = sideOf(xy, m);
    if (s) oldDoors[s] = e; else console.warn("[part22] interior exit in", key, xy);
  });

  // 2. rewrite every exit that points INTO this town, before the shape changes
  Object.values(MAPS).forEach((other) => {
    Object.values(other.exits || {}).forEach((e) => {
      if (e.map !== key) return;
      const s = sideOfLanding(e, m);
      const [nx, ny] = LAND[s];
      e.x = nx; e.y = ny;
      inboundFixed++;
    });
  });

  // 3. the new shape, with doors only where there were doors
  let newRows = rows.slice();
  ["n", "s", "w", "e"].forEach((s) => {
    const [dx, dy] = DOOR[s];
    const has = !!oldDoors[s];
    const ch = has ? (s === "n" ? "n" : s === "s" ? "s" : "e") : "T";
    newRows = withRow(newRows, dy, newRows[dy].slice(0, dx) + ch + newRows[dy].slice(dx + 1));
  });
  m.rows = newRows;

  // 4. hang the old destinations on the new doors
  const newExits = {};
  Object.entries(oldDoors).forEach(([s, e]) => { newExits[DOOR[s].join(",")] = e; });
  m.exits = newExits;
  rebuilt++;
});
console.log("[part22] towns rebuilt:", rebuilt, "at", TOWN_W + "x" + TOWN_H, "| inbound exits remapped:", inboundFixed);

// ---- people to fill the extra room ----
const TOWNSFOLK = {
  town1: [["Nan Ifeoma", "🧓🏿", "I've lived here since before the trail had a name. Every ranger who ever left came back different. You will too."],
          ["Kid Tobi", "🧒🏽", "When I'm big I'm gonna walk the WHOLE trail. Even the cold part. Even the dark part!"]],
  town2: [["Vet Adaeze", "👩🏿‍⚕️", "Half of what comes through that door is a wild animal somebody thought would make a nice pet. Half of THOSE don't make it."],
          ["Trader Osk", "🧔🏻", "Berries up front, treats in the back. Don't haggle, I've heard them all."]],
  town3: [["Ferryman Silt", "🧑🏽‍🦱", "The delta changes shape every spring. Map's a suggestion out here."],
          ["Reedcutter Bo", "👵🏻", "Cut in autumn, never in spring. Birds are nesting in spring, and I'm not that sort."]],
  town4: [["Canopy Ede", "🧑🏾‍🔬", "Half the species here have never touched the ground. Not once. Not ever."],
          ["Botanist Rui", "👨🏻‍🌾", "This tree feeds one moth. That moth pollinates this tree. Remove either and you get a hole nothing fills."]],
  town5: [["Waterfinder Sal", "🧕🏾", "There's water under your boots right now. Everything alive out here knows exactly where. You don't."],
          ["Digger Amos", "👨🏽‍🦳", "Dig at night, sleep at noon. Same as the animals. They worked it out first."]],
  town6: [["Quarryman Pell", "🧔🏾", "Rock remembers everything. That's all a fossil is — a rock that paid attention."],
          ["Goatherd Elis", "👩🏻‍🌾", "My goats climb better than any ranger I've met. No offence."]],
  town7: [["Glaciologist Vend", "🧑🏻‍🔬", "This ice is 900 years old. I measure how fast it's leaving. It's leaving faster."],
          ["Knitter Halla", "👵🏼", "Cold isn't the enemy. Wet is. Ask any animal out there — they're all dry under the fur."]],
  town8: [["Ventwatcher Ash", "👨🏿‍🏭", "The vents feed things that never see the sun. No sunlight in the whole food chain. Chemistry all the way down."],
          ["Smith Corra", "👩🏽‍🏭", "Fire cleans, fire kills, fire plants. Depends entirely on how often it comes."]],
  town9: [["Owler Fen", "🧑🏼‍🦳", "Stand still after dark and count what you hear. It's never nothing. It's never once been nothing."],
          ["Lamplighter Cass", "🧑🏿‍🦲", "I light these so people feel safe. The animals were fine before I got here."]],
};
let folk = 0;
Object.entries(TOWNSFOLK).forEach(([key, people]) => {
  const m = MAPS[key];
  if (!m) return;
  const spots = [];
  m.rows.forEach((row, y) => [...row].forEach((c, x) => { if (c === "R" || c === "V") spots.push([x, y]); }));
  people.forEach(([name, em, line], i) => {
    const s = spots[i];
    if (!s) return;
    TRAINERS[`${key}:${s[0]},${s[1]}`] = { name, line, em, chat: true };
    folk++;
  });
});
console.log("[part22] townsfolk placed:", folk);

Object.assign(SIGNS, {
  "town1:8,2": "🪧 'MARULA HOME — pop. 41. The trail starts at the north gate. Prof. Acacia's tent is the one with the mess outside it.'",
  "town1:8,12": "🪧 'Every ranger starts here. Nobody finishes the same.'",
  "town2:9,3": "🪧 'MARULA TOWN — first arena on the trail. Ranger Naledi has never lost to anyone who arrived in a hurry.'",
  "town3:11,3": "🪧 'DELTA TOWN — built on stilts, because the river decides where the town is, not us.'",
  "town4:7,3": "🪧 'CANOPY TOWN — the walkway is 40 metres up. Do not look down; do look up.'",
  "town5:9,3": "🪧 'DUNE TOWN — the well is 60 metres deep and has never once run dry. We are extremely proud of it.'",
  "town6:9,3": "🪧 'CRAG TOWN — every stone in these walls came out of the hill behind you.'",
  "town7:9,3": "🪧 'FROST TOWN — the hot springs are free. The clinic is free. The advice is free and worth it.'",
  "town8:9,3": "🪧 'CINDER TOWN — we live on a volcano on purpose. The soil is worth it.'",
  "town9:9,3": "🪧 'GLOAM TOWN — last town before the Citadel. Sleep here. You will want to have slept.'",
});

// tile size should follow the map width, or a 20-wide town squashes the sprites

// ---- the town ponds are water, and water has animals in it ----
// Village ponds: stocked, ornamental, and a nice early place to meet a frog.
const POND = {
  town1: [[4, 7], [["koi", 11], ["goldfish", 11], ["dartfrog_j", 9], ["duck", 8], ["newt", 7], ["damselfly", 7]]],
  town2: [[9, 12], [["koi", 11], ["goldfish", 10], ["dartfrog_j", 9], ["froglet", 7], ["duck", 8], ["newt", 8], ["dragonfly", 6]]],
  town3: [[16, 19], [["koi", 9], ["duck", 9], ["goose", 8], ["swan", 7], ["cygnet", 6], ["otter", 8], ["turtle", 8], ["heron", 7], ["kingfisher", 7], ["naiad", 7], ["mandarinduck", 7]]],
  town4: [[21, 24], [["glassfrog", 9], ["redeyedtreefrog", 9], ["dartfrog_j", 8], ["froglet", 8], ["basilisk", 7], ["turtle", 7], ["kingfisher", 7], ["damselfly", 8]]],
  town5: [[28, 31], [["turtle", 10], ["goldfish", 9], ["koi", 8], ["duck", 8], ["tomatofrog", 7], ["dragonfly", 8], ["heron", 6]]],
  town6: [[32, 35], [["newt", 10], ["hellbender", 7], ["otter", 8], ["duck", 8], ["koi", 8], ["firesalamander", 6], ["damselfly", 8]]],
  town7: [[36, 39], [["otter", 9], ["loon", 8], ["swan", 8], ["duck", 9], ["olm", 5], ["newt", 8], ["mink", 7], ["firebellytoad", 6]]],
  town8: [[42, 45], [["koi", 9], ["goldfish", 8], ["firebellytoad", 8], ["pompeiiworm", 5], ["turtle", 8], ["marineiguana", 6], ["hermitcrab", 7]]],
  town9: [[48, 51], [["otter", 9], ["mink", 8], ["newt", 9], ["hellbender", 7], ["firesalamander", 7], ["koi", 8], ["mandarinduck", 8], ["loon", 7], ["axolotlmeta", 3]]],
};
let ponds = 0;
Object.entries(POND).forEach(([key, [lvl, roster]]) => {
  const m = MAPS[key];
  if (!m || !m.rows.some((r) => r.includes("W"))) return;
  m.poolWater = roster.filter(([sp]) => DEX[sp]);
  m.lvlWater = lvl;
  ponds++;
});
console.log("[part22] town ponds stocked:", ponds);
