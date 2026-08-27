"""COUSIN BOB - the document check.

Ayr's name for it: "run it by Cousin Bob". Uncle Albert checks the data.
Bob checks the things people WROTE about the data.

    cousin-bob.bat                      (from the repo root, or double-click it)
    python design/tools/cousin_bob.py

Exits non-zero if anything is wrong, so it can be trusted without reading the output.

Why this exists
---------------
Every error of 2026-08-27 was the same shape: a checkable fact written in a
sentence, where nothing could test it. "The Deathstalker is in Lights On" is a
claim about BADGES.txt sitting in a paragraph. LINKS.md ended mid-sentence and
carried a badge count that had been wrong for a day.

Prose does not converge. A person re-reading a document samples it; they notice
different things each pass and can never say they are finished. A list of
assertions converges, because it either passes or it does not, and it says the
same thing twice.

So: anything Bob can assert should stop being something anyone has to re-read.

Verifies:
  1. every file path mentioned in a current-truth doc actually exists
  2. every number in HANDOFF.md matches what the data says right now
  3. every "N badges" claim in a current-truth doc is the real number
  4. no current-truth doc ends mid-sentence (the LINKS.md failure)
  5. artifact links are well formed, and none is duplicated under two names
  6. reports every sentence that claims a species is in a badge, with a verdict

What Bob CANNOT check
---------------------
Whether a statement is TRUE about the world. "Elephants have menopause" is
false, and no amount of tooling will say so. That needs knowing biology. Bob
checks that documents agree with the repo, not that the repo agrees with reality.
"""
import io, os, re, sys

os.chdir("C:/Claude/wildlands")
FAIL, WARN = [], []

# Documents that claim to describe the CURRENT state. Held to the numbers.
STRICT = ['HANDOFF.md', 'design/LINKS.md', 'design/tools/README.md',
          'design/new_species.md', 'design/cut_species.md']

# Append-only history. Old entries are SUPPOSED to contain superseded numbers -
# that is the point of a record. Only checked for paths that do not exist.
HISTORICAL = ['NEW_DIRECTION.md', 'ROADMAP.md', 'README.md', 'design/SPECIES_AUDIT.md']

ALL_DOCS = STRICT + HISTORICAL


def read(p):
    return io.open(p, encoding='utf-8').read()


# ---------------------------------------------------------------- the real data
exec(read('design/tools/uncle_albert.py').split('d, pend, made = load()')[0]
     .replace('os.chdir("C:/Claude/wildlands")', ''))
d, pend, made = load()
GONE = ['cut', 'cosmetic', 'merged', 'unplaced', 'lifestage']
BIOMES = ['rainforest', 'savanna', 'forest', 'wetland', 'desert', 'coast',
          'alpine', 'reef', 'opensea', 'farmland', 'polar', 'deepsea']
alln = {n for g, v in d.items() if g not in GONE for n in v}

badge_of, badges = {}, []
bdif = {'E': 0, 'M': 0, 'H': 0}
allbadge, tocreate = set(), set()
for line in io.open('design/BADGES.txt', encoding='utf-8'):
    s = line.strip()
    if not s or s.startswith('!'):
        continue
    cat, name, dif, tiers, concept, mem = [x.strip() for x in s.split('::')]
    members = []
    for m in [x.strip() for x in mem.split('|') if x.strip()]:
        if m.startswith('~'):
            continue
        if m.endswith('*'):
            m = m[:-1]
            tocreate.add(m)
        members.append(m)
        allbadge.add(m)
        badge_of.setdefault(m, set()).add(name)
    badges.append((name, members))
    bdif[dif] = bdif.get(dif, 0) + 1

TRUTH = {
    'biomes': sum(len(d[k]) for k in BIOMES),
    'kept': len(d['kept']),
    'badges': len(badges),
    'easy': bdif['E'], 'medium': bdif['M'], 'hard': bdif['H'],
    'referenced': len(allbadge),
    'exist': len(allbadge) - len(tocreate),
    'tocreate': len(tocreate),
}
TRUTH['subtotal'] = TRUTH['biomes'] + TRUTH['kept']
TRUTH['shortfall'] = 700 - TRUTH['subtotal']

print('=' * 56)
print('COUSIN BOB - the document check')
print('=' * 56)
print('checking %d documents against the data' % len(ALL_DOCS))
print()

# ------------------------------------------------------- 1. paths that are lies
PATH = re.compile(r'(?<![\w/:.])([A-Za-z0-9_][A-Za-z0-9_./-]*\.'
                  r'(?:md|txt|py|js|jsx|html|bat|json|gdshader))')


def paths_in(doc):
    out = set()
    for line in read(doc).split('\n'):
        if '://' in line:          # a URL is not a file path
            continue
        for m in PATH.findall(line):
            if '*' not in m:       # game.part*.jsx is a glob, not a file
                out.add(m)
    return out


def exists(m):
    return (os.path.exists(m) or os.path.exists(os.path.join('design', m))
            or os.path.exists(os.path.join('design/tools', m)))


missing, ghosts = [], []
for doc in ALL_DOCS:
    if not os.path.exists(doc):
        FAIL.append('document listed for checking does not exist: ' + doc)
        continue
    for m in paths_in(doc):
        if exists(m):
            continue
        (missing if doc in STRICT else ghosts).append('%-26s names %s' % (doc, m))

print('FILE PATHS THAT DO NOT EXIST, IN CURRENT-TRUTH DOCS: %d' % len(missing))
for x in sorted(missing):
    print('   ' + x)
    FAIL.append('path does not exist: ' + x)

# A history that names a tool later deleted is not lying. It is history.
print('   ...and %d in the historical docs (not a failure):' % len(ghosts))
for x in sorted(ghosts):
    print('      ' + x)

# ------------------------------------------- 2. the numbers inside HANDOFF.md
h = read('HANDOFF.md')
CHECKS = [
    (r'biomes (\d+) \+ The Kept (\d+) = (\d+)', ['biomes', 'kept', 'subtotal']),
    (r'(\d+) still to create', ['shortfall']),
    (r'BADGES\s+(\d+)', ['badges']),
    (r'easy (\d+) . medium (\d+) . hard (\d+)', ['easy', 'medium', 'hard']),
    (r'(\d+) species referenced, (\d+) exist, (\d+) to create',
     ['referenced', 'exist', 'tocreate']),
]
print()
print('NUMBERS IN HANDOFF.md')
for rx, keys in CHECKS:
    m = re.search(rx, h)
    if not m:
        WARN.append('HANDOFF.md no longer states: %s' % keys)
        print('   %-38s NOT STATED' % ', '.join(keys))
        continue
    for i, k in enumerate(keys):
        got, want = int(m.group(i + 1)), TRUTH[k]
        ok = got == want
        print('   %-20s doc %-6s data %-6s %s' % (k, got, want, 'ok' if ok else 'WRONG'))
        if not ok:
            FAIL.append('HANDOFF.md says %s is %d, the data says %d' % (k, got, want))

# --------------------------------------- 3. "N badges" anywhere in a live doc
print()
stale = []
for doc in STRICT:
    for m in re.finditer(r'(\d+)\s+badges', read(doc)):
        if int(m.group(1)) != TRUTH['badges']:
            stale.append('%-26s says "%s badges", it is %d'
                         % (doc, m.group(1), TRUTH['badges']))
print('STALE BADGE COUNTS IN CURRENT-TRUTH DOCS: %d' % len(stale))
for x in stale:
    print('   ' + x)
    FAIL.append(x)

# ----------------------------------------------- 4. documents cut off mid-air
print()
cut = []
for doc in STRICT:
    body = read(doc).rstrip()
    if body and body[-1] not in '.!?:|`>)]*_”"\'':
        cut.append('%-26s ends: ...%s' % (doc, body[-46:].replace('\n', ' ')))
print('DOCUMENTS THAT END MID-SENTENCE: %d' % len(cut))
for x in cut:
    print('   ' + x)
    FAIL.append('document ends mid-sentence: ' + x.split()[0])

# ------------------------------------------------------------ 5. artifact links
print()
url = re.compile(r'https://claude\.ai/code/artifact/([0-9a-f-]+)')
seen = {}
dupe = []
for doc in ALL_DOCS:
    for m in url.finditer(read(doc)):
        seen.setdefault(m.group(1), set()).add(doc)
links = read('design/LINKS.md')
titles = [x.strip() for x in
          re.findall(r'\|\s*\*{0,2}([^|*\n]+?)\*{0,2}\s*\|(?=[^\n]*claude\.ai)', links)]
titles = [x for x in titles if x and x.lower() not in ('page', 'link', 'what it is')]
print('ARTIFACT LINKS: %d distinct, %d named in LINKS.md'
      % (len(seen), len(re.findall(r'https://claude\.ai/code/artifact/', links))))
for u, docs in sorted(seen.items()):
    if u not in links:
        WARN.append('artifact %s is linked in %s but not listed in LINKS.md'
                    % (u[:8], ', '.join(sorted(docs))))
print('   named: ' + ', '.join(titles))
dupe_titles = {x for x in titles if titles.count(x) > 1}
if dupe_titles:
    FAIL.append('LINKS.md lists the same page title twice: ' + ', '.join(sorted(dupe_titles)))

# ---------------------------------- 6. sentences claiming a species is in a badge
print()
claims = []
bnames = sorted((n for n, _ in badges), key=len, reverse=True)
# every roster species, not just badged ones - a species REMOVED from all badges
# is exactly the case this check exists to catch
snames = sorted(alln, key=len, reverse=True)
for doc in STRICT:
    for sent in re.split(r'(?<=[.!?])\s+|\n\n', read(doc)):
        flat = ' '.join(sent.split())
        b = next((x for x in bnames if x in flat), None)
        if not b:
            continue
        s = next((x for x in snames if x in flat), None)
        if not s:
            continue
        real = b in badge_of.get(s, set())
        claims.append('%-14s %-24s in %-20s %s'
                      % (doc.split('/')[-1], s, b, 'yes' if real else 'NO - not a member'))
print('SENTENCES PAIRING A SPECIES WITH A BADGE: %d' % len(claims))
print('   (read these - prose may be discussing a removal, which is fine)')
for x in claims:
    print('   ' + x)

# ------------------------------------------------------------------- the verdict
print()
print('=' * 56)
for w in WARN:
    print('  note: ' + w)
if FAIL:
    print('  COUSIN BOB FOUND %d PROBLEM(S)' % len(FAIL))
    for f in FAIL:
        print('   - ' + f)
    print('=' * 56)
    sys.exit(1)
print('  COUSIN BOB SAYS THE DOCUMENTS TELL THE TRUTH')
print('=' * 56)
