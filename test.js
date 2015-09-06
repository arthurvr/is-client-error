'use strict';
var test = require('ava');
var isClientError = require('./');

test('should detect client error codes', function (t) {
	t.true(isClientError(404));
	t.true(isClientError(400));
	t.true(isClientError(494));
	t.true(!isClientError(308));
	t.true(!isClientError(425));
	t.true(!isClientError(441));

	t.end();
});
