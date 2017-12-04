function reverseArray (array) {
	var reversed = [];

	for (var i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	};

	return reversed;
}

function reverseArrayInPlace (array) {
	for (var i = 0; i < Math.floor(array.length / 2); i++) {
		var current = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = current;
	};

	return array;
}