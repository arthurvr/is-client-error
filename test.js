'use strict';
var assert = require('assert');
var isClientError = require('./');

it('should detect client error codes', function () {
	assert(isClientError(404));
	assert(isClientError(400));
	assert(isClientError(494));
	assert(!isClientError(308));
	assert(!isClientError(425));
	assert(!isClientError(441));
});
