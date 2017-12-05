function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function motherChildDifferenceAge (person) {
	if (byName[person.mother] === undefined) {
		return 0;
	}
	return person.born - byName[person.mother].born;
}

function removeZeros (element) {
	return element > 0;
}

console.log(average(ancestry.map(motherChildDifferenceAge).filter(removeZeros)));