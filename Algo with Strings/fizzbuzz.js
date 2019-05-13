function fizzBuzz(n) {
	let i = 0;
	while (i < n) {
		if (i % 3 == 0 && i% 5 == 0) {
			console.log('fizzbuzz');
			i++;
		} else if (i % 3 == 0) {
			console.log('fizz');
			i++;
		} else if (i % 5 == 0) {
			console.log('buzz');
			i++;
		} else {
			console.log(i);
			i++;
		}
	}
}




