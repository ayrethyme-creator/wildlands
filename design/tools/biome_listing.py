"""Every creature in the DEX, grouped by biome or postgame set. Re-runnable.

TWO THINGS THIS TOOL MUST NOT NARROW AGAIN, both of which caused wrong numbers:

1. DEX entries come in two styles. Reading only the constructor form finds 861 of
   ~1000 species and silently drops every starter and much of the savanna:

       fennec:   { n: "Fennec Fox", art: "fennec", ... }   object literal
       aardvark: A("Aardvark", ...)                         constructor call

2. biome_assign.js holds FOUR assignment blocks plus dot-assignments, applied in
   file order with later winning. Reading only the first throws away every
   correction Ayr has made:

       var BIOME_BY_HAND = {...}   species with no habitat sentence
       var BIOME_FIX     = {...}   where the habitat RULES misfired
       var BIOME_MOVE    = {...}   Ayr's redistribution, 2026-08-24
       var FR            = {...}   Ayr's forest/rainforest review, 2026-08-25
       BIOME_BY_HAND.x = "y";      later one-offs

Group membership follows the game's own groupOf() in game.part59.jsx:
mem -> Vigil, type "Fossil" -> The Record, type "Mythic" -> The Telling,
dom/breed -> The Kept, otherwise living.
"""
import io, re, glob, os
from collections import defaultdict

os.chdir("C:/Claude/wildlands")
src = ''.join(io.open(f, encoding='utf-8', errors='replace').read()
              for f in sorted(glob.glob('game.part*.jsx')))
BS = chr(92)


def _scan(s, i, opens, closes):
    depth, j, instr, esc = 0, i, None, False
    while j < len(s):
        c = s[j]
        if instr is not None:
            if esc: esc = False
            elif c == BS: esc = True
            elif c == instr: instr = None
        else:
            if c in ('"', "'", '`'): instr = c
            elif c in opens: depth += 1
            elif c in closes:
                depth -= 1
                if depth == 0: return s[i + 1:j], j
        j += 1
    return '', len(s)


def entries(body):
    """(key, value_text) pairs at depth 0 of an object body."""
    out, depth, j, instr, esc, start, key = [], 0, 0, None, False, None, None
    while j < len(body):
        c = body[j]
        if instr is not None:
            if esc: esc = False
            elif c == BS: esc = True
            elif c == instr: instr = None
            j += 1; continue
        if c in ('"', "'", '`'): instr = c
        elif c in '{[(': depth += 1
        elif c in '}])': depth -= 1
        elif depth == 0:
            if c == ',' and key is not None:
                out.append((key, body[start:j])); key = None
            else:
                m = re.match(r'([A-Za-z_][A-Za-z0-9_]*)\s*:', body[j:])
                if m and (j == 0 or body[j - 1] in ',\n\r \t'):
                    key = m.group(1); j += m.end(); start = j; continue
        j += 1
    if key is not None: out.append((key, body[start:]))
    return out


DEX = {}
spots = []
for m in re.finditer(r'(?:const|var)\s+DEX\s*=\s*\{', src):
    spots.append(m.end() - 1)
for m in re.finditer(r'Object\.assign\(\s*DEX\s*,\s*\{', src):
    spots.append(m.end() - 1)
for i in sorted(spots):
    body, _ = _scan(src, i, '{', '}')
    for k, v in entries(body):
        # A real DEX entry is either a constructor call or an object with n:/art:.
        # Without this, prose inside nested strings leaks in as fake keys.
        if re.match(r'\s*[A-Za-z][A-Za-z0-9_]*\s*\(', v) or re.search(r'(n|art):', v):
            DEX[k] = v

hab, disp = {}, {}
STR = re.compile('"([^"]*)"')
for m in re.finditer(r'\b(note2?|fnote)\s*\(', src):
    a = STR.findall(_scan(src, m.end() - 1, '(', ')')[0])
    if len(a) >= 3: hab.setdefault(a[0], a[2])
for m in re.finditer(r'([a-z0-9_]+):\s*\{', src):
    seg = src[m.end() - 1:m.end() + 800]
    h = re.search(r'\bh:\s*"([^"]*)"', seg)
    if h: hab.setdefault(m.group(1), h.group(1))
for k, v in DEX.items():
    n = re.search(r'\bn:\s*"([^"]*)"', v) or re.search(r'^\s*[A-Za-z]+\("([^"]*)"', v)
    disp[k] = n.group(1) if n else k

d = io.open('design/biomes.js', encoding='utf-8').read()
rules = [(m.group(1), m.group(2)) for m in re.finditer(r'\["([a-z]+)",\s*/(.+?)/i\]', d)]
merge = dict(re.findall(r'(\w+):\s*"(\w+)"', d[d.index('BIOME_MERGE'):]))

h = io.open('design/biome_assign.js', encoding='utf-8').read()
VALID = {"forest", "rainforest", "savanna", "wetland", "coast", "desert", "reef",
         "polar", "opensea", "alpine", "farmland", "deepsea", "cave", "taiga",
         "kelp", "polarsea", "tundra"}
hand, blocks = {}, []
for m in re.finditer(r'var\s+(\w+)\s*=\s*\{', h):
    body, _ = _scan(h, m.end() - 1, '{', '}')
    pairs = [(k, v) for k, v in re.findall(r'([a-z0-9_]+)\s*:\s*"(\w+)"', body) if v in VALID]
    if pairs:
        blocks.append((m.group(1), len(pairs)))
        hand.update(pairs)
for k, v in re.findall(r'BIOME_BY_HAND\.(\w+)\s*=\s*"(\w+)"', h):
    hand[k] = v
nots = set(re.findall('"([a-z0-9_]+)"', h[h.index('NOT_A_SPECIES'):h.index('BIOME_BY_HAND')]))
for m in re.finditer(r'NOT_A_SPECIES\.push\(([^)]*)\)', h):
    nots.update(re.findall('"([a-z0-9_]+)"', m.group(1)))
for m in re.finditer(r'\[([^\]]*)\]\.forEach\(function \(k\) \{ NOT_A_SPECIES\.push', h):
    nots.update(re.findall('"([a-z0-9_]+)"', m.group(1)))

NOT_LIVING = {"mammoth": "extinct - belongs in The Record",
              "alpaca": "domesticated - belongs in The Kept",
              "llama": "domesticated - belongs in The Kept"}


def group_of(k, v):
    if re.search(r'\bmem:\s*true', v) or re.match(r'\s*V\(', v): return 'vigil'
    if re.match(r'\s*MY\(', v) or '"Mythic"' in v: return 'mythic'
    if re.match(r'\s*FD\(', v) or '"Fossil"' in v: return 'fossil'
    if re.match(r'\s*WD\(', v): return 'warden'
    if re.match(r'\s*P\(', v) or re.search(r'\b(dom|breed):\s*true', v): return 'kept'
    return 'living'


def classify(sp):
    if sp in hand: return hand[sp]
    t = hab.get(sp, '')
    for name, pat in rules:
        if re.search(pat, t, re.I): return name
    return None


NICE = {"alpine": ("Mountains", "The Divide"), "coast": ("Coast", "The Strand"),
        "deepsea": ("Deep Sea", "The Dark"), "desert": ("Desert", "The Dry"),
        "farmland": ("Farmland", "The Furrows"), "forest": ("Forest", "The Weald"),
        "opensea": ("Open Ocean", "The Blue"), "polar": ("Polar", "The Floe"),
        "rainforest": ("Rainforest", "The Canopy"), "reef": ("Reef", "The Garden"),
        "savanna": ("Savanna", "The Long Grass"), "wetland": ("Wetlands", "The Fens")}
GNAME = {"vigil": ("The Vigil & On the Brink", "the extinct, and the nearly gone"),
         "mythic": ("The Telling", "mythology"), "fossil": ("The Record", "fossils"),
         "kept": ("The Kept", "breeds and domestics"),
         "warden": ("Wardens", "invented for Safari Saga - cut from this game")}

by = defaultdict(list)
stages, excluded, unplaced = [], [], []
for k, v in sorted(DEX.items()):
    g = group_of(k, v)
    if g != 'living':
        by['G:' + g].append(k); continue
    if k in nots or re.search(r'\bjuv:\s*true', v) or re.search(r'_(j|c|f|p|i|e|j2)$', k):
        stages.append(k); continue
    if k in NOT_LIVING:
        excluded.append(k); continue
    b = classify(k)
    if b is None: unplaced.append(k); continue
    by['B:' + merge.get(b, b)].append(k)

border = ['B:' + x for x in ['rainforest', 'forest', 'savanna', 'wetland', 'coast',
                             'desert', 'reef', 'opensea', 'polar', 'alpine',
                             'farmland', 'deepsea']]
gorder = ['G:' + x for x in ['vigil', 'mythic', 'fossil', 'kept', 'warden']]
biome_total = sum(len(by[k]) for k in border if k in by)

if __name__ == '__main__':
    print('DEX entries parsed :', len(DEX))
    print('assignment blocks  :', blocks)
    print()
    print('IN THE TWELVE BIOMES')
    for k in border:
        if k in by: print('  %-12s %-16s %d' % (NICE[k[2:]][0], NICE[k[2:]][1], len(by[k])))
    print('  %-29s %d' % ('TOTAL', biome_total))
    print()
    print('POSTGAME GROUPS')
    for k in gorder:
        if k in by: print('  %-29s %d' % (GNAME[k[2:]][0], len(by[k])))
    print()
    print('  %-29s %d' % ('life stages (not species)', len(stages)))
    print('  %-29s %d' % ('excluded (extinct/domestic)', len(excluded)))
    print('  %-29s %d' % ('UNPLACED', len(unplaced)))
    tot = biome_total + sum(len(by[k]) for k in gorder if k in by) + len(stages) + len(excluded) + len(unplaced)
    print()
    print('  check: %d == %d DEX entries -> %s' % (tot, len(DEX), tot == len(DEX)))
    if unplaced:
        print()
        print('  unplaced:', ', '.join(unplaced[:40]))
