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
  honeyguide:"savanna",

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
  bumblebeebat:"forest", giantsquirrel:"forest",

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
  kangaroorat:"desert", namibbeetle:"desert", egyptianvulture:"desert",

  // --- wetland ---
  mink:"wetland", amazonriverdolphin:"wetland", gangesdolphin:"wetland",
  baldeagle:"wetland", harrier:"wetland", kingfisher:"wetland", crane:"wetland",
  heron:"wetland", stork:"wetland", spoonbill:"wetland", ibis:"wetland",
  mandarinduck:"wetland", swan:"wetland", dragonfly:"wetland",
  alligator:"wetland", caiman:"wetland", greenanaconda:"wetland",
  newt:"wetland", firebellytoad:"wetland", piedavocet:"wetland",
  neontetra:"wetland", blackskirttetra:"wetland", betta:"wetland",
  guppy:"wetland", platyfish:"wetland", discusfish:"wetland",
  oscarcichlid:"wetland", northernpike:"wetland", electriceel:"wetland",

  // --- coast ---
  monkseal:"coast", bottlenose:"coast", vaquita:"coast", stellerseagle:"coast",
  puffin:"coast", frigatebird:"coast", bluefootedbooby:"coast",
  marineiguana:"coast", lavalizard:"coast", nicobarpigeon:"coast",
  mimicoctopus:"coast", coconutcrab:"coast", lobster:"coast",
  herringgull:"coast", bluemussel:"coast", acornbarnacle:"coast",
  greenanemone:"coast", aldabratortoise:"coast",

  // --- reef ---
  mantaray:"reef", clownfish:"reef", lionfish:"reef", barracuda:"reef",
  seasnake:"reef", greenseaturtle:"reef", brittlestar:"reef", bobbitworm:"reef",
  royalgramma:"reef", banggaicardinalfish:"reef",
  staghorncoral:"reef", braincoral:"reef", giantclam:"reef",
  pistolshrimp:"reef", humpheadwrasse:"reef",

  // --- open ocean ---
  finwhale:"opensea", minke:"opensea", seiwhale:"opensea", spermwhale:"opensea",
  orca:"opensea", melonhead:"opensea", spinnerdolphin:"opensea",
  cuvierbeaked:"opensea", marlin:"opensea", sailfish:"opensea",
  giantsquid:"opensea", leatherback:"opensea",
  bluefintuna:"opensea", chubmackerel:"opensea", atlanticherring:"opensea",
  mahimahi:"opensea", opah:"opensea", oceanicwhitetip:"opensea",
  blueshark:"opensea", remora:"opensea", sargassumfrogfish:"opensea",
  humboldtsquid:"opensea", manowar:"opensea", northerngannet:"opensea",
  sootyshearwater:"opensea", stormpetrel:"opensea", tropicbird:"opensea",
  loggerhead:"opensea", oliveridley:"opensea",

  // --- polar ---
  lionsmane:"polar",

  // --- farmland & town ---
  hedgehog:"farmland", raccoon:"farmland", groundhog:"farmland", hare:"farmland",
  redtailhawk:"farmland", honeybee:"farmland", bumblebee:"farmland",
  masonbee:"farmland", hoverfly:"farmland", swallowtail:"farmland",
  ladybug:"farmland", firefly:"farmland", jumpingspider:"farmland",
  earthworm:"farmland", housesparrow:"farmland", barnswallow:"farmland",
  commonstarling:"farmland", ibericanworm:"farmland",
  housemouse:"farmland", brownrat:"farmland", fieldvole:"farmland",
  commontoad:"farmland", grasssnake:"farmland", magpie:"farmland",
  skylark:"farmland", europeanmole:"farmland", europeanbadger:"farmland",
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

// --- THE SIX STILL OWED, 2026-09-02. Promises that predate "The Last Forty-Four"
// --- and did not travel with it. Added to the game data by game.part69.jsx.
BIOME_BY_HAND.littlebluepenguin  = "coast";
BIOME_BY_HAND.plainspocketgopher = "farmland";
BIOME_BY_HAND.gemsbok            = "savanna";
BIOME_BY_HAND.mexicanredknee     = "desert";
BIOME_BY_HAND.iberianlynx        = "forest";
BIOME_BY_HAND.woodfrog           = "forest";

// --- THE DARK, 2026-09-02. The 43 deep-sea species, added by game.part70.jsx.
// --- Their habitat text says "deep", which the rules would mostly get right on
// --- their own - but "hydrothermal vents of the Indian Ocean ridges" and "the
// --- continental slope off Japan" would not, so all 43 are placed by hand.
BIOME_BY_HAND.gulpereel                = "deepsea";
BIOME_BY_HAND.commonfangtooth          = "deepsea";
BIOME_BY_HAND.viperfish                = "deepsea";
BIOME_BY_HAND.macropinnabarreleye      = "deepsea";
BIOME_BY_HAND.silverhatchetfish        = "deepsea";
BIOME_BY_HAND.blackdragonfish          = "deepsea";
BIOME_BY_HAND.glacierlanternfish       = "deepsea";
BIOME_BY_HAND.marianasnailfish         = "deepsea";
BIOME_BY_HAND.tripodfish               = "deepsea";
BIOME_BY_HAND.cookiecuttershark        = "deepsea";
BIOME_BY_HAND.blobfish                 = "deepsea";
BIOME_BY_HAND.australiancoffinfish     = "deepsea";
BIOME_BY_HAND.stoplightloosejaw        = "deepsea";
BIOME_BY_HAND.deepsealizardfish        = "deepsea";
BIOME_BY_HAND.bluntnosesixgillshark    = "deepsea";
BIOME_BY_HAND.orangeroughy             = "deepsea";
BIOME_BY_HAND.vampiresquid             = "deepsea";
BIOME_BY_HAND.googlyeyedglasssquid     = "deepsea";
BIOME_BY_HAND.bigfinsquid              = "deepsea";
BIOME_BY_HAND.dumbooctopus             = "deepsea";
BIOME_BY_HAND.giantisopod              = "deepsea";
BIOME_BY_HAND.hoffcrab                 = "deepsea";
BIOME_BY_HAND.giantamphipod            = "deepsea";
BIOME_BY_HAND.eyelessventshrimp        = "deepsea";
BIOME_BY_HAND.gianttubeworm            = "deepsea";
BIOME_BY_HAND.zombieworm               = "deepsea";
BIOME_BY_HAND.munidopsissquatlobster   = "deepsea";
BIOME_BY_HAND.neolepasventbarnacle     = "deepsea";
BIOME_BY_HAND.ventmussel               = "deepsea";
BIOME_BY_HAND.giantsiphonophore        = "deepsea";
BIOME_BY_HAND.alarmjellyfish           = "deepsea";
BIOME_BY_HAND.bloodybellycombjelly     = "deepsea";
BIOME_BY_HAND.deepstaria               = "deepsea";
BIOME_BY_HAND.venussgirdle             = "deepsea";
BIOME_BY_HAND.helmetjellyfish          = "deepsea";
BIOME_BY_HAND.seapig                   = "deepsea";
BIOME_BY_HAND.venusflowerbasket        = "deepsea";
BIOME_BY_HAND.japanesesealily          = "deepsea";
BIOME_BY_HAND.leiopathesblackcoral     = "deepsea";
BIOME_BY_HAND.isidellabamboocoral      = "deepsea";
BIOME_BY_HAND.giantxenophyophore       = "deepsea";
BIOME_BY_HAND.predatorytunicate        = "deepsea";
BIOME_BY_HAND.bathydevius              = "deepsea";

// --- THE FLOE, 2026-09-02. The 25 polar species, added by game.part71.jsx.
BIOME_BY_HAND.adeliepenguin          = "polar";
BIOME_BY_HAND.kingpenguin            = "polar";
BIOME_BY_HAND.gentoopenguin          = "polar";
BIOME_BY_HAND.chinstrappenguin       = "polar";
BIOME_BY_HAND.beardedseal            = "polar";
BIOME_BY_HAND.hoodedseal             = "polar";
BIOME_BY_HAND.ringedseal             = "polar";
BIOME_BY_HAND.arctictern             = "polar";
BIOME_BY_HAND.snowpetrel             = "polar";
BIOME_BY_HAND.southpolarskua         = "polar";
BIOME_BY_HAND.littleauk              = "polar";
BIOME_BY_HAND.longtailedduck         = "polar";
BIOME_BY_HAND.ivorygull              = "polar";
BIOME_BY_HAND.rossgull               = "polar";
BIOME_BY_HAND.rockptarmigan          = "polar";
BIOME_BY_HAND.arcticwolf             = "polar";
BIOME_BY_HAND.collaredlemming        = "polar";
BIOME_BY_HAND.colossalsquid          = "polar";
BIOME_BY_HAND.antarcticicefish       = "polar";
BIOME_BY_HAND.antarctictoothfish     = "polar";
BIOME_BY_HAND.antarcticseaspider     = "polar";
BIOME_BY_HAND.arcticcod              = "polar";
BIOME_BY_HAND.capelin                = "polar";
BIOME_BY_HAND.arcticchar             = "polar";
BIOME_BY_HAND.greenlandhalibut       = "polar";

// --- THE DIVIDE, 2026-09-02. The 16 mountain species, added by game.part72.jsx.
BIOME_BY_HAND.himalayanjumpingspider   = "alpine";
BIOME_BY_HAND.barheadedgoose           = "alpine";
BIOME_BY_HAND.alpinechough             = "alpine";
BIOME_BY_HAND.lammergeier              = "alpine";
BIOME_BY_HAND.wallcreeper              = "alpine";
BIOME_BY_HAND.himalayanmonal           = "alpine";
BIOME_BY_HAND.alpinesalamander         = "alpine";
BIOME_BY_HAND.apollobutterfly          = "alpine";
BIOME_BY_HAND.whiterumpedvulture       = "alpine";
BIOME_BY_HAND.woollyflyingsquirrel     = "alpine";
BIOME_BY_HAND.rockhyrax                = "alpine";
BIOME_BY_HAND.argali                   = "alpine";
BIOME_BY_HAND.alpinechamois            = "alpine";
BIOME_BY_HAND.mountaingoat             = "alpine";
BIOME_BY_HAND.kiang                    = "alpine";
BIOME_BY_HAND.tibetanantelope          = "alpine";
