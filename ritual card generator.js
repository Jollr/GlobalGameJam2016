var insertIcons = function(cardText) {
	return cardText.replace('<POULTRY>', '<img src="icons/poultry.png"/>')
		.replace('<GAME>', '<img src="icons/game.png"/>')
		.replace('<WOOD>', '<img src="icons/wood.png"/>')
		.replace('<GRAIN>', '<img src="icons/grain.png"/>')
		.replace('<FISH>', '<img src="icons/fish.png"/>')
		.replace('<ORE>', '<img src="icons/ore.png"/>')
		.replace('<VALUABLES>', '<img src="icons/valuables.png"/>')
		.replace('<FRUIT>', '<img src="icons/fruit.png"/>');
};

var getCost = function(cost) {
	return "<div class='cost'> " +
	"<img src='icons/" + cost.type + ".png'/> " +
	"<span>" + cost.amount + "</span></div>";
};

var getCosts = function(ritual) {
	if (ritual.costs.size == 0) {return "<div class='cost no-cost'> No cost</div>";}
	return ritual.costs.map(getCost).reduce(function(x, y) { return x + y; });
};

var getLeft = function(ritual) {
	return "<div class='costs left'> " +
			"<span class='costs-title'><strong>Cost</strong></span>" +
			getCosts(ritual) +
		"</div>";
};

var getRight = function(ritual) {
	return "<div class='right'> " +
	"	<div class='top'> " +
	"		<div class='title'> " +
	"			<strong>" + ritual.title + "</strong> -- " + "<span class='affinity'>" + ritual.affinity + "</span>" +
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
	var result = window.rituals.map(ritualHtml).map(insertIcons).reduce(function(x, y) {return x + y;});
	$('#main').html(result);
});