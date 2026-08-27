# WILDLANDS

## Game Design Document

**Version 12.0 — twelfth pass over the full record, 2026-08-27**
Design owner: Ayr · Working title: *Wildlands* · World: **Terrane**

---

### How to read this

`NEW_DIRECTION.md` is the design **record** — 11,000 lines, append-only, in the order
decisions were actually made. It holds every *why*, including the reversals.

**This document is the design.** Organised by system rather than by date, holding only
what is currently true.

| | |
|---|---|
| **DECIDED** | Ayr has settled it. Build to this |
| **OPEN** | A real question still owed an answer. Collected again at the end |
| **PROPOSED** | Suggested, not ruled on. Not to be built |

**Numbers here are checked by tooling.** Run `uncle-albert.bat` for the data and
`cousin-bob.bat` for the documents.

> **Version 3.0 note.** V1 was consolidated too quickly. V2 fixed the systems it had missed
> — the careers as three separate games, the assessment model, the emotional thesis, the
> mentor, the signature ability, provenance, and how time passes.
>
> **V3 adds the content itself.** V2 described the campaign without listing a single one of
> its 48 quests, described the sandbox in a paragraph when it has a real and unusual core
> mechanic, and did not contain the water ladder, the mythology set or the fossil set at
> all. Sections marked **[v3]** are new in this pass; **[v2]** marks the previous one.

---

# 1. The game in one page

**Wildlands is a game about a life spent learning animals, rather than a game about
collecting them.**

The player lives one character from childhood to old age across six life stages, working
in one of three real wildlife professions. They document 1000 real species, take on 48
quests drawn from documented conservation history, and run a network of twelve wildlife
recovery facilities.

## The three pillars, in Ayr's terms — **[v2]**

Idea 71 corrected an earlier reading that treated catching as the main draw.

| Pillar | What it is | Who it holds |
|---|---|---|
| **Story** | 48 quests on documented conservation history, ending in the real event and the real people | Players who came to learn something and to feel something |
| **Gameplay** | Three careers that are three different games — photograph it, measure it, explain it | Players who came for the doing |
| **Building** | A facility in every biome. Hire, house, name, decide what can be kept and what must go home | Players who never stop |

**Collecting is the connective tissue, not a fourth pillar** — it is what you *do* across
all three. It was the weakest candidate for "main draw" because there are no battles: strip
the fighting out of Pokémon's catching and pure collection is a checklist.

**The signature ability is what replaces the battle** (§7).

## The inversion the game rests on

**Keeping an animal is a failure state wearing the costume of a reward.**

Every resident of a facility is one that could not be sent home. The collection is a record
of the ones that did not make it back — exactly true of real sanctuaries, and the opposite
of how every other collection game works.

## Elevator

> **You will spend fifty hours photographing, identifying and caring for real animals — and
> then the game tells you that the real version of everything you just did is open to you,
> today, and is used by actual researchers.**

## The emotional thesis — **[v2]**

This is the most important idea in the record and it was missing from v1.

> **Ayr:** *"Lots of people think cubs are cute and would love to hold them. Most people
> change their mind when they learn about the harm, but the desire is still there and left
> unresolved most of the time and it sucks."*

**Conservation education is subtractive.** It takes something away — you may not hold the
cub, ride the elephant, swim with the captive dolphin — and offers nothing back. The desire
underneath is not wrong. Wanting to be near an animal is one of the most ordinary human
feelings there is, and education leaves it stranded.

**A game can give the feeling back in a frame where it costs an animal nothing.**

The naive version teaches the opposite lesson — cuddle cubs on demand and you have built
the fantasy the cub-petting industry sells. The way through is that **legitimate contexts
for closeness already exist**, and the game already contains them: hand-rearing a genuine
orphan, veterinary and rehabilitation work, research handling under permit.

**And the full arc beats the wish.** Bottle-feed the orphan, raise it, *let it go*, and see
it alive years later and be recognised. That is what rehabilitators actually describe.

### The sequencing does this for free

The kid pet, the teen animal and the hand-reared orphan all come **before** the player ever
meets a wild-animal restriction. Every one is a context where closeness is unambiguously
fine.

**So by the time the game says "you cannot hold that cub, and here is why", the player has
already been given the feeling several times over, at no cost to any animal.** That is the
reverse of how it goes in life, where people meet the prohibition first and the substitute
never arrives. It requires no new system — only that the life stages stay in the order they
are already in.

**The cub-petting industry is itself a quest.** 350+ captive lion farms in South Africa
holding 8,000–12,000 lions; cubs pulled within days so the female cycles again; petting,
then walking-with-lions, then canned hunting, then the bone trade. Paying "voluntourists"
are told they are rearing orphans for release. They are not. In May 2021 the South African
government formally adopted a recommendation to end it.

---

# 2. Platform, style and production — **DECIDED**

| | |
|---|---|
| **Engine** | **Godot 4.** MIT, free forever, no revenue cap, terms cannot be changed underneath the project |
| **Style** | **HD-2D** — sprites billboarded in lit 3D environments |
| **Assets** | **The ~1000 existing sprites are kept.** The entire reason this is achievable |
| **Audio** | **No voice acting.** Read-aloud for the guide is separate and stays |

**Do not port Safari Saga.** It stays as it is, on `main`, playable and updatable. The new
game starts clean. What transfers: the sprites, the species data, the biome classifier, the
conservation writing. What does not: game logic, map and battle systems, rendering and UI.

### Why not full 3D

**1000 animals in 3D is studio scale.** A 2D sprite runs $20–30; a 3D model starts around
$150 before rigging and animation, and every animal needs several cycles. The sprites are
already done and paid for. This is not taste — it is the difference between a game that can
exist and one that cannot.

### Visual references — **[v2]**

**Cult of the Lamb is the truest comparison**, because the Wildlands sprites are **not
pixel art** — they are clean illustrated creatures. *Don't Starve* is the closest in
subject: outdoors, wildlife, real seasons, hand-drawn creatures in a 3D world. *Octopath
Traveler II* for how day and night change a place. **Cassette Beasts** is the proof a
monster-collecting RPG ships in Godot.

### The camera — **[v2]**

**Scrolling camera-follow over a contiguous world**, replacing Safari Saga's flip-screen
rooms. Flip-screen was never a property of 2D; it was a property of how that game was built.

**Fixed-angle follow by default, free camera in photo mode.** This matters more than it
sounds: a fixed angle means **each animal only ever needs to look right from one
direction**, which is precisely what the existing sprites are. A freely rotating camera
would demand several angles per species — 1000 more sprites at minimum.

And the career difference is then felt **in the camera itself** rather than in a menu: the
world plays on a comfortable follow camera, and when the photographer raises the camera the
view goes free — move, aim, focus, frame.

### The resolution finding

Sprites are **256×256** — fine flat, borderline in a lit 3D scene at 1080p+. The generator
renders at **1024×1024** and a post-process step reduces it, so the ceiling is a setting.
**288 originals survive at 1024**, and **all ~1009 prompts survive** across 37 batch files.

### Animation is the real art cost — **[v2]**

**Every sprite is a single static image.** Fine in Safari Saga where nothing moves; not fine
in a living world where animals graze, startle and flee. 651 species × four cycles is 2,600
animations.

**The proven cheap path is *Cult of the Lamb*'s**: skeletal animation that distorts the 2D
mesh — the sprite is cut into parts, rigged and deformed. No redrawing.

1. **Rig once per body plan, not per species.** One quadruped rig fits deer, lion, fox,
   wolf, badger. **Perhaps 10–15 rigs cover almost the whole roster**
2. Auto-cut each sprite to its body plan's rig; hand-correct the awkward ones
3. **Animate the rigs, not the animals.** One good quadruped walk serves two hundred species
4. Reserve bespoke work for snakes, octopus, jellyfish — anything with no shared body plan

**2,600 animations becomes roughly 15 rigs and 60 cycles**, plus cutting work. A real job,
and a tractable one.

### Juvenile art tiers — **[v2]**

| Tier | Art needed |
|---|---|
| **Distinct young** — metamorphosis, spotted fawns, downy chicks, cubs | **A real sprite.** Perhaps 150–250 species |
| **Smaller adult** — most reptiles, fish, many birds | **Scale the adult sprite.** Free |
| **Never seen young** — deep sea, planktonic, hidden | **Nothing** |

### Sprite props and terrain — **ANSWERED, Ayr's call** — **[v7]**

Some sprites were generated with ground, sticks and leaves baked in. **In a lit 3D scene
that breaks in five separate ways:** billboarding swivels the leaf to follow the camera;
the animal cannot move without sliding the leaf with it; the painted lighting points
somewhere the scene's sun does not; the prop intersects the real 3D ground; and the painted
leaf and the scene's real foliage are two different scales on screen at once.

**But the prop is only wrong for one of its two uses.**

| Use | Prop |
|---|---|
| **Codex / field-guide plate** | **Keep it.** A natural history plate *should* show the animal in context, and the beetle on its leaf is a better codex image than the beetle alone |
| **In-game billboard** | **Removed** |

**So the answer is two assets, not one fixed asset.**

**The affected set is knowable, not a mystery.** The generator chose props by keyword, so
the sprites carrying them are exactly those whose prompts contained *branch*, *perch*,
*leaf* or *burrow* — findable from the generation records rather than by eye.

### The recommendation, which costs nothing today

**Treat the current 1001 as the codex plates** — finished, valuable, and exactly what a
field guide needs — **and treat game sprites as a separate later pass**: higher resolution,
no props, built for animation.

**None of the existing work is wasted or blocked, and the prop question stops being a
problem at all.**

### And the terrain policy while art is being fixed

**Fix the errors. Do not add terrain.**

**Errors are permanent value; terrain is temporary cosmetics.** An anatomically wrong animal
is wrong in every version at every resolution for ever, and that fix is never thrown away.
**Terrain gets thrown away twice** — add it now and it must come off for the game sprite;
strip it now and the codex plate loses the context it wanted.

If a sprite is being regenerated anyway, **turn props off** — free, and it moves that one
toward game-ready. **Do not regenerate in order to change terrain.**

**And the fact that the errors only became visible at larger size is itself a finding.**
256×256 viewed small was hiding them, which argues the game-sprite pass needs higher
resolution regardless.

### Build a one-biome vertical slice early — **[v10]**

**The timeline is about a year, not years**, and the repo supports it: **1,001 sprites landed
across three production days, and the whole of Safari Saga was built in six weeks.**

**Content is not the bottleneck.** The unproven pipelines are **animation** and **3D
environments** — so **build a one-biome vertical slice early to price them.** Everything
else in this document is already costed by work that has actually been done; those two are
not.

### The budget sequence — **[v2]**

**Engine now, because it is free and gates the work. Money later, when there is something
worth funding.** The art already exists — the part most projects never finish. The gaps are
**a technical artist** (rigs, lighting, billboarding — the one role HD-2D genuinely needs),
**a composer**, and **cultural consultation**.

**Music:** AI for temp, a composer for ship. Ordinary practice, not a compromise. Two real
constraints — game music must loop seamlessly and layer in stems across 12 biomes × day/night
× four seasons × six life stages, which AI tools do not produce; and **fully AI-generated
work cannot be copyrighted**, so a signature soundtrack would not be protectable.

---

# 3. The world — **DECIDED**

## Terrane

**An alternate Earth.** Not another planet, not present-day Earth with a hidden continent.
The player is never lectured about it.

**Terrane is not a puzzle needing an in-fiction mechanism.** Every framing tested failed
because it tried to explain the world from inside. **The game openly has an author, and the
author explains it from outside** (§14). It is a place a person built on purpose, and at
the end that person says so.

### How the names were chosen — **[v12]**

**Three existing constraints picked the register before any name was proposed:**

1. **Read-aloud** means every name must be **sayable first try**
2. **The sourced ethos rules out fantasy naming** — no invented syllables
3. **Ayr's own *"On the Brink"* had already set the target** — plain English, concrete,
   slightly grave

**The model is how real English regions are actually named: plain nouns with a definite
article.** The Fens, The Weald, The Downs.

**Two picks worth their reasoning:**

- **The Floe** — the only candidate that is **itself fragile**, and the region's quests are
  about ice going away
- **The Divide** — it **carries an idea**, and the region's quests are about things
  separating

**And one rule the mythology name had to obey:** names implying that myths were *mistakes*
were ruled out, because the design already commits to **not treating living cultures'
beliefs as solved puzzles.** *The Telling* says the stories are told, not that they are
wrong.

### Why it is called Terrane — **[v9]**

**A *terrane* is a fragment of crust with its own separate history, later joined to a larger
mass.** That is literally what this world is: **twelve regions assembled from pieces that
never touched in reality.**

**A real technical word doing honest work** — which is the same standard every other name in
the game is held to.

### The names of the postgame areas mean something too

| Area | Why |
|---|---|
| **The Vigil** | **A vigil is held *for* someone** |
| **The Record** | As in the fossil record. Plain, and it points at the quests' theme of *how anyone knows* |
| **The Kept** | The animals humans made and keep. **Sits deliberately uneasily beside The Vigil** |
| **On the Brink** | **The only region name that describes a condition rather than a place** — which is exactly right, because it is the only region whose animals share a condition rather than a habitat |

### The game is Terrane; the codex is Earth — **[v12]**

**They were never meant to be the same place.** Beat five of every quest already says *what
really happened — the real event, the real place, the real people.* **So Terrane can simply
be a fictional world with a factual appendix**, and no in-fiction mechanism is required.

**Every attempt at one failed**, which is why:

| Framing | Why it fails |
|---|---|
| **Temporal** — a distant past or future | **It makes the conservation history ancient and kills the urgency.** The whole point is that these things happened and are happening |
| **Transformation** — Earth became Terrane | **No honest mechanism.** Tectonics is far too slow, and anything faster is magic in a game that does not do magic |
| **Hidden on Earth** — undiscovered land | **Fails on scale.** Twelve regions including abyssal ocean is not an undiscovered island |
| **A parallel Earth** | The only one that costs nothing — **available if Ayr ever wants an in-fiction answer** |

**And the author's note closed the question entirely**, because it explains the world from
*outside*, which is allowed: the game openly has an author.

### What the player is ever told — **[v7]**

**Nothing. Codex only.**

The game never announces the world. A player just plays in it. Anyone curious enough to open
the geology entries finds **real plate tectonics: terranes are accreted fragments, and our
own continents are assembled from pieces that arrived from elsewhere and stuck.**

**A player who never looks loses nothing. A player who looks learns something true.** That is
how this game treats every other piece of real information, and there is no reason to treat
its own ground differently.

**The recommendation is to do nothing further.** Terrane is a fictional world, the codex is
about the real one, and beat five already tells the player which is which — forty-eight
times.

### The twelve biomes and their names

| Biome | Region |
|---|---|
| Savanna | **The Long Grass** |
| Forest | **The Weald** *(a real English word for wooded country)* |
| Rainforest | **The Canopy** |
| Wetlands | **The Fens** |
| Desert | **The Dry** |
| Coast | **The Strand** |
| Reef | **The Garden** *(reef workers really do call them gardens)* |
| Open ocean | **The Blue** |
| Deep sea | **The Dark** |
| Mountains | **The Divide** |
| Polar | **The Floe** |
| Farmland | **The Furrows** |

## The map is handmade. Only its contents are seeded — **[v4]**

> **Ayr:** *"I don't know if I want a new world map generated every time."*

**The doubt was right, and it overturns the original seeded-world idea.**

**This game is about attachment to a place across a lifetime** — six life stages, returning
to the same biome four times, the beaver pond widening over decades, the raven's descendants
recognising you. **Randomisation fights every one of those.** You cannot return somewhere
that was never the same place. *"Come back to the savanna as an elder"* only lands if it is
**the** savanna — the same ridge, the same waterhole, the same crooked tree that was already
old when you were an apprentice.

Three more reasons: **beloved game worlds are specific** (Hyrule, Pelican Town, Hallownest —
procedural worlds are admired for their systems and almost never loved as geography);
**48 authored quests need somewhere to be**, and placing fixed story into generated terrain
is one of the hardest problems in the field; and **replay value is already solved** by three
careers that are three different games, so generation was solving a problem that no longer
exists.

| Fixed and authored | Seeded per save |
|---|---|
| The world map, and where the twelve regions sit | Which animals are present this run, and how abundant |
| Each region's terrain, coastline and landmarks | Where individuals are on a given day |
| Micro-region *locations* — the waterhole, the gorge | Weather, and how a season runs this year |
| Where the facility goes | Which quest reaches you first |
| The 48 quests and their places | The rarity tier each species is dealt |

**So the ridge is always the ridge. What is standing on it is not.**

**And the pattern is already built.** Safari Saga's `runSeed` already deals each species an
abundance tier per save on a fixed map, so a save stays consistent with itself across
sessions. **This keeps what works rather than replacing it.**

## One home region, eleven field regions — **[v9]**

**A biome is a category, not a place.** Savanna exists in Kenya, Namibia, Brazil and
northern Australia; *"go to the savanna"* is not a destination the way *"go to Nairobi"* is.
**Terrane resolves that by making each biome one named, bounded, walkable region.**

- **Home is The Furrows** — where the player grows up, where the child and teen stages
  happen, and **where they come back between field seasons.** It is also the biome humans
  actually live in
- **Eleven field regions**, one per remaining biome

### Travel is a life event, not a menu

**You travel the way the professions actually do:** field seasons, flights, boats, a posting
that lasts months. That is what makes returning to a place across decades mean something.

### What is inside a region

Each is a **contiguous scrolling area** — not a screen, not a menu — containing:

- **Micro-regions**: a waterhole, a burnt block, a village edge, a gorge
- **The facility**, established during the young adult stage
- **Four quests**, one per adult life stage
- **Guaranteed-encounter sites**: the beaver pond, the moose field
- **Seeded content**: which micro-regions generate where, which animals are present this
  run, the weather, the season

### Biomes are mosaics, not backdrops — **[v2]**

> **Ayr, idea 70:** each biome is **not one open field with rocks and trees**. Every region
> contains smaller areas of **genuinely different terrain** — the rainforest has a mountain
> area and rivers. *"That actually makes it more real and less like Pokémon."*

**This is stronger than "micro-regions as features"** and it resolves a whole class of
argument. Resplendent quetzal, mountain gorilla, clouded leopard and snub-nosed monkey are
cloud-forest animals — **they live in the rainforest's high ground**, not in the mountains
biome. Hoatzin, capybara and giant otter live along **the rainforest's rivers**, not in a
separate wetland. Grizzly bears fish salmon rivers *inside* forest.

**The world can simply contain the distinction**, so the classifier does not have to.

### Day, night and seasons

Real, and a direct benefit of HD-2D — **dynamic lighting gives them rather than requiring
palette swaps to fake them.**

### The thirteenth region and the postgame

| Area | What it holds |
|---|---|
| **On the Brink** | **The thirteenth region, and it is required, not optional.** **Admission is by conservation status, not by story: Critically Endangered or Extinct in the Wild is in, anything else is out.** *(The Arabian oryx is out because it is Vulnerable — not because of its narrative.)* 50 species still alive — critically endangered and extinct-in-the-wild. Unlocks when all twelve biomes are finished, and **completing it is what unlocks the postgame.** The final-boss position, because it is the most important |
| **The Vigil** | 50 species that are gone. **A memorial, not a collection** — and stripped of everything still alive, it finally becomes what it always claimed to be |
| **The Telling** | 100 mythological creatures, one per culture, themed on understanding through stories |
| **The Record** | 50 fossil species across 13 geological periods |
| **The Breeding Centre** | 50 domestic breeds. Endgame unlock, appears in town. **Breeds came out of the species roster** — a breed is a customisation option on Dog and House Cat, which is what a breed is. **Generics stay** (House Cat, Tabby, Calico, Black Cat, Farm Dog, Puppy) and **all wild cats and dogs stay** |

### Two definitions that stop arguments — **[v5]**

**Mountains means alpine, above the treeline.** Forested mountainsides belong to the forest
and rainforest regions. Without this the classifier fights itself over every montane species.

**Caves are a micro-region type, not a biome** — inside forest, mountains, coast and desert.
Ten species was too thin for a facility and an arc, and the reassignment is honest anyway:
**a bat is a forest animal that sleeps in a cave.**

### Every biome must read as a functioning ecosystem — **[v5]**

Not just a headcount. The composition rule is **apex predator, mesopredators, large and
small herbivores, scavengers, invertebrates, birds.**

**Deep sea became the twelfth biome** when ten species moved out of open ocean — both needed
filling, and the deep is where the most interesting unused animals were.

---

# 4. The player — **DECIDED**

## Six life stages

```
child  →  teen  →  young adult  →  adult with skills  →  adult with influence  →  elder
```

**The kid stage is the tutorial. The teen stage is where the career is chosen.** The real
game starts at young adult.

Appearance is customisable at **every** stage — **including gender, offered quietly rather
than announced.** One body shape per age, with details chosen.

### Pacing — **[v2]**

| Stage | Hours | What it is |
|---|---|---|
| **Child** | **~1** | Choose a pet, make the first wild rescue, meet the mentor |
| **Teen** | **~2** | Volunteer, get certified, choose the career. The second animal |
| Young adult | | Apprentice. Working under someone else's permit and name |
| Adult with skills | | Qualified. Your own projects, your own name on them |
| Adult with influence | | Professional. Money, access, power to change policy |
| Elder | | Mentor. Teaching, handing over, the long view |
| **Adult stages** | **~52** | **48 quests at ~45 min each is ~36h, plus ~20h of world, travel, encounters and facilities** |
| | **~55** | **All 48 mandatory** |

**The campaign target moved from ~40 hours to ~50–55** once all 48 quests became mandatory
and were costed at about 45 minutes each. **An earlier table gives 1.5 and 2.5 for the
childhood stages and a ~37-hour total; it is superseded by the figures above.**

**Three hours before the first facility is a real investment, and it is where every
relationship in the game is established.** It should not be skippable — **but it must not
idle.** The no-waiting rule applies hardest here, where the player has the least to do.

### The childhood and teen years, in detail — **[v6]**

**The child stage** establishes every relationship in the game: the pet, the first rescue,
the mentor.

**The teen stage is where responsibility arrives, and it is deliberately harder.**

- **The second animal is harder on purpose.** A parrot, a ferret, a chinchilla, a saltwater
  tank, a goat — **every one is a well-known "I did not realise what I was signing up for"
  animal.** That is the honest lesson and it needs no lecture. **This is where "not all of
  the pet industry is bad" does its real work:** the good version is shown by making the
  responsibility real, not by saying so
- **You volunteer, and you are trusted with almost nothing.** Cleaning, food prep, laundry,
  moving equipment. **Real volunteer work at a real centre is unglamorous, and doing it is
  how you get to stay.** The animals belong to someone else, you know them by number, and
  **you are still not allowed to do the interesting part**
- **You get certified.** Open water, real minimum age 15. **The teen years' one hard-won
  qualification**, and it opens The Garden and The Blue for the stages that follow

### **PROPOSED** — the teen tries all three careers

The three careers already map onto this age. **Suggest the teen years hand the player all
three, one at a time, on the same animals in the same woods — and the career is chosen at
the end, having done each.**

Teenagers genuinely try things and drop them; it sells "three different games" **by
demonstration rather than description**; it makes the choice informed instead of a menu at
the start; and it gives replay an obvious hook. **Ayr's call.**

### Three things the childhood leaves open

- **Does the player name the rescued animal?** The naming rule says numbers for the
  releasable. **A child would not know that rule.** Suggested: the child names it freely,
  and the teen years are where they learn why that was a problem — **a better lesson than
  being told the rule up front**
- **Is the pet still alive later?** A cat lives 15–20 years, so it dies somewhere in the
  adult stages. **Real, and heavy**
- **What happens if the rescued animal does not make it?** A first rescue that fails is also
  real, and it is **the earliest place mortality could enter the game**

### How time passes — **[v2]**

```
within a stage    days pass     seasons turn, day and night cycle, migrations come and go
between stages    years leap    the ladder skips forward several years in one transition
```

**This solves three things at once.** Slow growth becomes visible — a tortoise or a raven
matures across a stage boundary rather than in real time. Seasons stay meaningful without a
decade of play. **And death lands where it should:** you leave a stage, years pass, and the
dog you chose as a child is not there when you come back.

### Animals age and die — **DECIDED**

The heaviest material in the design, and the structure delivers it without being asked to.

### The elder stage is deliberately different

The first five stages are about *acquiring*. The elder stage is about **handing over** —
teaching new guides, giving away permits and facilities, seeing which of your animals'
descendants are still on the ground. **It is where the mentor pays off: you become them**,
and a new young character arrives asking the questions you once asked.

## The mentor — **[v2]**

> **Ayr, idea 25:** *"You meet your mentor when you rescue your first animal from the wild.
> The mentor will follow your career and be the help button."*

Met at the first rescue. Present across the whole life. **Mechanically the help system.**
Thematically, the person you become in the last stage.

## The first rescue — **DECIDED, locked** — **[v2]**

Hand-reared as a baby but partly living wild. Four genuinely different relationships rather
than four variations on one:

| | What it gives the player |
|---|---|
| **Eastern box turtle** | **The one that outlives you.** 30–50+ years, sometimes a century. A home range of a few acres, so it stays in your woods without being kept |
| **Raven** | **The one that knows your face.** Corvids recognise individual people, remember for years, and **teach that recognition to their offspring** |
| **Beaver** | **The one whose work reshapes the place.** Kits stay two years to help raise the next litter, and the pond visibly widens and matures across the life stages |
| **White-tailed deer** | **The one whose daughters are still here.** Does are philopatric — daughters settle beside their mothers, so a matriline builds in the same woods over decades |

Fox, raccoon and squirrel were dropped on the numbers: 3–5, 2–3 and ~6 years in the wild.

**The deer carries a real caveat that may be the strongest teaching beat available.**
Hand-reared deer that lose their fear of people are a serious problem in rehabilitation —
bucks become genuinely dangerous at the rut, and habituated deer often end up destroyed.
*The animal you loved cannot stay tame, and raising it wrong is what makes it dangerous.*

---

# 4b. The opening hour — **DECIDED** — **restored in [v5], expanded**

> **Lost in the v2 rewrite.** V1 had this section; the restructure dropped it. **The first
> hour decides whether anyone plays the rest.**

```
1  TITLE + HOOK SCENE   animal-led, no player character. Music. Questions you want answered
2  CHOOSE THE PET       customisable, detailed, and you name it
3  DESIGN THE CHILD     your own appearance, your name, your gender
4  FIRST SCENE          the player character and the pet meeting, interacting
5  THE CODEX OPENS      your pet's entry, AND the pets you did not choose
6  THE HOUSE            your room, then walk out, learn the interface
```

### Why pet-before-self is the right order

**Almost every game opens by asking who *you* are. This one asks second.**

The player commits to something they care about **before** they are asked who they are, so
the character's identity becomes an answer to a relationship rather than a form to fill in.
It is a statement about what this game is, made in the first ninety seconds, **by the
structure rather than by dialogue.**

### The codex showing the pets you did not choose

**The strongest single detail in the sequence.** It establishes in the first five minutes
that **the codex is not a log of your own experience — it is a reference that already knows
things.** That is exactly what it must be for the next fifty hours, and teaching it here
costs nothing.

It also plants the game's first curiosity: **you can see what you did not take.** The player
learns immediately that this book is bigger than they are.

### Naming the pet, and why it pays off much later

**The player names the pet instantly, without thinking, because that is what you do with a
pet.** Then, far later, releasable animals arrive with numbers and naming becomes a decision
with a consequence.

**The game let the player do the easy thing first and explains it afterwards** — a far
better lesson than a rule stated up front. The rescued wild animal of the same childhood
sits in between, which is where the question first becomes real.

### The hook scene — **OPEN**

Animal-led and music-forward is decided. **Which animal, and what happens, is not.** The
reliable mechanism is **showing something you cannot yet explain, that pays off later.**

| | | Question it generates |
|---|---|---|
| **A — A release** *(recommended)* | Hands opening a crate. An animal going. Someone watching it leave, and not following. **No context at all** | It is **the last beat of the game shown as the first** — the whole thesis before the player can understand it. Thirty hours later they do it themselves and recognise the shot |
| **B — A signature ability** | Something that looks impossible and is real — a margay running head-first down a trunk, a scorpion lighting up under UV | ***"Wait, is that true?"*** — the exact habit the game exists to build. Cheaper, and it sells the collection immediately |
| **C — The fence** | A child's hands on a wire fence, an adult inside working with an animal, and the child not allowed in | ***"How do I get in there?"*** — which is literally the whole career arc. The most thematically precise, the least spectacular |

**Suggested: A, with C as the second scene rather than an alternative.** They are the two
ends of the game and they would rhyme.

**The hook scene is the one place where music does the work rather than supports it** — no
dialogue, no UI, no explanation. Worth treating as a piece to be written first rather than
last.

### Appearance, across the whole life

- **Every life stage presents new appearance choices**, so each stage feels like a beginning
  rather than a stat increase
- **Gender change is an option at every stage** — *not stated loudly, but present.* It sits
  in the same list as hair and clothing, with **no ceremony, no confirmation dialogue, no
  achievement, and no NPC ever remarking on it**
- **The player chooses their name**

**The cost, honestly.** The player character has to exist at six life stages × the appearance
options × every animation state, which multiplies faster than any other art in the game.
**The answer is a layered, modular character** — one body rig per life stage with hair,
clothing and features as swappable layers rather than baked variants. **This has to be
decided before the first character sprite is drawn**, not after.

### The starting town is The Furrows plus the edge of The Weald — **[v5]**

> **Ayr:** *"The animals in The Kept and The Furrows are in the starting town, where you have
> access as a child and teen."*

**The Furrows is not simply one of twelve biomes — it is the first one, and the entire
opening happens inside it.** With The Kept, that is a substantial roster available to a
child: **the childhood years are not a thin prologue.**

**But the starting area must include a slice of The Weald**, because **all four
rescued-animal options live in forest, not farmland.** That matches the opening as
sequenced — *your yard and the woods behind it* — so the child's world is **The Furrows plus
the edge of The Weald.** Worth stating plainly, because **the rescue that starts the whole
game happens in the woods rather than the town.**

**The box turtle still needs creating**, since it is one of the four locked choices.

---

# 5. The three careers — **DECIDED (Option B)** — **[v2]**

**This was the largest omission in v1.**

> **Ayr, idea 50:** *"Each career is more like a different game."* Not different classes.

**Three complete campaigns, one per career, each playing the full arc through all six life
stages.**

> **Settled — v7 flagged this as an open discrepancy and it is not one.** Option B was
> decided at ~40 hours per campaign, but the record then makes the call explicitly:
> **let the campaign land at 50–55 hours rather than 40. The 40-hour figure was a market
> comparison, not a requirement**, and the market's own examples run right through it —
> Witcher 3 at ~52, Stardew at ~52, Fire Emblem: Three Houses at 35–80 per route.
>
> **So: ~50–55 hours per career, and Ayr has already said 120+ across three is the goal
> rather than the fear.**

The earlier recommendation was one campaign with guest chapters, on the assumption that the
split-perspective theme was the point and 120 hours was too much to ask. **Ayr's answer:
the theme is a bonus, not the goal, and 120 hours is fine if it is three different games
rather than one story told three times.**

### What that costs, and what it does not

| Shared across all three | Built three times |
|---|---|
| The world, terrain and the handmade map | The core encounter loop |
| All species, art and field-guide text | The "how do you reach caught" mechanic |
| The twelve biomes and their terrain | The interface for that loop |
| The conservation stories and their real history | Career-specific tools and progression |
| The NPCs, facilities and life stages | How quests are approached and resolved |

**The expensive part moves from three times the story to three times the systems** — a real
cost, but more tractable, because systems are reusable and generative where bespoke
narrative is not.

**It also dissolves the repetition problem** that this structure usually has. That criticism
applies when three characters walk the same ground doing the same verb with different stats.
**It does not apply when the verb itself changes.**

### The asymmetry falls out for free

**Some careers reach some animals more easily**, without anyone hand-tuning it:

- A **cave bat** is straightforward for a **researcher** with a camera trap, and
  near-impossible for a **guide** who cannot take clients into a cave at 3am
- A **whale** is bread and butter for a **guide** with a boat, and a permits-and-tagging
  ordeal for a **researcher**
- A **shy nocturnal cat** may only ever be photographed, never handled

### The real verbs

**Reference the real world, not other games** (idea 53). Pokémon Snap is shorthand for how
the photographer *feels*, not a model to copy.

| | The loop | "Caught" means |
|---|---|---|
| **Photographer** | **Observational.** Scout, read light and wind, position, and work the moment | **A publishable frame** — sharp, well lit, ideally showing *behaviour* rather than a portrait |
| **Researcher** | **Systematic.** Design a survey, run transects, place camera traps, identify individuals, and **return** until a picture accumulates | **A completed record.** Identified, re-sighted, placed in a population — not a single encounter |
| **Tour guide** | **Performative.** Find it reliably, on schedule, with people watching and safe | A successful outing — found, shown, explained, everyone safe |

### The ethics are already game mechanics

Nothing needs inventing to make the careers feel different.

- **Photographer.** *"The welfare of the subject is more important than the photograph."*
  Baiting teaches animals to associate people with food and gets them killed. Photographing
  at nests and dens causes abandonment. Professional standards require disclosing whether an
  image was **Wild, Captive, Controlled, Baited or Lured** — **an existing real-world
  honesty system that can drive scoring directly.**
- **Researcher.** Permits and ethics review before anything begins. Even observation
  disturbs — a trail cut to reach a site is itself an impact. Scat degrades fast, so genetic
  work needs large sample numbers: **a natural grind loop that is true to life.**
- **Tour guide.** Client management and safety, which no other career has. The **guide radio
  network** — real guides share sightings constantly.

### Encounters are driven, never waited out — **[v4]**

> **Ayr:** *"Waiting 20 min for 1 animal that is not driven by story is not going to
> happen."*

**This corrects an assumption that keeps creeping back in**, including into earlier drafts
of this document. Real fieldcraft does involve sitting still for hours. **A game cannot
spend the player's actual time that way.**

**Ruled out:** idle waiting as a mechanic · rarity expressed as time spent standing still ·
any encounter whose interest is *"eventually the animal appears."*

**What the tension comes from instead — something happening, not time passing:**

- **A story reason to be there.** You are not photographing a fox, you are proving the
  lights work, and the fox is the evidence
- **Reading and acting.** Tracks, wind, alarm calls, light, the guide radio. **Fieldcraft as
  a set of decisions, not a wait**
- **A closing window.** The light is going, the tide is turning, the clients leave at four.
  **Pressure rather than duration**
- **Something to do while positioned.** The researcher checks traps, the guide keeps clients
  interested, the photographer works the light

**The real professions are patient in elapsed time and busy in attention. The game keeps the
second and compresses the first.**

### The verb is constant; the biome changes the tools

**3 careers × 12 biomes = 36 distinct-feeling situations out of three designed loops.**

The photographer always photographs — but in open savanna the problem is *distance*, in
rainforest *darkness and cover*, underwater *breath and buoyancy*. The researcher always
turns observation into data — but savanna allows **individual identification by markings**
(lions by whisker spots, zebras by stripes), rainforest forces camera traps and calls, and
the deep sea allows almost nothing.

---

# 6. Advancement and assessment — **DECIDED** — **[v2]**

Every one of the three professions advances the same way in life: **accumulate qualifying
experience, then pass an assessment.** FGASA does this literally — log the days, then be
evaluated.

```
1  logged fieldwork      in your career's own currency
2  an assessment         which you have to actually pass
```

**The second gate makes the learning mechanically required** rather than optional, which is
the whole point of the game.

## The assessment is not a quiz — it is the job

Ayr liked practice quizzes and hesitated about official ones. **The hesitation was correct.**
A quiz that gates progression reads as homework, walls players who freeze at tests, and turns
curiosity into an exam condition.

| Career | Real assessment | In game |
|---|---|---|
| **Photographer** | **Portfolio review** | Submit your best work. Judged on the picture, on **coverage** (species, behaviours, life stages), and on **ethics** — was it baited? a nest? captive and declared? **No questions asked at all** |
| **Researcher** | **Defence** | An examiner presses your findings and you answer **from data you actually collected** |
| **Tour guide** | **Practical assessment** | Take an assessor out. They watch you find animals, read conditions, explain well, and keep people safe |

**None is a quiz. All three are things the player was already doing — the assessment is
simply the day it counts.**

### Where the quizzes live

**Always available in the guide, optional, drawn only from what the player has genuinely
seen. Never a gate, never timed, no failure state.** But they matter: practising unlocks
better options in the researcher's defence, raises what the photographer's portfolio review
notices, and gives the guide better things to say. **The player who skips every quiz simply
finds the assessments harder, rather than being locked out.**

### All 48 are mandatory — the threshold was withdrawn — **[v8]**

**An earlier design let the player log enough qualifying work and choose where, so a
playthrough might need only 15–20 of the 48. That was withdrawn**, and this document was
still teaching it.

**The threshold was solving a problem that no longer exists.** It was proposed when the
quest count looked like it might run to the high dozens per stage. Once it settled at **one
per biome per adult stage — twelve per age, 48 total** — the pressure went away. **And it
duplicated something already decided:** replay was the other argument for it, and three
careers that are three different games already provide replay, so different quest routes
were solving a solved problem **at the cost of players never seeing content that exists.**

### Why mandatory is actually better here

1. **The stories are the point of the game.** Letting a player skip them is letting them
   skip the reason it exists
2. **Nothing authored goes unseen.** 48 hand-researched quests is a great deal of work to
   leave optional
3. **Returning to a place across a life is the whole emotional structure.** Visiting the
   savanna four times is not repetition — **it is the point.** You arrive as an apprentice
   keeping lions off cattle and come back decades later as an elder to change the law. The
   seasons have turned, your standing has changed, the animals you knew have died, and their
   descendants are still there. **A threshold would let players opt out of exactly the thing
   the life-stage structure exists to deliver**

### What it changes

- **Advancement simplifies.** A stage ends when its **twelve quests are done** and the
  assessment is passed. **No threshold arithmetic**
- **The four quests in a biome must be genuinely different from one another**, since
  everyone plays all four. **No filler**
- **The writing cost is now fixed and known: 48 quests, all shipped, all played.** The
  single largest content commitment in the project

### **OPEN** — can the player fail to advance?

Real assessments can be failed. Middle path: you can retake, but a failure **costs in-game
time** — which, now that animals are ageing, is a real price rather than an inconvenience.

---

# 7. Encounters and collecting — **DECIDED**

**The encounter mechanic is deliberately not designed yet.** What the rest of the design
needs is the *contract*, and that is settled.

## What every encounter guarantees

```
1  All three careers START and END an encounter identically
     -> they differ only in the middle

2  The animal is added to the guide
     -> and that page is shown IMMEDIATELY, so it gets read

3  A number is assigned automatically
     -> the player is told the facility now knows about this animal

4  An entry appears in the facility's list
     -> which shows only species that have been caught
```

**Everything above this attaches to the output, not to the mechanic.**

The guide page appears immediately because **that is the instant curiosity is highest** — it
is exactly when a nature documentary puts up its caption. Two constraints so it survives
being done 700 times: **dismissible immediately**, and **shown once**.

## The signature ability — **[v2]**

> **Ayr, idea 72**, after watching a video of a genet climbing down a tree head first.

Interacting with an individual animal gives a **special feature button** that shows off a
trait unique to that species — bioluminescence, non-retractable claws, head-first descent.

**This is what replaces the battle.** Pokémon's catching is compelling because the animal
then *does* something. The signature ability is the thing a documented animal genuinely does
— and unlike a battle stat **it is not invented, so it costs the game none of its honesty.**

**Collecting becomes a real draw again, without a single battle.**

### Most signature abilities are not animations — **[v4]**

An early estimate assumed every signature needed a bespoke animation and produced a
frightening number. **It was wrong.** Classifying real field-guide entries by what the button
would actually have to render:

| Mechanism | What it costs | Examples |
|---|---|---|
| **Scale reference** | **One system.** A transform, no animation | Weasel at 25g, kodkod at 2kg, king cobra at 5m |
| **Vision / light mode** | **One shader with parameters** | Scorpion under UV, reindeer *seeing* UV, the fruit bat's low-light sight, the whole deep-sea biome |
| **Cutaway anatomy** | **Illustration, not animation** | The camel's hump is fat, the turtle's shell is its ribs, the howler's hyoid bone |
| **Audio** | **No visual work at all** | Proboscis nose as resonator, the giant otter's nine calls, the meerkat's hawk-call versus jackal-call |
| **Shared locomotion rigs** | **~8–10 rigs total** | Head-first descent (margay, genet, marbled cat), gliding (sugar glider, colugo), brachiation (gibbon, siamang), prehensile tail (kinkajou, binturong) |

**The corrected total: about 20 shared systems, ~140 bespoke pieces, and ~160 species with
no showable verb at all**, who get a size reference and a cutaway instead. **Four of the
cheapest categories — scale, light and vision shaders, cutaway, audio — are also among the
most striking.**

## Two kinds of species

| | Can be brought to a facility | Cannot be captured |
|---|---|---|
| Who | Most species | Mostly large ocean and deep-sea animals |
| Selecting it | Takes you to **its enclosure** | Gives **information about next steps** |
| Later | — | Unlocks **"visit the animal's location"** |
| The visit | — | Cut scene, then you are shown *in* that location and interact from within it |

**The test is transport, not suitability.** Elephants, great apes and polar bears are moved
in real life and often need to be. The ones that stay wild are those that **would die in
transport** — blue whale, great white shark, blobfish.

## Two interaction modes, deliberately separate — **[v2]**

| | |
|---|---|
| **Childhood mode** | The town animals — pets, livestock, garden wildlife |
| **Wild mode** | Animals caught in the wild |

**Keeping them separate is the point.** What you may do with your own goat is not what you
may do with a wild fox, and having them be different systems teaches that without a word of
explanation.

## Growth, not evolution — **DECIDED** — **[v2]**

Evolution does not belong in a realistic game. **Baby animals do**, and metamorphosis is the
honest version — tadpole to frog, caterpillar to butterfly. Dramatic, fast, completely true.

**Juveniles are life stages of one entry, not separate species.** They count toward nothing.

And growth needs a purpose that is not strength, because there is no combat:

> **A species is not fully researched until you have documented it across its life stages.**

That is real science — a life history is incomplete without the young. It works differently
in each career (photograph the cub, measure the cub, show the cub to visitors), and it turns
juveniles from a separate collection into the **depth** of an existing one.

**Where it genuinely works:** metamorphosis in the wild (observable without owning
anything); the animals you personally raise; and breeding at your own facilities.

---

# 8. Facilities and the sanctuary — **DECIDED**

## A recovery centre, not a zoo

A zoo acquires and displays. **A recovery centre takes animals in, works on them, and tries
to give them back** — which is a loop.

```
intake → triage → quarantine → rehabilitation → pre-release conditioning → outcome
```

| Stage | What really happens |
|---|---|
| **Intake** | Injured, orphaned, or confiscated |
| **Triage** | Blood loss, dehydration, hypothermia first; full exam after |
| **Quarantine** | Two to six weeks, species-dependent |
| **Rehabilitation** | Treatment and recovery |
| **Pre-release conditioning** | Relearning to forage, evade and navigate. Not healing — **remembering how to be wild** |
| **Outcome** | Release, or not |

### The outcome fork

**Release is the win, and the animal leaves.** Soft release is gradual, expensive and
survives far better; hard release is cheap, fast and worse. **Non-releasable animals stay**
— blind, two or more damaged legs, a bird that cannot use both wings, a disease risk, or
**imprinted** — and become ambassadors doing education work.

### The consequence that needed no inventing

**Imprinted animals cannot be released.** An animal hand-reared too closely stops recognising
itself as wild, and there is no undoing it.

So the most emotionally satisfying act available — bottle-feeding an orphan, the thing the
emotional thesis exists to give back — **carries its own real consequence.** Raise it right
and it goes home and you lose it. Raise it too close and it stays forever, and now you know
why.

### Ambassadors demonstrate their signature ability — **[v4]**

**The facility's saddest outcome becomes its education programme**, which is exactly what
real ambassador animals are for. It gives the non-releasable animals **a job that is not
sad**, and it makes the signature ability pay into all three pillars instead of only the
codex.

**And the game should not be precious about the word "zoo."** Players will read it as one
regardless. **The distinction that matters is not the label — it is that every animal here
arrived because it could not go home.** Say that plainly and let people call the building
whatever they call it.

### Field knowledge is the husbandry manual

**In Planet Zoo you look an animal's needs up in a menu. Here you have to have learned
them.** What was observed in the field *is* the care sheet, and difficulty changes as the
player gathers information and passes assessments.

## The twelve facilities specialise — **[v5]**

> **Ayr:** *"The 12 facilities do specialize in the animal of the biome they are in."*

**Without this, twelve facilities are twelve copies of one building.** With it, each looks
different, needs different things, and **cannot do the others' jobs.**

It is also simply true. Real rehabilitation is specialised — marine mammal centres, raptor
centres, bat rescues, reptile rescues. **Nobody treats a whale at a songbird centre.**

| Facility | What the building actually needs |
|---|---|
| **Polar** | Chilled water, haul-out ledges, **shade from a sun the animals never evolved for** |
| **Reef / deep sea** | Saltwater systems, filtration, pressure-tolerant holding |
| **Desert** | Heat gradients, deep burrowing substrate, UV |
| **Rainforest** | **Height.** Canopy animals housed at ground level do badly |
| **Wetlands** | Water quality, mud, shallow margins |
| **Mountains** | Cold-tolerant, and vertical — cliff-dwellers need to climb |
| **Farmland** | **The smallest and the busiest.** Hedgehogs, owls, bees, constant public traffic |

### The consequence worth building: transport

If a facility only holds its own biome's animals, **an animal found in the wrong place has
to be moved** — and **transport is itself a welfare risk**, which is true of real
rehabilitation, where an enormous amount of the work is driving. **Stabilise first, move
second, and accept that the journey costs the animal something.**

**This gives the twelve facilities a relationship instead of making them a list.**

### What specialisation cannot fix

**The polar facility is not "the polar bear house."** Specialisation decides what a facility
*can* hold; it does not overrule what an animal *should* be asked to tolerate. **Refusing an
animal stays a correct play.**

### The welfare question lives at the outcome fork — **[v12]**

Since the test for coming in is **transport**, almost everything comes in — and that is
correct, because rehabilitation is temporary and is the reason the animal survives. Orphaned
elephant calves are hand-reared and released. Gorillas receive surgery for gunshot wounds. A
starving polar bear is treated.

**So the welfare question is not "may it come in?" — it is "may it stay?"**, and that is a
harder and better place for it:

> **A permanent hedgehog ambassador is fine. A permanent elephant should cost the player
> something.**

### **PROPOSED** — a third destination: treated in the field

Darted and operated on where it stands, **because the journey would do more harm than the
delay.** Real, and it would give the transport rule a third answer instead of two. Awaiting
Ayr.

## Catching is the unlock — and it removes a large burden — **[v5]**

> **Ayr:** *"All of the animals in the sanctuary are technically ones you 'brought in.' That
> doesn't have to be part of the story, but you unlock a species in your facility by
> successfully catching it."*

**A species appears in your facility because you caught it. The mechanic is the
justification, and it does not have to be narrated.**

That resolves something that read as enormous. A name and an intake story for every
main-game animal sounded like **700 bespoke narratives woven into the plot.** It is not.

- **The catch is the reason it is there.** No plot justification required
- **The intake story is flavour**, drawn from the ten intake categories — specific and
  readable without being load-bearing
- **The autobiography still works**, because the record is real: what you caught, where,
  when, and at which stage of your life

**Same emotional result, a fraction of the writing.** The stories carrying real narrative
weight are the quest animals, a much smaller set that was always going to be written
properly.

## The sanctuary is a mode, not a second campaign

A genuine design error, caught by Ayr. Three things were broken: **the fiction** (700 species
through one centre means rehabilitating one of every species on earth; real centres take
local animals), **the clock** (2–6 week quarantines collide with the no-idle-waiting rule),
and **the budget** (700 individuals at two minutes each is 23 hours before any rehab loop).

**The 48-quest campaign is the spine and stays as costed. The sanctuary is a second way to
play** — unlocked early, running alongside, no completion requirement, no upper bound. The
*Planet Zoo* shape: a ~40-hour career mode against a **212-hour average tracked playtime**.
**The long tail was never in the story.**

### The rehabilitation pipeline — **DECIDED (Option C)**

**Authored, not simulated.** It exists for **story animals only** — not a systemic mini-game
applied to all 700 species, which Ayr never committed to.

**Ordinary caught species live at the facility permanently and are always visitable. Quest
animals and scripted rescues go through a real sequence with a real outcome.** Release stays
meaningful **because it is rare and happens to animals the player already cares about.**

**The cost is one authored sequence per rescue quest rather than a simulation** — and the
full pipeline design in §17 stays as the **specification** for those sequences rather than
being discarded.

### What this does to euthanasia

**It becomes an authored story beat, used once or twice at full weight, rather than a system
running in the background.**

It was only ever an urgent question because a design had been built in which animals die on
the player's watch as a matter of course. **Without the simulation, the question dissolves
rather than needing an answer** — which is the cleanest possible resolution of something
that had arrived by three separate doors.

## Every animal is an individual — **[v2]**

**Two texts per species, doing two different jobs:**

| | About | Answers |
|---|---|---|
| **Field guide entry** | The **species** | What is a beaver? |
| **Intake story** | **This** animal | Why is *this* beaver here, and what is its name? |

The field guide is a reference document and is already written for a large part of the
roster. **The intake story is a character introduction, and it is new work: 700 names and
700 short stories.**

### Release does not mean losing them

The facility design establishes that release is the win and the animal leaves — emotionally
correct, and also **a punishment for playing well.** The wild visiting sites resolve it: a
released animal goes to **a known place in the world** — the beaver pond, the moose field,
stretches of ocean — where the player can still visit and interact.

### 700 stories must not read like 700 injuries

**The obvious failure is every animal arriving hit by a car.** Real intake is far more
varied, and **the variety is what keeps 700 stories readable.**

| Reason | Example |
|---|---|
| **Injured** | Vehicle, window strike, cat, fishing gear, powerline, fence |
| **Orphaned** | Mother killed, nest felled, separated in a storm |
| **Confiscated** | Illegal trade, a market, a shipment intercepted |
| **Surrendered** | A pet that outgrew its owner. **This is where the exotic pet theme lands** |
| **Displaced** | Development, drainage, a felled roost tree |
| **Conflict translocation** | Moved rather than shot |
| **Imprinted** | Raised too closely by well-meaning finders, and now unreleasable |
| **Contaminated** | Oiled, poisoned, entangled |
| **Born here** | To a resident. **Not rescued at all** |
| **Aged out** | Arrived decades ago; the centre is the only home it has known |

**The work is not the writing — it is the review.** 700 stories have to be checked for
repetition, and repetition is exactly what a reader notices. **The ten-category structure
exists to make that review tractable.**

### Interaction is universal; ownership is earned — **[v11]**

**Every named individual anywhere can be fed, given enrichment, and have its signature
ability viewed** — at your facility, at someone else's, or at a release site in the wild.

**But only the ones you took in carry the autobiography.**

That splits cleanly across the life stages, and it is what gives the childhood years
something real to do:

| Stage | Your relationship to a facility |
|---|---|
| **Child** | **Watches at the fence** |
| **Teen** | **Volunteers at someone else's centre** — the animals belong to other people and you know them by number |
| **Young adult** | **Earns the first facility** |
| **Elder** | **Is the person others visit** |

### The sanctuary becomes an autobiography

If the intake story records **where you were and what happened**, then walking through your
own facility is walking back through your career. *This one arrived during the vulture
quest. This one you carried out yourself. This one was the first thing you ever treated and
it never left.*

**A collection screen lists what you have. A row of named animals with dated arrival stories
is a record of a life's work.** Nothing else in the game does that.

### Release sites are places, not animals

A smaller job than it sounds: **many species share one.** A pond, a field, a stretch of
reef. And the signature ability is viewable **at the release site as well as at the
sanctuary**, consistent with the unlock rule being documentation rather than possession.

**The childhood beaver closes its own loop here** — the animal you raised as a child can be
visited as an adult, in the wild, doing what beavers do.

### The naming rule — **expanded in [v9]**

```
number at documentation   →   name at outcome
```

**Releasable animals are numbered on intake. The player names them at the moment of
release.**

It takes the real practice — **rehabilitators use numbers precisely because naming leads to
attachment, attachment leads to handling, and a handled animal cannot go home** — and keeps
the reward instead of only the discipline. **The player still names every animal. They just
have to earn the right by letting it go.**

### The same act, with opposite meanings

| Outcome | When it is named | What the name *is* |
|---|---|---|
| **Released** | As it leaves | **A goodbye gift.** The last thing you do for it — and the reason you are allowed to is that **you are not keeping it** |
| **Non-releasable** | When it becomes a resident | **An admission.** It gets a name because **it is not going anywhere** |

**Nothing else in the game does that with a single verb.**

### The number is not a placeholder

Field numbers are real and they carry information — species code, year, sequence.
**BEAV-03. RT-2419.** A low number means early in your career, so **an elder walking past a
two-digit number is looking at their first season.**

**Keep the number visible after naming**, as real records do. *"Willow (BEAV-03)"* says more
than either half alone.

### The consequence nobody designed on purpose

**An animal that dies before an outcome never gets named.**

It arrives as a number and it stays one. **That is the mortality question arriving by
another door** — and it is the third door it has come through.

### **OPEN** — the rule tells the player the outcome

The rule implies **the game knows at intake** whether an animal is going home, because a
name means staying and a number means going. So the player learns each animal's fate the
moment it arrives. **That may be exactly right — or it may give away an ending that should
be earned.** Ayr's call.

**Suggested names are drawn from the language of the place the animal actually comes from**,
as zoos really do. **Deferred** — this needs sourcing properly rather than automating.

---

# 9. The campaign — **DECIDED**

## 73 quests, of which 48 are the campaign — **[v5]**

> **Ayr:** *"You keep naming quests. How many quests are you planning total? It seems like
> you're maybe under two assumptions at once."*

**Ayr was right, and this document made the same mistake.** "48" is the campaign. The
mythology and fossil quests were added later and the total was never updated.

| Group | Quests | Species behind them | |
|---|---|---|---|
| **The twelve biomes** | **48** | 700 | The campaign. Mandatory. Four per biome, one per adult life stage |
| **Mythology** | **12** | 100 | Postgame. One per culture |
| **Fossils** | **13** | 50 | Postgame. One per period |
| **On the Brink** | **?** | 50 | **Parked by Ayr** |
| **The Vigil** | **?** | 50 | **Parked by Ayr** |
| **Breeds** | 0 | 50 | Collection and husbandry, not story |
| | **73 + TBD** | **1000** | |

### There is not a quest per animal

**1000 animals, 73 quests — roughly one quest per fourteen species.**

Writing "the quest species" beside individual fossils made it read as though each got one.
**It is one per period:** 13 quests standing on 50 species. Mythology is **one per culture**:
12 quests on 100.

**An animal without a quest is not neglected.** It is encountered, documented, studied,
drawn, given a field-guide entry and a signature ability, and it counts toward its biome's
completion. **Questing is what a few species do.**

**The number is open in exactly the two places Ayr parked** — On the Brink and The Vigil.

## The campaign: four waves of twelve

```
Young adult        12 quests, one per biome    local change             -> earns all 12 facilities
Adult / skills     12 quests, one per biome    the pattern at scale
Adult / influence  12 quests, one per biome    establishing programmes
Elder              12 quests, one per biome    law and policy
```

**The impact ladder is Ayr's, and it describes how conservation careers genuinely widen** —
you fix a fence, then you understand the pattern, then you build the institution, then you
change the law.

- **All twelve facilities are earned during young adulthood.** **The local-change quest is
  what earns the facility** — solving the first problem gets you the standing, the land and
  the goodwill to put down roots. Every biome opens the same way, with one design.
- **The world opens wide and early.** Twelve quests in any order.
- **On the Brink unlocks after all twelve.**
- **No animal appears twice in the same biome** — each of a biome's four quests takes a
  different species.

### Gating is by capability, not difficulty

The water ladder gates the wet biomes: reef and kelp need the **teen open-water
certification**, and the deep sea needs instruments and a boat.

**That created one conflict and its fix is good.** The deep sea's young-adult quest is the
dropcam, which needs a boat — but the water ladder puts *owning* a boat at adult with power.
**So the young adult crews on somebody else's boat**, which is exactly how that career stage
works anyway, and **owning one later then reads as a promotion** rather than a purchase.

### The working method: story menus, not story picks — **[v8]**

> **Ayr:** *"We can come up with possible stories based on different real life stories you
> research and I can choose if I like them or not."*

**Research offers options per slot; Ayr chooses.** Each of the 48 slots gets a menu of real
candidate histories with the animal listed against each, **and the choices interact** —
because no animal may repeat within a biome, picking one option closes others.

**This is the method that produced the 48 above**, and it is the method for anything still
unfilled.

### The quest template — **[v4]**

**The shape every one of the 48 follows.** Ayr's, and four of its five beats are inherited
from Safari Saga rather than invented.

```
1 Learn the problem -> 2 Find the clues -> 3 Choose the solution -> 4 Build it -> 5 Cutscene
```

| Beat | What it is |
|---|---|
| **1. Learn the problem** | Meet the person whose problem it is. **This is also what opens the case** — findings stay inert until you have heard it |
| **2. Find the clues** | Field evidence gathered **in your career's own way** — photographed, measured, or learned from the people who live there |
| **3. Choose the solution** | Several plausible proposals, argued properly. Wrong answers fail for **specific stated reasons**. Length and position are randomised, so neither is a tell |
| **4. Build it** | Actually put it in. The lights go on the boma, the dogs go to the farms, the conservancy is registered |
| **5. The cutscene** | **What really happened.** The real event, the real place, the real people, credited by name |

### Beat 5 is the whole design landing somewhere the player will see it

**The sourced codex is not a menu nobody opens — it is the payoff at the end of every
quest.** All 48 end with real people named. The fictional characters carry the playable
story; **the closing scene hands the credit back to whoever actually did it.**

**It also solves a tone problem for free.** A quest that ends *"and then it worked"* is a
fairy tale. A quest that ends *"this is the part that is true, here is who did it, and here
is what is still unresolved"* is the game Ayr is actually making.

**The codex entry is the companion, not the substitute** — the cutscene gives the feeling,
the codex gives the detail, the dates and the sources.

### The quest with no right answer

Where a quest has no clean answer, all five beats still run. **Beat 3 offers several partial
answers, each of which helps something and costs something else**, and the outcome states
plainly what was traded. **Scoring is on whether the player argued from the evidence they
gathered, not on which side they took.**

Beat 5 then does something no other quest does: **it says the argument is still going on.**
Ending the elder stage on an open question is a stronger last thing to teach than a win.

### Quest scale — **[v2]**

> **Ayr, idea 30:** *"A badger bothering one farmer is too small."*

The target is **documented conservation history with a national or international outcome** —
Lion Lights, the cheetah guard dogs, legal protection for sea otters. This supersedes Safari
Saga's seventeen investigations, which were deliberately local and personal.

### The quest structure that carries over — **[v2]**

The seventeen investigations do not become quests, but their *shape* is worth keeping:

- evidence gathered in the field before you may propose anything
- **several proposals, all plausible, only one of which works**
- wrong answers that fail for **specific, real, stated reasons**
- outcomes that can **half-work**

### Villains exist — **[v2]**

> **Ayr, idea 47:** *"Sometimes there are villains. Poachers, corporations where their
> bottom line matters more than morals."*

Safari Saga's rule was *no villains — everyone is behaving reasonably.* **That becomes a
default rather than a law.**

**This is the stronger teaching position, not the softer one.** Telling the two apart is a
real conservation skill: a herder killing lions to protect his cattle and an organised
horn-trafficking network are not the same problem and do not have the same answer. **A game
where everyone turns out to be reasonable teaches a player to look for the win-win even when
there isn't one.**

Ayr's own distinction is the one to build on: **subsistence poaching where no alternative
livelihood exists is a problem to solve; commercial trafficking or a corporation knowingly
externalising harm is something to oppose.** Same act, different situation, different correct
response.

### Not every animal needs a quest

The species with real stories get quests. **Everything else is a wild encounter** — which
keeps the "gotta catch 'em all" feel while the authored content stays finite.

**But which animals fall on which side should be decided from the real record rather than
from fame**, or the game quietly teaches that charismatic animals matter and small ones do
not. A meerkat encounter that mentions the thirty-year Kalahari study, or a vulture quest
about diclofenac, costs the same to build as a lion quest and teaches more.


## The 48, chosen — **[v3]**

**Every one is real, and the codex credits the real people.** Four per biome, following the
impact ladder, no animal used twice in a biome.

### The Long Grass · savanna

> **Ayr chose these four directly from a menu**, and this document previously carried an
> earlier illustration instead. **Corrected in v10** — Uncle Albert's quest list agrees with
> the table below.

| Stage | Story | Animal |
|---|---|---|
| **Local** | **Beehive fences.** Elephants raid crops and are killed for it. **Elephants genuinely fear bees** — they flee the sound and have an alarm call for it — so hives strung along a fence line deter **76% of elephants annually and 86% at peak crop season.** **And the farmers sell the honey.** **Solving it earns the savanna facility.** *Lucy King / Save the Elephants* | Elephant |
| **Pattern** | **The guard dogs.** A whole district shooting cheetahs over livestock. **The fix is not aimed at the cheetah** — Anatolian shepherds raised with the herds cut losses until shooting stops being worth it. *Cheetah Conservation Fund, Namibia, since 1994* | Cheetah |
| **Programme** | **The conservancies.** Communities given legal ownership of the wildlife on their land. Namibia: **86 communal conservancies, over 20% of the country, $10M+ a year** returning to residents. Kenya: **two-thirds of large mammals live outside state parks.** *(The gemsbok was created specifically for this quest — the roster had only "Arabian Oryx", which lives in desert, and two quests were claiming it.)* | Gemsbok |
| **Law** | **The horn question.** Rhino horn trade policy, including the genuinely unsettled argument over whether a legal trade would undercut poaching or legitimise it. **No clean answer** — and this is the quest where beat 3 offers partial answers that each trade something, scored on **whether the player argued from evidence** rather than which side they took | Black rhino |

**Lion, wildebeest, vulture, wild dog and white rhino stay free** in the savanna for reserve
and for later slots.

**The captive lion industry quest has no home yet.** It was moved to The Furrows and then
moved back — **that biome is the home and the tutorial ground, and the tone is wrong.** It
sits in the reserve pile **pending a better home.**

### The Weald · forest

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The den boxes, and the predator you want back.** Den boxes bring pine martens back — and martens suppress grey squirrels, which lets red squirrels return. **You save a predator to save a prey species.** *Emma Sheehy, Ireland 2014; Vincent Wildlife Trust, Wales, from 2015* | Pine marten |
| **Pattern** | **Too many deer.** No predators, so deer eat every sapling and the forest quietly stops replacing itself. The trees look fine; there is simply nothing under them. **Unglamorous, deeply unpopular, and it decides whether the wood exists in a century** | Red deer |
| **Programme** | **The Iberian lynx.** About 94 animals in 2002. Captive breeding, rebuilding the rabbit population, underpasses for road deaths — over 2,000 by 2023, and downlisted. *LIFE Iberlince* | Iberian lynx |
| **Law** | **The spotted owl.** The 1994 Northwest Forest Plan reshaped US logging law around one bird. It kept declining anyway, outcompeted by barred owls. The 2024 answer is shooting barred owls for decades. **The law worked and the bird still lost** | Northern spotted owl |

### The Canopy · rainforest

| Stage | Story | Animal |
|---|---|---|
| **Local** | **Old phones in the canopy.** Recycled smartphones, solar-powered, strapped in trees, listening for chainsaws and alerting rangers while the tree is still standing. The same recordings turn out to be a census. *Topher White, Rainforest Connection, from 2013* | Siamang |
| **Pattern** | **Palm oil.** The boycott answer is wrong — oil palm yields far more per hectare than any alternative, so replacing it costs *more* forest. **The satisfying answer and the correct answer are different** | Orangutan |
| **Programme** | **Whose land it is.** Deforestation is dramatically lower inside recognised Indigenous territory, one of the best-evidenced findings in conservation. **The programme is not a reserve; it is a land title.** *The Kayapó; Almir Suruí and the Paiter-Suruí* | Jaguar |
| **Law** | **Yasuní.** Ecuador put it to a national vote in 2023 and chose to leave the oil in the ground under one of the most biodiverse places on earth | Harpy eagle |

### The Fens · wetlands

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The toad patrol.** One night each spring, thousands of amphibians cross a road to the pond they were born in, and volunteers carry them over in buckets. **The least technological quest in the game, and it saves whole populations.** *Froglife's Toads on Roads* | Common toad |
| **Pattern** | **The engineer.** Beaver dams slow water, so the flood peak downstream measurably drops. **The animal you raised as a child turns out to be the infrastructure.** *Devon Beaver Trial, Prof Richard Brazier* | Beaver |
| **Programme** | **The marshes that were drained on purpose.** Saddam Hussein drained the Mesopotamian Marshes to punish the people living in them. An engineer who had left came back and reflooded them. *Azzam Alwash, Nature Iraq* | Otter |
| **Law** | **What counts as a wetland.** Protection depends on a definition, and the definition moves — *Sackett v. EPA* (2023) removed federal protection from a large share of US wetlands overnight. **Nothing physical changed. The word did** | Sandhill crane |

### The Strand · coast

| Stage | Story | Animal |
|---|---|---|
| **Local** | **Lights out.** Hatchlings find the sea by heading for the brightest horizon, so a hotel's lighting sends a whole nest inland to die. The fix is an ordinance and some shielded bulbs. *Sea Turtle Conservancy* | Loggerhead turtle |
| **Pattern** | **Coastal squeeze.** Sea walls stop saltmarsh retreating inland as the sea rises, so the marsh drowns against the wall. The fix is to **deliberately breach your own sea defence.** *Wallasea Island, RSPB, 2015* | Avocet |
| **Programme** | **The no-take zone.** Two divers spent seventeen years arguing for one bay to be closed to all fishing. The lobsters inside grew big enough to spill out and restock the water around it. *Howard Wood and Don MacNeish, COAST, Lamlash Bay, 2008* | Lobster |
| **Law** | **The blue blood.** Horseshoe crab blood tests injectable medicines — nearly every vaccine you have had. A synthetic replacement existed for years and was resisted for years | Horseshoe crab |

### The Garden · reef

| Stage | Story | Animal |
|---|---|---|
| **Local** | **Coral gardening.** Broken staghorn fragments grow fast on rope nurseries and can be cemented back onto dead reef. A hobby diver worked it out and it became the standard method. *Ken Nedimyer, Coral Restoration Foundation* | Staghorn coral |
| **Pattern** | **The starfish outbreaks.** Crown-of-thorns populations explode in pulses, and the trail leads inland to fertiliser runoff feeding the larvae. **The reef problem starts on a farm** | Crown-of-thorns starfish |
| **Programme** | **Protect the herbivore.** Algae takes the space where coral dies and stops new coral settling. Parrotfish eat the algae. **So the programme is not a coral programme — it is a ban on catching a fish nobody thought was important.** *Bonaire 2010; Belize 2009* | Parrotfish |
| **Law** | **The heat.** Water quality, fishing pressure and runoff can all be fixed locally, and the reef bleaches anyway when the ocean runs hot. **The one thing that decides the outcome is the one thing local law cannot reach** | Humphead wrasse |

### The Blue · open ocean

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The escape hatch.** A shrimper welded a grid into his net that lets big animals push out through a flap while the shrimp pass through. He built it to keep jellyfish out, and it turned into law. *Sinkey Boone, 1970s — the Turtle Excluder Device* | Kemp's ridley turtle |
| **Pattern** | **Dolphin-safe.** Tuna boats set nets on dolphin herds because tuna swim beneath them. The label fixed that — and pushed fleets onto floating objects instead, which catches far more sharks and turtles. **Every fishing method kills something; the label chose which** | Spinner dolphin |
| **Programme** | **Watching from orbit.** Almost every large vessel broadcasts its position, and **a boat that switches its transponder off at a reserve boundary is telling you something.** *Global Fishing Watch, 2016* | Bluefin tuna |
| **Law** | **The two-thirds nobody owned.** International waters had no mechanism to protect biodiversity at all. The High Seas Treaty, agreed 2023 after nearly twenty years | Blue whale |

### The Dark · deep sea

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The dropcam.** You cannot go down, so you send something instead — a camera in a pressure housing, a weight, bait and a float. It comes back with an animal nobody has filmed there before | Bluntnose sixgill shark |
| **Pattern** | **Fished as if it were fast.** Orange roughy were managed like an ordinary fish and turned out to live over 150 years and not breed until their twenties. **The mistake was about time, not quantity** | Orange roughy |
| **Programme** | **Older than the fishery.** Bottom trawls flatten seamount corals thousands of years old — one black coral colony dated past 4,000 years. Enforced by the satellite work from the ocean quest | Black coral |
| **Law** | **The nodules.** Potato-sized metal lumps wanted for batteries for the energy transition. One octopus lays its eggs only on sponge stalks that grow only on those nodules — **mine the nodule and the species has nowhere to breed.** Genuinely no clean answer | Ghost octopus |

### The Dry · desert

| Stage | Story | Animal |
|---|---|---|
| **Local** | **Head-starting.** Ravens eat hatchling tortoises, and raven numbers exploded because of landfill and powerlines. **You are not fixing a raven problem, you are fixing a rubbish problem** — while raising hatchlings until their shells harden | Desert tortoise |
| **Pattern** | **The solar farm.** Desert sun is the best climate solution available, and utility-scale solar sterilises the ground it covers. **Two things you believe in, on the same hectare** | Fennec fox |
| **Programme** | **The trees that were already there.** The Great Green Wall planned to plant a forest and most of the planting died. What worked was noticing living rootstock already under the fields and protecting the shoots — millions of hectares for almost nothing. *Tony Rinaudo, Niger* | Dorcas gazelle |
| **Law** | **Protection, removed.** Oman's Arabian Oryx Sanctuary was the first place ever struck off the World Heritage list, cut by 90% for oil prospecting in 2007. **Every other quest is about winning protection. This one is about losing it, legally and on purpose** — and it is sharper because the oryx is a *success* story: extinct in the wild in 1972, reintroduced, and in 2011 **the first species ever downlisted from Extinct in the Wild.** **The species was saved and its sanctuary was legally dismantled for oil** | Arabian oryx |

> **A criterion worth stating, because this document got it wrong.** The oryx is not in On
> the Brink **because it is Vulnerable**, which fails the status test. It is tempting to
> reach for the narrative reason — *it is the opposite story* — but **On the Brink admits on
> status alone**, and a story-based criterion was never set.

### The Divide · mountains

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The corral.** A snow leopard gets into an unroofed pen and in the panic kills far more than it can eat, so the herder loses a year's income and kills the leopard. A wire roof ends it; insurance makes the killing irrational. *Snow Leopard Trust; Shafqat Hussain* | Snow leopard |
| **Pattern** | **The painkiller.** South Asia's vultures fell around 99% in a decade from a veterinary anti-inflammatory in cattle carcasses. Then the second-order effect: no vultures, more feral dogs, more rabies. **A drug for cows became a human health crisis.** *Lindsay Oaks and Rick Watson, 2004* | White-rumped vulture |
| **Programme** | **All from one valley.** Alpine ibex were hunted to about a hundred animals in one royal reserve, and everything alive today descends from them. **Population recovered, diversity did not.** *Gran Paradiso* | Alpine ibex |
| **Law** | **The shahtoosh ban.** A wool fine enough to pass through a ring, taken only from a dead animal, three or four per shawl. Banned and enforced — from ~75,000 back to roughly 300,000. **A law that worked, and a trade that still exists underground** | Tibetan antelope |

### The Floe · polar

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The bear patrol.** A hotline, bear-proof bins and a holding facility, so bears are moved rather than shot. **Mundane municipal work, and it is why the town and the bears both still exist.** *Churchill, Manitoba* | Polar bear |
| **Pattern** | **The haulout.** Walruses rest on sea ice between dives. Without ice they pile onto beaches in tens of thousands and die in stampedes. **The injury is real and the cause is a thousand miles away** | Walrus |
| **Programme** | **The Ross Sea.** The world's largest marine protected area, agreed 2016 by consensus among nations including several that fish there, after years of annual refusals | Adélie penguin |
| **Law** | **Whose count was right.** In the 1970s scientists estimated a few hundred bowheads and moved to stop Iñupiat whaling. The hunters said the estimate was wrong because whales pass *under* the ice where nobody was watching. **New methods proved the hunters right.** The quota system that followed is co-managed. *Alaska Eskimo Whaling Commission* | Bowhead whale |

### The Furrows · farmland

| Stage | Story | Animal |
|---|---|---|
| **Local** | **A hole in the fence.** A hedgehog needs about a mile of range a night and a modern fence seals it in. A 13cm gap in every fence on the street reconnects the block. **The smallest possible intervention, done by everyone.** *Hedgehog Street, PTES, from 2011* | Hedgehog |
| **Pattern** | **The seed coating.** A pesticide applied to seed rather than sprayed ends up throughout the plant, including the pollen. The EU restricted the main neonicotinoids in 2018 | Bumblebee |
| **Programme** | **Let it go.** A failing arable estate stopped farming, put grazing animals on it and let scrub come. Within twenty years: nightingales, turtle doves, purple emperors, and the first storks to breed in Britain in centuries — **on ordinary clay nobody thought was special.** *Knepp Estate, from 2001* | White stork |
| **Law** | **The nitrogen ruling.** A court found the Netherlands was breaking its own nature law, which meant cutting livestock, which brought tractors to the capital and eventually brought a government down. **Environmental law with a real political price, paid by real farmers** | Black-tailed godwit |

---

# 9b. Getting to the deep sea — **[v3]**

### The fact that decides the design

**Recreational scuba stops at about 40 metres. The deep sea starts at about 200.**

**Scuba does not get you there, and no amount of training will.** Below ~40m an ordinary
air supply becomes actively dangerous — nitrogen narcosis, oxygen toxicity, decompression
measured in hours. The trained-diver fantasy tops out an order of magnitude short.

**This is the most useful constraint in the game, because it is real and cannot be argued
with. Every other biome is entered by walking into it. The deep sea is entered through
instruments.**

## The water ladder

| Stage | Capability | Opens |
|---|---|---|
| **Child** | Swim | Shallows, rockpools, the pond |
| **Teen** | Snorkel and freedive | Coast, tide line, kelp canopy |
| **Teen** | **Open water certification** | Reef and kelp to 18m — **the first serious gate** |
| **Young adult** | Advanced and deep training | 30–40m: wrecks, reef walls, the bottom of the kelp |
| **Adult / power** | **A boat** | You stop borrowing rides. A facility-scale purchase |
| **Adult / power** | **ROV and dropcam** | The deep sea, at a distance |
| **Elder** | **Crewed submersible** | The deep sea, in person, rarely, and it is an event |

**Certify as a teen.** The real minimum for full open-water certification is 15 and a junior
qualification starts at 10, so a teenager certifying is accurate rather than generous. It
gives the teen stage a genuine accomplishment, and young adult then begins with the water
already open instead of spending its first hours on paperwork.

### Certification is real teachable content

**A tutorial that is also a quest that is also true** — and it fits the codex's read-aloud
and practice-quiz jobs exactly.

- **Why you never hold your breath on the way up** — lung air expands as pressure drops, and
  this is the one rule that kills people who break it
- **Buoyancy** — hovering without touching anything, which is also the entire ethic of not
  wrecking a reef with your fins
- **Nitrogen loading**, and why you cannot simply come straight up
- **Narcosis** — judgement quietly degrades with depth and you will not notice
- **The buddy system** — nobody dives alone, which makes it a two-character activity

### The deep sea plays differently, and should

**You do not swim here. You operate.** Position the vessel, drop the camera, set the bait,
wait, recover, and see what came. **Encounters arrive as footage rather than as meetings** —
which is precisely how every deep-sea species you have ever seen was actually seen.

| Career | What it does down here |
|---|---|
| **Photographer** | The camera is on the vehicle, not in your hands. **Framing becomes piloting** |
| **Researcher** | Sampling, sensors, and the fact that most of what comes up is new. **The career the biome most rewards** |
| **Tour guide** | You cannot take anyone down — so you **narrate a live feed to an audience on the surface**, which is exactly how deep-sea outreach works on real research vessels. **The job that needed the least invention** |

---

# 9c. The non-conservation quests — **[v3]**

> **Ayr:** unique, fun, learning-based quests for mythology and fossils — **one per culture
> and one per period.**

**These do not use the impact ladder.** They are not about saving anything. They are about
**finding out**, and they are the part of the game that is purely a pleasure.

## Mythology — one per culture

**The through-line: myths are records.** Not *people used to be silly* — **folklore is data
collected without a laboratory.** Three things keep turning out to be true underneath a
monster:

```
1  somebody found a fossil and explained it with the animals they knew
2  somebody saw a real animal nobody had a specimen of yet
3  somebody needed to keep children away from something that kills them
```

**Each quest ends with the player able to say which of the three this one was** — and
sometimes the honest answer is that it is none of them and the story is just a story, which
is also fine.

| Culture | Creature | What it turns out to be about |
|---|---|---|
| **Greek / Scythian** | **Griffin** | A four-legged beaked animal guarding gold, described along trade routes running through beds of *Protoceratops* skeletons — beaked, four-legged, abundant |
| **Chinese** | **Qilin** | In 1414 a giraffe reached the Ming court from East Africa and was received as a qilin. **A court painting of it survives.** A real animal becoming an omen, documented as it happened |
| **Norse** | **Kraken** | Giant squid — not confirmed alive on camera until 2004. **"Monster" and "species nobody has photographed yet" were the same category for most of history** |
| **Irish** | **Púca** | A shapeshifter tied to Samhain: after its night, what is left in the field is not fit to pick. **Folklore doing the job of a date on a calendar** |
| **Japanese** | **Tanuki** | An actual living animal with enormous folklore attached. The quest is the difference between a mythical animal and **a real animal treated mythically** |
| **Inuit** | **Qalupalik** | A creature that takes children who go to the water's edge alone. The ice edge genuinely kills children who go there alone. **Instruction, in the form that gets remembered** |
| **Māori** | **Taniwha** | Guardians of particular stretches of water, frequently the dangerous ones. **Still cited in New Zealand planning today** — the one that is not past tense |
| **Aztec / Nahua** | **Ahuizotl** | A water creature with a grasping hand on its tail, said to drown people at the lake edge |
| **Akan / West African** | **Anansi** | The spider who owns all stories. Sits beside a real orb-weaver and asks why the **trickster** role lands on this animal in so many places |
| **Arabian / Persian** | **Roc** | A bird enormous enough to carry an elephant, reported from Indian Ocean trade — and Madagascar had the elephant bird, whose eggs are the size of a rugby ball and were carried as curiosities |
| **Slavic** | **Rusalka** | A water spirit at the river in early summer. **The same function as the qalupalik, invented independently, thousands of miles away** — which is the point of putting them in one game |
| **Aboriginal Australian** | **Bunyip** | A waterhole creature, sometimes linked to *Diprotodon* remains. **Flagged for consultation** |

## Fossils — one per period

**Three eras is too few for 50 species. Periods give twelve or thirteen, which fits.** The
game can still say "era" in dialogue, where it is the ordinary English word.

**The through-line: not what lived, but how anyone knows.** Every one is a **detective story
about method** — which is what makes them fun rather than a list, and what a museum placard
never has room for.

| Period | The find | What it teaches |
|---|---|---|
| **Ediacaran** | **Charnia**, in English rock everyone knew was too old to hold fossils. A schoolgirl reported it and was told she was mistaken; a boy found it soon after and was believed | **Who gets believed** |
| **Cambrian** | **Anomalocaris**, described as three separate animals — the mouth, the arm and the body each got a name — before anyone realised it was one | **Reconstruction is inference, and inference can be confidently wrong** |
| **Ordovician** | The first mass extinction, and orthocone nautiloids several metres long | Extinction is **normal, enormous, and older than backbones on land** |
| **Silurian** | Sea scorpions over two metres, and the first things to crawl out of water | **The land was empty, and something had to be first** |
| **Devonian** | **Tiktaalik.** Predicted from the age of the rock, searched for on purpose, found on Ellesmere Island in 2004 | **Evolution makes testable predictions.** The cleanest example that exists |
| **Carboniferous** | Dragonflies with 70cm wingspans, in forests with far more atmospheric oxygen | Deep time is physically present today — **that forest is the coal** |
| **Permian** | The Great Dying. And *Dimetrodon*, which is not a dinosaur and is **more closely related to you than to one** | **The biggest extinction is the one nobody has heard of** |
| **Triassic** | Crocodile-line archosaurs ruling, with dinosaurs a minor group | **The winners were not obvious at the time** |
| **Jurassic** | **Mary Anning** at Lyme Regis — ichthyosaur, plesiosaur, the first British pterosaur, coprolites. Sold fossils to eat, was refused membership of the Geological Society for being a woman, and watched others publish her finds | **Whose name goes on a discovery**, and what that has to do with the science |
| **Cretaceous** | Feathered dinosaurs from Liaoning, and then melanosome shape revealing **colour** — *Sinosauropteryx* had a banded ginger-and-white tail | **We can know what colour an extinct animal was.** Almost nobody knows this |
| **Paleogene** | Whales going back to the sea: *Pakicetus*, *Ambulocetus*, *Basilosaurus*, and an ankle bone tying them to hippos and deer | **A complete transitional sequence, walkable end to end** |
| **Neogene** | Megalodon, known almost entirely from teeth — and Steno realising in 1667 that "tongue stones" were shark teeth | **Stratigraphy was invented by identifying a fossil correctly** |

---

# 10. The codex — **DECIDED**

## The field-guide writing rule

**Every entry states how many relatives the animal has** — the genus count, plus the wider
group where that is more useful.

> Panther Chameleon — one of about 23 *Furcifer* chameleons, and one of roughly 200
> chameleons.

It answers a question readers always have and field guides rarely do: **is this a one-off, or
one of a crowd?**

## The sources-and-changes layer — **[v2]**

**The strongest protection this project has, and it is procedural rather than fictional.**

1. **A visible sources layer.** *This is based on the real Lion Lights, invented by Richard
   Turere in Kitengela in 2011; here is what we changed and why.* **An error documented as a
   deliberate departure is a choice, not ignorance.**
2. **Fictional characters, real credited history.** Do not put words in the mouths of real
   people. The player meets a *situation like* Turere's; the codex credits the real person.
3. **Consultation, credited.** The only thing that actually addresses the cultural question.
4. **Fixing things when told.** A game that publicly corrects errors earns more trust than
   one that was never wrong.

**A framing device cannot do this job.** A stated fiction legitimately covers compressed
geography, composite places and time compression — but it does not excuse misrepresenting a
living culture, and it does not cover animal facts, because those are the educational core.

## The resource section

**Where the game stops being a game and becomes useful**, and where the stated purpose — *a
road map for youth wanting to get into the animal industry* — finally lands.

| | |
|---|---|
| **The organisations from the quests** | Already named and sourced. The player has *met* them before seeing the list |
| **What you actually study** | The real qualification ladders, FGASA included |
| **What you can do this weekend, free** | **The most useful page.** eBird, iNaturalist, Zooniverse, ringing groups, toad patrols, beach cleans, whale-shark photo-ID |
| **Where to give** | With the cautions below |
| **What to read and watch next** | The books, papers and documentaries behind the quests |

**A young player does not need a donate button — they have no money.** They need the answer
to *"what can I do now?"*, and citizen science is the only honest answer that does not
require being eighteen or employed.

**Two cautions.** Recommending charities is a responsibility — name the organisations that
appear in the quests, because their inclusion is a matter of historical record rather than
endorsement. And **links rot**: names survive, addresses do not, so name every organisation
in full and use one maintained page as the single outbound link.

## Read-aloud and practice quizzes

**Read-aloud for guide text stays** (idea 14) and is separate from the no-voice-acting
decision. **Practice quizzes** are always available, optional, and drawn only from what the
player has seen (§6).

---

# 11. Pets and provenance — **DECIDED** — **[v2]**

**You choose a pet as a kid, and a more demanding animal as a teen.** The kid list is
deliberately **only animals that genuinely thrive as pets**; the teen list requires more
responsibility.

## The menus, as designed — **[v7]**

**The cat is one species with cosmetic variants, and it arrives as a kitten.** One entry —
**House Cat** — with different skins. **Tabby, calico and black stop being species entirely**
and become appearance options on that one animal. **Every named cat breed lives in the
Breeding Centre**; none is a childhood pet choice.

**Dogs stay small / medium / large, three each:**

| Size | Options |
|---|---|
| **Small** | Chihuahua · Dachshund · Pug |
| **Medium** | Corgi · **Mutt** · **Pit Bull** |
| **Large** | Siberian Husky · Golden Retriever · German Shepherd |

**Mutt replaces Farm Dog**, because a mutt is the honest generic dog, "farm dog" is a job
rather than a breed, and **most dogs in the world — and most dogs in shelters — are mutts.**

**Four reptiles:** corn snake (the standard beginner snake), bearded dragon, **Russian
tortoise** (the pet tortoise that does *not* reach 45kg, unlike the sulcata already in the
desert), and leopard gecko — **the most commonly kept pet reptile in the world.**

**Reptiles are the largest single group in the child menu**, which is a fair reflection of
how many children actually keep one.

**There is no bird in the child menu.** A first pet is a cat, a dog, a reptile, a fish or a
small mammal. **A bird is a step up, and it waits for the teen years.**

### Most teen animals come from the wild

| Teen option | Where it comes from |
|---|---|
| **Rescued macaw / cockatoo** | The wild birds already in The Canopy and The Weald |
| **Chinchilla** | The wild one in The Divide |
| **Hermit crab** | The wild one in The Strand — **and also stocked in the teen pet store** |
| **Budgie** | **It is the budgerigar**, already a wild Australian bird in The Dry. Stocked, not duplicated |
| **Ferret** | Already in the roster |
| **Freshwater fish** | Teen pet store only |

**The cockatiel and zebra finch sit on the same footing**, so the pet-bird shelf fills
without spending a roster slot — **and honestly, since those birds really are wild animals
that people keep.**

**Farm animals are no longer a teen pet option.** They stay in the game and in the town; a
teenager simply does not choose one as their animal.

### The axolotl is in the wild *and* in the breeding centre

**Exactly right, and it makes the paradox literal instead of explaining it.** The axolotl is
functionally extinct in the wild while hundreds of thousands live in tanks. It also keeps
its required place in On the Brink.

## Where you get them is part of the lesson

> **Ayr, idea 58:** *"Maybe you go to the humane society for the cats and dogs, but you go
> to a pet store for the fish and small mammals."* The point being **to show that not all of
> the pet industry is bad.**

**A game that treated the whole pet trade as villainous would be inaccurate and preachy, and
players would stop trusting it.** The real picture is mixed, and **sourcing is the axis that
separates good from bad.**

### The provenance system

Every animal the player acquires has a visible provenance:

```
Adopted        humane society, rescue, rehoming
Captive-bred   reputable breeder or store - fine, and most of the list
Wild-caught    legal for some species, and the thing to notice
```

**This is the same honesty axis the photographer career already uses** (Wild / Captive /
Controlled / Baited / Lured). One idea serving two systems.

### The lessons already sitting in the list

- **Saltwater vs freshwater tank — the sharpest one.** Freshwater aquarium fish are
  overwhelmingly **captive-bred**. Marine fish are overwhelmingly **not**: roughly **98% of
  saltwater species cannot yet be bred commercially**. A large share of the wild catch is
  taken with **cyanide**, which stuns the fish and kills the reef around it — mortality from
  reef to retail exceeds 90%. **The same tank, stocked two ways, is a whole conservation
  lesson with no lecture attached.**
- **The rescue parrot is the deliberate exception**, and it comes with a lesson. Large
  parrots live 40–80 years, routinely outlive their owners, and are among the most
  surrendered pets there are.
- **Axolotl** — functionally extinct in the wild while hundreds of thousands live in tanks.
  A genuinely strange case that complicates any simple "captivity bad" reading.
- **Tortoise and horse** — the same lifespan problem in quieter and more expensive forms.

---

# 12. Badges — **DECIDED, count OPEN**

**An achievement system that is actually a curriculum.** Each badge is a concept in biology,
and **the set you must assemble to earn it is the lesson.**

Seven categories: Reproduction, Senses, The body, Evolution, Behaviour, Conservation,
Extremes.

**Duplicates across badges are deliberate.** An animal demonstrating four concepts appears in
four badges. Large badges **tier** — bronze, silver, gold — giving an easy first rung and a
hard last one inside one badge.

### The hardest one

**Bad Reputation**, 24 members across three mechanisms: feared for the name, feared for the
face, feared by folklore. **The only badge whose lesson is about the player rather than the
animal — fear has a body count.** It loops into the mountains quest, where 99% of South
Asia's vultures died to diclofenac and human rabies deaths rose behind them.

### The tutorial badge

**The black cat is a coat option on House Cat, not a species** — so it needs no catching.
Choosing the black coat, *or* reading the House Cat entry, fires the player's first badge and
explains the system. If neither has happened by the end of the tutorial, **the badge lights
up on its own.**

The player gets *"black cats are feared for no reason"* and **then** *"that was a badge."*
**A tutorial that opens with an achievement menu is a menu.**

### Governance

`design/BADGES.txt` is the only source. The page is generated from it and **Uncle Albert
verifies every member is a real species.**

---

# 13. The roster — **DECIDED**

```
THE 700   twelve biomes  +  The Kept (50 domesticated)
THE 300   On the Brink 50 · The Vigil 50 · The Telling 100
          The Record 50 · The Breeding Centre 50
```

**Round numbers are firm.** As of consolidation, **656 of the 700 exist and 44 remain** to be
created. Checked by Uncle Albert, not asserted here.

### Everything in the roster is real — **[v10]**

**The thirteen invented wardens are cut** and stay in Safari Saga. **Every entry in the new
roster can be credited to something real** — a living species, an extinct one, a fossil, or
a myth that a culture actually tells. Nothing is made up to fill a slot.

### Unequal biomes are correct, not a fault — **[v10]**

**A bigger biome should hold more variety**, and rainforest and savanna sitting on top
matches the real world. **The floor matters; the ceiling does not.**

### No plankton, krill or copepods as catchable species — **[v10]**

**What the animals eat is stated in the text rather than implemented as collectables.**
Polar and open ocean get larger additions instead — Arctic fish and the like.

> **This document was breaking that rule.** Antarctic krill had been written into *Lights
> On* and *The Linchpin*. **Both are corrected** — lanternfish and viperfish take the
> bioluminescence slot, and The Linchpin stands at seven without it.

**Per-biome targets are flexible at Ayr's discretion** — a guide, not a quota. **Interest
governs which species get made, not headcount.**

### But the floor exists for a reason — **[v4]**

> **Ayr:** *"Stop worrying about continents. What's more important is that each biome is a
> functional ecosystem."*

**This replaced region-based gap analysis entirely.** Europe being thin does not matter in an
invented world. **A biome with five species does matter, because it is not an ecosystem — it
is a corridor with some bats in it.**

That reasoning is also what cut caves as a biome, and it is why the thinnest biomes are the
ones the remaining species work should go to.

---

# 14. The author in the game — **DECIDED**

Ayr appears as an NPC: **an adult with power, not an elderly mentor.** The NPC **does not
age**, and visits in certain scenes at the same age throughout.

**At the end, in a cut scene, the player character approaches the NPC — and the NPC becomes
video of Ayr**, explaining why they made the game, what it is to them, and what it could mean
to anyone playing.

> **Ayr:** *"Not as symbolic and meaningful as all your suggestions. But reality. I'm
> watching the game develop because I'm making it."*

### Why the non-ageing is the point

Every alternative tried to make Ayr a character *inside* the fiction, and all of them
required inventing a life to justify the presence. **Ayr's version requires no invention. The
NPC does not age because the author is not subject to the story's clock.**

**The non-ageing stops being an inconsistency and becomes the clue** — it reads as a glitch
until the ending, and then reads as the point.

### The structural rhyme

**Every one of the 48 quests ends the same way:** the story stops, and the game says *here is
who really did this*, and names them.

**The game itself then ends the same way.** The story stops, and the game says *here is who
really made this*, and names Ayr.

**Same move, one level up, forty-nine times.** It is the game's entire method applied to
itself — and it is the one feature nobody else could copy.

The NPC is **not made important to the plot**. A constant easter egg, not a character with a
role.

### Interactive, but weightless — **[v7]**

**Talkable — otherwise the ending has nothing to pay off.** A player who never interacted
with them has no memory to be rewarded.

But the role only holds if the character stays weightless:

- **No quests, no items, no unlocks, no gates.** Talking to them is always optional and
  **never advances the game by a single step**
- **They never talk about themselves.** No backstory, no name offered, no hints
- **They comment on the animal you are looking at** — one short observation, not
  quest-relevant, not plot-relevant. **The kind of thing a stranger says on a viewing
  platform**

---

# 15. Cutscenes — **DECIDED** — **[v2]**

**In-engine scripted scenes are close to free**, because the world is already a lit 3D scene
with a moving camera. That is a direct benefit of the HD-2D decision.

Where they matter, in order:

1. **The five life-stage transitions.** The load-bearing ones — years pass, and that is where
   the heaviest material lives: qualifying, the childhood pet not being there when you come
   back, becoming the person the mentor was
2. **Quest resolutions** — the lights go up on the boma, the policy passes
3. **First contact with a biome**
4. **The elder handover**, which is the ending

**Cutscenes must be replayable from the codex.** In a game explicitly about memory, time
passing and animals that die, a player will want to go back and see the scene where the dog
was still alive. **Cheap if planned, awkward to retrofit.**

**And the strongest beats are quiet** — an absence, a gap where something used to be, a
familiar animal recognising you years later. Cheap to do well, and easy to ruin with too much
production.

---

# 16. Items in the world — **DECIDED as principle**

Items exist, are **found by going somewhere**, exist to make walking off the path worth
doing, and feed the encounter systems.

**What the items are is deliberately not decided. No item ideas until Ayr asks.**

Recorded now because **it constrains map design, and map design comes first.** A world built
to be looked at and a world built to be searched are not the same world.

---

# 17. Building the facility — **DECIDED** — **[v3]**

## The core mechanic: two routes that must never cross

**Every zoo builder ever made is about sightlines for visitors** — put the glass where the
crowd can see the tiger.

**This game is the opposite. It is about sightlines *away* from visitors.**

An animal being rehabilitated **must not get used to people**, because a habituated animal
cannot be released. So the site carries two flows that have to reach the same buildings
without ever meeting:

```
PUBLIC ROUTE     car park -> education -> ambassador housing -> cafe -> exit
ANIMAL ROUTE     ambulance bay -> intake -> quarantine -> hospital
                   -> rehabilitation -> conditioning -> release transport
```

**Where they touch, an animal loses its chance to go home.**

That is the building puzzle, and **no other game has it.** It is not decoration and not
optimisation — it is a routing problem with an ethical result, and it comes straight out of
how real centres are laid out.

## What you place

| Building | The rule that constrains it |
|---|---|
| **Ambulance bay / intake** | On the road. An animal arriving in a box has already had the worst day of its life; the journey from vehicle to table should be short |
| **Triage / hospital** | Next to intake. **One vet cannot treat two animals at once** |
| **Quarantine** | **Separate everything** — airflow, entrance, equipment, staff footwear. It cannot share a wall or a walkway with anything downstream. **The hardest thing to place and the most expensive to get wrong** |
| **Rehabilitation enclosures** | Species-appropriate, **gated by what you learned in the field.** This is where the codex cashes in |
| **Conditioning** | The biggest structures. A bird needs a flight pen long enough to actually fly; an otter needs water long enough to actually swim. **You cannot fake this with a small version** |
| **Ambassador housing** | The only animal buildings the public may reach. Built for a lifetime rather than a stay |
| **Education / visitor** | Where the money comes from. **Deliberately far from everything that matters** |

## The four constraints

**The campaign has all four. Sandbox removes the first two and keeps the last two.**

### 1. Money

- **Visitors** pay to see ambassadors. **The animals that draw a crowd are charismatic; the
  animals that come through the door are whatever got hit by a car.** Income never matches
  workload
- **Grants** are tied to programmes — which is exactly what the *adult with power* wave is
  about, so **quest progress becomes facility funding, honestly**
- **Donations** sponsor **named individuals.** A visitor reads an intake story and gives
  money, so the naming system becomes an income mechanic without being cheapened

**Rehabilitation centres are chronically broke. That should be true here.**

### 2. Land

Bounded, and expanded by quests. Each of the four waves grants another parcel, so the site's
shape across a career is **earned, then widened three times.**

### 3. Field knowledge — where the codex finally becomes mechanical

**You cannot build a good enclosure for a species you did not study.**

| What you documented in the field | What it unlocks in build mode |
|---|---|
| Watched it feed at dawn and dusk | The correct feeding schedule |
| Recorded what it ate | Real diet, instead of generic food |
| Found the burrow, nest or roost | The right shelter, instead of a box |
| Saw who it lived with | Housing it alone, in a pair, or in a group |
| Watched it move | Whether it needs height, depth, or distance |

**Nothing is locked.** A barely-studied animal can still be housed — badly, in a generic
enclosure, with a worse outcome. **The penalty is the animal's chances.**

### 4. Staff — **[v12]**

**The vet is the bottleneck.** One vet cannot treat two animals at once, and no amount of
money or land changes that.

**And the volunteers are who the player was as a teenager** — which quietly closes the loop
on the teen years: the unglamorous work you did for somebody else is now being done for you
by somebody who wants what you have.

*(The two routes are the core mechanic above, not a fifth constraint.)*

## The facility runs while you are away — and that is what fixes quarantine — **[v11]**

Quarantine is **two to six weeks**, which collides head-on with the no-idle-waiting rule.

**The resolution is that the campaign is what the player does while those weeks pass.** Real
durations are preserved exactly; nothing is compressed, and nothing is waited on. **The two
modes need each other** — the quest gives the facility time to run, and the facility gives
the quest somewhere to come back to.

## The return report — **[v6]**

**The facility runs while you are away, so coming back is an event.** A short report, not a
spreadsheet:

> *Eleven days. Four intakes. **BEAV-07** cleared quarantine and moved to conditioning. The
> barn owl with the wing did not make it. The badger you named last winter is still refusing
> the new enclosure.*

**Progress, loss, and one small stubborn thing.** It gives the two modes a rhythm — go away,
do a quest, **come back to a place that kept living.**

### Three things the facility leaves open

- **Euthanasia and mortality.** The return report already implies it. **This question has
  now arrived by three separate doors** and is still Ayr's
- **Does the player lay out buildings freely, or choose from prepared plots?** Free layout
  makes the two-routes puzzle real; prepared plots make it approachable
- **Can a facility fail?** Money running out, welfare collapsing, licence revoked

## Sandbox mode — **[v11]**

**Drop the economy, keep the biology.** Money, space and time limits go; welfare, species
suitability, expertise and consequences stay. **Removing the money is a fantasy. Removing
the biology would be a lie.**

### What it is actually for

**To let the player try what the campaign tells them to refuse.**

Build the elephant enclosure. Spend what you like. Then watch what happens to an animal that
walks fifty kilometres a day.

**Nothing lectures. The outcome is the argument.** Which means sandbox **proves the thesis
rather than breaking it** — and that is the opposite of what a free-build mode usually does
to a game with a conscience.

| | |
|---|---|
| **Unlocked early** | Because it teaches |
| **Separate save** | So it carries no autobiography |
| **Full codex granted** | You are not gathering knowledge here, you are using it |
| **Release still available** | The win condition does not change |

**PROPOSED, not ruled on:** letting sandbox hold species from The Vigil.

---

# 18. Tooling

| | |
|---|---|
| **`uncle-albert.bat`** | **The data check.** Group targets, the 1000 total, duplicates, species marked new that already exist, quest animals, and every badge member being real with tiers that match |
| **`cousin-bob.bat`** | **The document check.** File paths, the numbers in `HANDOFF.md` and this file, stale counts, documents cut off mid-sentence, artifact links, and sentences claiming a species is in a badge |

Both exit non-zero on failure and return identical output across runs.

**The rule behind both:** anything a checker can assert should stop being something a person
has to re-read. Re-reading prose is sampling, not scanning — it never converges. **Neither
tool can check whether a claim is true of the world.**

| File | Role |
|---|---|
| `design/GROUND_TRUTH.txt` | The species that exist. **Read from the running game, never parsed from `.jsx`** |
| `design/PENDING_MOVES.txt` | Decisions made but not yet in game data |
| `design/BADGES.txt` | Badge membership, the only source |
| `NEW_DIRECTION.md` | The design record — every *why* |
| `HANDOFF.md` | Orientation for a new session |

---

# 18b. Where the design actually stands — **[v6]**

> **Ayr:** *"You're asking for roof tile options before we've established where the roof
> comes from or if there even is a roof. Break it down sequentially more first."*

**This audit exists so the order is visible, and no earlier version of this document had
it — which made the design read as more finished than it is.**

### A word that was being used badly

**"Loop" is game-design vocabulary, not programming.** It means **the cycle of actions a
player repeats**, and designers name three sizes: the **core loop** (seconds to minutes),
the **session loop** (one sitting), and the **long loop** (the whole game).

**The rehabilitation sequence is not a loop. It is a pipeline** — intake, triage,
quarantine, rehabilitation, conditioning, outcome. An animal goes through it once and comes
out. **Calling it a loop hid the fact that the player's actual core loop has never been
designed.**

### The stack, bottom to top

| Layer | The question it answers | Status |
|---|---|---|
| **0 — Moment to moment** | How you move, what buttons exist, what the screen shows | **MISSING** |
| **1 — One encounter** | An animal appears. What happens? What is "catching"? | **MISSING** — some camera notes for the photographer, **nothing for researcher or guide** |
| **2 — One quest** | Start to finish | **BUILT** — the five-beat template |
| **3 — One session** | What an hour at the keyboard actually contains | **MISSING** |
| **4 — One life stage** | Twelve quests, a facility, collecting | Roughly built |
| **5 — The whole game** | Six stages, three careers, two modes, 1000 species | **BUILT** |

**Layers 2, 4 and 5 are built. Layers 0, 1 and 3 are empty — and they are the foundation.**

**This was flagged on day one and never done.** Idea 10, in Ayr's first batch of twenty:
*"I need to design the befriend encounter mechanic way different from the current game."*

**Everything above layer 1 attaches to the encounter contract rather than to the mechanic**
(§7), which is why the rest of the design survives the gap. But the gap is the gap.

---

# 19. Every open question, in one place

| # | Question | Blocking? |
|---|---|---|
| 1 | **The hook scene** — which animal, and what happens | The first hour |
| 2 | **The encounter mechanic** — deliberately deferred | Nothing yet |
| 2b | **What the researcher and tour-guide loops do minute to minute.** The photographer has a real-world reference *and* a game one; the other two have real references and **no worked design at all. This is the largest undesigned space in the project** | Two of the three careers |
| 2c | **What the codex actually is as a UI.** It carries the sourcing, the field guide, read-aloud, practice quizzes, badges and the resource section. **A lot of jobs for one system** | The codex |
| 2d | **When cultural consultation happens.** Early enough to shape the writing rather than review it afterwards — but it costs money, so it interacts with funding | Writing the quests |
| 2e | **The modular character rig** — must be settled before the first player sprite is drawn | Character art |
| 3 | **Can the player fail to advance?** Retake with a time cost is the middle path | Assessments |
| 4 | **Origin-language naming** for individual animals — needs proper sourcing | No |
| 5 | **The badge count** breaks the round-number rule | No |
| 6 | **Fluorescence** — restore *Blacklight*, or drop it | No |
| 7 | **The 44 remaining species** — some already claimed by badges | The roster |
| 8 | **`Only In Captivity`** needs an `EW` tag that does not exist in the data | The badge |
| 9 | ~~**Sprite terrain**~~ — **answered in v7.** Two assets: the current 1001 become codex plates, game sprites are a later pass without props. **Ayr's call to accept** | The HD-2D look |
| 10 | **Sandbox holding extinct species** — proposed, not ruled | No |
| 11 ~~**Euthanasia**~~ — **effectively resolved by option C.** It becomes an authored beat used once or twice at full weight, not a background system. What remains is only *whether to write those beats at all* | No |
| 12 | **What the items are** | No |
| 13 | **Layers 0, 1 and 3 are empty** — moment-to-moment, the encounter, and what an hour contains. **The foundation of the whole thing** | Everything eventually |
| 14 | **Does the child name the rescued animal**, before learning why that is a problem? | The childhood |
| 15 | **Is the childhood pet still alive later?** A cat dies somewhere in the adult stages | Mortality |
| 16 | **Free building layout, or prepared plots?** Free makes the two-routes puzzle real; plots make it approachable | The facility |
| 17 | **Can a facility fail?** | The facility |
| 18 | **Does the teen try all three careers** before choosing? | The teen years |
| 19 | **The naming rule reveals each animal's fate on arrival** — a name means staying, a number means going. Right, or does it give away an ending that should be earned? | The facility |

## Parked deliberately — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style species
into anime style. Euthanasia.

---

*End of document. The record of how any of this was decided is in `NEW_DIRECTION.md`.*
