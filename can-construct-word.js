'use strict';

// add whatever parameters you deem necessary & write doc comment
/**
 * returns `true` if word can be constructed from the provided letters, else returns `false`
 * @param {string} word 
 * @param {string} letters 
 */
function canConstructWord(word, letters) {
	if (!letters) {
		return false;
	}
	if (word === '') {
		return true;
	}

	let wordCharFreqs = makeFrequencyCounter(word);
	let lettersCharFreqs = makeFrequencyCounter(letters);

	for (let key of Object.keys(wordCharFreqs)) {
		lettersCharFreqs[key] -= wordCharFreqs[key];
		if (lettersCharFreqs[key] < 0) {
			return false;
		}
	}
	return true;
}
