// Input will be the number of elements in the array
// and the array elements

// Find the sum

var n = prompt('Enter the number of array elements');

for (var i = 0; i < n; i++) {
	numbers[i] = prompt('Enter a value');
}

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += sum + numbers[i];
}

console.log(sum);
