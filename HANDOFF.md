# Handoff — Wildlands: Safari Saga

Rewritten 22 Aug 2026. Read this first if you are picking the work up fresh.

## Who you are working with

Ayr owns the game and plays it herself, on her phone, all the way through.
She is not a programmer. She reports faults in terms of what she saw
("I'm stuck", "the boxes look bad", "the clues are in the wrong order"), and
those reports have been right every single time — when a report and my
diagnosis disagreed, the report was correct. Take them literally and go look.

### Her annotated screenshots

She marks up screenshots of the live dex and sends them. **A thick hand-drawn
loop around a sprite means she dislikes it.** Do not key off the colour: she
used purple on 17 Aug and red on 21 Aug, and when asked she said she does not
remember which she used before. The reliable signal is that the mark is a
thick, obviously hand-drawn loop.

**Do not mistake the card outlines for her marks.** Every card in the dex has
a thin coloured border — yellow, blue, orange, red, green, purple — and that is
the game's own rarity ring. It is on every card, including the ones she is
happy with.

An earlier version of this file said "red means dislike, purple means like",
which was wrong in both directions and would have caused a session to
regenerate the sprites she liked. It is fixed here; trust this paragraph.

**Reply with a per-animal list before spending any GPU time** — the species
name as you read it off the label, what the sprite actually shows, and the fix.
She asked for that in as many words. It is a cheap confirmation step against an
expensive one, and it has caught misreads.

**Never judge a sprite by silhouette alone.** Check colour and markings too.
"Largely fine" has been wrong on colour more than once.

### Cutting content

The old rule here read "no species may be cut". That is no longer true — she
has since asked for seven mythological creatures to be removed to hold a round
number. The real rule is:

- She is a completionist and has caught nearly everything. Cutting a species
  she has caught silently deletes that record from her save.
- Say so before cutting, once, and then do as she asks. She has accepted that
  trade knowingly.
- Where there is a choice, cut the content she has had least chance to play.

## How the code is put together

`game.part1.jsx` through `game.part67.jsx`, listed in `GAME_PARTS` in
`index.html`, concatenated and run with `(0, eval)(out)` after a Babel
transform. That has one consequence you need to know: top-level `const`
bindings are shared between all the parts but are **invisible from outside the
eval**, so you cannot inspect live state from the browser console. `DEX`,
`MAPS`, `PHOTO_ART`, `GRASS_TILE` and everything else will come back
`ReferenceError: not defined` if you try it from devtools or a `javascript_exec`
call. It catches everybody, including me, twice in one session.

To check anything real, write a `__diag.jsx` that stores what you want in
`window.__RESULT`, append it to `GAME_PARTS`, serve the folder with
`python -m http.server`, and read the value back. **Revert `index.html` and
delete `__diag.jsx` before committing.** Do this rather than guessing.

Where the drawing lives:

| Thing | File |
| --- | --- |
| `PHOTO_ART` — which species use a png | `game.part2.jsx` |
| Zone palettes, tile styles | `game.part3.jsx` |
| State, movement, battle, interaction | `game.part4.jsx` |
| All UI and rendering, all CSS | `game.part5.jsx` |
| Mythic creatures — art, dex, rift pools | `game.part7.jsx` |
| The Wardens | `game.part12.jsx` |
| The real town maps | `game.part22.jsx` |
| Mythic field-guide notes | `game.part29.jsx` |
| Grass and water tiles | `game.part45.jsx` |
| The ranger avatar | `game.part46.jsx` |
| Drawn map tiles | `game.part55.jsx` |
| The people — NPC sprites | `game.part56.jsx` |
| Props — trees, rocks, flowers, marks | `game.part57.jsx` |
| Quest-giver and clue placement | `game.part65.jsx` |
| Per-run ecology | `game.part66.jsx` |
| Ambient, tracks, set dressing, puddles, birds, fruit | `game.part67.jsx` |

`ROWS_TOWN` in part3 is a **dead template** — part22 overwrites every town.
Editing part3's towns does nothing.

`PHOTO_ART` in part2 makes a species use `art/{sp}.png` instead of its drawn
SVG. Removing a line falls back to the drawn version. A species listed in
`PHOTO_ART` with no png on disk will render broken, so add the flag and the
art together.

Pushing: plain `git push` hangs. Use
`GIT_TERMINAL_PROMPT=0 timeout 30 git push origin main`.

## Two numbers she cares about

- **The dex is exactly 1000 species.**
- **The mythological roster is exactly 100.**

Both are hers, both are deliberate, and both are checked. If you add a
creature, something comes out. Nothing in the code enforces either number —
"Bestiary Complete" counts the roster dynamically — so they are conventions you
have to hold yourself.

## The art pipeline

Not in this repo. It lives in an old session's scratchpad:

```
C:\Users\ayr\AppData\Local\Temp\claude\C--Claude-wildlands\
  b328226b-38b4-400c-8c31-f3c773791899\scratchpad\
```

`gen_runner.py` → `gen_steward.py` → `halo_scrying_client.py` → Scrying Glass →
ComfyUI. **Read `C:\Users\ayr\.claude\COMFYUI.md` before touching any of it.**
Never start or stop ComfyUI, never submit to port 8188, never build a competing
watchdog or retry loop.

A batch is a JSON file of `{dexKey: description}`. The runner appends the house
style and composition itself, retries twice per species, writes
`art/{dexKey}.png` after background removal, and logs `{dexKey: true}` so a
re-run skips what is done. Invoke it as:

```
python -u gen_runner.py batch_name.json batch_name_log.json
```

Ayr has standing permission for sprites to be committed and pushed as they
land, without asking.

### The outage, and what it taught

For about thirty hours every submission failed with
`HTTP 502 upstream_unreachable`. The gateway was healthy and `models` returned
a full inventory the whole time; the queue showed the real cause —
`"detail": "GPU manager is reconnecting"` and a `WinError 10061` connection
refused. Nothing on this side could fix it, and it cleared on its own.

**Leave the retry loop running during an outage.** I recommended stopping it,
and I was wrong: it is the auto-resume, and it drained the entire 158-sprite
backlog in two rounds within an hour of the service returning, with nobody
watching. Also note `queue` only reports the last hour, which I misread as a
running total and drew a wrong conclusion from.

### Writing prompts that work

Two hundred-odd sprites in, the faults are not random. They repeat:

1. **Juveniles drawn as adults**, often contradicting their own card caption —
   an eaglet with a white adult head, a narwhal calf with a tusk, a camel calf
   with a hump. **Feed the caption in as a constraint.**
2. **Nouns taken literally** — a box jelly as a cube, a barrel sponge as a
   wooden barrel, a mimic octopus as a flat card.
3. **Humanoid figures** where none belongs — sea squirt, village weaver,
   orchid bee.
4. **Two animals in frame** when the card wants one. Say "a SINGLE x alone".
5. **Wrong species entirely** — hornbill as toucan, potoo and frogmouth as
   owls, croc hatchling as a gecko.

And the single most useful trick: **an adjective is not a constraint. Give it
something to measure against.**

| Failed | Worked |
| --- | --- |
| "short tail" | "as long as the cat's own ear, not reaching the ground" |
| "small cat" | "house-cat-sized, not a big cat" |
| "casque ridge" (twice) | "a separate structure sitting on top of the bill" |

If a pose keeps producing a mangled animal, **change the pose**. The fruit
bat's head was unfixable hanging upside down and came out perfect the moment it
was drawn clinging upright.

## Where things stand

All work is committed and pushed; the tree is clean at `eecd936`.

Recent, newest first:

- `eecd936` bobcat stub tail and kodkod scale
- `9a3ecf9` the wild cat pass — 17 sprites from her marked-up list
- `8ceff09` the last of the 119 circled sprites
- `38abd1e` sprites for yeti, wendigo, encantado, Mami Wata
- `9ac9fe8` traded four Heracles labours for four the world actually tells
- `f65a1cd` back to a round hundred myths
- `3856c7f` sprites for selkie, White Hart, Akhlut
- `72cbce7` three creatures the myth roster was missing
- `bdac9d1` gave the hub quests a road of their own
- `97799ea` the last 158 sprites, after the outage cleared
- `795146c` order every walk by how far it actually is
- `8542f08` draw the sprites at the resolution they are shown at
- `071b22d` more in the air, and a light on every screen
- `2e79cb1` fill the towns with their own decoration
- `dea6b86` every investigation's clues back in walking order

## Things that bit, and the shape of them

**A lookup on a key that does not exist fails silently.** `AMBIENT` had nine
fireflies keyed to a zone called `"meadow"` that no map has ever used, so the
example the file's own opening comment leads with had never once been drawn.
The same dead key was in `DRESSING`. The first draft of the puddles named five
zones with no lamp post in them. **Prefer a deny-list** — `PUDDLE_DRY` names
where water cannot stand and lets everywhere else work by default. Where an
allow-list is genuinely right (`BIRD_ZONES`, `FRUIT`), check every key against
the zones the maps actually use.

**A rule that can return nothing eventually will.** Frost Town's four lamp
posts all lost the same deterministic coin toss, so it could never have had a
puddle. Anything rolling per-candidate needs a floor.

**Seeding off `mapKey.length` twins things.** `town1`–`town9` are all five
characters, so nine towns got the same layout. Hash the whole key.

**`"T"` is not a tree.** It is the zone's obstacle glyph — a cactus in the
desert, a rock on the highveld, ice in the polar sea, coral on the reef.
Anything keyed to "trees" must name its zones.

**Quest clues follow a corridor, not a bag.** Ayr's specification, given twice:
the quest-giver on the first screen after a town, that quest's clues on the
next few screens before the next town. Roads always worked because part11
threads them into a fixed sequence. The champion hubs got a *cluster* instead,
and a cluster has no order however you sort it. `chainsFromHub` in part65 now
derives real corridors and `CHAIN_HEAD` names which arc walks which. Walks are
then sorted by true distance from the quest-giver so a later clue can never sit
closer than an earlier one.

Three arcs still cannot comply and **the map is the reason, not the code**:
Rift Crossroads has one corridor and five single rooms, and the sea is a star
of separate doors off Tidewater Cove. Fixing those needs new screens in the
world, which is Ayr's call, not an invention to make quietly.

**`WALK_EXTRA` is dead code.** part36 sets `WALK_EXTRA = "¦¡"` intending to make
lamp posts and logs walkable, and **nothing has ever read it**. They are solid.
That means dropping one on a route can seal a corridor — the "I'm stuck" fault.
`lightTheWilds` in part67 re-floods the map after each placement and takes the
post back up unless the only tile lost is the one it stands on; it refused four
spots on that basis.

**Sprites are drawn at the resolution they declare.** Every generated sprite
used to say `width="32"`, and a map tile is 21.5px, which on a phone at 3× is
64 device pixels drawn from a 32-unit image. They are 256 now (grass and water
128) with the viewBox untouched, so nothing moved and everything sharpened.

## What is still open

**Two sprites Ayr may want pushed further** — not failures, judgement calls:
the coyote is less leggy than it was but still tall, and the sand cat's ears
are much bigger as asked but went upright rather than low and wide the way a
real sand cat's are.

**The people and the ranger avatar.** She asked for a redraw and does not like
any of the four directions offered, nor a cel-style attempt built to match the
animal sprites. Three artifacts exist with the options and the reasoning:
`People at True Size`, `Four Ways to Draw a Person`, `People Drawn Like the
Animals`. **This is parked, not finished** — she said "we can come back to this
later". Do not restart it unprompted.

**Effects she approved are all built** — birds, puddles, seasonal fruit. She
explicitly excluded berry bushes: *"that's a mechanic from Pokémon I don't want
yet."* Ask for the next one rather than inventing it.

**Smaller things:**

- `PHOTO_ART` lines for `molepup`, `molequeen` and `nakedmolerat` were once
  removed in favour of drawn art. All three now have photographic sprites
  again; review them together if it comes up.
- Two landing warnings predate all of this: town1 south, town6 east/west.
- Fourteen shrines report as fragmented in a reachability sweep. That is the
  guardian gate working as designed, not a fault.
- Stale `python -m http.server` processes on ports 8000, 8009 and 8014, left
  over from earlier sessions. Harmless.

## One honest note

The failures in this work have almost all been the same failure: acting on a
plausible reading instead of checking. The meadow zone that did not exist, the
`queue` window I read as a total, the four backtracking quests I talked myself
out of and one of which was real, the retry loop I advised stopping. Every one
would have been caught by a two-minute diagnostic against the loaded bundle.

If something here reads as confidently stated but you cannot verify it,
distrust it and check.
