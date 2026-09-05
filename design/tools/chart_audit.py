"""Read the type chart out of the game source and score every type.

Ayr, 2026-09-05: "the night type is too powerful and doesn't have enough
weaknesses." This checks that against the other twelve rather than trusting the
impression - and weights it by how many species actually carry each type, because
a weakness to a type nobody owns is not a weakness you will ever meet.

The chart is built in two places: part1 declares nine types and part3b adds the
other four and patches the originals. Both are read here, in that order, the same
way the game applies them.
"""
import io, os, re, json

# Repo-relative, so this works in the main checkout and in any worktree.
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def read(name):
    return io.open(os.path.join(ROOT, name), encoding="utf-8").read()


def obj_literal(text, start_marker, end_marker):
    """Pull a `{ Key: n, ... }` block and turn it into a dict."""
    i = text.index(start_marker) + len(start_marker)
    j = text.index(end_marker, i)
    body = text[i:j]
    out = {}
    for m in re.finditer(r"(\w+)\s*:\s*\{([^}]*)\}", body):
        inner = {}
        for k, v in re.findall(r"(\w+)\s*:\s*([\d.]+)", m.group(2)):
            inner[k] = float(v)
        out[m.group(1)] = inner
    return out


p1, p3b = read("game.part1.jsx"), read("game.part3b.jsx")
CHART = obj_literal(p1, "const CHART = {", "\n};")
CHART.update(obj_literal(p3b, "Object.assign(CHART, {", "\n});"))
# the single-line patches: CHART.Predator.Canopy = 2;
for atk, dfn, val in re.findall(r"CHART\.(\w+)\.(\w+)\s*=\s*([\d.]+)", p3b):
    CHART.setdefault(atk, {})[dfn] = float(val)

TYPES = sorted(CHART.keys())

# How many species carry each type. NOT parsed out of the .jsx - a first version
# of this script did that and reported Bug 0 and Night 2, because DEX entries come
# in several shapes and a regex catches whichever one it was written for. These
# are read from window.__DEX in the running game via gallery.html, 2026-09-04,
# which is the only count this project trusts.
SPECIES = {
    "Aerial": 189, "Aquatic": 373, "Armor": 218, "Bug": 67, "Burrow": 94,
    "Canopy": 146, "Ember": 25, "Fossil": 71, "Ice": 107, "Mythic": 100,
    "Night": 133, "Predator": 193, "Swift": 311, "Venom": 66, "Wild": 246,
}

print("chart types:", len(TYPES))
print()
hdr = "%-9s %-28s %-30s %5s %5s" % ("TYPE", "weak to (x2)", "resists (x0.5)", "#weak", "#res")
print(hdr); print("-" * len(hdr))

rows = []
for d in TYPES:
    weak = [a for a in TYPES if CHART.get(a, {}).get(d) == 2]
    res = [a for a in TYPES if CHART.get(a, {}).get(d) == 0.5]
    # weighted: a weakness only counts as much as the type is common
    wpop = sum(SPECIES.get(a, 0) for a in weak)
    rows.append((d, weak, res, wpop))

for d, weak, res, wpop in sorted(rows, key=lambda r: (len(r[1]), -len(r[2]))):
    print("%-9s %-28s %-30s %5d %5d   attackers carrying a weakness: %d species"
          % (d, ",".join(weak) or "-", ",".join(res) or "-", len(weak), len(res), wpop))

print()
print("species per type:", ", ".join("%s %d" % (t, SPECIES.get(t, 0)) for t in TYPES))
