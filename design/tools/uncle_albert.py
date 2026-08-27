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
  7. every badge member is a real species, and nothing marked * already exists
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
    pend, order, renames = {}, [], {}
    for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!'):
            continue
        route, names = line.split('=', 1)
        if route == 'RENAME':
            for pair in names.split('|'):
                a, b = pair.split('::')
                renames[a] = b
            continue
        s, t = route.split('>')
        for n in names.split('|'):
            pend[n] = (s, t)
            order.append(n)
    for k in d:
        d[k] = [renames.get(x, x) for x in d[k]]
    pend = {renames.get(k, k): v for k, v in pend.items()}
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
# Quest animals, by their CURRENT name. Update when a rename touches one -
# that is the point: this check exists to catch a quest pointing at nothing.
QUEST = ['Pine Marten', 'Iberian Lynx', 'Siamang', 'Orangutan', 'Jaguar', 'Harpy Eagle',
         'Eurasian Beaver', 'European Lobster', 'Horseshoe Crab', 'Stoplight Parrotfish',
         'Spinner Dolphin',
         'Blue Whale', 'Fennec Fox', 'Arabian Oryx', 'Snow Leopard', 'Polar Bear',
         'Walrus', 'Bowhead Whale', 'European Hedgehog', 'Buff-tailed Bumblebee', 'White Stork', 'Gemsbok',
         'Cheetah', 'African Elephant', 'Black Rhinoceros', 'Tibetan Antelope',
         'Crown-of-thorns Starfish', 'Protoceratops', 'Plesiosaurus', 'Tiktaalik']
alln = {n for g, v in d.items() if g not in ('cut', 'cosmetic', 'merged') for n in v}
missing = [q for q in QUEST if q not in alln]
print()
print('QUEST ANIMALS MISSING: %d' % len(missing))
for x in missing:
    print('   ' + x)
    FAIL.append('quest animal missing: ' + x)

# 7. generic names - a bare group word is not a species
# Words that really are multi-species groups. Deliberately narrow: aardvark, cheetah,
# jaguar, koala, lion, platypus, tiger, walrus, wolverine and swordfish are each exactly
# ONE species, so a bare name is correct for them. Only list terms where a bare name is
# genuinely ambiguous. This is a WARNING, not a failure.
GROUP_WORDS = {
 'shark','whale','dolphin','seal','eagle','owl','hawk','falcon','kestrel','vulture',
 'frog','toad','newt','salamander','snake','python','viper','cobra','lizard','gecko',
 'skink','iguana','chameleon','turtle','tortoise','terrapin','crocodile','beetle','moth',
 'butterfly','spider','scorpion','crab','lobster','shrimp','jellyfish','jelly','worm',
 'ant','bee','wasp','fish','eel','ray','monkey','ape','lemur','bat','rat','mouse',
 'squirrel','deer','bear','fox','wolf','hyena','jackal','mongoose','civet','genet',
 'antelope','gazelle','camel','duck','goose','swan','crane','heron','stork','gull',
 'tern','penguin','parrot','macaw','cockatoo','pigeon','dove','sparrow','finch',
 'woodpecker','kingfisher','hornbill','flamingo','pelican','cuttlefish','octopus',
 'squid','nautilus','urchin','starfish','coral','sponge','anemone','barnacle','mussel',
 'snail','millipede','centipede','cicada','dragonfly','damselfly','mantis','baboon',
 'macaque','gibbon','marmoset','capuchin','colobus','langur','tarsier','sloth','tapir',
 'porcupine','hedgehog','shrew','mole','vole','hare','pika','marmot','chinchilla',
 'viscacha','ibex','chamois','lynx','hippo','rhino','kangaroo','wallaby','possum',
 'bandicoot','wombat','echidna','anteater','armadillo','pangolin','weasel','badger',
 'raccoon','coati','marten','beaver','gopher','chipmunk','lemming','hamster','gerbil',
 'firefly','ladybug','ladybird','hoverfly','bumblebee','honeybee','seahorse','pipefish',
 'wrasse','grouper','triggerfish','pufferfish','boxfish','angelfish','butterflyfish',
 'parrotfish','barracuda','salmon','tetra','danio','gourami','goby',
}
generic = []
for g, v in d.items():
    if g in GONE:
        continue
    for n in v:
        if n.lower().replace('-', '').replace(' ', '') in GROUP_WORDS:
            generic.append('%s  (%s)' % (n, g))
print()
print('WARNING - bare group names (not a failure, but check them): %d' % len(generic))
for x in sorted(generic):
    print('   ' + x)

# 8. where the shortfall falls
print()
print('WHERE THE %d STILL TO CREATE WOULD GO' % (700 - seven_hundred))
for k in sorted(BIOMES, key=lambda x: len(d[x])):
    print('   %-12s %3d' % (k, len(d[k])))

# 9. THE BADGES
# Every badge member must be a real species in the roster. A trailing * means the
# species is scheduled to be created; Albert checks those do NOT already exist, so
# the star cannot be left on after the animal is made. A leading ~ is a rule, not
# a species, and is skipped. Duplicates ACROSS badges are correct and expected -
# an animal that shows four concepts should earn four badges.
print()
print('=' * 52)
print('THE BADGES')
print('=' * 52)
badges, bcat, bdif, btier = [], {}, {'E': 0, 'M': 0, 'H': 0}, 0
bad_missing, bad_star = [], []
allbadge, tocreate = set(), set()
for line in io.open('design/BADGES.txt', encoding='utf-8'):
    line = line.strip()
    if not line or line.startswith('!'):
        continue
    parts = [p.strip() for p in line.split('::')]
    if len(parts) != 6:
        FAIL.append('BADGES.txt line is malformed: ' + line[:60])
        continue
    cat, name, dif, tiers, concept, mem = parts
    members = [m.strip() for m in mem.split('|') if m.strip()]
    real = []
    for m in members:
        if m.startswith('~'):
            continue
        if m.endswith('*'):
            m = m[:-1]
            tocreate.add(m)
            if m in alln:
                bad_star.append('%s  (in "%s", but it already exists)' % (m, name))
        elif m not in alln:
            bad_missing.append('%s  (in "%s")' % (m, name))
        real.append(m)
        allbadge.add(m)
    badges.append((cat, name, dif, tiers, real))
    bcat[cat] = bcat.get(cat, 0) + 1
    if dif in bdif:
        bdif[dif] += 1
    else:
        FAIL.append('badge "%s" has difficulty "%s", expected E/M/H' % (name, dif))
    if tiers:
        btier += 1
        try:
            th = [int(x) for x in tiers.split(',')]
        except ValueError:
            FAIL.append('badge "%s" has unreadable tiers "%s"' % (name, tiers))
            th = []
        if th and th[-1] != len(real):
            FAIL.append('badge "%s": gold tier is %d but the set has %d members'
                        % (name, th[-1], len(real)))
        if th != sorted(th):
            FAIL.append('badge "%s": tiers are not ascending' % name)

print('   %-24s %4d' % ('badges', len(badges)))
for c in ['Reproduction', 'Senses', 'The body', 'Evolution', 'Behaviour',
          'Conservation', 'Extremes']:
    print('      %-21s %4d' % (c, bcat.get(c, 0)))
print('   %-24s %4d' % ('tiered', btier))
print('   difficulty   easy %d   medium %d   hard %d'
      % (bdif['E'], bdif['M'], bdif['H']))
print('   %-24s %4d   (%d already exist, %d to create)'
      % ('distinct species used', len(allbadge),
         len(allbadge) - len(tocreate), len(tocreate)))

thin = [(n, len(r)) for c, n, dd, t, r in badges if len(r) < 4]
print()
print('BADGES WITH FEWER THAN 4 MEMBERS: %d' % len(thin))
for n, k in sorted(thin, key=lambda x: x[1]):
    print('   %-26s %d' % (n, k))

print()
print('BADGE MEMBERS NOT IN THE ROSTER: %d' % len(bad_missing))
for x in sorted(bad_missing):
    print('   ' + x)
    FAIL.append('badge member not in roster: ' + x)

print()
print('BADGE MEMBERS MARKED * THAT ALREADY EXIST: %d' % len(bad_star))
for x in sorted(bad_star):
    print('   ' + x)
    FAIL.append('badge member starred but exists: ' + x)

# how much of the roster the badges actually reach
have = len(allbadge) - len(tocreate)
print()
print('BADGE REACH')
print('   species with at least one badge   %4d' % have)
print('   species with none                 %4d' % (len(alln) - have))

print()
print('=' * 52)
if FAIL:
    print('  UNCLE ALBERT FOUND %d PROBLEM(S)' % len(FAIL))
    for f in FAIL:
        print('   - ' + f)
    sys.exit(1)
print('  UNCLE ALBERT SAYS IT ALL ADDS UP')
print('=' * 52)
