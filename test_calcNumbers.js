import assert from 'node:assert/strict';
import { addNumbers } from './src/calcNumbers.js';
import { multiplyNumbers } from './src/calcNumbers.js';

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

test('multiplication', () => {  
	assert.strictEqual(multiplyNumbers(2, 3), 6);
	assert.strictEqual(multiplyNumbers(2.5, 4), 10);
	assert.strictEqual(multiplyNumbers(-1, 1), -1);
	assert.strictEqual(multiplyNumbers(1e20, 1e20), 1e40);
	assert.ok(Number.isNaN(multiplyNumbers(NaN, 1)));
});

console.log('All tests completed.');