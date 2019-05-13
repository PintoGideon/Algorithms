// Check to see if two provided strings are
// anagrams of each other

// anagrams('rail safety', 'fairy tales')--->true

//Removing punctuations and spaces from strings

//const word="HI THERE!!!"
//word.replace(/[^\w]/g,"").toLowerCase()

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		return false;
	}

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}

	return true;
}

function buildCharMap(str) {
	const charMap = {};
	const cleanedString = str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('');

	for (let letter of cleanedString) {
		if (charMap[letter]) {
			charMap[letter]++;
		} else charMap[letter] = 1;
	}
	return charMap;
}

/* Alternate Solution */

function anagrams(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
	return str
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}
