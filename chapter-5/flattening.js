var arrays = [[1, 2, 3], [4, 5], [6]];

function flattening (arrays) {
	return arrays.reduce(function (prev, curr) {
		return prev.concat(curr);
	});
}

console.log(flattening(arrays));