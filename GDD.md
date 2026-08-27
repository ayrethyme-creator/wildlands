# WILDLANDS

## Game Design Document

**Version 2.0 — second pass over the full record, 2026-08-27**
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

> **Version 2.0 note.** Version 1 was consolidated too quickly and missed whole systems —
> the careers as three separate games, the assessment model, the emotional thesis behind
> the pet sequence, the mentor, the signature ability, the provenance system, and how time
> passes. This pass went back through all 11,000 lines. Sections new or substantially
> rewritten in v2 are marked **[v2]**.

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
| **On the Brink** | 50 species still alive — critically endangered and extinct-in-the-wild. Unlocks after all twelve young-adult quests |
| **The Vigil** | 50 species that are gone. A memorial, not a collection |
| **The Telling** | 100 mythological creatures, one per culture, themed on understanding through stories |
| **The Record** | 50 fossil species across 13 geological periods |
| **The Breeding Centre** | 50 domestic breeds. Endgame unlock, appears in town |

### Caves — **CUT as a biome**

Ten species is too thin for a facility and an arc. **Caves become a site type inside other
biomes** — a place where a guaranteed encounter happens, alongside beaver ponds and moose
fields.

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
| Kid | ~1.5 | Choose a pet, make the first wild rescue, meet the mentor |
| Teen | ~2.5 | Choose the career, learn its verbs, choose friends. Second animal |
| Young adult | ~8 | Apprentice. Working under someone else's permit and name |
| Adult with skills | ~9 | Qualified. Your own projects, your own name on them |
| Adult with influence | ~10 | Professional. Money, access, power to change policy |
| Elder | ~6 | Mentor. Teaching, handing over, the long view |
| | **~37** | plus slack toward 40 |

**Childhood is four hours of a forty-hour game** — enough to matter, short enough that a
replaying player is not trapped in it.

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

# 5. The three careers — **DECIDED (Option B)** — **[v2]**

**This was the largest omission in v1.**

> **Ayr, idea 50:** *"Each career is more like a different game."* Not different classes.

**Three complete campaigns of roughly 40 hours each, ~120 hours for everything.** Each
plays the full arc through all six life stages.

The earlier recommendation was one campaign with guest chapters, on the assumption that the
split-perspective theme was the point and 120 hours was too much to ask. **Ayr's answer:
the theme is a bonus, not the goal, and 120 hours is fine if it is three different games
rather than one story told three times.**

### What that costs, and what it does not

| Shared across all three | Built three times |
|---|---|
| The world, terrain and generation | The core encounter loop |
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
| **Photographer** | **Observational.** Scout, read light and wind, position, wait, take the shot when the animal does something worth photographing | **A publishable frame** — sharp, well lit, ideally showing *behaviour* rather than a portrait |
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

### Threshold, not checklist

The player must log enough qualifying work to be assessed, but **chooses where**. All 48
quests exist; a single playthrough might need **15–20**. The remainder is replay content and
content for the other two careers.

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

### Field knowledge is the husbandry manual

**In Planet Zoo you look an animal's needs up in a menu. Here you have to have learned
them.** What was observed in the field *is* the care sheet, and difficulty changes as the
player gathers information and passes assessments.

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

### The naming rule

```
number at documentation   →   name at outcome
```

**Field records really are numbered when they are made.** Animals slated for release stay
numbered; the player names them at release. The number is the record; the name is the ending.

**Suggested names are drawn from the language of the place the animal actually comes from**,
as zoos really do. **OPEN / deferred** — this needs sourcing properly rather than automating.

---

# 9. The campaign — **DECIDED**

## 48 quests, four waves of twelve

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

**Per-biome targets are flexible at Ayr's discretion** — a guide, not a quota. **Interest
governs which species get made, not headcount.**

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

# 17. Sandbox mode — **DECIDED**

A free-build mode alongside the campaign, with **the economy dropped and the biology kept**.
The constraints that remain are ecological rather than financial.

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

# 19. Every open question, in one place

| # | Question | Blocking? |
|---|---|---|
| 1 | **The hook scene** — which animal, and what happens | The first hour |
| 2 | **The encounter mechanic** — deliberately deferred | Nothing yet |
| 3 | **Can the player fail to advance?** Retake with a time cost is the middle path | Assessments |
| 4 | **Origin-language naming** for individual animals — needs proper sourcing | No |
| 5 | **The badge count** breaks the round-number rule | No |
| 6 | **Fluorescence** — restore *Blacklight*, or drop it | No |
| 7 | **The 44 remaining species** — some already claimed by badges | The roster |
| 8 | **`Only In Captivity`** needs an `EW` tag that does not exist in the data | The badge |
| 9 | **Sprite terrain** — some sprites have ground baked in, which breaks billboarding. Scoped, unscheduled | The HD-2D look |
| 10 | **Sandbox holding extinct species** — proposed, not ruled | No |
| 11 | **Euthanasia** — deferred, less urgent under authored rehabilitation | No |
| 12 | **What the items are** | No |

## Parked deliberately — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style species
into anime style. Euthanasia.

---

*End of document. The record of how any of this was decided is in `NEW_DIRECTION.md`.*
