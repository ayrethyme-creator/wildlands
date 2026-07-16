// ---------- CHAPTER XI — Part 14: HEARTH & HOME ----------
// The animals that came in from the cold. Domestics and pets live along the
// early trail, in and around towns. The breeds live past the Citadel.

// ---- pets & livestock sprites ----
Object.assign(ART, {
  housecat: felArt({ fur: "#8a8578", inner: "#e8b5a5", muzzle: "#e8e4d8", iris: "#8fb35c", stripes: true, markC: "#5c5850" }),
  tabbycat: felArt({ fur: "#c9a05c", inner: "#e8b5a5", muzzle: "#f2ede0", iris: "#8fd94a", stripes: true, markC: "#8a6338" }),
  calicocat: felArt({ fur: "#f2ede0", inner: "#e8b5a5", muzzle: "#f8f4ea", iris: "#e8c547", spots: true, markC: "#c9702a" }),
  blackcat: felArt({ fur: "#26292e", inner: "#5c4448", muzzle: "#3c3c40", iris: "#e8c547" }),
  dog: canArt({ fur: "#c9a878", inner: "#a3855c", muzzle: "#e8dcc3", iris: "#5c4030", earRound: true }),
  puppy: canArt({ fur: "#d9b884", inner: "#c9a06b", muzzle: "#f2ede0", iris: "#3c2a1e", earRound: true }),
  hamster: rodA({ fur: "#e8c98a", inner: "#e8b5a5", muzzle: "#f8f4ea", iris: "#2a2018", bib: "#f8f4ea" }),
  guineapig: rodA({ fur: "#c9853a", inner: "#e8b5a5", muzzle: "#f2ede0", iris: "#2a2018", earRound: true, bib: "#f2ede0" }),
  gerbil: rodA({ fur: "#c9a878", inner: "#e8b5a5", muzzle: "#e8dcc3", iris: "#2a2018" }),
  fancyrat: rodA({ fur: "#a8a8a0", inner: "#e8b5a5", muzzle: "#f2ede0", iris: "#c94a3a", earRound: true }),
  fancymouse: rodA({ fur: "#f2ede0", inner: "#e8b5a5", muzzle: "#f8f4ea", iris: "#c94a3a", earRound: true }),
  petrabbit: rodA({ fur: "#f5f2e8", inner: "#e8b5a5", muzzle: "#f8f4ea", longEar: true, iris: "#c94a3a" }),
  lopbunny: rodA({ fur: "#a3785c", inner: "#e8b5a5", muzzle: "#e8dcc3", iris: "#3c2a1e" }),
  pig: ungA({ coat: "#e8b5a5", muzzle: "#e8a5a5", iris: "#3a2e22" }),
  potbellypig: ungA({ coat: "#4c4438", muzzle: "#6b5c50", iris: "#3a2e22" }),
  cow: ungA({ coat: "#f5f2e8", curved: true, hornC: "#e8dcc3", patches: true, markC: "#26221c", muzzle: "#e8b5a5", iris: "#3a2e22" }),
  highlandcow: ungA({ coat: "#c9853a", curved: true, hornC: "#e8dcc3", mane: true, maneC: "#e8a53a", muzzle: "#8a6f52", iris: "#3a2e22" }),
  sheep: ungA({ coat: "#f2ede0", curved: true, hornC: "#c9b08a", mane: true, maneC: "#f8f4ea", muzzle: "#3c3630", iris: "#3a2e22" }),
  goat: ungA({ coat: "#e8dcc3", curved: true, hornC: "#8a7a5c", mane: true, maneC: "#d9cfc0", muzzle: "#c9bda3", iris: "#c9a43a" }),
  horse: ungA({ coat: "#8a5c3c", mane: true, maneC: "#3c2a1e", blaze: "#f2ede0", muzzle: "#5c4030", iris: "#3a2e22" }),
  donkey: ungA({ coat: "#a8a396", mane: true, maneC: "#5c5850", muzzle: "#e8e4d8", iris: "#3a2e22" }),
  chicken: birdA({ body: "#e8dcc3", wingC: "#c9b894", head: "#f2ede0", bib: "#c94a3a", plume: true, plumeC: "#c94a3a", beakC: "#e8c547" }),
  duck: birdA({ body: "#f2ede0", wingC: "#d9d4c4", head: "#3a8a4c", neck: true, neckC: "#3a8a4c", bill: "long", beakC: "#e8c547" }),
  goose: birdA({ body: "#c9bda3", wingC: "#8a7a68", head: "#26221c", neck: true, neckC: "#26221c", bib: "#f2ede0", bill: "cone", beakC: "#26221c" }),
  turkey: birdA({ body: "#5c4c3c", wingC: "#3c3226", head: "#3a5cd9", bib: "#c94a3a", fan: true, fanC: "#6b5442", eyeSpot: "#c9a878", beakC: "#e8c547" }),
  alpacafarm: ungA({ coat: "#f2ede0", mane: true, maneC: "#f8f4ea", muzzle: "#e8dcc3", iris: "#3a2e22" }),
  ferretpet: mustA({ fur: "#e8dcc3", inner: "#e8b5a5", muzzle: "#f8f4ea", iris: "#c94a3a", mask: "#8a7458", earRound: true }),
  canary: birdA({ body: "#e8d44a", wingC: "#c9b03a", beakC: "#e8a53a" }),
  koi: fishA({ body: "#f2ede0", spots: true, markC: "#e8853a", finC: "#e8e4d8" }),
  goldfish: fishA({ body: "#e8853a", finC: "#e8a53a", bigEye: true }),
  // ---- cat breeds ----
  savannahcat: felArt({ fur: "#e8c98a", inner: "#c9a05c", muzzle: "#f8f4ea", iris: "#c9a43a", spots: true, markC: "#3c3226", earTall: true }),
  bengalcat: felArt({ fur: "#d9a85c", inner: "#c9853a", muzzle: "#f2ede0", iris: "#8fd94a", rosettes: true, markC: "#3c2a1e" }),
  mainecoon: felArt({ fur: "#a3785c", inner: "#c9a878", muzzle: "#e8dcc3", iris: "#8fb35c", ruff: true, ruffC: "#c9a878", tufts: true, stripes: true, markC: "#5c4030" }),
  siamesecat: felArt({ fur: "#e8dcc3", inner: "#5c4436", muzzle: "#5c4436", iris: "#3a7ad9", earTall: true }),
  persiancat: felArt({ fur: "#f2ede0", inner: "#e8c9a5", muzzle: "#f8f4ea", iris: "#e8a53a", ruff: true, ruffC: "#f8f4ea" }),
  sphynxcat: felArt({ fur: "#e8c9b5", inner: "#d9a58a", muzzle: "#e8c9b5", iris: "#8fd94a", earTall: true }),
  ragdollcat: felArt({ fur: "#f2ede0", inner: "#8a7a70", muzzle: "#f8f4ea", iris: "#3a7ad9", ruff: true, ruffC: "#f8f4ea" }),
  scottishfold: felArt({ fur: "#a8a8a0", inner: "#c9c4b5", muzzle: "#e8e4d8", iris: "#e8a53a" }),
  russianblue: felArt({ fur: "#7a8490", inner: "#a3adb8", muzzle: "#8a94a0", iris: "#8fd94a" }),
  norwegianforest: felArt({ fur: "#c9b894", inner: "#a89878", muzzle: "#f2ede0", iris: "#8fb35c", ruff: true, ruffC: "#e0d5bd", tufts: true }),
  abyssiniancat: felArt({ fur: "#c9853a", inner: "#a3622a", muzzle: "#e8c9a5", iris: "#c9a43a", earTall: true }),
  britishshorthair: felArt({ fur: "#8a94a0", inner: "#a3adb8", muzzle: "#9aa4b0", iris: "#e8a53a" }),
  orientalcat: felArt({ fur: "#3c3630", inner: "#5c5448", muzzle: "#4c4438", iris: "#8fd94a", earTall: true }),
  turkishvan: felArt({ fur: "#f8f4ea", inner: "#e8b5a5", muzzle: "#f8f4ea", iris: "#e8a53a", spots: true, markC: "#c9853a" }),
  devonrex: felArt({ fur: "#c9b8a8", inner: "#e8c9b5", muzzle: "#e0d0c0", iris: "#8fd94a", earTall: true }),
  // ---- dog breeds ----
  husky: canArt({ fur: "#8a94a0", inner: "#f2ede0", muzzle: "#f8f4ea", iris: "#5dade2", mask: "#3c4450", earTall: true }),
  malamute: canArt({ fur: "#5c5448", inner: "#e8dcc3", muzzle: "#f2ede0", iris: "#5c4030", mask: "#3c3630" }),
  germanshepherd: canArt({ fur: "#a3703c", inner: "#26221c", muzzle: "#3c3226", iris: "#5c4030", mask: "#26221c", earTall: true }),
  goldenretriever: canArt({ fur: "#e8c98a", inner: "#d9b06a", muzzle: "#f2ede0", iris: "#5c4030", earRound: true }),
  labrador: canArt({ fur: "#3c3630", inner: "#5c5448", muzzle: "#4c4438", iris: "#5c4030", earRound: true }),
  bordercollie: canArt({ fur: "#26221c", inner: "#f5f2e8", muzzle: "#f5f2e8", iris: "#5dade2", blaze: "#f5f2e8" }),
  corgi: canArt({ fur: "#d9a85c", inner: "#f2ede0", muzzle: "#f8f4ea", iris: "#5c4030", earTall: true }),
  dachshund: canArt({ fur: "#5c3020", inner: "#a3562a", muzzle: "#7a4028", iris: "#3c2a1e", earRound: true }),
  pug: canArt({ fur: "#e8c98a", inner: "#26221c", muzzle: "#26221c", iris: "#3c2a1e", mask: "#26221c", earRound: true }),
  beagle: canArt({ fur: "#f2ede0", inner: "#a3562a", muzzle: "#e8dcc3", iris: "#5c4030", mask: "#a3562a", earRound: true }),
  poodle: canArt({ fur: "#f2ede0", inner: "#d9cfc0", muzzle: "#e8e4d8", iris: "#3c2a1e", crest: "#f8f4ea", earRound: true }),
  greatdane: canArt({ fur: "#a8a8a0", inner: "#8a8a82", muzzle: "#b5b5ad", iris: "#5c4030", earRound: true }),
  chihuahua: canArt({ fur: "#d9b884", inner: "#e8c9a5", muzzle: "#e8dcc3", iris: "#26221c", earTall: true }),
  shibainu: canArt({ fur: "#e8a53a", inner: "#f8f4ea", muzzle: "#f8f4ea", iris: "#3c2a1e", earTall: true }),
  greyhound: canArt({ fur: "#a8a396", inner: "#c9c4b5", muzzle: "#c4c0b0", iris: "#5c4030" }),
  saintbernard: canArt({ fur: "#f2ede0", inner: "#a3562a", muzzle: "#f8f4ea", iris: "#5c4030", mask: "#a3562a", earRound: true }),
  dalmatian: canArt({ fur: "#f8f4ea", inner: "#c9c4b5", muzzle: "#f8f4ea", iris: "#5c4030", spots: true, markC: "#26221c", earRound: true }),
  rottweiler: canArt({ fur: "#26221c", inner: "#a3562a", muzzle: "#5c3020", iris: "#5c4030", earRound: true }),
  bulldog: canArt({ fur: "#e8dcc3", inner: "#c9853a", muzzle: "#d9cfc0", iris: "#5c4030", mask: "#c9853a", earRound: true }),
  bordeauxmastiff: canArt({ fur: "#c9853a", inner: "#a3622a", muzzle: "#8a4c2a", iris: "#5c4030", earRound: true }),
  akita: canArt({ fur: "#e8dcc3", inner: "#c9a878", muzzle: "#f2ede0", iris: "#3c2a1e", earTall: true }),
  samoyed: canArt({ fur: "#f8f4ea", inner: "#e8dcc3", muzzle: "#f8f4ea", iris: "#3c2a1e", earTall: true }),
  bernesemountain: canArt({ fur: "#26221c", inner: "#a3562a", muzzle: "#f2ede0", iris: "#5c4030", blaze: "#f5f2e8", earRound: true }),
  australianshepherd: canArt({ fur: "#8a8578", inner: "#c9a878", muzzle: "#f2ede0", iris: "#5dade2", blaze: "#f5f2e8", spots: true, markC: "#4c4438" }),
  jackrussell: canArt({ fur: "#f8f4ea", inner: "#c9853a", muzzle: "#f8f4ea", iris: "#3c2a1e", mask: "#c9853a", earRound: true }),
  wolfdog: canArt({ fur: "#8a8578", inner: "#5c5850", muzzle: "#a8a396", iris: "#e8c547", earTall: true }),
});

const P = (n, art, t, b, m, c, tag) => ({ n, art, t, b, m, l: [], c, org: tag, ...(['domestic','pet','livestock'].includes(tag) ? { dom: true } : { breed: true }) });
Object.assign(DEX, {
  // ---- pets & farm (main world) ----
  housecat: P("House Cat", "housecat", ["Predator", "Night"], B(40, 46, 36, 58), MV.pred, 0.5, "domestic"),
  tabbycat: P("Tabby Cat", "tabbycat", ["Predator", "Swift"], B(40, 46, 36, 58), MV.pred, 0.5, "domestic"),
  calicocat: P("Calico Cat", "calicocat", ["Predator", "Wild"], B(40, 44, 38, 56), MV.pred, 0.5, "domestic"),
  blackcat: P("Black Cat", "blackcat", ["Night", "Swift"], B(40, 48, 36, 60), MV.night, 0.48, "domestic"),
  dog: P("Farm Dog", "dog", ["Wild", "Swift"], B(46, 50, 42, 56), MV.wild, 0.5, "domestic"),
  puppy: P("Puppy", "puppy", ["Wild", "Swift"], B(30, 32, 28, 46), ["tackle", "quickdash", "bodyslam"], 0.55, "domestic", ),
  hamster: P("Hamster", "hamster", ["Burrow", "Swift"], B(24, 30, 26, 52), MV.bur, 0.58, "pet"),
  guineapig: P("Guinea Pig", "guineapig", ["Wild", "Burrow"], B(30, 28, 32, 34), MV.wild, 0.58, "pet"),
  gerbil: P("Gerbil", "gerbil", ["Burrow", "Swift"], B(24, 28, 24, 56), MV.bur, 0.58, "pet"),
  fancyrat: P("Fancy Rat", "fancyrat", ["Burrow", "Night"], B(28, 34, 26, 54), MV.bur, 0.56, "pet"),
  fancymouse: P("Fancy Mouse", "fancymouse", ["Burrow", "Swift"], B(20, 26, 20, 58), MV.swi, 0.6, "pet"),
  petrabbit: P("House Rabbit", "petrabbit", ["Swift", "Wild"], B(34, 34, 30, 60), MV.swi, 0.55, "pet"),
  lopbunny: P("Lop Bunny", "lopbunny", ["Wild", "Swift"], B(34, 32, 32, 54), MV.wild, 0.55, "pet"),
  ferretpet: P("Pet Ferret", "ferretpet", ["Swift", "Burrow"], B(32, 44, 30, 62), MV.swi, 0.5, "pet"),
  canary: P("Canary", "canary", ["Aerial", "Swift"], B(22, 28, 20, 62), ["lullaby", "peck", "gust"], 0.58, "pet"),
  goldfish: P("Goldfish", "goldfish", ["Aquatic", "Swift"], B(24, 26, 24, 48), MV.aqua, 0.6, "pet"),
  koi: P("Koi", "koi", ["Aquatic", "Armor"], B(40, 34, 44, 34), MV.aqua, 0.5, "domestic"),
  pig: P("Pig", "pig", ["Wild", "Burrow"], B(52, 48, 46, 34), MV.wild, 0.5, "livestock"),
  potbellypig: P("Potbelly Pig", "potbellypig", ["Wild", "Armor"], B(50, 44, 50, 28), MV.wild, 0.5, "pet"),
  cow: P("Dairy Cow", "cow", ["Wild", "Armor"], B(66, 50, 58, 22), MV.wild, 0.46, "livestock"),
  highlandcow: P("Highland Cow", "highlandcow", ["Wild", "Ice"], B(68, 56, 60, 24), MV.wild, 0.44, "livestock"),
  sheep: P("Sheep", "sheep", ["Wild", "Armor"], B(48, 40, 48, 32), MV.wild, 0.5, "livestock"),
  goat: P("Goat", "goat", ["Armor", "Swift"], B(46, 46, 46, 48), MV.arm, 0.5, "livestock"),
  horse: P("Horse", "horse", ["Swift", "Wild"], B(60, 54, 48, 70), MV.swi, 0.4, "domestic"),
  donkey: P("Donkey", "donkey", ["Wild", "Armor"], B(54, 48, 50, 44), MV.wild, 0.46, "domestic"),
  alpacafarm: P("Farm Alpaca", "alpacafarm", ["Wild", "Ice"], B(48, 42, 46, 44), MV.wild, 0.5, "livestock"),
  chicken: P("Chicken", "chicken", ["Wild", "Swift"], B(28, 32, 28, 46), MV.wild, 0.6, "livestock"),
  duck: P("Domestic Duck", "duck", ["Aquatic", "Aerial"], B(32, 34, 30, 48), MV.aqua, 0.56, "livestock"),
  goose: P("Domestic Goose", "goose", ["Aerial", "Wild"], B(40, 46, 36, 48), ["intimidate", "peck", "gust"], 0.52, "livestock"),
  turkey: P("Turkey", "turkey", ["Wild", "Aerial"], B(44, 42, 38, 42), MV.wild, 0.52, "livestock"),
  // ---- cat breeds (post-game) ----
  savannahcat: P("Savannah Cat", "savannahcat", ["Predator", "Swift"], B(52, 60, 42, 76), MV.swi, 0.3, "F1 hybrid"),
  bengalcat: P("Bengal", "bengalcat", ["Predator", "Swift"], B(48, 56, 40, 70), MV.pred, 0.32, "hybrid line"),
  mainecoon: P("Maine Coon", "mainecoon", ["Ice", "Predator"], B(58, 54, 48, 46), MV.ice, 0.34, "Maine, USA"),
  siamesecat: P("Siamese", "siamesecat", ["Swift", "Night"], B(40, 48, 36, 68), MV.swi, 0.38, "Thailand"),
  persiancat: P("Persian", "persiancat", ["Wild", "Armor"], B(44, 38, 46, 32), MV.wild, 0.4, "Iran"),
  sphynxcat: P("Sphynx", "sphynxcat", ["Night", "Swift"], B(38, 46, 32, 62), MV.night, 0.38, "Canada"),
  ragdollcat: P("Ragdoll", "ragdollcat", ["Wild", "Canopy"], B(52, 42, 48, 34), MV.wild, 0.38, "California"),
  scottishfold: P("Scottish Fold", "scottishfold", ["Armor", "Wild"], B(42, 40, 46, 40), MV.arm, 0.4, "Scotland"),
  russianblue: P("Russian Blue", "russianblue", ["Ice", "Night"], B(42, 48, 40, 60), MV.ice, 0.38, "Arkhangelsk"),
  norwegianforest: P("Norwegian Forest Cat", "norwegianforest", ["Ice", "Canopy"], B(56, 52, 48, 48), MV.ice, 0.34, "Norway"),
  abyssiniancat: P("Abyssinian", "abyssiniancat", ["Swift", "Predator"], B(42, 50, 36, 70), MV.swi, 0.38, "Ethiopia"),
  britishshorthair: P("British Shorthair", "britishshorthair", ["Armor", "Wild"], B(48, 44, 52, 34), MV.arm, 0.4, "Britain"),
  orientalcat: P("Oriental Shorthair", "orientalcat", ["Night", "Swift"], B(38, 48, 34, 72), MV.night, 0.38, "Britain"),
  turkishvan: P("Turkish Van", "turkishvan", ["Aquatic", "Swift"], B(46, 48, 40, 58), MV.aqua, 0.38, "Lake Van"),
  devonrex: P("Devon Rex", "devonrex", ["Swift", "Canopy"], B(36, 44, 32, 68), MV.swi, 0.4, "Devon"),
  // ---- dog breeds (post-game) ----
  husky: P("Siberian Husky", "husky", ["Ice", "Swift"], B(54, 56, 44, 72), MV.ice, 0.3, "Chukotka"),
  malamute: P("Alaskan Malamute", "malamute", ["Ice", "Wild"], B(62, 60, 52, 48), MV.ice, 0.32, "Alaska"),
  germanshepherd: P("German Shepherd", "germanshepherd", ["Predator", "Swift"], B(56, 62, 48, 60), MV.pred, 0.32, "Germany"),
  goldenretriever: P("Golden Retriever", "goldenretriever", ["Wild", "Aquatic"], B(56, 52, 48, 54), MV.wild, 0.36, "Scotland"),
  labrador: P("Labrador", "labrador", ["Aquatic", "Wild"], B(56, 52, 48, 54), MV.aqua, 0.36, "Newfoundland"),
  bordercollie: P("Border Collie", "bordercollie", ["Swift", "Wild"], B(48, 52, 42, 74), ["lightstep", "quickfocus", "blitz"], 0.34, "Anglo-Scottish border"),
  corgi: P("Corgi", "corgi", ["Wild", "Swift"], B(42, 44, 40, 52), MV.wild, 0.42, "Pembrokeshire"),
  dachshund: P("Dachshund", "dachshund", ["Burrow", "Predator"], B(38, 46, 36, 46), MV.bur, 0.42, "Germany"),
  pug: P("Pug", "pug", ["Wild", "Armor"], B(36, 34, 40, 30), MV.wild, 0.46, "China"),
  beagle: P("Beagle", "beagle", ["Swift", "Predator"], B(42, 46, 38, 58), MV.swi, 0.42, "England"),
  poodle: P("Poodle", "poodle", ["Aquatic", "Swift"], B(44, 46, 40, 58), MV.aqua, 0.4, "Germany"),
  greatdane: P("Great Dane", "greatdane", ["Wild", "Armor"], B(66, 58, 54, 44), MV.wild, 0.32, "Germany"),
  chihuahua: P("Chihuahua", "chihuahua", ["Swift", "Night"], B(24, 38, 22, 66), MV.swi, 0.5, "Chihuahua, Mexico"),
  shibainu: P("Shiba Inu", "shibainu", ["Swift", "Wild"], B(42, 48, 38, 62), MV.swi, 0.4, "Japan"),
  greyhound: P("Greyhound", "greyhound", ["Swift", "Predator"], B(46, 52, 36, 88), ["lightstep", "blitz", "firststrike"], 0.32, "Egypt/England"),
  saintbernard: P("Saint Bernard", "saintbernard", ["Ice", "Armor"], B(68, 56, 58, 32), MV.ice, 0.32, "Swiss Alps"),
  dalmatian: P("Dalmatian", "dalmatian", ["Swift", "Ember"], B(48, 50, 42, 66), MV.swi, 0.38, "Croatia"),
  rottweiler: P("Rottweiler", "rottweiler", ["Predator", "Armor"], B(58, 62, 54, 44), MV.pred, 0.32, "Rottweil"),
  bulldog: P("Bulldog", "bulldog", ["Armor", "Wild"], B(48, 48, 54, 26), MV.arm, 0.4, "England"),
  bordeauxmastiff: P("Dogue de Bordeaux", "bordeauxmastiff", ["Armor", "Predator"], B(62, 60, 58, 32), MV.arm, 0.32, "Bordeaux"),
  akita: P("Akita", "akita", ["Ice", "Predator"], B(56, 58, 48, 50), MV.ice, 0.32, "Akita, Japan"),
  samoyed: P("Samoyed", "samoyed", ["Ice", "Wild"], B(52, 48, 48, 52), MV.ice, 0.34, "Siberia"),
  bernesemountain: P("Bernese Mountain Dog", "bernesemountain", ["Ice", "Wild"], B(62, 54, 54, 38), MV.ice, 0.34, "Bern"),
  australianshepherd: P("Australian Shepherd", "australianshepherd", ["Swift", "Wild"], B(48, 52, 42, 70), MV.swi, 0.36, "USA (despite the name)"),
  jackrussell: P("Jack Russell", "jackrussell", ["Burrow", "Swift"], B(34, 46, 30, 70), MV.bur, 0.42, "Devon"),
  wolfdog: P("Wolfdog", "wolfdog", ["Predator", "Night"], B(58, 64, 48, 64), MV.pred, 0.26, "wolf × dog"),
});

// ---------- scatter the domestics across the EARLY world ----------
const addTo = (mapKey, key, extra) => {
  const m = MAPS[mapKey];
  if (!m) return;
  m[key] = [...(m[key] || []), ...extra.filter(([sp]) => DEX[sp])];
};
// farmland & pasture — the first road out of home
["route1", "seg_m1", "seg_m3", "seg_m6", "seg_m9"].forEach((k, i) =>
  addTo(k, "pool", [["chicken", 12 - i], ["dog", 10], ["housecat", 10], ["tabbycat", 9], ["sheep", 9], ["goat", 8], ["cow", 8], ["pig", 8], ["duck", 8], ["goose", 7], ["donkey", 6], ["horse", 5], ["puppy", 6], ["petrabbit", 7], ["lopbunny", 6], ["guineapig", 6], ["hamster", 6], ["gerbil", 5], ["fancymouse", 6], ["fancyrat", 5], ["calicocat", 8], ["turkey", 6], ["alpacafarm", 5], ["highlandcow", 4], ["canary", 5], ["ferretpet", 5], ["potbellypig", 4]]));
["seg_m2", "seg_m4", "seg_m5", "seg_m7", "seg_m8"].forEach((k) =>
  addTo(k, "poolN", [["blackcat", 12], ["housecat", 9], ["fancyrat", 9], ["dog", 7], ["fancymouse", 8], ["hamster", 7], ["ferretpet", 6]]));
// the wetland road: ponds and paddocks
["route2", "seg_w1", "seg_w4", "seg_w7"].forEach((k) =>
  addTo(k, "pool", [["duck", 10], ["goose", 9], ["koi", 8], ["goldfish", 8], ["cow", 7], ["pig", 7], ["horse", 6], ["dog", 8], ["housecat", 7], ["donkey", 5]]));
// desert & savanna: working animals
["route4", "seg_d2", "seg_d6"].forEach((k) => addTo(k, "pool", [["donkey", 9], ["goat", 9], ["horse", 7], ["dog", 7], ["chicken", 7], ["housecat", 6]]));
["route5", "seg_s3", "seg_s7"].forEach((k) => addTo(k, "pool", [["cow", 8], ["goat", 8], ["sheep", 7], ["donkey", 7], ["dog", 7], ["chicken", 6], ["turkey", 5]]));
// alpine pasture
["route6", "seg_a2", "seg_a5"].forEach((k) => addTo(k, "pool", [["highlandcow", 8], ["sheep", 9], ["goat", 9], ["alpacafarm", 7], ["dog", 6]]));
// grove smallholdings
["route8", "seg_g2", "seg_g7"].forEach((k) => addTo(k, "pool", [["dog", 8], ["housecat", 7], ["tabbycat", 7], ["chicken", 7], ["goat", 6], ["pig", 6], ["petrabbit", 6], ["potbellypig", 5], ["koi", 5]]));
["route3", "seg_j3"].forEach((k) => addTo(k, "pool", [["chicken", 8], ["pig", 7], ["dog", 7], ["housecat", 6], ["duck", 6]]));
addTo("route7", "pool", [["goat", 8], ["donkey", 7], ["dog", 6], ["chicken", 6]]);
addTo("route9", "pool", [["horse", 6], ["dog", 6], ["goat", 6], ["sheep", 6]]);

// ---------- THE KENNELS & CATTERY (post-game) ----------
Object.assign(PALS, {
  hearth: { ground: "#c9a878", grass: "#b59263", grass2: "#c49d6f", tree: { bg: "#8a6f52", em: "🏡" }, mount: { bg: "#a3855c", em: "🧺" }, water: "#4a9ac9", flower: "🦴" },
});
Object.assign(ARENA, { hearth: "linear-gradient(#c9a878,#8a6f52)" });
const HRTH_MID = ["^^^^^^^n^^^^^^^^", "^..GGG....GGG..^", "^.GGGGG..GGGGG.^", "^......!.......^", "^R...........R.^", "^..GGGG..GGGG..^", "^..GGGG..GGGG..^", "^......!.......^", "^..GGG....GGG..^", "^^^^^^^s^^^^^^^^"];
const HRTH_END = ["^^^^^^^^^^^^^^^^", "^..GGG....GGG..^", "^.GGGGG..GGGGG.^", "^......!.......^", "^R...........R.^", "^..GGGG..GGGG..^", "^..GGGG..GGGG..^", "^......!.......^", "^..GGG....GGG..^", "^^^^^^^s^^^^^^^^"];

MAPS.hearthgate = {
  name: "Hearthside", zone: "hearth", music: "town",
  rows: [
    "^^^^^n^^^^n^^^^^",
    "^...!......!...^",
    "^..............^",
    "e..............e",
    "^..CC......MM..^",
    "^..............^",
    "^......*.......^",
    "^...!......!...^",
    "^..............^",
    "^^^^^^^s^^^^^^^^",
  ],
  exits: {
    "7,9": { map: "town2", x: 1, y: 9 },
    "0,3": { map: "cattery1", x: 7, y: 8 },
    "15,3": { map: "kennel1", x: 7, y: 8 },
    "5,0": { map: "cattery3", x: 7, y: 8 },
    "10,0": { map: "kennel4", x: 7, y: 8 },
  },
};
MAPS.town2.rows = withRow(MAPS.town2.rows, 9, "e..............T");
MAPS.town2.exits = { ...MAPS.town2.exits, "0,9": { map: "hearthgate", x: 7, y: 8, req: "champion", reqMsg: "🏡 A breeder's gate, latched. \"Hearthside is for Champions — folks who've met enough wild animals to think properly about the tame ones. Come back after the Citadel.\"" } };

const HEARTH = [
  { k: "cattery1", n: "The Cattery: Sunroom", lvl: [50, 54], next: "cattery2", prev: { map: "hearthgate", x: 1, y: 3 },
    pool: [["persiancat", 10], ["ragdollcat", 10], ["britishshorthair", 10], ["scottishfold", 9], ["russianblue", 9], ["devonrex", 8], ["sphynxcat", 8], ["housecat", 9], ["calicocat", 9], ["tabbycat", 9], ["blackcat", 8]] },
  { k: "cattery2", n: "The Cattery: Long Coats", lvl: [51, 55], next: "cattery4", prev: { map: "cattery1", x: 7, y: 1 },
    pool: [["mainecoon", 10], ["norwegianforest", 10], ["persiancat", 8], ["ragdollcat", 8], ["turkishvan", 8], ["siamesecat", 8], ["orientalcat", 8], ["abyssiniancat", 8]] },
  { k: "cattery3", n: "The Cattery: The Wild Line", lvl: [53, 57], next: null, prev: { map: "hearthgate", x: 5, y: 1 },
    pool: [["savannahcat", 8], ["bengalcat", 9], ["serval", 6], ["asianleopardcat", 0], ["abyssiniancat", 8], ["orientalcat", 8], ["siamesecat", 8], ["housecat", 8], ["wolfdog", 4]] },
  { k: "kennel1", n: "The Kennels: The Yard", lvl: [50, 54], next: "kennel2", prev: { map: "hearthgate", x: 14, y: 3 },
    pool: [["labrador", 10], ["goldenretriever", 10], ["beagle", 10], ["bulldog", 9], ["pug", 9], ["corgi", 9], ["dachshund", 9], ["jackrussell", 9], ["chihuahua", 9], ["poodle", 8], ["dog", 9], ["puppy", 8]] },
  { k: "kennel2", n: "The Kennels: The Working Line", lvl: [51, 55], next: "kennel3", prev: { map: "kennel1", x: 7, y: 1 },
    pool: [["bordercollie", 10], ["germanshepherd", 9], ["australianshepherd", 9], ["rottweiler", 8], ["labrador", 8], ["greatdane", 7], ["bordeauxmastiff", 7], ["dalmatian", 8], ["greyhound", 8], ["shibainu", 8]] },
  { k: "kennel3", n: "The Kennels: The Snow Yard", lvl: [52, 56], next: null, prev: { map: "kennel2", x: 7, y: 1 },
    pool: [["husky", 10], ["malamute", 9], ["samoyed", 9], ["akita", 8], ["bernesemountain", 8], ["saintbernard", 8], ["shibainu", 7]] },
  { k: "kennel4", n: "The Kennels: The Long Fence", lvl: [54, 58], next: "kennel5", prev: { map: "hearthgate", x: 10, y: 1 },
    pool: [["wolfdog", 7], ["husky", 8], ["malamute", 7], ["germanshepherd", 8], ["akita", 7], ["greyhound", 8], ["wolf", 5], ["dingo", 6], ["shibainu", 7], ["bordercollie", 8]] },
  { k: "kennel5", n: "The Kennels: The Retired", lvl: [55, 59], next: "rescue", prev: { map: "kennel4", x: 7, y: 1 },
    pool: [["greyhound", 11], ["dalmatian", 8], ["bordercollie", 8], ["germanshepherd", 8], ["labrador", 9], ["saintbernard", 7], ["bernesemountain", 7], ["rottweiler", 7], ["australianshepherd", 8], ["dog", 9]] },
  { k: "cattery4", n: "The Cattery: Shorthairs", lvl: [52, 56], next: null, prev: { map: "cattery2", x: 7, y: 1 },
    pool: [["britishshorthair", 10], ["russianblue", 9], ["abyssiniancat", 9], ["orientalcat", 9], ["devonrex", 9], ["sphynxcat", 8], ["siamesecat", 9], ["bengalcat", 7], ["tabbycat", 9], ["housecat", 9]] },
  { k: "rescue", n: "Rescue Row", lvl: [56, 60], next: null, prev: { map: "kennel5", x: 7, y: 1 },
    pool: [["dog", 12], ["puppy", 10], ["housecat", 12], ["tabbycat", 11], ["calicocat", 11], ["blackcat", 11], ["petrabbit", 9], ["lopbunny", 8], ["guineapig", 8], ["fancyrat", 8], ["hamster", 8], ["ferretpet", 7], ["potbellypig", 6], ["beagle", 8], ["chihuahua", 8], ["pug", 8], ["jackrussell", 8], ["corgi", 7], ["dachshund", 7], ["poodle", 7], ["greyhound", 7], ["labrador", 8], ["goldenretriever", 7], ["bulldog", 7], ["wolfdog", 4], ["savannahcat", 4], ["bengalcat", 5], ["scottishfold", 6], ["persiancat", 6], ["mainecoon", 6], ["siamesecat", 7], ["ragdollcat", 6]] },
];
HEARTH.forEach((d) => {
  MAPS[d.k] = {
    name: d.n, zone: "hearth", music: "route",
    rows: d.next ? HRTH_MID : HRTH_END,
    exits: { "7,9": d.prev, ...(d.next ? { "7,0": { map: d.next, x: 7, y: 8 } } : {}) },
    pool: d.pool.filter(([sp]) => DEX[sp]), lvl: d.lvl,
  };
});

Object.assign(SIGNS, {
  "hearthgate:4,1": "🪧 'HEARTHSIDE — every animal here is the same species as something in your Field Guide. We just spent ten thousand years asking it to stay.'",
  "hearthgate:11,1": "🪧 '⬅ THE CATTERY · THE KENNELS ➡ · ⬆ THE WILD LINE · ⬆ THE LONG FENCE'",
  "hearthgate:4,7": "🪧 'Dogs split from wolves at least 15,000 years ago — the first animal we ever befriended, before farming, before writing, before anything.'",
  "hearthgate:11,7": "🪧 'Cats domesticated themselves. Grain stores drew rodents, rodents drew wildcats, and the friendliest ones ate best. Nobody planned it. They moved in.'",
  "cattery1:7,3": "🪧 'THE CATTERY — every cat here descends from Felis lybica, the African wildcat, still living wild today. Your lap cat is one small evolutionary aside from something in the savanna.'",
  "cattery1:7,7": "🪧 'The Scottish Fold\\'s ears fold because of a cartilage mutation. The same gene affects cartilage everywhere else in the body. Every Fold has some degree of painful arthritis. We bred for the ears anyway.'",
  "cattery2:7,3": "🪧 'Long coats are cold-climate answers: Maine Coon, Norwegian Forest, Siberian. Different countries, same problem, nearly the same solution.'",
  "cattery2:7,7": "🪧 'The Persian\\'s flat face was bred in over a century. Many cannot breathe well, and their tear ducts no longer drain. A show standard is not a health standard.'",
  "cattery3:7,3": "🪧 'THE WILD LINE — the Savannah is a serval crossed with a house cat. The Bengal, an Asian leopard cat. They are beautiful, and they are strong, and they are often given up at two years old when they stop being kittens and start being wildcats in a flat.'",
  "cattery3:7,7": "🪧 'An F1 Savannah can clear two metres from standing and will not stop needing to. Wanting a wild animal is not the same as being able to keep one. That is most of what this whole Field Guide has been about.'",
  "kennel1:7,3": "🪧 'THE KENNELS — one species. Chihuahua to Great Dane, all Canis familiaris. No other animal on earth has been stretched this far by our hands.'",
  "kennel1:7,7": "🪧 'The pug and the bulldog cannot cool themselves properly, and many cannot give birth unassisted. We selected for a face that looks like a human infant, and they pay for it with every breath.'",
  "kennel2:7,3": "🪧 'A border collie can learn a thousand nouns. Working breeds were built for a job, and a dog without its job will invent one you will not enjoy.'",
  "kennel2:7,7": "🪧 'The Dalmatian ran alongside carriages for miles. The greyhound is built as a projectile. Neither of them agreed to a flat and a twenty-minute walk.'",
  "kennel3:7,3": "🪧 'THE SNOW YARD — the husky was bred by the Chukchi people to pull loads across sea ice on almost nothing. That is why it will run away from you. It was never built to stay.'",
  "kennel3:7,7": "🪧 'A Saint Bernard named Barry is credited with saving over forty people in the Alps. Then we bred the breed heavier and flatter for the show ring, and it stopped being able to do the job it was named for.'",
  "kennel4:7,3": "🪧 'THE LONG FENCE — wolfdogs are legal in some places, banned in others, and misunderstood nearly everywhere. Most end up in sanctuaries. They are not dogs who look like wolves; they are wolves who tolerate you.'",
  "cattery4:7,3": "🪧 'THE CATTERY: SHORTHAIRS — the closest thing here to the wildcat that walked into the grain store. Sturdy, sensible, unbothered. The breed we barely changed is the breed that ages best.'",
  "kennel5:7,3": "🪧 'THE RETIRED — a racing greyhound\\'s career is over at four or five. They are famously lazy afterwards: forty-mile-an-hour couch ornaments. Nearly all of them need somebody.'",
  "kennel5:7,7": "🪧 'Working dogs get retired too — from farms, from search teams, from service. They are trained, gentle, middle-aged, and passed over for puppies every single time.'",
  "rescue:7,3": "🪧 'RESCUE ROW — no pedigrees here. Every animal in this room is a mix of everything in the last nine, and none of them are worth less for it.'",
  "rescue:7,7": "🪧 'You walked past the Savannah, the Bengal, the wolfdog, the Fold with the sore joints. All of them were in a room like this within two years, because someone wanted the look and not the animal. Adopt. Ask what an animal needs before you ask what it looks like. That is the whole Field Guide, on one sign. 🐾'",
  "kennel4:7,7": "🪧 'Fifteen thousand years ago some wolves chose the fire, and we chose them back. Everything in the Kennels and the Cattery came out of that one deal. Keep your end of it. 🐾'",
});
