// ---------- CHAPTER XIX — Part 23: MORE OF THE PEOPLE WHO LOOKED ----------
// Fourteen more naturalists, standing in the world with their own faces.
//
// Same rule as Chapter XVII: these are homages, not the real people. I won't
// put invented words in a living person's mouth — Corwin, Earle, Galdikas and
// Douglas-Hamilton are alive as of my knowledge, and inventing quotes for them
// would be putting words in the mouths of people who can be asked directly.
// So the names are new. The lives, the discoveries, and every fact below are
// real, and the homage is named on screen so nobody is left guessing.

const SPECIALISTS2 = [
  {
    at: "openocean", name: "Ken Balcolm", em: "🧓🏼", homage: "for Ken Balcomb",
    line: "I counted the same whales for forty-five years. I knew every one by the notch in the fin. In 2018 J35 carried her dead calf on her rostrum for seventeen days and a thousand miles, and the world finally looked. We had been telling them for decades. It took a grieving mother to make anybody listen.",
    team: () => [mk("orca", 46), mk("orca_c", 40), mk("bottlenose", 45), mk("spermwhale", 47)], prize: 1300,
  },
  {
    at: "taiga", name: "Farley Mowatt", em: "🧔🏻", homage: "for Farley Mowat",
    line: "They sent me out to prove wolves were slaughtering the caribou. I lived beside a den for a season and watched them eat mice. MICE. The caribou they took were the sick ones — they were keeping the herd healthy, and we were paying bounties to stop them. I wrote it all down and the department never forgave me.",
    team: () => [mk("wolf", 43), mk("wolf_j", 38), mk("coyote", 42), mk("redwolf", 44)], prize: 1150,
  },
  {
    at: "canopywalk", name: "Jed Corwell", em: "🧑🏻‍🦱", homage: "for Jeff Corwin",
    line: "Look — LOOK at this thing. It's a glass frog. You can see its HEART beating through its own stomach. People ask me why I get so excited. Because it's a frog you can see the heart of! I've been doing this thirty years and I have not managed to get used to it, and I hope I never do.",
    team: () => [mk("glassfrog", 26), mk("redeyedtreefrog", 25), mk("boaconstrictor", 27), mk("toucan", 26)], prize: 700,
  },
  {
    at: "abyss", name: "Dr. Sylvia Earlham", em: "👩🏻‍🦳", homage: "for Sylvia Earle",
    line: "I walked the sea floor at 380 metres in a suit, untethered, and nobody had done it. They called me Her Deepness, which I have never once minded. Here is what I learned down there: no water, no life. No blue, no green. We have explored five percent of it and we are already finished with the rest.",
    team: () => [mk("anglerfish", 50), mk("giantsquid", 52), mk("nautilus", 48), mk("frilledshark", 51)], prize: 1350,
  },
  {
    at: "thicket", name: "Dr. Edmund Willson", em: "🧓🏻", homage: "for E.O. Wilson",
    line: "I lost the sight in one eye as a boy, so I looked at small things close up instead of big things far away. That was the whole accident of my career. Ants run the world — they turn more soil than earthworms, they farm fungus, they keep livestock. If we vanished tomorrow the world would heal. If they did, it would collapse.",
    team: () => [mk("leafcutterant", 14), mk("herculesbeetle", 15), mk("stagbeetle", 14), mk("goliathbeetle", 15)], prize: 320,
  },
  {
    at: "canopywalk", name: "Dr. Biruta Galdis", em: "👩🏼‍🦳", homage: "for Biruté Galdikas",
    line: "Fifty years in the peat swamp. Orangutans are the loneliest of the great apes — a mother and her infant, and that is the whole society, for eight years. She teaches him four hundred plants and which ones will kill him, one at a time, alone. Then the forest goes for palm oil and all of it is gone with her.",
    team: () => [mk("orangutan", 29), mk("orangutanflanged", 31), mk("sumatranorangutan", 30), mk("bonobo", 29)], prize: 980,
  },
  {
    at: "tundra", name: "Dr. George Schalla", em: "🧔🏼", homage: "for George Schaller",
    line: "I have followed lions, gorillas, pandas, snow leopards and wild yak. In sixty years of fieldwork I have never once been attacked. Not once. The animals were never the danger. Sit down, be dull, and write everything down — that is the entire method, and almost nobody has the patience for it.",
    team: () => [mk("snowleopard", 42), mk("snowleopard_j", 38), mk("markhor", 41), mk("panda", 43)], prize: 1100,
  },
  {
    at: "savanna", name: "Joy Adamsen", em: "👩🏼‍🌾", homage: "for Joy Adamson",
    line: "We raised Elsa from a cub and everyone said she could never go back. So we taught her to hunt, and we let her go, and she lived wild and brought her own cubs to meet us. She chose to come back. That is not the same as being tame, and the difference is the only thing that ever mattered.",
    team: () => [mk("lion", 34), mk("lion_j", 30), mk("manedlion", 35), mk("cheetah", 34)], prize: 850,
  },
  {
    at: "shore", name: "Archie Karr", em: "👨🏼‍🦳", homage: "for Archie Carr",
    line: "A green turtle hatches on this beach, swims off into the whole Atlantic, and thirty years later comes back to THIS beach to lay. We still argue about how. Magnetism, probably. I tagged them for forty years and I never stopped finding it outrageous.",
    team: () => [mk("greenseaturtle", 40), mk("leatherback", 42), mk("hawksbill", 40), mk("turtle", 38)], prize: 1000,
  },
  {
    at: "savanna", name: "Iain Douglass-Hamill", em: "🧔🏽", homage: "for Iain Douglas-Hamilton",
    line: "I put the first radio collars on elephants and watched where they actually went — hundreds of kilometres, along routes their grandmothers walked. Then I counted the carcasses. Half of Africa's elephants died in ten years for piano keys and trinkets. They know their dead. They stop for the bones.",
    team: () => [mk("africanelephant", 37), mk("africanelephant_c", 33), mk("asianelephant", 38), mk("blackrhino", 37)], prize: 900,
  },
  {
    at: "outback", name: "Bindy Ervin", em: "👩🏼", homage: "for Bindi Irwin",
    line: "Dad died when I was eight. Everyone expected me to be frightened of the water after that. I went back. The stingray didn't hate him — it was scared, and it did what scared animals do. He'd have been the first to say so. He'd have been furious if we blamed it.",
    team: () => [mk("koala", 30), mk("kangaroo", 31), mk("kangaroo_j2", 26), mk("echidna", 30)], prize: 780,
  },
  {
    at: "dig1", name: "Charles Darwen", em: "🧓🏼", homage: "for Charles Darwin",
    line: "I spent eight years on barnacles. EIGHT. My children assumed every father in England had a study full of them. But the finches on those islands had beaks shaped by what they ate, and the tortoises differed island to island, and once you have seen it you cannot stop seeing it. I sat on it for twenty years because I knew what it would cost.",
    team: () => [mk("greeniguana", 50), mk("marineiguana", 51), mk("bluefootedbooby", 50), mk("tortoise", 52)], prize: 1250,
  },
  {
    at: "peak", name: "Gerald Durran", em: "🧔🏻‍🦰", homage: "for Gerald Durrell",
    line: "I was told a zoo was a prison, and they were right about most of them. So I built one that only kept what was nearly gone, and bred them, and put them back. An ark, not a menagerie. If you cannot release them you have merely built a very expensive coffin with a gift shop.",
    team: () => [mk("kakapo", 48), mk("kestrel", 47), mk("markhor", 48), mk("redpanda", 47)], prize: 1200,
  },
  {
    at: "reef", name: "Roger Petersen", em: "🧓🏽", homage: "for Roger Tory Peterson",
    line: "Before my field guide you identified a bird by shooting it and comparing the corpse to a plate in a book. I drew them as you actually SEE them — arrows to the mark that matters, at a distance, in bad light. Millions of people started watching instead of shooting. That is the only monument I ever wanted.",
    team: () => [mk("kingfisher", 41), mk("heron", 40), mk("bluefootedbooby", 41), mk("baldeagle", 42)], prize: 1050,
  },
];

let placed2 = 0;
SPECIALISTS2.forEach((sp) => {
  const m = MAPS[sp.at];
  if (!m) { console.warn("[part23] no map for", sp.name, sp.at); return; }
  // stand on a free floor tile that nobody already occupies
  let spot = null;
  for (let y = 2; y < m.rows.length - 1 && !spot; y++) {
    for (let x = 2; x < m.rows[0].length - 2; x++) {
      if (m.rows[y][x] !== ".") continue;
      if (TRAINERS[`${sp.at}:${x},${y}`]) continue;
      spot = [x, y]; break;
    }
  }
  if (!spot) { console.warn("[part23] nowhere to stand for", sp.name, "in", sp.at); return; }
  const [x, y] = spot;
  m.rows = withRow(m.rows, y, m.rows[y].slice(0, x) + "R" + m.rows[y].slice(x + 1));
  TRAINERS[`${sp.at}:${x},${y}`] = {
    name: sp.name, line: sp.line, em: sp.em, team: sp.team, prize: sp.prize,
    specialist: true, homage: sp.homage,
  };
  placed2++;
});
console.log("[part23] specialists added:", placed2, "| total naturalists:",
  Object.values(TRAINERS).filter((t) => t.specialist).length);
