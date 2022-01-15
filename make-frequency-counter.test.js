'use strict';

describe('makeFrequency counter returns correct object', function() {
	it('correctly formatted object', function() {
		expect(makeFrequencyCounter('skbjjjvnnd')).toEqual({
			s: 1,
			k: 1,
			b: 1,
			j: 3,
			v: 1,
			n: 2,
			d: 1
		});
	});
});
