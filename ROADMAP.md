# Wildlands — where this is going

Written August 2026, after the visual pass and the arcs. This is a record of
decisions, not a plan with dates. It exists so the next session does not have to
rediscover any of it.

---

## The one-line version

Wildlands becomes a game about a life spent learning animals, not a game about
catching them. The field guide stays. The battling becomes observation. The
gyms become life stages.

---

## What was decided

**The pull is the guide, not the catching.** The thing worth keeping from
Pokémon is the completionist drive attached to real knowledge. Everything else
is negotiable.

**Battle converts, it does not get cut.** The encounter machinery stays and
changes meaning. An animal has behaviours rather than moves — alarmed, curious,
defensive, feeding — and the player chooses an approach: hold still, circle
downwind, back off, wait. A wrong choice and it leaves, and you keep whatever
you had recorded by then. Types become temperaments. Stats become how hard a
thing is to observe: a skittish swift animal is genuinely harder than a placid
armoured one. This makes the natures system load-bearing instead of decorative.

**No knowledge quiz at the point of encounter.** Testing knowledge gates the
learning behind the learning. Instead the player chooses what to *record* while
the animal is doing something — what it eats, how it moves, who it is with,
what it does when it thinks nothing is watching. The knowledge is the output,
not the entry fee.

**Partial entries are correct.** No field biologist learns a species in one
sighting. Half an entry that reads "seen once, feeding, mid-morning" is what
real notes look like. Repeat encounters in different seasons, at night, with
young, fill more of it. That is the completion loop, and it has a reason to
exist.

**Research and arcs become one system.** Both are: go and find out, gather
evidence, decide. They should not be two mechanics.

**The life phases are the spine.** Not a layer on the region structure — the
replacement for it. Child, teen, young adult, adult, adult with influence,
elder. Each phase is a *constraint*, not a tutorial:

- Child — you cannot go far from home, and no adult believes you
- Teen — you can travel and volunteer, and you cannot sign anything
- Young adult — credentials, no power; you do fieldwork someone else publishes
- Adult — you run the project, and other people's budgets are the constraint
- Influence — you fund and enable; your hands leave the work
- Elder — you act only through people you taught

In the final phase the player does not solve the arc. Someone they trained
does, and how well depends on what was taught.

**The arcs already are this ladder.** Beeloud is one clearing and one
beekeeper's hives — a determined teenager could do it. The albatross arc needs
standing enough to get four fleets under different flags into a room. The
escalation was built before there was a frame for it, which is why the frame
fits.

**Money is not the currency.** The scarce things are time, attention, trust and
credibility, and each is period-appropriate. A teenager has time and no
credibility. An adult has credibility and no time. An elder has trust and
cannot do the work. Do not remove scarcity along with money — if nothing is
scarce, nothing is a choice.

**The species list.** 967 now, heading to an even 1000. Every one of them
catchable. No legendaries and no invented animals. Mythological creatures are
fine and stay — they are stories humans really told. The old backlog item about
~100 invented post-game creatures is dropped.

**The didacticism risk.** Games that set out to teach usually teach *at* people.
These arcs avoid it because they let the player be wrong and then explain why.
The life-phase frame is where a careers pamphlet could sneak in. The antidote is
the same one already in use: make each phase about what you cannot do yet, and
let the lesson arrive as frustration rather than instruction. Nobody needs to be
told a fourteen-year-old cannot get a permit. Let them try.

---

## The rule for everything built between now and then

There is a game being played right now — 784 of 967 befriended, and a Camino in
November it is going on. Nothing in the pivot is worth breaking that.

So, until the guide is finished:

**1. The field record is the thing that must survive.** Which species have been
met, their individuals, natures, and which arcs were completed. Everything else
in a save — position, items, badges, party — is engine furniture and can be
rebuilt. The record cannot.

**2. Build data, not mechanism.** Species, art, field guide entries, arcs and
INFO text all carry into the new game untouched. Anything written into those
files is safe. Anything written into the battle engine, the gym structure, or
the badge progression is at risk.

**3. Keep the seam clean.** The game is already split this way by accident —
parts 6 to 58 are mostly data, parts 4 and 5 are engine and view. Do not blur
that line. When something could live in either, put it in data.

**4. No new engine-shaped features.** More gyms, more badge gates, more battle
systems — those are the parts being replaced. Adding to them is spending on
something with a known end date.

**5. Safe to keep doing:** new species, new arcs, new field guide writing, art,
sound, UI polish, bug fixes, quality of life. All of it survives the pivot.

---

## Immediate practical need

An export of the field record that does not depend on the current save format.
The existing save code is excellent and is tied to this engine's shape; a
plain, versioned, human-readable record of *what has been met and learned* is
what carries 784 animals across a rewrite. This should exist before the Camino,
not after.

---

## The other roadmap

The separate question of getting from "Pokémon Red in development" to something
with Stardew's finish is its own document. Short version of where it landed:

- **Game feel** — hit-pause, particles, squash and stretch, feedback on every
  action. Largest perceived-quality gain per hour of work, and doable in the
  current codebase.
- **Audio** — probably 40% of why Stardew feels finished. Needs a composer;
  cannot be done in-house.
- **UI** — the menus are browser boxes and the map is now hand-drawn. They no
  longer match.
- **Renderer** — React re-rendering a grid of divs will not carry smooth camera,
  lighting, weather and particles at 60fps. The move is to swap the renderer for
  a canvas layer and keep all the game logic, which is the right job to hand a
  professional and does not touch any of the writing.

**Legal, and it is not who it looked like.** The rights holders are Nintendo and
The Pokémon Company, not Niantic. The Palworld case was patents, not copyright —
functional mechanics, specifically throwing a device to capture a creature and
summoning creatures to battle. This game befriends rather than throws, and every
sprite is original, which is a strong position. The mechanics worth checking
before building are riding, summoning implementations, and party-swap patterns.
One consultation with a games-IP attorney before going public is the cheapest
useful money in the whole project. Nobody involved in writing this document is a
lawyer.
