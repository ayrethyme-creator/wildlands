// ---------- Part 79: THE WORLD MAKES A SOUND ----------
// Ayr, 2026-09-03: "it still feels like something is missing."
//
// It did, and the answer was in the ear rather than the eye. The game had just
// been given sparkles, colour, light and a drawn cast, and it had SIX music
// tracks for 133 maps across 26 zones, twenty sound effects of which not one is
// an animal, and NO AMBIENT SOUND AT ALL. Every route in the game - the Namib,
// the Antarctic shelf, the canopy walk, the abyss - played the same tune over
// the same silence.
//
// Two things here, both built on part1's synth so there are still no audio
// files to download:
//
//   1. A quiet bed per zone. Wind on the pass, water at the shore, insects
//      after dark, the hum of deep water.
//   2. A voice for the animal you just met, instead of one generic beep for a
//      bumblebee bat and a blue whale alike.
//
// WHY THERE IS A NOISE GENERATOR HERE. part1's tone() is one oscillator, which
// can sing but cannot hiss - and wind, water and rain are all hiss. So this adds
// a filtered noise source. It is the only new piece of audio machinery, and it
// is what makes the difference between an ambience and a tune playing quietly.

// ---- noise, filtered ----
// One looping buffer of white noise, run through a bandpass. Moving the filter
// is what turns the same buffer into wind, surf or rain, so a single source
// covers every zone and there is only ever one of them alive.
const AMB = { src: null, filt: null, gain: null, lfo: null, lfoGain: null, timer: null, key: null };

const ambNoiseStart = () => {
  const c = (typeof ac === "function") ? ac() : null;
  if (!c || AMB.src) return null;
  const secs = 2;
  const buf = c.createBuffer(1, c.sampleRate * secs, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buf; src.loop = true;
  const filt = c.createBiquadFilter();
  filt.type = "bandpass"; filt.frequency.value = 500; filt.Q.value = 0.7;
  const gain = c.createGain(); gain.gain.value = 0;
  // A slow swell, so wind breathes instead of sitting there as a flat hiss.
  const lfo = c.createOscillator(); lfo.frequency.value = 0.08;
  const lfoGain = c.createGain(); lfoGain.gain.value = 0;
  lfo.connect(lfoGain); lfoGain.connect(gain.gain);
  src.connect(filt); filt.connect(gain); gain.connect(c.destination);
  src.start(); lfo.start();
  Object.assign(AMB, { src, filt, gain, lfo, lfoGain });
  return AMB;
};

const ambNoiseStop = () => {
  try { AMB.src && AMB.src.stop(); } catch (e) {}
  try { AMB.lfo && AMB.lfo.stop(); } catch (e) {}
  Object.assign(AMB, { src: null, filt: null, gain: null, lfo: null, lfoGain: null });
};

// ---- what each place sounds like ----
// `bed` is the noise: centre frequency, how wide, how loud, how much it swells.
// `calls` are the occasional discrete sounds - a chirp, a lap, a drip - given as
// [minGapSeconds, maxGapSeconds, fn].
//
// Volumes are deliberately low. This has to sit under the music without
// competing with it; if you can pick the ambience out as a separate thing, it is
// too loud.
const chirp = (f, dur, type) => { if (typeof tone === "function") tone(f, 0, dur, { type: type || "sine", vol: 0.035 }); };
const twoNote = (a, b) => { chirp(a, 0.06); if (typeof tone === "function") tone(b, 0.07, 0.08, { type: "sine", vol: 0.03 }); };

const AMBIENCE = {
  //            centre   Q    vol    swell   calls
  savanna:  { bed: [420, 1.1, 0.020, 0.010], day: () => twoNote(1900, 2300), night: () => chirp(2600, 0.05, "triangle") },
  savannaz: { bed: [420, 1.1, 0.022, 0.012], day: () => twoNote(1800, 2200), night: () => chirp(2500, 0.05, "triangle") },
  highveld: { bed: [500, 1.0, 0.022, 0.014], day: () => twoNote(2000, 1600), night: () => chirp(2400, 0.05, "triangle") },
  desert:   { bed: [300, 0.8, 0.024, 0.018], day: null,                      night: () => chirp(2800, 0.04, "triangle") },
  outbackz: { bed: [320, 0.8, 0.024, 0.018], day: null,                      night: () => chirp(2700, 0.04, "triangle") },

  // Water is a wider, lower band than wind, and it moves more slowly.
  coast:    { bed: [260, 0.6, 0.030, 0.022], day: null, night: null },
  kelpz:    { bed: [240, 0.6, 0.030, 0.022], day: null, night: null },
  reefz:    { bed: [280, 0.7, 0.026, 0.016], day: () => chirp(3200, 0.03), night: () => chirp(1400, 0.05) },
  oceanz:   { bed: [220, 0.5, 0.032, 0.024], day: null, night: null },
  wetland:  { bed: [340, 0.9, 0.022, 0.012], day: () => chirp(1500, 0.05), night: () => twoNote(700, 620) },

  // Forest: leaves rather than open wind, so higher and quieter, with birds by
  // day and owls after dark.
  grove:    { bed: [700, 1.4, 0.018, 0.010], day: () => twoNote(2400, 2900), night: () => twoNote(420, 360) },
  jungle:   { bed: [800, 1.5, 0.020, 0.010], day: () => twoNote(2600, 3100), night: () => chirp(900, 0.07, "triangle") },
  canopyz:  { bed: [820, 1.5, 0.020, 0.010], day: () => twoNote(2700, 3200), night: () => chirp(950, 0.07, "triangle") },
  hopez:    { bed: [700, 1.4, 0.018, 0.010], day: () => twoNote(2300, 2800), night: () => chirp(2500, 0.05, "triangle") },
  hearth:   { bed: [600, 1.3, 0.016, 0.008], day: () => twoNote(2200, 2600), night: () => chirp(2400, 0.05, "triangle") },
  arena:    { bed: [600, 1.3, 0.014, 0.008], day: () => twoNote(2100, 2500), night: () => chirp(2300, 0.05, "triangle") },

  // High and cold: thin, hissy, and nothing living calling.
  alpine:   { bed: [900, 0.7, 0.026, 0.020], day: null, night: null },
  summit:   { bed: [1000, 0.6, 0.028, 0.022], day: null, night: null },
  tundraz:  { bed: [850, 0.7, 0.026, 0.020], day: null, night: null },
  taigaz:   { bed: [760, 0.9, 0.022, 0.014], day: null, night: null },
  polarz:   { bed: [880, 0.7, 0.026, 0.020], day: null, night: null },

  volcanic: { bed: [180, 0.5, 0.030, 0.014], day: () => chirp(120, 0.16, "sawtooth"), night: () => chirp(120, 0.16, "sawtooth") },
  cavezone: { bed: [200, 1.8, 0.020, 0.006], day: () => chirp(1200, 0.05, "sine"), night: () => chirp(1200, 0.05, "sine") },
  fossil:   { bed: [380, 0.9, 0.020, 0.014], day: null, night: null },

  // No wind a kilometre down. What is left is pressure, and something distant.
  abyssz:   { bed: [90, 2.4, 0.026, 0.006], day: () => chirp(180, 0.5, "sine"), night: () => chirp(180, 0.5, "sine") },
  // The rifts should not sound like anywhere.
  rift:     { bed: [1400, 3.0, 0.016, 0.010], day: () => chirp(1750, 0.22, "sine"), night: () => chirp(1750, 0.22, "sine") },
  // The Vigil gets a bed and NO calls, for the same reason it gets no sparkles.
  vigilz:   { bed: [260, 1.2, 0.012, 0.004], day: null, night: null },
};

const stopAmbience = () => {
  if (AMB.timer) { clearTimeout(AMB.timer); AMB.timer = null; }
  if (AMB.gain) { try { AMB.gain.gain.value = 0; } catch (e) {} }
  ambNoiseStop();
  AMB.key = null;
};

const playAmbience = (zone, phase) => {
  const spec = AMBIENCE[zone];
  const key = zone + "|" + phase;
  if (!spec || typeof SOUND_ON === "undefined" || !SOUND_ON) { stopAmbience(); return; }
  if (AMB.key === key && AMB.src) return;         // already running this one
  stopAmbience();
  if (!ambNoiseStart()) return;
  AMB.key = key;
  const [freq, q, vol, swell] = spec.bed;
  try {
    AMB.filt.frequency.value = freq;
    AMB.filt.Q.value = q;
    // Night is quieter and a little lower - the same lift the ambient particles
    // get after dark, in the other direction.
    const night = phase === "night";
    AMB.gain.gain.value = vol * (night ? 0.8 : 1);
    AMB.lfoGain.gain.value = swell;
  } catch (e) {}

  const call = (phase === "night") ? spec.night : spec.day;
  if (!call) return;
  const tick = () => {
    if (typeof SOUND_ON === "undefined" || !SOUND_ON) { stopAmbience(); return; }
    try { call(); } catch (e) {}
    AMB.timer = setTimeout(tick, 3500 + Math.random() * 7000);
  };
  AMB.timer = setTimeout(tick, 1500 + Math.random() * 4000);
};

// ---- the animal you just met ----
// Not 1183 calls. A short one per KIND, chosen from the types the DEX already
// carries plus the handful of cases where the type is silent about what the
// animal actually sounds like. A whale and a firefly should not share a beep.
const VOICE = {
  bird:   () => { tone(2100, 0, 0.05, { type: "sine", vol: 0.07 }); tone(2650, 0.06, 0.07, { type: "sine", vol: 0.06 }); },
  raptor: () => { tone(1800, 0, 0.16, { slide: 2400, type: "sine", vol: 0.07 }); },
  cat:    () => { tone(300, 0, 0.26, { slide: 150, type: "sawtooth", vol: 0.075 }); },
  dog:    () => { tone(420, 0, 0.10, { slide: 260, type: "square", vol: 0.07 }); tone(380, 0.13, 0.12, { slide: 220, type: "square", vol: 0.06 }); },
  whale:  () => { tone(260, 0, 0.75, { slide: 130, type: "sine", vol: 0.075 }); },
  dolphin:() => { tone(2400, 0, 0.09, { slide: 3400, type: "sine", vol: 0.06 }); tone(3000, 0.1, 0.09, { slide: 2000, type: "sine", vol: 0.05 }); },
  fish:   () => { tone(700, 0, 0.06, { type: "sine", vol: 0.045 }); },
  frog:   () => { tone(240, 0, 0.09, { type: "square", vol: 0.07 }); tone(210, 0.11, 0.11, { type: "square", vol: 0.06 }); },
  snake:  () => { tone(1500, 0, 0.34, { slide: 900, type: "sawtooth", vol: 0.045 }); },
  insect: () => { tone(3000, 0, 0.04, { type: "square", vol: 0.05 }); tone(3000, 0.06, 0.04, { type: "square", vol: 0.05 }); tone(3000, 0.12, 0.04, { type: "square", vol: 0.045 }); },
  big:    () => { tone(120, 0, 0.5, { slide: 80, type: "sawtooth", vol: 0.085 }); },
  small:  () => { tone(1700, 0, 0.05, { type: "square", vol: 0.055 }); tone(2000, 0.06, 0.05, { type: "square", vol: 0.05 }); },
  myth:   () => { tone(600, 0, 0.3, { slide: 1200, type: "sine", vol: 0.07 }); tone(900, 0.16, 0.3, { slide: 1500, type: "sine", vol: 0.05 }); },
  fossil: () => { tone(90, 0, 0.6, { slide: 60, type: "sawtooth", vol: 0.08 }); },
};

// Name fragments first, because a type cannot tell a whale from a shark - both
// are Aquatic - and the whole point is that the animal you met is the one you
// hear.
//
// EVERY FRAGMENT IS WORD-ANCHORED, and that is not tidiness. The first draft
// used bare substrings and gave a big-cat growl to the OysterCATcher, the
// SulCATa tortoise and the flyCATcher; a snake hiss to the JerBOA; a fish blip
// to the CroCODile and the p-RAY-ing mantis; and a bark to the PRAIRIE DOG,
// which is a ground squirrel and has a badge in this very game explaining that
// it is not a dog. Same failure as "the only" in the field guide: a match that
// is true of the letters and false of the animal.
//
// Anchoring alone did not finish it. Running all 1183 names through the table and
// READING WHAT EACH RULE CAUGHT turned up six more that no amount of staring at
// the patterns would have shown: the bEAGLE was a bird of prey, the Tawny
// FROGmouth an amphibian, the FISHer a fish rather than a marten, the
// SWALLOWtail a bird rather than a butterfly, the VIPERfish a snake, and the
// LEOPARD Gecko a big cat. Every one of them is a real animal in this game.
// design/tools/fix_voices.py prints that audit; run it before changing anything
// here, and read the lists rather than the counts.
//
// The exceptions are listed FIRST because order decides, and a good many names
// contain a bigger animal than they are.
const VOICE_BY_NAME = [
  [/prairie dog/i, "small"],   // a ground squirrel; the game has a badge saying so
  [/elephant shrew/i, "small"],
  [/elephant bird/i, "bird"],
  [/bulldog bat|flying fox|fruit bat/i, "small"],   // bats, not dogs or foxes
  [/hawk moth|hawkmoth/i, "insect"],
  [/eagle ray/i, "fish"],
  [/lion's mane|lionfish/i, "fish"],
  [/bull shark/i, "fish"],
  [/guinea pig|sea pig/i, "small"],
  [/\bmantis\b/i, "insect"],
  [/frogmouth/i, "bird"],   // a nightjar, not an amphibian
  [/frogfish|viperfish|whale shark/i, "fish"],
  [/swallowtail/i, "insect"],   // a butterfly, not a swallow
  [/leopard gecko/i, "small"],
  [/\bfisher\b/i, "small"],   // a marten; the type fallback made it a cat
  [/oystercatcher/i, "bird"],   // a shorebird; Aquatic made it a fish
  [/crocodile|alligator|\bcaiman\b|gharial|\bcroc\b/i, "big"],   // no reptile voice; a low growl beats a fish blip

  // the general rules
  [/whale|narwhal|beluga|manatee|dugong/i, "whale"],
  [/\bseal\b|seals\b|walrus|sea lion|sea cow|crabeater/i, "whale"],   // no seal voice; the moan is nearer than a squeak
  [/dolphin|porpoise|\borca\b|vaquita/i, "dolphin"],
  [/frog|toad|salamander|newt|axolotl|caecilian|\bolm\b|hellbender|tadpole/i, "frog"],
  [/snake|python|\bboa\b|cobra|viper|mamba|adder|krait|anaconda|taipan|sidewinder|bushmaster/i, "snake"],
  [/\bowl\b|owls\b|owlet|\beagle|\bhawk\b|falcon|\bkite\b|vulture|condor|buzzard|harrier|kestrel|osprey|caracara|goshawk|lammergeier|\bskua\b|\beyas\b/i, "raptor"],
  [/gull|\btern\b|petrel|gannet|albatross|penguin|\bduck\b|goose|\bcrane\b|heron|stork|ibis|parrot|macaw|cockatoo|cockatiel|finch|wren|robin|\btit\b|lark|magpie|raven|\bcrow\b|chough|pigeon|\bdove\b|swan|toucan|hornbill|kiwi|\bemu\b|ostrich|cassowary|flamingo|peafowl|budgerigar|canary|starling|sparrow|swallow|woodpecker|kingfisher|thrush|warbler|bustard|curlew|avocet|godwit|turnstone|spoonbill|shearwater|booby|frigatebird|pelican|shoebill|lorikeet|conure|lovebird|quetzal|potoo|hoatzin|kookaburra|lyrebird|bowerbird|rosella|weaver|honeyeater|honeyguide|ptarmigan|\bauk\b|puffin|grebe|\bloon\b|\brail\b|\bdodo\b|\bmoa\b|huia|chick\b|chicken|\bhen\b/i, "bird"],
  [/\bwolf\b|wolves|wolfdog|\bdog\b|dogs\b|\bfox\b|foxes|jackal|coyote|dhole|dingo|hyena|aardwolf|culpeo|puppy|\bmutt\b|beagle|collie|terrier|retriever|shepherd|poodle|husky|corgi|dachshund|chihuahua|labrador|greyhound|malamute|samoyed|akita|rottweiler|dalmatian|\bpug\b|shiba|pit bull|great dane|saint bernard/i, "dog"],
  [/\bcat\b|cats\b|bobcat|\blion\b|lions\b|lioness|tiger|leopard|\bjaguar\b|\bpuma\b|\blynx\b|caracal|serval|cheetah|ocelot|margay|kodkod|jaguarundi|smilodon|kitten|tabby|siamese|persian|ragdoll|sphynx|\bbengal\b|\bmanx\b|\bfossa\b/i, "cat"],
  [/elephant|rhino|hippo|giraffe|bison|buffalo|moose|\bbear\b|bears\b|\byak\b|camel|mammoth|mastodon|aurochs|\bcow\b|\bbull\b|\box\b|muskox|\bpig\b|\bhorse\b|donkey|okapi|tapir|gorilla|orangutan|\belk\b|\bboar\b|warthog|babirusa|peccary/i, "big"],
  [/shark|\bray\b|rays\b|stingray|fish\b|fishes\b|tuna|\bcod\b|herring|salmon|\beel\b|eels\b|grouper|wrasse|snapper|mackerel|sardine|\bperch\b|trout|\bchar\b|barracuda|marlin|coelacanth|halibut|capelin|guppy|betta|\bkoi\b|tetra|discus|goby|seahorse|lamprey|sawfish|\bopah\b|remora/i, "fish"],
  [/\bbat\b|bats\b|mouse|mice|\brat\b|rats\b|\bvole\b|shrew|lemming|gerbil|hamster|squirrel|chipmunk|marmoset|gopher|jerboa|\bpika\b|marmot|dormouse|rabbit|\bhare\b|bunny|weasel|stoat|ferret|\bmink\b|marten|otter|meerkat|mongoose|lemur|possum|bandicoot|numbat|quoll|wombat|koala|\bdegu\b|capybara|agouti|chinchilla|viscacha|hedgehog|\bmole\b/i, "small"],
];

const voiceFor = (sp) => {
  const d = (typeof DEX !== "undefined") ? DEX[sp] : null;
  if (!d) return null;
  const n = d.n || sp;
  const t = d.t || [];
  if (t.indexOf("Mythic") >= 0) return VOICE.myth;
  if (t.indexOf("Fossil") >= 0) return VOICE.fossil;
  for (const [rx, kind] of VOICE_BY_NAME) if (rx.test(n)) return VOICE[kind];
  if (t.indexOf("Bug") >= 0) return VOICE.insect;
  if (t.indexOf("Aerial") >= 0) return VOICE.bird;
  if (t.indexOf("Aquatic") >= 0) return VOICE.fish;
  if (t.indexOf("Predator") >= 0) return VOICE.cat;
  return VOICE.small;
};

const animalVoice = (sp) => {
  if (typeof SOUND_ON === "undefined" || !SOUND_ON) return;
  const v = voiceFor(sp);
  if (v) { try { v(); } catch (e) {} }
};

// Ambience is the one thing here that cannot be seen, only heard, so there has
// to be some way to ask the running game what it is doing without listening to
// it. Returns the zone|phase currently playing, or null for silence. Same trick
// part36 uses for dayPhase.
globalThis.ambNow = () => AMB.key;

console.log("[part79] the world makes a sound: " + Object.keys(AMBIENCE).length
  + " zones with ambience | " + Object.keys(VOICE).length + " animal voices");
