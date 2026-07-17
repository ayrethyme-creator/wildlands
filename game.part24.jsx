// ---------- CHAPTER XX — Part 24: THE CHUTE AND THE MARA ----------
// Two more sets of people, and one of them is not like the others.
//
// Same rule: homages, not the real people. Grandin, Scott, King and
// Douglas-Hamilton are all alive.

const SPECIALISTS3 = [
  {
    // Temple Grandin. She belongs in Hearthside, among the domestics, because
    // that is the whole point of her: the animals nobody was writing field
    // notes about. Nothing here is sentimental and nothing here is invented.
    at: "hearthgate", name: "Dr. Temperance Grandell", em: "👩🏼‍🌾", homage: "for Temple Grandin",
    line: "I got down in the chute on my hands and knees to see what they saw. Nobody had. A coat on a fence, a reflection on wet metal, a chain swinging — those were what stopped the line, not stubbornness. So I built the races curved, because cattle turn back the way they came and they cannot see what is at the end, and a curve uses both. I think in pictures, which is why I could see it and the engineers could not. I am autistic. That was not the obstacle; it was the instrument. Half the cattle in North America walk through something I drew. I did not stop the killing. I stopped the terror in the ten minutes before it, and I will take that, because those ten minutes were real and they belonged to somebody.",
    team: () => [mk("cow", 30), mk("highlandcow", 31), mk("pig", 29), mk("sheep", 29)], prize: 900,
  },
  {
    at: "savanna", name: "Jonty Scarr", em: "🧓🏻", homage: "for Jonathan Scott",
    line: "We followed the same pride for years and named them, and people said that was unscientific. But you cannot film a lion for a decade and pretend you do not know her. The Marsh Pride taught me that a lioness is mostly a mother with a job, and the job is appalling, and she does it every night.",
    team: () => [mk("lion", 35), mk("lion_j", 31), mk("manedlion", 36), mk("leopard", 35)], prize: 880,
  },
  {
    at: "savanna", name: "Simon Kingsley", em: "🧔🏼", homage: "for Simon King",
    line: "Cheetahs cannot fight. That is the thing nobody grasps. She is built entirely for eight seconds and after that she is defenceless — lions kill her cubs, hyenas take her kill while she is still panting. She raises them alone in the open with no den and no help. I have never seen a harder life pulled off with more grace.",
    team: () => [mk("cheetah", 35), mk("cheetah_j", 31), mk("serval", 34), mk("caracal", 35)], prize: 880,
  },
  {
    // Saba is Iain's daughter — she grew up in the elephant camp he ran, and
    // she stands a few tiles from him here.
    at: "savanna", name: "Saba Douglass-Hamill", em: "👩🏽‍🦱", homage: "for Saba Douglas-Hamilton",
    line: "I grew up in my father's elephant camp. My first word was in Swahili and I was three before I understood that most children do not have a tame bull elephant leaning on the veranda. People assume the leopard is the hard one to film. It is. But she is also the reason I stayed — nine years of glimpses, and then one evening she simply sat down in front of me and let me exist.",
    team: () => [mk("leopard", 36), mk("leopard_j", 32), mk("lion", 35), mk("cheetah", 35)], prize: 900,
  },
];

let placed3 = 0;
SPECIALISTS3.forEach((sp) => {
  const m = MAPS[sp.at];
  if (!m) { console.warn("[part24] no map for", sp.name, sp.at); return; }
  let spot = null;
  for (let y = 2; y < m.rows.length - 1 && !spot; y++) {
    for (let x = 2; x < m.rows[0].length - 2; x++) {
      if (m.rows[y][x] !== ".") continue;
      if (TRAINERS[`${sp.at}:${x},${y}`]) continue;
      spot = [x, y]; break;
    }
  }
  if (!spot) { console.warn("[part24] nowhere to stand for", sp.name, "in", sp.at); return; }
  const [x, y] = spot;
  m.rows = withRow(m.rows, y, m.rows[y].slice(0, x) + "R" + m.rows[y].slice(x + 1));
  TRAINERS[`${sp.at}:${x},${y}`] = {
    name: sp.name, line: sp.line, em: sp.em, team: sp.team, prize: sp.prize,
    specialist: true, homage: sp.homage,
  };
  placed3++;
});
console.log("[part24] specialists added:", placed3, "| total naturalists:",
  Object.values(TRAINERS).filter((t) => t.specialist).length);

// The Hearthside sign that goes with her.
Object.assign(SIGNS, {
  "hearthgate:7,3": "🪧 'Curved races. Solid sides. No shadows across the floor, no chain left swinging, no coat on the rail. Every one of these rules exists because somebody got down on their hands and knees in the chute and looked up. Cattle balk at what they can see. It was never stubbornness — it was us, standing where we should not have been.'",
});
