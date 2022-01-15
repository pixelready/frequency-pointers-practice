'use strict';

/**
 * iterates over an iterable and tallies the frequency of values into an object with the iterable's values for keys and its frequencies as values
 * @param {*} iterable 
 * @returns frequency counter object
 */

function makeFrequencyCounter(iterable) {
	let freqs = {};

	for (let val of iterable) {
		let valCount = freqs[val] || 0;
		freqs[val] = valCount + 1;
	}

	return freqs;
}
