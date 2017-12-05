function every (array, predicate) {
	return array.reduce(function (prev, current, index, vector) {
		if (prev && predicate(current)) {
			return true;
		} else {
			vector.splice(0,vector.length);
			return false;
		}
	}, true);
}

function some (array, predicate) {
	return array.reduce(function (prev, current, index, vector) {
		if (prev || predicate(current)) {
			vector.splice(0,vector.length);
			return true;
		} else {
			return false;
		}
	}, false);
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false