function deepEqual (x, y) {

	if (x === y) {
		return true;
	}

	if (x == null || typeof x != "object" ||
		y == null || typeof y != "object") {
		return false;
	}

	var totalX = 0, totalY = 0;

	for (var element in x) {
		totalX++;
	}

	for (var element in y) {
		totalY++;
		if (! element in x || ! deepEqual(x[element], y[element])) {
			return false;
		}
	}

	return totalX == totalY;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true