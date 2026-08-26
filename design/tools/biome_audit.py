import io, re, glob, os
from collections import Counter

os.chdir("C:/Claude/wildlands")
src = ''.join(io.open(f, encoding='utf-8', errors='replace').read()
              for f in sorted(glob.glob('game.part*.jsx')))

BACKSLASH = chr(92)
QUOTES = ('"', "'")

def args_at(s, i):
    """Balanced-paren arg extraction; i is the index of the opening paren."""
    depth = 0
    j = i
    instr = None
    esc = False
    while j < len(s):
        c = s[j]
        if instr is not None:
            if esc:
                esc = False
            elif c == BACKSLASH:
                esc = True
            elif c == instr:
                instr = None
        else:
            if c in QUOTES:
                instr = c
            elif c == '(':
                depth += 1
            elif c == ')':
                depth -= 1
                if depth == 0:
                    return s[i + 1:j]
        j += 1
    return ''

STR = re.compile('"([^"]*)"')

# --- habitat sentences -------------------------------------------------
hab = {}
for m in re.finditer(r'\b(note2?|fnote)\s*\(', src):
    body = args_at(src, m.end() - 1)
    a = STR.findall(body)
    if len(a) >= 3:
        hab.setdefault(a[0], a[2])
for m in re.finditer(r'([a-z0-9_]+):\s*\{', src):
    seg = src[m.end() - 1:m.end() + 800]
    h = re.search(r'\bh:\s*"([^"]*)"', seg)
    if h:
        hab.setdefault(m.group(1), h.group(1))

# --- species by constructor -------------------------------------------
ctor = {}
for m in re.finditer(r'([a-z0-9_]+):\s*([A-Z]{1,2})\(', src):
    ctor.setdefault(m.group(1), m.group(2))
living = {k for k, c in ctor.items() if c in ('A', 'E')}

# --- rules -------------------------------------------------------------
d = io.open('design/biomes.js', encoding='utf-8').read()
rules = [(m.group(1), m.group(2)) for m in re.finditer(r'\["([a-z]+)",\s*/(.+?)/i\]', d)]
merge = dict(re.findall(r'(\w+):\s*"(\w+)"', d[d.index('BIOME_MERGE'):]))

h = io.open('design/biome_assign.js', encoding='utf-8').read()
hand = dict(re.findall(r'BIOME_BY_HAND\.(\w+)\s*=\s*"(\w+)"', h))
_blk = h[h.index('var BIOME_BY_HAND = {'):]
_blk = _blk[:_blk.index('};')]
for _k, _v in re.findall(r'([a-z0-9_]+)\s*:\s*"(\w+)"', _blk):
    hand.setdefault(_k, _v)
nots = set(re.findall(r'"([a-z0-9_]+)"',
                      h[h.index('NOT_A_SPECIES'):h.index('BIOME_BY_HAND')]))

def classify(sp):
    if sp in hand:
        return hand[sp], 'hand'
    t = hab.get(sp, '')
    if not t:
        return None, 'no-habitat-text'
    for name, pat in rules:
        if re.search(pat, t, re.I):
            return name, 'rule'
    return None, 'no-rule-matched'

counts = Counter()
why = Counter()
unplaced = []
for sp in sorted(living):
    if sp in nots or re.search(r'_(j|c|f|p|j2|i)$', sp):
        continue
    b, how = classify(sp)
    why[how] += 1
    if b is None:
        unplaced.append((sp, hab.get(sp, '')[:60]))
        continue
    counts[merge.get(b, b)] += 1

print('habitat sentences extracted :', len(hab))
print('living species (A/E ctors)  :', len(living))
print('classified                  :', sum(counts.values()))
print('unplaced                    :', len(unplaced))
print()
for k, v in counts.most_common():
    print('  %-12s %d' % (k, v))
print()
print('reasons:', dict(why))
print()
print('--- first 40 unplaced ---')
for sp, t in unplaced:
    print('  %-24s %s' % (sp, t or '(no habitat text at all)'))
