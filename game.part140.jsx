// ---------- Part 140: THE VICTORY TRAIL'S TRAINERS AND GATES ----------
// 2026-09-26. Ayr: "Raise the levels and add trainers. Also add gates of
// questions that correspond to each area you've gone through. Make it an
// actual challenge to get to the elite 4."
//
// THE TRAINERS. The trail's two (Trailmaster Odu, Gatekeeper Ivo) were level
// 48-49, below the Gloamwood road behind them. They are 58-60 now, and nine
// more stand on the three stretches of the climb, 59 to 63, each a little
// harder than the last.
//
// THE GATES. Eight, one for each country the road has crossed, in the order
// you crossed it: two on the Victory Trail (the savanna, the wetland), two on
// each stretch of the climb. Each is a stone wall across the mountain with one
// gap, and a gatewarden standing in it. The warden asks five questions about
// that country - its animals, its signs, its naturalists, all answerable from
// the Field Guide - using the gym exams' engine (part42), at its hardest tier.
// One wrong answer ends the attempt; the questions reshuffle for the next.
// Five right and the warden steps aside for good.
//
// A Champion is never stopped: a player who has already beaten the Elite Four
// walks back down through open gates.
//
// The people are placed by forge_grove.py under the identities below. Those
// identities are not coordinates on any old map (the trail's old screens were
// 16 wide and 16 tall), so none of them can ever be mistaken for someone else.

const TRAIL_GATES = {
  "route9:40,1": { key: "gate_savanna", region: "savanna", em: "🧑🏾‍🏫", name: "Gatewarden Amani",
    from: "the Acacia Trail to Marula Town",
    maps: ["route1", "seg_m1", "seg_m2", "seg_m3", "seg_m4", "seg_m5", "town2"] },
  "route9:40,2": { key: "gate_wetland", region: "wetland", em: "👩🏼‍🏫", name: "Gatewarden Ines",
    from: "the Reedwater Fen to Delta Town",
    maps: ["route2", "seg_w1", "seg_w2", "seg_w3", "seg_w4", "thicket", "town3"] },
  "seg_t1:40,1": { key: "gate_jungle", region: "jungle", em: "👨🏿‍🏫", name: "Gatewarden Kofi",
    from: "Canopy Deep to Canopy Town",
    maps: ["route3", "seg_j1", "seg_j2", "seg_j3", "canopywalk", "cave1", "town4"] },
  "seg_t1:40,2": { key: "gate_desert", region: "desert", em: "👩🏽‍🏫", name: "Gatewarden Layla",
    from: "the Singing Dunes to Dune Town",
    maps: ["route4", "tidewater", "seg_d1", "seg_d2", "seg_d3", "seg_d4", "outback", "town5"] },
  "seg_t2:40,1": { key: "gate_highveld", region: "highveld", em: "👨🏾‍🏫", name: "Gatewarden Thabo",
    from: "the Highveld Steps to Crag Town",
    maps: ["route5", "seg_s1", "seg_s2", "seg_s3", "seg_s4", "savanna", "town6"] },
  "seg_t2:40,2": { key: "gate_alpine", region: "mountains", em: "👩🏻‍🏫", name: "Gatewarden Sigrun",
    from: "Frostmere Pass to Frost Town",
    maps: ["route6", "seg_a1", "seg_a2", "seg_a3", "tundra", "peak", "eyrie", "town7"] },
  "seg_t3:40,1": { key: "gate_volcanic", region: "fire country", em: "👩🏽‍🏫", name: "Gatewarden Moana",
    from: "the Cinder Flats to Cinder Town and the shore",
    maps: ["route7", "seg_v1", "seg_v2", "seg_v3", "seg_v4", "seg_v5", "town8", "shore"] },
  "seg_t3:40,2": { key: "gate_grove", region: "grove", em: "🧑🏼‍🏫", name: "Gatewarden Rowan",
    from: "Gloamwood to Gloam Town",
    maps: ["route8", "seg_g1", "seg_g2", "seg_g3", "seg_g4", "taiga", "town9"] },
};

// Open for good once its questions are answered - or for a Champion, always.
const gateOpen = (st, id) => {
  const t = TRAINERS[id];
  if (!t || !t.gate || !st) return false;
  return !!((st.quiz || {})[t.gate.key] || (st.trainersBeaten || {})["summit:7,1"]);
};

Object.entries(TRAIL_GATES).forEach(([id, g]) => {
  TRAINERS[id] = {
    name: g.name, em: g.em, gate: g,
    line: `Nobody reaches the Citadel without having looked at the country they walked through. `
      + `Five questions on the ${g.region} - ${g.from}. Everything I ask is in your Field Guide. `
      + `One wrong answer and you go and read, and come back.`,
  };
});

// The trail's trainers. A team is only as real as its animals, so anything
// not in the Dex is dropped rather than risked.
{
  const team = (list) => () => list.filter(([sp]) => DEX[sp]).map(([sp, lv]) => mk(sp, lv));
  const put = (id, name, line, list, prize) => { TRAINERS[id] = { name, line, team: team(list), prize }; };
  if (TRAINERS["route9:4,4"]) TRAINERS["route9:4,4"].team = team([["wolf", 58], ["lion", 58], ["cheetah", 59], ["snowleopard", 59]]);
  if (TRAINERS["route9:11,10"]) TRAINERS["route9:11,10"].team = team([["croc", 58], ["tiger", 60], ["hyena", 58], ["wilddog", 59]]);
  if (TRAINERS["route9:4,4"]) TRAINERS["route9:4,4"].prize = 1400;
  if (TRAINERS["route9:11,10"]) TRAINERS["route9:11,10"].prize = 1400;

  put("seg_t1:41,1", "Mountaineer Sione", "Thin air sorts people out. Let's see which pile you land in.",
    [["ibex", 59], ["markhor", 59], ["snowleopard", 60]], 1500);
  put("seg_t1:41,2", "Ridge Runner Tali", "I run this climb every morning. You're going to have to be quick.",
    [["cheetah", 59], ["peregrine", 60], ["wolf", 60]], 1500);
  put("seg_t1:41,3", "Ace Ranger Maren", "Every ranger who made the Elite Four came through here first. Most came back down.",
    [["tiger", 60], ["yak", 59], ["goldeneagle", 60], ["lion", 60]], 1600);

  put("seg_t2:41,1", "Climber Ines", "Out of the wind, finally. Don't expect me to be grateful for the company.",
    [["bighorn", 60], ["takin", 60], ["stellerseagle", 61]], 1600);
  put("seg_t2:41,2", "Veteran Ranger Oko", "Thirty years on this ledge. The ibex still beat me up it.",
    [["polarbear", 61], ["muskox", 60], ["wolverine", 61]], 1600);
  put("seg_t2:41,3", "Ace Ranger Brand", "You passed the gates. Good. Questions do not bite. I do.",
    [["leopard", 61], ["harpyeagle", 61], ["tiger", 62], ["condor", 60]], 1700);

  put("seg_t3:41,1", "Summit Warden Lio", "The Citadel is close enough to hear. You are not close enough yet.",
    [["snowleopard", 62], ["lion", 62], ["wilddog", 61]], 1700);
  put("seg_t3:41,2", "Ace Ranger Sela", "Last stretch. Everything you have learned, all at once.",
    [["tiger", 62], ["peregrine", 62], ["mammoth", 62], ["hyena", 61]], 1800);
  put("seg_t3:41,3", "Veteran Ranger Juno", "I stand at the top so the Elite Four don't have to waste their time on you. Prove me wrong.",
    [["croc", 62], ["cheetah", 63], ["goldeneagle", 62], ["wolf", 62], ["leopard", 63]], 2000);
}
