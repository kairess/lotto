var ml = require('machine_learning');
var colors = require('colors');
var common = require('./common.js');
var supervisor = require('./supervisor.js');

var guess = [
	{
		stage: 701,
		date: '2016-5-7'
	}
];

/**
	input(x) : 46
	output(y) : 51
*/
var x = common.result2binary(supervisor).x;
var y = common.result2binary(supervisor).y;

var classifier = new ml.LogisticRegression({
	'input': x,
	'label': y,
	'n_in': 46,
	'n_out': 90
});

classifier.set('log level', 1);

classifier.train({
	'lr': 0.5,
	'epochs': 100
});

var knowWhat = common.guess2binary(guess);

var learningResult = classifier.predict(knowWhat);

common.printResult(learningResult);
