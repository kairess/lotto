// 개당 총 14+32+45+45 = 136자리
/**
{
	stage: 700, // 최대 10000까지 14자리 10011100010000
	date: new Date('2016.4.30'),	// 최대 2020.4.30까지 32자리 11000110011100111010010110000000
	result: [11, 23, 28, 29, 30, 44],	// 최대 45자리
	bonus: 13	// 최대 45자리
}
*/
var data = require('./data/1-100.json').concat(require('./data/101-200.json'),require('./data/201-300.json'),require('./data/301-400.json'),require('./data/401-500.json'),require('./data/501-600.json'),require('./data/601-700.json'));

module.exports = data;
