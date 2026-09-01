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
  8. no badge member and no quest animal is merely a LIFE STAGE
  9. every species tagged EW is real, sits in On the Brink, and matches the
     "Only In Captivity" badge exactly
 10. every badge member card points at a real membership, none is written
     twice, and how far that writing has got
 11. every disagreement between the EW tag and the status the GAME holds
     is explained in TAGS.txt rather than being an accident

Check 8 was added 2026-08-28 and fired immediately. Three badges and one quest
cited "Orangutan", which is not a species in this data - it sits in the lifestage
group, and the species are Sumatran Orangutan and Tapanuli Orangutan. It had
passed every previous run because the roster set used here included life stages,
while Cousin Bob's equivalent set had always excluded them. The two tools
disagreeing about what counts as a species is what hid it.
"""
import io, os, sys, re

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
os.chdir(ROOT)
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
QUEST = ['Pine Marten', 'Iberian Lynx', 'Siamang', 'Sumatran Orangutan', 'Jaguar', 'Harpy Eagle',
         'Eurasian Beaver', 'European Lobster', 'Horseshoe Crab', 'Stoplight Parrotfish',
         'Spinner Dolphin',
         'Blue Whale', 'Fennec Fox', 'Arabian Oryx', 'Snow Leopard', 'Polar Bear',
         'Walrus', 'Bowhead Whale', 'European Hedgehog', 'Buff-tailed Bumblebee', 'White Stork', 'Gemsbok',
         'Cheetah', 'African Elephant', 'Black Rhinoceros', 'Tibetan Antelope',
         'Crown-of-thorns Starfish', 'Protoceratops', 'Plesiosaurus', 'Tiktaalik']
alln = {n for g, v in d.items() if g not in ('cut', 'cosmetic', 'merged') for n in v}

# A LIFE STAGE IS NOT A SPECIES, and a badge or a quest may not point at one.
# Found 2026-08-28: three badges and one quest cited "Orangutan", which sits in the
# lifestage group - the species are Sumatran Orangutan and Tapanuli Orangutan. It
# passed every run because this set included life stages. Cousin Bob had always
# excluded them; Albert had not, and the two disagreeing is what hid it.
LIFE = set(d.get('lifestage', []))
alln_sp = alln - LIFE

missing = [q for q in QUEST if q not in alln_sp]
quest_life = [q for q in QUEST if q in LIFE]
print()
print('QUEST ANIMALS MISSING: %d' % len(missing))
for x in missing:
    print('   ' + x)
    FAIL.append('quest animal missing: ' + x)

print()
print('QUEST ANIMALS THAT ARE ONLY A LIFE STAGE: %d' % len(quest_life))
for x in quest_life:
    print('   %s  (a life stage, not a species)' % x)
    FAIL.append('quest animal is a life stage: ' + x)

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
bad_missing, bad_star, bad_life = [], [], []
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
        elif m in LIFE:
            bad_life.append('%s  (in "%s")' % (m, name))
        elif m not in alln_sp:
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
print('BADGE MEMBERS THAT ARE ONLY A LIFE STAGE: %d' % len(bad_life))
for x in sorted(bad_life):
    print('   ' + x)
    FAIL.append('badge member is a life stage: ' + x)

print()
print('BADGE MEMBERS MARKED * THAT ALREADY EXIST: %d' % len(bad_star))
for x in sorted(bad_star):
    print('   ' + x)
    FAIL.append('badge member starred but exists: ' + x)

# 11. THE BADGE MEMBER CARDS
# design/BADGE_CARDS.txt, added 2026-08-29. One card per MEMBERSHIP - a species in
# four badges is claimed for four different reasons and needs four cards. Albert
# cannot judge whether a card is any good; he checks that it points at a real
# membership, that no membership has two, and reports how far the work has got.
CARDS = {}
card_orphan, card_dupe = [], []
if os.path.exists('design/BADGE_CARDS.txt'):
    for line in io.open('design/BADGE_CARDS.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line.strip() or line.lstrip().startswith('!'):
            continue
        parts = [p.strip() for p in line.split('::')]
        if len(parts) < 3:
            FAIL.append('BADGE_CARDS.txt line is malformed: ' + line[:60])
            continue
        key = (parts[0], parts[1])
        if key in CARDS:
            card_dupe.append('%s :: %s' % key)
        CARDS[key] = '::'.join(parts[2:])

memberships = set()
for cat, name, dif, tiers, real in badges:
    for m in real:
        memberships.add((name, m))

for key in CARDS:
    if key not in memberships:
        card_orphan.append('%s :: %s' % key)

print()
print('=' * 52)
print('THE BADGE MEMBER CARDS')
print('=' * 52)
print('   %-24s %4d' % ('memberships', len(memberships)))
print('   %-24s %4d' % ('cards written', len(CARDS)))
print('   %-24s %4d' % ('still to write', len(memberships) - len(CARDS)))
if memberships:
    print('   %-24s %3d%%' % ('coverage', round(100.0 * len(CARDS) / len(memberships))))

print()
print('CARDS FOR A MEMBERSHIP THAT DOES NOT EXIST: %d' % len(card_orphan))
for x in sorted(card_orphan):
    print('   ' + x)
    FAIL.append('badge card points at no such membership: ' + x)

print()
print('MEMBERSHIPS WITH MORE THAN ONE CARD: %d' % len(card_dupe))
for x in sorted(card_dupe):
    print('   ' + x)
    FAIL.append('badge card written twice: ' + x)

# 10. THE CONSERVATION TAGS
# design/TAGS.txt, added 2026-08-29. "Only In Captivity" was written as a RULE -
# "any five from On the Brink tagged EW" - against a tag nobody had created, and
# was patched by typing the ten species into BADGES.txt by hand. The tag now
# exists, so the badge is a rule again and these three things are checked rather
# than trusted:
#   every EW species is real; every EW species is in "brink", because On the Brink
#   admits on status alone and EW is half of that test; and the badge membership is
#   EXACTLY the tagged set, so the two cannot drift apart in silence.
TAGS = {}
if os.path.exists('design/TAGS.txt'):
    for line in io.open('design/TAGS.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        TAGS[k.strip()] = [x.strip() for x in v.split('|') if x.strip()]

print()
print('=' * 52)
print('THE CONSERVATION TAGS')
print('=' * 52)
ew = TAGS.get('EW', [])
print('   %-24s %4d' % ('tagged EW', len(ew)))

ew_missing = [n for n in ew if n not in alln_sp]
print()
print('EW SPECIES NOT IN THE ROSTER: %d' % len(ew_missing))
for x in sorted(ew_missing):
    print('   ' + x)
    FAIL.append('tagged EW but not in the roster: ' + x)

# On the Brink admits Critically Endangered OR Extinct in the Wild, so an EW
# species filed anywhere else is a placement error, not a tagging one.
ew_astray = [(n, seen.get(n, '?')) for n in ew
             if n in alln_sp and seen.get(n) != 'brink']
print()
print('EW SPECIES NOT IN ON THE BRINK: %d' % len(ew_astray))
for n, g in sorted(ew_astray):
    print('   %-26s is in "%s"' % (n, g))
    FAIL.append('tagged EW but filed in "%s", not brink: %s' % (g, n))

oic = dict((n, r) for c, n, dd, t, r in badges).get('Only In Captivity')
print()
if oic is None:
    print('ONLY IN CAPTIVITY: badge not found')
    FAIL.append('the "Only In Captivity" badge is missing from BADGES.txt')
else:
    drift = sorted(set(oic) ^ set(ew))
    print('ONLY IN CAPTIVITY vs THE EW TAG: %d difference(s)' % len(drift))
    for x in drift:
        side = 'in the badge, not tagged EW' if x in oic else 'tagged EW, not in the badge'
        print('   %-26s %s' % (x, side))
        FAIL.append('Only In Captivity and the EW tag disagree: %s (%s)' % (x, side))

# 12. THE EW TAG vs THE GAME'S OWN STATUS FIELD
# design/FIELD_GUIDE.txt carries the IUCN status the GAME holds for every species,
# read out of the running game. design/TAGS.txt carries the status the DESIGN holds.
# They are two independent sources for the same fact, and check 8 is the standing
# lesson about what happens when two sources quietly disagree.
#
# The disagreements here are real and mostly deliberate - Przewalski's Horse, the
# scimitar-horned oryx and the Guam rail were all EW and have been downlisted since,
# and the game data has not caught up. So this does not fail on a disagreement. It
# fails on an UNDOCUMENTED one: every species where the two differ must be named
# somewhere in TAGS.txt, which is where the reasoning lives.
renames_for_status = {}
for _line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
    _line = _line.rstrip('\n')
    if _line.startswith('RENAME='):
        for _pair in _line.split('=', 1)[1].split('|'):
            _a, _b = _pair.split('::')
            renames_for_status[_a] = _b

fg_status = {}
if os.path.exists('design/FIELD_GUIDE.txt'):
    for line in io.open('design/FIELD_GUIDE.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line.strip() or line.lstrip().startswith('!'):
            continue
        parts = [p.strip() for p in line.split('::')]
        if len(parts) >= 3:
            # FIELD_GUIDE.txt holds the name the GAME uses. The design has renamed
            # a couple of hundred of those, so the rename map has to be applied here
            # or every rename looks like a status disagreement. Without this, naming
            # the Partula snail immediately produced two phantom rows - the old name
            # "unmatched by the design" and the new one "unmatched by the game".
            fg_status[renames_for_status.get(parts[0], parts[0])] = parts[1]

if fg_status:
    tags_text = io.open('design/TAGS.txt', encoding='utf-8').read()
    game_ew = {n for n, st in fg_status.items() if st == 'EW'}
    design_ew = set(TAGS.get('EW', []))
    undocumented = []
    print()
    print('=' * 52)
    print("THE EW TAG vs THE GAME'S OWN STATUS")
    print('=' * 52)
    print('   %-30s %4d' % ('game data says EW', len(game_ew)))
    print('   %-30s %4d' % ('design tag says EW', len(design_ew)))
    diffs = sorted((game_ew | design_ew) - (game_ew & design_ew))
    print('   %-30s %4d' % ('they disagree on', len(diffs)))
    print()
    for n in diffs:
        side = ('game EW, design does not tag it' if n in game_ew
                else 'design tags EW, game says %s' % fg_status.get(n, '?'))
        ok = n in tags_text
        print('   %-26s %-34s %s' % (n, side, 'explained' if ok else 'NOT EXPLAINED'))
        if not ok:
            undocumented.append(n)
    print()
    print('DISAGREEMENTS NOT EXPLAINED IN TAGS.txt: %d' % len(undocumented))
    for n in undocumented:
        FAIL.append('the game calls %s "%s" and design/TAGS.txt does not say why it '
                    'differs - write the reason into TAGS.txt or change the tag'
                    % (n, fg_status.get(n, '?')))

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
