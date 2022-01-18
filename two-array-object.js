'use strict';
/**
 * Accepts two arrays and returns a merged object with the first array's values
 * as its keys and the second arrays values as its values, extra keys will have value of null
 * @param {Array} keysArr 
 * @param {Array} valsArr 
 * @returns {Object} merged object
 */
function twoArrayObject(keysArr, valsArr) {
	let counter = 0;
	const mergedObj = {};

	for (let key of keysArr) {
		if (valsArr[counter] === undefined) {
			mergedObj[key] = null;
		} else {
			mergedObj[key] = valsArr[counter];
		}
		counter++;
	}
	console.log(mergedObj);
	return mergedObj;
}
