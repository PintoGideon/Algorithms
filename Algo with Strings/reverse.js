/* My Solution*/

function reverse(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

/* Alternate Solution*/

function reverse1(str) {
	let reversed = '';

	for (let character of str) {
		reversed = character + reversed;
	}

	return reversed;
}

/* Complicated solution using a array helper */

function reverse2(str) {
	return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, '');
}




