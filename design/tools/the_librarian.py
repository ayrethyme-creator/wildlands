"""THE LIBRARIAN - the fact check.

Ayr's name for it: "run it by The Librarian". Ayr asked for it on 2026-08-29 and
called it "honestly one of the most important tools".

    librarian.bat                          (from the repo root, or double-click it)
    python design/tools/the_librarian.py

WHAT IT CANNOT DO, SAID FIRST
-----------------------------
It cannot tell whether a claim is TRUE. Nothing can. Uncle Albert checks the data
adds up; Cousin Bob checks the documents agree with the data; both say plainly
that neither can check a statement against reality. That needs knowing biology,
and it needs a person.

WHAT IT DOES INSTEAD
--------------------
It makes the checking VISIBLE AND DURABLE. The failure this project keeps having
is not that somebody checked and got it wrong - it is that nobody could tell
which sentences had ever been checked at all. So:

  1. it finds every claim-shaped sentence in the player-facing writing
  2. it fingerprints each one and looks it up in design/CLAIMS.txt
  3. it reports what has been checked, what has not, and BY WHOM AND AGAINST WHAT
  4. and if a VERIFIED sentence is later edited, the fingerprint stops matching
     and the claim goes back to unverified ON ITS OWN

Point 4 is the whole tool. A fact check that survives the next edit is worth
something; one that does not is worse than none, because it looks like coverage.

WHY IT EXITS NON-ZERO ONLY ON DRIFT
-----------------------------------
Nothing is verified on day one, so failing on unverified claims would make the
tool useless immediately and it would be switched off. It fails on STALE (checked,
then silently edited) and ORPHANED (a register entry pointing at text that no
longer exists). Unverified claims are a WORK QUEUE with a count, not a failure.

THE ERROR SHAPE THIS PROJECT ACTUALLY MAKES
-------------------------------------------
Every accuracy failure in the record so far has been the same one: A REAL THING
FILED UNDER THE WRONG CONCEPT.

  - the Deathstalker in "Lights On" - fluorescence is not bioluminescence
  - the elephant in the menopause badge - matriarchs breed into old age
  - Antarctic krill written into two badges under a no-plankton rule
  - the fire hawk, which is real, filed as something it is not

None of those is a false fact. Each is a true fact in the wrong place, which is
why proofreading never caught them and why the register carries a TRAP list of
the distinctions that have already gone wrong once.
"""
import io, os, re, sys, hashlib

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
os.chdir(ROOT)
FAIL, WARN = [], []

# Files whose prose makes claims about the world. Deliberately NOT the whole doc
# set: HANDOFF, LINKS and the species lists are about the project, and Cousin Bob
# already owns their numbers.
SOURCES = ['GDD.md', 'design/BADGE_CARDS.txt', 'design/FIELD_GUIDE.txt',
           'design/TERRANE_FIELD_GUIDE_44.md']

REGISTER = 'design/CLAIMS.txt'

# A claim is a sentence that asserts something checkable. These are the shapes
# that go wrong: superlatives (a claim that nothing beats it), absolutes, counts,
# percentages and dates.
SUPERLATIVE = (r'\b(only|first|last|largest|biggest|smallest|fastest|slowest|deepest|'
               r'highest|longest|oldest|heaviest|strongest|rarest|most|never|always|'
               r'every|nothing else|no other)\b')
# Spelled-out magnitudes are claims too, and some of the strongest ones are:
# "over a hundred million years ago" contains no digit at all.
NUMBER = (r'\b\d[\d,]*\s*(?:%|kg|g\b|cm|mm|m\b|km|metres|meters|years|species|'
          r'million|billion)|\b\d+%'
          r'|\b\d+\s+(?:living\s+)?(?:[a-z][a-z-]*\s+){0,3}species\b'
          r'|\b(?:hundred|thousand|million|billion)\b')
YEAR = r'\b(?:1[6-9]\d\d|20\d\d)\b'
CLAIM = re.compile('|'.join([SUPERLATIVE, NUMBER, YEAR]), re.I)

# THE FILTER THAT MAKES THIS USABLE.
#
# A first version flagged every claim-shaped sentence and produced a queue of 213,
# most of it design prose - "48 quests", "the only source", "the first hour". That
# is the Cousin Bob table-row mistake again: a report nobody can act on gets
# switched off, and then the tool is worse than nothing because it looks like
# coverage.
#
# The discriminator is the roster itself. A claim about the world, in this project,
# NAMES AN ANIMAL. Badge member cards always do; field-guide entries always do.
# So a sentence qualifies only if it is claim-shaped AND names a species that is
# actually in the roster.
#
# The honest cost of that filter: a real claim with no animal in the sentence is
# missed - "a 13cm gap in every fence reconnects the block" is about hedgehogs and
# does not say so. That is accepted. A narrow queue that gets worked beats a wide
# one that gets ignored.
def roster_species():
    names = set()
    d, ren = {}, {}
    for line in io.open('design/GROUND_TRUTH.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!'):
            continue
        k, v = line.split('=', 1)
        d[k] = v.split('|')
    for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!') or '=' not in line:
            continue
        route, v = line.split('=', 1)
        if route == 'RENAME':
            for pair in v.split('|'):
                a, b = pair.split('::')
                ren[a] = b
            continue
        for n in v.split('|'):
            names.add(n)
    for v in d.values():
        names.update(v)
    names.update(ren.values())
    # One-word names that are also ordinary English would match everything.
    STOP = {'Horse', 'Chicken', 'Goat', 'Sheep', 'Pig', 'Turkey', 'Canary', 'Puppy',
            'Guppy', 'Koi', 'Discus', 'Platy', 'Oscar', 'Beagle', 'Corgi', 'Mutt'}
    return {n for n in names if len(n) > 4 and n not in STOP}


SPECIES = roster_species()
# Longest first, so "Grey Wolf" is preferred over "Wolf".
SPECIES_RX = re.compile(
    r'(?<![A-Za-z])(' + '|'.join(re.escape(n) for n in
                                 sorted(SPECIES, key=len, reverse=True)) + r')(?![a-z])')


def fingerprint(text):
    """Whitespace- and case-insensitive, so reflowing a paragraph is not an edit."""
    flat = re.sub(r'[^a-z0-9]+', ' ', text.lower()).strip()
    return hashlib.sha1(flat.encode('utf-8')).hexdigest()[:12]


def strip_markup(s):
    s = re.sub(r'`[^`]*`', ' ', s)
    s = re.sub(r'[*_>#|]+', ' ', s)
    return ' '.join(s.split())


def sentences(path):
    """Yield (sentence, species_hint). The hint is None unless the file states it."""
    if not os.path.exists(path):
        return

    # BADGE_CARDS.txt keeps the species in the KEY - "Badge :: Species :: text" - so
    # splitting the text into sentences throws the animal away and every card would
    # slip past the species filter. The card is one claim, so it is read whole and
    # the species comes from the key. This is the file the tool exists for: 430
    # cards, every one an assertion about biology.
    # FIELD_GUIDE.txt is "Name :: status :: text", read out of the running game by
    # read_field_guide.js. It is the largest body of claims in the project - 999
    # entries averaging 303 characters - and it is the reason this tool exists.
    #
    # Each entry holds several DISTINCT claims, so it is split into sentences and
    # each one is tracked separately: verifying "the aardvark's closest relatives
    # are elephants and manatees" should not silently vouch for the sentence next
    # to it about how fast it digs.
    if path.endswith('FIELD_GUIDE.txt'):
        for line in io.open(path, encoding='utf-8'):
            line = line.rstrip('\n')
            if not line.strip() or line.lstrip().startswith('!'):
                continue
            parts = [p.strip() for p in line.split('::')]
            if len(parts) < 3:
                continue
            name, body = parts[0], '::'.join(parts[2:])
            for sent in re.split(r'(?<=[.!?])\s+', body):
                t = ' '.join(sent.split())
                if 25 < len(t) < 400:
                    yield ('%s — %s' % (name, t), name)
        return

    if path.endswith('BADGE_CARDS.txt'):
        for line in io.open(path, encoding='utf-8'):
            line = line.rstrip('\n')
            if not line.strip() or line.lstrip().startswith('!'):
                continue
            parts = [p.strip() for p in line.split('::')]
            if len(parts) < 3:
                continue
            yield ('%s — %s' % (parts[1], '::'.join(parts[2:])), parts[1])
        return

    # Terrane does not have runnable game data yet, so its first new entries live
    # in a reviewable Markdown source. Each level-three heading is the familiar
    # card name, the italic line identifies the exact species and relative count,
    # and the following paragraph is the player-facing entry. Keep the heading as
    # the species hint so a sentence such as "The only living species..." does not
    # vanish from the queue merely because it uses a pronoun instead of repeating
    # the animal's name.
    if path.endswith('TERRANE_FIELD_GUIDE_44.md'):
        raw = io.open(path, encoding='utf-8').read()
        entry = re.compile(
            r'^### ([^\n]+)\n\n(\*[^\n]+\* · [^\n]+)\n\n(.+?)'
            r'(?=\n\n(?:### |## ))', re.M | re.S)
        matches = list(entry.finditer(raw))
        names = [match.group(1) for match in matches]
        if len(matches) != 44:
            FAIL.append('TERRANE_FIELD_GUIDE_44.md has %d entries, expected 44'
                        % len(matches))
        duplicates = sorted({name for name in names if names.count(name) > 1})
        if duplicates:
            FAIL.append('TERRANE_FIELD_GUIDE_44.md repeats: ' + ', '.join(duplicates))
        for match in matches:
            name, relative_line, body = match.groups()
            if not re.search(r'\d|\bonly\b', relative_line, re.I):
                FAIL.append('%s has no relative count in TERRANE_FIELD_GUIDE_44.md'
                            % name)
            yield ('%s — %s' % (name, strip_markup(relative_line)), name)
            for sent in re.split(r'(?<=[.!?])\s+', ' '.join(body.split())):
                if 25 < len(sent) < 400:
                    yield ('%s — %s' % (name, sent), name)
        return

    raw = io.open(path, encoding='utf-8').read()
    raw = re.sub(r'```.*?```', ' ', raw, flags=re.S)      # code blocks are not prose
    for block in re.split(r'\n\s*\n', raw):
        for sent in re.split(r'(?<=[.!?])\s+|\n(?=\s*\|)', block):
            t = strip_markup(sent)
            if 25 < len(t) < 400:
                yield (t, None)


def load_register():
    reg = {}
    if not os.path.exists(REGISTER):
        return reg
    for line in io.open(REGISTER, encoding='utf-8'):
        line = line.rstrip('\n')
        if not line.strip() or line.lstrip().startswith('!'):
            continue
        parts = [p.strip() for p in line.split('::')]
        if len(parts) < 4:
            FAIL.append('CLAIMS.txt line is malformed: ' + line[:70])
            continue
        status, fp, source, text = parts[0], parts[1], parts[2], '::'.join(parts[3:])
        reg[fp] = (status.upper(), source, text)
    return reg


reg = load_register()
found = {}
for path in SOURCES:
    for t, hint in sentences(path):
        if not CLAIM.search(t):
            continue
        sp = hint
        if sp is None:
            hit = SPECIES_RX.search(t)
            if not hit:
                continue
            sp = hit.group(1)
        found[fingerprint(t)] = (path, t, sp)

VALID = {'VERIFIED', 'DESIGN', 'DISPUTED', 'TRAP'}
bad_status = [(fp, v[0]) for fp, v in reg.items() if v[0] not in VALID]

counts = {k: 0 for k in VALID}
for fp, (status, src, txt) in reg.items():
    if status in counts:
        counts[status] += 1

unchecked = [(fp, v) for fp, v in found.items() if fp not in reg]
# A register entry whose text is gone: either the sentence was edited (so the same
# claim is now sitting unchecked under a new fingerprint) or it was deleted.
orphaned = [(fp, v) for fp, v in reg.items()
            if fp not in found and v[0] in ('VERIFIED', 'DISPUTED')]

print('=' * 56)
print('THE LIBRARIAN - the fact check')
print('=' * 56)
print('reading %s' % ', '.join(SOURCES))
print()
by_source = {}
for fp, (path, t, sp) in found.items():
    by_source[path] = by_source.get(path, 0) + 1
print('CLAIM-SHAPED SENTENCES FOUND: %d' % len(found))
for path in SOURCES:
    print('   %-26s %4d' % (path.split('/')[-1], by_source.get(path, 0)))
print('   %-22s %4d' % ('checked and verified', counts['VERIFIED']))
print('   %-22s %4d' % ('dismissed as design', counts['DESIGN']))
print('   %-22s %4d' % ('disputed / caveated', counts['DISPUTED']))
print('   %-22s %4d' % ('NOT YET TRIAGED', len(unchecked)))

# A superlative is the claim most likely to be wrong, and the badge set is built
# from them - The Largest, The Smallest, The Fastest, The Deepest, End of the Line.
# "The only X" is a claim that nothing else in the world beats it, which is the
# hardest kind to be sure of and the easiest to repeat from a bad source.
# The first version of this marked 746 of 974 as priority, which is the same as
# marking none: "most people can dig with a shovel" is not a claim about an animal.
# What is actually risky is a superlative IN CLAIM POSITION - "the only", "the
# largest", "no other", "the first to". Those assert that nothing else on earth
# beats it, which is the hardest thing to be sure of and the easiest to repeat from
# a bad source. Bare "most" and "every" are ordinary English and are not marked.
SUPER_RX = re.compile(
    r'\b(?:the\s+(?:only|first|last|largest|biggest|smallest|fastest|slowest|'
    r'deepest|highest|longest|oldest|heaviest|strongest|rarest|worst|best)'
    r'|only\s+(?:known|living|surviving|animal|species|one|mammal|bird|fish|place)'
    r"|no\s+other|nothing\s+else|never\s+been|first\s+ever|world.?s\s+\w+est"
    r'|one\s+of\s+(?:only|the\s+few)|unlike\s+any)\b', re.I)
world = sorted(unchecked, key=lambda x: (not SUPER_RX.search(x[1][1]), x[1][2], x[1][1]))
prio = [x for x in world if SUPER_RX.search(x[1][1])]
print()
print('THE WORK QUEUE: %d claim(s), each naming a roster species' % len(world))
print('   of which %d make a SUPERLATIVE or ABSOLUTE claim - check these first,'
      % len(prio))
print('   because "the only" asserts that nothing else on earth beats it')
print()
for fp, (path, t, sp) in world[:30]:
    mark = '!' if SUPER_RX.search(t) else ' '
    print(' %s %s  %-22s %s' % (mark, fp, sp[:22], t[:88]))
if len(world) > 30:
    print('   ... and %d more' % (len(world) - 30))

print()
print('STALE - was checked, then the text changed underneath it: %d' % len(orphaned))
for fp, (status, src, txt) in sorted(orphaned):
    print('   %s  [%s, %s]  %s' % (fp, status, src, txt[:80]))
    FAIL.append('claim %s was %s against "%s" and its text no longer exists - '
                're-check it or remove the register entry' % (fp, status, src))

print()
print('REGISTER ENTRIES WITH AN UNKNOWN STATUS: %d' % len(bad_status))
for fp, st in bad_status:
    print('   %s  "%s"' % (fp, st))
    FAIL.append('unknown status "%s" on claim %s; use %s'
                % (st, fp, '/'.join(sorted(VALID))))

# The traps are distinctions this project has already got wrong once. They are not
# failures - they are a reading list for whoever is triaging.
traps = [(fp, v) for fp, v in reg.items() if v[0] == 'TRAP']
print()
print('KNOWN TRAPS - real things that got filed under the wrong concept: %d' % len(traps))
for fp, (status, src, txt) in sorted(traps, key=lambda x: x[1][2]):
    print('   ' + txt)

print()
print('=' * 56)
for w in WARN:
    print('  note: ' + w)
if FAIL:
    print('  THE LIBRARIAN FOUND %d PROBLEM(S)' % len(FAIL))
    for f in FAIL:
        print('   - ' + f)
    print('=' * 56)
    sys.exit(1)
if world:
    print('  THE LIBRARIAN IS SATISFIED - %d claim(s) still waiting to be' % len(world))
    print('  checked, which is a queue and not a fault')
else:
    print('  THE LIBRARIAN SAYS EVERY CLAIM HAS BEEN LOOKED AT')
print('=' * 56)
