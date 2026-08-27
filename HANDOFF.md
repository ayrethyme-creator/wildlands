# HANDOFF — read this first

You are on **`wildlands-next`**, the new game. `main` is the finished *Safari Saga* and is
**not** what is being worked on. Check the branch before anything else.

This is **design work, not game code.** Nothing here compiles. No game code has been
written for the new game yet.

---

## The files that are authoritative

| File | What it is |
|---|---|
| **`design/GROUND_TRUTH.txt`** | The species that exist, by group. **Read from the running game, never parsed from `.jsx`** |
| **`design/PENDING_MOVES.txt`** | Decisions made but not yet in game data. Every fix lives here until applied |
| **`design/BADGES.txt`** | Badge membership, the only source. The page is generated from it |
| **`design/tools/uncle_albert.py`** | The validator, and the last word on every number. Ayr calls it *"run it by Uncle Albert"*. It checks **the roster and the badges** |
| **`NEW_DIRECTION.md`** | The design record, ~11,000 lines, append-only with dated headers |
| **`design/tools/cousin_bob.py`** | **The document check.** *"Run it by Cousin Bob."* Verifies the docs still agree with the data |
| **`design/tools/README.md`** | **Read this before quoting any number.** Documents both traps and the correct method |
| **`design/new_species.md`** | The running list of species still to create |
| **`design/cut_species.md`** | What was cut, and why. Check before proposing a removal |

**`NEW_DIRECTION.md` is too long to read.** Read the last few hundred lines for current
state, and search it for a topic when you need one. **Its prose counts go stale** — the
banner at the top says so. Numbers come from Uncle Albert, never from the doc.

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
what is written about the data is still true** — the numbers in this file, the file paths
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

**Interest governs which species get made, not headcount.** The per-biome floor was a
working guide and is **explicitly not a target** — a biome gets what is worth having in
it. Ayr decides.

---

## Where things stand, 2026-08-27

Run Uncle Albert for the live version. **Cousin Bob checks these exact numbers**, so if they drift he fails rather than letting them rot:

```
THE 700     biomes 606 + The Kept 50 = 656        44 still to create
THE 300     Vigil 50 · On the Brink 50 · The Telling 100
            The Record 50 · The Breeding Centre 50
BADGES      52        easy 10 · medium 26 · hard 16 · 4 tiered
            300 species referenced, 218 exist, 82 to create
```

**Thinnest biomes:** open ocean, farmland, coast, reef.

### In flight

- **The 44 remaining species.** Some are already claimed by badges — the wood frog by
  *Sub-Zero*, the bumblebee bat by *The Smallest*. A New World vulture is wanted.
- **52 badges breaks Ayr's round-number rule.** They said record them anyway and settle
  the count later. Not resolved.
- **Fluorescence has no badge, and that was not decided — it happened.** The Deathstalker
  was in *Lights On*, which is wrong (a scorpion glows because a UV lamp is pointed at it;
  that is fluorescence, not light the animal makes). It was **dropped when the badge sets
  were expanded, without Ayr being told** — so it now sits in no badge at all, and
  *Blacklight* was never restored. **Ayr's ruling is still owed:** restore *Blacklight*
  with the puffin bill, chameleon bones and platypus fur, or let fluorescence go
  unmentioned.
- **`Only In Captivity`** depends on an `EW` tag that does not exist in the data.
- **Items in the world** — committed as a principle. **No item ideas until Ayr asks.**

### Parked — do not restart unprompted

The people / ranger-avatar redraw. The art restyle of the first ~293 painted-style
species. Euthanasia.

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

Kept in `design/LINKS.md`. The badge book and the roster are the two worth opening.
