// Hand-assigned biomes.
//
// 252 species have habitat sentences that name only a region ("Europe, Asia and
// Africa", "Tasmania", "Warm regions worldwide") and never a place, so no rule
// can classify them. The earlier fallback used Safari Saga's map zones, which
// are a gameplay layout rather than an ecological one - that is how barracuda
// and golden retrievers ended up in "alpine". These are assigned by hand.

// Life stages that the _j/_c/_f/_p filter missed. Not species; they follow
// their adult and should never be assigned a biome of their own.
var NOT_A_SPECIES = [
  "froglet","teneral","cicadanymph","eaglet","swanjuv","leptocephalus","polyp",
  "zoea","megalopa","fawn","yearlingelk","molepup","clownjuv","clownfemale",
  "orangutanflanged","kangaroo_j2"
];

var BIOME_BY_HAND = {
  // --- savanna ---
  jackal:"savanna", badger:"savanna", blackbackjackal:"savanna", genet:"savanna",
  mongoose:"savanna", vulture:"savanna", lovebird:"savanna", caracara:"savanna",
  springbok:"savanna", impala:"savanna", kudu:"savanna", eland:"savanna",
  nyala:"savanna", wildebeest:"savanna", blackbuck:"savanna",
  nakedmolerat:"savanna", molequeen:"savanna", firehawk:"savanna",

  // --- forest ---
  puma:"forest", bobcat:"forest", grayfox:"forest", stoat:"forest", macaque:"forest",
  opossum:"forest", wallaby:"forest", quokka:"forest", tasdevil:"forest",
  bandicoot:"forest", whitetail:"forest", chital:"forest", muntjac:"forest",
  porcupine:"forest", redsquirrel:"forest", chipmunk:"forest", dormouse:"forest",
  ninebandarmadillo:"forest", echidna:"forest", cockatoo:"forest",
  blackcockatoo:"forest", lorikeet:"forest", kakapo:"forest", rosella:"forest",
  greathornedowl:"forest", peacock:"forest", kiwi:"forest", kookaburra:"forest",
  raven:"forest", hawkmoth:"forest", mantis:"forest", stagbeetle:"forest",
  jewelbeetle:"forest", cicada:"forest", komododragon:"forest",
  frilledlizard:"forest", skink:"forest", tuatara:"forest",
  tawnyfrogmouth:"forest", tardigrade:"forest",

  // --- rainforest ---
  babirusa:"rainforest", peccary:"rainforest", duiker:"rainforest",
  agouti:"rainforest", tamandua:"rainforest", bat:"rainforest",
  hyacinthmacaw:"rainforest", eclectus:"rainforest", conure:"rainforest",
  hummingbird:"rainforest", potoo:"rainforest", glasswing:"rainforest",
  birdwing:"rainforest", stickinsect:"rainforest", leafinsect:"rainforest",
  goliathbeetle:"rainforest", leafcutterant:"rainforest", greeniguana:"rainforest",
  basilisk:"rainforest", tegu:"rainforest", boaconstrictor:"rainforest",
  tomatofrog:"rainforest",

  // --- alpine ---
  klipspringer:"alpine", goldeneagle:"alpine", volcanorabbit:"alpine",

  // --- desert ---
  dingo:"desert", degu:"desert", cockatiel:"desert", emu:"desert",
  peacockspider:"desert", gecko:"desert", rattlesnake:"desert", taipan:"desert",
  vermilionflycatcher:"desert",

  // --- wetland ---
  mink:"wetland", amazonriverdolphin:"wetland", gangesdolphin:"wetland",
  baldeagle:"wetland", harrier:"wetland", kingfisher:"wetland", crane:"wetland",
  heron:"wetland", stork:"wetland", spoonbill:"wetland", ibis:"wetland",
  mandarinduck:"wetland", swan:"wetland", dragonfly:"wetland",
  alligator:"wetland", caiman:"wetland", greenanaconda:"wetland",
  newt:"wetland", firebellytoad:"wetland", piedavocet:"wetland",
  neontetra:"wetland", blackskirttetra:"wetland", betta:"wetland",
  guppy:"wetland", platyfish:"wetland", discusfish:"wetland",
  oscarcichlid:"wetland",

  // --- coast ---
  monkseal:"coast", bottlenose:"coast", vaquita:"coast", stellerseagle:"coast",
  puffin:"coast", frigatebird:"coast", bluefootedbooby:"coast",
  marineiguana:"coast", lavalizard:"coast", nicobarpigeon:"coast",
  mimicoctopus:"coast", coconutcrab:"coast", lobster:"coast",

  // --- reef ---
  mantaray:"reef", clownfish:"reef", lionfish:"reef", barracuda:"reef",
  seasnake:"reef", greenseaturtle:"reef", brittlestar:"reef", bobbitworm:"reef",
  royalgramma:"reef", banggaicardinalfish:"reef",

  // --- open ocean ---
  finwhale:"opensea", minke:"opensea", seiwhale:"opensea", spermwhale:"opensea",
  orca:"opensea", melonhead:"opensea", spinnerdolphin:"opensea",
  cuvierbeaked:"opensea", marlin:"opensea", sailfish:"opensea",
  giantsquid:"opensea", leatherback:"opensea",

  // --- polar ---
  lionsmane:"polar",

  // --- farmland & town ---
  hedgehog:"farmland", raccoon:"farmland", groundhog:"farmland", hare:"farmland",
  redtailhawk:"farmland", honeybee:"farmland", bumblebee:"farmland",
  masonbee:"farmland", hoverfly:"farmland", swallowtail:"farmland",
  ladybug:"farmland", firefly:"farmland", jumpingspider:"farmland",
  earthworm:"farmland", housesparrow:"farmland", barnswallow:"farmland",
  commonstarling:"farmland", ibericanworm:"farmland",
  // pets and livestock
  housecat:"farmland", tabbycat:"farmland", calicocat:"farmland", blackcat:"farmland",
  dog:"farmland", puppy:"farmland", hamster:"farmland", gerbil:"farmland",
  fancyrat:"farmland", fancymouse:"farmland", petrabbit:"farmland",
  lopbunny:"farmland", ferretpet:"farmland", canary:"farmland",
  goldfish:"farmland", fancygoldfish:"farmland", koi:"farmland",
  pig:"farmland", potbellypig:"farmland", cow:"farmland", sheep:"farmland",
  goat:"farmland", donkey:"farmland", duck:"farmland", goose:"farmland",
  turkey:"farmland",
  savannahcat:"farmland", bengalcat:"farmland", mainecoon:"farmland",
  siamesecat:"farmland", persiancat:"farmland", sphynxcat:"farmland",
  ragdollcat:"farmland", scottishfold:"farmland", russianblue:"farmland",
  norwegianforest:"farmland", britishshorthair:"farmland", orientalcat:"farmland",
  devonrex:"farmland",
  husky:"farmland", malamute:"farmland", germanshepherd:"farmland",
  labrador:"farmland", bordercollie:"farmland", corgi:"farmland",
  dachshund:"farmland", pug:"farmland", beagle:"farmland", poodle:"farmland",
  greatdane:"farmland", chihuahua:"farmland", shibainu:"farmland",
  greyhound:"farmland", saintbernard:"farmland", dalmatian:"farmland",
  rottweiler:"farmland", bulldog:"farmland", bordeauxmastiff:"farmland",
  akita:"farmland", samoyed:"farmland", bernesemountain:"farmland",
  australianshepherd:"farmland", jackrussell:"farmland", wolfdog:"farmland"
};

// --- Second pass. These were placed by the habitat RULES, not the zone
// fallback, and were still wrong. The rules match a keyword anywhere in the
// sentence, so "mountain gorilla" lands in alpine, "Scottish Highlands" drags
// golden retrievers and highland cattle up a mountain, and any savanna animal
// whose range touches a desert edge becomes a desert animal.
var BIOME_FIX = {
  // caught by "mountain" / "highland" / "cliff"
  gorilla:"rainforest", cloudedleopard:"rainforest", chameleon:"forest",
  panda:"forest", redpanda:"forest", elk:"forest", baboon:"savanna",
  rockdove:"farmland", goldenretriever:"farmland", highlandcow:"farmland",
  guineapig:"farmland", alpaca:"farmland", alpacafarm:"farmland", llama:"farmland",
  coelacanth:"opensea",

  // polar, but only seasonally or not at all
  barnowl:"farmland", osprey:"wetland", peregrine:"alpine", redfox:"farmland",
  wolf:"forest", wolverine:"forest", sealion:"coast", fursealion:"coast",
  albatross:"opensea", bluewhale:"opensea", bartailedgodwit:"coast",

  // desert-adjacent, but these are savanna animals
  africanelephant:"savanna", leopard:"savanna", aardvark:"savanna",
  meerkat:"savanna", ostrich:"savanna", caracal:"savanna",
  villageweaver:"savanna", blackmamba:"savanna", jackrabbit:"desert",

  // cave-adjacent, but not cave animals
  giantcentipede:"rainforest"
};
Object.keys(BIOME_FIX).forEach(function (k) { BIOME_BY_HAND[k] = BIOME_FIX[k]; });

// More life stages that slipped through - "eyas" is a nestling falcon.
["eyas","goldeneyas"].forEach(function (k) { NOT_A_SPECIES.push(k); });

// --- Ayr's redistribution pass, 2026-08-24. Rebalancing what exists before
// adding anything new. Forest was carrying 108 species; the primates in it are
// mostly rainforest animals that had drifted there.
var BIOME_MOVE = {
  // primates -> rainforest
  capuchin:"rainforest", colobus:"rainforest", howler:"rainforest",
  marmoset:"rainforest", uakari:"rainforest", spidermonkey:"rainforest",
  tarsier:"rainforest", loris:"rainforest", commontreeshrew:"rainforest",
  sifaka:"rainforest", ringtaillemur:"rainforest", langur:"rainforest",
  tamarin:"rainforest", proboscis:"rainforest", galago:"rainforest",
  bonobo:"rainforest", chimpanzee:"rainforest",

  // mountains
  panda:"alpine", redpanda:"alpine", lynx:"alpine", philippineeagle:"alpine",

  // savanna
  gerenuk:"savanna", giantmillipede:"savanna", stripedhyena:"savanna",

  // desert
  bobcat:"desert", ninebandarmadillo:"desert", giantarmadillo:"desert"
};
Object.keys(BIOME_MOVE).forEach(function (k) { BIOME_BY_HAND[k] = BIOME_MOVE[k]; });

// Ayr, 2026-08-24: beluga and orca belong in polar.
BIOME_BY_HAND.beluga = "polar";
BIOME_BY_HAND.orca = "polar";

// Ayr, 2026-08-24: three more into polar.
// Southern elephant seals breed on subantarctic islands and feed in Antarctic
// water; the wandering albatross is a Southern Ocean bird and is already the
// animal in the longline story; the blue whale feeds on polar krill.
BIOME_BY_HAND.elephantseal = "polar";
BIOME_BY_HAND.albatross = "polar";
BIOME_BY_HAND.bluewhale = "polar";

// Ayr, 2026-08-24: the puffin is polar. Atlantic puffin colonies are Iceland,
// Norway, Greenland and Newfoundland - subarctic rather than tropical coast.
BIOME_BY_HAND.puffin = "polar";

// --- Ayr, 2026-08-24: coast review. Coast was carrying land animals that
// happened to have "coast" in their habitat sentence, and a set of cold-water
// species that belong in polar.
BIOME_BY_HAND.grizzly       = "forest";      // salmon rivers put it in coast
BIOME_BY_HAND.ocelot        = "rainforest";
BIOME_BY_HAND.brownhyena    = "desert";      // scavenges the Namib shore, but it is an arid animal
BIOME_BY_HAND.fishingcat    = "wetland";     // mangrove and marsh, not open coast
BIOME_BY_HAND.fishingbat    = "rainforest";  // Central American rivers
BIOME_BY_HAND.baskingshark  = "opensea";     // Ayr: open ocean

// cold-water, into polar
BIOME_BY_HAND.walrus        = "polar";
BIOME_BY_HAND.graywhale     = "polar";
BIOME_BY_HAND.rightwhale    = "polar";
BIOME_BY_HAND.stellerseagle = "polar";
BIOME_BY_HAND.fursealion    = "polar";
BIOME_BY_HAND.sealion       = "polar";

// Two more life stages the suffix filter cannot see.
["eaglejuv","sealpup"].forEach(function (k) { NOT_A_SPECIES.push(k); });

// --- Ayr, 2026-08-25: forest and rainforest review.
var FR = {
  // forest -> rainforest
  chevrotain:"rainforest", civet:"rainforest", coati:"rainforest",
  vampirebat:"rainforest", fossa:"rainforest", greaterbop:"rainforest",
  hoatzin:"rainforest", jaguarundi:"rainforest", kingcobra:"rainforest",
  militarymacaw:"rainforest", pygmyhippo:"rainforest", lorikeet:"rainforest",
  rustyspottedcat:"rainforest", tapir:"rainforest", tayra:"rainforest",
  velvetworm:"rainforest", victoriacrowned:"rainforest", fireskink:"rainforest",
  chameleon:"rainforest", komododragon:"rainforest",
  // forest -> savanna
  dikdik:"savanna", dhole:"savanna", chital:"savanna", peacock:"savanna",
  // forest -> mountains
  pudu:"alpine", mara:"alpine", puma:"alpine",
  // rainforest out
  chicken:"farmland",
  ringtaillemur:"desert", sifaka:"desert",          // Ayr: Madagascar spiny forest
  bongo:"savanna", duiker:"savanna", galago:"savanna",
  tiger:"forest", spectacledbear:"alpine"
};
Object.keys(FR).forEach(function (k) { BIOME_BY_HAND[k] = FR[k]; });
NOT_A_SPECIES.push("harpyeyas");

// Ayr, 2026-08-25: rainforest overflow to savanna and desert. The montane
// candidates (quetzal, mountain gorilla, clouded leopard) were declined.
BIOME_BY_HAND.mandrill    = "savanna";
BIOME_BY_HAND.peccary     = "savanna";
BIOME_BY_HAND.agouti      = "savanna";
BIOME_BY_HAND.linsang     = "savanna";
BIOME_BY_HAND.bushdog     = "savanna";
BIOME_BY_HAND.tegu        = "desert";
BIOME_BY_HAND.greeniguana = "desert";

// Ayr, 2026-08-25. The hometown includes a small wooded patch, so town animals
// that are not livestock live there rather than needing a separate biome.
BIOME_BY_HAND.coyote       = "desert";
BIOME_BY_HAND.ibericanworm = "desert";
BIOME_BY_HAND.beaver       = "forest";
BIOME_BY_HAND.opossum      = "farmland";
// raven and the deer (white-tailed, elk, moose, muntjac) are already in forest.

// Ayr, 2026-08-25: DEEP SEA becomes the twelfth biome. These ten move out of
// open ocean - they are all animals of the deep, not the surface.
["anglerfish","coelacanth","frilledshark","giantsquid","goblinshark",
 "spidercrab","oarfish","pacifichagfish","pompeiiworm","scalyfootsnail"
].forEach(function (k) { BIOME_BY_HAND[k] = "deepsea"; });

// sealjuv is a life stage the suffix filter cannot see.
NOT_A_SPECIES.push("sealjuv");

// These three are deep DIVERS, not deep-sea animals - the habitat rule caught
// them on the words "deep water". They live at the surface.
BIOME_BY_HAND.falsekiller = "opensea";
BIOME_BY_HAND.pilotwhale  = "opensea";
BIOME_BY_HAND.rissos      = "opensea";
