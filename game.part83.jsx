// ---------- Part 83: THE PLACE THE FIGHT HAPPENS ----------
// Ayr, 2026-09-04: "the backgrounds during the battles are boring and [barely]
// make sense. the scene in the background should match the biome."
//
// Both halves were true and the second one was worse. part3's ARENA is ten flat
// two-stop gradients, and part5 reads it as ARENA[zone] || ARENA.savanna - so the
// sixteen zones with no entry all fell back to a green-and-gold savanna wash.
// Meeting a viperfish a kilometre down in the abyss, or a leopard seal on the
// Antarctic shelf, and getting the Long Grass behind it.
//
// This replaces the table with a SCENE for every zone the game actually has:
// sky, a sun or a moon where there is one, a horizon, and one or two silhouettes
// that say which place this is. All of it is layered CSS gradients on the same
// single `background` string part5 already sets, so nothing downstream changes -
// ARENA is an object, and filling it in is enough.
//
// WHY GRADIENTS RATHER THAN PICTURES. Twenty-six painted backdrops is twenty-six
// more files to load before a battle can start, and the battle screen is the one
// place in this game that has to open instantly. These cost nothing and they
// scale to any screen.
//
// The order of layers is painter's order: FIRST in the list is drawn ON TOP.
// That is the opposite of how the list reads, and it is the one thing to get
// right here - the ground has to be last or it covers the sky.

{
  // ---- the pieces every scene is built from ----
  // A disc: sun, moon, or the light of something down in the dark.
  const disc = (col, x, y, r) =>
    `radial-gradient(circle at ${x} ${y}, ${col} 0 ${r}, transparent calc(${r} + 1px))`;
  // A landform on the horizon. Wide and shallow reads as hills; tall and narrow
  // reads as a peak. `size` is BOTH radii in one string - "70% 16%" - because an
  // ellipse in CSS takes exactly two, and a version of this that took them as
  // separate arguments emitted `ellipse 70% 16% 18%`, which is three. One
  // invalid layer invalidates the whole background shorthand, so every scene
  // using it rendered as nothing at all while the three that happened not to use
  // it looked fine.
  const form = (col, size, x, y) =>
    `radial-gradient(ellipse ${size} at ${x} ${y}, ${col} 0 100%, transparent 101%)`;
  // The flat ground, and the band of sky above it.
  const ground = (col, at) =>
    `linear-gradient(to bottom, transparent 0 ${at}, ${col} ${at} 100%)`;
  const sky = (a, b) => `linear-gradient(to bottom, ${a}, ${b})`;
  const scene = (...layers) => layers.filter(Boolean).join(", ");

  Object.assign(ARENA, {
    // ---- open country ----
    savanna: scene(
      disc("#ffe9a8", "78%", "20%", "7%"),
      form("#6f8f52", "70% 16%", "18%", "62%"),
      form("#5f7f46", "55% 12%", "84%", "66%"),
      ground("#b8a06a", "64%"),
      sky("#cfe3f2", "#efd9a4")),
    savannaz: scene(
      disc("#ffdf94", "20%", "22%", "7%"),
      form("#6b8a50", "80% 14%", "60%", "63%"),
      ground("#bda66f", "64%"),
      sky("#c9dff2", "#f0dca8")),
    highveld: scene(
      form("#8fa06a", "90% 18%", "40%", "60%"),
      form("#7a8c58", "60% 12%", "85%", "68%"),
      ground("#a89a72", "62%"),
      sky("#cddff0", "#e8e0bb")),
    outbackz: scene(
      disc("#ffd27a", "76%", "18%", "8%"),
      form("#a8603c", "60% 14%", "25%", "63%"),
      ground("#c98d5a", "64%"),
      sky("#f2c98f", "#e8a469")),
    desert: scene(
      disc("#fff3c4", "74%", "18%", "8%"),
      form("#e6c489", "70% 16%", "22%", "64%"),
      form("#dbb87a", "55% 12%", "80%", "70%"),
      ground("#d8b57e", "66%"),
      sky("#f7e6b4", "#f0d199")),

    // ---- water ----
    // Shore: the horizon is the whole point, so it sits high and hard.
    coast: scene(
      disc("#fff0c0", "80%", "22%", "6%"),
      form("#f0e0bc", "80% 10%", "50%", "76%"),
      ground("#7fb2c9", "52%"),
      sky("#bcdcef", "#e8f0e0")),
    wetland: scene(
      form("#3f5f3c", "30% 12%", "16%", "58%"),
      form("#4e6e4c", "26% 10%", "52%", "60%"),
      form("#3f5f3c", "28% 11%", "88%", "59%"),
      ground("#6f9a7a", "62%"),
      sky("#cfe4e8", "#c4d8a8")),
    // Under the surface the light comes from ABOVE, so the gradient inverts.
    reefz: scene(
      form("#e8a25c", "35% 14%", "22%", "82%"),
      form("#c96f8a", "28% 11%", "72%", "86%"),
      ground("#2f7f96", "70%"),
      sky("#7fd4e0", "#2e86a8")),
    kelpz: scene(
      form("#2c5c3a", "12% 70%", "18%", "60%"),
      form("#245030", "10% 60%", "78%", "70%"),
      sky("#4f9a8a", "#12384a")),
    oceanz: scene(
      disc("rgba(255,255,255,.30)", "50%", "6%", "24%"),
      sky("#2e7fa8", "#0b2f4c")),
    // A kilometre down there is no sky at all. What light there is, something
    // living is making.
    abyssz: scene(
      disc("rgba(120,220,230,.16)", "70%", "30%", "9%"),
      disc("rgba(150,230,240,.10)", "24%", "62%", "6%"),
      sky("#071824", "#01070d")),

    // ---- forest ----
    grove: scene(
      form("#2f4a2c", "13% 20%", "8%", "56%"),
      form("#355430", "11% 17%", "26%", "59%"),
      form("#2a4428", "12% 19%", "62%", "57%"),
      form("#31502c", "10% 16%", "88%", "60%"),
      ground("#4a5c38", "66%"),
      sky("#9fc0a8", "#7fa06c")),
    jungle: scene(
      form("#1a4020", "14% 26%", "6%", "50%"),
      form("#1f4a26", "12% 22%", "24%", "54%"),
      form("#1a4020", "13% 24%", "50%", "52%"),
      form("#204d27", "12% 21%", "76%", "55%"),
      form("#1a4020", "14% 25%", "96%", "51%"),
      ground("#3c5a30", "68%"),
      sky("#7fae72", "#4f7a44")),
    canopyz: scene(
      form("#24491f", "22% 18%", "6%", "10%"),
      form("#2a5230", "20% 15%", "38%", "6%"),
      form("#24491f", "22% 17%", "72%", "9%"),
      form("#2a5230", "18% 14%", "98%", "5%"),
      ground("#4a6b3c", "74%"),
      sky("#a8cf92", "#6b9455")),
    taigaz: scene(
      form("#1f3a30", "6% 24%", "10%", "50%"),
      form("#22402f", "5% 20%", "22%", "54%"),
      form("#1c352a", "6% 26%", "36%", "48%"),
      form("#22402f", "5% 19%", "66%", "55%"),
      form("#1f3a30", "6% 23%", "80%", "51%"),
      form("#1c352a", "5% 18%", "94%", "56%"),
      ground("#c4d0d2", "68%"),
      sky("#c4d8e0", "#9fb8bc")),

    // ---- high and cold ----
    alpine: scene(
      form("#f4f8fc", "26% 22%", "24%", "64%"),
      form("#e2edf6", "22% 17%", "56%", "67%"),
      form("#dce8f2", "24% 19%", "88%", "66%"),
      ground("#c6d8e4", "70%"),
      sky("#dceaf6", "#a8c4dc")),
    summit: scene(
      form("#ffffff", "22% 30%", "50%", "70%"),
      form("#dbe5f0", "20% 20%", "14%", "74%"),
      form("#dbe5f0", "20% 21%", "86%", "73%"),
      ground("#b4c2d2", "78%"),
      sky("#cfe0ee", "#8fa6bc")),
    tundraz: scene(
      disc("#fff6d8", "20%", "24%", "6%"),
      form("#eaf2f8", "90% 12%", "50%", "64%"),
      ground("#dfeaf2", "66%"),
      sky("#dae8f4", "#f0e2d0")),
    polarz: scene(
      form("#ffffff", "50% 16%", "24%", "60%"),
      form("#eef6fc", "44% 14%", "80%", "64%"),
      ground("#e4eef8", "64%"),
      sky("#bcd6ea", "#8fb4d2")),

    // ---- underground and fire ----
    cavezone: scene(
      disc("rgba(255,205,130,.16)", "50%", "34%", "16%"),
      form("#1c1814", "34% 12%", "14%", "2%"),
      form("#1c1814", "30% 10%", "50%", "0%"),
      form("#1c1814", "34% 12%", "86%", "3%"),
      ground("#332c23", "70%"),
      sky("#4a4034", "#221d18")),
    volcanic: scene(
      disc("rgba(255,170,80,.45)", "50%", "44%", "9%"),
      form("#2e1a14", "26% 26%", "50%", "66%"),
      form("#3a2018", "30% 14%", "12%", "66%"),
      form("#3a2018", "28% 13%", "90%", "68%"),
      ground("#5c2a20", "70%"),
      sky("#b5563c", "#6b2a1e")),
    fossil: scene(
      form("#8a5f3c", "40% 20%", "20%", "60%"),
      form("#a3714a", "34% 15%", "58%", "64%"),
      form("#8a5f3c", "36% 18%", "94%", "61%"),
      ground("#c9a274", "66%"),
      sky("#efdcb8", "#d8b489")),

    // ---- the strange places ----
    // The rifts should not look like anywhere, which is the same rule part79
    // gave their ambience.
    rift: scene(
      disc("rgba(200,160,255,.28)", "50%", "38%", "16%"),
      form("#2a1f4a", "30% 40%", "14%", "60%"),
      form("#251b42", "26% 34%", "86%", "64%"),
      ground("#1e1836", "70%"),
      sky("#5c3f8a", "#160f28")),
    // The Vigil is a memorial. It gets the quietest scene in the game: no sun,
    // no landmark, nothing moving. That is deliberate, the same way it gets no
    // sparkles and no ambient calls.
    vigilz: scene(
      ground("#2a2a30", "70%"),
      sky("#4a4a55", "#26262c")),

    // ---- built places ----
    hearth: scene(
      disc("#ffe6a8", "80%", "20%", "6%"),
      form("#6b5a44", "18% 12%", "14%", "62%"),
      form("#7a6a50", "16% 10%", "42%", "64%"),
      ground("#8a7a5c", "66%"),
      sky("#d8e4ee", "#e8d8b8")),
    arena: scene(
      form("#8a7a5c", "90% 16%", "50%", "62%"),
      ground("#a89474", "62%"),
      sky("#cfe0ee", "#e0d4bc")),
    hopez: scene(
      disc("#fff0c0", "72%", "22%", "7%"),
      form("#5f8a52", "70% 16%", "40%", "62%"),
      ground("#7fa06a", "64%"),
      sky("#cfe6f2", "#dfeccc")),
  });

  const zones = (typeof MAPS !== "undefined")
    ? [...new Set(Object.values(MAPS).map((m) => m && m.zone).filter(Boolean))] : [];
  const missing = zones.filter((z) => !ARENA[z]);
  console.log(`[part83] the place the fight happens: ${Object.keys(ARENA).length} arenas`
    + ` | zones in the world: ${zones.length}`
    + (missing.length ? ` | STILL FALLING BACK TO SAVANNA: ${missing.join(", ")}` : " | none left on the fallback"));
}
