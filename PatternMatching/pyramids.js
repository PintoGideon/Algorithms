// Write a function that accepts a positive number N.
// The function should console.log a pyramid shape with N levels using the # character. Make sure the pyramid has space on both the left and right hand sides.

// Iterative Solution

function pyramid(n) {
	const midpoint = Math.floor((2 * n - 1) / 2);

	for (let row = 0; row < n; row++) {
		let level = '';

		for (let column = 0; column < 2 * n - 1; column++) {
			if (midpoint - row <= column && midpoint + row >= column) {
				level += '#';
			} else {
				level += ' ';
			}
		}
		console.log(level);
	}
}

// Recursive Solution

function pyramid(row = 0, n, level = '') {
	if (n === row) {
		return;
	}

	if (level.length === 2 * n - 1) {
		console.log(level);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2 * n - 1) / 2);

	let add;

	if (midpoint - row <= level.length && midpoint + row >= level.length) {
		add = '#';
	} else {
		add = ' ';
	}

	pyramid(n, row, level + add);
}
