function arrayToList (array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = {
			value: array[i],
			rest: list
		}
	}

	return list;
}

function listToArray (list) {
	var array = [];
	while(list !== null) {
		array.push(list.value);
		list = list.rest;
	}

	return array;
}

function prepend (element, list) {
	return {
		value: element,
		rest: list
	};
}

function nth (list, position) {
	if (position == 0) {
		return list.value;
	}

	if (list === null) {
		return undefined;
	}

	return nth(list.rest, position - 1);
}