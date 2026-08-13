import json, os, shutil, re

SCRATCH = os.path.dirname(os.path.abspath(__file__))
ROSTER = json.load(open(os.path.join(SCRATCH, "roster.json"), encoding="utf-8"))
ARTDIR = "C:/Claude/wildlands/art"
GAME_FILE = "C:/Claude/wildlands/game.part2.jsx"

primary = [r for r in ROSTER if r[4]]
secondary = [r for r in ROSTER if not r[4]]

# artKey -> primary dexKey (the one that should have the generated file)
artkey_to_primary = {}
for r in primary:
    dexKey, name, cat, artKey, isPrimary = r
    artkey_to_primary[artKey] = dexKey

def has_art(dexKey):
    return os.path.exists(os.path.join(ARTDIR, f"{dexKey}.png"))

# 1. Copy secondaries from their primary's finished file
copied = []
skipped_secondary = []
for r in secondary:
    dexKey, name, cat, artKey, isPrimary = r
    prim_key = artkey_to_primary.get(artKey)
    if prim_key and has_art(prim_key):
        src = os.path.join(ARTDIR, f"{prim_key}.png")
        dst = os.path.join(ARTDIR, f"{dexKey}.png")
        shutil.copyfile(src, dst)
        copied.append((dexKey, prim_key))
    else:
        skipped_secondary.append(dexKey)

# 2. Build full list of dexKeys with art (primary successes + secondary copies)
all_dexkeys = sorted(set(
    [r[0] for r in primary if has_art(r[0])] +
    [c[0] for c in copied]
))

# 3. Report which primaries are missing (skipped/failed)
missing_primary = [r for r in primary if not has_art(r[0])]

print(f"Primary species with art: {len(all_dexkeys) - len(copied)}")
print(f"Secondary copies made: {len(copied)}")
print(f"Total dexKeys with art: {len(all_dexkeys)}")
print(f"Missing/skipped primaries: {len(missing_primary)}")
for r in missing_primary:
    print("  MISSING:", r[0], r[1], r[2])

# 4. Rebuild PHOTO_ART object and write into game.part2.jsx
lines = ["const PHOTO_ART = {"]
for k in all_dexkeys:
    lines.append(f'  "{k}": true,')
lines.append("};")
photo_art_block = "\n".join(lines)

src = open(GAME_FILE, encoding="utf-8").read()
pattern = re.compile(r"const PHOTO_ART = \{[^}]*\};", re.DOTALL)
if not pattern.search(src):
    raise SystemExit("Could not find PHOTO_ART block in game.part2.jsx")
new_src = pattern.sub(photo_art_block, src, count=1)
with open(GAME_FILE, "w", encoding="utf-8") as f:
    f.write(new_src)
print("game.part2.jsx updated with", len(all_dexkeys), "entries")
