'use strict';

/**
 * returns true if any pair of values will average out to 'targetAvg', otherwise false
 * @param {Array} sortedIntArray 
 * @param {Number} targetAvg
 */
function averagePair(sortedIntArray, targetAvg) {
	let left = 0;
	let right = sortedIntArray.length - 1;

	while (left < right) {
		let avg = (sortedIntArray[left] + sortedIntArray[right]) / 2;

		if (avg === targetAvg) {
			return true;
		} else if (avg > targetAvg) {
			right--;
		} else {
			left++;
		}
	}

	return false;
}
