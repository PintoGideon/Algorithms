function maxChar(str) {
	var maxArray = str.split('');
	var max = maxArray.reduce((a, b) => {
		return Math.max(a, b);
	});

	return max;
}

/* Alternate Method */

function maxChar(str) {
	const charMap = {};

	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}
