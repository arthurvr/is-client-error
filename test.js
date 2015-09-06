'use strict';
var test = require('ava');
var isClientError = require('./');

test('detects client error codes', function (t) {
	t.true(isClientError(404));
	t.true(isClientError(400));
	t.true(isClientError(494));
	t.false(isClientError(308));
	t.false(isClientError(425));
	t.false(isClientError(441));

	t.end();
});

test('throws when not passing a number', function (t) {
	t.throws(function () {
		isClientError({});
	});

	t.end();
});
