# WILDLANDS

## Game Design Document

**Version 1.0 — consolidated 2026-08-27**
Design owner: Ayr · Working title: *Wildlands* · World: **Terrane**

---

### How to read this

`NEW_DIRECTION.md` is the design **record** — 11,000 lines, append-only, in the order
decisions were actually made. It holds every *why*, including the reversals.

**This document is the design.** It is organised by system rather than by date, and it
holds only what is currently true. Where the two disagree, the record explains the
history and this document states the outcome.

Every section is marked:

| | |
|---|---|
| **DECIDED** | Ayr has settled it. Build to this |
| **OPEN** | A real question still owed an answer. Listed again at the end |
| **PROPOSED** | Suggested and not yet ruled on. Not to be built |

**Numbers in this document are checked by tooling**, not typed from memory. Run
`uncle-albert.bat` for the data and `cousin-bob.bat` for the documents.

---

# 1. The game in one page

**Wildlands is a game about a life spent learning animals, rather than a game about
collecting them.**

The player lives one character from childhood to old age across six life stages, working
in one of three real wildlife professions. They document 1000 real species, take on 48
quests drawn from real conservation history, and run a network of twelve wildlife
recovery facilities.

### The three pillars

| | |
|---|---|
| **Learn** | Every animal, badge, quest and codex entry teaches something true. The educational content is the content, not a layer on top |
| **Live** | The player ages. Their body, their name, their gender, their skills and their reach all change, and each life stage offers new choices |
| **Give back** | The win condition is release. The animals you keep are the ones that could not go home |

### The inversion the whole game rests on

**Keeping an animal is a failure state wearing the costume of a reward.**

Every resident of a facility is one that could not be sent back. The collection is a
record of the ones that did not make it home — which is exactly true of real sanctuaries,
and the opposite of how every other collection game works.

### Elevator

> You will spend fifty hours photographing, identifying and caring for real animals — and
> then the game tells you that the real version of everything you just did is open to you,
> today, and is used by actual researchers.

---

# 2. Platform and style — **DECIDED**

| | |
|---|---|
| **Engine** | **Godot 4.** MIT licensed, native 2D, exports to desktop and web |
| **Style** | **HD-2D** — sprites billboarded in lit 3D environments, in the register of *Cult of the Lamb* and *Don't Starve* rather than the pixel art of *Octopath Traveler* |
| **Assets** | **The ~1000 existing sprites are kept.** That is the entire reason this is achievable |
| **Audio** | **No voice acting.** Music matters and carries the emotional load |

### The resolution finding

Sprites are currently **256×256** — fine flat, borderline in a lit 3D scene at 1080p+.
It is fixable without re-authoring: the generator renders at **1024×1024** and a
post-process step reduces it, so the ceiling is a setting. **288 originals survive at
1024**, and **all ~1009 prompts survive** across 37 batch files. The rest can be
regenerated at full resolution with the same prompts and the same style.

### Sprite terrain — **OPEN**

Some sprites were generated with ground, sticks and plants baked in; others are clean
cut-outs. Baked terrain breaks a billboarded sprite in a lit 3D scene. **The affected set
is knowable rather than mysterious**, and a terrain on/off pass is the fix. Not yet
scheduled.

---

# 3. The world — **DECIDED**

## Terrane

**An alternate Earth**, not another planet and not present-day Earth with a hidden
continent. The player is never given a lecture about it; the world simply is what it is,
and the names do the work.

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

**The Dark and The Blue sitting beside each other** gives the two ocean regions a
relationship rather than two unrelated labels.

### The thirteenth region and the postgame

| Area | What it holds |
|---|---|
| **On the Brink** | 50 species that are still alive — critically endangered and extinct-in-the-wild. Unlocks after all twelve young-adult quests |
| **The Vigil** | 50 species that are gone. A memorial, not a collection |
| **The Telling** | 100 mythological creatures, one per culture, themed on understanding through stories |
| **The Record** | 50 fossil species, spread across 13 geological periods |
| **The Breeding Centre** | 50 domestic breeds. Endgame unlock, appears in town |

### Internal terrain

Biomes have internal terrain rather than being flat fields — and this now carries weight,
because **items are hidden in the world** (§12). Maps must be built to be *searched*, not
only looked at.

### Caves — **CUT**

Cut as a biome. Eleven regions became twelve when the deep sea was added.

---

# 4. The player — **DECIDED**

## Six life stages

```
child  →  teen  →  young adult  →  adult with skills  →  adult with influence  →  elder
```

**The player character ages, and each stage presents new choices.** Appearance is
customisable at every stage — **including gender, offered quietly rather than announced**.
One body shape per age, with details chosen.

## Three careers

All three are real professions with real, documented career ladders — **so the life
stages did not need inventing, they were taken from how these jobs actually work.**

| Stage | Photographer | Researcher | Tour guide |
|---|---|---|---|
| Child / teen | First camera; learning to sit still | Collecting, noticing, a first notebook | Knowing your own patch |
| Young adult | Amateur, building a portfolio | Field assistant on someone's project | Apprentice guide, logging hours |
| Adult / skills | Selling stock; first commissions | Running a study; publishing | **Qualified field guide (FGASA NQF2 → NQF4)** |
| Adult / influence | Assignments, competitions, a name | Principal investigator; grants; students | Professional and trails guide, on foot |
| Elder | Judging, mentoring, teaching fieldcraft | Emeritus; the long dataset | Trainer and assessor of new guides |

**Southern African guiding is the most formalised of the three.** FGASA runs graded
qualifications the game borrows outright.

### The photographer's ethics are game rules

The governing principle in the real codes of practice is blunt: **"the welfare of the
subject is more important than the photograph."** Hides, camouflage, and reading wind
direction so your scent does not carry. Baiting is a real ethical violation and therefore
a natural game rule.

---

# 5. The opening hour — **DECIDED**

**The first hour decides whether anyone plays the rest.** Sequenced:

```
1  Hook scene            animal-led, no player character. Music. Questions you want answered
2  Choose your pet       detailed, customisable, and you name it
3  Design your child     appearance, name, gender
4  Pet meets child       the first scene is the two of them
5  The codex opens       read your pet — and the pets you did NOT choose
6  Tutorial              the codex, then walking the house and the world
```

### Why the pet comes before the character

The player commits to something they care about **before** they are asked who they are.
Choosing the animal first makes the character's identity an answer to a relationship
rather than a form to fill in.

### The hook scene — **OPEN**

Animal-led and music-forward is decided. **Which animal, and what happens, is not.**
Ayr has explicitly deferred this.

### The black cat carries the badge tutorial

The black cat is a **coat option on House Cat**, not a species — so it needs no catching.
Choosing the black coat, *or* reading the House Cat codex entry, fires the player's first
badge and explains the badge system. If neither has happened by the end of the tutorial,
**the badge lights up on its own.**

The player learns *"black cats are feared for no reason"* — and **then** *"that was a
badge."* A tutorial that opens with an achievement menu is a menu.

---

# 6. The roster — **DECIDED**

## 1000 species exactly

```
THE 700   twelve biomes  +  The Kept (50 domesticated)
THE 300   On the Brink 50 · The Vigil 50 · The Telling 100
          The Record 50 · The Breeding Centre 50
```

**Round numbers are firm.** Current standing is checked by Uncle Albert, not asserted
here — as of consolidation, 656 of the 700 exist and 44 remain to be created.

### Every animal is an individual

Every main-game animal gets **a name and a short story explaining why it is at a
sanctuary**, so the player can visit it, feed it, give it enrichment, and see its
signature ability.

### The naming rule

```
number at documentation   →   name at outcome
```

A number is assigned automatically when the animal is documented — **field records really
are numbered when they are made.** Animals slated for release stay numbered; the player
names them at release. The number is the record; the name is the ending.

### Released animals stay visitable

Beaver ponds, moose fields, stretches of ocean. Release does not mean the animal is gone
from the game.

### Life stages

**Not a separate roster.** Where applicable, a species gets a baby version of itself
attached to the parent entry. Life stages count toward nothing.

---

# 7. Encounters — **DECIDED**

**The encounter mechanic itself is deliberately not designed yet.** Ayr's position: one
can design an entire Pokémon game without knowing what happens when you meet a wild
Pokémon. What the rest of the design needs is the *contract*, and that is settled.

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

**Everything above this attaches to the output, not to the mechanic.** Careers,
collecting, facility unlocks, signature abilities and the naming rule are all safe
regardless of what the encounter turns out to be.

### The guide page appears immediately

That is the instant curiosity is highest, and it is exactly when a nature documentary puts
up its caption. Two constraints so it survives being done 700 times: **dismissible
immediately**, and **shown once** — a second encounter with the same species must not
reopen it.

## Two kinds of species

| | Can be brought to a facility | Cannot be captured |
|---|---|---|
| Who | Most species | Mostly large ocean and deep-sea animals |
| Selecting it | Takes you to **its enclosure** | Gives **information about next steps** |
| Later | — | Unlocks **"visit the animal's location"** |
| The visit | — | Cut scene, then you are shown *in* that location and interact from within it |

**The test is transport, not suitability.** Elephants, great apes and polar bears are
captured and moved in real life and often need to be. The animals that stay wild are the
ones that **would die in transport** — blue whale, great white shark, blobfish.

---

# 8. Facilities and the sanctuary — **DECIDED**

## A recovery centre, not a zoo

A zoo acquires and displays. **A recovery centre takes animals in, works on them, and
tries to give them back** — which is a loop, and a zoo is not.

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
survives far better; hard release is cheap, fast and worse. **Non-releasable animals
stay** and become ambassadors doing education work.

### The consequence that needed no inventing

**Imprinted animals cannot be released.** An animal hand-reared too closely stops
recognising itself as wild, and there is no undoing it.

So the most emotionally satisfying act available — bottle-feeding an orphan — **carries
its own real consequence.** Raise it right and it goes home and you lose it. Raise it too
close and it stays with you forever, and now you know why. That is how it actually works.

### Field knowledge is the husbandry manual

**In Planet Zoo you look an animal's needs up in a menu. Here you have to have learned
them.** What was observed in the field *is* the care sheet, and difficulty changes as the
player gathers information.

## The sanctuary is a mode, not a second campaign — **DECIDED**

This was a genuine design error, caught by Ayr and fixed. Three things were broken:

1. **Fiction** — 700 species through one centre means personally rehabilitating one of
   every species on earth. Real centres take local animals.
2. **Clock** — 2–6 week quarantines collide head-on with the no-idle-waiting rule.
3. **Budget** — 700 individuals at two minutes each is 23 hours *before* any rehab loop.

**The 48-quest campaign is the spine and stays as costed. The sanctuary is a second way
to play** — unlocked early, running alongside, with no completion requirement and no upper
bound. This is the *Planet Zoo* shape: a ~40-hour campaign against a 212-hour average
tracked playtime. **The long tail was never in the story.**

### The rehabilitation mini-game — **DECIDED (Option C)**

**Authored, not simulated.** The capture → rehabilitation → release pipeline exists for
**story animals only**. It is not a systemic mini-game applied to all 700 species, which
Ayr never committed to and which would have been an enormous second game.

---

# 9. The campaign — **DECIDED**

## 48 quests, four waves of twelve

```
Young adult        12 quests, one per biome    local change      -> earns all 12 facilities
Adult / skills     12 quests, one per biome    the pattern at scale
Adult / influence  12 quests, one per biome    establishing programmes
Elder              12 quests, one per biome    law and policy
```

**Four waves of twelve, not twelve sets of four.** The consequences:

- **All twelve facilities are earned during young adulthood.** Later stages develop them
  rather than acquire them, and specialisation arrives with the facility — each earned in
  its own biome.
- **The world opens wide and early.** Twelve quests in any order; the player picks their
  route instead of walking a corridor.
- **The impact ladder becomes literal.** You fix a fence in every biome on earth before
  you understand a single pattern at scale.
- **On the Brink unlocks after all twelve** — the wave after the last wave.

### Gating is by capability, not difficulty

Order is free; reach is not. The water ladder gates the wet biomes: reef and kelp need the
**teen open-water certification**, and the deep sea needs instruments and a boat.

### Every quest is real

The 48 are drawn from documented conservation history, and **each ends by naming the real
people and organisations involved** — which is what makes the codex resource section a
collation rather than new research.

---

# 10. Badges — **DECIDED, count OPEN**

**An achievement system that is actually a curriculum.** Each badge is a concept in
biology, and **the set you must assemble to earn it is the lesson.**

Seven categories: Reproduction, Senses, The body, Evolution, Behaviour, Conservation,
Extremes.

**Duplicates across badges are deliberate.** An animal demonstrating four concepts appears
in four badges. The overlap is the point.

### Tiering

Large badges tier — bronze, silver, gold — which gives an easy first rung and a hard last
one inside a single badge.

### The hardest one

**Bad Reputation**, 24 members across three mechanisms: feared for the name, feared for the
face, feared by folklore. It is the only badge whose lesson is about the player rather
than the animal — **fear has a body count.** It loops into the mountains quest, where
99% of South Asia's vultures died to diclofenac and human rabies deaths rose behind them.

### Governance

`design/BADGES.txt` is the only source. The badge page is generated from it and **Uncle
Albert verifies every member is a real species.**

### **OPEN** — the count

The total currently **breaks Ayr's round-number rule**. Recorded deliberately; not
resolved.

### **OPEN** — fluorescence

*Blacklight* was cut and the Deathstalker was moved into *Lights On*, which is wrong — a
scorpion glows because a UV lamp is pointed at it. It has since been removed from *Lights
On* and now sits in **no badge at all**. Ayr's ruling is owed: restore *Blacklight* with
puffin bill, chameleon bones and platypus fur, or let fluorescence go unmentioned.

---

# 11. The codex — **DECIDED**

## The field-guide writing rule

**Every entry states how many relatives the animal has** — the genus count, plus the wider
group where that is more useful.

> Panther Chameleon — one of about 23 *Furcifer* chameleons, and one of roughly 200
> chameleons.

It answers a question readers always have and field guides rarely do: **is this a one-off,
or one of a crowd?** It also surfaces the animals that are the last of a whole branch.

## The resource section

**This is where the game stops being a game and becomes useful**, and it is where the
stated purpose — *a road map for youth wanting to get into the animal industry* — finally
lands.

| | |
|---|---|
| **The organisations from the quests** | Already named and sourced. The player has *met* them before seeing the list |
| **What you actually study** | The real qualification ladders, FGASA included |
| **What you can do this weekend, free** | **The most useful page.** eBird, iNaturalist, Zooniverse, ringing groups, toad patrols, beach cleans, whale-shark photo-ID |
| **Where to give** | With the caution below |
| **What to read and watch next** | The books, papers and documentaries behind the quests |

### Why the citizen-science page matters most

A young player does not need a donate button — **they have no money.** They need the
answer to *"what can I do now?"*, and citizen science is the only honest answer that does
not require being eighteen or employed. **And it closes the loop the whole game is built
on.**

### Two cautions

**Recommending charities is a responsibility.** Name the organisations that appear in the
quests, because their inclusion is a matter of historical record rather than endorsement.
Say plainly that the list is *"organisations this game tells stories about"*.

**Links rot and this game has a multi-year life.** Names survive; addresses do not. Name
every organisation in full and use **one maintained page** as the single outbound link.

---

# 12. Items in the world — **DECIDED as principle**

| | |
|---|---|
| **Items exist** | The game has findable objects, not only animals |
| **Found in the world** | Placed on the map, discovered by going somewhere |
| **Exploration is the point** | Their job is to make walking off the path worth doing |
| **They feed the mechanics** | Encounters, or whatever the systems become |

**What the items are is deliberately not decided.** No item ideas until Ayr asks.

**Recorded now because it constrains map design, and map design comes first.** A world
built to be looked at and a world built to be searched are not the same world. It also
gives every biome a second job: until now a biome was where its species live; now it is
also somewhere you comb.

---

# 13. Sandbox mode — **DECIDED**

A free-build mode alongside the campaign, with **the economy dropped and the biology
kept**. The constraints that remain are ecological rather than financial.

### **PROPOSED** — sandbox holds the extinct

Letting sandbox hold species from The Vigil is proposed and not ruled on.

---

# 14. The author in the game — **DECIDED**

Ayr appears as an NPC: **an adult with power, not an elderly mentor.** The NPC **does not
age** and visits in certain scenes at the same age throughout.

**At the end, in a cut scene, the player character approaches the NPC — and the NPC
becomes video of Ayr**, explaining why they made the game, what it is to them, and what it
could mean to anyone playing.

Ayr's own framing, and the reason it works:

> *"Not as symbolic and meaningful as all your suggestions. But reality. I'm watching the
> game develop because I'm making it."*

The NPC is **not made important to the plot**. It is a constant easter egg, not a
character with a role.

---

# 15. Production and tooling

## The timeline

**Roughly a year is defensible, not "years".** Eric's position, and the repo supports it.
The 1000 sprites already exist; the prompts already exist; the engine is free.

**On cost language:** the rule in this project is to say what something costs in time and
review, never that it is infeasible.

## The two checkers

| | |
|---|---|
| **`uncle-albert.bat`** | **The data check.** Group targets, the 1000 total, duplicates, species marked new that already exist, quest animals, and every badge member being real with tiers that match |
| **`cousin-bob.bat`** | **The document check.** File paths that exist, the numbers in `HANDOFF.md`, stale counts, documents cut off mid-sentence, artifact links, and sentences claiming a species is in a badge |

Both exit non-zero on failure and return identical output across runs.

### The rule behind both

**Anything a checker can assert should stop being something a person has to re-read.**
Re-reading prose is sampling, not scanning — it never converges. A list of assertions
does. When a fact keeps going stale, do not resolve to be more careful with it; move it
somewhere a script can see it.

**Neither tool can check whether a claim is true of the world.** *"Elephants have
menopause"* is false and no tool will say so.

## Source files

| File | Role |
|---|---|
| `design/GROUND_TRUTH.txt` | The species that exist. **Read from the running game, never parsed from `.jsx`** |
| `design/PENDING_MOVES.txt` | Decisions made but not yet in game data |
| `design/BADGES.txt` | Badge membership, the only source |
| `NEW_DIRECTION.md` | The design record — every *why* |
| `HANDOFF.md` | Orientation for a new session |

---

# 16. Every open question, in one place

| # | Question | Blocking? |
|---|---|---|
| 1 | **The hook scene** — which animal, and what happens | The first hour |
| 2 | **The encounter mechanic** — deliberately deferred | Nothing yet |
| 3 | **The badge count** breaks the round-number rule | No |
| 4 | **Fluorescence** — restore *Blacklight*, or drop it | No |
| 5 | **The 44 remaining species** — some already claimed by badges | The roster |
| 6 | **`Only In Captivity`** needs an `EW` tag that does not exist in the data | The badge |
| 7 | **Sprite terrain** — the on/off pass is scoped but unscheduled | HD-2D look |
| 8 | **Sandbox holding extinct species** — proposed, not ruled | No |
| 9 | **Euthanasia** — deferred, and less urgent under Option C | No |
| 10 | **What the items are** | No — principle is enough for map design |

## Parked deliberately — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style
species into anime style. Euthanasia.

---

*End of document. The record of how any of this was decided is in `NEW_DIRECTION.md`.*
