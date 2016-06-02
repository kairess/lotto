var request = require('request');
var fs = require('fs');
var colors = require('colors');

var start = 601;
var end = 700;

var resultArray = [];

for(var i = start; i<=end; i++) {
	request('http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo='+i, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var parsedBody = JSON.parse(body);

			var result = {
				"stage": parsedBody.drwNo,
				"date": parsedBody.drwNoDate,
				"result": [parsedBody.drwtNo1, parsedBody.drwtNo2, parsedBody.drwtNo3, parsedBody.drwtNo4, parsedBody.drwtNo5, parsedBody.drwtNo6],
				"bonus": [parsedBody.bnusNo]
			}

			console.log(parsedBody.drwNo + ' complete'.rainbow);

			resultArray.push(result);

			if(resultArray.length == 100) {
				fs.writeFileSync(__dirname + '/data/'+start+'-'+end+'.json', JSON.stringify(resultArray));
				console.log("finished!!");
			}
		}
	});
}

// console.log(resultArray);

//fs.writeFileSync(__dirname + '/supervisor.json', JSON.stringify(resultArray));
