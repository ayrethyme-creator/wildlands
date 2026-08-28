# Wildlands Scrying Glass usage

This is the complete operational guide for generating Wildlands creature
sprites from either Ponyta or Ayr's Anthropic cloud Claude session.

## What the infrastructure actually is

- Halo is Eric's physical Windows PC and owns the NVIDIA GPU.
- ComfyUI runs on Halo on demand. Its raw port, `8188`, is private and must not
  be called by Wildlands scripts.
- Scrying Glass is the durable queue in front of ComfyUI. It saves requests,
  asks the shared GPU steward for admission, wakes ComfyUI, tracks completion,
  and supports cancellation.
- Ponyta is a local Windows VM on Halo and is a tailnet member. It can call the
  private Scrying Glass URL directly.
- This `HANDOFF.md review` chat is an Anthropic cloud container, not Ponyta.
  Its earlier diagnosis that it could not route to a Tailscale address was
  correct.
- Eric explicitly asked his ChatGPT/Codex agent on EEVEE to give this cloud
  chat image-generation control. The resulting public route is a narrow,
  authenticated Wildlands gateway on Halo. It is not tailnet membership and
  it does not expose raw ComfyUI.

## Boundaries of the cloud gateway

The gateway can only:

1. submit text-to-image jobs with `flux-2-klein-9b-Q4_K_M.gguf`;
2. force those jobs into the `ninetails` output workspace;
3. show or cancel jobs created with this cloud credential; and
4. download files attached to those exact jobs.

It forces batch size 1, caps dimensions and steps, rejects video, input images,
LoRAs, other models, and arbitrary Scrying Glass paths. Halo's existing GPU
steward still decides when each job runs. Never try port `8188`, a direct
ComfyUI workflow, a tailnet address from the cloud, or a second retry/watchdog
loop.

## One-time cloud configuration

The private file is:

```text
~/.claude/wildlands_scrying.json
```

It has this shape:

```json
{
  "base_url": "https://halo.tail34c017.ts.net:8443/wildlands-scry",
  "token": "the revocable token Eric delivered out of band"
}
```

The real token is not in this public repository. Do not print it, commit it,
paste it into logs, or put it into a batch file. On Ponyta, this file is not
needed; the client falls back to the private tailnet route.

## Verify before a batch

From the repository root:

```bash
python tools/artgen/scrying_glass_client.py health
python tools/artgen/gen_runner.py --check
```

Both commands must report `"ok": true`. A sleeping ComfyUI process is normal;
Scrying Glass and the GPU steward wake it only after a job is admitted.

## Run a resumable sprite batch

```bash
python tools/artgen/gen_runner.py tools/artgen/batch_terrane_01.json
```

An explicit log path is optional:

```bash
python tools/artgen/gen_runner.py BATCH.json BATCH_log.json
```

The runner writes final transparent sprites to the repository's `art/`
directory and intermediate images to `tools/artgen/raw/`. It records each
completed creature in the log immediately. Re-running the same command skips
entries already marked `true`, so an interrupted batch resumes safely.

## Inspect or cancel this cloud chat's jobs

```bash
python tools/artgen/scrying_glass_client.py queue
python tools/artgen/scrying_glass_client.py cancel GPU_JOB_ID
```

Do not cancel work owned by another user. The cloud gateway prevents that in
any case by hiding and rejecting non-cloud jobs.

## How to interpret failures

- `401 unauthorized`: the config is absent, the token was copied incorrectly,
  or Eric revoked it. Check the file without printing the token.
- `Scrying Glass is unreachable`: confirm `base_url` is the public `:8443`
  path above. A cloud session cannot use the private `:10444` route.
- `waiting_vram`: healthy; another workload owns the GPU or ComfyUI is waking.
- `errored`: inspect `detail` in `queue`, correct the request, then retry once.
- `LOST:not in queue history`: the local runner stopped tracking a job for over
  an hour. Inspect `queue` before submitting replacement work.
- `NO_OUTPUT`: the durable job finished without an attached image. Inspect its
  queue record; do not guess the newest file in the shared output directory.

For credential or route changes, ask Eric. For ordinary generation, use these
scripts directly; no cross-session agent relay is required.
