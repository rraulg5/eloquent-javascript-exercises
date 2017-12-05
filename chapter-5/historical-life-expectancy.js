function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byCentury = {};

ancestry.forEach(function (person) {
	var century = Math.ceil(person.died / 100);

	if (century in byCentury) {
		byCentury[century].push(person);
	} else {
		var auxArray = [];
		auxArray.push(person);
		byCentury[century] = auxArray;
	}
});

for (var century in byCentury) {
	var centuryAges = byCentury[century].map(function (person) {
		return person.died - person.born;
	});
	console.log(century + ': ' + average(centuryAges));
}