'use strict';

const assert = require('assert');
const tests = [];

function test(msg, fn) {
	tests.push([msg, fn]);
}

process.nextTick(async function run() {
	const total = tests.length;
	let i = 0;

	for (const [msg, fn] of tests) {
		i++;

		try {
			await fn(assert);
			console.log(`${i}/${total} pass - ${msg}`);
		} catch (error) {
			console.error(`${i}/${total} fail - ${msg}\n`, error);
			process.exitCode = 1;
		}
	}
});

module.exports = test;
