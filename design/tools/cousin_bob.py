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
  2. every number in HANDOFF.md and GDD.md matches what the data says right now
  3. every "N badges" claim in a current-truth doc is the real number
  4. no current-truth doc ends mid-sentence (the LINKS.md failure)
  5. artifact links are well formed, and none is duplicated under two names
  6. reports every sentence that claims a species is in a badge, with a verdict
  7. every CONFIRMED batch in new_species.md has reached PENDING_MOVES.txt
  8. no badge star is an animal the roster already holds under another name

Checks 7 and 8 were added 2026-08-28, and both fired immediately.

Seven is the same failure as the others, one level up: Ayr approved the open
ocean, coral reef and coast batches by name, with a quote, on 2026-08-25. They
were written into new_species.md and never transcribed into PENDING_MOVES.txt -
61 species, sitting in prose, invisible to Uncle Albert because he only reads
the pipeline. The biomes then showed up in HANDOFF.md as "thinnest", which read
as a design gap rather than a filing one.

Eight is what happens when a rename lands and the badge file does not follow.
Albert checks that a starred member is ABSENT from the roster, and it always is,
because the animal is filed under its new name - "Leaf Insect*" while the roster
holds Giant Leaf Insect. Six of these were found at once; four were renames the
generics audit had already applied.

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
STRICT = ['HANDOFF.md', 'GDD.md', 'design/LINKS.md', 'design/tools/README.md',
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
TRUTH['badrep'] = len(dict(badges)['Bad Reputation'])
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

# ------------------------------------------------ 2b. the numbers inside GDD.md
g = read('GDD.md')
GDD_CHECKS = [
    (r'(\d+) of the 700 exist and (\d+) remain', ['subtotal', 'shortfall']),
    (r'\*\*Bad Reputation\*\*, (\d+) members', ['badrep']),
]
print()
print('NUMBERS IN GDD.md')
for rx, keys in GDD_CHECKS:
    m = re.search(rx, g)
    if not m:
        WARN.append('GDD.md no longer states: %s' % keys)
        print('   %-38s NOT STATED' % ', '.join(keys))
        continue
    for i, k in enumerate(keys):
        got, want = int(m.group(i + 1)), TRUTH[k]
        ok = got == want
        print('   %-20s doc %-6s data %-6s %s' % (k, got, want, 'ok' if ok else 'WRONG'))
        if not ok:
            FAIL.append('GDD.md says %s is %d, the data says %d' % (k, got, want))

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
    # A markdown table row has no full stop, so consecutive rows merged into one
    # "sentence" and every species got paired with the PREVIOUS row's badge. Six
    # false hits appeared the moment new_species.md grew tables, 2026-08-29.
    # A report you learn to ignore is worse than no report, so rows split too.
    for sent in re.split(r'(?<=[.!?])\s+|\n\n|\n(?=\s*\|)', read(doc)):
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

# ------------------------------- 7. approvals that never reached the pipeline
# The failure of 2026-08-25/26: three batches Ayr approved BY NAME, with a quote,
# were written into design/new_species.md and never transcribed into
# PENDING_MOVES.txt. Open ocean and coral reef had no new> line at all, and coast
# had one. Nothing could see it, because an approval sitting in prose is exactly
# the thing no tool was checking - which is the reason Bob exists.
#
# Deliberately checked at BATCH level, not species level. Pulling species names
# out of prose gives false positives by the dozen; a section heading either has a
# matching destination in the pipeline or it does not, and that converges.
SECTION_BIOME = {
    'DEEP SEA': 'deepsea', 'OPEN OCEAN': 'opensea', 'CORAL REEF': 'reef',
    'COAST & KELP': 'coast', 'MOUNTAINS': 'alpine', 'DESERT': 'desert',
    'POLAR': 'polar', 'FARMLAND': 'farmland',
    # Added 2026-08-29 when the roster closed: every biome now has a batch
    # heading, so every batch is checkable rather than only the seven that
    # happened to have been written up.
    'WETLAND': 'wetland', 'SAVANNA': 'savanna', 'FOREST': 'forest',
    'RAINFOREST': 'rainforest',
}
pipeline = {}
for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
    line = line.rstrip('\n')
    if not line or line.startswith('!') or '=' not in line:
        continue
    route, names = line.split('=', 1)
    if route.startswith('new>'):
        pipeline.setdefault(route[4:], []).extend(names.split('|'))

print()
print('APPROVED BATCHES vs THE PIPELINE')
ns = read('design/new_species.md')
batches = re.findall(r'^##\s+([A-Z][A-Z &\']+?)\s*[-—]+\s*'
                     r'(CONFIRMED|LIKELY|proposed)[^\n]*?(\d+)\s*species', ns, re.M | re.I)
if not batches:
    WARN.append('new_species.md no longer has parseable batch headings')
    print('   NO BATCH HEADINGS FOUND')
for name, status, want in batches:
    key = SECTION_BIOME.get(name.strip())
    if key is None:
        WARN.append('new_species.md batch "%s" has no biome mapping in Bob' % name.strip())
        continue
    got = len(pipeline.get(key, []))
    want = int(want)
    firm = status.upper() == 'CONFIRMED'
    if got == 0:
        verdict = 'NOTHING IN THE PIPELINE'
        if firm:
            FAIL.append('new_species.md marks %s CONFIRMED (~%d species) but '
                        'PENDING_MOVES.txt has no "new>%s" line at all'
                        % (name.strip(), want, key))
    elif got < want:
        verdict = 'short by %d' % (want - got)
        if firm:
            WARN.append('%s is CONFIRMED at ~%d but the pipeline holds %d'
                        % (name.strip(), want, got))
    else:
        verdict = 'ok'
    print('   %-13s %-9s doc ~%-4d pipeline %-4d %s'
          % (name.strip(), status.upper(), want, got, verdict))

# --------------------------- 8. badge stars for species that already exist
# Uncle Albert checks that a starred badge member is absent from the roster, and
# it always is - because the same animal is filed under another name. Four of the
# eight found on 2026-08-28 were renames the generics audit had already applied:
# "Leaf Insect*" while the roster holds Giant Leaf Insect. This recurs every time
# a rename touches a badge member, so it needs a check rather than a re-read.
SYNONYMS = {           # curated: no algorithm finds these, they are real synonyms
    'Brazilian Free-tailed Bat': 'Mexican Free-tailed Bat',
    'Periodical Cicada': 'Seventeen-year Cicada',
    'Galapagos Giant Tortoise': 'Pinta Island Tortoise',
    'Domestic Pigeon': 'Fancy Pigeon',
    'Comb Jelly': "Venus's Girdle",
}
rename_src = {}
for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
    line = line.rstrip('\n')
    if line.startswith('RENAME='):
        for pair in line.split('=', 1)[1].split('|'):
            a, b = pair.split('::')
            rename_src[a] = b


def flat(s):
    return re.sub(r'[^a-z]', '', s.lower())


def dist(a, b):
    if abs(len(a) - len(b)) > 2:
        return 99
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a):
        cur = [i + 1]
        for j, cb in enumerate(b):
            cur.append(min(prev[j + 1] + 1, cur[j] + 1, prev[j] + (ca != cb)))
        prev = cur
    return prev[-1]


def toks(s):
    return [w for w in re.sub(r'[^a-z ]', ' ', s.lower()).split() if w]


# A shared HEAD NOUN plus a token subset is how animal names actually differ:
# "Peccary" / "Chacoan Peccary", "Sawfish" / "Smalltooth Sawfish". Matching raw
# substrings instead finds "Sheep" inside "Sheepshead" and buries the real hits.
def kin(a, b):
    ta, tb = toks(a), toks(b)
    if not ta or not tb or ta[-1] != tb[-1]:
        return False
    return set(ta) <= set(tb) or set(tb) <= set(ta)


stale, nearmiss = [], []
for m in sorted(tocreate):
    if m in SYNONYMS and SYNONYMS[m] in alln:
        stale.append('%-28s is %s, already in the roster' % (m, SYNONYMS[m]))
        continue
    if m in rename_src and rename_src[m] in alln:
        stale.append('%-28s was renamed to %s, which exists'
                     % (m, rename_src[m]))
        continue
    for real in sorted(alln):
        if kin(m, real) or dist(flat(m), flat(real)) <= 2:
            nearmiss.append('%-28s looks like %s' % (m, real))
            break

print()
print('BADGE STARS FOR SPECIES THAT ALREADY EXIST: %d' % len(stale))
for x in stale:
    print('   ' + x)
    FAIL.append('badge star already exists: ' + x.strip())

print()
print('BADGE STARS THAT RESEMBLE SOMETHING IN THE ROSTER: %d' % len(nearmiss))
print('   (a warning - read them; a near name may be a genuinely different animal)')
for x in nearmiss:
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
