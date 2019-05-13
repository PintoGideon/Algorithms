//Capitalize the first letter of each word in the string

//"lord of the rings"====> "Lord Of The Rings"

// return capitalized string

function capitalize(str) {
	const words = [];

	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
}

module.exports = capitalize;



