function range (start, end, step) {
	if (step == undefined || step == 0) {
		step = 1;
	}
	var numbers = [];

	if (step < 0 ) {
		for (var i = start; i >= end; i += step) {
			numbers.push(i);
		}
	} else {
		for (var i = start; i <= end; i += step) {
			numbers.push(i);
		}
	}
	return numbers;
}

function sum (range) {
	var total = 0;
	for (var i = 0; i < range.length; i++) {
		total += range[i];
	}
	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55