function countBs (string) {
	return countChar(string, 'B');
}

function countChar (string, c) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === c) {
			counter++;
		}
	}
	return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));