# HANDOFF — read this first

You are on **`Terrane_try1`**, the new game. `main` is the finished *Safari Saga* and is
**not** what is being worked on. Check the branch before anything else.

> Renamed from `wildlands-next` on 2026-08-28. `origin/wildlands-next` still exists and is
> not being updated — if a session is working there, it is on the old name.

This is **design work, not game code.** Nothing here compiles. No game code has been
written for the new game yet.

---

## Read `GDD.md` before anything else

**`GDD.md` is the design.** ~2,700 lines, **organised by system rather than by date**, and
it holds only what is currently true. Every section is marked **DECIDED**, **OPEN** or
**PROPOSED**, and all the open questions are collected again at the end.

**It is the answer to "what is this game?"** — read it, and you do not need to navigate the
record.

> **`NEW_DIRECTION.md` is the *record*, not the design.** 11,000 lines, append-only, in the
> order decisions were actually made, including the reversals. It holds every *why* — and it
> is too long to read. Search it for a topic when the GDD says something you want the
> history of.

**Where the two disagree, the GDD is current** — it has been reconciled against the full
record eighteen times, and each pass is listed in its own version note.

---

## The files that are authoritative

| File | What it is |
|---|---|
| **`design/GROUND_TRUTH.txt`** | The species that exist, by group. **Read from the running game, never parsed from `.jsx`** |
| **`design/PENDING_MOVES.txt`** | Decisions made but not yet in game data. Every fix lives here until applied |
| **`design/BADGES.txt`** | Badge membership, the only source. The page is generated from it |
| **`design/TAGS.txt`** | Conservation tags. `EW` today; Albert checks every tagged species is real, is in On the Brink, and matches the *Only In Captivity* badge exactly |
| **`design/tools/uncle_albert.py`** | The validator, and the last word on every number. Ayr calls it *"run it by Uncle Albert"*. It checks **the roster and the badges** |
| **`design/tools/the_librarian.py`** | **The fact check.** *"Run it by The Librarian."* It cannot tell whether a claim is true — it tracks **who checked what, against what source**, and fails when a checked sentence is edited underneath its check |
| **`design/CLAIMS.txt`** | The claims register, and the **TRAP** list: the distinctions this project has already got wrong once |
| **`design/BADGE_CARDS.txt`** | One card per badge membership. 430 to write, 3 written |
| **`design/FIELD_GUIDE.txt`** | **All 999 field-guide entries with their IUCN status, read from the running game.** Do not hand-edit and do not regex-parse the `.jsx` to rebuild it — `design/tools/read_field_guide.js` |
| **`GDD.md`** | **The design.** By system, current-only, everything marked decided / open / proposed. **Start here** |
| **`NEW_DIRECTION.md`** | The design *record*, ~11,000 lines, append-only with dated headers. Every *why*, including the reversals |
| **`design/tools/cousin_bob.py`** | **The document check.** *"Run it by Cousin Bob."* Verifies the docs still agree with the data |
| **`design/tools/README.md`** | **Read this before quoting any number.** Documents both traps and the correct method |
| **`design/new_species.md`** | The running list of species still to create |
| **`design/cut_species.md`** | What was cut, and why. Check before proposing a removal |

**Numbers come from Uncle Albert, never from either document.** `NEW_DIRECTION.md`'s prose
counts go stale — the banner at the top says so — and the GDD's numbers are only current
because **Cousin Bob asserts them against live data on every run.**

---

## Two rules that exist because they were broken

**1. Never quote a number you have not had Uncle Albert produce.**

```
uncle-albert.bat                       (double-click, or from the repo root)
python design/tools/uncle_albert.py    (exits non-zero if anything is wrong)
python design/tools/make_badge_page.py  (rebuilds badges.html from BADGES.txt)
python design/tools/make_roster_page.py (rebuilds the roster page)
cousin-bob.bat                          (checks the DOCS still match the data)
python design/tools/cousin_bob.py
```

Three wrong species counts were published to Ayr in one session — 461, 516, 465 — all
from regex-parsing JavaScript. **The DEX exists in two shapes** (object literals *and*
constructor calls) and a regex that matches one silently drops the other. Ayr caught it
three times. That is what the tool is for.

**Never hand-edit the badge data inside `design/badges.html`.** It is generated from
`design/BADGES.txt` by `make_badge_page.py` and will be overwritten. Edit the txt, rebuild,
then run it by Uncle Albert.

**Run both before quoting anything.** Albert checks the data adds up. **Bob checks that
what is written about the data is still true** — the numbers in this file **and in
`GDD.md`**, the file paths
in every current-truth doc, whether a document has been cut off mid-sentence, and any
sentence claiming a species is in a badge. Bob exists because on 2026-08-27 four
statements in these documents had quietly stopped being true and no amount of re-reading
was going to reliably find the next one.

**2. Never regex-parse `game.part*.jsx`.** Serve the repo and read `window.__DEX` from
`gallery.html`. `design/tools/read_ground_truth.js` is the sanctioned snippet.

---

## Two documents at the root that will mislead you

**`README.md` describes the wrong game.** It is *Safari Saga* — eight biomes, eight gyms,
an Elite Four. That is `main`, the finished game. **It is not what is being built.**

**`ROADMAP.md` is from 2026-08-05 and has not been touched since.** It predates the
1000-species restructure, the badges, the three careers, the facility system and the life
stages. Some of its direction still holds — observation instead of battling, life stages
instead of gyms — but **treat it as history, not as a plan.** `NEW_DIRECTION.md` supersedes
it everywhere the two disagree.

---

## How Ayr wants to be worked with

These are in memory too, but they matter enough to repeat:

- **Ayr is nonbinary and uses they/them** — in chat, in commits, in docs, in notes.
- **Never say something is infeasible.** Say what it costs in time and review. That part
  is true; the verdict is not yours to give.
- **Flag ideas as ideas.** Say *"I have an idea"* and wait. Do not weave unprompted
  invention in as though it were settled. **In the design phase this is welcome now and
  then. Once game code starts, stop entirely** — it is expensive there.
- **Ayr is not a programmer.** No jargon without explaining it. They playtest themselves
  and catch real bugs; take their reports seriously and check them.
- **Never cut a species Ayr may already have caught** in the old game.
- **Round numbers are firm.** 1000 total: 700 in-game, and 50/50/100/50/50 after.

### Two rules that bite as soon as work resumes

**Every field-guide entry states how many relatives the animal has** — the genus count,
plus the wider group where that is more useful. Ayr asked for this on 2026-08-27 because
it answers a question readers always have: *is this a one-off, or one of a crowd?*

> Panther Chameleon — one of about 23 *Furcifer* chameleons, and one of roughly 200
> chameleons.

**And from 2026-08-29 that count is on the card, not only in the prose — with two names
above it.** GDD §10 has the full rule:

```
TAPIR                    the plain name leads
  Malayan Tapir          the species beside it
  one of 4 tapirs        the context
```

**The roster data does not change and the generics audit stands** — the entry *is* the
Malayan Tapir, and **badges keep the specific name.** What changed is which name the reader
meets first. **The count is the payload:** *End of the Line* only means anything to a player
who has already read "one of 4 tapirs" on a dozen other cards. A badge cannot explain
itself.

**Interest governs which species get made, not headcount.** The per-biome floor was a
working guide and is **explicitly not a target** — a biome gets what is worth having in
it. Ayr decides.

---

## The forty-four are real, 2026-09-02 — **and the old game may now exceed 1000**

`game.part68.jsx` puts forty-four species into the game data: DEX entry, sprite,
types, base stats, catch rate, and a full field-guide entry with diet, habitat and
IUCN status. The sprites were made here; the entries were written by Eric's codex.
They are placed by biome at the foot of `design/biome_assign.js`.

**Ayr's ruling: the thousand may be exceeded, and only in the old game.** Safari
Saga now holds **1044** species. **Terrane still holds 1000 and nothing about it
moved** — these forty-four were always counted inside the thousand, as `new>`
promises in `design/PENDING_MOVES.txt`. What changed is that the promises became
animals. Run Uncle Albert: he still says 700 + 300.

**This is the first time production has moved a design record**, and it needed a
new idea in the pipeline. A `new>` line can leave `PENDING_MOVES.txt` two ways: it
can be **forgotten**, which is the failure Cousin Bob was built to catch, or it can
be **kept**. A kept promise is now retired in place with the prefix
`! APPLIED <date> - `, so the promise and its reasoning stay readable, and Bob
accounts for every batch as **still owed plus made** rather than pipeline alone.
He also asks the running game whether each species marked APPLIED is really there,
so a relabelled promise that was never built fails rather than passes.

**Six of the earlier promises are still owed** and did not travel with the batch,
because they entered the pipeline before it: Little Blue Penguin, Plains Pocket
Gopher, Gemsbok, Mexican Redknee, Iberian Lynx and Wood Frog.

**One open item, and it is small: the Opah has no IUCN status.** Every other one of
the forty-four carries one. `Lampris incognitus` was described in 2018 and may
simply not be assessed — but the status field is empty rather than saying so, and
`design/CLAIMS.txt` already lists "extinct in the wild is a listing, not a figure
of speech" as a trap. **Do not guess it.** It is the one thing in this batch
waiting on a decision.

---

## Where things stand, 2026-08-29 — **the roster is closed**

Run Uncle Albert for the live version. **Cousin Bob checks these exact numbers**, so if they drift he fails rather than letting them rot:

```
THE 700     biomes 650 + The Kept 50 = 700        0 still to create
THE 300     Vigil 50 · On the Brink 50 · The Telling 100
            The Record 50 · The Breeding Centre 50
BADGES      50        easy 10 · medium 25 · hard 15 · 4 tiered
            324 species referenced, 324 exist, 0 to create
```

**The floor is 45 and every biome clears it.** Coast and open ocean sit exactly on it;
rainforest 93 and savanna 75 sit well above, which is true to the world rather than
overweight. **Do not reopen the counts** — if a species is added, one comes out.

### The next work, and the order for it

**Three layers of the design are empty, and they are the foundation.** The GDD's *Where the
design actually stands* section has the full audit; the short version:

```
Layer 0  moment to moment    MISSING
Layer 1  one encounter       MISSING  <- start here
Layer 3  one session         MISSING
Layers 2, 4, 5               built
```

**Layer 1 is deferred until coding starts — Ayr's call, 2026-08-29.**

> *"Layer will happen when I'm ready. I don't think I'll be ready to design the 3 career
> encounter systems until we start coding. I need to see visually how the game will look in
> order to plan it."*

**Do not open Layer 1 as a design exercise on paper.** It is not blocked by missing
research or a missing decision — it is blocked by **Ayr needing to see the game move.**
The encounter is the one system whose feel cannot be judged from a document, and three of
them have to be told apart by feel.

**What that makes the next work:** the thing that puts something on screen. The GDD already
names it — *build a one-biome vertical slice early*, and the hook scene, which is
animal-led and therefore **needs no character art at all.** Layer 0 (movement, camera,
what is on screen) comes with that slice rather than before it, and Layer 1 follows once
there is something to look at. Then Layer 3, then the open questions.

**The encounter *contract* is fixed even though the mechanic is not**, which is why the rest
of the design is safe to keep building. Do not confuse the two.

### In flight

- **The roster is shut and the badges are grounded.** Closed 2026-08-29. Every slot in the
  700 and the 300 has a name, and **every badge member is a real species — 324 referenced,
  324 exist, none starred.** For the first time there is nothing on either list waiting to
  be invented. What remains is *making* them: art and field-guide entries. That is
  production, not design, and it does not move a number.
- **The badge count is settled at 50.** Ayr cut *Armour* and *Rare Poison* on 2026-08-28,
  which took 52 to 50 and closed the round-number question.
- **Two badges now hold three members: *Dad's Turn* and *Heat Vision*.** Ayr ruled on
  2026-08-29 that Dad's Turn stands at three rather than invent a fourth male-pregnancy
  species. Heat Vision fell to three the same way, when *Green Tree Python* was dropped
  because Ball Python already sat in the badge. **Heat Vision was not put to Ayr** — it is
  the same shape of call, applied for consistency, and it is reversible. Albert warns on
  both and does not fail.
- **Fluorescence — ruled 2026-08-29: leave it.** *Blacklight* is not restored and
  fluorescence goes unmentioned in the badges. The Deathstalker carries no badge, and that
  is intended rather than an oversight. **The accuracy half stands and is not reopenable:**
  *Lights On* is bioluminescence only — light the animal makes — and a scorpion glows
  because a UV lamp is pointed at it. **Do not put the Deathstalker back.** The six species
  that would have carried the badge all exist (Deathstalker, Platypus, Panther Chameleon,
  Atlantic Puffin, Flying Squirrel, Epaulette Shark), so restoring it later costs no new
  art — it costs a badge slot out of the fifty, which is why it was declined.
- **`Only In Captivity` is closed.** The `EW` tag now exists —
  **`design/TAGS.txt`**, added 2026-08-29 on Ayr's instruction. Ten species are tagged,
  seven formally listed Extinct in the Wild and three that are EW as a population rather
  than as an IUCN listing (Barbary Lion, Northern White Rhino, South China Tiger), each
  with the caveat recorded in the file. **Uncle Albert now checks three things** rather
  than trusting a hand-typed list: every EW species is real, every one sits in On the
  Brink (which admits on status alone, CR **or** EW), and the badge membership is exactly
  the tagged set — so the two cannot drift apart in silence. The file also records the
  five species deliberately **not** tagged and why, Przewalski's Horse and the Arabian
  Oryx among them.
- **`Tardigrade` / `Water Bear` — ruled, 2026-08-29. Either name is fine.** Ayr:
  *"people only know them by those names."* The phylum fact goes in the **description**,
  not the name. Worth remembering as a general principle: the naming rule exists to help a
  reader, so **a name nobody recognises is not more specific, it is just quieter.**
- **The badge member card, decided 2026-08-29 — and it is the next real body of work.**
  Every *membership* gets a card explaining how that species meets that concept — **430
  cards across 324 species**, because a species in four badges is claimed for four reasons.
  Ayr: *"it's not just a title with names."* **This is what the generics audit was for** — a
  generic name cannot carry a claim, which is why individual species had to be assigned.
  **All three follow-ups are settled:** the text lives in `design/BADGE_CARDS.txt`, the link
  runs **both ways**, and **pair badges name their partner** (*Same Answer Twice*, *The
  Switch*, *The Island Rule*). Albert reports coverage — **3 of 430**. Full reasoning and
  the worked examples are in GDD §12.
- **The Librarian now reads the field guide, and the queue is the real one.** Exporting
  all 999 entries took it from 27 claims to **980**, of which **974 are untriaged and 358
  make a superlative or absolute claim**. **That is a work queue, not a fault** — it is
  simply the first honest measurement of how much of this game has never been checked.
  Run `librarian.bat` for the live figure.
- **The entries are superlative-heavy on purpose, which is why this matters.** Ayr asked
  from the start for *unique* facts rather than the usual ones, so the writing reaches for
  "the only", "the largest", "the first". **The most distinctive content in the game is
  therefore also its highest-risk content**, and a wrong superlative in a game about facts
  is the most damaging error available.
- **`EW` existed in the game data the whole time, and this file said it did not.** The
  status lives on every entry as `.s`, and the game holds **13** EW species against the
  design's **11**. The four disagreements are now listed by **Uncle Albert check 11**, which
  fails unless each one is explained in `TAGS.txt`, and all four are explained. Three are
  deliberate (Przewalski's Horse, the scimitar-horned oryx and the Guam rail were EW and
  have been downlisted since; the game data is stale); the fourth is the Northern White
  Rhino, tagged EW as a population where the game says CR. **The snail is resolved** — Ayr
  named it `Partula nodosa` on 2026-08-29, which is formally Extinct in the Wild, sits in On
  the Brink where EW belongs, and joins *Only In Captivity*. No roster count moved.
- **The art is being made now, and the deep sea is parked.** All 183 outstanding species
  have descriptions in `design/art_prompts/`, and `design/art_pipeline/run_all.py` is
  rendering the rest of the roster unattended. **The deep sea batch is finished and Ayr
  has ruled the whole set wrong** — *"I think the deep sea ones will take careful one by
  one building."* **Do not bulk-regenerate it**; `design/art_prompts/REVIEW_deepsea.md`
  records the ruling and why the review that preceded it was too lenient. Every other
  biome continues as a normal batch. **`design/art_prompts/ONE_BY_ONE.txt` is the live
  queue: 79 species that bulk fixing could not get right, to be rebuilt individually with
  reference pictures open.**
- **The forty-four arrived with their own art and their own writing.** Sprites for all of
  them are in `art/` under the game's short DEX keys, and Terrane already held most of the
  same images under its longer names — so this batch cost the one-by-one queue nothing.
- **Items in the world** — committed as a principle. **No item ideas until Ayr asks.**

### Parked — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style species.

**Euthanasia is no longer the open question it was.** Choosing an authored rehabilitation
pipeline rather than a simulated one dissolved it: it becomes a story beat used once or
twice at full weight, not a system running in the background. Do not reopen it as a systems
question.

---

## One environment gotcha that keeps costing time

**Large quoted heredocs fail in this Git Bash setup.** They break apart and the shell
starts executing the payload. It has happened repeatedly.

**Use the Write tool to a scratchpad file, then `cat file >> target`.** For multi-line
commit messages, `git commit -F <file>` is safer than `-F -` with a heredoc.

Push needs the timeout guard:

```
GIT_TERMINAL_PROMPT=0 timeout 90 git push origin wildlands-next
```

---

## The published pages

Kept in `design/LINKS.md`. **The GDD is published as a readable page** — that link is the
one to send anybody who asks what the game is. The badge book and the roster are the other
two worth opening.
