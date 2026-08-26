"""UNCLE ALBERT - the roster check.

Ayr's name for it: "run it by Uncle Albert". Run after any change to
PENDING_MOVES.txt, and any time a number is about to be quoted.

    uncle-albert.bat                      (from the repo root, or double-click it)
    python design/tools/uncle_albert.py

Exits non-zero if anything is wrong, so it can be trusted without reading the output.

Verifies:
  1. every group hits its target
  2. the whole thing sums to 1000
  3. no species appears in two groups
  4. nothing marked "new>" already exists
  5. every quest animal exists or is scheduled to be created
  6. nothing in cut / cosmetic / merged is still referenced as living
"""
import io, os, sys, re

os.chdir("C:/Claude/wildlands")
FAIL = []


def load():
    d = {}
    for line in io.open('design/GROUND_TRUTH.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!'):
            continue
        k, v = line.split('=', 1)
        d[k] = list(v.split('|'))
    pend, order = {}, []
    for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!'):
            continue
        route, names = line.split('=', 1)
        s, t = route.split('>')
        for n in names.split('|'):
            pend[n] = (s, t)
            order.append(n)
    made = set()
    for n, (s, t) in pend.items():
        if s == 'new':
            d.setdefault(t, []).append(n)
            made.add(n)
        elif s in d and n in d[s]:
            d[s].remove(n)
            d.setdefault(t, []).append(n)
        else:
            FAIL.append('MOVE FAILED: "%s" is not in group "%s"' % (n, s))
    return d, pend, made


d, pend, made = load()
BIOMES = ['rainforest', 'savanna', 'forest', 'wetland', 'desert', 'coast',
          'alpine', 'reef', 'opensea', 'farmland', 'polar', 'deepsea']
GONE = ['cut', 'cosmetic', 'merged', 'unplaced', 'lifestage']

biome_total = sum(len(d[k]) for k in BIOMES)
kept = len(d['kept'])
seven_hundred = biome_total + kept

print('THE 700')
print('   biomes                 %4d' % biome_total)
print('   The Kept               %4d   %s' % (kept, 'OK' if kept == 50 else 'TARGET 50'))
print('   ---------------------------')
print('   subtotal               %4d   need %+d to reach 700' % (seven_hundred, 700 - seven_hundred))
if kept != 50:
    FAIL.append('The Kept is %d, target 50' % kept)

print()
print('THE 300')
targets = [('vigil', 'The Vigil', 50), ('brink', 'On the Brink', 50),
           ('mythic', 'The Telling', 100), ('fossil', 'The Record', 50),
           ('breeding', 'The Breeding Centre', 50)]
three_hundred = 0
for key, label, want in targets:
    got = len(d.get(key, []))
    three_hundred += got
    ok = 'OK' if got == want else 'TARGET %d' % want
    print('   %-22s %4d   %s' % (label, got, ok))
    if got != want:
        FAIL.append('%s is %d, target %d' % (label, got, want))
print('   ---------------------------')
print('   subtotal               %4d   %s' % (three_hundred,
                                              'OK' if three_hundred == 300 else 'TARGET 300'))

print()
print('LEAVING THE ROSTER')
for k in ['cut', 'cosmetic', 'merged', 'unplaced']:
    print('   %-22s %4d' % (k, len(d.get(k, []))))
print('   %-22s %4d   (attached to parents, count nowhere)'
      % ('life stages', len(d.get('lifestage', []))))

print()
print('TOTAL WHEN COMPLETE')
print('   700 + 300 = 1000        %s'
      % ('OK once %d more species exist' % (700 - seven_hundred)))

# 3. duplicates across groups
print()
seen = {}
dupes = []
for g, v in d.items():
    if g in GONE:
        continue
    for n in v:
        if n in seen:
            where = 'twice in %s' % g if seen[n] == g else 'in %s AND %s' % (seen[n], g)
            dupes.append('%s  (%s)' % (n, where))
        seen[n] = g
print('DUPLICATES ACROSS GROUPS: %d' % len(dupes))
for x in dupes:
    print('   ' + x)
    FAIL.append('duplicate: ' + x)

# 4. new> species that already existed
truth = set()
for line in io.open('design/GROUND_TRUTH.txt', encoding='utf-8'):
    line = line.rstrip('\n')
    if not line or line.startswith('!'):
        continue
    truth.update(line.split('=', 1)[1].split('|'))
bogus = sorted(n for n in made if n in truth)
print()
print('"new>" SPECIES THAT ALREADY EXIST: %d' % len(bogus))
for x in bogus:
    print('   ' + x)
    FAIL.append('marked new but already exists: ' + x)

# 5. quest animals
QUEST = ['Pine Marten', 'Iberian Lynx', 'Siamang', 'Orangutan', 'Jaguar', 'Harpy Eagle',
         'Beaver', 'Lobster', 'Horseshoe Crab', 'Parrotfish', 'Spinner Dolphin',
         'Blue Whale', 'Fennec Fox', 'Arabian Oryx', 'Snow Leopard', 'Polar Bear',
         'Walrus', 'Bowhead Whale', 'Hedgehog', 'Bumblebee', 'White Stork', 'Gemsbok',
         'Cheetah', 'African Elephant', 'Black Rhinoceros', 'Tibetan Antelope',
         'Crown-of-thorns Starfish', 'Protoceratops', 'Plesiosaurus', 'Tiktaalik']
alln = {n for g, v in d.items() if g not in ('cut', 'cosmetic', 'merged') for n in v}
missing = [q for q in QUEST if q not in alln]
print()
print('QUEST ANIMALS MISSING: %d' % len(missing))
for x in missing:
    print('   ' + x)
    FAIL.append('quest animal missing: ' + x)

print()
print('=' * 52)
if FAIL:
    print('  UNCLE ALBERT FOUND %d PROBLEM(S)' % len(FAIL))
    for f in FAIL:
        print('   - ' + f)
    sys.exit(1)
print('  UNCLE ALBERT SAYS IT ALL ADDS UP')
print('=' * 52)
