# The sprite art pipeline

**This was living in a Windows TEMP directory and had survived there by luck since
August.** It holds the STYLE and COMPOSITION strings that every one of the 1001
existing sprites was generated from, and 38 batch files carrying 976 hand-written
anatomical descriptions. A temp clean would have taken all of it.

Copied into the repo on 2026-08-29, the day the first Terrane art batch ran.

| File | What it is |
|---|---|
| `gen_runner.py` | The driver. Holds `STYLE`, `COMPOSITION` and `PROP_COMPOSITION`, and picks between the last two per species. Resumable and idempotent — it skips anything already logged `true`, retries twice, and writes the log after every species |
| `gen_steward.py` | Submits through **Scrying Glass**, the managed path |
| `postprocess.py` | Flood-fill background removal, crop, resize to 256×256 RGBA |
| `gen_flux2_batch.py` | The older direct-to-ComfyUI client. **Superseded — do not use it** |
| `sprite_preview.py` | Contact-sheet builder for reviewing a finished batch |

## Running a batch

```
python design/art_pipeline/gen_runner.py <batch.json> <log.json>
```

Both paths absolute. Sprites land in `art/<dexKey>.png`. Descriptions live in
`design/art_prompts/`; `legacy/` holds the 38 original batches for reference.

## Read before touching the generation step

`C:\Users\ayr\.claude\COMFYUI.md`. **Never start or stop ComfyUI, and never submit
to port 8188 directly.** Scrying Glass saves the request first, asks the shared GPU
steward for room, and keeps the request visible and cancellable while it waits.
`waiting_vram` is a durable queue state, not a failure, and the runner's own retries
are the auto-resume. Do not wrap it in a watchdog.

**`health` and `models` both lie about whether the renderer is up.** Only `queue` is
honest. If a batch stalls, confirm the signature there and then wait.

## The one change made on 2026-08-29

`pick_composition` matched its prop keywords as **substrings**, so it fired on any
word that happened to contain one. Checking the 140 new descriptions found six false
positives and no true ones:

```
honest      contains  nest
loggerhead  contains  log
unbranched  contains  branch
burrowing   contains  burrow
circling    contains  cling
```

Every one would have quietly swapped in the looser composition and invited a prop
into a sprite that wanted an empty frame. It now matches on **whole words**, which is
strictly narrower and so cannot newly trigger on anything the old test passed. The
gerunds that genuinely do imply a prop — *perched*, *roosting*, *clinging* — are
listed explicitly rather than caught by accident.

## Writing a description

The craft rules, learned across roughly 140 corrective renders:

1. **An adjective is not a constraint. Give something measurable.** "short tail"
   failed twice; "as long as the cat's own ear, not reaching the ground" worked first
   try.
2. **Never negate a feature the animal actually has** — naming it summons it. Three
   repetitions of "NO TUSKS AT ALL" still produced a tusked walrus calf. Describe what
   *is* there instead: "a soft bristly cushion of hair and nothing harder".
3. **Do negate a literal object the animal is not.** "absolutely NOT a wooden barrel
   with staves" works, because the noun is not one of its features. The deep sea is
   almost entirely this problem — sea pig, coffinfish, hatchetfish, brain coral.
4. **A SIMILE IS AS DANGEROUS AS A NEGATION — the model draws the comparison object.**
   Proved on the first Terrane batch: "like a wadded paper flower" produced a rose, and
   "like a small bare tree" produced a leafless tree with no coral in it. Same mechanism
   as "bat-like ears" becoming bat wings. A comparison to a **body part or a plain
   shape** is safe — *like a beard, like a collar, like a cone*. A comparison to a
   **whole object or organism that could stand in for the animal** is not — *like a
   flower, like a tree, like an ice-cream cone, like a bat's*.
5. **Say nothing about the background, even to deny it.** "clear sky all around"
   painted a real sky on 6 of 10 bats. The COMPOSITION clause already asks for an
   empty backdrop.
6. **If a pose keeps producing a mangled animal, change the pose.** The fruit bat's
   head was unfixable upside down and perfect the moment it was drawn upright.
7. **Name the distinguishing feature in capitals**, and where two species will be
   confused, say what it must NOT be — four penguins in one batch need four different
   diagnostics or they all come out as the same bird.

## Known defect, still open

`postprocess.py` only clears background-coloured regions connected to an edge, so a
mid-grey drop shadow can survive as a detached blob. Scan a finished batch for opaque
components detached from the main subject and re-roll those species.
