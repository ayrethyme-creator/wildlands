"""Rewrite VOICE_BY_NAME in game.part79.jsx, and audit it against the roster.

    python design/tools/fix_voices.py            # audit only, changes nothing
    python design/tools/fix_voices.py --write    # rewrite the table in part79

Two jobs, and the second is the important one. Writing the table is easy; being
sure a fragment does not quietly claim an animal it has no business claiming is
the work, and the only way to know is to run every rule over all 1183 names and
READ THE LISTS. Anchoring the fragments by eye caught the first six mistakes;
reading the audit caught six more that looked perfectly fine as patterns - the
bEAGLE, the FROGmouth, the FISHer, the SWALLOWtail, the VIPERfish, the LEOPARD
Gecko. Counts would have hidden every one of them.
"""
import io, os, re, sys

# Repo-relative, so this works in the main checkout and in any worktree.
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
PART = os.path.join(ROOT, "game.part79.jsx")
GT = os.path.join(ROOT, "design", "GROUND_TRUTH.txt")

# (pattern, voice, comment) - ORDER DECIDES. Exceptions first.
RULES = [
 (r"prairie dog", "small", "a ground squirrel; the game has a badge saying so"),
 (r"elephant shrew", "small", None),
 (r"elephant bird", "bird", None),
 (r"bulldog bat|flying fox|fruit bat", "small", "bats, not dogs or foxes"),
 (r"hawk moth|hawkmoth", "insect", None),
 (r"eagle ray", "fish", None),
 (r"lion's mane|lionfish", "fish", None),
 (r"bull shark", "fish", None),
 (r"guinea pig|sea pig", "small", None),
 (r"\bmantis\b", "insect", None),
 (r"frogmouth", "bird", "a nightjar, not an amphibian"),
 (r"frogfish|viperfish|whale shark", "fish", None),
 (r"swallowtail", "insect", "a butterfly, not a swallow"),
 (r"leopard gecko", "small", None),
 (r"\bfisher\b", "small", "a marten; the type fallback made it a cat"),
 (r"oystercatcher", "bird", "a shorebird; Aquatic made it a fish"),
 (r"crocodile|alligator|\bcaiman\b|gharial|\bcroc\b", "big", "no reptile voice; a low growl beats a fish blip"),

 (r"whale|narwhal|beluga|manatee|dugong", "whale", None),
 (r"\bseal\b|seals\b|walrus|sea lion|sea cow|crabeater", "whale", "no seal voice; the moan is nearer than a squeak"),
 (r"dolphin|porpoise|\borca\b|vaquita", "dolphin", None),
 (r"frog|toad|salamander|newt|axolotl|caecilian|\bolm\b|hellbender|tadpole", "frog", None),
 (r"snake|python|\bboa\b|cobra|viper|mamba|adder|krait|anaconda|taipan|sidewinder|bushmaster", "snake", None),
 (r"\bowl\b|owls\b|owlet|\beagle|\bhawk\b|falcon|\bkite\b|vulture|condor|buzzard|harrier|kestrel|osprey|caracara|goshawk|lammergeier|\bskua\b|\beyas\b", "raptor", None),
 (r"gull|\btern\b|petrel|gannet|albatross|penguin|\bduck\b|goose|\bcrane\b|heron|stork|ibis|parrot|macaw|cockatoo|cockatiel|finch|wren|robin|\btit\b|lark|magpie|raven|\bcrow\b|chough|pigeon|\bdove\b|swan|toucan|hornbill|kiwi|\bemu\b|ostrich|cassowary|flamingo|peafowl|budgerigar|canary|starling|sparrow|swallow|woodpecker|kingfisher|thrush|warbler|bustard|curlew|avocet|godwit|turnstone|spoonbill|shearwater|booby|frigatebird|pelican|shoebill|lorikeet|conure|lovebird|quetzal|potoo|hoatzin|kookaburra|lyrebird|bowerbird|rosella|weaver|honeyeater|honeyguide|ptarmigan|\bauk\b|puffin|grebe|\bloon\b|\brail\b|\bdodo\b|\bmoa\b|huia|chick\b|chicken|\bhen\b", "bird", None),
 (r"\bwolf\b|wolves|wolfdog|\bdog\b|dogs\b|\bfox\b|foxes|jackal|coyote|dhole|dingo|hyena|aardwolf|culpeo|puppy|\bmutt\b|beagle|collie|terrier|retriever|shepherd|poodle|husky|corgi|dachshund|chihuahua|labrador|greyhound|malamute|samoyed|akita|rottweiler|dalmatian|\bpug\b|shiba|pit bull|great dane|saint bernard", "dog", None),
 (r"\bcat\b|cats\b|bobcat|\blion\b|lions\b|lioness|tiger|leopard|\bjaguar\b|\bpuma\b|\blynx\b|caracal|serval|cheetah|ocelot|margay|kodkod|jaguarundi|smilodon|kitten|tabby|siamese|persian|ragdoll|sphynx|\bbengal\b|\bmanx\b|\bfossa\b", "cat", None),
 (r"elephant|rhino|hippo|giraffe|bison|buffalo|moose|\bbear\b|bears\b|\byak\b|camel|mammoth|mastodon|aurochs|\bcow\b|\bbull\b|\box\b|muskox|\bpig\b|\bhorse\b|donkey|okapi|tapir|gorilla|orangutan|\belk\b|\bboar\b|warthog|babirusa|peccary", "big", None),
 (r"shark|\bray\b|rays\b|stingray|fish\b|fishes\b|tuna|\bcod\b|herring|salmon|\beel\b|eels\b|grouper|wrasse|snapper|mackerel|sardine|\bperch\b|trout|\bchar\b|barracuda|marlin|coelacanth|halibut|capelin|guppy|betta|\bkoi\b|tetra|discus|goby|seahorse|lamprey|sawfish|\bopah\b|remora", "fish", None),
 (r"\bbat\b|bats\b|mouse|mice|\brat\b|rats\b|\bvole\b|shrew|lemming|gerbil|hamster|squirrel|chipmunk|marmoset|gopher|jerboa|\bpika\b|marmot|dormouse|rabbit|\bhare\b|bunny|weasel|stoat|ferret|\bmink\b|marten|otter|meerkat|mongoose|lemur|possum|bandicoot|numbat|quoll|wombat|koala|\bdegu\b|capybara|agouti|chinchilla|viscacha|hedgehog|\bmole\b", "small", None),
]


def roster():
    # GROUND_TRUTH.txt is exported on the Terrane branch (by gt_export_server.py,
    # read out of the running game). main does not carry it, so say that plainly
    # rather than guessing a roster out of the .jsx files - which this project
    # has already got three separate wrong answers from.
    if not os.path.exists(GT):
        sys.exit("no " + GT + "\n"
                 "The audit needs the exported roster, which lives on the Terrane\n"
                 "branch. Run this from that checkout. --write does not need it.")
    names = []
    for line in io.open(GT, encoding="utf-8").read().splitlines():
        if line.startswith("!") or "=" not in line:
            continue
        names += [n.strip() for n in line.split("=", 1)[1].split("|") if n.strip()]
    return names


def audit():
    rx = [(re.compile(p, re.I), v) for p, v, _ in RULES]
    names = roster()
    print("roster: %d names" % len(names))
    by, un, which = {}, [], {}
    for n in names:
        got = next(((v, i) for i, (p, v) in enumerate(rx) if p.search(n)), None)
        if got:
            by[got[0]] = by.get(got[0], 0) + 1
            which.setdefault(got[1], []).append(n)
        else:
            un.append(n)
    for k in sorted(by, key=lambda k: -by[k]):
        print("   %-8s %4d" % (k, by[k]))
    print("matched by name: %d | falls through to type: %d" % (len(names) - len(un), len(un)))
    print("\n=== every rule, and what it caught (READ THE LISTS, not the counts) ===")
    for i, (p, v, c) in enumerate(RULES):
        got = which.get(i, [])
        print("\n[%02d] %-8s %s%s" % (i, v, p[:78], "" if not c else "   // " + c))
        print("     %d: %s" % (len(got), ", ".join(got[:26]) + ("  ..." if len(got) > 26 else "")))


def write():
    s = io.open(PART, encoding="utf-8").read()
    i = s.index("const VOICE_BY_NAME")
    j = s.index("];", i) + 3
    body = "const VOICE_BY_NAME = [\n"
    for n, (p, v, c) in enumerate(RULES):
        if n == 17:
            body += "\n  // the general rules\n"
        body += "  [/%s/i, \"%s\"],%s\n" % (p, v, "" if not c else "   // " + c)
    body += "];\n"
    io.open(PART, "w", encoding="utf-8", newline="").write(s[:i] + body + s[j:])
    # A shell heredoc turned every \b in this table into a literal backspace once,
    # and the game said nothing: the rules simply stopped matching. Check.
    bad = sum(io.open(PART, encoding="utf-8").read().count(chr(c)) for c in range(1, 9))
    print("wrote %s | control-character corruption: %d" % (PART, bad))
    if bad:
        sys.exit("REFUSING: control bytes in the file")


if __name__ == "__main__":
    if "--write" in sys.argv:
        write()
    else:
        audit()
