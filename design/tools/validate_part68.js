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

const part = read("game.part68.jsx");
const entries = [...part.matchAll(/add\("([^"]+)", "([^"]+)"/g)]
  .map((match) => ({ id: match[1], name: match[2] }));
const ids = entries.map(({ id }) => id);

assert(entries.length === 44, `Expected 44 Part 68 entries, found ${entries.length}`);
assert(new Set(ids).size === 44, "Part 68 contains a duplicate DEX key");
assert(new Set(entries.map(({ name }) => name)).size === 44,
  "Part 68 contains a duplicate display name");

const index = read("index.html");
const gallery = read("gallery.html");
assert((index.match(/"game\.part68\.jsx"/g) || []).length === 1,
  "index.html must load game.part68.jsx exactly once");
assert((gallery.match(/"game\.part68\.jsx"/g) || []).length === 1,
  "gallery.html must load game.part68.jsx exactly once");

entries.forEach(({ id }) => {
  const info = new RegExp(`^  ${id}: \\{ taxon: "[^"]+"`, "m");
  assert(info.test(part), `${id} is missing its exact-species line`);
  const art = fs.readFileSync(path.join(ROOT, "art", `${id}.png`));
  assert(art.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])),
    `${id}.png is not a PNG`);
  assert(art.readUInt32BE(16) === 256 && art.readUInt32BE(20) === 256,
    `${id}.png is not 256x256`);
});

const makeMap = (name, zone, water = true) => ({
  name, zone, lvl: [10, 12], lvlWater: [20, 22],
  pool: [["existing-land", 1]],
  ...(water ? { poolWater: [["existing-water", 1]] } : {}),
});
const MAPS = {
  openocean: makeMap("The Open Blue", "oceanz"),
  kelp: makeMap("Kelp Cathedral", "kelpz"),
  reef: makeMap("Coral Reef Shallows", "reefz"),
  route1: makeMap("Hedgerow Road", "savanna"),
  savannaWild: makeMap("Long Grass", "savannaz"),
  wetlandWild: makeMap("Reedwater", "wetland"),
  desertWild: makeMap("Dry Country", "desert"),
  jungleWild: makeMap("The Weald", "jungle"),
  caveWild: makeMap("Limestone Cave", "cavezone"),
  shore: makeMap("The Strand", "coast"),
  town3: makeMap("Village Pond", "wetland"),
  aquarium: makeMap("The Aquarium", "reefz"),
  aqua_fresh: makeMap("Freshwater Hall", "reefz"),
  aqua_salt: makeMap("Saltwater Hall", "reefz"),
};
const runtime = {
  DEX: {}, INFO: {}, PHOTO_ART: {}, WHERE: {}, MAPS,
  buildLearnset: () => ({
    start: ["stub-one", "stub-two", "stub-three"],
    learn: [[10, "stub-four"], [20, "stub-five"]],
  }),
  console: { log: () => {} },
};
vm.runInNewContext(`${part}\n;globalThis.__P68_TEST = P68.slice();`, runtime,
  { filename: "game.part68.jsx" });

assert(runtime.__P68_TEST.length === 44, "Runtime P68 does not contain 44 keys");
ids.forEach((id) => {
  assert(runtime.DEX[id], `${id} is missing from DEX at runtime`);
  assert(runtime.INFO[id]?.f && runtime.INFO[id]?.taxon,
    `${id} is missing field-guide writing at runtime`);
  assert(runtime.DEX[id].m.length === 3 && runtime.DEX[id].l.length >= 1,
    `${id} has an incomplete learnset`);
  assert(runtime.PHOTO_ART[id] === true, `${id} is not marked for PNG artwork`);
});

const waterIds = new Set([
  "bluefintuna", "chubmackerel", "atlanticherring", "mahimahi", "opah",
  "oceanicwhitetip", "blueshark", "remora", "sargassumfrogfish",
  "humboldtsquid", "manowar", "loggerhead", "oliveridley", "bluemussel",
  "acornbarnacle", "greenanemone", "staghorncoral", "braincoral", "giantclam",
  "pistolshrimp", "humpheadwrasse", "northernpike", "electriceel",
]);
const excludedMaps = new Set(["town3", "aquarium", "aqua_fresh", "aqua_salt"]);
ids.forEach((id) => {
  const placements = [];
  Object.entries(MAPS).forEach(([map, data]) => {
    ["pool", "poolWater"].forEach((pool) => {
      const count = (data[pool] || []).filter(([species]) => species === id).length;
      assert(count <= 1, `${id} is duplicated in ${map}.${pool}`);
      if (count) placements.push({ map, pool });
    });
  });
  assert(placements.length > 0, `${id} has no encounter location`);
  assert(placements.every(({ pool }) => pool === (waterIds.has(id) ? "poolWater" : "pool")),
    `${id} is in the wrong encounter layer`);
  assert(placements.every(({ map }) => !excludedMaps.has(map)),
    `${id} leaked into a town or aquarium map`);
  const where = runtime.WHERE[id] || [];
  assert(where.length === placements.length, `${id} has stale field-guide locations`);
  where.forEach((place) => {
    const map = MAPS[place.k];
    const expected = waterIds.has(id) ? map.lvlWater : map.lvl;
    assert(place.lvl === expected, `${id} has the wrong field-guide level range`);
  });
});

const biomeContext = {};
vm.runInNewContext(read("design/biome_assign.js"), biomeContext,
  { filename: "design/biome_assign.js" });
const expectedBiomes = {
  opensea: ids.slice(0, 17),
  farmland: ids.slice(17, 26),
  coast: ids.slice(26, 31),
  reef: ids.slice(31, 36),
  desert: ids.slice(36, 39),
  forest: ids.slice(39, 41),
  wetland: ids.slice(41, 43),
  savanna: ids.slice(43),
};
Object.entries(expectedBiomes).forEach(([biome, biomeIds]) => biomeIds.forEach((id) => {
  assert(biomeContext.BIOME_BY_HAND[id] === biome,
    `${id} is not assigned to the ${biome} gallery group`);
}));

console.log("Part 68 validation passed: 44 animals, art, writing, encounters, locations, and gallery groups.");
