//chunk([1,2,3,4],2)=====> [[1,2],[3,4]]

// Create an empty array to hold chunks
// For each element in the unchunked array
//Remove the last element in 'chunked'
// If the element does not exist or it's length
// is equal to chunk size
//Push the new chunk into unchunked array with the current element

//Else add the current element into the chunk

function chunk(array, size) {
	const chunked = [];

	for (let element of array) {
		const last = chunked[chunked.length - 1];

		if (!last || last.length == size) {
			chunked.push([element]);
		} else {
			last.push(element);
		}
	}

	return chunked;
}

/* Alternate Solution */

function chunk(array, size) {
	const chunked = [];
	let index = 0;

	while (index < array.length) {
		chunked.push(array.slice(index, index + size));
		index += size;
	}

	return chunked;
}
