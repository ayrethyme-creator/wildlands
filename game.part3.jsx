// ---------- SPECIES ----------
const DEX = {
  // starters
  fennec_j: { n: "Fennec Kit", art: "fennec", juv: true, t: ["Burrow", "Swift"], b: { h: 38, a: 40, d: 33, s: 50 }, m: ["scratch", "quickdash"], l: [[8, "dig"], [12, "tunnel"]], grows: { to: "fennec", at: 14 }, c: 0.6 },
  fennec:   { n: "Fennec Fox", art: "fennec", t: ["Burrow", "Swift"], b: { h: 46, a: 50, d: 40, s: 60 }, m: ["scratch", "quickdash", "dig"], l: [[16, "blitz"], [20, "bodyslam"], [24, "firststrike"], [32, "quake"]], c: 0.35 },
  otter_j:  { n: "Otter Pup", art: "otter", juv: true, t: ["Aquatic", "Swift"], b: { h: 40, a: 38, d: 34, s: 46 }, m: ["tackle", "splash"], l: [[8, "quickdash"], [12, "bubblejet"]], grows: { to: "otter", at: 14 }, c: 0.6 },
  otter:    { n: "Otter", art: "otter", t: ["Aquatic", "Swift"], b: { h: 50, a: 48, d: 42, s: 55 }, m: ["tackle", "splash", "bubblejet"], l: [[16, "blitz"], [20, "torrent"], [24, "ripple"], [32, "tidalcrash"]], c: 0.35 },
  kestrel_j:{ n: "Kestrel Chick", art: "kestrel", juv: true, t: ["Aerial"], b: { h: 36, a: 42, d: 30, s: 50 }, m: ["scratch", "peck"], l: [[9, "gust"]], grows: { to: "kestrel", at: 14 }, c: 0.6 },
  kestrel:  { n: "Kestrel", art: "kestrel", t: ["Aerial"], b: { h: 44, a: 52, d: 38, s: 62 }, m: ["peck", "gust", "scratch"], l: [[16, "divebomb"], [20, "blitz"], [23, "preen"], [30, "hurricane"]], c: 0.35 },
  // savanna & broadly distributed
  hedgehog_j: { n: "Hoglet", art: "hedgehog", juv: true, t: ["Armor"], b: { h: 42, a: 32, d: 48, s: 26 }, m: ["tackle", "quillguard"], l: [[9, "shellbash"]], grows: { to: "hedgehog", at: 12 }, c: 0.7 },
  hedgehog: { n: "Hedgehog", art: "hedgehog", t: ["Armor"], b: { h: 50, a: 40, d: 60, s: 30 }, m: ["quillguard", "tackle", "shellbash"], l: [[14, "ironhide"], [18, "bodyslam"], [21, "harden"], [28, "siegehorn"]], c: 0.5 },
  gecko:    { n: "Gecko", art: "gecko", t: ["Swift"], b: { h: 40, a: 45, d: 35, s: 65 }, m: ["quickdash", "scratch"], l: [[7, "blitz"], [13, "bodyslam"], [17, "firststrike"], [26, "lightstep"]], c: 0.6 },
  lovebird_j: { n: "Lovebird Chick", art: "lovebird", juv: true, t: ["Aerial"], b: { h: 34, a: 36, d: 28, s: 46 }, m: ["peck", "scratch"], l: [[8, "gust"]], grows: { to: "lovebird", at: 12 }, c: 0.65 },
  lovebird: { n: "Lovebird", art: "lovebird", t: ["Aerial"], b: { h: 42, a: 44, d: 36, s: 58 }, m: ["peck", "gust"], l: [[14, "quickdash"], [18, "divebomb"], [22, "preen"], [30, "hurricane"]], c: 0.5 },
  rabbit_j: { n: "Leveret", art: "rabbit", juv: true, t: ["Burrow", "Swift"], b: { h: 36, a: 34, d: 30, s: 50 }, m: ["tackle", "quickdash"], l: [[8, "tunnel"]], grows: { to: "rabbit", at: 12 }, c: 0.7 },
  rabbit:   { n: "Jackrabbit", art: "rabbit", t: ["Burrow", "Swift"], b: { h: 45, a: 42, d: 38, s: 60 }, m: ["tunnel", "quickdash", "tackle"], l: [[14, "dig"], [18, "blitz"], [22, "firststrike"], [28, "lightstep"]], c: 0.55 },
  meerkat:  { n: "Meerkat", art: "meerkat", t: ["Burrow", "Swift"], b: { h: 40, a: 42, d: 34, s: 58 }, m: ["scratch", "quickdash"], l: [[9, "tunnel"], [14, "dig"], [18, "firststrike"], [27, "lightstep"]], c: 0.6 },
  // wetland
  dartfrog_j: { n: "Tadpole", art: "tadpole", t: ["Aquatic"], b: { h: 32, a: 38, d: 28, s: 40 }, m: ["splash", "tackle"], l: [], grows: { to: "dartfrog", at: 10 }, c: 0.65 },
  dartfrog: { n: "Dart Frog", art: "dartfrog", t: ["Venom"], b: { h: 38, a: 55, d: 35, s: 50 }, m: ["toxinspray", "venombite", "tackle"], l: [[14, "bubblejet"], [18, "stingshot"], [22, "venomcloud"], [30, "neurotoxin"]], c: 0.4 },
  beaver_j: { n: "Beaver Kit", art: "beaver", juv: true, t: ["Aquatic", "Burrow"], b: { h: 45, a: 36, d: 40, s: 28 }, m: ["tackle", "splash"], l: [[9, "dig"]], grows: { to: "beaver", at: 12 }, c: 0.6 },
  beaver:   { n: "Beaver", art: "beaver", t: ["Aquatic", "Burrow"], b: { h: 55, a: 45, d: 50, s: 35 }, m: ["splash", "dig", "bodyslam"], l: [[15, "torrent"], [20, "harden"], [28, "quake"]], c: 0.45 },
  flamingo: { n: "Flamingo", art: "flamingo", t: ["Aerial", "Aquatic"], b: { h: 44, a: 44, d: 38, s: 52 }, m: ["peck", "splash"], l: [[13, "gust"], [17, "bubblejet"], [21, "preen"], [28, "hurricane"]], c: 0.5 },
  hippo:    { n: "Hippo", art: "hippo", t: ["Aquatic", "Armor"], b: { h: 70, a: 56, d: 58, s: 24 }, m: ["splash", "ironhide"], l: [[15, "bodyslam"], [19, "torrent"], [23, "intimidate"], [30, "tidalcrash"]], c: 0.3 },
  croc_j:   { n: "Croc Hatchling", art: "croc", juv: true, t: ["Predator", "Aquatic"], b: { h: 46, a: 46, d: 42, s: 28 }, m: ["tackle", "splash"], l: [[10, "torrent"]], grows: { to: "croc", at: 15 }, c: 0.45 },
  croc:     { n: "Crocodile", art: "croc", t: ["Predator", "Aquatic"], b: { h: 58, a: 58, d: 52, s: 35 }, m: ["maul", "torrent", "tackle"], l: [[18, "ironhide"], [22, "crunch"], [32, "tidalcrash"]], c: 0.22 },
  turtle:   { n: "Terrapin", art: "turtle", t: ["Armor", "Aquatic"], b: { h: 58, a: 40, d: 65, s: 25 }, m: ["shellbash", "splash", "ironhide"], l: [[14, "torrent"], [19, "harden"], [28, "siegehorn"]], c: 0.45 },
  // jungle
  python:   { n: "Ball Python", art: "python", t: ["Predator", "Burrow"], b: { h: 58, a: 60, d: 50, s: 34 }, m: ["tackle", "pounce"], l: [[18, "crunch"], [26, "dig"], [34, "bodyslam"], [40, "gigaslam"]], c: 0.3 },
  chameleon:{ n: "Chameleon", art: "chameleon", t: ["Swift", "Wild"], b: { h: 44, a: 50, d: 40, s: 56 }, m: ["scratch", "quickdash"], l: [[18, "firststrike"], [26, "blitz"], [34, "bodyslam"]], c: 0.45 },
  sloth:    { n: "Sloth", art: "sloth", t: ["Armor", "Wild"], b: { h: 62, a: 44, d: 60, s: 16 }, m: ["scratch", "quillguard"], l: [[20, "harden"], [28, "bodyslam"], [36, "gigaslam"]], c: 0.5 },
  hornbill: { n: "Hornbill", art: "hornbill", t: ["Aerial", "Armor"], b: { h: 50, a: 54, d: 46, s: 54 }, m: ["peck", "gust", "shellbash"], l: [[24, "divebomb"], [32, "siegehorn"], [40, "hurricane"]], c: 0.35 },
  jaguar_j: { n: "Jaguar Cub", art: "jaguar", juv: true, t: ["Predator", "Aquatic"], b: { h: 46, a: 52, d: 40, s: 44 }, m: ["scratch", "pounce"], l: [[16, "splash"]], grows: { to: "jaguar", at: 24 }, c: 0.4 },
  jaguar:   { n: "Jaguar", art: "jaguar", t: ["Predator", "Aquatic"], b: { h: 60, a: 68, d: 52, s: 56 }, m: ["pounce", "takedown", "splash"], l: [[26, "torrent"], [32, "crunch"], [40, "apexfang"]], c: 0.2 },
  tiger_j:  { n: "Tiger Cub", art: "tiger", juv: true, t: ["Predator"], b: { h: 52, a: 56, d: 42, s: 46 }, m: ["scratch", "pounce"], l: [[16, "takedown"]], grows: { to: "tiger", at: 24 }, c: 0.35 },
  tiger:    { n: "Tiger", art: "tiger", t: ["Predator"], b: { h: 68, a: 74, d: 54, s: 58 }, m: ["pounce", "takedown", "crunch"], l: [[28, "maul"], [36, "intimidate"], [44, "apexfang"]], c: 0.15 },
  // desert
  sandcat:  { n: "Sand Cat", art: "sandcat", t: ["Predator", "Burrow"], b: { h: 44, a: 48, d: 40, s: 58 }, m: ["scratch", "pounce"], l: [[14, "dig"], [22, "quickdash"], [30, "blitz"]], c: 0.4 },
  camel:    { n: "Camel", art: "camel", t: ["Wild", "Armor"], b: { h: 66, a: 50, d: 54, s: 30 }, m: ["tackle", "ironhide"], l: [[24, "bodyslam"], [30, "flareup"], [38, "gigaslam"]], c: 0.4 },
  jackal:   { n: "Jackal", art: "jackal", t: ["Predator"], b: { h: 48, a: 52, d: 40, s: 56 }, m: ["scratch", "pounce"], l: [[14, "takedown"], [22, "quickdash"], [30, "crunch"]], c: 0.4 },
  tortoise: { n: "Sulcata Tortoise", art: "tortoise", t: ["Armor", "Burrow"], b: { h: 60, a: 42, d: 70, s: 18 }, m: ["shellbash", "quillguard"], l: [[20, "harden"], [28, "ironhide"], [36, "quake"]], c: 0.4 },
  caracal:  { n: "Caracal", art: "caracal", t: ["Predator", "Swift"], b: { h: 48, a: 56, d: 40, s: 66 }, m: ["pounce", "quickdash"], l: [[18, "blitz"], [26, "takedown"], [34, "lightstep"]], c: 0.3 },
  cobra_j:  { n: "Cobra Hatchling", art: "cobra", juv: true, t: ["Venom"], b: { h: 36, a: 48, d: 32, s: 44 }, m: ["tackle", "toxinspray"], l: [[10, "venombite"]], grows: { to: "cobra", at: 14 }, c: 0.5 },
  cobra:    { n: "King Cobra", art: "cobra", t: ["Venom"], b: { h: 45, a: 60, d: 40, s: 55 }, m: ["venombite", "stingshot", "tackle"], l: [[16, "blitz"], [20, "venomcloud"], [30, "neurotoxin"]], c: 0.32 },
  scorpion: { n: "Scorpion", art: "scorpion", t: ["Venom", "Armor"], b: { h: 46, a: 54, d: 55, s: 40 }, m: ["stingshot", "shellbash", "toxinspray"], l: [[15, "venombite"], [20, "harden"], [30, "neurotoxin"]], c: 0.35 },
  // highveld
  boar_j:   { n: "Piglet", art: "boar", juv: true, t: ["Wild", "Armor"], b: { h: 50, a: 44, d: 40, s: 30 }, m: ["tackle", "scratch"], l: [[10, "bodyslam"]], grows: { to: "boar", at: 14 }, c: 0.55 },
  boar:     { n: "Wild Boar", art: "boar", t: ["Wild", "Armor"], b: { h: 62, a: 55, d: 50, s: 38 }, m: ["bodyslam", "ironhide", "tackle"], l: [[16, "takedown"], [21, "intimidate"], [30, "gigaslam"]], c: 0.38 },
  badger_j: { n: "Badger Cub", art: "badger", juv: true, t: ["Predator", "Armor"], b: { h: 48, a: 46, d: 44, s: 32 }, m: ["scratch", "pounce"], l: [[10, "ironhide"]], grows: { to: "badger", at: 16 }, c: 0.45 },
  badger:   { n: "Honey Badger", art: "badger", t: ["Predator", "Armor"], b: { h: 60, a: 58, d: 55, s: 40 }, m: ["pounce", "ironhide", "takedown"], l: [[18, "maul"], [22, "crunch"], [32, "siegehorn"]], c: 0.28 },
  pangolin: { n: "Pangolin", art: "pangolin", t: ["Armor"], b: { h: 52, a: 46, d: 68, s: 28 }, m: ["quillguard", "shellbash"], l: [[14, "ironhide"], [19, "harden"], [23, "bodyslam"], [32, "siegehorn"]], c: 0.35 },
  ibex:     { n: "Ibex", art: "ibex", t: ["Armor", "Swift"], b: { h: 54, a: 52, d: 58, s: 50 }, m: ["tackle", "quickdash", "shellbash"], l: [[26, "ironhide"], [34, "siegehorn"]], c: 0.35 },
  hyena_j:  { n: "Hyena Cub", art: "hyena", juv: true, t: ["Predator", "Armor"], b: { h: 46, a: 46, d: 42, s: 36 }, m: ["scratch", "pounce"], l: [[14, "ironhide"]], grows: { to: "hyena", at: 22 }, c: 0.45 },
  hyena:    { n: "Spotted Hyena", art: "hyena", t: ["Predator", "Armor"], b: { h: 60, a: 60, d: 52, s: 44 }, m: ["pounce", "ironhide", "takedown"], l: [[26, "crunch"], [34, "siegehorn"]], c: 0.3 },
  wilddog_j:{ n: "Wild Dog Pup", art: "wilddog", juv: true, t: ["Predator", "Swift"], b: { h: 42, a: 44, d: 36, s: 48 }, m: ["scratch", "pounce"], l: [[14, "quickdash"]], grows: { to: "wilddog", at: 20 }, c: 0.5 },
  wilddog:  { n: "African Wild Dog", art: "wilddog", t: ["Predator", "Swift"], b: { h: 54, a: 56, d: 44, s: 62 }, m: ["pounce", "quickdash", "takedown"], l: [[24, "blitz"], [30, "crunch"], [38, "apexfang"]], c: 0.3 },
  serval:   { n: "Serval", art: "serval", t: ["Predator", "Swift"], b: { h: 46, a: 56, d: 38, s: 64 }, m: ["pounce", "quickdash"], l: [[14, "blitz"], [18, "takedown"], [21, "firststrike"], [30, "lightstep"]], c: 0.35 },
  aardvark: { n: "Aardvark", art: "aardvark", t: ["Burrow"], b: { h: 56, a: 50, d: 44, s: 36 }, m: ["scratch", "tunnel"], l: [[13, "dig"], [17, "bodyslam"], [21, "harden"], [30, "quake"]], c: 0.5 },
  // alpine
  arcticfox_j: { n: "Arctic Fox Kit", art: "arcticfox", juv: true, t: ["Burrow", "Swift"], b: { h: 36, a: 38, d: 32, s: 48 }, m: ["scratch", "quickdash"], l: [[12, "tunnel"]], grows: { to: "arcticfox", at: 18 }, c: 0.6 },
  arcticfox:{ n: "Arctic Fox", art: "arcticfox", t: ["Burrow", "Swift"], b: { h: 44, a: 46, d: 38, s: 60 }, m: ["quickdash", "tunnel", "scratch"], l: [[22, "dig"], [30, "blitz"], [36, "lightstep"]], c: 0.4 },
  lynx_j:   { n: "Lynx Kitten", art: "lynx", juv: true, t: ["Predator", "Swift"], b: { h: 40, a: 44, d: 36, s: 46 }, m: ["scratch", "pounce"], l: [[15, "quickdash"]], grows: { to: "lynx", at: 22 }, c: 0.5 },
  lynx:     { n: "Lynx", art: "lynx", t: ["Predator", "Swift"], b: { h: 52, a: 56, d: 46, s: 60 }, m: ["pounce", "quickdash", "blitz"], l: [[26, "crunch"], [34, "lightstep"]], c: 0.3 },
  snowleopard_j: { n: "Snow Leopard Cub", art: "snowleopard", juv: true, t: ["Predator", "Swift"], b: { h: 44, a: 50, d: 40, s: 50 }, m: ["scratch", "pounce"], l: [[18, "quickdash"]], grows: { to: "snowleopard", at: 26 }, c: 0.4 },
  snowleopard: { n: "Snow Leopard", art: "snowleopard", t: ["Predator", "Swift"], b: { h: 58, a: 64, d: 50, s: 64 }, m: ["pounce", "blitz", "takedown"], l: [[30, "crunch"], [38, "apexfang"]], c: 0.18 },
  penguin:  { n: "African Penguin", art: "penguin", t: ["Aquatic", "Swift"], b: { h: 50, a: 48, d: 46, s: 52 }, m: ["peck", "splash", "bubblejet"], l: [[26, "blitz"], [34, "torrent"], [40, "tidalcrash"]], c: 0.45 },
  seal:     { n: "Cape Fur Seal", art: "seal", t: ["Aquatic", "Armor"], b: { h: 60, a: 50, d: 54, s: 36 }, m: ["tackle", "splash"], l: [[22, "bodyslam"], [30, "torrent"], [38, "tidalcrash"]], c: 0.4 },
  // volcanic
  monitor:  { n: "Rock Monitor", art: "monitor", t: ["Predator", "Ember"], b: { h: 56, a: 58, d: 48, s: 40 }, m: ["scratch", "flareup"], l: [[22, "crunch"], [30, "emberwing"], [40, "magmaburst"]], c: 0.3 },
  vulture:  { n: "Vulture", art: "vulture", t: ["Aerial", "Ember"], b: { h: 52, a: 56, d: 44, s: 56 }, m: ["peck", "gust", "flareup"], l: [[26, "divebomb"], [34, "emberwing"], [42, "hurricane"]], c: 0.3 },
  // grove & night
  bat:      { n: "Fruit Bat", art: "bat", t: ["Aerial"], b: { h: 40, a: 48, d: 35, s: 62 }, m: ["gust", "peck", "quickdash"], l: [[14, "divebomb"], [19, "firststrike"], [30, "lightstep"]], c: 0.5 },
  owl_j:    { n: "Owlet", art: "owl", juv: true, t: ["Aerial", "Predator"], b: { h: 38, a: 44, d: 34, s: 46 }, m: ["peck", "scratch"], l: [[10, "gust"]], grows: { to: "owl", at: 15 }, c: 0.5 },
  owl:      { n: "Eagle-Owl", art: "owl", t: ["Aerial", "Predator"], b: { h: 48, a: 56, d: 42, s: 58 }, m: ["gust", "pounce", "divebomb"], l: [[18, "maul"], [22, "preen"], [32, "hurricane"]], c: 0.32 },
  galago:   { n: "Galago", art: "galago", t: ["Swift", "Wild"], b: { h: 40, a: 46, d: 34, s: 64 }, m: ["scratch", "quickdash"], l: [[16, "firststrike"], [24, "blitz"], [32, "lightstep"]], c: 0.5 },
  redfox_j: { n: "Red Fox Kit", art: "redfox", juv: true, t: ["Wild", "Swift"], b: { h: 38, a: 40, d: 32, s: 46 }, m: ["scratch", "quickdash"], l: [[11, "pounce"]], grows: { to: "redfox", at: 16 }, c: 0.6 },
  redfox:   { n: "Red Fox", art: "redfox", t: ["Wild", "Swift"], b: { h: 46, a: 50, d: 38, s: 58 }, m: ["scratch", "quickdash", "pounce"], l: [[20, "blitz"], [28, "bodyslam"], [34, "lightstep"]], c: 0.45 },
  manedwolf_j: { n: "Maned Wolf Pup", art: "manedwolf", juv: true, t: ["Swift", "Wild"], b: { h: 40, a: 42, d: 34, s: 50 }, m: ["scratch", "quickdash"], l: [[15, "pounce"]], grows: { to: "manedwolf", at: 24 }, c: 0.5 },
  manedwolf:{ n: "Maned Wolf", art: "manedwolf", t: ["Swift", "Wild"], b: { h: 50, a: 54, d: 40, s: 64 }, m: ["quickdash", "pounce", "blitz"], l: [[28, "bodyslam"], [36, "lightstep"]], c: 0.3 },
  // wide-ranging predators
  wolf_j:   { n: "Wolf Pup", art: "wolf", juv: true, t: ["Predator"], b: { h: 42, a: 44, d: 36, s: 44 }, m: ["scratch", "pounce"], l: [[10, "takedown"]], grows: { to: "wolf", at: 15 }, c: 0.45 },
  wolf:     { n: "Wolf", art: "wolf", t: ["Predator"], b: { h: 52, a: 56, d: 45, s: 55 }, m: ["takedown", "pounce", "tackle"], l: [[17, "maul"], [21, "crunch"], [30, "apexfang"]], c: 0.25 },
  leopard_j:{ n: "Leopard Cub", art: "leopard", juv: true, t: ["Predator", "Swift"], b: { h: 40, a: 50, d: 34, s: 52 }, m: ["scratch", "pounce"], l: [[12, "quickdash"]], grows: { to: "leopard", at: 16 }, c: 0.4 },
  leopard:  { n: "Leopard", art: "leopard", t: ["Predator", "Swift"], b: { h: 50, a: 62, d: 42, s: 66 }, m: ["pounce", "blitz", "takedown"], l: [[18, "maul"], [22, "crunch"], [32, "apexfang"]], c: 0.25 },
  lion_j:   { n: "Lion Cub", art: "lion", juv: true, t: ["Predator"], b: { h: 48, a: 50, d: 38, s: 42 }, m: ["scratch", "pounce"], l: [[12, "takedown"]], grows: { to: "lion", at: 16 }, c: 0.4 },
  lion:     { n: "Lioness", art: "lion", t: ["Predator"], b: { h: 60, a: 62, d: 48, s: 52 }, m: ["maul", "takedown", "blitz"], l: [[18, "intimidate"], [30, "apexfang"]], c: 0.18 },
  cheetah_j:{ n: "Cheetah Cub", art: "cheetah", juv: true, t: ["Predator", "Swift"], b: { h: 40, a: 46, d: 32, s: 64 }, m: ["scratch", "pounce"], l: [[14, "quickdash"], [18, "blitz"]], grows: { to: "cheetah", at: 20 }, c: 0.45 },
  cheetah:  { n: "Cheetah", art: "cheetah", t: ["Predator", "Swift"], b: { h: 50, a: 60, d: 40, s: 82 }, m: ["pounce", "quickdash", "blitz"], l: [[24, "takedown"], [30, "firststrike"], [36, "lightstep"], [42, "apexfang"]], c: 0.25 },
  // guardians
  qilin:       { n: "Qilin", art: "qilin", t: ["Burrow", "Armor"], b: { h: 80, a: 70, d: 78, s: 64 }, m: ["harmonystomp", "ironhide", "dig", "harden"], l: [], c: 0.06, legend: true },
  thunderbird: { n: "Thunderbird", art: "thunderbird", t: ["Aerial", "Swift"], b: { h: 72, a: 80, d: 62, s: 84 }, m: ["stormdive", "blitz", "gust", "intimidate"], l: [], c: 0.06, legend: true },
  phoenix:     { n: "Phoenix", art: "phoenix", t: ["Ember", "Aerial"], b: { h: 76, a: 78, d: 64, s: 76 }, m: ["emberwing", "magmaburst", "divebomb", "preen"], l: [], c: 0.05, legend: true },
};

// ---------- ZONE PALETTES ----------
const PALS = {
  savanna: { ground: "#c9a86a", grass: "#74a857", grass2: "#8fbc6f", tree: { bg: "#2d6a4f", em: "🌳" }, mount: { bg: "#77746e", em: "⛰️" }, water: "#3b7dc4", flower: "🌼" },
  wetland: { ground: "#9aa86b", grass: "#5c9a6b", grass2: "#7db088", tree: { bg: "#2e5c4a", em: "🌾" }, mount: { bg: "#6b7460", em: "⛰️" }, water: "#2e86ab", flower: "🪷" },
  jungle: { ground: "#6b7d4a", grass: "#3c7a3c", grass2: "#4f9a4f", tree: { bg: "#1e4a2e", em: "🌴" }, mount: { bg: "#4a5c44", em: "⛰️" }, water: "#2e7d6b", flower: "🌺" },
  desert: { ground: "#e8d0a3", grass: "#d4b96a", grass2: "#e0c987", tree: { bg: "#c9a868", em: "🌵" }, mount: { bg: "#c0975c", em: "🏜️" }, water: "#4a9ac9", flower: "🌵" },
  highveld: { ground: "#b5a488", grass: "#8a9a5c", grass2: "#a3b070", tree: { bg: "#6b6b60", em: "🪨" }, mount: { bg: "#77746e", em: "⛰️" }, water: "#3b7dc4", flower: "🌾" },
  alpine: { ground: "#e8edf2", grass: "#c9d8e4", grass2: "#dae5ee", tree: { bg: "#4a6b5c", em: "🌲" }, mount: { bg: "#dfe6ee", em: "🏔️" }, water: "#7db4d8", flower: "❄️" },
  volcanic: { ground: "#8a7568", grass: "#a3583c", grass2: "#b56a4a", tree: { bg: "#4c3833", em: "🌋" }, mount: { bg: "#5c4038", em: "🌋" }, water: "#3b7dc4", flower: "🔥" },
  grove: { ground: "#8a7a9c", grass: "#5c4a7d", grass2: "#6f5c94", tree: { bg: "#3c2e5c", em: "🌳" }, mount: { bg: "#4c3e63", em: "⛰️" }, water: "#4a5c9c", flower: "🍄" },
  summit: { ground: "#b8c0cc", grass: "#9aa5b5", grass2: "#a8b2c0", tree: { bg: "#8a93a3", em: "🏔️" }, mount: { bg: "#8a93a3", em: "🏔️" }, water: "#7db4d8", flower: "✨" },
  cavezone: { ground: "#6b5f4c", grass: "#5c5344", grass2: "#6b6152", tree: { bg: "#4a4438", em: "🪨" }, mount: { bg: "#4a4438", em: "🪨" }, water: "#2e5c6b", flower: "💎" },
};
const ARENA = {
  savanna: "linear-gradient(#87b26a,#c9a86a)", wetland: "linear-gradient(#7db088,#9aa86b)",
  jungle: "linear-gradient(#3c7a3c,#6b7d4a)", desert: "linear-gradient(#f2d9a3,#e0c087)",
  highveld: "linear-gradient(#a3b070,#b5a488)", alpine: "linear-gradient(#eef4fa,#b8cede)",
  volcanic: "linear-gradient(#b5674a,#6b4438)", grove: "linear-gradient(#6f5c94,#3c2e5c)",
  summit: "linear-gradient(#c8d0dc,#8a93a3)", cavezone: "linear-gradient(#4a4438,#2e2921)",
};

// ---------- MAP TEMPLATES ----------
const ROWS_STD = [
  "TTTTTTTnTTTTTTTT",
  "T..............T",
  "T..GGG....GGG..T",
  "T..GGG....GGG..T",
  "T...R......*...T",
  "TGGGGGGGGGGGGGGT",
  "TGGGGGGGGGGGGGGT",
  "T..............T",
  "T..GGG....GGG..T",
  "T..GGG....GGG..T",
  "T...*......R...T",
  "TGGGGGGGGGGGGGGT",
  "T..............T",
  "T..GGG....GGG..T",
  "T..............T",
  "TTTTTTTsTTTTTTTT",
];
const ROWS_RV = ROWS_STD.map((r, i) => (i === 1 ? "T......V.......T" : r));
const withRow = (rows, y, row) => rows.map((r, i) => (i === y ? row : r));
const ROWS_TOWN = [
  "TTTTTTTnTTTTTTTT",
  "T......X.......T",
  "T..YY......CC..T",
  "T..YY......CC..T",
  "T....*....*....T",
  "T..MM......HH..T",
  "T..MM......HH..T",
  "T....gg..gg....T",
  "T..............T",
  "T..............T",
  "T..............T",
  "TTTTTTTsTTTTTTTT",
];

// ---------- MAPS ----------
const MAPS = {
  town1: {
    name: "Baobab Base", zone: "savanna", music: "town",
    rows: [
      "TTTTTTTnTTTTTTTT",
      "T..............T",
      "T..HH......HH..T",
      "T..HH......HH..T",
      "T....*....*....T",
      "T..PP......CC..T",
      "T..PP......CC..T",
      "T..........V...T",
      "T....gg..gg....T",
      "T....gg..gg....T",
      "T..............T",
      "TTTTTTTTTTTTTTTT",
    ],
    exits: { "7,0": { map: "route1", x: 7, y: 14 } },
  },
  route1: {
    name: "Acacia Trail", zone: "savanna", music: "route", rows: ROWS_RV,
    exits: { "7,0": { map: "town2", x: 7, y: 10 }, "7,15": { map: "town1", x: 7, y: 1 } },
    pool: [["gecko", 18], ["rabbit_j", 16], ["lovebird_j", 14], ["hedgehog_j", 12], ["meerkat", 10], ["dartfrog_j", 6], ["rabbit", 5], ["hedgehog", 4], ["lovebird", 4], ["lion_j", 3], ["cheetah_j", 3]],
    poolN: [["rabbit_j", 18], ["hedgehog_j", 16], ["bat", 14], ["gecko", 10], ["dartfrog_j", 8], ["rabbit", 6], ["hedgehog", 5], ["leopard_j", 3]],
    lvl: [3, 6],
  },
  town2: {
    name: "Marula Town", zone: "savanna", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route2", x: 7, y: 14 }, "7,11": { map: "route1", x: 7, y: 2 } },
  },
  route2: {
    name: "Reedwater Fen", zone: "wetland", music: "route", rows: ROWS_STD,
    exits: { "7,0": { map: "town3", x: 7, y: 10 }, "7,15": { map: "town2", x: 7, y: 2 } },
    pool: [["dartfrog_j", 14], ["beaver_j", 14], ["flamingo", 12], ["turtle", 12], ["croc_j", 10], ["otter_j", 8], ["hippo", 5], ["beaver", 6], ["dartfrog", 6]],
    poolN: [["bat", 16], ["dartfrog", 12], ["beaver_j", 12], ["croc_j", 12], ["turtle", 10], ["flamingo", 8], ["hippo", 5]],
    lvl: [10, 14],
  },
  town3: {
    name: "Delta Town", zone: "wetland", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route3", x: 7, y: 14 }, "7,11": { map: "route2", x: 7, y: 1 } },
  },
  route3: {
    name: "Canopy Deep", zone: "jungle", music: "route", rows: withRow(ROWS_RV, 7, "T..............e"),
    exits: { "7,0": { map: "town4", x: 7, y: 10 }, "7,15": { map: "town3", x: 7, y: 2 }, "15,7": { map: "cave1", x: 14, y: 10 } },
    pool: [["chameleon", 14], ["gecko", 12], ["python", 10], ["hornbill", 10], ["sloth", 10], ["lovebird", 10], ["dartfrog", 8], ["jaguar_j", 4], ["tiger_j", 2]],
    poolN: [["galago", 16], ["bat", 14], ["python", 12], ["owl_j", 10], ["sloth", 8], ["jaguar_j", 6], ["tiger_j", 3]],
    lvl: [15, 19],
  },
  town4: {
    name: "Canopy Town", zone: "jungle", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route4", x: 7, y: 14 }, "7,11": { map: "route3", x: 7, y: 2 } },
  },
  route4: {
    name: "Singing Dunes", zone: "desert", music: "route", rows: withRow(ROWS_STD, 7, "T..............e"),
    exits: { "7,0": { map: "town5", x: 7, y: 10 }, "7,15": { map: "town4", x: 7, y: 2 }, "15,7": { map: "digsite", x: 1, y: 6, req: "champion", reqMsg: "🚧 Ranger barricade: \"The Fossil Rift canyon is champions-only. Earn the title first!\"" } },
    pool: [["sandcat", 14], ["meerkat", 12], ["jackal", 12], ["camel", 10], ["tortoise", 10], ["cobra_j", 8], ["caracal", 8], ["scorpion", 8], ["fennec_j", 6]],
    poolN: [["fennec_j", 14], ["sandcat", 12], ["scorpion", 14], ["cobra", 10], ["jackal", 10], ["caracal", 8], ["bat", 10]],
    lvl: [21, 25],
  },
  town5: {
    name: "Dune Town", zone: "desert", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route5", x: 7, y: 14 }, "7,11": { map: "route4", x: 7, y: 1 } },
  },
  route5: {
    name: "Highveld Steps", zone: "highveld", music: "route", rows: ROWS_RV,
    exits: { "7,0": { map: "town6", x: 7, y: 10 }, "7,15": { map: "town5", x: 7, y: 2 } },
    pool: [["ibex", 14], ["boar", 12], ["hyena_j", 12], ["wilddog_j", 12], ["pangolin", 10], ["badger", 10], ["serval", 10], ["hyena", 5], ["wilddog", 5], ["boar_j", 8], ["badger_j", 8]],
    poolN: [["aardvark", 16], ["hyena", 12], ["owl", 12], ["badger", 10], ["hyena_j", 10], ["wilddog_j", 8], ["wolf_j", 8]],
    lvl: [26, 30],
  },
  town6: {
    name: "Crag Town", zone: "highveld", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route6", x: 7, y: 14 }, "7,11": { map: "route5", x: 7, y: 2 } },
  },
  route6: {
    name: "Frostmere Pass", zone: "alpine", music: "route", rows: withRow(ROWS_STD, 7, "T..............e"),
    exits: { "7,0": { map: "town7", x: 7, y: 10 }, "7,15": { map: "town6", x: 7, y: 2 }, "15,7": { map: "peak", x: 7, y: 14 } },
    pool: [["arcticfox_j", 14], ["lynx_j", 12], ["penguin", 12], ["seal", 12], ["ibex", 10], ["lynx", 8], ["arcticfox", 8], ["snowleopard_j", 4], ["snowleopard", 1]],
    poolN: [["owl", 14], ["arcticfox", 12], ["lynx", 12], ["bat", 10], ["seal", 8], ["snowleopard_j", 6], ["snowleopard", 2]],
    lvl: [31, 35],
  },
  town7: {
    name: "Frost Town", zone: "alpine", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route7", x: 7, y: 14 }, "7,11": { map: "route6", x: 7, y: 1 } },
  },
  route7: {
    name: "Cinder Flats", zone: "volcanic", music: "route", rows: ROWS_RV,
    exits: { "7,0": { map: "town8", x: 7, y: 10 }, "7,15": { map: "town7", x: 7, y: 2 } },
    pool: [["monitor", 14], ["vulture", 12], ["sandcat", 10], ["camel", 10], ["scorpion", 10], ["jackal", 10], ["boar", 8], ["caracal", 8]],
    poolN: [["bat", 14], ["scorpion", 14], ["monitor", 12], ["vulture", 10], ["owl", 10], ["jackal", 8]],
    lvl: [36, 40],
  },
  town8: {
    name: "Cinder Town", zone: "volcanic", music: "town", rows: withRow(ROWS_TOWN, 6, "T..MM......HH..e"),
    exits: { "7,0": { map: "route8", x: 7, y: 14 }, "7,11": { map: "route7", x: 7, y: 2 }, "15,6": { map: "shore", x: 1, y: 6 } },
  },
  shore: {
    name: "Emberglass Shore", zone: "volcanic", music: "route",
    rows: [
      "TTTTTTTTTTTTTTTT",
      "T..GWWWWWWWWW..T",
      "T..GWWWWWWWWWc.T",
      "T..GWWWWWWWWW..T",
      "T..GWWWWWWWWWWWT",
      "T.R.WWWWWWWWWWWT",
      "e...WWWWWWWWWWWT",
      "T..GWWWWWWWWWWWT",
      "T.G.WWWWWWWWWWWT",
      "T..GWWWWWWWWWWWT",
      "T.R.WWWWWWWWWWWT",
      "T..GWWWWWWWWWWWT",
      "T...WWWWWWWWWWWT",
      "TTTTTTTTTTTTTTTT",
    ],
    exits: { "0,6": { map: "town8", x: 13, y: 6 }, "13,2": { map: "ember", x: 7, y: 9 } },
    pool: [["flamingo", 12], ["seal", 12], ["penguin", 10], ["vulture", 10], ["monitor", 8], ["turtle", 8]],
    poolN: [["bat", 14], ["seal", 12], ["owl", 10], ["penguin", 10], ["monitor", 8]],
    lvl: [37, 41],
    poolWater: [["seal", 12], ["hippo", 10], ["penguin", 10], ["croc", 8], ["turtle", 8], ["otter", 6]],
    lvlWater: [38, 42],
  },
  route8: {
    name: "Gloamwood", zone: "grove", music: "route", rows: ROWS_STD,
    exits: { "7,0": { map: "town9", x: 7, y: 10 }, "7,15": { map: "town8", x: 7, y: 2 } },
    pool: [["redfox_j", 14], ["galago", 12], ["manedwolf_j", 12], ["chameleon", 10], ["redfox", 10], ["owl_j", 8], ["python", 8], ["manedwolf", 6], ["jaguar", 4]],
    poolN: [["galago", 16], ["owl", 14], ["bat", 12], ["manedwolf", 10], ["redfox", 10], ["jaguar", 6], ["python", 8]],
    lvl: [41, 45],
  },
  town9: {
    name: "Gloam Town", zone: "grove", music: "town", rows: ROWS_TOWN,
    exits: { "7,0": { map: "route9", x: 7, y: 14 }, "7,11": { map: "route8", x: 7, y: 1 } },
  },
  route9: {
    name: "Victory Trail", zone: "summit", music: "route", rows: ROWS_STD,
    exits: { "7,0": { map: "summit", x: 7, y: 13 }, "7,15": { map: "town9", x: 7, y: 2 } },
    pool: [["wolf", 12], ["lion", 10], ["cheetah", 10], ["tiger", 4], ["hyena", 10], ["wilddog", 10], ["snowleopard", 5], ["leopard", 10], ["ibex", 8]],
    poolN: [["owl", 14], ["hyena", 12], ["wolf", 12], ["leopard", 10], ["tiger", 5], ["snowleopard", 6], ["manedwolf", 8]],
    lvl: [46, 50],
  },
  summit: {
    name: "Summit Citadel", zone: "summit", music: "elite",
    rows: [
      "^^^^^^^n^^^^^^^^",
      "^^^^^^^V^^^^^^^^",
      "^^^^^^^.^^^^^^^^",
      "^^^^^^^R^^^^^^^^",
      "^^^^^^^.^^^^^^^^",
      "^^^^^^^R^^^^^^^^",
      "^^^^^^^.^^^^^^^^",
      "^^^^^^^R^^^^^^^^",
      "^^^^^^^.^^^^^^^^",
      "^^^^^^^R^^^^^^^^",
      "^^^^^^^.^^^^^^^^",
      "^..CC......MM..^",
      "^......*.......^",
      "^..............^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: { "7,14": { map: "route9", x: 7, y: 1 }, "7,0": { map: "mythhub", x: 7, y: 10, req: "champion", reqMsg: "🌀 A shimmering veil seals the pass. Only a Champion may part it." } },
  },
  cave1: {
    name: "Whispering Cave", zone: "cavezone", music: "cave", dark: true,
    rows: [
      "^^^^^^^^^^^^^^^^",
      "^L.....^.......^",
      "^^^^^..^..^^^..^",
      "^......^..^....^",
      "^..^^^^^..^..^^^",
      "^..^!.....^....^",
      "^..^..^^^^^^^..^",
      "^..^..^.....^..^",
      "^..^..^..^..^..^",
      "^.....^..^.....^",
      "^^^^^^^^^^^^^^.e",
    ],
    exits: { "15,10": { map: "route3", x: 14, y: 7 } },
    legend: "qilin",
    pool: [["bat", 16], ["aardvark", 12], ["python", 10], ["galago", 8]],
    poolN: [["bat", 18], ["galago", 12], ["python", 10], ["aardvark", 10]],
    lvl: [17, 21],
  },
  peak: {
    name: "Storm Peak", zone: "alpine", music: "route",
    rows: [
      "^^^^^^^^^^^^^^^^",
      "^^^^^^^L^^^^^^^^",
      "^^^^^^^D^^^^^^^^",
      "^...p.....p....^",
      "^......p.......^",
      "^..............^",
      "^..............^",
      "^.^^^......^^^.^",
      "^..............^",
      "^......R.......^",
      "^..^^....^^^...^",
      "^..............^",
      "^...GG...GG....^",
      "^...GG...GG....^",
      "^..............^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: { "7,15": { map: "route6", x: 14, y: 7 } },
    boulders: [{ x: 4, y: 5 }, { x: 7, y: 6 }, { x: 10, y: 5 }],
    plates: [{ x: 4, y: 3 }, { x: 7, y: 4 }, { x: 10, y: 3 }],
    legend: "thunderbird",
    pool: [["ibex", 14], ["owl_j", 10], ["snowleopard_j", 8], ["lynx", 10], ["arcticfox", 10]],
    poolN: [["owl", 16], ["bat", 12], ["snowleopard", 6], ["lynx", 10]],
    lvl: [33, 37],
  },
  ember: {
    name: "Ember Hollow", zone: "cavezone", music: "cave",
    rows: [
      "^^^^^^^^^^^^^^^^",
      "^^^^^^^L^^^^^^^^",
      "^^^^^^^D^^^^^^^^",
      "^...!..........^",
      "^......t.......^",
      "^..............^",
      "^..............^",
      "^..t.......t...^",
      "^..............^",
      "^..............^",
      "^......t.......^",
      "^^^^^^^s^^^^^^^^",
    ],
    exits: { "7,11": { map: "shore", x: 13, y: 1 } },
    torches: [{ x: 11, y: 7 }, { x: 7, y: 10 }, { x: 3, y: 7 }, { x: 7, y: 4 }],
    legend: "phoenix",
  },
};

// ---------- TILES ----------
const TILE_STYLE = (ch, pal) => {
  switch (ch) {
    case "T": return { bg: pal.tree.bg, em: pal.tree.em };
    case "^": return { bg: pal.mount.bg, em: pal.mount.em };
    case "G": return { bg: pal.grass, em: "ᵛᵛ" };
    case "g": return { bg: pal.grass2, em: "" };
    case "W": return { bg: pal.water, em: "" };
    case "*": return { bg: pal.ground, em: pal.flower };
    case "H": return { bg: "#d4b483", em: "🛖" };
    case "P": return { bg: "#d4b483", em: "⛺" };
    case "C": return { bg: "#d4b483", em: "🏥" };
    case "Y": return { bg: "#d4b483", em: "🏟️" };
    case "M": return { bg: "#d4b483", em: "🛒" };
    case "X": return { bg: pal.ground, em: "💂" };
    case "R": return { bg: pal.ground, em: "🧍" };
    case "V": return { bg: pal.ground, em: "🏃" };
    case "L": return { bg: "#b8a06a", em: "🗿" };
    case "D": return { bg: "#8a7a5c", em: "⛩️" };
    case "p": return { bg: pal.ground, em: "▫️" };
    case "t": return { bg: "#8a7a5c", em: "🪔" };
    case "!": return { bg: pal.ground, em: "🪧" };
    default: return { bg: pal.ground, em: "" };
  }
};

const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pickPool = (pool) => {
  const total = pool.reduce((s, p) => s + p[1], 0);
  let r = Math.random() * total;
  for (const [sp, w] of pool) { r -= w; if (r <= 0) return sp; }
  return pool[0][0];
};
const isNight = () => { const h = new Date().getHours(); return h < 6 || h >= 19; };

// ---------- GYMS ----------
const GYMS = {
  town2: { id: 1, leader: "Ranger Naledi", type: "Predator", team: () => [mk("wolf", 7), mk("croc", 8), mk("lion", 10)], quote: "Magnificent! The savanna respects you.", perk: "Aquatic teammates can now Swim with you across deep water." },
  town3: { id: 2, leader: "Keeper Mara", type: "Aquatic", team: () => [mk("otter", 15), mk("penguin", 15), mk("hippo", 17)], quote: "You flow like the delta itself.", perk: "" },
  town4: { id: 3, leader: "Dr. Sefu", type: "Venom", team: () => [mk("scorpion", 20), mk("dartfrog", 21), mk("cobra", 22)], quote: "You read every matchup like a field guide.", perk: "Aerial teammates can now Soar you between towns." },
  town5: { id: 4, leader: "Warden Zahra", type: "Burrow", team: () => [mk("rabbit", 26), mk("aardvark", 27), mk("tortoise", 28)], quote: "The dunes remember your footprints.", perk: "" },
  town6: { id: 5, leader: "Mason Bram", type: "Armor", team: () => [mk("boar", 31), mk("pangolin", 32), mk("ibex", 33)], quote: "Stone yields to patience — and to you.", perk: "Strong Armor or Predator teammates can now push boulders." },
  town7: { id: 6, leader: "Glacier Yuki", type: "Swift", team: () => [mk("arcticfox", 36), mk("lynx", 37), mk("cheetah", 38)], quote: "Swift as meltwater! Well run.", perk: "" },
  town8: { id: 7, leader: "Kiln Moyo", type: "Ember", team: () => [mk("vulture", 41), mk("sandcat", 42), mk("monitor", 43)], quote: "Forged, not found. That's what you are.", perk: "" },
  town9: { id: 8, leader: "Nyx", type: "Night", team: () => [mk("galago", 46), mk("manedwolf", 47), mk("jaguar", 48)], quote: "Even the dark bows tonight.", perk: "The Summit Citadel awaits. The Elite Four are watching." },
};

// ---------- TRAINERS ----------
const TRAINERS = {
  "route1:4,4": { name: "Scout Jabu", line: "The tall grass taught me everything!", team: () => [mk("gecko", 5), mk("rabbit_j", 6)], prize: 60 },
  "route1:11,10": { name: "Sprout Bo", line: "My friends and I train every dawn!", team: () => [mk("meerkat", 6), mk("lovebird_j", 6)], prize: 60 },
  "route2:4,4": { name: "Fisher Timo", line: "The fen provides — and defends!", team: () => [mk("beaver", 12), mk("turtle", 13)], prize: 150 },
  "route2:11,10": { name: "Wader Asha", line: "Careful where you step in the reeds.", team: () => [mk("flamingo", 13), mk("croc_j", 14)], prize: 150 },
  "route3:4,4": { name: "Herper Nia", line: "Venom is misunderstood — allow me to demonstrate!", team: () => [mk("dartfrog", 17), mk("python", 18)], prize: 220 },
  "route3:11,10": { name: "Canopy Kato", line: "Up here, patience hunts better than claws.", team: () => [mk("galago", 17), mk("chameleon", 18)], prize: 220 },
  "route4:4,4": { name: "Dune Runner Riya", line: "The sand sings when it's about to win.", team: () => [mk("sandcat", 23), mk("camel", 24)], prize: 300 },
  "route4:11,10": { name: "Nomad Tarek", line: "I've crossed this desert nine times. You?", team: () => [mk("jackal", 23), mk("tortoise", 24)], prize: 300 },
  "route5:4,4": { name: "Warden Lulu", line: "Nothing gets past my armored friends!", team: () => [mk("pangolin", 28), mk("badger", 28)], prize: 380 },
  "route5:11,10": { name: "Herd Guard Obi", line: "The highveld tests hooves and hearts.", team: () => [mk("ibex", 28), mk("boar", 29)], prize: 380 },
  "route6:4,4": { name: "Powder Nell", line: "Cold sharpens everything. Especially me.", team: () => [mk("arcticfox", 33), mk("penguin", 33)], prize: 460 },
  "route6:11,10": { name: "Ridge Sven", line: "The pass decides who climbs. Not you.", team: () => [mk("lynx", 34), mk("seal", 34)], prize: 460 },
  "route7:4,4": { name: "Ash Walker Emb", line: "Everything here has already burned once.", team: () => [mk("vulture", 38), mk("monitor", 38)], prize: 540 },
  "route7:11,10": { name: "Cinder Kip", line: "Hot sand, hotter battles!", team: () => [mk("scorpion", 38), mk("vulture", 39)], prize: 540 },
  "shore:2,5": { name: "Isle Fisher Mko", line: "The glass beach keeps its secrets wet.", team: () => [mk("seal", 39), mk("hippo", 40)], prize: 560 },
  "shore:2,10": { name: "Reef Rana", line: "Swim out there? Beat me first.", team: () => [mk("penguin", 39), mk("croc", 40)], prize: 560 },
  "route8:4,4": { name: "Moth Keeper Lua", line: "The grove hums at night. Listen...", team: () => [mk("galago", 43), mk("owl", 43)], prize: 620 },
  "route8:11,10": { name: "Night Warden Rue", line: "Everything soft here has teeth.", team: () => [mk("manedwolf", 44), mk("jaguar", 44)], prize: 620 },
  "route9:4,4": { name: "Trailmaster Odu", line: "Champions walk past me. The rest walk back.", team: () => [mk("wolf", 48), mk("lion", 48), mk("cheetah", 49)], prize: 800 },
  "route9:11,10": { name: "Gatekeeper Ivo", line: "The Citadel doesn't take appointments.", team: () => [mk("croc", 48), mk("tiger", 49), mk("hyena", 48)], prize: 800 },
  "peak:7,9": { name: "Peak Guide Oru", line: "Only the strong reach the summit shrine!", team: () => [mk("boar", 34), mk("leopard", 34), mk("owl", 35)], prize: 500 },
  "summit:7,9": { name: "Elite Talon", elite: true, line: "The sky judges first. Spread your wings — or fall.", team: () => [mk("kestrel", 49), mk("hornbill", 50), mk("vulture", 50), mk("owl", 51)], prize: 1500 },
  "summit:7,7": { name: "Elite Bulwark", elite: true, line: "Break against me like water on stone.", team: () => [mk("turtle", 51), mk("tortoise", 52), mk("hippo", 52), mk("pangolin", 53)], prize: 1500 },
  "summit:7,5": { name: "Elite Fang", elite: true, line: "Every trail ends in teeth.", team: () => [mk("hyena", 53), mk("wilddog", 53), mk("jaguar", 54), mk("tiger", 55)], prize: 1500 },
  "summit:7,3": { name: "Elite Cinder", elite: true, line: "Venom and flame — the land's oldest medicines.", team: () => [mk("cobra", 54), mk("scorpion", 55), mk("monitor", 55), mk("dartfrog", 56)], prize: 1500 },
};

const RIVAL_TILES = { "route1:7,1": 1, "route3:7,1": 2, "route5:7,1": 3, "route7:7,1": 4, "summit:7,1": 5 };
const COUNTER = { fennec_j: "otter_j", otter_j: "kestrel_j", kestrel_j: "fennec_j" };
const adultOf = (j) => (DEX[j].grows ? DEX[j].grows.to : j);
const rivalTeam = (stage, rival) => {
  const a = adultOf(rival);
  if (stage === 1) return [mk(rival, 6)];
  if (stage === 2) return [mk(a, 18), mk("meerkat", 17)];
  if (stage === 3) return [mk(a, 29), mk("serval", 28), mk("hornbill", 28)];
  if (stage === 4) return [mk(a, 39), mk("wilddog", 38), mk("snowleopard", 39), mk("vulture", 38)];
  return [mk(a, 57), mk("cheetah", 55), mk("tiger", 56), mk("hornbill", 55), mk("croc", 55), mk("lion", 56)];
};
const RIVAL_LINES = {
  1: "🏃 Zuri: \"You got a starter too?! Well, MINE has yours beat — type advantage, look it up! Battle me, ranger!\"",
  2: "🏃 Zuri: \"The jungle's been whispering about you. Whisper THIS back — battle!\"",
  3: "🏃 Zuri: \"Halfway up the world and you're still ahead of me?! Not after this!\"",
  4: "🏃 Zuri: \"Last stop before the grove. I've been saving a NEW team just for you!\"",
};
const LEGEND_LVL = { qilin: 42, thunderbird: 45, phoenix: 48 };
const LEGEND_REQ = { qilin: 5, thunderbird: 6, phoenix: 7 };

const HOUSE_LINES = [
  "\"Young animals are easier to befriend — and they grow up loyal.\"",
  "\"The grass has been dying in perfect rings. That's not drought. That's something old.\"",
  "\"Some animals only come out at night. The dark has its own neighbors.\"",
  "\"Eight arenas, they say. Then the Citadel, where the Elite Four wait.\"",
  "\"A lantern from any trading post will light even the deepest cave.\"",
  "\"They say three guardians sleep behind old seals — and only a proven ranger may wake them.\"",
  "\"Cats rule the cold ridges; dogs run the highveld. Choose your friends by the land.\"",
  "\"The Emberglass Shore glitters east of Cinder Town — if you can swim it.\"",
];
const SIGNS = {
  cave1: "🪧 Scratched into stone: 'Only steady light finds the sleeper's hollow. The jade one dreams where daylight fails — and answers only the five-badge worthy.'",
  ember: "🪧 The tablet glows faintly: 'Kindle the flames as the sun walks — East, then South, then West, then North.'",
};
const LORE = {
  qilin: "🗿 The altar hums beneath your palm. 'The Qilin walks where balance holds. When its sleep grows unquiet, the grass forgets to grow.' Something vast breathes in the dark ahead.",
  thunderbird: "🗿 Wind screams around the altar. 'The Thunderbird carries the storms where they are needed. Chained storms circle, and the sky-drum beats without rain.' Lightning flickers in a cloudless sky.",
  phoenix: "🗿 The altar is warm as a heartbeat. 'The Phoenix burns the old to feed the new. When renewal stalls, the land holds its breath.' Embers drift upward from nothing.",
};
const CALM = {
  qilin: "🌿 The Qilin regards you, then bows its antlered head. Its hooves touch the earth without bending a single blade. As it walks into the dark, you feel the ground exhale. (Qilin: calmed)",
  thunderbird: "⛈️ The Thunderbird spreads wings wider than the shrine and screams once — not in anger, but release. The knotted storms unravel and drift where they're needed. (Thunderbird: calmed)",
  phoenix: "🔥 The Phoenix folds its flames and studies you with ancient eyes. Then it rises — a comet in reverse — and the land's held breath releases in warmth. (Phoenix: calmed)",
};
const BEFRIEND_LEGEND = {
  qilin: "The Qilin steps forward and presses its brow to yours. It chooses to walk beside you — balance, given freely.",
  thunderbird: "The Thunderbird lands, shaking the stone, and lowers a wing. The storm has chosen its rider.",
  phoenix: "The Phoenix settles onto your shoulder, weightless as heat shimmer. Renewal has chosen a companion.",
};
const EPILOGUE = "The Citadel falls silent, then erupts. Zuri laughs and shakes your hand hard enough to hurt. Eight badges, the Elite Four, and the long trail behind you — Champion of the Wildlands. Prof. Acacia is already writing it all down. Somewhere far off, in cave and peak and hollow, three guardians stir — waiting to see what kind of champion you'll be. Thank you for playing, ranger. 🌍";

