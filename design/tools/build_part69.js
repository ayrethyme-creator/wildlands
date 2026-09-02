#!/usr/bin/env node
"use strict";

/* Build the runtime data for the approved sixty-six from its reviewed Markdown.

   The long field-guide paragraphs have one readable source:
   design/TERRANE_FIELD_GUIDE_66.md. This builder combines that writing with the
   small amount of game-only data that prose cannot supply: battle types, stats,
   encounter grouping, diet and habitat labels. Do not hand-edit game.part69.jsx;
   change the source or this table and rebuild it instead. */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const SOURCE = path.join(ROOT, "design", "TERRANE_FIELD_GUIDE_66.md");
const OUTPUT = path.join(ROOT, "game.part69.jsx");

// key, types, [heart, attack, defence, speed], catch rate, group, diet, habitat,
// optional displayed status, optional internal status note.
const META_ROWS = [
  ["adeliepenguin", ["Ice", "Aquatic"], [42, 48, 40, 54], 0.38, "polar", "fish and krill", "Antarctic coasts and the shifting pack ice"],
  ["antarcticicefish", ["Ice", "Aquatic"], [38, 44, 34, 42], 0.42, "polar", "fish and krill", "cold water over the Antarctic continental shelf"],
  ["antarcticseaspider", ["Aquatic", "Armor"], [34, 46, 40, 30], 0.42, "polar", "soft-bodied seafloor animals", "the cold Antarctic seafloor"],
  ["antarctictoothfish", ["Ice", "Aquatic"], [72, 68, 58, 48], 0.22, "polar", "fish and squid", "cold, deep water around Antarctica"],
  ["arcticchar", ["Ice", "Aquatic"], [48, 52, 42, 58], 0.34, "polar", "insects, crustaceans, and fish", "Arctic lakes, rivers, and coastal seas"],
  ["arcticcod", ["Ice", "Aquatic"], [36, 42, 34, 58], 0.44, "polar", "zooplankton and small fish", "Arctic seas, especially beneath sea ice"],
  ["arctictern", ["Aerial", "Swift"], [34, 38, 30, 82], 0.34, "polar", "small fish and marine invertebrates", "polar coasts and oceans at both ends of its migration"],
  ["arcticwolf", ["Ice", "Predator"], [64, 70, 54, 60], 0.24, "polar", "muskoxen, caribou, hares, and other prey", "the open tundra of the High Arctic"],
  ["capelin", ["Aquatic", "Swift"], [30, 32, 28, 66], 0.5, "polar", "plankton and tiny crustaceans", "cold North Atlantic and Arctic seas"],
  ["collaredlemming", ["Ice", "Burrow"], [28, 30, 32, 52], 0.52, "polar", "tundra grasses, sedges, and willow", "Arctic tundra, including winter tunnels beneath snow"],
  ["gentoopenguin", ["Ice", "Aquatic"], [46, 50, 42, 68], 0.34, "polar", "krill, fish, and squid", "subantarctic islands and the Antarctic Peninsula"],
  ["greenlandhalibut", ["Ice", "Aquatic"], [58, 62, 52, 42], 0.28, "polar", "fish, squid, and crustaceans", "cold, deep North Atlantic and Arctic water"],
  ["ivorygull", ["Ice", "Aerial"], [36, 40, 34, 66], 0.4, "polar", "fish, marine invertebrates, and carrion", "High-Arctic sea ice and remote breeding cliffs"],
  ["kingpenguin", ["Ice", "Aquatic"], [56, 52, 48, 52], 0.3, "polar", "fish and squid", "subantarctic islands and surrounding ocean"],
  ["littleauk", ["Aquatic", "Aerial"], [30, 34, 28, 68], 0.46, "polar", "zooplankton and tiny fish", "Arctic seas and crowded coastal colonies"],
  ["longtailedduck", ["Aquatic", "Aerial"], [36, 40, 34, 66], 0.42, "polar", "molluscs, crustaceans, and aquatic insects", "Arctic breeding waters and cold northern coasts"],
  ["ringedseal", ["Ice", "Aquatic"], [58, 50, 54, 48], 0.3, "polar", "fish and crustaceans", "Arctic sea ice, where it keeps breathing holes open"],
  ["rockptarmigan", ["Ice", "Aerial"], [42, 44, 42, 54], 0.42, "polar", "buds, leaves, berries, and seeds", "rocky Arctic tundra and high mountains"],
  ["rossgull", ["Ice", "Aerial"], [32, 36, 30, 70], 0.4, "polar", "small fish and marine invertebrates", "High-Arctic seas and little-known tundra breeding grounds"],
  ["snowpetrel", ["Ice", "Aerial"], [32, 36, 30, 72], 0.4, "polar", "krill, fish, squid, and carrion", "Antarctic pack ice and ice-free nesting rock"],
  ["southpolarskua", ["Aerial", "Predator"], [46, 56, 42, 68], 0.34, "polar", "fish, eggs, chicks, and carrion", "Antarctic coasts and the Southern Ocean"],

  ["alpinechamois", ["Armor", "Swift"], [54, 52, 50, 72], 0.34, "alpine", "grasses, herbs, buds, and shoots", "steep European mountain slopes and alpine meadows"],
  ["alpinechough", ["Aerial", "Swift"], [34, 38, 32, 68], 0.42, "alpine", "invertebrates, berries, and scraps", "high European and Asian mountains"],
  ["alpinesalamander", ["Ice", "Venom"], [36, 38, 40, 28], 0.46, "alpine", "small invertebrates", "cool, damp ground in the European Alps"],
  ["apollobutterfly", ["Bug", "Aerial"], [26, 32, 24, 62], 0.5, "alpine", "flower nectar; the caterpillar eats stonecrop", "sunny mountain meadows and rocky slopes"],
  ["argali", ["Armor", "Wild"], [68, 64, 62, 48], 0.26, "alpine", "grasses and other mountain plants", "open mountains and plateaus across Central Asia"],
  ["barheadedgoose", ["Aerial", "Ice"], [46, 48, 42, 70], 0.34, "alpine", "grasses, grains, and wetland plants", "Central Asian lakes and high Himalayan migration routes"],
  ["himalayanjumpingspider", ["Bug", "Ice"], [22, 38, 24, 66], 0.52, "alpine", "springtails and other tiny arthropods", "rock and snow margins high in the Himalaya"],
  ["kiang", ["Swift", "Wild"], [64, 58, 52, 72], 0.3, "alpine", "grasses and sedges", "the high, cold Tibetan Plateau"],
  ["lammergeier", ["Aerial", "Armor"], [60, 68, 54, 66], 0.26, "alpine", "bones and carrion", "mountain cliffs across southern Europe, Africa, and Asia"],
  ["mountaingoat", ["Armor", "Ice"], [62, 58, 66, 54], 0.3, "alpine", "grasses, sedges, shrubs, and lichens", "cliffs and alpine slopes of northwestern North America"],
  ["rockhyrax", ["Armor", "Wild"], [38, 36, 46, 48], 0.44, "alpine", "grasses, leaves, and shoots", "rocky outcrops and cliffs in Africa and the Middle East"],
  ["tibetanantelope", ["Swift", "Ice"], [52, 50, 44, 84], 0.26, "alpine", "grasses, sedges, and forbs", "high, cold steppe on the Tibetan Plateau"],
  ["wallcreeper", ["Aerial", "Bug"], [28, 34, 28, 68], 0.46, "alpine", "insects and spiders picked from rock", "sheer mountain cliffs across Eurasia"],
  ["whiterumpedvulture", ["Aerial", "Wild"], [58, 56, 48, 62], 0.26, "alpine", "carrion", "open country and cliffs in South Asia"],
  ["woollyflyingsquirrel", ["Canopy", "Ice"], [38, 40, 34, 72], 0.32, "alpine", "leaves, fruit, buds, and nuts", "high Himalayan conifer forest and rocky cliffs"],

  ["gemsbok", ["Armor", "Wild"], [66, 64, 62, 58], 0.28, "savanna", "grasses, leaves, and moisture-rich desert plants", "dry savanna and desert across southern Africa"],
  ["iberianlynx", ["Predator", "Swift"], [56, 68, 48, 72], 0.24, "forest", "European rabbits and other small prey", "Mediterranean scrub and open woodland in Iberia"],
  ["woodfrog", ["Ice", "Aquatic"], [34, 36, 34, 42], 0.46, "forest", "insects and other small invertebrates", "northern forest floors and temporary woodland pools"],
  ["mexicanredknee", ["Bug", "Venom"], [44, 50, 52, 30], 0.36, "desert", "insects and other small animals", "dry scrub and burrows on Mexico's Pacific side"],
  ["littlebluepenguin", ["Aquatic", "Swift"], [36, 38, 34, 60], 0.42, "coast", "small fish, squid, and crustaceans", "southern Australian and New Zealand coasts"],

  ["anatolianshepherd", ["Armor", "Wild"], [64, 58, 62, 44], 0.32, "breeding", "a balanced domestic dog diet", "homes and working farms with people"],
  ["angorarabbit", ["Swift", "Wild"], [34, 32, 34, 56], 0.48, "breeding", "hay, grasses, and leafy plants", "human care as a domestic rabbit breed"],
  ["ballpythonmorph", ["Predator", "Armor"], [50, 56, 54, 28], 0.38, "breeding", "appropriately sized animal prey", "human care as a selectively bred colour morph"],
  ["bredaxolotl", ["Aquatic", "Swift"], [36, 36, 34, 38], 0.46, "breeding", "worms and small aquatic animals", "cool freshwater aquariums under human care"],
  ["bullterrier", ["Armor", "Predator"], [52, 58, 50, 44], 0.36, "breeding", "a balanced domestic dog diet", "homes with people as a domestic dog breed"],
  ["burmese", ["Swift", "Night"], [44, 50, 40, 62], 0.4, "breeding", "a balanced domestic cat diet", "homes with people as a domestic cat breed"],
  ["cornishrex", ["Swift", "Night"], [38, 44, 34, 68], 0.42, "breeding", "a balanced domestic cat diet", "warm homes with people as a domestic cat breed"],
  ["domesticfox", ["Swift", "Predator"], [42, 52, 38, 70], 0.34, "breeding", "a varied omnivorous diet under expert care", "specialist human care as a domesticated fox line"],
  ["egyptianmau", ["Swift", "Predator"], [42, 50, 36, 76], 0.38, "breeding", "a balanced domestic cat diet", "homes with people as a domestic cat breed"],
  ["fancypigeon", ["Aerial", "Swift"], [34, 36, 32, 64], 0.44, "breeding", "seeds, grains, and suitable greens", "lofts and homes under human care"],
  ["frenchbulldog", ["Armor", "Wild"], [42, 40, 46, 28], 0.42, "breeding", "a balanced domestic dog diet", "homes with people as a domestic dog breed"],
  ["manx", ["Swift", "Wild"], [42, 46, 40, 58], 0.4, "breeding", "a balanced domestic cat diet", "homes with people as a domestic cat breed"],
  ["munchkin", ["Wild", "Armor"], [40, 40, 42, 42], 0.42, "breeding", "a balanced domestic cat diet", "homes with people as a domestic cat breed"],
  ["silkworm", ["Bug", "Canopy"], [24, 20, 28, 12], 0.56, "breeding", "mulberry leaves", "human-managed trays and mulberry farms"],

  ["mutt", ["Wild", "Swift"], [48, 50, 44, 58], 0.46, "kept", "a balanced domestic dog diet", "homes and communities with people"],
  ["pitbull", ["Armor", "Predator"], [54, 60, 52, 48], 0.38, "kept", "a balanced domestic dog diet", "homes with people as a domestic dog type"],
  ["cornsnake", ["Swift", "Predator"], [40, 48, 38, 58], 0.42, "kept", "appropriately sized animal prey", "temperate North America and, as a companion, human care"],
  ["beardeddragon", ["Armor", "Wild"], [44, 46, 48, 36], 0.42, "kept", "insects and leafy plants", "dry Australian habitats and, as a companion, human care"],
  ["russiantortoise", ["Armor", "Wild"], [48, 34, 62, 22], 0.4, "kept", "grasses, leaves, and flowers", "dry Central Asian country and, as a companion, human care"],
  ["leopardgecko", ["Night", "Swift"], [34, 42, 34, 58], 0.44, "kept", "insects and other small invertebrates", "dry South Asian ground and, as a companion, human care"],

  ["alaotragrebe", ["Aquatic", "Aerial"], [36, 38, 32, 52], 0.5, "vigil", "small fish and aquatic invertebrates", "Lake Alaotra in Madagascar", "EX", "† 1985"],
  ["bachmanswarbler", ["Aerial", "Bug"], [28, 34, 26, 64], 0.52, "vigil", "insects and spiders", "swamp forest of the southeastern United States and Cuba", "CR", "CR (Possibly Extinct); U.S. FWS declared extinct in 2021"],
  ["christmasislandforestskink", ["Canopy", "Swift"], [30, 36, 32, 56], 0.5, "vigil", "insects and other small invertebrates", "forest floor on Christmas Island", "EX", "† 2014"],
  ["roundislandburrowingboa", ["Predator", "Burrow"], [46, 52, 44, 40], 0.46, "vigil", "lizards and other small prey", "Round Island, Mauritius", "EX", "† 1975"],
  ["tecopapupfish", ["Aquatic", "Swift"], [26, 32, 24, 60], 0.54, "vigil", "algae and tiny aquatic invertebrates", "warm desert springs near Tecopa, California", "EX", "† 1970"],
];

const KEY_OVERRIDES = { "Ross's Gull": "rossgull" };
const slug = (name) => KEY_OVERRIDES[name] || name.normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "");
const plain = (text) => text
  .replace(/\*([^*]+)\*/g, "$1")
  .replace(/`([^`]+)`/g, "$1")
  .replace(/\s+/g, " ")
  .trim();

const raw = fs.readFileSync(SOURCE, "utf8");
// Keep multiline mode for heading anchors, but use an explicit end-of-input
// assertion. A plain `$` under /m would stop at the end of the first physical
// line and silently truncate every field-guide paragraph.
const entryPattern = /^### ([^\n]+)\r?\n\r?\n(\*[^\n]+\* · [^\n]+)\r?\n\r?\n([\s\S]+?)(?=\r?\n\r?\n(?:### |## )|(?![\s\S]))/gm;
const entries = [...raw.matchAll(entryPattern)].map((match) => {
  const name = match[1].trim();
  return {
    key: slug(name),
    name,
    taxon: plain(match[2]),
    field: plain(match[3]),
  };
});
const meta = new Map(META_ROWS.map((row) => [row[0], row]));
const failures = [];

if (entries.length !== 66) failures.push(`found ${entries.length} guide entries instead of 66`);
if (META_ROWS.length !== 66) failures.push(`found ${META_ROWS.length} metadata rows instead of 66`);
if (new Set(META_ROWS.map((row) => row[0])).size !== META_ROWS.length) failures.push("metadata has a duplicate key");
entries.forEach((entry) => {
  if (!meta.has(entry.key)) failures.push(`no metadata for ${entry.name} (${entry.key})`);
});
META_ROWS.forEach(([key]) => {
  if (!entries.some((entry) => entry.key === key)) failures.push(`metadata key ${key} has no guide entry`);
});
if (failures.length) throw new Error(failures.join("\n"));

const species = entries.map((entry) => {
  const [key, types, stats, capture, group, diet, habitat, status, org] = meta.get(entry.key);
  return {
    k: key,
    n: entry.name,
    t: types,
    b: { h: stats[0], a: stats[1], d: stats[2], s: stats[3] },
    c: capture,
    group,
    d: diet,
    h: habitat,
    ...(status ? { status } : {}),
    ...(org ? { org } : {}),
    taxon: entry.taxon,
    f: entry.field,
  };
});

const data = JSON.stringify(species, null, 2);
const output = `// ---------- Part 69: THE APPROVED SIXTY-SIX ----------
// Generated by design/tools/build_part69.js from the reviewed field-guide source.
// Change that source or its small game-metadata table, then run the builder.
//
// This part loads late, after the game's maps and field-guide structures exist,
// but before part63 snapshots the Breeding Centre and Vigil achievement groups.

const P69_SPECIES = ${data};
const P69 = P69_SPECIES.map((species) => species.k);

P69_SPECIES.forEach((species) => {
  const special = species.group === "breeding"
    ? { breed: true, org: species.org || "selectively bred form" }
    : species.group === "kept"
      ? { dom: true, org: species.org || "companion animal" }
      : species.group === "vigil"
        ? { mem: true, org: species.org || species.status || "The Vigil" }
        : {};
  DEX[species.k] = {
    n: species.n, art: species.k, t: species.t.slice(), b: { ...species.b },
    m: [], l: [], c: species.c, ...special,
  };
  INFO[species.k] = {
    taxon: species.taxon, d: species.d, h: species.h, f: species.f,
    ...(species.status ? { s: species.status } : {}),
  };
});

Object.assign(PHOTO_ART, Object.fromEntries(P69.map((key) => [key, true])));

{
  let built = 0;
  const thin = [];
  P69.forEach((key) => {
    const learned = buildLearnset(key);
    if (!learned || !learned.start || !learned.start.length) {
      thin.push(key);
      DEX[key].m = ["tackle"];
      DEX[key].l = [];
      return;
    }
    DEX[key].m = learned.start.slice(0, 3);
    DEX[key].l = (learned.learn || []).filter(([, move]) => !DEX[key].m.includes(move));
    built++;
  });

  const placements = [
    { map: "polarsea", pool: "poolWater", list: [
      "antarcticicefish", "antarcticseaspider", "antarctictoothfish", "arcticchar",
      "arcticcod", "capelin", "greenlandhalibut",
    ] },
    { map: "polarsea", pool: "pool", list: [
      "adeliepenguin", "arctictern", "gentoopenguin", "ivorygull", "kingpenguin",
      "littleauk", "longtailedduck", "ringedseal", "rossgull", "snowpetrel",
      "southpolarskua",
    ] },
    { map: "tundra", pool: "pool", list: [
      "arctictern", "arcticwolf", "collaredlemming", "ivorygull", "rockptarmigan",
      "rossgull",
    ] },
    { zone: "alpine", pool: "pool", list: [
      "alpinechamois", "alpinechough", "alpinesalamander", "apollobutterfly",
      "argali", "barheadedgoose", "himalayanjumpingspider", "kiang", "lammergeier",
      "mountaingoat", "rockhyrax", "tibetanantelope", "wallcreeper",
      "whiterumpedvulture", "woollyflyingsquirrel",
    ] },
    { map: "savanna", pool: "pool", list: ["gemsbok"] },
    { map: "thicket", pool: "pool", list: ["iberianlynx", "woodfrog"] },
    { map: "route2", pool: "pool", list: ["woodfrog"] },
    { zone: "desert", pool: "pool", list: ["mexicanredknee"] },
    { map: "outback", pool: "pool", list: ["mexicanredknee"] },
    { map: "shore", pool: "pool", list: ["littlebluepenguin"] },

    { map: "route1", pool: "pool", list: ["mutt", "pitbull"] },
    { map: "route4", pool: "pool", list: [
      "beardeddragon", "cornsnake", "leopardgecko", "russiantortoise",
    ] },
    { map: "rescue", pool: "pool", list: [
      "mutt", "pitbull", "beardeddragon", "cornsnake", "leopardgecko",
      "russiantortoise", "angorarabbit", "ballpythonmorph", "bredaxolotl",
      "fancypigeon", "silkworm",
    ] },
    { map: "kennel1", pool: "pool", list: ["frenchbulldog"] },
    { map: "kennel2", pool: "pool", list: ["anatolianshepherd", "bullterrier"] },
    { map: "kennel4", pool: "pool", list: ["domesticfox"] },
    { map: "cattery1", pool: "pool", list: ["manx", "munchkin"] },
    { map: "cattery4", pool: "pool", list: ["burmese", "cornishrex", "egyptianmau"] },

    { map: "vig4", pool: "pool", list: [
      "christmasislandforestskink", "roundislandburrowingboa",
    ] },
    { map: "vig6", pool: "pool", list: ["bachmanswarbler"] },
    { map: "vig7", pool: "pool", list: ["alaotragrebe", "tecopapupfish"] },
  ];

  const placed = new Set();
  let added = 0;
  const usable = (mapKey, pool) => MAPS[mapKey] && Array.isArray(MAPS[mapKey][pool])
    && MAPS[mapKey][pool].length;
  const drop = (mapKey, pool, key) => {
    if (!usable(mapKey, pool)) return;
    if (!MAPS[mapKey][pool].some(([species]) => species === key)) {
      MAPS[mapKey][pool] = [...MAPS[mapKey][pool], [key, 3]];
      added++;
    }
    const places = WHERE[key] || (WHERE[key] = []);
    if (!places.some((place) => place.k === mapKey)) {
      places.push({
        k: mapKey, n: MAPS[mapKey].name, z: MAPS[mapKey].zone,
        lvl: pool === "poolWater" ? (MAPS[mapKey].lvlWater || MAPS[mapKey].lvl) : MAPS[mapKey].lvl,
      });
    }
    placed.add(key);
  };

  placements.forEach(({ map, zone, pool, list }) => {
    const maps = map ? [map] : Object.keys(MAPS).filter((key) => MAPS[key].zone === zone);
    list.forEach((key) => maps.forEach((mapKey) => drop(mapKey, pool, key)));
  });

  const homeless = P69.filter((key) => !placed.has(key));
  const hiddenFromGuide = P69.filter((key) => !(WHERE[key] || []).length);
  console.log("[part69] approved sixty-six: " + P69.length + " species | learnsets: " + built
    + " | pool entries added: " + added + " | reachable: " + placed.size + "/" + P69.length
    + " | guide locations: " + (P69.length - hiddenFromGuide.length) + "/" + P69.length
    + (thin.length ? " | FALLBACK MOVES: " + thin.join(", ") : "")
    + (homeless.length ? " | NOWHERE TO LIVE: " + homeless.join(", ") : "")
    + (hiddenFromGuide.length ? " | HIDDEN FROM GUIDE: " + hiddenFromGuide.join(", ") : ""));
}
`;

fs.writeFileSync(OUTPUT, output, "utf8");
console.log(`Wrote ${path.relative(ROOT, OUTPUT)} with ${species.length} approved animals.`);
