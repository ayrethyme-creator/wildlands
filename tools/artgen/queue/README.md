# The art queue

A way for a Claude session with no route to the GPU to still get sprites drawn.

Only one machine can draw: the one on the household tailnet, with the Scrying
Glass client in `C:\Users\ayr\.claude`. Everywhere else the GPU host is a
blackholed 100.x address, so a cloud session cannot submit a single image no
matter how good its prompts are.

But both machines can reach GitHub, and `art/` is already committed. So the
request travels as a file.

```
chat            writes queue/<name>.job.json, pushes
queue_runner    sees it, runs gen_runner, pushes back PNGs + log
chat            fetches, reads the log, reports what came out
```

## Starting the runner

On the GPU machine, once:

```
git clone https://github.com/ayrethyme-creator/wildlands C:\Claude\wildlands-artqueue
```

Then, whenever it should be listening, double-click
`tools/artgen/start-queue-runner.bat` (or `python queue_runner.py`) and leave
the window open. It polls every minute, runs one batch at a time, and pushes
progress every few sprites so the chat can watch.

It works only in that dedicated clone — never in a checkout somebody is
editing — and it will not start if another copy of itself is already alive.

## Asking for a batch

Add a file `queue/<name>.job.json`:

```json
{
  "batch": "batch_terrane_01.json",
  "requested_by": "the chat that wrote the descriptions",
  "requested_at": "2026-08-28T00:00:00Z",
  "note": "why this batch, and anything the operator should know"
}
```

`batch` is the only required key; it names a file in `tools/artgen/`. `log`
optionally overrides the log filename, which otherwise follows the batch name.
Commit and push it.

## Reading the results

- `queue/<name>.progress.json` — appears while the batch is running, and says
  how many of how many are drawn.
- `queue/<name>.done.json` — appears when it finishes, with the count and every
  failure verbatim. Its presence is what stops the job being picked up again.
- `tools/artgen/<batch>_log.json` — the per-species record. `true` means drawn.
- `art/<dexKey>.png` — the sprites themselves, committed as they land.

To re-run a job, delete its `.done.json`. To redraw one species, delete that
species' entry from the batch log as well — `gen_runner` skips anything already
logged `true`.

## What this is not

It does not talk to ComfyUI, start it, stop it, or queue around it. Every
submission goes the normal route, through `gen_runner` into `gen_steward` into
Scrying Glass, which is the only thing permitted to ask the steward for the
card. The loop polls git and nothing else, and holds the GPU exactly as long as
one batch — no longer than a person running `gen_runner` by hand.
