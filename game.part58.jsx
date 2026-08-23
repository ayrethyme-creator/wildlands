// ---------- Part 58: THE WORK, REGIONS 3 TO 13 ----------
// Eleven more knots, built to the shape part47 set: people who are all behaving
// reasonably, an animal caught between them, and no villain anywhere.
//
// Every proposal in here is a thing people have actually done. The ones that
// work are the ones that worked in the field - a pond leveller, a turtle
// excluder, a canopy bridge, a lowered fence strand, a guardian dog, a bear-
// proof bin, amber street lighting - and the ones that fail are the ones that
// were tried first and failed for reasons worth knowing.
//
// The failures matter more than the successes. Every arc offers at least one
// answer that sounds decisive and is not: remove the animal, close the thing
// down, put up a sign. They fail specifically, and the reason is written out,
// because "that does not work" is only useful if you know why.

Object.assign(ARCS, {
  // ---------------- REGION 3: the fen and the water ----------------
  millrace: {
    postgame: true,
    region: 3,
    title: "The Millrace",
    where: "seg_w2",
    blurb: "A beaver family has flooded four hectares of Ada Oyelaran's pasture. The fen below has not been this wet in thirty years.",
    evidence: {
      water: { label: "What the dam is holding", detail: "The pond is up about a metre. Four hectares of pasture under water, and Ada's culvert blocked solid.", how: "Walk the flooded edge with Ada." },
      downstream: { label: "What the flooding is doing further down", detail: "The fen below is holding water through the dry months for the first time in thirty years. The frogs are back in it.", how: "Walk downstream past the reeds." },
      rebuild: { label: "How fast they rebuild", detail: "The dam was broken open on a Tuesday. It was closed again by Thursday morning.", how: "Ask Ada what she has already tried." },
      culvert: { label: "Why they are damming here and not elsewhere", detail: "They are damming the culvert. It is the sound of running water through a narrow gap that sets them off, not the pasture.", how: "Sit by the culvert at dusk and listen to what they respond to." },
      kits: { label: "Who is in the lodge", detail: "Two kits this year. The pair have been on this stretch at least four seasons.", how: "Watch the lodge in the early morning." },
    },
    proposals: {
      leveller: {
        label: "Put a pond leveller through the dam",
        needs: ["culvert", "water"],
        cost: 0, works: true,
        pitch: "A pipe through the dam with the intake caged and set well upstream, so the water leaves quietly. They dam the sound of it. Take away the sound and they stop building up, and the pond settles at a height Ada can live with. She keeps her pasture, the fen keeps its water, and nobody has to move.",
      },
      breach: {
        label: "Break the dam open and keep breaking it",
        needs: ["rebuild"],
        cost: 0, works: false,
        pitch: "Open it every time it goes up. Eventually they will give up and move on.",
        why: "Thursday morning. Every time. They are better at this than we are, they do it at night, and they will do it for as long as they live there - which, on this stretch, is years.",
      },
      trap: {
        label: "Trap the family and move them upstream",
        needs: [],
        cost: 0, works: false,
        pitch: "Take them somewhere the flooding does not matter and let Ada drain the field.",
        why: "The kits are too young to make it through a first winter somewhere strange. And the culvert is still a narrow gap with water running through it, so the next pair along the river will hear it and start building. The dam was never really about these beavers.",
      },
    },
    outcome: {
      good: "The pond dropped about eighty centimetres and it has stayed there. They built over the pipe twice and then left it alone once the noise stopped. I have my bottom field back and the fen is still wet, which I am told matters. Come and see the frogs, if you like that sort of thing.",
      bad: "It did not hold. The field is under water again and I am tired. But you are the first person to come out here and actually look at the culvert, so tell me what we try next.",
    },
  },

  // ---------------- REGION 4: the snakes in the stores ----------------
  granary: {
    region: 4,
    title: "What the Snakes Were For",
    where: "seg_j2",
    blurb: "A few years ago this village decided to clear the pythons out of its plantation, and it did. Within a year the rats arrived in numbers nobody had seen before, and the grain stores started emptying. Those two facts are connected: a python is not doing anything decorative out there, it is eating rodents more or less full time, and taking the snakes away took the rat control with them. The village was not being foolish — two people had been bitten, one a child, and that is a real thing to be frightened of. Your job is to work out what the snakes were actually for, and what would let people and pythons share the same ground safely.",
    evidence: {
      bites: { label: "Why they were cleared", detail: "Two people bitten in one season, one of them a child. Nobody here was being unreasonable or superstitious — they had a specific harm and they acted on it. Worth holding on to, because the temptation in a case like this is to treat the villagers as the problem. They are not. They responded sensibly to the only part of the situation anybody had explained to them.", how: "Ask at the clinic, and listen to the whole answer." },
      rats: { label: "What came after", detail: "Rat damage to the stored grain has roughly tripled since the clearing — considerably more, in money, than the snakes ever cost anyone. This is the cost nobody counted when the decision was made, because it arrived a year later and in a different form. Removing a predator does not simply subtract that animal; it hands whatever it was eating a free run.", how: "Ask the store keeper to open the sacks." },
      diet: { label: "What the snakes were eating", detail: "Rodents, almost entirely — that is what Dr. Sefu finds when she examines them. A python living on this land is effectively a rat trap that resets itself, feeds itself and costs nothing, and there were enough of them to hold the rat population down without anyone noticing it was being held down. Free work is invisible until it stops.", how: "Ask Dr. Sefu what she finds when she examines them." },
      where: { label: "Where the bites actually happened", detail: "Every one of them on the path between the stores and the houses, after dark, and nobody wearing anything on their feet. Not one in the plantation itself. That changes the whole shape of the problem: the danger was never the snake being present on the land, it was people and snakes meeting in one specific place at one specific time, which is a far smaller thing to fix.", how: "Map where each bite happened rather than assuming it was the plantation." },
      stores: { label: "How the grain is kept", detail: "Sacks on the floor, stacked against the wall. Rats walk straight in — and the snakes were following the rats into the buildings, which is precisely where people were meeting them. So the badly kept grain caused both halves of this at once: it fed the rats, and it drew the snakes off the plantation and onto the path after dark. Fix the store and both problems lose their reason to exist.", how: "Look at how the grain is stored, not at the snakes." },
    },
    proposals: {
      stores_fix: {
        label: "Raise the stores, seal them, and light the path",
        needs: ["stores", "where"],
        cost: 0, works: true,
        pitch: "Grain up on raised platforms with metal collars, in sealed bins a rat cannot climb to or chew into. Fewer rats in the buildings means the snakes stay out in the plantation, where they have never bitten anybody. Light the path and keep boots by the door, so the few that still come through are seen in time. The snake was never the danger — meeting one barefoot in the dark was.",
      },
      clear_more: {
        label: "Finish the job and clear the rest",
        needs: [],
        cost: 0, works: false,
        pitch: "Finish what was started rather than leaving it half done. The first clearing worked as far as it went, and the only reason anyone is still at risk is that it was never completed. Take out the snakes still living in the plantation and the danger goes to zero instead of being carefully managed down to nearly zero. No child walking that path meets anything at all, on any night, ever again.",
        why: "The rat damage tripled after the first clearing. Finishing it does not mean fewer rats, it means no rat control at all, and the stores are already losing more than the snakes ever cost. The bites do not stop either - the ones that bite people are the ones that come to the houses following food.",
      },
      antivenom: {
        label: "Stock antivenom at the clinic and leave it at that",
        needs: ["bites"],
        cost: 0, works: false,
        pitch: "Leave the snakes to do the work they are already doing out in the plantation, and deal with the actual harm where it lands. Stock antivenom at the clinic, keep it in date, and train two people to give it, so that anybody bitten is treated rather than left to hope. It fixes the outcome people are frightened of without rearranging the whole village around a risk.",
        why: "Worth doing and not an answer. Antivenom is for after; it does not stop a child being bitten on the path, and it is two hours to the clinic on a good day. Treating the outcome is not the same as changing the cause.",
      },
    },
    outcome: {
      good: "No bites this season. That is one season and I will not pretend it is proof. But the store is dry and full and the rats are not in it, and old Chinedu has stopped killing every snake he sees, which I honestly did not expect to live to see.",
      bad: "It has not worked yet. The stores are better and the path is lit and someone was still bitten last month. Come back and tell me what we missed.",
    },
  },

  // ---------------- REGION 5: the nets and the turtles ----------------
  tidewater: {
    region: 5,
    title: "The Weight in the Net",
    where: "reef",
    blurb: "Prawn trawlers drag a wide bag of net along the sea floor, and everything in its path goes in. Sea turtles breathe air, so a turtle swept into a net that stays down for hours simply drowns; it cannot get back to the surface. That is the whole mechanism, and it is nobody's intention. The six boats working this ground are not getting rich either - fuel is up, the catch is down, and a season lost is a family in trouble. So this is not a case of stopping bad people doing a bad thing. It is a case of finding the change the fleet can actually carry.",
    evidence: {
      drowned: { label: "How many are coming up dead", detail: "Eleven this month across six boats. A turtle held under for much more than forty minutes does not come back - it is not injured by the net, it drowns in it, which is why the ones that come up dead often have no marks on them at all. Counting them as they are landed is the only honest number anybody has, and it is the number every argument here has to answer to.", how: "Meet the boats coming in and count." },
      margins: { label: "What the boats are living on", detail: "Fuel is up, the catch is down, and nobody on this water is getting rich. A bad month is a real one here, not an inconvenience. This belongs in the casebook as evidence rather than sympathy: any measure that costs the fleet a season will simply not be kept, and a rule that is not kept protects nothing. What the boats can afford is part of what works.", how: "Ask Tide-Warden Sipho what the fleet actually earns." },
      hatch: { label: "How long a turtle takes to replace", detail: "A sea turtle takes twenty to thirty years to reach breeding age. So a female drowned this month is not one animal lost - she is every clutch she would have laid for the next thirty years, gone at once. That is why a population can look steady for a decade and then fall off a cliff: the damage is done long before it shows up on the nesting beach, and by the time the counts drop the animals that would have fixed it are already dead.", how: "Ask about the beach counts going back." },
      grid: { label: "What a turtle excluder costs the catch", detail: "A turtle excluder is a slanted grid of bars fitted across the neck of the net. Prawns are small and pass straight between the bars into the bag; a turtle is too big, hits the slope, and is guided out through a flap in the top. Trials elsewhere lose a few percent of the prawn catch and let almost every turtle out. It is the rare fix that does not ask anybody to choose between the animal and the living.", how: "Ask whether anyone has tried a grid, and what happened." },
      trust: { label: "Why the first attempt failed", detail: "Grids were handed out here once before. They were fitted wrong - wrong bar spacing, wrong flap angle - so they shed prawns as well as turtles, and the boats lost money proving it. There are still some in the shed that nobody will touch. This is the most important thing in the case: the technology already works and has already failed here, which means the problem in front of you is not engineering, it is trust, and the two need completely different solutions.", how: "Ask the older skippers why they will not use the ones in the shed." },
    },
    proposals: {
      teds: {
        label: "Fit excluder grids properly, and fit them together",
        needs: ["grid", "trust"],
        cost: 0, works: true,
        pitch: "The grids in the shed are the right idea, fitted wrong. Set the bar spacing and flap angle on each boat with that boat's skipper standing there, then run a week fitted alongside an unfitted net and let the fleet see both catches side by side on the quay. It costs a few percent of the prawns. It does not cost anyone a season, and it stops eleven a month.",
      },
      closure: {
        label: "Close the ground through the nesting season",
        needs: ["hatch"],
        cost: 0, works: false,
        pitch: "Shut the ground while the females are coming in to nest. No trawling on the turtle grounds for the weeks that matter means no turtles in nets at all - not fewer, none - and it needs no equipment, no fitting, no trust and no goodwill from anybody. It is the simplest thing that could possibly work, and it is enforceable from shore with a chart and a date.",
        why: "It is the simplest thing, and it lands entirely on six families who are already at the edge. They will fish anyway, further out and in worse weather, or they will stop and the fleet will not come back. A rule nobody can afford to keep is not protection, it is paperwork.",
      },
      patrol: {
        label: "Put an observer on every boat",
        needs: ["drowned"],
        cost: 0, works: false,
        pitch: "Put a trained observer aboard every boat to record what actually comes up. At the moment every claim in this argument rests on numbers the fleet collects about itself, and you cannot manage what nobody is independently measuring. Get a real record of where and when turtles are being taken, and the fix after that can be aimed at the boats and the grounds that need it.",
        why: "We already know what is happening - eleven this month, and Sipho has the numbers. Watching a turtle drown more accurately is not the same as it not drowning, and the boats read it as being policed by people who have never worked a net.",
      },
    },
    outcome: {
      good: "One this month, and she came up alive and went back over the side. The catch is down about four percent and the skippers can live with four percent. Old Anwar fitted his own without being asked, which from him is practically a speech.",
      bad: "Two boats are using them and four are not, and the four are the ones catching turtles. I do not blame them. Come back - I think we fitted them right and sold them wrong.",
    },
  },

  // ---------------- REGION 6: the road through the canopy ----------------
  canopygap: {
    postgame: true,
    region: 6,
    title: "The Gap in the Trees",
    where: "canopywalk",
    blurb: "The service road split the canopy. The animals that live above the ground will not come down to cross it.",
    evidence: {
      roadkill: { label: "Where they are dying", detail: "Almost all of it in two places, where the canopy comes closest on both sides. They are trying to cross where the gap is narrowest.", how: "Walk the road and map where the bodies are, not just how many." },
      wont: { label: "Why they do not use the ground", detail: "These are animals that have not touched the ground in generations. A tamarin on a road surface is a tamarin that has already made a mistake.", how: "Watch the treeline at the road edge for an hour." },
      split: { label: "What the split has done to the group", detail: "The troop on the far side is down to eleven and they are all related. Nothing has crossed to them in two years.", how: "Ask Arborist Kaia what the counts on each side look like." },
      speed: { label: "How fast the traffic actually goes", detail: "Six vehicles a day. It is not a busy road. Speed is not what is killing them.", how: "Count the traffic before assuming it is the problem." },
      height: { label: "How high they will cross", detail: "They move along branches at ten to fifteen metres and will not descend below about eight. Anything lower and they will not use it.", how: "Watch which branches they actually travel on." },
    },
    proposals: {
      bridges: {
        label: "Rope bridges at the two crossing points, high",
        needs: ["roadkill", "height"],
        cost: 0, works: true,
        pitch: "Two spans, at the places they are already trying to cross, strung at twelve metres so they meet the branches they actually use. Not a bridge in the middle where it is convenient to build - a bridge where the animals have been telling us for two years that they want to cross.",
      },
      signs: {
        label: "Signs and a speed limit",
        needs: ["speed"],
        cost: 0, works: false,
        pitch: "Warn the drivers and slow them down.",
        why: "Six vehicles a day. This road is not dangerous because it is fast, it is dangerous because it is a gap in the canopy, and a slower vehicle in the same gap kills the same animals slightly later.",
      },
      underpass: {
        label: "A culvert under the road",
        needs: [],
        cost: 0, works: false,
        pitch: "Let them cross underneath, out of the traffic entirely.",
        why: "It would work beautifully for something that walks. These animals will not go below eight metres. We would build it, and it would stay empty, and we would have spent the money we needed for the spans.",
      },
    },
    outcome: {
      good: "Fourteen crossings on the west span in the first month and we have footage of a female carrying young over it. Nothing dead on the road since the spans went up. The far troop has had two arrive from this side, which is the first new blood in that group in two years.",
      bad: "Nothing is using them. They are up, they are at the right height, and the animals are still going to the same two places and stopping. I think we have them in the wrong spot by twenty metres. Come and look with me.",
    },
  },

  // ---------------- REGION 7: the panels and the burrows ----------------
  sunfield: {
    postgame: true,
    region: 7,
    title: "The Field of Glass",
    where: "seg_d3",
    blurb: "The solar field will run the whole province clean. It is going in on top of the best burrow ground in the desert.",
    evidence: {
      power: { label: "What the field is for", detail: "It replaces the diesel plant at Kesh. Nobody arguing against it is arguing for the diesel plant.", how: "Ask Warden Zahra what it replaces, and mean it." },
      density: { label: "What is under the site", detail: "Burrow density here is the highest surveyed in the region. The soil is right - deep, stable, and it holds a tunnel.", how: "Survey the burrows across the site and the ground beside it." },
      degraded: { label: "What is next door", detail: "Six hundred hectares of abandoned quarry a kilometre north. Flat, cleared, dead ground, already on the access road.", how: "Walk north past the quarry fence." },
      fence: { label: "What the fence does", detail: "The security fence is buried skirt to thirty centimetres. Nothing that digs gets in or out, and half the burrow ground ends up on the wrong side of it.", how: "Read the site plan, specifically the fencing." },
      move: { label: "What happens when you move them", detail: "Translocated burrowers dig frantically for days in ground they do not know and most do not survive the first season.", how: "Ask what happened the last time a site was cleared this way." },
    },
    proposals: {
      quarry: {
        label: "Move the array to the quarry, and make the fence permeable",
        needs: ["degraded", "fence"],
        cost: 0, works: true,
        pitch: "Six hundred flat dead hectares a kilometre north with the access road already run to them. Build it there instead, and wherever fencing does cross live ground, cut passes at the base every fifty metres so the ground is not sliced in half. The power still gets built. It gets built on the part of the desert that is already finished.",
      },
      translocate: {
        label: "Move the animals off the site first",
        needs: ["move"],
        cost: 0, works: false,
        pitch: "Clear them out carefully, then build. Everyone gets what they need.",
        why: "Most of them will not see the next season. They are not carrying their tunnels with them, and a burrower in unfamiliar ground is an animal digging in a panic in the open. It looks like the humane option and it is mostly a way of not watching.",
      },
      delay: {
        label: "Object to the whole development",
        needs: ["density"],
        cost: 0, works: false,
        pitch: "Stop it. This ground is too good to build on.",
        why: "The diesel plant at Kesh keeps running, and it is the diesel plant that is cooking this desert in the first place. Refusing every site is how you end up defending the burrows into a climate that has no burrows in it. The question was never whether to build it, it was where.",
      },
    },
    outcome: {
      good: "They took the quarry. It cost them four months and a kilometre of cable and the developer is not fond of me, but the array is going up on dead ground and the burrow field is still a burrow field. The passes are cut into the perimeter where it crosses the wash. I have counted eleven animals through them.",
      bad: "They are building on the original site. I did not have the survey in time and I did not have the quarry costed. That is on me, not on you. Help me get the fencing changed at least - that part is still open.",
    },
  },

  // ---------------- REGION 8: the wire at the wrong height ----------------
  lowstrand: {
    region: 8,
    title: "The Lowest Strand",
    where: "seg_s2",
    blurb: "A pangolin is a scaled anteater about the size of a cat, and its entire defence is to curl into an armoured ball and hold on. That works against a leopard. Against an electrified fence it is fatal: the animal touches the wire, curls around it by reflex, and cannot let go. Mason Bram runs two hundred head of cattle behind that fence and it keeps poachers off his land too, so taking it down is not on the table and should not be. Nine pangolins have died on it this year. The answer, if there is one, is somewhere in the details of how the fence is actually built.",
    evidence: {
      bodies: { label: "What is being found on the wire", detail: "Nine pangolins this year on the boundary fence, and every one of them on the lowest strand - not scattered up and down the wire, all on the same one. When a pattern is that clean it is telling you something. Whatever is killing them is a property of one specific wire, which means it might be fixable without touching the rest of the fence at all.", how: "Walk the fence line with Bram, slowly." },
      curl: { label: "Why the fence kills them specifically", detail: "A hare hits the wire, gets a shock and bolts. A pangolin hits the wire and curls - it is the only defence it has, it is automatic, and it is not a decision the animal can reconsider. So it holds on to the thing that is hurting it and does not let go. That is why the same fence a hare walks away from kills a pangolin every time. The animal is not being unlucky; its one survival trick is exactly wrong for this.", how: "Ask why a pangolin dies on a wire that a hare walks through." },
      need: { label: "Why the fence is there", detail: "Two hundred head of cattle, and a poaching problem that is documented rather than imagined. The fence is doing two real jobs and Bram will not take it down - nor should anyone ask him to, since he is the person who called the station about the pangolins in the first place. Treat this as a hard constraint on the answer, not an obstacle to be argued around.", how: "Ask Bram what happened before the fence." },
      height: { label: "How high the killing strand sits", detail: "The bottom wire sits about ten centimetres off the ground - which is, almost exactly, the height of a walking pangolin's back. That is the whole mechanism in one measurement. A fence is not uniformly dangerous; it is dangerous at particular heights to particular animals, and this one happens to be set at the precise height that catches this species and very little else.", how: "Measure the strands rather than looking at them." },
      cattle: { label: "What the bottom strand is actually for", detail: "Almost nothing. The cattle are held by the strands above it, and nobody can say what the bottom wire stops - it is there because that is how this pattern of fence has always been specified. This is the finding that makes the case solvable: the one wire doing all the killing is the one wire on the fence that is not doing a job. Nobody has to give anything up.", how: "Ask what the lowest wire is stopping." },
    },
    proposals: {
      raise: {
        label: "Raise the lowest strand, or turn it off at night",
        needs: ["height", "cattle"],
        cost: 0, works: true,
        pitch: "Lift the bottom wire from ten centimetres to about thirty, or put that one strand on a timer so it is dead between dusk and dawn when pangolins move. The cattle are held by the wires above it, and no poacher was ever stopped by ten centimetres of wire. Everything that curls walks underneath, the fence keeps doing both its jobs, and it is a weekend of work.",
      },
      remove: {
        label: "Take the fence out along the boundary",
        needs: ["need"],
        cost: 0, works: false,
        pitch: "No fence, no fence deaths - and it is the only proposal here that removes the risk completely rather than reducing it. Every other answer leaves live wire standing in the path of an animal whose one defence is to grab hold of whatever is hurting it. Take the boundary line out and nine deaths a year becomes none, immediately and permanently, with nothing left to maintain or remember.",
        why: "Two hundred head on the road and the poaching starts again inside a month. Asking a man to choose between his herd and the pangolins is how you get a man who stops listening, and he was the one who called us.",
      },
      patrol: {
        label: "Walk the fence every morning and free what is caught",
        needs: ["bodies"],
        cost: 0, works: false,
        pitch: "Walk the whole boundary every morning and cut free anything still alive. It needs no negotiation with Bram, no alteration to a fence that is doing two jobs he depends on, and it can start tomorrow morning. It also builds a proper record of which stretches of wire are killing and which are not, which is something nobody currently has.",
        why: "They die in the night, in minutes. A morning patrol collects bodies. It is not nothing - it tells us where the bad stretches are - but a man walking a fence at seven is not a solution, he is a witness.",
      },
    },
    outcome: {
      good: "Nothing on the wire since April. I lifted the bottom strand on the whole boundary in a weekend, which tells you how hard the problem was and how long I left it. Two came through by the drift last week and went on their way. I have told the neighbours. Two of them have already done theirs.",
      bad: "Still finding them. I raised it along the north line and I think I have the height wrong, or the fence has sagged where the ground dips. Walk it with me again.",
    },
  },

  // ---------------- REGION 9: the flock and what came back ----------------
  highpasture: {
    region: 9,
    title: "What Came Back to the Pasture",
    where: "seg_a2",
    blurb: "Wolves and lynx are back on the high pasture after ninety years away - not released, they simply walked back in as the population recovered further north. The shepherds here have never farmed alongside a predator in their lives, and neither did their parents, because it was these families' own grandparents who cleared them out. So the sheep are being taken by animals nobody living has had to plan for, and the knowledge of how you used to keep a flock safe went out of use a lifetime ago. Nineteen sheep this season is a real loss to real people. The question is what actually protects a flock, as opposed to what feels decisive.",
    evidence: {
      losses: { label: "What is actually being lost", detail: "Nineteen sheep this season across four flocks. Write the actual number down, because arguments like this drift without one - the shepherds feel besieged, the conservationists say it is exaggerated, and neither is much use. Nineteen is real money and a real thing to lose, and it is also small enough to be fixable, which you only know once you have counted.", how: "Ask the shepherds, and write the number down." },
      night: { label: "When it happens", detail: "Almost every loss happens at night, on open pasture, with the flock spread out and nobody with them. That is not incidental, it is the condition that makes it possible: a scattered unguarded flock in the dark is the easiest food on the mountain. Which means the losses are not really caused by predators being present - they are caused by how the sheep are kept during eight hours of every day.", how: "Ask when the losses happen rather than where." },
      absent: { label: "Why nobody knows what to do", detail: "Ninety years with nothing hunting the flocks, and every practice that used to keep sheep alive - night pens, guardian dogs, staying out with them - quietly stopped being taught, because it stopped being needed. This is the real gap. The shepherds are not doing anything wrong by the standards they were raised with; those standards were simply built for a mountain with no predators on it, and that mountain no longer exists.", how: "Ask an older shepherd what their grandparents used to do." },
      culls: { label: "What happened last time they were shot", detail: "Two were shot last winter, and within four months there were three, arrived from over the ridge. Good territory does not stay empty - kill the residents and you have advertised a vacancy. Worse, the ones that move in are usually young animals with no established range and little hunting skill, and an inexperienced predator takes more livestock than a competent one, because sheep are what it can actually catch.", how: "Ask Glacier Yuki what followed the shooting." },
      dogs: { label: "What the neighbouring valley does", detail: "The valley over the pass has kept livestock guardian dogs since the predators came back, and has lost two sheep in three years against this valley's nineteen in one season. Same mountain, same weather, same animals. A guardian dog is not a herding dog - it is raised inside the flock from a puppy and lives in it permanently, and a predator will not take on sheep with one standing among them. The experiment has already been run next door.", how: "Walk over the pass and see for yourself." },
    },
    proposals: {
      guardians: {
        label: "Guardian dogs, and bring the flock in at night",
        needs: ["night", "dogs"],
        cost: 0, works: true,
        pitch: "Two guardian dogs raised in the flock from puppies, and a night enclosure so the sheep are not scattered across open pasture in the dark. It is exactly what the valley over the pass does, and exactly what these shepherds' great-grandparents did before the practice was forgotten. Nobody has to like having predators back. They have to be able to keep sheep with them there.",
      },
      cull: {
        label: "Remove the ones taking sheep",
        needs: ["culls"],
        cost: 0, works: false,
        pitch: "Remove the specific animals doing the killing. It is targeted rather than general, it works within days rather than seasons, and it asks nothing of shepherds who are already losing money through no fault of their own. Every other proposal here accepts a level of loss and calls it acceptable; this is the only one that treats nineteen dead sheep as a thing to actually stop.",
        why: "Two were shot last winter and three came over the ridge by spring. An empty territory in good country does not stay empty, and the ones that arrive are young and inexperienced, which makes them worse at hunting anything that is not a sheep.",
      },
      compensate: {
        label: "Pay the shepherds for what they lose",
        needs: ["losses"],
        cost: 0, works: false,
        pitch: "Pay for every animal lost, at full market value, promptly and without a fight. It removes the financial case against the predators overnight, so a shepherd who finds a dead ewe is inconvenienced rather than ruined, and it needs no new skills, no dogs, no fencing and no change to how anybody already works. Tolerance comes much easier when it is not costing you money.",
        why: "It pays for the dead sheep and prevents none of them, and it turns every shepherd into someone filling in forms about their own bad luck. It also runs out the year the money runs out. Worth having alongside something. Useless as the whole plan.",
      },
    },
    outcome: {
      good: "Two losses since the dogs came, both from the flock that would not use the enclosure. Old Petra has stopped calling me the wolf woman. She has not started liking them, which is fine - she does not have to. She just has to not need them gone.",
      bad: "The dogs are not working out. One flock will not use the night pen and the other has a dog that will not stay with the sheep. I think we got the dogs wrong rather than the idea. Come and help me sort it.",
    },
  },

  // ---------------- REGION 10: the bins at the edge of town ----------------
  frostwatch: {
    region: 10,
    title: "The Bins at the Edge of Town",
    where: "polarsea",
    blurb: "The bears have learned that the town has food in it. A bear that learns that does not unlearn it.",
    evidence: {
      tip: { label: "Where they are coming for", detail: "The open tip on the east side. Every bear that has come into town this year came through it first.", how: "Follow the tracks back from the houses." },
      ice: { label: "Why they are here at all", detail: "The ice is going out three weeks earlier than it did twenty years ago. Three more weeks ashore is three more weeks of a hungry animal near people.", how: "Ask Kepler Inuk about the ice records." },
      relocate: { label: "What happens when they are flown out", detail: "Moved a hundred and fifty kilometres north in September. He was back on the tip in eleven days.", how: "Ask what happened to the big male last autumn." },
      children: { label: "What the town is actually frightened of", detail: "The school walk goes past the east side. This is not an abstract worry and nobody here is being hysterical.", how: "Walk the school route at the hour the children use it." },
      holding: { label: "What the town already has", detail: "There is a holding facility from the old programme. Nobody has funded it in six years.", how: "Ask what the concrete building on the point used to be." },
    },
    proposals: {
      waste: {
        label: "Close the tip, bear-proof the town, staff the patrol",
        needs: ["tip", "holding"],
        cost: 0, works: true,
        pitch: "Cover the tip and move the waste to sealed containers, put bear-proof bins through the east side, and put the old holding facility and its patrol back into use so an animal in town is moved out the same night rather than after it has learned the route. Take the food away first. Everything else is arguing with a hungry animal about the school run.",
      },
      airlift: {
        label: "Fly out every bear that comes near town",
        needs: ["relocate"],
        cost: 0, works: false,
        pitch: "Move them far enough north and they will not come back.",
        why: "Eleven days. They navigate better than the helicopter budget does, and the tip is still open when they get back. It costs a fortune per animal to teach a bear the route home.",
      },
      feed: {
        label: "Put food out away from town to draw them off",
        needs: [],
        cost: 0, works: false,
        pitch: "Give them somewhere else to eat and they will stop coming in.",
        why: "It teaches them that people mean food, which is the exact lesson we are trying to stop them learning. A fed bear is a dead bear eventually, and usually not far from a school.",
      },
    },
    outcome: {
      good: "Fourteen bears through the patrol this autumn and not one of them got into a bin. The tip is covered and the east side has the containers. The town is not relaxed about it, and it should not be. But nobody has had to shoot one this year, and last year we shot two.",
      bad: "The tip is covered and they are still coming in - I think there is a second food source we have not found. Somebody is feeding them, or there is waste going out somewhere I have not looked. Help me find it.",
    },
  },

  // ---------------- REGION 11: the burning on the mountain ----------------
  ashfields: {
    region: 11,
    title: "The Burning on the Mountain",
    where: "seg_v3",
    blurb: "The bunchgrass is burned each year to bring on new grazing. The rabbits that live in it have nowhere else on earth to go.",
    evidence: {
      endemic: { label: "Where else these rabbits live", detail: "Nowhere. This mountain and the two beside it, and that is the entire range of the species.", how: "Ask Kiln Moyo how far the range extends." },
      burn: { label: "Why the grass is burned", detail: "Burnt ground greens up fast and the cattle need it. The herders are not doing this out of carelessness, they are doing it because it works.", how: "Ask the herders what the burning is for." },
      tussock: { label: "What the rabbits need from the grass", detail: "They live inside the old tussocks - runways through the base of grass that has not burned in years. New growth is food and no cover at all.", how: "Get down and look into an unburned tussock." },
      mosaic: { label: "What the mountain used to look like", detail: "Older herders describe burning in patches on a rotation, not the whole slope in a season. There was always old grass somewhere.", how: "Ask the oldest herder what the burning used to be like." },
      slope: { label: "Which ground matters most", detail: "The rabbits are concentrated on the upper slopes. The best cattle grazing is lower down, and the two barely overlap.", how: "Map where the rabbits are against where the cattle actually feed." },
    },
    proposals: {
      rotation: {
        label: "Burn in patches on a rotation, and leave the upper slopes",
        needs: ["mosaic", "slope"],
        cost: 0, works: true,
        pitch: "Go back to the mosaic the older herders describe: burn a third of the lower slopes a year on rotation so there is always old tussock standing somewhere, and leave the upper slopes out of it entirely. The cattle get their green flush, on the ground they actually graze. The rabbits keep the ground they cannot leave.",
      },
      ban: {
        label: "Stop the burning altogether",
        needs: ["endemic"],
        cost: 0, works: false,
        pitch: "No fire, no lost habitat. The species cannot afford it.",
        why: "The herders will burn anyway, at night and badly, because the alternative is watching the cattle go hungry - and an unmanaged mountain builds fuel until it burns all at once, which is worse for the rabbits than any rotation. A ban does not stop fire. It stops us having any say in where it goes.",
      },
      fence: {
        label: "Fence the rabbits into a reserve on the upper slope",
        needs: ["slope"],
        cost: 0, works: false,
        pitch: "Draw a line around the best ground and keep the cattle and the fire out of it.",
        why: "Fire does not read fences, and a fenced population on one slope is one bad season from being the whole species in one place. It also makes the herders the enemy of a line on a map, when they are the people whose hands are actually on the fire.",
      },
    },
    outcome: {
      good: "Third season on the rotation. The counts on the upper slopes are up for the first time since anyone was counting, and the herders are running it themselves now - they burn the block, they mark it, they move on. Old Tefo told me his grandfather did it this way and he thought we had invented it. I let him keep that.",
      bad: "Two blocks burned out of sequence and one of them was upper slope. I do not think anyone did it deliberately. The rotation is more complicated than I made it and people cannot follow a plan they cannot remember. Help me make it simpler.",
    },
  },

  // ---------------- REGION 12: the poles ----------------
  eyrie: {
    postgame: true,
    region: 12,
    title: "The Poles on the Ridge",
    where: "eyrie",
    blurb: "The eagles are dying on the power poles. The line has to cross the ridge and the ridge is where the eagles are.",
    evidence: {
      burns: { label: "How they are dying", detail: "Electrocution, not collision. Wings touching two conductors at once, or a conductor and the earthed cross-arm.", how: "Ask Falconer Sable to show you what is found under the poles." },
      span: { label: "Which poles are killing them", detail: "Not all of them. It is the older cross-arms where the conductors sit close together, and the ridge poles they perch on for the view.", how: "Map the deaths against the pole types rather than the line." },
      perch: { label: "Why they perch there at all", detail: "There is nothing else tall on the ridge. The poles are the only high perch on open ground, which is exactly what a hunting eagle wants.", how: "Look at the ridge and ask what else an eagle could sit on." },
      pairs: { label: "What the population can absorb", detail: "Eleven breeding pairs in the range. Four adults lost this year, and an adult takes five years to replace.", how: "Ask what the breeding count is against what is being lost." },
      retro: { label: "What a fixed pole looks like", detail: "Insulated jumpers, wider spacing, and a perch bar mounted above the conductors so the safest place to sit is the highest one.", how: "Ask whether any pole on the network has been done, and go and look at it." },
    },
    proposals: {
      retrofit: {
        label: "Retrofit the killing poles and give them a safe perch",
        needs: ["span", "retro"],
        cost: 0, works: true,
        pitch: "Not the whole line - the older cross-arms on the ridge, which is where every death has been. Insulate the jumpers, widen the spacing, and put a bar above the conductors so the highest perch is also the safe one. An eagle will always take the highest thing available. Make the highest thing harmless.",
      },
      divert: {
        label: "Hang flight diverters along the line",
        needs: ["burns"],
        cost: 0, works: false,
        pitch: "Make the wires visible so they stop flying into them.",
        why: "They are not flying into them. Diverters work, for collisions, on spans birds fly through - and every bird found here died perched, with burns. We would hang markers along a line that is killing nothing and leave the poles that are.",
      },
      reroute: {
        label: "Move the line off the ridge",
        needs: ["perch"],
        cost: 0, works: false,
        pitch: "Take the poles away from where the eagles hunt.",
        why: "The line has to cross the ridge somewhere and every route over it is eagle ground. It would cost more than retrofitting the entire network and it would put new poles on ground nobody has surveyed. Sometimes the infrastructure is in the right place and only built wrong.",
      },
    },
    outcome: {
      good: "Nothing under the poles since the retrofit. Better than that - they are using the perch bars, which I half expected them to ignore. The utility has started doing the same cross-arms on the northern line without being asked, because it turns out an eagle across two conductors also costs them an outage.",
      bad: "Lost another adult last month, on a pole we did not do. I picked the ones with the deaths and I should have picked by the cross-arm type. Come and help me finish the survey properly.",
    },
  },

  // ---------------- REGION 13: the lights ----------------
  nightgrove: {
    region: 13,
    title: "What the Lights Are Doing",
    where: "seg_g2",
    blurb: "The new lighting made the grove road feel safe to walk. It has emptied the air above it.",
    evidence: {
      moths: { label: "What happened to the insects", detail: "The trap counts under the new lights are a fraction of what they were. They circle the lamps until they are exhausted and they do not go on to do anything else.", how: "Ask Nyx what the moth counts did after the lights went in." },
      bats: { label: "What followed the insects", detail: "Two of the bat species that used the grove road have gone from it entirely. A third has actually increased - the fast ones feed at the lamps.", how: "Listen along the road with Nyx and count what answers." },
      safety: { label: "Why the lights went in", detail: "Someone was attacked on that road in the dark. The lighting was not vanity and the people who asked for it were right to ask.", how: "Ask why the council funded them, and listen properly." },
      spectrum: { label: "What kind of light it is", detail: "Cold white, unshielded, throwing as much light up and sideways as down. The blue end is what pulls the insects.", how: "Stand under one and look at where the light actually goes." },
      dark: { label: "Where the animals still are", detail: "The unlit stretch past the old orchard still has everything in it. Whatever this is, it is the lighting and not the year.", how: "Walk the unlit stretch and compare." },
    },
    proposals: {
      warm: {
        label: "Shielded amber lamps, aimed down, dimmed late",
        needs: ["spectrum", "safety"],
        cost: 0, works: true,
        pitch: "Keep the road lit - that is not negotiable and it should not be. Change what the light is: warm amber instead of cold white, full shields so it goes on the path and not into the trees, and dimming after the last bus when there is nobody to light. People can still see. The insects are not pulled out of the air, and the bats come back to hunt them.",
      },
      off: {
        label: "Turn them off",
        needs: ["moths"],
        cost: 0, works: false,
        pitch: "The grove had no lights for a century and it was fine.",
        why: "Someone was attacked on that road. Ask the people who use it at night to walk it in the dark again for the moths and you will lose them, and you will deserve to. This is the proposal that makes conservation into something done to people.",
      },
      motion: {
        label: "Put them on motion sensors",
        needs: ["dark"],
        cost: 0, works: false,
        pitch: "Dark most of the time, lit when someone is there.",
        why: "Better than nothing and it is still cold white light, still unshielded, still blasting the canopy every time a fox walks past the sensor. A sudden bright light in a dark grove is arguably worse for the animals than a constant one - and people report feeling less safe on a road that lights up around them.",
      },
    },
    outcome: {
      good: "The moth counts are about two thirds of what the unlit stretch gets, up from almost nothing. Both bat species are back on the road, and the council has had no complaints - which I did not dare hope for, because people notice a change in light even when they cannot say what changed. One woman told me it feels warmer to walk now. It is amber. She is not wrong.",
      bad: "The lamps are in and the counts have barely moved. I think the shields are wrong for the fitting and we are still throwing light up into the canopy. Come and stand under one with me at night and look up.",
    },
  },
});

console.log(`[part58] arcs 3-13 written | ${Object.keys(ARCS).length} arcs total`);

/* ---------------- AFTER THE SUMMIT ----------------
   Four more, and these do not open until the summit is behind you.

   Not because they are harder. Because each of them is a problem you cannot
   see from inside one region: a bird killed by a fleet on the other side of an
   ocean, a market that reaches every country at once, ground nobody can
   protect by standing on it, and a story doing damage in places the animal
   itself has never been. The whole map has to be behind you before any of them
   makes sense.

   The gate is the same one the Vigil uses - the summit at 7,1 - so there is
   one idea of "finished" in the game rather than two. */

Object.assign(ARCS, {
  // ---------------- THE OPEN OCEAN ----------------
  longline: {
    region: 14,
    postgame: true,
    title: "The Hooks and the Albatross",
    where: "openocean",
    blurb: "The albatross are dying on longlines set by fleets they will never share a country with. The birds cross oceans. The rules stop at borders.",
    evidence: {
      colony: { label: "What the colony is doing", detail: "Down about a third in twenty years. It is the breeding adults that are going, not the chicks — something is killing them out at sea.", how: "Count the nests on the island with the ringers, then ask which birds are missing." },
      hooks: { label: "How they die", detail: "They take the baited hooks as the line goes out, before it sinks. They are dragged under and drowned in the first few minutes of a set.", how: "Go out on a longliner and watch a set from the stern." },
      far: { label: "Where it is happening", detail: "Birds ringed on this island are recovered on lines four thousand kilometres away, under three different flags.", how: "Ask what the ring returns say about where the dead birds turn up." },
      lines: { label: "What stops it", detail: "Streamer lines over the stern, weighted branch lines that sink fast, and setting at night. Together they cut seabird deaths by something like ninety-nine percent.", how: "Ask the skippers who already use them what changed." },
      cost: { label: "Why every boat does not do it already", detail: "It costs almost nothing per set and it is one more thing to rig in the dark. The boats that do not do it are not villains, they are unsupervised and busy.", how: "Ask a skipper who does not use them why not." },
    },
    proposals: {
      streamers: {
        label: "Streamer lines, weighted branches, night setting — and get it into the fishery rules",
        needs: ["hooks", "lines"],
        cost: 0, works: true,
        pitch: "Three cheap things that only work together: streamers so the birds cannot reach the stern, weights so the bait is gone before they could, and setting after dark when they are not hunting. Then the part that actually matters — get it written into the licence conditions of every fleet on this ocean, not ours. A bird that crosses four thousand kilometres is not saved by one country being careful.",
      },
      island: {
        label: "Protect the breeding island harder",
        needs: ["colony"],
        cost: 0, works: false,
        pitch: "Fence the colony, clear the rats, guard the nests. Everything we can actually control.",
        why: "The island is already the safest place these birds go. It is not where they are dying — the adults are being killed a thousand miles out, and a perfectly protected colony that loses its breeding adults every year is a very well guarded extinction.",
      },
      ourfleet: {
        label: "Require it of our boats and start there",
        needs: ["cost"],
        cost: 0, works: false,
        pitch: "We can only regulate our own fleet. Do that, do it properly, and lead by example.",
        why: "Our fleet is a fraction of the hooks in this ocean. It is the right thing to do and on its own it is a gesture — the birds die under other flags in the same water. This is the arc where doing your own part well is genuinely not enough, and that is the lesson rather than a failure of nerve.",
      },
    },
    outcome: {
      good: "Four fleets signed, which took two years and more meetings than I want to describe. Bycatch on the observed sets is down about ninety percent. The colony has not turned around yet and will not for a decade — these birds are slow, and we are measuring a thing that stopped happening. That is the hardest kind of win to hold your nerve on.",
      bad: "Two fleets signed and two did not, and the two that did not are the ones with the most hooks in the water. The gear works. Come back — this was never a gear problem.",
    },
  },

  // ---------------- THE HEARTH ----------------
  hearth: {
    region: 15,
    postgame: true,
    title: "The Room at the Back",
    where: "rescue",
    blurb: "The rescue is full. Half of what comes through the door was bought as something that would stay small.",
    evidence: {
      intake: { label: "What is actually coming in", detail: "Two thirds of the surrenders this year were bought as juveniles by people told they would stay manageable. They did not.", how: "Read the intake book with the rescue keeper, the whole year of it." },
      buy: { label: "Where they come from", detail: "Bought in an afternoon, on a phone, from three fields away. Nobody was asked anything before the money changed hands.", how: "Ask the last five people who surrendered an animal where they got it." },
      cost: { label: "What keeping one properly costs", detail: "The enclosure, the heat, the vet who will actually see the species. It is many times the purchase price and almost nobody is told that first.", how: "Price up what a single one of them needs for a year." },
      captive: { label: "Whether captive breeding takes the pressure off", detail: "It was supposed to. Instead it made a legal channel that wild-caught animals are laundered through, and it made the animals cheap enough to buy on impulse.", how: "Ask the keeper why she does not celebrate the captive-bred ones." },
      keep: { label: "What the good keepers have in common", detail: "Every one of them waited. They read for months, they built the enclosure before they had the animal, and they were talked out of it at least once.", how: "Talk to the keepers who have never surrendered anything." },
    },
    proposals: {
      waiting: {
        label: "A waiting period, a real care sheet, and rehome before anyone sells",
        needs: ["buy", "keep"],
        cost: 0, works: true,
        pitch: "Nothing leaves a seller the day it is asked for. A fortnight's wait, a care sheet that states the adult size and the lifetime cost in the first line, and every buyer shown what is already sitting in the rescue before they are shown anything new. The good keepers all waited. Make waiting the only way to do it.",
      },
      ban: {
        label: "Ban the trade outright",
        needs: ["intake"],
        cost: 0, works: false,
        pitch: "Stop the sales and the surrenders stop with them.",
        why: "It moves three fields further away and stops being written down. The animals still get bought, by people who now cannot ask anyone for help and cannot surrender to a rescue without admitting to something. A ban with nowhere to bring them is how animals end up released into a hedge.",
      },
      bigger: {
        label: "Fund a bigger rescue",
        needs: ["cost"],
        cost: 0, works: false,
        pitch: "The rescue is full. Build more room.",
        why: "It fills. It always fills, and a bigger one fills faster, because a rescue that can always take one more is the thing that lets the sale feel harmless. Every keeper here would rather have the space and none of them think it is the answer.",
      },
    },
    outcome: {
      good: "Intake is down about a third and — this is the part I did not expect — the returns from the waiting-period buyers are almost nil. They come back for the care sheet. They come back with photos of the enclosure before they have the animal. Turns out a fortnight is long enough for the wrong reasons to wear off.",
      bad: "Two sellers took the scheme and the rest carried on, and the ones that carried on got busier. I think we made the honest sellers slower and left everyone else alone. Come back — the scheme needs teeth I did not give it.",
    },
  },

  // ---------------- THE DIG ----------------
  digsite: {
    region: 16,
    postgame: true,
    title: "What the Ground Remembers",
    where: "digsite",
    blurb: "The bed is being stripped by night. What leaves in a crate is a specimen; what stays in the rock is a record.",
    evidence: {
      pits: { label: "What is being taken", detail: "Skulls and articulated limbs, cut out with angle grinders. The rest of the animal is left in pieces in the spoil.", how: "Walk the worked-over ground in daylight and look at what was left behind." },
      context: { label: "Why the rest of it mattered", detail: "Where a bone sat, what lay beside it, which way the current ran. Cut a skull out and the answer to how it died leaves with it.", how: "Ask the excavator what she can read from a bone still in the rock." },
      poor: { label: "Who is doing the digging", detail: "People from the villages along the wash, paid a few notes a piece by a buyer who never comes to the site. It is the worst-paid job in the chain by a very long way.", how: "Find out what a digger is actually paid, and who pays them." },
      demand: { label: "Where it ends up", detail: "Private sale. A good skull goes for more than the whole village earns in a year, and it disappears into a room nobody will ever publish from.", how: "Follow the chain past the buyer, as far as it goes." },
      legal: { label: "What happens where digging is legal and paid", detail: "In the beds where local diggers are employed, trained and credited on the papers, the looting stopped almost entirely. They had a better offer.", how: "Ask what the beds over the border did differently." },
    },
    proposals: {
      employ: {
        label: "Hire the diggers, train them, and put their names on the papers",
        needs: ["poor", "legal"],
        cost: 0, works: true,
        pitch: "The people stripping this bed know it better than anyone who has ever written about it. Employ them on the excavation at a real wage, train them in recording what they lift, and credit them where the work is published. The looting stops because the best-paid way to work this ground becomes the one that keeps the context. It is not charity, it is the only offer anyone has made them that is worth more than the buyer's.",
      },
      guards: {
        label: "Fence the bed and post guards",
        needs: ["pits"],
        cost: 0, works: false,
        pitch: "Lock the site. Nothing leaves it that we do not carry out ourselves.",
        why: "It is eleven kilometres of open wash and they live here. The guards will be from the same villages and paid less than the buyer pays. All a fence does is decide which nights the digging happens on, and it makes the people who know this ground into trespassers on it.",
      },
      buyback: {
        label: "Buy the specimens back before they leave the country",
        needs: ["demand"],
        cost: 0, works: false,
        pitch: "Outbid the collectors and at least the fossils stay where they belong.",
        why: "It sets a price and the price is the problem. Pay well for a looted skull and you have told every village along the wash exactly what a skull is worth, and next season there are more diggers, not fewer. The context is already gone by the time anything is for sale — you are buying the part that mattered least at a price that guarantees more of it.",
      },
    },
    outcome: {
      good: "Nine of them on the payroll and two are better at spotting a weathered edge than I am. Nothing has gone out of the bed by night since spring. Amara — the first paper from this site has four local names on it, and one of them had never seen his name printed before. He asked me for a second copy for his mother.",
      bad: "Three signed on and the rest are still working the far end at night. I think the wage is right and the trust is not — I am a stranger who arrived with a clipboard after the buyer had been coming for years. Come back with me and let us be less quick about it.",
    },
  },

  // ---------------- THE RIFT ----------------
  mythhub: {
    region: 17,
    postgame: true,
    title: "The Animal Underneath the Story",
    where: "mythhub",
    blurb: "The stories in the Rift are doing real damage to real animals — and the answer is not to tell people their stories are wrong.",
    evidence: {
      trade: { label: "What the belief costs", detail: "Pangolin scales, tiger bone, rhino horn, hornbill casque. Every one of them keratin or bone, and every one worth more than gold because of what people are told it does.", how: "Ask what the shopkeeper is actually selling, and what it is made of." },
      works: { label: "Whether any of it works", detail: "The horn is the same material as a fingernail. There is no evidence for the claims, and the price has nothing to do with the evidence.", how: "Ask a pharmacist rather than a conservationist." },
      told: { label: "What happened when people were told they were stupid", detail: "Campaigns aimed at buyers that called the belief backward increased sales. People dug in, and it became a matter of who was doing the telling.", how: "Ask about the campaign that ran here ten years ago." },
      inside: { label: "Who has actually shifted it", detail: "Traditional medicine practitioners themselves, removing the ingredients from their own pharmacopoeia and saying so in their own words.", how: "Ask which campaigns changed a buyer's mind, and who fronted them." },
      cats: { label: "The story that runs the other way", detail: "The cat-sìth was said to steal souls, and for centuries people killed cats over it. The same species is now the most protected animal in half the world's households.", how: "Ask a keeper why the game keeps a Rift at all." },
    },
    proposals: {
      practitioners: {
        label: "Work through the practitioners, in their words, on their authority",
        needs: ["inside", "told"],
        cost: 0, works: true,
        pitch: "Nobody has ever been argued out of a belief by a foreigner with a graph. The practitioners who have taken these ingredients out of their own practice did more in five years than every poster campaign put together, because they were not attacking anyone's grandmother — they were saying, from inside, that this part was never the important part. Fund them. Get out of the front of it.",
      },
      debunk: {
        label: "A campaign showing the science",
        needs: ["works"],
        cost: 0, works: false,
        pitch: "Show people the horn is keratin. Nobody knowingly pays for a fingernail.",
        why: "This is exactly what was tried and sales went up. Being told your grandmother was a fool by someone from another country does not produce doubt, it produces loyalty. The facts were never wrong and they were never the lever.",
      },
      farm: {
        label: "Farm the product legally to undercut the poaching",
        needs: ["trade"],
        cost: 0, works: false,
        pitch: "Flood the market with a legal supply and the wild animals stop being worth killing.",
        why: "It has been tried and it legitimises the demand it was meant to starve. A legal channel is a laundry — wild product enters it and cannot be told apart — and advertising that the thing is now respectable grows the market faster than any farm can fill it. The same mistake as the captive-bred pets, in a different room.",
      },
    },
    outcome: {
      good: "Eleven practitioners in the association took the scale off their lists and said why, in their own words, on their own platforms. Demand in the survey areas is down by about a third in two years. I did not stand at the front of any of it and that is the whole reason it worked.",
      bad: "We fronted it wrong. Two practitioners signed and then a poster went out with our logo on it and both of them quietly stopped returning calls. That was my fault and it is fixable, but not quickly. Come and help me apologise properly.",
    },
  },
});

console.log(`[part58] arcs: ${Object.keys(ARCS).length} total | ${Object.values(ARCS).filter((a) => a.postgame).length} open only after the summit`);
