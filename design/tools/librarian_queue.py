"""THE LIBRARIAN'S QUEUE, in full - the working list for fact-checking.

    python design/tools/librarian_queue.py                 the priority queue
    python design/tools/librarian_queue.py --all           every unchecked claim
    python design/tools/librarian_queue.py --file BADGE    only that source file
    python design/tools/librarian_queue.py --species Orca  only claims naming it
    python design/tools/librarian_queue.py --limit 40      first N

the_librarian.py prints the first 30 of the queue and then says "and N more",
which is right for a status report and useless for actually working through it.
This prints the whole thing, with the FULL sentence and the fingerprint, in the
exact shape a design/CLAIMS.txt line needs:

    STATUS :: fingerprint :: source :: the exact sentence that was checked

Copy the fingerprint and the sentence, add the status and the source you actually
used, and the claim leaves the queue. Edit the sentence afterwards and it comes
straight back, which is the entire point of the fingerprint.

It reuses the Librarian's own extraction rather than reimplementing it, so the two
cannot drift: a claim shown here is a claim that tool is counting.
"""
import io, os, re, sys, contextlib

os.chdir("C:/Claude/wildlands")

ARGS = sys.argv[1:]


def opt(name, default=None):
    if name in ARGS:
        i = ARGS.index(name)
        return ARGS[i + 1] if i + 1 < len(ARGS) else default
    return default


# Run the Librarian's module-level code with its output swallowed, then read the
# variables it built. Everything up to the first print of the queue is what we
# need, and stopping there avoids its sys.exit.
src = io.open('design/tools/the_librarian.py', encoding='utf-8').read()
cut = src.index("print('THE WORK QUEUE")
ns = {'__name__': '__librarian__'}
with contextlib.redirect_stdout(io.StringIO()):
    exec(compile(src[:cut], 'the_librarian.py', 'exec'), ns)

world, prio = ns['world'], ns['prio']
rows = world if '--all' in ARGS else prio

fpick = opt('--file')
if fpick:
    rows = [r for r in rows if fpick.lower() in r[1][0].lower()]
spick = opt('--species')
if spick:
    rows = [r for r in rows if spick.lower() in (r[1][2] or '').lower()]
lim = opt('--limit')
if lim:
    rows = rows[:int(lim)]

print('! %d claim(s). %s' % (
    len(rows), 'every unchecked claim' if '--all' in ARGS
    else 'SUPERLATIVE AND ABSOLUTE claims only - the risky ones'))
print('! Format below is a design/CLAIMS.txt line with the status and source blank.')
print('! Fill both in - "I am fairly sure" is not a source - and paste it into the register.')
print('!')
for fp, (path, t, sp) in rows:
    print('%-14s :: %s :: %s' % (path.split('/')[-1], sp, ''))
    print('?????? :: %s :: <source> :: %s' % (fp, t))
    print()
