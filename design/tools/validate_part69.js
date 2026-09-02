#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..", "..");
const read = (name) => fs.readFileSync(path.join(ROOT, name), "utf8");
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
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

// Parse the reviewed Markdown independently from the builder. In particular,
// this deliberately does not reuse its entry regex, so a parser regression
// cannot make the generated runtime and its test truncate in the same way.
const parseGuide = (source) => {
  const lines = source.split(/\r?\n/);
  const entries = [];
  for (let i = 0; i < lines.length;) {
    if (lines[i] === "## Research notes") break;
    if (!lines[i].startsWith("### ")) { i++; continue; }
    const name = lines[i].slice(4).trim();
    i++;
    while (i < lines.length && !lines[i].trim()) i++;
    const taxon = plain(lines[i] || "");
    i++;
    while (i < lines.length && !lines[i].trim()) i++;
    const body = [];
    while (i < lines.length && !lines[i].startsWith("### ") && !lines[i].startsWith("## ")) {
      body.push(lines[i]);
      i++;
    }
    entries.push({ key: slug(name), name, taxon, field: plain(body.join(" ")) });
  }
  return entries;
};

const guide = parseGuide(read("design/TERRANE_FIELD_GUIDE_66.md"));
const guideByKey = new Map(guide.map((entry) => [entry.key, entry]));
assert(guide.length === 66, `Expected 66 reviewed guide entries, found ${guide.length}`);
assert(guideByKey.size === 66, "The reviewed guide contains a duplicate key");
assert(new Set(guide.map(({ name }) => name)).size === 66,
  "The reviewed guide contains a duplicate display name");

const rejected = [
  "beardedseal", "hoodedseal", "chinstrappenguin", "colossalsquid",
  "himalayanmonal", "americancurl", "englishbudgie", "littlemarianafruitbat",
];
rejected.forEach((key) => assert(!guideByKey.has(key),
  `Rejected animal ${key} is present in the reviewed guide`));

const part = read("game.part69.jsx");
const makeMap = (name, zone, water = false) => ({
  name, zone, lvl: [10, 12],
  ...(water ? { lvlWater: [20, 22] } : {}),
  pool: [["existing-land", 1]],
  ...(water ? { poolWater: [["existing-water", 1]] } : {}),
});
const MAPS = {
  polarsea: makeMap("Ice Floe Passage", "polarz", true),
  tundra: makeMap("Hoarfrost Tundra", "tundraz"),
  alpineA: makeMap("Frostmere Pass", "alpine"),
  savanna: makeMap("Long Grass Savanna", "savannaz"),
  thicket: makeMap("Mosswood Thicket", "thicketz"),
  route2: makeMap("Reedwater Road", "wetland"),
  desertA: makeMap("Cinder Flats", "desert"),
  outback: makeMap("Red Sand Outback", "outbackz"),
  shore: makeMap("Emberglass Shore", "coast", true),
  route1: makeMap("Hedgerow Road", "savanna"),
  route4: makeMap("Sunscar Road", "desert"),
  rescue: makeMap("Rescue Row", "hearth"),
  kennel1: makeMap("The Kennels: The Yard", "hearth"),
  kennel2: makeMap("The Kennels: The Working Line", "hearth"),
  kennel4: makeMap("The Kennels: The Long Fence", "hearth"),
  cattery1: makeMap("The Cattery: Sunroom", "hearth"),
  cattery4: makeMap("The Cattery: Shorthairs", "hearth"),
  vig4: makeMap("The Island Grave", "vigilz"),
  vig6: makeMap("The Last Song", "vigilz"),
  vig7: makeMap("The Drowned Song", "vigilz"),
};
const runtime = {
  DEX: {}, INFO: {}, PHOTO_ART: {}, WHERE: {}, MAPS,
  buildLearnset: () => ({
    start: ["stub-one", "stub-two", "stub-three"],
    learn: [[10, "stub-four"], [20, "stub-five"]],
  }),
  console: { log: () => {} },
};
vm.runInNewContext(`${part}\n;globalThis.__P69_TEST = P69.slice();`
  + "globalThis.__P69_SPECIES_TEST = P69_SPECIES.map((x) => ({...x}));", runtime,
{ filename: "game.part69.jsx" });

const species = runtime.__P69_SPECIES_TEST;
const ids = runtime.__P69_TEST;
assert(species.length === 66 && ids.length === 66,
  "Part 69 runtime does not contain exactly 66 animals");
assert(new Set(ids).size === 66, "Part 69 contains a duplicate DEX key");
assert(new Set(species.map(({ n }) => n)).size === 66,
  "Part 69 contains a duplicate display name");
rejected.forEach((key) => assert(!ids.includes(key),
  `Rejected animal ${key} entered Part 69`));

const groupCounts = species.reduce((counts, entry) => {
  counts[entry.group] = (counts[entry.group] || 0) + 1;
  return counts;
}, {});
const expectedCounts = {
  polar: 21, alpine: 15, breeding: 14, kept: 6, vigil: 5,
  savanna: 1, forest: 2, desert: 1, coast: 1,
};
assert(Object.keys(groupCounts).length === Object.keys(expectedCounts).length
  && Object.entries(expectedCounts).every(([group, count]) => groupCounts[group] === count),
`Unexpected Part 69 group counts: ${JSON.stringify(groupCounts)}`);

species.forEach((entry) => {
  const source = guideByKey.get(entry.k);
  assert(source, `${entry.k} has no reviewed source entry`);
  assert(entry.n === source.name, `${entry.k} display name differs from the reviewed source`);
  assert(runtime.INFO[entry.k]?.taxon === source.taxon,
    `${entry.k} exact-species line differs from the reviewed source`);
  assert(runtime.INFO[entry.k]?.f === source.field,
    `${entry.k} field-guide paragraph differs from the reviewed source`);
  assert(source.field.length >= 400,
    `${entry.k} field-guide paragraph looks truncated (${source.field.length} characters)`);
  assert(runtime.DEX[entry.k], `${entry.k} is missing from DEX at runtime`);
  assert(runtime.DEX[entry.k].m.length === 3 && runtime.DEX[entry.k].l.length >= 1,
    `${entry.k} has an incomplete learnset`);
  assert(runtime.PHOTO_ART[entry.k] === true, `${entry.k} is not marked for PNG artwork`);
  assert(!!runtime.DEX[entry.k].breed === (entry.group === "breeding"),
    `${entry.k} has the wrong Breeding Centre flag`);
  assert(!!runtime.DEX[entry.k].dom === (entry.group === "kept"),
    `${entry.k} has the wrong companion flag`);
  assert(!!runtime.DEX[entry.k].mem === (entry.group === "vigil"),
    `${entry.k} has the wrong Vigil flag`);

  const art = fs.readFileSync(path.join(ROOT, "art", `${entry.k}.png`));
  assert(art.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
    `${entry.k}.png is not a PNG`);
  assert(art.readUInt32BE(16) === 256 && art.readUInt32BE(20) === 256,
    `${entry.k}.png is not 256x256`);
});

const index = read("index.html");
const gallery = read("gallery.html");
[index, gallery].forEach((loader, i) => {
  const label = i ? "gallery.html" : "index.html";
  assert((loader.match(/"game\.part69\.jsx"/g) || []).length === 1,
    `${label} must load game.part69.jsx exactly once`);
  assert(loader.indexOf('"game.part69.jsx"') < loader.indexOf('"game.part59.jsx"'),
    `${label} must load Part 69 before Part 59 takes its roster view`);
  assert(loader.indexOf('"game.part69.jsx"') < loader.indexOf('"game.part63.jsx"'),
    `${label} must load Part 69 before Part 63 takes its achievement groups`);
});

const waterIds = new Set([
  "antarcticicefish", "antarcticseaspider", "antarctictoothfish", "arcticchar",
  "arcticcod", "capelin", "greenlandhalibut",
]);
const specialMaps = {
  breeding: /^(kennel|cattery|rescue)/,
  kept: /^(route1|route4|rescue)$/,
  vigil: /^vig/,
};
species.forEach((entry) => {
  const placements = [];
  Object.entries(MAPS).forEach(([map, data]) => {
    ["pool", "poolWater"].forEach((pool) => {
      const count = (data[pool] || []).filter(([key]) => key === entry.k).length;
      assert(count <= 1, `${entry.k} is duplicated in ${map}.${pool}`);
      if (count) placements.push({ map, pool });
    });
  });
  assert(placements.length > 0, `${entry.k} has no encounter location`);
  if (waterIds.has(entry.k)) {
    assert(placements.every(({ pool }) => pool === "poolWater"),
      `${entry.k} is in the wrong encounter layer`);
  }
  if (specialMaps[entry.group]) {
    assert(placements.every(({ map }) => specialMaps[entry.group].test(map)),
      `${entry.k} is outside its ${entry.group} area`);
  } else {
    assert(placements.every(({ map }) => !/^(kennel|cattery|rescue|vig)/.test(map)),
      `${entry.k} leaked into a special area`);
  }
  const where = runtime.WHERE[entry.k] || [];
  assert(where.length === placements.length, `${entry.k} has stale field-guide locations`);
  where.forEach((place) => {
    const map = MAPS[place.k];
    const inWater = placements.some(({ map: key, pool }) => key === place.k && pool === "poolWater");
    assert(place.lvl === (inWater ? map.lvlWater : map.lvl),
      `${entry.k} has the wrong field-guide level range`);
  });
});

const biomeContext = {};
vm.runInNewContext(read("design/biome_assign.js"), biomeContext,
  { filename: "design/biome_assign.js" });
species.filter(({ group }) => group !== "vigil").forEach((entry) => {
  const expected = ["breeding", "kept"].includes(entry.group) ? "farmland" : entry.group;
  assert(biomeContext.BIOME_BY_HAND[entry.k] === expected,
    `${entry.k} is not assigned to the ${expected} gallery group`);
});

console.log("Part 69 validation passed: 66 approved animals, complete reviewed writing, art, flags, encounters, locations, and gallery groups.");
