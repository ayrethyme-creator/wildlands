# WILDLANDS

## Game Design Document

**Version 3.0 — third pass over the full record, 2026-08-27**
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


## The 48, chosen — **[v3]**

**Every one is real, and the codex credits the real people.** Four per biome, following the
impact ladder, no animal used twice in a biome.

### The Long Grass · savanna

| Stage | Story | Animal |
|---|---|---|
| **Local** | **The lights on the boma.** Herders killing lions that take cattle at night. Everyone is reasonable, and the answer belongs to a thirteen-year-old with flashing LEDs. **Solving it earns the savanna facility.** *Richard Turere, Kitengela, ~2011* | Lion |
| **Pattern** | **The dogs.** Not one farm but a district shooting cheetahs. The answer is not aimed at the cheetah at all — it is Anatolian shepherds placed with the herds. *Cheetah Conservation Fund, Namibia, since 1994* | Cheetah |
| **Programme** | **The poisoned carcass.** Poachers poison carcasses deliberately, because circling vultures show rangers where a kill happened. **Hundreds die at once, and several African species are down over 90%.** The work is building the institution — a poison-response unit, carcass monitoring, trained teams. **Villain: yes** | Vulture |
| **Law** | **The burn.** The ivory trade and the fight to change it internationally, culminating in the 1989 CITES ban and Kenya burning twelve tonnes of confiscated ivory in public **to prove the stockpile would never be sold.** **Villain: yes** | Elephant |

**The captive lion industry quest is deliberately not here.** It would repeat the lion and
break the no-animal-twice rule, and captive lion farms are **agricultural operations, not
wild savanna** — so it sits in The Furrows instead.

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
| **Law** | **Protection, removed.** Oman's Arabian Oryx Sanctuary was the first place ever struck off the World Heritage list, cut by 90% for oil prospecting in 2007. **Every other quest is about winning protection. This one is about losing it, legally and on purpose** | Arabian oryx |

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

### 4. The two routes

Above. It is the one that never relaxes.

## Sandbox mode

A free-build mode alongside the campaign, **with the economy dropped and the biology kept**
— constraints that are ecological rather than financial.

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
