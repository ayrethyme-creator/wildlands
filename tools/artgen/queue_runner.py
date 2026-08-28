"""queue_runner.py — let a chat with no route to the GPU still run batches.

The problem this solves
-----------------------
The art pipeline only works from a machine on the household tailnet: the
Scrying Glass client lives in `C:\\Users\\ayr\\.claude`, and the GPU host is a
100.x address that is blackholed from anywhere else. A Claude session running
in a cloud container therefore cannot submit a single image, no matter how
good its prompts are. Until now that meant the session holding the species
work and the session able to draw them had to be the same session.

They do not. The repository is already the channel between them: `art/` is
committed, and both machines can reach GitHub. So a batch request can travel
as a file.

  the chat  ->  writes tools/artgen/queue/<name>.job.json, pushes
  this file ->  sees it, runs gen_runner, commits the PNGs and log, pushes
  the chat  ->  fetches, reads the log, reports what came out

Run this on the machine that has the GPU route. It is the only thing that has
to live there, and it needs starting once.

What it is not
--------------
It is not a second watchdog. It never talks to ComfyUI, never starts or stops
it, and never queues around it — every submission goes through gen_runner into
gen_steward into Scrying Glass, which is the one thing allowed to ask the
steward for the card. All this loop polls is git. It runs one batch at a time
and holds the GPU no longer than that batch, exactly as a person running
gen_runner by hand would.

Usage
-----
    python queue_runner.py                     # poll forever, default clone
    python queue_runner.py --once              # one pass, then exit
    python queue_runner.py --repo D:/artqueue --branch main --poll 30

It works in its own dedicated clone (default `C:/Claude/wildlands-artqueue`)
so it can fetch and rebase freely without ever disturbing a checkout somebody
is working in. If that clone is missing it prints the git command to make it
and exits rather than guessing at credentials.
"""
from __future__ import annotations

import argparse
import datetime
import json
import os
import subprocess
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
QUEUE_REL = "tools/artgen/queue"
DEFAULT_REPO = os.environ.get("WILDLANDS_QUEUE_REPO") or "C:/Claude/wildlands-artqueue"
DEFAULT_BRANCH = "claude/handoff-md-review-u6uaf3"
HEARTBEAT = ".queue_runner.heartbeat"
# How stale a heartbeat has to be before we assume the other runner died. A
# single species takes about 45 seconds and the loop touches the file far more
# often than that, so ten minutes is only ever reached by a dead process.
STALE_AFTER = 600


def now():
    return datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def log(msg):
    print("[%s] %s" % (time.strftime("%H:%M:%S"), msg), flush=True)


# ------------------------------------------------------------------- git

def git(repo, *args, check=True, quiet=False):
    p = subprocess.run(["git", "-C", repo, *args],
                       capture_output=True, text=True)
    if p.returncode != 0:
        if check:
            raise RuntimeError("git %s failed: %s" % (" ".join(args),
                                                      (p.stderr or p.stdout).strip()))
        if not quiet:
            log("  git %s: %s" % (" ".join(args[:2]), (p.stderr or p.stdout).strip()[:200]))
    return p.stdout.strip()


def ensure_clone(repo, branch):
    """Make sure `repo` is a clone of this repository, sitting on `branch`."""
    if not os.path.isdir(os.path.join(repo, ".git")):
        try:
            url = git(HERE, "remote", "get-url", "origin")
        except Exception:
            url = "https://github.com/ayrethyme-creator/wildlands"
        # -b, because the queue and this runner may not be on the default
        # branch, and a clone without it lands somewhere that has neither.
        print("No clone at %s.\n\nMake one and then start this again:\n\n"
              "    git clone -b %s %s \"%s\"\n" % (repo, branch, url, repo))
        sys.exit(2)
    git(repo, "fetch", "origin", branch)
    current = git(repo, "rev-parse", "--abbrev-ref", "HEAD")
    if current != branch:
        # -B, not checkout, so a clone that has never seen this branch and a
        # clone sitting on a stale copy of it both end up in the same place.
        git(repo, "checkout", "-B", branch, "origin/" + branch)
    else:
        sync(repo, branch)


def dirty(repo):
    """Tracked files edited but not committed. Untracked ones do not count —
    a failed species leaves an orphan PNG in art/ that is never ours to add."""
    p = subprocess.run(["git", "-C", repo, "diff", "--quiet"], capture_output=True)
    return p.returncode != 0


def sync(repo, branch):
    """Bring local up to date with the remote, keeping anything unpushed."""
    git(repo, "fetch", "origin", branch)
    behind = git(repo, "rev-list", "--count", "HEAD..origin/" + branch)
    if behind == "0":
        return
    if dirty(repo):
        # Rebasing over a hand-edit would either fail with git's own wording or
        # quietly carry a local change into a pushed commit. Say plainly that
        # this clone is the runner's and should not be edited.
        raise RuntimeError(
            "this clone has uncommitted edits to tracked files, so it cannot "
            "take the newer commits on %s.\n  %s is the runner's own clone — "
            "edit the repo somewhere else and let this one follow.\n  Changed: %s"
            % (branch, repo, ", ".join(git(repo, "diff", "--name-only").split()) or "?"))
    git(repo, "rebase", "origin/" + branch)


def push(repo, branch):
    """Push, and if somebody pushed first, rebase onto them and try again."""
    for attempt, wait in enumerate((0, 2, 4, 8, 16)):
        if wait:
            time.sleep(wait)
        p = subprocess.run(["git", "-C", repo, "push", "-u", "origin",
                            "HEAD:refs/heads/" + branch],
                           capture_output=True, text=True)
        if p.returncode == 0:
            return True
        err = (p.stderr or p.stdout).strip()
        log("  push failed (attempt %d): %s" % (attempt + 1, err.splitlines()[-1][:160]))
        # A rejection is somebody else's commit, not a network problem, so
        # fetching and replaying on top is the fix rather than waiting longer.
        try:
            sync(repo, branch)
        except Exception as e:                       # noqa: BLE001
            log("  rebase after rejection failed: %s" % e)
            return False
    return False


# ------------------------------------------------------------------ locking

def take_lock(repo):
    """One runner at a time. Two would fight over the same card."""
    path = os.path.join(repo, HEARTBEAT)
    if os.path.exists(path):
        age = time.time() - os.path.getmtime(path)
        if age < STALE_AFTER:
            try:
                who = open(path, encoding="utf-8").read().strip()
            except Exception:                        # noqa: BLE001
                who = "unknown"
            print("Another queue runner is alive here (%s, %ds ago).\n"
                  "Stop it first, or delete %s if you are sure it is dead."
                  % (who, int(age), path))
            sys.exit(3)
        log("taking over a stale lock (%d minutes old)" % (age / 60))
    beat(repo)


def drop_lock(repo):
    try:
        os.remove(os.path.join(repo, HEARTBEAT))
    except OSError:
        pass


def beat(repo):
    try:
        with open(os.path.join(repo, HEARTBEAT), "w", encoding="utf-8") as f:
            f.write("pid %d on %s at %s\n" % (os.getpid(),
                                              os.environ.get("COMPUTERNAME", "?"), now()))
    except Exception:                                # noqa: BLE001
        pass


# ------------------------------------------------------------------- jobs

def read_json(path):
    """Tolerant read. The log is rewritten after every species, so a read can
    land mid-write; that is a retry, not an error."""
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except Exception:                                # noqa: BLE001
        return None


def pending_jobs(repo):
    qdir = os.path.join(repo, QUEUE_REL)
    if not os.path.isdir(qdir):
        return []
    out = []
    for name in sorted(os.listdir(qdir)):
        if not name.endswith(".job.json"):
            continue
        stem = name[: -len(".job.json")]
        if os.path.exists(os.path.join(qdir, stem + ".done.json")):
            continue
        job = read_json(os.path.join(qdir, name))
        if job is None:
            log("  %s is not readable JSON, skipping" % name)
            continue
        job["_stem"] = stem
        out.append(job)
    return out


def count_true(log_obj):
    return sum(1 for v in (log_obj or {}).values() if v is True)


def stage_results(repo, batch_stem, log_rel, log_obj, stem):
    """Add only the PNGs the log says are finished.

    gen_runner writes the log entry after postprocess has closed the file, so
    `true` in the log is the one reliable signal that a PNG is whole. Adding
    everything in art/ instead would sooner or later commit a half-written
    image."""
    added = 0
    for key, val in (log_obj or {}).items():
        if val is not True:
            continue
        rel = "art/%s.png" % key
        if os.path.exists(os.path.join(repo, rel)):
            git(repo, "add", "--", rel, check=False, quiet=True)
            added += 1
    git(repo, "add", "--", log_rel, check=False, quiet=True)
    git(repo, "add", "--", "%s/%s.progress.json" % (QUEUE_REL, stem), check=False, quiet=True)
    git(repo, "add", "--", "%s/%s.done.json" % (QUEUE_REL, stem), check=False, quiet=True)
    return added


def write_side_file(repo, stem, suffix, payload):
    path = os.path.join(repo, QUEUE_REL, stem + suffix)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=1)
        f.write("\n")
    return path


def commit_push(repo, branch, message):
    staged = subprocess.run(["git", "-C", repo, "diff", "--cached", "--quiet"],
                            capture_output=True, text=True)
    if staged.returncode == 0:
        return False
    git(repo, "commit", "-m", message, check=False)
    return push(repo, branch)


# -------------------------------------------------------------------- run

def run_job(repo, branch, job, push_every):
    stem = job["_stem"]
    batch = job.get("batch")
    if not batch:
        log("%s names no batch, marking failed" % stem)
        write_side_file(repo, stem, ".done.json",
                        {"job": stem, "finished": now(), "ok": 0, "failed": 0,
                         "error": "the job file has no \"batch\" key"})
        commit_push(repo, branch, "artgen: reject job %s, no batch named" % stem)
        return

    artgen = os.path.join(repo, "tools", "artgen")
    batch_path = os.path.join(artgen, batch)
    if not os.path.exists(batch_path):
        log("%s asks for %s which is not in the repo" % (stem, batch))
        write_side_file(repo, stem, ".done.json",
                        {"job": stem, "finished": now(), "ok": 0, "failed": 0,
                         "error": "batch file %s not found" % batch})
        commit_push(repo, branch, "artgen: reject job %s, %s missing" % (stem, batch))
        return

    log_name = job.get("log") or batch.replace(".json", "_log.json")
    log_path = os.path.join(artgen, log_name)
    log_rel = "tools/artgen/" + log_name

    env = dict(os.environ)
    # Straight into this clone, so the sprites are already staged where the
    # commit below can pick them up.
    env["WILDLANDS_ART"] = os.path.join(repo, "art")
    env["PYTHONIOENCODING"] = "utf-8"

    # Preflight before claiming anything. A machine that has lost its route
    # should leave the job on the queue for whoever can do it, not swallow it.
    check = subprocess.run([sys.executable, "-u", "gen_runner.py", "--check"],
                           cwd=artgen, env=env, capture_output=True, text=True)
    if check.returncode != 0:
        log("preflight failed, leaving %s on the queue:\n%s" % (stem, check.stdout.strip()))
        note = {"job": stem, "at": now(), "preflight": check.stdout.strip()}
        write_side_file(repo, stem, ".progress.json", note)
        stage_results(repo, batch, log_rel, {}, stem)
        commit_push(repo, branch, "artgen: %s cannot run here yet" % stem)
        return

    total = len(read_json(batch_path) or {})
    log("starting %s: %s (%d species)" % (stem, batch, total))
    write_side_file(repo, stem, ".progress.json",
                    {"job": stem, "batch": batch, "started": now(),
                     "species": total, "done": count_true(read_json(log_path)),
                     "state": "running"})
    stage_results(repo, batch, log_rel, read_json(log_path), stem)
    commit_push(repo, branch, "artgen: start %s" % stem)

    proc = subprocess.Popen([sys.executable, "-u", "gen_runner.py", batch_path, log_path],
                            cwd=artgen, env=env)
    pushed_at = count_true(read_json(log_path))
    try:
        while proc.poll() is None:
            time.sleep(15)
            beat(repo)
            done = count_true(read_json(log_path))
            if done - pushed_at >= push_every:
                write_side_file(repo, stem, ".progress.json",
                                {"job": stem, "batch": batch, "started": now(),
                                 "species": total, "done": done, "state": "running"})
                n = stage_results(repo, batch, log_rel, read_json(log_path), stem)
                if commit_push(repo, branch, "artgen: %s, %d/%d sprites" % (stem, done, total)):
                    log("  pushed %d/%d (%d files staged)" % (done, total, n))
                pushed_at = done
    except KeyboardInterrupt:
        proc.terminate()
        raise
    proc.wait()

    final = read_json(log_path) or {}
    ok = count_true(final)
    failed = {k: v for k, v in final.items() if v is not True}
    write_side_file(repo, stem, ".done.json",
                    {"job": stem, "batch": batch, "finished": now(),
                     "species": total, "ok": ok, "failed": len(failed),
                     "failures": failed, "exit_code": proc.returncode})
    # The progress file has served its purpose; the done file supersedes it.
    prog = os.path.join(repo, QUEUE_REL, stem + ".progress.json")
    if os.path.exists(prog):
        os.remove(prog)
        git(repo, "add", "--", "%s/%s.progress.json" % (QUEUE_REL, stem), check=False, quiet=True)
    stage_results(repo, batch, log_rel, final, stem)
    commit_push(repo, branch, "artgen: %s finished, %d of %d drawn" % (stem, ok, total))
    log("finished %s: %d ok, %d failed" % (stem, ok, len(failed)))


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--repo", default=DEFAULT_REPO,
                    help="the dedicated clone this runner owns (default %(default)s)")
    ap.add_argument("--branch", default=DEFAULT_BRANCH,
                    help="branch carrying the queue and receiving the art (default %(default)s)")
    ap.add_argument("--poll", type=int, default=60, help="seconds between checks")
    ap.add_argument("--push-every", type=int, default=6,
                    help="push part-way through a batch after this many new sprites")
    ap.add_argument("--once", action="store_true", help="one pass, then exit")
    a = ap.parse_args()

    repo = os.path.abspath(a.repo)
    try:
        ensure_clone(repo, a.branch)
    except RuntimeError as e:
        print("Cannot start: %s" % e)
        sys.exit(4)
    take_lock(repo)
    log("watching %s on %s, every %ds" % (repo, a.branch, a.poll))

    try:
        loop(repo, a)
    finally:
        drop_lock(repo)


def loop(repo, a):
    idle = 0
    while True:
        beat(repo)
        try:
            sync(repo, a.branch)
        except Exception as e:                       # noqa: BLE001
            log("could not sync: %s" % e)
        jobs = pending_jobs(repo)
        if jobs:
            idle = 0
            for job in jobs:
                run_job(repo, a.branch, job, a.push_every)
        else:
            idle += 1
            if idle == 1 or idle % 30 == 0:
                log("nothing queued")
        if a.once:
            return
        time.sleep(a.poll)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nstopped")
