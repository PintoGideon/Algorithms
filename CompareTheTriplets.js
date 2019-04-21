/*
 https://www.hackerrank.com/challenges/compare-the-triplets/problem
*/

var alice = [6, 6, 0];
var bob = [6, 6, 10];

function compareTriplets(a, b) {
	var score = [0, 0];

	for (var i = 0; i < alice.length; i++) {
		if (a[i] > b[i]) {
			score[0]++;
		} else if (a[i] < b[i]) {
			score[1]++;
		} else continue;
	}
	return score;
}

console.log(compareTriplets(alice, bob));
