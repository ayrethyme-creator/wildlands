"""Turn Ayr's hand-written art notes into a render batch.

    python design/art_pipeline/apply_notes.py --map     # resolve names to art keys
    python design/art_pipeline/apply_notes.py --show KEY

Ayr reviews the sprites on a phone and writes the faults as prose. This maps
those names onto art keys and finds the prompt each sprite was last rendered
from, so a correction edits the real text rather than starting from a guess.

A species may have been through many batches; the LAST one that rendered it is
the prompt actually behind the picture Ayr is looking at.
"""
import io, json, os, re, sys

REPO = "C:/Claude/wildlands"
NOTES = os.path.join(REPO, "design", "AYR_ART_NOTES_2026-08-27.txt")
PROMPTS = os.path.join(REPO, "design", "art_prompts")
LEGACY = os.path.join(PROMPTS, "legacy")
ART = os.path.join(REPO, "art")


# Names Ayr writes by sight that the old art keyed differently. Every one of
# these was checked against art/ by hand - do not guess a new one, look.
ALIAS = {
    "greatwhiteshark": "greatwhite",
    "irrawaddydolphin": "irrawaddy",
    "spottedeagleray": "eagleray",
    "sunflowerseastar": "sunflowerstar",
    "doguedebordeaux": "bordeauxmastiff",
    "tasmaniandevil": "tasdevil",
    "chrysalis": "monarch_p",          # a life stage, not a species of its own
    "africanmillipede": "giantmillipede",
    "greaterbirdofparadise": "greaterbop",
    "howlermonkey": "howler",
    "snubnosedmonkey": "snubnosed",
    "oceansunfish": "sunfishmola",
    "rissosdolphin": "rissos",
    # Confirmed by reading each prompt, not by name shape. Matching on the last
    # word alone sent all three bats to "bat" (a generic fruit bat) and the
    # leatherback to "turtle" (a red-eared slider) - four silent wrong species.
    "mexicanfreetailedbat": "freetailbat",
    "bulldogbat": "fishingbat",        # the bulldog bat IS the fishing bat
    "lesserlongnosedbat": "longnosedbat",
    "leatherbackseaturtle": "leatherback",
    "arabianoryx": "oryx",
    "domesticduck": "duck",
    "bluetonguedskink": "skink",
    "prayingmantis": "mantis",
    "slowloris": "loris",
    "virginiaopossum": "opossum",
    "patagonianmara": "mara",
    "superblyrebird": "lyrebird",
}


def key(nm):
    return re.sub(r"[^a-z0-9]", "", nm.lower())


def notes():
    out = []
    for line in io.open(NOTES, encoding="utf-8"):
        line = line.strip()
        if line.startswith("!") or "::" not in line:
            continue
        nm, note = line.split("::", 1)
        out.append((nm.strip(), note.strip()))
    return out


def _order(path):
    """batch files oldest first; fixes_NN sort numerically, not as text"""
    fs = [f for f in os.listdir(path)
          if f.endswith(".json") and not f.endswith("_log.json")]
    def k(f):
        m = re.search(r"fixes_(\d+)", f)
        return (1, int(m.group(1))) if m else (0, 0)
    return [os.path.join(path, f) for f in sorted(fs, key=k)]


def prompts():
    """art key -> the most recent prompt text for it"""
    out = {}
    for p in _order(LEGACY) + _order(PROMPTS):
        try:
            d = json.load(io.open(p, encoding="utf-8"))
        except Exception:
            continue
        for k, v in d.items():
            if isinstance(v, str):
                out[k] = (v, os.path.basename(p))
    return out


def resolve():
    """(display name, note, art key or None, prompt or None, source batch)"""
    P = prompts()
    have = {f[:-4] for f in os.listdir(ART) if f.endswith(".png")}
    rows = []
    for nm, note in notes():
        k = ALIAS.get(key(nm), key(nm))
        if k not in have:
            # possessives and hyphens were keyed inconsistently in the old art
            # No last-word guessing. "Leatherback Sea Turtle" -> "turtle" found
            # a real sprite of the wrong animal, which is worse than none.
            for alt in (key(nm.replace("-", " ")), key(nm.replace("'s", ""))):
                if alt in have:
                    k = alt
                    break
            else:
                k = None
        txt, src = P.get(k, (None, None)) if k else (None, None)
        rows.append((nm, note, k, txt, src))
    return rows


if __name__ == "__main__":
    rows = resolve()
    if "--show" in sys.argv:
        want = sys.argv[sys.argv.index("--show") + 1]
        for nm, note, k, txt, src in rows:
            if k == want:
                print("%s  [%s]  from %s\nNOTE: %s\n\n%s" % (nm, k, src, note, txt))
        sys.exit(0)

    miss_key = [r for r in rows if not r[2]]
    miss_txt = [r for r in rows if r[2] and not r[3]]
    todo = [r for r in rows if r[1] and r[2] and r[3]]
    parked = [r for r in rows if not r[1]]
    print("notes            %d" % len(rows))
    print("resolved to art  %d" % len([r for r in rows if r[2]]))
    print("actionable       %d" % len(todo))
    print("parked (no note) %d" % len(parked))
    if miss_key:
        print("\nNO SPRITE FOUND:")
        for nm, note, k, txt, src in miss_key:
            print("   %-28s %s" % (nm, note[:44]))
    if miss_txt:
        print("\nSPRITE BUT NO PROMPT ON RECORD:")
        for nm, note, k, txt, src in miss_txt:
            print("   %-28s (%s)" % (nm, k))
