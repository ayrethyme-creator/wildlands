"""Build the browsable roster page from design/GROUND_TRUTH.txt.

GROUND_TRUTH.txt is read from the RUNNING GAME (serve the repo, open gallery.html,
read window.__DEX), never parsed out of the .jsx files. See the header of that file.
"""
import io, os, html, sys

os.chdir("C:/Claude/wildlands")
d = {}
for line in io.open('design/GROUND_TRUTH.txt', encoding='utf-8'):
    line = line.rstrip('\n')
    if not line or line.startswith('!'):
        continue
    k, v = line.split('=', 1)
    d[k] = sorted(v.split('|'))

# Apply design decisions not yet in the game data.
pending = {}
try:
    for line in io.open('design/PENDING_MOVES.txt', encoding='utf-8'):
        line = line.rstrip('\n')
        if not line or line.startswith('!'):
            continue
        route, names = line.split('=', 1)
        src, dst = route.split('>')
        for n in names.split('|'):
            pending[n] = (src, dst)
except IOError:
    pass
for n, (src, dst) in pending.items():
    if src in d and n in d[src]:
        d[src].remove(n)
        d.setdefault(dst, []).append(n)
for k in d:
    d[k] = sorted(d[k])
PENDING = set(pending)

BIOMES = [('rainforest', 'Rainforest', 'The Canopy'), ('savanna', 'Savanna', 'The Long Grass'),
          ('forest', 'Forest', 'The Weald'), ('wetland', 'Wetlands', 'The Fens'),
          ('desert', 'Desert', 'The Dry'), ('coast', 'Coast', 'The Strand'),
          ('alpine', 'Mountains', 'The Divide'), ('reef', 'Reef', 'The Garden'),
          ('opensea', 'Open Ocean', 'The Blue'), ('farmland', 'Farmland', 'The Furrows'),
          ('polar', 'Polar', 'The Floe'), ('deepsea', 'Deep Sea', 'The Dark')]
GROUPS = [('vigil', 'The Vigil &amp; On the Brink', 'the extinct, and the nearly gone'),
          ('mythic', 'The Telling', 'mythology'),
          ('fossil', 'The Record', 'fossils'),
          ('kept', 'The Kept', 'the childhood pet store'),
          ('breeding', 'The Breeding Centre', 'cat and dog breeds &mdash; unlocks at end game'),
          ('cosmetic', 'Becoming skins, not species',
           'coat options on House Cat &mdash; these free three roster slots'),
          ('cut', 'Cut', 'replaced'),
          ('lifestage', 'Life stages', 'chicks, calves, pups &mdash; not species'),
          ('unplaced', 'Unplaced', 'the 13 cut wardens, three myths needing a tag, and the mammoth')]

bt = sum(len(d[k]) for k, _, _ in BIOMES)
tot = sum(len(v) for v in d.values())

def sec(key, name, sub, kind):
    n = d[key]
    items = ''.join('<li class="n%s">%s</li>'
                    % (' pend' if x in PENDING else '', html.escape(x)) for x in n)
    return ('<section class="grp" id="%s" data-kind="%s"><header>'
            '<h2>%s</h2><p class="sub">%s</p>'
            '<span class="cnt"><b class="live">%d</b><i>/%d</i></span></header>'
            '<ul class="names">%s</ul></section>' % (key, kind, name, sub, len(n), len(n), items))

secs = [sec(k, '%s <em>&mdash; %s</em>' % (n, s), '', 'biome') for k, n, s in BIOMES]
secs += [sec(k, n, s, 'group') for k, n, s in GROUPS]
nav = ['<a href="#%s">%s<b>%d</b></a>' % (k, n, len(d[k])) for k, n, _ in BIOMES]
nav += ['<a href="#%s">%s<b>%d</b></a>' % (k, n.replace('&amp;', '&'), len(d[k])) for k, n, _ in GROUPS]

CSS = """
:root{--bg:#f6f8f6;--surface:#fff;--ink:#141814;--muted:#5f6b62;--rule:#dde3de;
 --accent:#2f6b4f;--accentsoft:#e7f0ea;--shadow:0 1px 2px rgba(20,24,20,.06)}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
 --bg:#0e110f;--surface:#161a17;--ink:#e7ece8;--muted:#95a29a;--rule:#242b26;
 --accent:#74c49a;--accentsoft:#1a2a21;--shadow:none}}
:root[data-theme="dark"]{--bg:#0e110f;--surface:#161a17;--ink:#e7ece8;--muted:#95a29a;
 --rule:#242b26;--accent:#74c49a;--accentsoft:#1a2a21;--shadow:none}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--ink);margin:0;
 font:15px/1.55 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
 -webkit-font-smoothing:antialiased}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px 96px}
header.top{padding:56px 0 24px}
h1{font:600 clamp(30px,4vw,44px)/1.1 ui-serif,Iowan Old Style,Palatino,Georgia,serif;
 margin:0 0 12px;letter-spacing:-.01em;text-wrap:balance}
.lede{color:var(--muted);max-width:62ch;margin:0 0 18px}
.lede b{color:var(--ink);font-variant-numeric:tabular-nums}
.prov{font-size:13px;color:var(--muted);border-left:2px solid var(--accent);
 padding:2px 0 2px 12px;margin:0;max-width:62ch}
.bar{position:sticky;top:0;z-index:5;background:var(--bg);
 border-bottom:1px solid var(--rule);padding:12px 0;margin:22px 0 8px}
.bar .row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}
#q{flex:1 1 240px;min-width:0;padding:10px 13px;border:1px solid var(--rule);
 border-radius:8px;background:var(--surface);color:var(--ink);font:inherit;box-shadow:var(--shadow)}
#q:focus{outline:2px solid var(--accent);outline-offset:1px;border-color:transparent}
#tally{color:var(--muted);font-size:13px;font-variant-numeric:tabular-nums;white-space:nowrap}
#tally b{color:var(--ink)}
nav{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 26px}
nav a{display:inline-flex;gap:7px;align-items:baseline;text-decoration:none;color:var(--muted);
 background:var(--surface);border:1px solid var(--rule);border-radius:99px;padding:5px 11px;font-size:13px}
nav a:hover{color:var(--accent);border-color:var(--accent)}
nav a b{color:var(--ink);font-variant-numeric:tabular-nums;font-weight:600;font-size:12px}
.grp{border-top:1px solid var(--rule);padding:26px 0 4px;scroll-margin-top:74px}
.grp[data-kind="group"] h2{color:var(--accent)}
.grp header{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:14px}
h2{font:600 22px/1.25 ui-serif,Iowan Old Style,Palatino,Georgia,serif;margin:0;letter-spacing:-.01em}
h2 em{font-style:normal;font-weight:400;color:var(--muted);font-size:17px}
.sub{color:var(--muted);font-size:13px;margin:0;flex:1 1 auto}
.cnt{font-variant-numeric:tabular-nums;font-size:13px;color:var(--muted)}
.cnt b{color:var(--ink);font-size:16px}
.cnt i{font-style:normal;opacity:.5}
.names{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap}
.names li{font-size:14px;padding:2px 0}
.names li::after{content:"\\00b7";color:var(--rule);padding:0 9px}
.names li:last-child::after{content:""}
.names li.pend{color:var(--accent)}
.names li mark{background:var(--accentsoft);color:var(--accent);border-radius:3px;
 padding:1px 2px;font-weight:600}
.hide{display:none!important}
footer{border-top:1px solid var(--rule);margin-top:36px;padding-top:20px;color:var(--muted);font-size:13px}
footer b{color:var(--ink);font-variant-numeric:tabular-nums}
@media (prefers-reduced-motion:no-preference){html{scroll-behavior:smooth}}
"""

JS = """
var q=document.getElementById('q'),tally=document.getElementById('tally'),
 secs=[].slice.call(document.querySelectorAll('.grp'));
secs.forEach(function(s){s._i=[].slice.call(s.querySelectorAll('.n'));
 s._i.forEach(function(li){li._t=li.textContent;});});
function esc(x){return x.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\\\$&');}
function run(){var v=q.value.trim().toLowerCase(),shown=0;
 secs.forEach(function(s){var n=0;
  s._i.forEach(function(li){var hit=!v||li._t.toLowerCase().indexOf(v)>-1;
   li.classList.toggle('hide',!hit);
   if(hit){n++;li.innerHTML=v?li._t.replace(new RegExp('('+esc(v)+')','ig'),'<mark>$1</mark>'):li._t;}});
  s.querySelector('.live').textContent=n;s.classList.toggle('hide',n===0);shown+=n;});
 tally.innerHTML='<b>'+shown+'</b> shown';}
q.addEventListener('input',run);run();
"""

p = ['<title>Terrane Roster</title>', '<style>%s</style>' % CSS, '<div class="wrap">',
     '<header class="top"><h1>Terrane Roster</h1>'
     '<p class="lede">Every creature in the game data &mdash; <b>%d</b> entries, '
     'of which <b>%d</b> sit in the twelve biomes against a target of <b>700</b>.</p>'
     '<p class="prov">Read from the running game, not parsed from source. Three separate '
     'attempts to extract these numbers with regular expressions returned 461, 516 and 465, '
     'all wrong, because DEX entries come in two different shapes.</p></header>' % (tot, bt),
     '<div class="bar"><div class="row">'
     '<input id="q" type="search" placeholder="Search %d creatures\u2026" autocomplete="off" '
     'spellcheck="false" aria-label="Search creatures"><span id="tally"></span></div></div>' % tot,
     '<nav>' + ''.join(nav) + '</nav>', ''.join(secs),
     '<footer><p>Twelve biomes <b>%d</b> &middot; postgame sets <b>%d</b> &middot; '
     'life stages <b>%d</b> &middot; unplaced <b>%d</b> &middot; total <b>%d</b>. '
     'Names in <span style="color:var(--accent)">green</span> are moves already decided but '
     'not yet applied to the game data — see design/PENDING_MOVES.txt. '
     'The gap to 700 living species is <b>%d</b>.</p></footer>'
     % (bt, len(d['vigil']) + len(d['mythic']) + len(d['kept']) + len(d['fossil']),
        len(d['lifestage']), len(d['unplaced']), tot, 700 - bt),
     '</div>', '<script>%s</script>' % JS]

out = sys.argv[1] if len(sys.argv) > 1 else 'roster.html'
io.open(out, 'w', encoding='utf-8').write('\n'.join(p))
print('wrote', out, '| biomes', bt, '| total', tot, '| gap to 700 =', 700 - bt)
