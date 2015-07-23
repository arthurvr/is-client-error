'use strict';
var codes = [
	400,
	401,
	402,
	403,
	404,
	405,
	406,
	407,
	408,
	409,
	410,
	411,
	412,
	413,
	414,
	415,
	416,
	417,
	418,
	419,
	420,
	421,
	422,
	423,
	424,
	426,
	428,
	429,
	431,
	440,
	444,
	449,
	450,
	451,
	494,
	495,
	496,
	497,
	498,
	499
];

module.exports = function (code) {
	if (typeof code !== 'number') {
		throw new TypeError('Expected a number');
	}

	return codes.indexOf(code) !== -1;
};
