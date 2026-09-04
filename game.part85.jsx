// ---------- Part 85: THE MOVES, PROPERLY ----------
// Ayr, 2026-09-04: "there aren't enough attacks. not enough variety. and the
// status ones are useless. there is no strategy beyond 'use the strongest move
// until it dies.' Look at the moveset of pokemon fire red, and make something
// closer to that, including levels at which animals get the moves."
//
// COUNTED FIRST. The game already had 129 moves, 30 of them status, roughly
// eight attacks and two status per type across thirteen types. So the shortage
// was never really the number - it was that nothing except raw power ever paid
// off, and three specific things caused that:
//
//   1. A STAT STAGE WAS WORTH ALMOST NOTHING. Stages ran -2..+2 at a flat
//      quarter each, so the very best a boosting move could ever do was +50%
//      attack, after spending a turn. Attacking twice beat that every time.
//      They now run -6..+6 on the classic curve - +1 is x1.5, +2 is x2, +6 is
//      x4 - so a turn spent setting up is a turn that pays for itself, and a
//      defence drop on the opponent is a real opening.
//   2. NO SAME-TYPE BONUS, so an animal's own types were only ever a defensive
//      fact. A Predator using a Predator move now hits 50% harder, which is
//      what makes an animal's own kit worth building around.
//   3. NO CRITICAL HITS at all, so there was nothing to build a high-crit move
//      out of and no reason to fear a long fight.
//
// And one bug underneath all of it, which is why status moves seemed to not
// exist: part2's mk() takes the LAST FOUR moves an animal has learned, which
// after sorting by power means the four strongest. Every status move an animal
// picked up early was silently thrown away the moment it was built. It now
// keeps room for one.
//
// This file adds the mechanics, 96 new moves that use them, and a learnset
// builder that hands them out at levels rather than all at once.

// ---------- stage maths ----------
/* The classic curve rather than a flat step. Stage 0 is x1, and it is symmetric:
   +2 doubles a stat and -2 halves it, which is what makes both boosting and
   debuffing worth a turn. */
const STAGE_CAP = 6;
const stageMul = (s) => {
  const v = Math.max(-STAGE_CAP, Math.min(STAGE_CAP, s || 0));
  return v >= 0 ? (2 + v) / 2 : 2 / (2 - v);
};

// Same-type attack bonus, and the critical hit.
const STAB = 1.5;
const CRIT_MULT = 1.5;
// A move with crit:1 crits about one time in six instead of one in sixteen.
const critChance = (mv) => (mv && mv.crit ? 1 / 6 : 1 / 16);

/* Paralysis. Distinct from `chill`, which is a three-turn slow: this one lasts
   until the battle ends or something cures it, quarters nothing but reliability,
   and is the reason a fast animal can be answered by a slow one. */
const PARA_SKIP = 0.25;
const PARA_SPD = 0.5;

// ---------- the new moves ----------
// Shapes the engine now understands, on top of what it already did:
//   hits: [min,max]  a move that lands several times in one turn
//   recoil: 0.33     the user takes back a third of what it dealt
//   drain: 0.5       the user heals half of what it dealt
//   crit: 1          high critical rate
//   amt: 2           a stage move that moves TWO stages instead of one
//   pri: 1           moves before anything without priority
//   fx: "para"       paralysis
//   fx: "cure"       clears the user's own status
//   fx: "guard"      blocks the next incoming attack
//
// Naming stays in this game's voice: these are animals, so the moves are things
// animals do. No move is ever REMOVED or renamed - a saved animal stores its
// moves by key, so taking one away would blank a slot on somebody's team.
Object.assign(MOVES, {
  // ---- setup: the whole point of the stage rework ----
  bristle:     { n: "Bristle", t: "Wild", p: 0, acc: 100, fx: "raiseAtk", amt: 2 },
  hunker:      { n: "Hunker Down", t: "Armor", p: 0, acc: 100, fx: "raiseDef", amt: 2 },
  limber:      { n: "Limber Up", t: "Swift", p: 0, acc: 100, fx: "raiseSpd", amt: 2 },
  sharpenclaw: { n: "Sharpen Claws", t: "Predator", p: 0, acc: 100, fx: "raiseAtk", amt: 2 },
  puffup:      { n: "Puff Up", t: "Bug", p: 0, acc: 100, fx: "raiseDef", amt: 2 },
  thermalride: { n: "Thermal Ride", t: "Aerial", p: 0, acc: 100, fx: "raiseSpd", amt: 2 },
  rootfast:    { n: "Root Fast", t: "Canopy", p: 0, acc: 100, fx: "raiseDef", amt: 2 },
  gathercold:  { n: "Gather Cold", t: "Ice", p: 0, acc: 100, fx: "raiseAtk", amt: 2 },
  stalkclose:  { n: "Stalk Close", t: "Night", p: 0, acc: 100, fx: "raiseAtk" },
  tread:       { n: "Tread Water", t: "Aquatic", p: 0, acc: 100, fx: "raiseDef" },

  // ---- control: taking something away from the other animal ----
  cowcall:     { n: "Cowing Call", t: "Predator", p: 0, acc: 100, fx: "lowerAtk", amt: 2 },
  underminesand:{ n: "Undermine", t: "Burrow", p: 0, acc: 100, fx: "lowerDef", amt: 2 },
  dazzle:      { n: "Dazzle", t: "Aerial", p: 0, acc: 95, fx: "lowerSpd", amt: 2 },
  tanglevine:  { n: "Tangle", t: "Canopy", p: 0, acc: 95, fx: "lowerSpd", amt: 2 },
  chillbreath: { n: "Chill Breath", t: "Ice", p: 0, acc: 90, fx: "chill" },
  numbingbite: { n: "Numbing Bite", t: "Venom", p: 0, acc: 90, fx: "para" },
  staticfluff: { n: "Static Fluff", t: "Wild", p: 0, acc: 90, fx: "para" },
  sporecloud:  { n: "Spore Cloud", t: "Bug", p: 0, acc: 85, fx: "sleep" },
  lullwater:   { n: "Lull", t: "Aquatic", p: 0, acc: 85, fx: "sleep" },
  eyeshine:    { n: "Eyeshine", t: "Night", p: 0, acc: 90, fx: "fear" },
  venomspit:   { n: "Venom Spit", t: "Venom", p: 0, acc: 90, fx: "poison" },
  emberhaze:   { n: "Ember Haze", t: "Ember", p: 0, acc: 90, fx: "burn" },

  // ---- recovery and self-repair ----
  bask:        { n: "Bask", t: "Ember", p: 0, acc: 100, fx: "heal" },
  ruminate:    { n: "Ruminate", t: "Wild", p: 0, acc: 100, fx: "heal" },
  tidepool:    { n: "Tide Pool", t: "Aquatic", p: 0, acc: 100, fx: "heal" },
  preencare:   { n: "Preen", t: "Aerial", p: 0, acc: 100, fx: "cure" },
  shedskin:    { n: "Shed Skin", t: "Venom", p: 0, acc: 100, fx: "cure" },
  groom:       { n: "Groom", t: "Predator", p: 0, acc: 100, fx: "cure" },
  // A turn spent doing nothing but refusing to be hit.
  shellup:     { n: "Shell Up", t: "Armor", p: 0, acc: 100, fx: "guard", pri: 3 },
  freeze:      { n: "Freeze Still", t: "Night", p: 0, acc: 100, fx: "guard", pri: 3 },

  // ---- priority: the answer to a faster animal ----
  snap:        { n: "Snap", t: "Predator", p: 40, acc: 100, pri: 1 },
  flickstrike: { n: "Flick", t: "Bug", p: 35, acc: 100, pri: 1 },
  wingflick:   { n: "Wing Flick", t: "Aerial", p: 38, acc: 100, pri: 1 },
  nipheels:    { n: "Nip", t: "Swift", p: 40, acc: 100, pri: 1 },

  // ---- multi-hit ----
  rakeclaws:   { n: "Rake", t: "Predator", p: 20, acc: 90, hits: [2, 5] },
  quillvolley: { n: "Quill Volley", t: "Armor", p: 22, acc: 85, hits: [2, 5] },
  peckflurry:  { n: "Peck Flurry", t: "Aerial", p: 18, acc: 90, hits: [2, 5] },
  stingswarm:  { n: "Sting Swarm", t: "Bug", p: 16, acc: 90, hits: [2, 5], fx: "poison", fxc: 0.15 },
  hailstones:  { n: "Hailstones", t: "Ice", p: 20, acc: 85, hits: [2, 4] },

  // ---- drain: the reason a long fight is survivable ----
  siphon:      { n: "Siphon", t: "Bug", p: 40, acc: 100, drain: 0.5 },
  bloodfeed:   { n: "Blood Feed", t: "Night", p: 55, acc: 95, drain: 0.5 },
  rootdrink:   { n: "Root Drink", t: "Canopy", p: 45, acc: 100, drain: 0.5 },
  leechbite:   { n: "Leech Bite", t: "Aquatic", p: 50, acc: 95, drain: 0.5 },

  // ---- recoil: big numbers with a bill attached ----
  headlong:    { n: "Headlong Charge", t: "Wild", p: 95, acc: 90, recoil: 0.33 },
  boulderrush: { n: "Boulder Rush", t: "Armor", p: 100, acc: 85, recoil: 0.33 },
  divebreak:   { n: "Breaking Dive", t: "Aerial", p: 98, acc: 88, recoil: 0.33 },
  ramhorns:    { n: "Ram", t: "Burrow", p: 90, acc: 90, recoil: 0.25 },

  // ---- high crit ----
  throatgrip:  { n: "Throat Grip", t: "Predator", p: 62, acc: 95, crit: 1 },
  slashfin:    { n: "Fin Slash", t: "Aquatic", p: 60, acc: 95, crit: 1 },
  hookclaw:    { n: "Hook Claw", t: "Canopy", p: 58, acc: 95, crit: 1 },
  frostspike:  { n: "Frost Spike", t: "Ice", p: 60, acc: 95, crit: 1 },
  ambushstrike:{ n: "Ambush", t: "Night", p: 64, acc: 95, crit: 1 },

  // ---- ordinary attacks, to thicken every ladder ----
  swipe:       { n: "Swipe", t: "Predator", p: 50, acc: 100 },
  runthrough:  { n: "Run Through", t: "Swift", p: 55, acc: 100 },
  headbutt:    { n: "Headbutt", t: "Wild", p: 58, acc: 100, fx: "fear", fxc: 0.2 },
  stomp:       { n: "Stomp", t: "Wild", p: 65, acc: 95, fx: "fear", fxc: 0.15 },
  gorehorn:    { n: "Gore", t: "Wild", p: 78, acc: 90 },
  scaldspray:  { n: "Scald", t: "Aquatic", p: 62, acc: 100, fx: "burn", fxc: 0.25 },
  crushdepth:  { n: "Crush Depth", t: "Aquatic", p: 88, acc: 85 },
  riptide:     { n: "Riptide", t: "Aquatic", p: 70, acc: 95, fx: "lowerSpd", fxc: 0.2 },
  sandblast:   { n: "Sandblast", t: "Burrow", p: 55, acc: 95, fx: "lowerAcc", fxc: 0.3 },
  tunnelstrike:{ n: "Tunnel Strike", t: "Burrow", p: 72, acc: 95 },
  quakestep:   { n: "Quake Step", t: "Burrow", p: 82, acc: 90, fx: "lowerSpd", fxc: 0.2 },
  barbjab:     { n: "Barb Jab", t: "Venom", p: 48, acc: 100, fx: "poison", fxc: 0.3 },
  toxinfang:   { n: "Toxin Fang", t: "Venom", p: 66, acc: 95, fx: "poison", fxc: 0.4 },
  paralytic:   { n: "Paralytic Bite", t: "Venom", p: 70, acc: 90, fx: "para", fxc: 0.3 },
  plateslam:   { n: "Plate Slam", t: "Armor", p: 60, acc: 100 },
  shellcheck:  { n: "Shell Check", t: "Armor", p: 74, acc: 95, fx: "lowerSpd", fxc: 0.2 },
  cinderstep:  { n: "Cinder Step", t: "Ember", p: 52, acc: 100, fx: "burn", fxc: 0.2 },
  heatshimmer: { n: "Heat Shimmer", t: "Ember", p: 68, acc: 95, fx: "burn", fxc: 0.3 },
  wildfire:    { n: "Wildfire", t: "Ember", p: 92, acc: 85, fx: "burn", fxc: 0.3 },
  glacierpush: { n: "Glacier Push", t: "Ice", p: 80, acc: 90, fx: "chill", fxc: 0.25 },
  sleetlash:   { n: "Sleet Lash", t: "Ice", p: 55, acc: 100, fx: "chill", fxc: 0.2 },
  boughsnap:   { n: "Bough Snap", t: "Canopy", p: 70, acc: 95 },
  seedvolley:  { n: "Seed Volley", t: "Canopy", p: 84, acc: 90 },
  swarmrush:   { n: "Swarm Rush", t: "Bug", p: 68, acc: 95 },
  chitincrack: { n: "Chitin Crack", t: "Bug", p: 80, acc: 90, fx: "lowerDef", fxc: 0.2 },
  gloomstrike: { n: "Gloom Strike", t: "Night", p: 72, acc: 95 },
  moonlash:    { n: "Moonlash", t: "Night", p: 86, acc: 90 },
  dartaway:    { n: "Dart", t: "Swift", p: 68, acc: 100 },
  blurrush:    { n: "Blur Rush", t: "Swift", p: 82, acc: 95 },
  skyhammer:   { n: "Sky Hammer", t: "Aerial", p: 90, acc: 85 },
  updraft:     { n: "Updraft", t: "Aerial", p: 64, acc: 100, fx: "lowerAcc", fxc: 0.2 },
  ferocity:    { n: "Ferocity", t: "Predator", p: 94, acc: 88 },
  packrush:    { n: "Pack Rush", t: "Predator", p: 76, acc: 95 },
  trample:     { n: "Trample", t: "Wild", p: 88, acc: 90 },
  bellow:      { n: "Bellow", t: "Wild", p: 0, acc: 100, fx: "lowerAtk" },
  screech:     { n: "Screech", t: "Swift", p: 0, acc: 90, fx: "lowerDef", amt: 2 },
  glare:       { n: "Glare", t: "Predator", p: 0, acc: 95, fx: "lowerSpd" },
  muddy:       { n: "Muddy Water", t: "Burrow", p: 0, acc: 95, fx: "lowerAcc", amt: 2 },
  smokescreen: { n: "Smokescreen", t: "Ember", p: 0, acc: 100, fx: "lowerAcc" },
  inkcloud:    { n: "Ink Cloud", t: "Aquatic", p: 0, acc: 100, fx: "lowerAcc", amt: 2 },
  frostveil:   { n: "Frost Veil", t: "Ice", p: 0, acc: 100, fx: "raiseDef" },
  canopyhide:  { n: "Canopy Hide", t: "Canopy", p: 0, acc: 100, fx: "raiseSpd" },
  swarmguard:  { n: "Swarm Guard", t: "Bug", p: 0, acc: 100, fx: "raiseDef" },
  nightsense:  { n: "Night Sense", t: "Night", p: 0, acc: 100, fx: "raiseSpd" },
});

console.log(`[part85] moves: ${Object.keys(MOVES).length} total`
  + ` | ${Object.values(MOVES).filter((m) => m.p <= 0).length} status`
  + ` | ${Object.values(MOVES).filter((m) => m.hits).length} multi-hit`
  + ` | ${Object.values(MOVES).filter((m) => m.drain).length} draining`
  + ` | ${Object.values(MOVES).filter((m) => m.recoil).length} recoil`
  + ` | ${Object.values(MOVES).filter((m) => m.pri).length} priority`
  + ` | ${Object.values(MOVES).filter((m) => m.crit).length} high-crit`);
