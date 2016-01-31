var testRitual = {
	title: 'Maak het zomer',
	costs: Immutable.List.of(
		{ type: 'ore', amount: 1},
		{ type: 'wood', amount: 1},
		{ type: 'fish', amount: 2}
	),
	affinity: 'Summer',
	effect: 'Next season is summer',
	flavor: 'Flavor text'
};

var getCost = function(cost) {
	return "<div class='cost'> " +
	"<img src='icons/" + cost.type + ".png'/> " +
	"<span>" + cost.amount + "</span></div>";
};

var getCosts = function(ritual) {
	return ritual.costs.map(getCost).reduce(function(x, y) { return x + y; });
};

var getLeft = function(ritual) {
	return "<div class='costs left'> " +
		"	Costs " +
		getCosts(ritual) +
		"</div>";
};

var getRight = function(ritual) {
	return "<div class='right'> " +
	"	<div class='top'> " +
	"		<div class='title'> " +
	"			<strong>" + ritual.title + "</strong> -- " + ritual.affinity +
	"		</div> " +
	"	</div> " +
	"	<div class='text-box'> " +
	"		<div class='effect'>" + ritual.effect + "</div> " +
	"		<div class='flavour'>" + ritual.flavor + "</div> " +
	"	</div> " +
	"</div>";
};

var ritualHtml = function(ritual) {
	return "<div class='ritual'>" +
		getLeft(ritual) +
		getRight(ritual) +
	"</div>";
};

$(function() {
	var result = window.rituals.map(ritualHtml).reduce(function(x, y) {return x + y;});
	$('#main').html(result);
});