window.rituals = Immutable.List.of(
	{
		title: 'Summon Summer',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 2},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Summer',
		effect: 'Place the "Next Season Marker" (if available) on Summer.',
		flavor: 'The sun will shine brighter than gold.'
	}, 
	{
		title: 'Summon Winter',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Winter',
		effect: 'Place the "Next Season Marker" (if available) on Winter.',
		flavor: 'Do you want to build snowmen... forever?'
	},
	{
		title: 'Spring Affinity',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'valuables', amount: 2}
		),
		affinity: 'Spring',
		effect: 'You receive 2 <POULTRY> and 2 <VALUABLES>',
		flavor: 'Mary had a little lamb. Its fleece was white as snow.'
	},
	{
		title: 'Status Quo is King',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'fish', amount: 1},
			{ type: 'fruit', amount: 1},
			{ type: 'grain', amount: 1},
			{ type: 'poultry', amount: 1}
		),
		affinity: 'No affinity',
		effect: 'Place the "Next Season Marker" (if available) on the current Season.<br/>If Spring: Gain 1 <POULTRY>.<br/>If Summer: Gain 1 <FISH> and 1 <FRUIT>.<br/>If Autumn: Gain 2 <GRAIN>.<br/>If Winter: Gain 1 <GAME> and 1 <img src="icons/grain.png"/>.',
		flavor: ''
	},
	{
		title: 'Theft',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'Steal all resources of a single type from another player.',
		flavor: 'That looks nice... it&#39;s mine now.'
	},
	{
		title: 'Winter Affinity',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'You receive 1 <ORE>, 1 <VALUABLES> and 1 <WOOD>',
		flavor: 'Let is snow, let it snow, let it snow.'
	},
	{
		title: 'Summon Autumn',
		costs: Immutable.List.of(
			{ type: 'grain', amount: 2},
			{ type: 'ore', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Autumn',
		effect: 'Place the "Next Season Marker" (if available) on Autumn.',
		flavor: 'LET THE LEAF DROP!'
	},
	{
		title: 'Summon Autumn',
		costs: Immutable.List.of(
			{ type: 'grain', amount: 6}
		),
		affinity: 'Autumn',
		effect: 'Place the "Next Season Marker" (if available) on Autumn.',
		flavor: 'I will enthrall the whole of Fall!'
	},
	{
		title: 'Summon Winter',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'Place the "Next Season Marker" (if available) on Winter.',
		flavor: 'Winter is Coming.'
	},
	{
		title: 'Summon Winter',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'ore', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'Place the "Next Season Marker" (if available) on Winter.',
		flavor: 'Winter is nice... it&#39;s cold and bitter... like my heart.'
	},
	{
		title: 'Summon Winter',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1}
		),
		affinity: 'Winter',
		effect: 'Place the "Next Season Marker" (if available) on Winter.',
		flavor: 'Winter comes fast on the lazy.'
	},
	{
		title: 'Summon Spring',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'poultry', amount: 1},
			{ type: 'valuables', amount: 1}
		),
		affinity: 'Spring',
		effect: 'Place the "Next Season Marker" (if available) on Spring.',
		flavor: 'Love, shine a light!.'
	},
	{
		title: 'Workforce Spring',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'valuables', amount: 2}
		),
		affinity: 'Spring',
		effect: 'You may use an additional worker during Spring.',
		flavor: 'He&#39;s got a spring in his step.'
	},
	{
		title: 'Workforce Summer',
		costs: Immutable.List.of(
			{ type: 'fruit', amount: 2},
			{ type: 'ore', amount: 2}
		),
		affinity: 'Summer',
		effect: 'You may use an additional worker during Summer.',
		flavor: 'Break a sweat.'
	},
	{
		title: 'Workforce Autumn',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Autumn',
		effect: 'You may use an additional worker during Autumn.',
		flavor: 'Fall in step!'
	},
	{
		title: 'Workforce Winter',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'You may use an additional worker during Winter.',
		flavor: 'Work to stay warm!'
	},
	{
		title: 'Autumn Affinity',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 2},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Autumn',
		effect: 'You receive 2 <FISH> and 2 <WOOD>',
		flavor: 'All the leaves are brown, and the sky is grey.'
	},
	{
		title: 'A Feast of Everything',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Spend a total of 25 resources to complete your current Feast, disregarding the Season and Requirements.',
		flavor: 'A little bit of this... little bit of that.'
	},
	{
		title: 'Wildlife Extermination',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'wood', amount: 1}
		),
		affinity: 'Winter',
		effect: 'All players lose 6 <GAME>.',
		flavor: 'Feel the bitter cold of Winter!'
	},
	{
		title: 'Summon summer',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'fish', amount: 2}
		),
		affinity: 'Summer',
		effect: 'Place the "Next Season Marker" (if available) on Summer.',
		flavor: ''
	},
	{
		title: 'Pest infestation',
		costs: Immutable.List.of(
			{ type: 'ore', amount: 2},
			{ type: 'fruit', amount: 2}
		),
		affinity: 'Summer',
		effect: 'All players lose 8 <FRUIT>',
		flavor: 'This apple is full of maggots!'
	},
	{
		title: 'Expert trader',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Trade any 15 resources of your choice for any 5 resources of your choice.',
		flavor: ''
	},
	{
		title: 'Suprise discovery!',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Trade any 15 resources of your choice for any 5 resources of your choice.',
		flavor: ''
	},
	{
		title: 'Frantic research',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'valuables', amount: 2}
		),
		affinity: 'Spring',
		effect: 'Discard all your Ritual cards. Draw a number of Rituals from the deck equal to the amount of discarded cards + 1.',
		flavor: 'It&#39;s down there somewhere! Let me have another look.'
	},
	{
		title: 'Mine collapse',
		costs: Immutable.List.of(
			{ type: 'fruit', amount: 2},
			{ type: 'ore', amount: 2}
		),
		affinity: 'Summer',
		effect: 'All players lose 4 <ORE>',
		flavor: 'The miners haven&#39;t returned... again.'
	},
	{
		title: 'Exploration',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Look at the top 4 cards of the Ritual deck. Put any of them at the bottom of the ritual deck, and put the others back at the top in any order.',
		flavor: 'Drat! I was holding the compass upside down again!'
	},
	{
		title: 'Fortune telling',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Look at the top 4 cards of the Ritual deck. Put any of them at the bottom of the ritual deck, and put the others back at the top in any order.',
		flavor: 'Look! The pawn shop is selling crystal balls!'
	},
	{
		title: 'Locust swarm',
		costs: Immutable.List.of(
			{ type: 'wood', amount: 1},
			{ type: 'valuables', amount: 1},
			{ type: 'ore', amount: 1}
		),
		affinity: 'Winter',
		effect: 'Every player loses 8 <GRAIN>.',
		flavor: 'They came and ate it all.'
	},
	{
		title: 'Wildfire',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 2},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Autumn',
		effect: 'Every player loses 4 <WOOD>.',
		flavor: ''
	},
	{
		title: 'Dry spell',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 2},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Autumn',
		effect: 'Every player loses 8 <FISH>.',
		flavor: 'Fish can&#39;t breed without water.'
	},
	{
		title: 'Lunch break!',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 2},
			{ type: 'wood', amount: 2}
		),
		affinity: 'Autumn',
		effect: 'Every player returns one worker to his or her hand.',
		flavor: ''
	},
	{
		title: 'Summon Spring',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'wood', amount: 1},
			{ type: 'valuables', amount: 1}
		),
		affinity: 'Spring',
		effect: 'Place the "Next Season Marker" (if available) on Spring.',
		flavor: 'Now we sow, later we reap.'
	},
	{
		title: 'Summon Spring',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'wood', amount: 1},
			{ type: 'ore', amount: 1}
		),
		affinity: 'Spring',
		effect: 'Place the "Next Season Marker" (if available) on Spring.',
		flavor: 'Ah-choo! There&#39;s my hay fever again.'
	},
	{
		title: 'Summon Summer',
		costs: Immutable.List.of(
			{ type: 'fish', amount: 6}
		),
		affinity: 'Summer',
		effect: 'Place the "Next Season Marker" (if available) on Summer.',
		flavor: 'You scream, we scream, everybody ice cream!'
	},
	{
		title: 'Summon Autumn',
		costs: Immutable.List.of(
			{ type: 'grain', amount: 2},
			{ type: 'wood', amount: 1},
			{ type: 'valuables', amount: 1}
		),
		affinity: 'Autumn',
		effect: 'Place the "Next Season Marker" (if available) on Autumn.',
		flavor: 'Autumn? I hardly knew &#39;em.'
	},
	{
		title: 'Summon Autumn',
		costs: Immutable.List.of(
			{ type: 'grain', amount: 2},
			{ type: 'ore', amount: 1},
			{ type: 'valuables', amount: 1}
		),
		affinity: 'Autumn',
		effect: 'Place the "Next Season Marker" (if available) on Autumn.',
		flavor: 'How I long to see the colorful leaves again.'
	},
	{
		title: 'Summer Affinity',
		costs: Immutable.List.of(
			{ type: 'fruit', amount: 2},
			{ type: 'ore', amount: 2}
		),
		affinity: 'Summer',
		effect: 'You receive 2 <FRUIT> and 2 <ORE>',
		flavor: 'Summertime, and the living is easy. Fish are jumping, and the cotton is high.'
	},
	{
		title: 'Season polarization',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'fruit', amount: 1},
			{ type: 'grain', amount: 1},
			{ type: 'fish', amount: 1},
			{ type: 'poultry', amount: 1}
		),
		affinity: 'No affinity',
		effect: 'Place the "Next Season Marker" (if available) 1 or 2 spaces past the current season.',
		flavor: 'People always complain when it&#39;s hot. They want it cold, but when it&#39;s cold, they want it hot.'
	},
	{
		title: 'Deflation',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2},
			{ type: 'valuables', amount: 2}
		),
		affinity: 'Spring',
		effect: 'Every player loses 4 <VALUABLES>.',
		flavor: 'I&#39;m sorry sir, your account has been closed.'
	},
	{
		title: 'Election victory',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'fruit', amount: 1},
			{ type: 'grain', amount: 1},
			{ type: 'fish', amount: 1},
			{ type: 'poultry', amount: 1}
		),
		affinity: 'No affinity',
		effect: 'Take the "Starting Player Marker."',
		flavor: 'Turns out, free pie makes you popular.'
	},
	{
		title: 'Rush order',
		costs: Immutable.List.of(
			{ type: 'game', amount: 2},
			{ type: 'fruit', amount: 1},
			{ type: 'grain', amount: 1},
			{ type: 'fish', amount: 1},
			{ type: 'poultry', amount: 1}
		),
		affinity: 'No affinity',
		effect: 'Take the "Starting Player Marker."',
		flavor: 'Of course, for you I&#39;ve always got time'
	},
	{
		title: 'Summon Spring',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 6 }
		),
		affinity: 'Spring',
		effect: 'Place the "Next Season Marker" (if available) on Spring.',
		flavor: 'Spring is... like... totally my thing!'
	},
	{
		title: 'Fox overflow',
		costs: Immutable.List.of(
			{ type: 'poultry', amount: 2 }
		),
		affinity: 'Spring',
		effect: 'Every player loses 8 <POULTRY>.',
		flavor: 'We might be hungry, but at least the foxes can eat.'
	},
	{
		title: 'Honesty',
		costs: new Immutable.List(),
		affinity: 'No affinity',
		effect: 'Reveal your objective card. Receive 2 of every resource type. You can play Honesty only if you completed 2 feasts or fewer.',
		flavor: ''
	});