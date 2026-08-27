"""Build design/badges.html from design/BADGES.txt.

BADGES.txt is the only source. This script rewrites the data array inside
badges.html and leaves the design alone, so the page can never disagree with
the file Uncle Albert checks.

    python design/tools/make_badge_page.py

Run it after any edit to BADGES.txt, then run it by Uncle Albert.
"""
import io, os, json

os.chdir("C:/Claude/wildlands")

ORDER = ['Reproduction', 'Senses', 'The body', 'Evolution', 'Behaviour',
         'Conservation', 'Extremes']

groups = {}
for line in io.open('design/BADGES.txt', encoding='utf-8'):
    s = line.strip()
    if not s or s.startswith('!'):
        continue
    cat, name, dif, tiers, concept, mem = [x.strip() for x in s.split('::')]
    members = [m.strip() for m in mem.split('|') if m.strip()]
    row = [name, concept, dif, members]
    if tiers:
        row.append([int(x) for x in tiers.split(',')])
    groups.setdefault(cat, []).append(row)

data = [[c, groups[c]] for c in ORDER if c in groups]
for c in groups:
    if c not in ORDER:
        raise SystemExit('unknown category in BADGES.txt: ' + c)

js = 'var B=[\n' + ',\n'.join(
    '["%s",[\n%s]]' % (c, ',\n'.join(json.dumps(r, ensure_ascii=False) for r in rows))
    for c, rows in data) + '\n];'

p = 'design/badges.html'
html = io.open(p, encoding='utf-8').read()
head, rest = html.split('var B=[', 1)
tail = rest.split('\n];', 1)[1]
io.open(p, 'w', encoding='utf-8', newline='').write(head + js + tail)

n = sum(len(r) for _, r in data)
print('badges.html rebuilt from BADGES.txt: %d badges in %d categories' % (n, len(data)))
