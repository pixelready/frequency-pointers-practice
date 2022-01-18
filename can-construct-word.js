'use strict';

// add whatever parameters you deem necessary & write doc comment
/**
 * returns `true` if word can be constructed from the provided letters, else returns `false`
 * @param {String} word 
 * @param {String} letters 
 */

//TODO: return false if word.length greater than letters

function canConstructWord(word, letters) {
	if (!letters) {
		return false;
	}
	if (word === '') {
		return true;
	}

	let wordCharFreqs = makeFrequencyCounter(word);
	let lettersCharFreqs = makeFrequencyCounter(letters);

	for (let key in wordCharFreqs) {
		lettersCharFreqs[key] -= wordCharFreqs[key];
		// TODO: save frequency difference and then use that for boolean
		if (lettersCharFreqs[key] < 0) {
			return false;
		}
	}
	return true;
}
