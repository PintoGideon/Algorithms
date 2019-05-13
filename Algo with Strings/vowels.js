// Count the number of vowels in a string

function vowels(str) {
	let count = 0;
	const checkVowel = ['a', 'e', 'i', 'o', 'u'];

	for (let char of str.toLowerCase()) {
		if (checkVowel.includes(char)) {
			count++;
		}
	}

	return count;
}

/* Alternate solution */

function vowels(str) {
	const matches = str.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
}
