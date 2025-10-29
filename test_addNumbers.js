import assert from 'node:assert/strict';
import { addNumbers } from './src/addNumbers.js';

// Simple test runner using Node's built-in assert
function test(name, fn) {
	try {
		fn();
		console.log(`✔ ${name}`);
	} catch (err) {
		console.error(`✖ ${name}`);
		console.error(err);
		process.exitCode = 1;
	}
}

test('integers', () => {
	assert.strictEqual(addNumbers(2, 3), 5);
});

test('floats', () => {
	assert.strictEqual(addNumbers(2.5, 7.5), 10);
});

test('negatives', () => {
	assert.strictEqual(addNumbers(-1, 1), 0);
});

test('large numbers', () => {
	assert.strictEqual(addNumbers(1e20, 1e20), 2e20);
});

test('nan propagation', () => {
	const r = addNumbers(NaN, 1);
	assert.ok(Number.isNaN(r));
});

console.log('All tests completed.');
