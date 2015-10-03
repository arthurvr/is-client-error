import test from 'ava';
import isClientError from './';

test('detects client error codes', t => {
	t.true(isClientError(404));
	t.true(isClientError(400));
	t.true(isClientError(494));
	t.false(isClientError(308));
	t.false(isClientError(425));
	t.false(isClientError(441));

	t.end();
});

test('throws when not passing a number', t => {
	t.throws(() => {
		isClientError({});
	});

	t.end();
});
