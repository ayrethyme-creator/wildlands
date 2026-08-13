// ---------- CHAPTER XVII — Part 20: PEOPLE ON THE ROAD ----------
// 32 road segments shipped with 292 trainer tiles and not one trainer on them.
// They were decoration. Now every occupied tile has somebody with something to
// say, and roughly three quarters of them will battle you.
//
// A note on the specialists: these are homages, not the real people. Putting
// invented words in the mouth of a living scientist isn't something I'll do —
// so the names are new, and the lives behind them are honoured rather than
// impersonated. Every fact they tell you is true.

// ---- the naturalists ----
// key detail: each has a real avatar, stands in the world, and teaches
// something true about the animals they gave their life to.
const SPECIALISTS = [
  {
    at: "canopywalk", name: "Dr. Jane Fairbrook", em: "👩🏼‍🔬", homage: "for Jane Goodall",
    line: "I sat in that forest for months and the chimpanzees would not come near me. Then one day David Greybeard took a termite mound apart with a stripped twig — he MADE a tool. My mentor cabled back: now we must redefine tool, redefine man, or accept chimpanzees as human. Sit still long enough and the world rewrites itself.",
    team: () => [mk("chimpanzee", 26), mk("chimpanzee_i", 22), mk("bonobo", 27), mk("gorilla", 28)], prize: 900,
  },
  {
    at: "seg_g2", name: "Sir Davan Attenbury", em: "🧓🏻", homage: "for David Attenborough",
    line: "People ask which animal is my favourite, expecting something with teeth. It is usually whatever I am looking at. Do you know the lyrebird can reproduce a camera shutter, a car alarm and a chainsaw — the chainsaw, because it heard the forest coming down? No caption I could write would be sharper than that.",
    team: () => [mk("lyrebird", 55), mk("greaterbop", 56), mk("cassowary", 56), mk("kakapo", 57)], prize: 1400,
  },
  {
    at: "seg_w2", name: "Ranger Bruce Ervin", em: "🧑🏼‍🌾", homage: "for Steve Irwin",
    line: "Crikey — look at her! Everyone wants me to say she's dangerous. She's not dangerous, she's a crocodile, she's doing crocodile. The danger is a bloke who won't learn the difference. I never met an animal I couldn't love. Some of them just needed me to keep my hands to myself.",
    team: () => [mk("croc", 17), mk("gharial", 18), mk("monitor", 18), mk("taipan", 19)], prize: 400,
  },
  {
    at: "kelp", name: "Capitaine Jacques Rousseau", em: "🧑🏻‍✈️", homage: "for Jacques Cousteau",
    line: "We invented the aqualung so that men could go down. Then we went down, and found we had been describing a world we had never once visited. The sea is not silent. It never was. We simply had not learned to be quiet enough to notice.",
    team: () => [mk("octopus", 42), mk("cuttlefish", 42), mk("moray", 43), mk("bottlenose", 44)], prize: 1000,
  },
  {
    at: "highstation", name: "Dr. Diane Ferris", em: "👩🏻‍🔬", homage: "for Dian Fossey",
    line: "They told me gorillas were monsters. I crawled into the nettles at 3,000 metres and lay down, and a silverback put his hand on mine. I counted them for eighteen years and I buried too many. When you learn an animal's name you have signed something. That is the cost of knowing.",
    team: () => [mk("gorilla", 28), mk("gorilla_i", 24), mk("crossrivergorilla", 29), mk("chimpanzee", 27)], prize: 950,
  },
  {
    at: "seg_m3", name: "Rachel Carsen", em: "👩🏼‍🏫", homage: "for Rachel Carson",
    line: "I asked a simple question: where had the birds gone? The chemical companies said I was a hysterical woman. But the robins were dying on the lawns and nobody could say why, and it turned out the poison did not stop where we told it to. It never does. That book cost me everything and I would write it again.",
    team: () => [mk("kestrel", 9), mk("lovebird", 9), mk("baldeagle", 11), mk("peregrine", 10)], prize: 200,
  },
  {
    at: "dig1", name: "Mary Annering", em: "👩🏻‍🦰", homage: "for Mary Anning",
    line: "I was twelve when I dug out the ichthyosaur — a sea-dragon, they called it. The gentlemen of the Geological Society bought my fossils, wrote the papers, and put their own names on them — I was not permitted to join, being a woman and poor and Dissenter besides. The cliffs did not care about any of that. They gave up their monsters to whoever was willing to climb.",
    team: () => [mk("ophthalmosaurus", 52), mk("plesiosaurus", 52), mk("nautilus", 51), mk("rhamphorhynchus", 53)], prize: 1200,
  },
  {
    at: "reef", name: "Dr. Eugenia Clarke", em: "👩🏻‍🔬", homage: "for Eugenie Clark",
    line: "They called me the Shark Lady, which was meant to be a joke. I made sharks learn to press a target for food — people thought they were swimming appetites, incapable of learning anything. They learned faster than the rabbits. I dived until I was ninety-two. The fear was never in the water; we brought it with us.",
    team: () => [mk("reefshark", 40), mk("greatwhite", 42), mk("whaleshark", 41), mk("hammerhead", 42)], prize: 1000,
  },
  {
    at: "savanna", name: "Dr. Cynthia Mosse", em: "👩🏽‍🔬", homage: "for Cynthia Moss",
    line: "I have known some of these elephants for forty years. I knew their mothers. I have watched a family come back to a place where a matriarch died and stand there, touching the bones, running their trunks along the jaw, for an hour. Anyone who tells you that is not grief has decided in advance not to look.",
    team: () => [mk("africanelephant", 36), mk("africanelephant_c", 32), mk("asianelephant", 37), mk("hippo", 36)], prize: 800,
  },
  {
    at: "tundra", name: "Konrad Lorentz", em: "🧔🏼", homage: "for Konrad Lorenz",
    line: "The goslings hatched and the first moving thing they saw was me, so I became their mother. I swam with them. I honked at them. I lived with a line of geese behind me for years, and my neighbours thought me mad. But we learned that a mind arrives already expecting the world — and takes whatever it is given.",
    team: () => [mk("goose", 41), mk("swan", 41), mk("cygnet", 38), mk("mandarinduck", 42)], prize: 950,
  },
  {
    at: "seg_m4", name: "Karl von Frische", em: "👨🏼‍🔬", homage: "for Karl von Frisch",
    line: "A forager comes home and dances a figure of eight on the vertical comb, in the dark, pressed among thousands of her sisters. The straight run is the bearing — its angle off vertical is the angle off the sun. How long she waggles is how far to fly. They are reading a map of a sun not one of them can see. I watched that for years before I dared say it out loud.",
    team: () => [mk("honeybee", 10), mk("bumblebee", 10), mk("orchidbee", 9), mk("masonbee", 9)], prize: 200,
  },
  {
    at: "seg_w3", name: "Dr. Salim Alvi", em: "🧓🏽", homage: "for Sálim Ali",
    line: "I was a boy with an air gun, and I shot a sparrow, and its throat was yellow — and no sparrow I knew had a yellow throat. That one bird sent me to the museum to ask what it was, and I never really left. Years later they would not give me a curator's post; no formal degree, you see. So I went and counted the birds of the whole subcontinent instead.",
    team: () => [mk("peacock", 17), mk("hornbill", 17), mk("kingfisher", 16), mk("crane", 18)], prize: 350,
  },
  {
    at: "route3", name: "Dr. Irene Pepperbourne", em: "👩🏻‍🏫", homage: "for Irene Pepperberg",
    line: "Everyone knew parrots only parrot. Alex learned to label fifty objects, seven colours and five shapes — and then to answer what was the same and what was different about two things he had never seen before. He worked out none as a quantity. The last thing he ever said to me was the thing he said every night when I left: you be good, I love you, see you tomorrow.",
    team: () => [mk("africangrey", 19), mk("cockatoo", 18), mk("eclectus", 18), mk("quakerparrot", 17)], prize: 400,
  },
  {
    at: "seg_j1", name: "Dr. Gladys Kalema-Zikusa", em: "👩🏿‍⚕️", homage: "for Gladys Kalema-Zikusoka",
    line: "The gorillas came down with scabies and the infants died, and we traced it to clothing from the villages that they had handled. You cannot treat the apes and stop at the forest edge. The people living around this park had no clinic either. Gorilla health and human health are one problem wearing two coats, and I have spent my whole career refusing to separate them.",
    team: () => [mk("gorilla", 22), mk("chimpanzee", 21), mk("mandrill", 21), mk("colobus", 20)], prize: 500,
  },
  {
    at: "seg_j2", name: "Alfred Russell Wallis", em: "👨🏻‍🦳", homage: "for Alfred Russel Wallace",
    line: "I collected four years on the Amazon, and the ship burned on the voyage home — I sat in a lifeboat and watched the whole of it go down. So I went east and did it again for eight years more. Then I took a fever on Ternate, and lying there the entire mechanism arrived at once, and I posted it to Darwin. People remember whose name ended up on it. I would rather you remembered the strait out there: narrow enough to row across, and Asia's animals live on one shore and Australia's on the other.",
    team: () => [mk("birdwing", 23), mk("greaterbop", 23), mk("orangutan", 24), mk("atlasmoth", 22)], prize: 600,
  },
  {
    at: "seg_j3", name: "Dr. Alan Rabinowicz", em: "👨🏻‍🦲", homage: "for Alan Rabinowitz",
    line: "I stuttered so badly as a boy that they put me in a class for damaged children. The only time words came out of me whole was when I spoke to animals — so I sat with them and talked, and I promised them that if I ever found a voice I would spend it on them. I found it. I went to Belize and counted jaguars until the government set a whole basin aside for them. That was the first place on this earth kept for this animal.",
    team: () => [mk("jaguar", 25), mk("ocelot", 24), mk("margay", 23), mk("jaguarundi", 23)], prize: 650,
  },
  {
    at: "seg_w4", name: "Niko Tinbergen-Haas", em: "👨🏼‍🏫", homage: "for Nikolaas Tinbergen",
    line: "A herring gull chick pecks the red spot on its parent's bill, and the parent brings up food. So I built cardboard heads and asked which part of the mother it was actually answering. A plain red rod with three white bands beat every accurate model I made. The chick was not seeing its mother — it was answering a signal, and I could build one more compelling than the real thing. Ask of any behaviour: what causes it, how it grew, what it is for, where it came from. Four questions. Never stop at one.",
    team: () => [mk("oystercatcher", 18), mk("piedavocet", 18), mk("ruddyturnstone", 17), mk("redknot", 17)], prize: 400,
  },
  {
    at: "openocean", name: "Dr. Katy Paine", em: "👵🏼", homage: "for Katy Payne",
    line: "We slowed the tapes down and the humpbacks were not calling — they were singing. Phrases, then verses, then a whole song, and every singer in an ocean revises it together across a season. Years later I stood beside the elephants and felt a throbbing in the air that I could not hear. That was the rest of their conversation, pitched underneath us the entire time.",
    team: () => [mk("humpback", 47), mk("humpback_c", 43), mk("rightwhale", 47), mk("spermwhale", 48)], prize: 1100,
  },
];

let specPlaced = 0;
SPECIALISTS.forEach((sp) => {
  const m = MAPS[sp.at];
  if (!m) { console.warn("[part20] no map for", sp.name, sp.at); return; }
  // stand them on a free floor tile, off the central corridor
  let spot = null;
  for (let y = 2; y <= 8 && !spot; y++) {
    for (const x of [3, 11, 4, 10, 2, 12]) {
      if (m.rows[y] && m.rows[y][x] === ".") { spot = [x, y]; break; }
    }
  }
  if (!spot) { console.warn("[part20] nowhere to stand for", sp.name, "in", sp.at); return; }
  const [x, y] = spot;
  m.rows = withRow(m.rows, y, m.rows[y].slice(0, x) + "R" + m.rows[y].slice(x + 1));
  const team = () => sp.team().filter(Boolean);
  TRAINERS[`${sp.at}:${x},${y}`] = {
    name: sp.name, line: sp.line, em: sp.em, team, prize: sp.prize, specialist: true, homage: sp.homage,
  };
  specPlaced++;
});

// ---- ordinary people on every road ----
const FIRST = ["Ade", "Bo", "Cai", "Devi", "Enzo", "Fen", "Gus", "Hana", "Ike", "Jo", "Kai", "Lena", "Mo", "Nia", "Ola", "Pim", "Quill", "Rae", "Sol", "Tam", "Uzo", "Vik", "Wren", "Xan", "Yuki", "Zev", "Ari", "Bex", "Cyd", "Dov", "Esi", "Fay", "Gil", "Hux", "Ines", "Jax", "Kes", "Lior", "Mika", "Noor", "Otto", "Pax", "Rhea", "Sena", "Toma", "Ulla", "Vale", "Wim", "Yara", "Zoë"];
const ROLE = {
  meadow: ["Beekeeper", "Haymaker", "Scout", "Hedgewitch"], wetland: ["Fisher", "Wader", "Reedcutter", "Ferryman"],
  jungle: ["Herper", "Canopyist", "Mycologist", "Tracker"], desert: ["Digger", "Nomad", "Prospector", "Waterfinder"],
  savanna: ["Herder", "Ranger", "Watcher", "Drover"], alpine: ["Climber", "Glaciologist", "Shepherd", "Cairnbuilder"],
  volcanic: ["Geologist", "Ashwalker", "Smith", "Ventwatcher"], grove: ["Forester", "Lantern-keeper", "Owler", "Mosser"],
};
const AVATARS = ["🧑🏽‍🌾", "👨🏿‍🌾", "👩🏻‍🌾", "🧑🏾‍🔬", "👩🏼‍🔬", "🧔🏽", "👵🏻", "🧓🏿", "🧑🏻‍🎤", "👩🏾‍🦱", "🧑🏼‍🦰", "👨🏽‍🦳", "🧕🏽", "👳🏾", "🧑🏿‍🦲", "👩🏻‍🦳", "🧑🏽‍🎨", "👨🏻‍🔧", "👩🏿‍🏫", "🧑🏼‍🚒"];
const CHAT = [
  "Sit still for ten minutes and the whole area changes. Everything that hid comes back out.",
  "Don't chase. Never chase. Sit down and be boring and they'll walk right past you.",
  "I've been counting the same pond for six years. That's the job. Nobody claps.",
  "Whatever you're looking for, look for its food first. Easier to find, and it can't run.",
  "Rain's coming. The swallows are flying low, which means the insects are low, which means the pressure's dropped.",
  "Everyone wants the rare one. The common one is doing all the work holding this place together.",
  "You can tell a lot from droppings. Sorry. It's true, though.",
  "If it's beautiful and slow, it's probably poisonous. That's the deal it made.",
  "Learn one bird call properly. Just one. It cracks the whole forest open.",
  "That path there floods every spring. The frogs know the calendar better than I do.",
  "I don't feed them. Feeding one is how you kill it slowly.",
  "The young ones are curious and the old ones are careful. Same as us.",
];

const segList = Object.keys(MAPS).filter((k) => k.startsWith("seg_"));
let battlers = 0, chatters = 0, tilesUsed = 0;
segList.forEach((mk2, si) => {
  const m = MAPS[mk2];
  const biome = (Object.entries(ROLE).find(([b]) => (m.zone || "").startsWith(b.slice(0, 4))) || ["meadow"])[0];
  const spots = [];
  m.rows.forEach((row, y) => [...row].forEach((c, x) => { if (c === "R") spots.push([x, y]); }));
  // no more than four people in any one area
  const take = spots.slice(0, 4);
  // blank the rest back to plain rock so they aren't silent mannequins
  spots.slice(4).forEach(([x, y]) => {
    m.rows = withRow(m.rows, y, m.rows[y].slice(0, x) + "^" + m.rows[y].slice(x + 1));
  });
  const lv = m.lvl || [10, 12];
  const pool = (m.pool || []).filter(([sp]) => DEX[sp] && !DEX[sp].legend);
  take.forEach(([x, y], i) => {
    const seed = si * 7 + i * 3;
    const key = `${mk2}:${x},${y}`;
    if (TRAINERS[key]) { tilesUsed++; return; }   // a specialist already stands here
    const name = `${ROLE[biome][i % 4]} ${FIRST[(seed * 5) % FIRST.length]}`;
    const em = AVATARS[(seed * 3) % AVATARS.length];
    // 75% fight, 25% are just people with something to say
    const fights = (si + i) % 4 !== 3;
    if (!fights) {
      TRAINERS[key] = { name, line: CHAT[(seed * 2) % CHAT.length], em, chat: true };
      chatters++; tilesUsed++;
      return;
    }
    const n = 1 + ((si + i) % 3);
    const team = () => {
      const out = [];
      for (let j = 0; j < n; j++) {
        const e = pool[(seed * 11 + j * 17) % Math.max(1, pool.length)];
        if (e) out.push(mk(e[0], Math.max(2, lv[0] + (j % 2))));
      }
      return out.length ? out : [mk("rabbit", lv[0])];
    };
    TRAINERS[key] = { name, line: CHAT[(seed * 4 + 5) % CHAT.length], em, team, prize: 40 + lv[0] * 6 };
    battlers++; tilesUsed++;
  });
});
console.log("[part20] specialists:", specPlaced, "| road battlers:", battlers, "| road talkers:", chatters,
  "| occupied tiles:", tilesUsed, "| battle share:", Math.round((battlers / Math.max(1, battlers + chatters)) * 100) + "%");
