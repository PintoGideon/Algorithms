function palindrome(str) {
	var toCheckString = str
		.split('')
		.reverse()
		.join('');

	return toCheckString === str;
}

module.exports = palindrome;


/* Alternate Solution */

