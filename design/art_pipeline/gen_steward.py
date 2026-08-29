"""Submit art through Halo's GPU steward instead of straight at ComfyUI.

The old client in gen_flux2_batch.py posted directly to port 8188. That is
explicitly forbidden by C:\\Users\\ayr\\.claude\\COMFYUI.md: ComfyUI on Halo is
an on-demand service, and Scrying Glass is what saves a request, asks the
steward for room, wakes ComfyUI once admitted, and keeps the job cancellable
while it waits. Talking to the port directly bypasses all of that and competes
with whoever else is using the card.

It also means the "outages" that kept killing batches were never outages. The
GPU is simply asleep between admissions.

This module keeps the same two-function shape the runner already expects -
submit() and wait_and_fetch() - so gen_runner is unchanged apart from which
module it imports.

Do not add a retry or watchdog loop in here. Scrying Glass already persists and
retries; a second one just fights it.
"""
from __future__ import annotations

import sys
import time
import uuid
from pathlib import Path
from urllib.parse import quote

CLIENT_DIR = Path(r"C:\Users\ayr\.claude")
sys.path.insert(0, str(CLIENT_DIR))
import halo_scrying_client as sg  # noqa: E402

BASE = sg.DEFAULT_BASE_URL if hasattr(sg, "DEFAULT_BASE_URL") else None
MODEL = "flux-2-klein-9b-Q4_K_M.gguf"   # what the 795 committed sprites were drawn with


def _base() -> str:
    if BASE:
        return BASE
    # build_parser carries the default, so read it from there rather than
    # hard-coding a host that might move.
    return sg.build_parser().get_default("base_url")


def _outputs(limit: int = 8) -> list:
    r = sg._request(_base(), "GET", "/api/outputs/list",
                    query={"limit": limit}, timeout=120.0)
    return r.get("outputs", []) if isinstance(r, dict) else []


def _names(outs) -> set:
    """Filename AND subfolder, as a pair.

    This used to collect the filename alone. Every render is written under
    ninetails/foxfire, so the download URL built from a bare filename asked the
    gateway for a file that is not at that path and got a 404 - which the caller
    reported as NO_OUTPUT. The image existed the whole time; we were asking for
    it in the wrong place.
    """
    out = set()
    for o in outs:
        for im in o.get("images", []):
            out.add((im["filename"], im.get("subfolder") or ""))
    return out


def submit(prompt, seed, w=1024, h=1024, steps=20, guidance=3.5):
    """Queue one image. Returns {'prompt_id': ...} like the old client did."""
    payload = {
        "prompt": prompt, "negative_prompt": "", "model": MODEL,
        "sampler": "euler", "steps": steps, "cfg": 1.0,
        "width": w, "height": h, "seed": int(seed) % 2**31, "batch": 1,
        "client_id": "ponyta-claude-" + uuid.uuid4().hex,
        "media_type": "image", "mode": "text", "input_image": "",
        "denoise": 1.0, "frames": 49, "fps": 24.0, "loras": [],
    }
    # Remember what already existed so the new file can be told apart. Requests
    # are made one at a time, so the newest unseen output is ours.
    submit._before = _names(_outputs(8))
    r = sg._request(_base(), "POST", "/api/queue", payload=payload, timeout=120.0)
    if not isinstance(r, dict) or not r.get("ok"):
        return {"error": str(r)[:200]}
    return {"prompt_id": str(r.get("gpu_job_id") or r.get("prompt_id") or "")}


submit._before = set()


def wait_and_fetch(prompt_id, out_path, timeout=1800):
    """Wait for the steward to finish the job, then save its image.

    Status comes from /api/queue/state and is matched by gpu_job_id - there is
    no per-job endpoint, which an earlier version of this assumed and got a 404
    for every single species.
    """
    start = time.time()
    final = None
    stumbles = 0
    while time.time() - start < timeout:
        try:
            items = [i for i in sg._queue(_base())
                     if str(i.get("gpu_job_id") or i.get("prompt_id")) == prompt_id]
            stumbles = 0
        except Exception as e:
            # A failed poll is not a failed job. The steward persists the
            # request and keeps working on it; the gateway simply answered this
            # one call badly, usually a 502 while ComfyUI is being woken. This
            # used to abort immediately, which killed hundreds of renders that
            # were running perfectly well and reported them as STATUS_ERR.
            stumbles += 1
            if stumbles >= 40:                     # ~3 minutes of solid failure
                return "STATUS_ERR:" + str(e)[:150]
            time.sleep(5)
            continue
        if not items:
            return "LOST:not in queue history"
        st = str(items[0].get("status") or "")
        if st == "done":
            final = items[0]
            break
        if st in ("error", "cancelled", "failed"):
            return "ERROR:" + str(items[0].get("detail") or "")[:200]
        time.sleep(5)
    if final is None:
        return "TIMEOUT"

    # The listing can lag a moment behind completion.
    # Ask the job what it produced, rather than guessing from the gallery.
    #
    # This used to snapshot the eight most recent renders before submitting and
    # then diff against them afterwards, treating whatever was new as ours. That
    # is guesswork, and it lost images constantly: a retry would re-snapshot
    # after its own first attempt had already landed, so the new file was
    # already in the "before" set and the diff came out empty - NO_OUTPUT, for a
    # picture sitting on the server in perfect condition.
    #
    # The finished job record carries the exact filename and subfolder, which is
    # what COMFYUI.md says to use and is authoritative for the request we just
    # made. No diffing, no races, no dependence on how busy the gallery is.
    outs = final.get("outputs") or []
    img = next((o for o in outs if (o.get("media_type") or "image") == "image"), None)
    if not img or not img.get("filename"):
        return "NO_OUTPUT"

    fn, sub = img["filename"], img.get("subfolder") or ""
    last = None
    for attempt in range(5):
        try:
            sg._download(
                _base(),
                "/api/outputs/media/" + quote(fn, safe=""),
                Path(out_path),
                query={"workspace": sg.WORKSPACE, **({"subfolder": sub} if sub else {})},
            )
            return True
        except Exception as e:
            last = e
            time.sleep(4)
    return "FETCH_ERR:" + str(last)[:150]
