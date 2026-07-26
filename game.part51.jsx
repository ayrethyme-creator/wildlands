// ---------- Part 51: CERTIFICATION ----------
// Twelve arenas sat in this game with no reason to exist beyond "a game like
// this has gyms." Meanwhile the badges were already doing something quite
// specific: badge 1 lets you swim, badge 4 lets you soar, badge 7 lets you move
// boulders, and the shop will not sell you a Revive until badge 6.
//
// That is not a trophy shelf. That is a licence, gaining endorsements.
//
// So the leaders stop being opponents to beat and become assessors who sign you
// off — and a badge stops being a prize and becomes a permission, which the
// game now says out loud instead of leaving the player to infer it.
//
// The written half of each assessment already exists: the field exam from
// part42. The trial is the practical. Nothing mechanical changes here at all.

const CERTS = {
  1:  { title: "Field Competence — Large Carnivores",
        grants: "Water crossings. You may work with aquatic teammates in deep water.",
        note: "Naledi signs off that you can be trusted in country that has predators in it, "
            + "which mostly means she is satisfied you will not do anything stupid at a kill site." },
  2:  { title: "Pollinator Handling",
        grants: "Apiary access, and the right to inspect managed hives.",
        note: "Wren does not care whether you can win a fight. She cares whether you can stand "
            + "in a working hive without flinching, because a person who flinches gets stung and "
            + "then the bees get blamed." },
  3:  { title: "Wetland and Riverine Work",
        grants: "Deep-water survey. Delta and river systems are open to you.",
        note: "Mara's district floods twice a year. Half the certification is knowing when not to go in." },
  4:  { title: "Venomous Species Handling",
        grants: "Aerial survey. Your aerial teammates can carry you between towns.",
        note: "Sefu is a doctor before he is a ranger. He certifies handling because he is the one "
            + "who treats what happens when it goes wrong." },
  5:  { title: "Canopy and Climbing Work",
        grants: "Canopy survey at height.",
        note: "Kaia's assessment takes the longest and involves the least action of any of them." },
  6:  { title: "Arid Systems and Burrow Fauna",
        grants: "Desert survey, and permission to excavate burrows under supervision.",
        note: "Zahra will fail you for digging out an occupied burrow, whatever your reason was." },
  7:  { title: "Heavy Field Operations",
        grants: "Obstacle clearance. Strong teammates can move boulders.",
        note: "Bram's is the most practical of the twelve and the one most often failed on paperwork." },
  8:  { title: "Rapid Response",
        grants: "Priority call-out across the district.",
        note: "Yuki times everything. She is not testing speed for its own sake — a snared animal "
            + "has a window, and after it there is no point arriving." },
  9:  { title: "Cold Weather Operations",
        grants: "Winter and high-altitude fieldwork.",
        note: "Inuk's assessment is mostly about equipment, and he checks yours before he checks you." },
  10: { title: "Fire Ecology",
        grants: "Burn-site survey and post-fire assessment.",
        note: "Moyo works the season nobody wants. Most of what he certifies is knowing which "
            + "burns to leave alone." },
  11: { title: "Raptor and High-Altitude Survey",
        grants: "Unsupervised aerial survey at range.",
        note: "Sable's line about giving it the sky is the whole examination, and she means it "
            + "about the work as much as the bird." },
  12: { title: "Nocturnal Fieldwork",
        grants: "Night operations, unsupervised. The Summit will hear you.",
        note: "Nyx is the last signature before the Summit, and the only assessor who conducts "
            + "the entire thing in the dark." },
};

// Rewrite the leaders' closing lines from congratulation to certification.
(() => {
  let n = 0;
  Object.keys(GYMS).forEach((k) => {
    const g = GYMS[k];
    const c = CERTS[g.id];
    if (!c) return;
    g.cert = c.title;
    g.grants = c.grants;
    g.note = c.note;
    // The old quote stays as the leader's own words; the certification is
    // stated after it, so the player is told what they are now permitted to do
    // rather than left to discover it by walking into deep water.
    g.quote = `${g.quote}\n\n📋 Certified: ${c.title}.\n${c.grants}`;
    if (c.grants && !g.perk) g.perk = "";
    n++;
  });
  console.log("[part51] gym leaders reframed as assessors:", n);
})();
