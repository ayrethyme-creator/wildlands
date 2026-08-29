"""The register of species that bulk fixing could not get right.

    python design/art_pipeline/one_by_one.py            # rewrite ONE_BY_ONE.txt
    python design/art_pipeline/one_by_one.py --show     # print it without writing

Ayr grades every contact sheet by eye and circles what is still wrong. After a
species has been through the bulk passes and is STILL circled, more bulk fixing
is waste - it goes here instead, to be rebuilt one at a time with reference
pictures to hand.

Three ways in:
  FLAGGED  - Ayr circled it on a sheet after its fix passes. Hand-listed below,
             because only Ayr's eye decides this and no script can infer it.
  SET ASIDE- deep sea and fossil, which Ayr reserved for individual work from
             the start regardless of how they render.
  EXHAUSTED- at or past the bulk-attempt limit per attempts.py, so it has no
             bulk goes left even if it was never explicitly circled.

Display names come from FIELD_GUIDE.txt by normalising the name to the art key,
so the list can be pasted straight into an image search.
"""
import io, json, os, re, sys

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
REPO = "C:/Claude/wildlands"
PROMPTS = os.path.join(REPO, "design", "art_prompts")
OUT = os.path.join(PROMPTS, "ONE_BY_ONE.txt")

# Circled by Ayr after the species had already been through bulk fixing.
# Append the sheet it was circled on, so we can tell how long it has been stuck.
FLAGGED = {
    "americancurl": "fixes_05", "beardedseal": "fixes_05",
    "bluemussel": "fixes_05", "chinstrappenguin": "fixes_05",
    "colossalsquid": "fixes_05", "englishbudgie": "fixes_05",
    "himalayanmonal": "fixes_05", "hoodedseal": "fixes_05",
    "littlemarianafruitbat": "fixes_05", "plainspocketgopher": "fixes_05",
    "portuguesemanowar": "fixes_05", "remora": "fixes_05",
}
SET_ASIDE_BATCHES = {"batch_deepsea": "deep sea", "batch_fossil": "fossil"}

# Passed Ayr's eye. A species on a graded sheet that was NOT circled is approved,
# and approval outranks the attempt count - several of these are at four or five
# renders precisely because it took that many to get them right. Without this the
# list padded itself with finished work and read as far more to do than there is.
APPROVED = {
    "angorarabbit", "beardeddragon", "bredaxolotl", "brownrat", "bumblebeebat",
    "europeanmole", "fancypigeon", "frenchbulldog", "hornbill",
    "loggerheadturtle", "mountaingoat", "mutt", "pistolshrimp", "rossgull",
    "woollyflyingsquirrel", "xmasislandpipistrelle",   # uncircled on fixes_05
    "collaredlemming", "kangaroorat",                  # Ayr, on fixes_04
}


def names():
    """art key -> display name, via the same normalisation the keys were made with

    Two sources, because the roster spans two states. FIELD_GUIDE.txt is what the
    running game already knows; everything added for Terrane is still only a
    decision, so its names live in PENDING_MOVES.txt. Most of what reaches this
    list is new, so without the second source nearly every name resolved to its
    own art key and the list was useless for searching reference pictures.
    """
    out = {}

    def key(nm):
        return re.sub(r"[^a-z0-9]", "", nm.lower())

    def add(nm):
        nm = nm.strip()
        if not nm:
            return
        out.setdefault(key(nm), nm)
        # A possessive can be keyed either way: "Ross's Gull" flattens to
        # rosssgull, but the art key for it is rossgull. Index both spellings.
        if "'" in nm:
            out.setdefault(key(re.sub(r"'s", "", nm)), nm)

    p = os.path.join(REPO, "design", "FIELD_GUIDE.txt")
    if os.path.exists(p):
        for line in io.open(p, encoding="utf-8"):
            if not line.startswith("!") and "::" in line:
                add(line.split("::")[0])

    # from>to=Name|Name   and   RENAME=old::new  (the new name is the one to show)
    p = os.path.join(REPO, "design", "PENDING_MOVES.txt")
    if os.path.exists(p):
        for line in io.open(p, encoding="utf-8"):
            line = line.strip()
            if line.startswith("!") or "=" not in line:
                continue
            rhs = line.split("=", 1)[1]
            for part in rhs.split("|"):
                if "::" in part:
                    # old::new. Index the OLD name too: art keys were made before
                    # the rename, so the key still spells the old name and would
                    # otherwise never find its way to the new one.
                    was, now = part.split("::", 1)
                    add(now)
                    out.setdefault(key(was.strip()), now.strip())
                else:
                    add(part)
    return out


def batches():
    """art key -> the non-fix batch it was first rendered in"""
    origin, tries = {}, {}
    for fn in sorted(os.listdir(PROMPTS)):
        if not fn.endswith("_log.json"):
            continue
        b = fn[:-len("_log.json")]
        try:
            log = json.load(io.open(os.path.join(PROMPTS, fn), encoding="utf-8"))
        except Exception:
            continue
        for k, v in log.items():
            if v is not True:
                continue
            tries[k] = tries.get(k, 0) + 1
            if not b.startswith("batch_fixes"):
                origin[k] = b
    return origin, tries


def build():
    nm, (origin, tries) = names(), batches()
    label = lambda k: nm.get(k, k)

    aside = {}
    for k, b in origin.items():
        if b in SET_ASIDE_BATCHES:
            aside.setdefault(SET_ASIDE_BATCHES[b], []).append(k)

    exhausted = sorted(k for k, n in tries.items()
                       if n >= 3 and k not in FLAGGED and k not in APPROVED
                       and origin.get(k) not in SET_ASIDE_BATCHES)

    L = []
    w = L.append
    w("ONE AT A TIME")
    w("=" * 62)
    w("Species the bulk passes could not get right. Rebuild these individually,")
    w("with reference pictures open. Regenerate with:")
    w("    python design/art_pipeline/one_by_one.py")
    w("")
    total = len(FLAGGED) + sum(len(v) for v in aside.values()) + len(exhausted)
    w("%d species in total." % total)
    w("")

    w("-" * 62)
    w("CIRCLED BY AYR AFTER ITS FIX PASSES   (%d)" % len(FLAGGED))
    w("-" * 62)
    w("Still wrong after bulk fixing, so bulk fixing is not going to do it.")
    w("")
    for k in sorted(FLAGGED):
        w("  %-24s %-34s circled on %s" % (k, label(k), FLAGGED[k]))
    w("")

    for grp in sorted(aside):
        ks = sorted(aside[grp])
        w("-" * 62)
        w("%s - SET ASIDE FROM THE START   (%d)" % (grp.upper(), len(ks)))
        w("-" * 62)
        w("Never entered bulk fixing. Ayr reserved these for individual work.")
        w("")
        for k in ks:
            w("  %-24s %s" % (k, label(k)))
        w("")

    w("-" * 62)
    w("OUT OF BULK ATTEMPTS   (%d)" % len(exhausted))
    w("-" * 62)
    w("At or past three renders, never circled but never approved either -")
    w("they have not come back on a sheet Ayr has graded. Check one against its")
    w("sprite before spending time on it. %d others are past three renders and"
      % len(APPROVED))
    w("already approved, so they are finished and not listed here.")
    w("")
    for k in exhausted:
        w("  %-24s %-34s %d attempts" % (k, label(k), tries[k]))
    w("")
    return "\n".join(L) + "\n"


if __name__ == "__main__":
    txt = build()
    if "--show" in sys.argv:
        sys.stdout.write(txt)
    else:
        io.open(OUT, "w", encoding="utf-8", newline="\n").write(txt)
        print("wrote %s  (%d lines)" % (OUT, txt.count("\n")))
