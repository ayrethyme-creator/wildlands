# artgen — the sprite art pipeline

This is what generates the PNGs in `art/`. It is kept here so it survives; it was
originally written in a Claude session's scratchpad under Windows `%TEMP%`, which
is not a safe place for the only copy of 976 hand-written species descriptions.

Nothing in the game imports any of this. It is run by hand, offline, and the only
thing it touches in the repo is `art/`.

## Before you run anything

```powershell
python gen_runner.py --check
```

Reports, in about a second, whether this machine can run a batch at all: the
Scrying Glass client importable, a route to the GPU host, Pillow installed, and
a writable output directory. `run_batch` runs the same check and refuses to
start if it fails, because a machine without a route does not get a refusal from
the GPU — the connection is blackholed and every species sits until the 1800s
fetch timeout. That is half a day of nothing before you learn the host was
unreachable.

## Running a batch

```powershell
python gen_runner.py batch_normal_04.json batch_normal_04_log.json
```

Sprites land in `ARTDIR`, which defaults to `C:/Claude/wildlands/art` and can be
pointed anywhere with the `WILDLANDS_ART` environment variable — set it to a
repo checkout's `art/` to write straight into git.

Resumable and idempotent: it skips any species already logged `true`, retries twice
on failure, and rewrites the log after every species — so it can be interrupted and
restarted freely. Roughly 45 seconds per image.

Finished PNGs are written straight to `C:/Claude/wildlands/art/<dexKey>.png` (see
`ARTDIR` in `gen_runner.py`). Raw pre-postprocess renders go to `raw/`, which is
disposable and not kept here.

After a batch, add each new species to `PHOTO_ART` in `game.part2.jsx`. Any species
not listed there keeps its hand-drawn SVG art, so a missing entry is a silent
no-op rather than a break.

## Requirements

- The ComfyUI host must be up. Check first:
  `curl http://100.97.80.115:8188/system_stats`
  It lives on the household GPU box (`halo` on the tailnet, RTX 4070 Ti). It is
  somebody else's only machine — a full batch occupies it for well over an hour,
  so coordinate before starting one.
- Python with Pillow, for `postprocess.py`.

## The pieces

| File | What it does |
|---|---|
| `gen_runner.py` | The driver. Holds the STYLE and COMPOSITION prompt strings. Run this. |
| `gen_flux2_batch.py` | ComfyUI client — builds the workflow graph, submits, polls, fetches bytes. |
| `postprocess.py` | Background removal, crop, resize to 256×256 RGBA. |
| `batch_*.json` | `{dexKey: description}` — 976 species, hand-written anatomy notes. |
| `batch_*_log.json` | Per-batch progress. Delete an entry to force a reroll. |
| `roster.json` | The full species roster the batches were split from. |
| `finalize.py`, `count_dex.py`, `sprite_preview.py` | Helpers for juvenile-form copies, counting, and contact sheets. |
| `gen_styles*.py`, `gen_style3_test.py`, `gen_sdxl_test.py`, `gen_flux2_paintedguide*.py` | The style bake-off that picked the current look. Kept as a record. |

## Model

Flux 2 Klein 9B, at 1024×1024, 20 steps, guidance 3.5, euler.

```
unet:  flux-2-klein-9b-Q4_K_M.gguf   (UnetLoaderGGUF)
clip:  qwen_3_8b_fp8mixed.safetensors (type flux2)
vae:   flux2-vae.safetensors
```

## The style string

Every prompt is `description + ", " + STYLE + ", " + COMPOSITION`. The style was
chosen by rendering one orca five ways (flat vector, painted field guide, bold
poster, anime game, cute chibi) and comparing; `4_animegame` won, and needs far
fewer anatomy corrections than the painted style it replaced.

> anime-influenced creature-collector game concept art, clean sharp linework, flat
> cel-shaded colour with only thin rim-light highlights on the edges, confident
> heroic energy, no chubby rounding, lean and powerful silhouette, not
> photorealistic, illustration

`gen_runner.py` also swaps in a looser composition string for poses that genuinely
need a prop — an animal "gripping a branch" with no branch just looks broken —
detected by keyword against the description so ~900 entries don't need hand-curating.

## Known defects, worth checking after every batch

- **Leftover drop shadows.** `postprocess.py` clears only background-coloured
  regions reachable from an edge, so a mid-grey shadow survives as an opaque blob
  detached from the subject. Scan for connected components separated from the main
  body and reroll those species. Caught beluga, bowhead and goblinshark this way.
- **Text artifacts.** "no text, no watermark" is in every prompt and still leaks
  occasionally — bowhead came back with garbled lettering across the top.
- **Anatomy.** Earlier batches needed fixes for babirusa tusks and for takin and
  bongo rendering bipedal. Look at the sprites before committing them.

Rerolling is just deleting the species' entry from the log and re-running, or
calling `gen_runner.gen_one(dexKey, description)` directly.
