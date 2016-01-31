var allObjectives = Immutable.List.of(
	Immutable.List.of(	"Spring",	"Summer",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Spring",	"Summer",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Spring",	"Summer",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Summer",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Spring",	"Summer",	"Winter",	"Spring"	),
	Immutable.List.of(	"Spring",	"Summer",	"Winter",	"Summer"	),
	Immutable.List.of(	"Spring",	"Summer",	"Winter",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Summer",	"Winter",	"Winter"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Summer",	"Spring"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Summer",	"Summer"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Summer",	"Winter"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Winter",	"Spring"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Winter",	"Summer"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Winter",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Autumn",	"Winter",	"Winter"	),
	Immutable.List.of(	"Spring",	"Winter",	"Summer",	"Spring"	),
	Immutable.List.of(	"Spring",	"Winter",	"Summer",	"Summer"	),
	Immutable.List.of(	"Spring",	"Winter",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Winter",	"Summer",	"Winter"	),
	Immutable.List.of(	"Spring",	"Winter",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Spring",	"Winter",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Spring",	"Winter",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Spring",	"Winter",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Summer",	"Spring",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Summer",	"Spring",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Summer",	"Spring",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Spring",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Summer",	"Spring",	"Winter",	"Spring"	),
	Immutable.List.of(	"Summer",	"Spring",	"Winter",	"Summer"	),
	Immutable.List.of(	"Summer",	"Spring",	"Winter",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Spring",	"Winter",	"Winter"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Summer",	"Spring"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Summer",	"Summer"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Summer",	"Winter"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Spring",	"Spring"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Spring",	"Summer"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Autumn",	"Spring",	"Winter"	),
	Immutable.List.of(	"Summer",	"Winter",	"Spring",	"Spring"	),
	Immutable.List.of(	"Summer",	"Winter",	"Spring",	"Summer"	),
	Immutable.List.of(	"Summer",	"Winter",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Winter",	"Spring",	"Winter"	),
	Immutable.List.of(	"Summer",	"Winter",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Summer",	"Winter",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Summer",	"Winter",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Summer",	"Winter",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Summer",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Summer",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Summer",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Winter",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Winter",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Winter",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Spring",	"Winter",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Winter",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Winter",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Winter",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Winter",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Spring",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Spring",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Summer",	"Spring",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Spring",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Spring",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Spring",	"Winter"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Summer",	"Spring"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Summer",	"Summer"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Autumn",	"Winter",	"Summer",	"Winter"	),
	Immutable.List.of(	"Winter",	"Spring",	"Summer",	"Spring"	),
	Immutable.List.of(	"Winter",	"Spring",	"Summer",	"Summer"	),
	Immutable.List.of(	"Winter",	"Spring",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Spring",	"Summer",	"Winter"	),
	Immutable.List.of(	"Winter",	"Spring",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Winter",	"Spring",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Winter",	"Spring",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Spring",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Winter",	"Summer",	"Autumn",	"Spring"	),
	Immutable.List.of(	"Winter",	"Summer",	"Autumn",	"Summer"	),
	Immutable.List.of(	"Winter",	"Summer",	"Autumn",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Summer",	"Autumn",	"Winter"	),
	Immutable.List.of(	"Winter",	"Summer",	"Spring",	"Spring"	),
	Immutable.List.of(	"Winter",	"Summer",	"Spring",	"Summer"	),
	Immutable.List.of(	"Winter",	"Summer",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Summer",	"Spring",	"Winter"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Spring",	"Spring"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Spring",	"Summer"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Spring",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Spring",	"Winter"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Summer",	"Spring"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Summer",	"Summer"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Summer",	"Autumn"	),
	Immutable.List.of(	"Winter",	"Autumn",	"Summer",	"Winter"	)

	);

var objectiveTemplate = function (name, resources) {
	return "<div class='panel-body'>" + 
				"<strong>" + name + "</strong> " + resources +
			"</div>";
};

var toImg = function(resource) { return '<img src="icons/' + resource + '.png"/>'; };
var toResourceRow = function(res1, am1, res2, am2, res3, am3) {
	return toImg(res1) + ' ' + am1 + ' ' + toImg(res2) + ' ' + am2 + ' ' + toImg(res3) + ' ' + am3;
};

var spring = function() { return objectiveTemplate('Spring', toResourceRow('Poultry',  8, 'Game', 3, 'Ore', 2)); };
var summer = function() { return objectiveTemplate('Summer', toResourceRow('Fruit', 8, 'Fish', 5, 'Valuables', 2)); };
var autumn = function() { return objectiveTemplate('Autumn', toResourceRow('Fish', 8, 'Game', 3, 'Wood', 2)); };
var winter = function() { return objectiveTemplate('Winter', toResourceRow('Grain', 8, 'Game', 3, 'Ore', 2)); };

var toSeasonObjective = function(season) {
	if (season == 'Spring') {return spring();}
	if (season == 'Summer') {return summer();}
	if (season == 'Autumn') {return autumn();}
	if (season == 'Winter') {return winter();}
};

var toHtml = function(comb) {
	return "<div class='panel panel-primary objective-panel'>" + 
			"	<div class='panel-heading'>" +
			"	<h2 class='panel-title'>Objectives</h2></div>" +
			comb.map(toSeasonObjective).reduce(function(x, y) {return x + y;}) + "</div>" +
			"</div>";
};

$(function() {
	var cards = allObjectives.map(toHtml).reduce(function(x, y) {return x + y;});
	var result = cards;
	$('#main').html(result);
});