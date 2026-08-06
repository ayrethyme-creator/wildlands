// ---------- Part 59: THE FIELD RECORD ----------
// A save code describes a game. This describes a naturalist.
//
// The save codes in part1 are excellent and they are shaped like this engine:
// party, box, items, badges, position, map. When the engine changes shape, so
// does the meaning of every one of those fields, and a code written today stops
// being readable.
//
// What has to survive a rewrite is much smaller and much more durable: which
// animals have been met, which were befriended, who they were as individuals,
// and which pieces of work were finished. That is a record of what a person
// did, and it should not depend on how the game happened to be built the year
// they did it.
//
// So this writes plain JSON, with names beside every key, no engine fields, and
// a version number. If the keys are renamed in a later game the names still
// identify the animal. If the file is opened in ten years by something that is
// not this game at all, it still reads.

const FIELD_RECORD_VERSION = 1;

const fieldRecord = (S) => {
  const dex = S.dex || {};
  const held = [...(S.party || []), ...(S.box || [])];

  // Individuals are recorded by species, because that is what identifies them
  // across a rewrite - a uid is a number this engine made up.
  const bySpecies = {};
  held.forEach((a) => {
    if (!DEX[a.sp]) return;
    (bySpecies[a.sp] = bySpecies[a.sp] || []).push({
      name: a.indiv || null,
      nature: (NATURES[a.nat] && NATURES[a.nat].n) || null,
      level: a.lvl || null,
      sex: a.sex || null,
    });
  });

  const groupOf = (sp) => {
    const d = DEX[sp];
    if (d.mem) return "vigil";
    if (d.t.includes("Fossil")) return "fossil";
    if (d.t.includes("Mythic")) return "mythic";
    return "living";
  };

  const species = Object.keys(DEX)
    .filter((sp) => (dex[sp] || 0) > 0 && !DEX[sp].pers)
    .sort()
    .map((sp) => {
      const d = DEX[sp];
      const rec = {
        key: sp,
        name: d.n,
        group: groupOf(sp),
        met: (dex[sp] || 0) >= 1,
        befriended: dex[sp] === 2,
      };
      // Conservation status is part of what the guide taught, so it travels.
      if (d.org) rec.status = d.org;
      if (bySpecies[sp]) rec.individuals = bySpecies[sp];
      return rec;
    });

  const arcs = Object.entries(S.arcs || {})
    .filter(([id]) => typeof ARCS !== "undefined" && ARCS[id])
    .map(([id, a]) => ({
      key: id,
      title: ARCS[id].title,
      region: ARCS[id].region,
      stage: (a && a.stage) || "listen",
      // The substance of an arc: what was funded, whether it worked, what else
      // was tried on the way, and the evidence that got there. Field names
      // taken from the live arc state rather than assumed - the first draft of
      // this recorded a "chose" field that does not exist.
      funded: (a && a.funded) || null,
      fundedLabel: (a && a.funded && ARCS[id].proposals[a.funded])
        ? ARCS[id].proposals[a.funded].label : null,
      solved: !!(a && a.solved),
      alsoTried: (a && a.tried) ? a.tried.filter((k) => k !== a.funded) : [],
      evidence: a && a.found ? Object.keys(a.found) : [],
      evidenceOf: ARCS[id].evidence ? Object.keys(ARCS[id].evidence).length : 0,
    }));

  const counted = (fn) => Object.keys(DEX).filter((sp) => !DEX[sp].pers && fn(sp)).length;

  return {
    format: "wildlands-field-record",
    version: FIELD_RECORD_VERSION,
    exported: new Date().toISOString(),
    note: "A record of what was met and learned. Deliberately free of engine "
      + "detail so it can be read by a later version of this game, or by "
      + "something that is not this game at all.",
    totals: {
      speciesInGuide: counted(() => true),
      met: counted((sp) => (dex[sp] || 0) >= 1),
      befriended: counted((sp) => dex[sp] === 2),
      living: counted((sp) => dex[sp] === 2 && groupOf(sp) === "living"),
      vigil: counted((sp) => dex[sp] === 2 && groupOf(sp) === "vigil"),
      fossil: counted((sp) => dex[sp] === 2 && groupOf(sp) === "fossil"),
      mythic: counted((sp) => dex[sp] === 2 && groupOf(sp) === "mythic"),
      arcsResolved: arcs.filter((a) => a.solved).length,
    },
    species,
    arcs,
  };
};

const fieldRecordText = (S) => JSON.stringify(fieldRecord(S), null, 2);

// A filename with the count in it, so a folder of these reads as a history
// rather than as five files called the same thing.
const fieldRecordName = (S) => {
  const r = fieldRecord(S);
  const d = new Date().toISOString().slice(0, 10);
  return `wildlands-field-record-${d}-${r.totals.befriended}of${r.totals.speciesInGuide}.json`;
};

/* Saving it out. A data URI on an anchor works everywhere this game runs,
   including a page opened from local storage on a phone, which is where it will
   actually be used. */
const saveFieldRecord = (S) => {
  try {
    const text = fieldRecordText(S);
    const a = document.createElement("a");
    a.href = "data:application/json;charset=utf-8," + encodeURIComponent(text);
    a.download = fieldRecordName(S);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return true;
  } catch (e) {
    return false;
  }
};

console.log("[part59] field record export ready | format v" + FIELD_RECORD_VERSION);
