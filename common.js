
module.exports.result2binary = function(resultObj) {
	var finalResult = {
		x: [],
		y: []
	};

	for(var result of resultObj) {
		var splitStage = this.dec2binSplit(result.stage, 14);
		var splitDate = this.dec2binSplit((new Date(result.date)).getTime(), 32);
		var splitResult = this.result2binSplit(result.result);
		var bonus = this.result2binSplit(result.bonus, 6);

		finalResult.x.push(splitStage.concat(splitDate));
		finalResult.y.push(splitResult.concat(bonus));
	}

	return finalResult;
}

module.exports.guess2binary = function(guessObj) {
	var finalResult = {
		x: [],
		y: []
	};

	for(var result of guessObj) {
		var splitStage = this.dec2binSplit(result.stage, 14);
		var splitDate = this.dec2binSplit((new Date(result.date)).getTime(), 32);

		finalResult.x.push(splitStage.concat(splitDate));
	}

	return finalResult.x;
}

// print result
module.exports.printResult = function(learningResult) {
	for(var result of learningResult) {
		var resultArray = result.slice(0, 45);
		var bonusArray = result.slice(45, 90);

		console.log("========= Numbers =========".rainbow);
		for(var i in resultArray) {
			if(resultArray[i]) {
				var str = (parseInt(i)+1) + "번: " + (resultArray[i]*100) + "%";
				console.log(str.red);
			}
		}

		console.log("========= Bonus Numbers =========".america);
		for(var i in bonusArray) {
			if(bonusArray[i]) {
				var str = (parseInt(i)+1) + "번: " + (bonusArray[i]*100).toFixed(2) + "%";
				console.log(str.yellow);
			}
		}
	}
}

// functions

module.exports.dec2bin = function(dec) {
	return ((dec >>> 0).toString(2));
}

module.exports.dec2binSplit = function(dec, n) {
	var padString = pad(this.dec2bin(dec), n).split("");

	for(var i in padString) {
		padString[i] = parseInt(padString[i]);
	}

	return padString;
}

module.exports.result2binSplit = function(resultArray) {
	var result = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var v of resultArray) {
		result[v-1] = 1;
	}

	return result;
}


function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
