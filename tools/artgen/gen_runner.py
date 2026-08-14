import sys, os, json, random, time, urllib.request
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gen_flux2_batch as g
import postprocess as pp

STYLE = ("anime-influenced creature-collector game concept art, clean sharp linework, flat "
    "cel-shaded colour with only thin rim-light highlights on the edges, confident heroic "
    "energy, no chubby rounding, lean and powerful silhouette, not photorealistic, illustration")
COMPOSITION = ("plain light gray seamless background, no ground, no shadow, no rocks, no props, "
    "centered composition, full body visible, no text, no watermark, no logo")

# Some poses genuinely need a prop to read correctly (an animal "gripping a
# branch" with no branch just looks broken). For those, drop the "no rocks,
# no props" clause but keep the "no shadow" / no-extra-ground-clutter intent.
# Detected by keyword against the per-species description text so we don't
# have to hand-curate every one of ~900 entries.
PROP_COMPOSITION = ("plain light gray seamless background, no ground plane, no shadow, "
    "only the minimal prop needed for the pose, centered composition, full body visible, "
    "no text, no watermark, no logo")
PROP_KEYWORDS = (
    "branch", "perch", "web", "nest", "burrow", "log", "vine", "leaf",
    "ledge", "coil", "coiled", "wrapped", "clinging", "cling", "gripping",
    "grips", "grip ", "hanging from", "roost",
)

def pick_composition(desc):
    d = desc.lower()
    if any(kw in d for kw in PROP_KEYWORDS):
        return PROP_COMPOSITION
    return COMPOSITION

SCRATCH = os.path.dirname(os.path.abspath(__file__))
RAWDIR = os.path.join(SCRATCH, "raw")
ARTDIR = "C:/Claude/wildlands/art"
os.makedirs(RAWDIR, exist_ok=True)
os.makedirs(ARTDIR, exist_ok=True)

def host_up(timeout=8):
    """Is the forge answering at all?"""
    try:
        with urllib.request.urlopen(g.HOST + "/system_stats", timeout=timeout) as r:
            r.read(1)
        return True
    except Exception:
        return False


def wait_for_host(max_wait=3600, step=30):
    """Block until the forge comes back, or give up after max_wait seconds.

    The GPU host is somebody else's machine and it goes away sometimes - it
    took batch_normal_03 down on 2026-08-11 and batch_mythic_01 on 08-13.
    Sitting and waiting is much better than burning through every remaining
    species turning each one into an instant failure.
    """
    waited = 0
    while waited < max_wait:
        if host_up():
            return True
        time.sleep(step)
        waited += step
    return False


def queue_depth():
    """(running, pending) on the shared host, or None if it cannot be read."""
    try:
        with urllib.request.urlopen(g.HOST + "/queue", timeout=10) as r:
            d = json.loads(r.read().decode() or "{}")
        return len(d.get("queue_running", [])), len(d.get("queue_pending", []))
    except Exception:
        return None


def wait_for_slot(max_wait=1800, step=15):
    """Hold off submitting while the forge already has work queued.

    Halo is somebody else's only machine. If we submit regardless, our job sits
    behind theirs, outlives the fetch timeout, gets abandoned, and the retry
    submits *another* one - so a busy GPU quietly accumulates orphaned work of
    ours. Waiting for a free slot means we never stack, and we yield to whoever
    else is using it.
    """
    waited = 0
    while waited < max_wait:
        q = queue_depth()
        if q is None:
            return False
        if q[1] == 0:
            return True
        time.sleep(step)
        waited += step
    return True


def gen_one(dexKey, desc, attempt=0):
    prompt = desc + ", " + STYLE + ", " + pick_composition(desc)
    seed = random.randint(1, 2**31 - 1)
    wait_for_slot()
    # Every network call here can raise rather than return - a socket timeout
    # inside submit() is what killed the mythic run outright. Nothing below is
    # allowed to escape: a failed species is logged and retried, never fatal.
    try:
        res = g.submit(prompt, seed, w=1024, h=1024, steps=20)
    except Exception as e:
        return "SUBMIT_ERR:" + str(e)[:150]
    if "prompt_id" not in res:
        return "SUBMIT_FAIL:" + json.dumps(res)[:200]
    raw_path = os.path.join(RAWDIR, f"{dexKey}_{attempt}.png")
    # Generous: a render is ~45s alone, but queued behind someone else's work it
    # can be far longer. Abandoning it at 180s left the job still running on the
    # host and cost a GPU slot for nothing.
    try:
        result = g.wait_and_fetch(res["prompt_id"], raw_path, timeout=900)
    except Exception as e:
        return "FETCH_ERR:" + str(e)[:150]
    if result is not True:
        return str(result)[:200]
    try:
        pp.remove_bg_and_crop(raw_path, os.path.join(ARTDIR, f"{dexKey}.png"))
    except Exception as e:
        return "POSTPROCESS_FAIL:" + str(e)[:200]
    return True

def run_batch(batch_path, log_path):
    batch = json.load(open(batch_path, encoding="utf-8"))
    log = {}
    if os.path.exists(log_path):
        log = json.load(open(log_path, encoding="utf-8"))
    for dexKey, desc in batch.items():
        if log.get(dexKey) is True:
            continue
        t0 = time.time()
        result = gen_one(dexKey, desc, attempt=0)
        tries = 1
        while result is not True and tries <= 2:
            print(f"  {dexKey}: attempt{tries} failed ({str(result)[:100]}), retrying...")
            # A timeout usually means the host went away rather than that this
            # particular animal is hard to draw. Wait for it instead of
            # spending both retries into a dead socket.
            if not host_up():
                print("  forge unreachable - waiting for it to come back...")
                if wait_for_host():
                    print("  forge is back, carrying on")
                else:
                    print("  forge still down after an hour, stopping here")
                    log[dexKey] = "HOST_DOWN"
                    with open(log_path, "w", encoding="utf-8") as f:
                        json.dump(log, f, indent=1)
                    return log
            result = gen_one(dexKey, desc, attempt=tries)
            tries += 1
        elapsed = time.time() - t0
        log[dexKey] = result if result is True else str(result)
        status = "OK" if result is True else "FAIL:" + str(result)[:100]
        print(f"{dexKey}: {status} ({elapsed:.1f}s)")
        with open(log_path, "w", encoding="utf-8") as f:
            json.dump(log, f, indent=1)
    n_ok = sum(1 for v in log.values() if v is True)
    n_fail = len(log) - n_ok
    print(f"\nBATCH DONE: {n_ok} ok, {n_fail} failed/skipped out of {len(log)}")
    return log

if __name__ == "__main__":
    batch_path = sys.argv[1]
    log_path = sys.argv[2] if len(sys.argv) > 2 else batch_path.replace(".json", "_log.json")
    run_batch(batch_path, log_path)
