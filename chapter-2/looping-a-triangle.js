var hashtag = '#';
var size = 7;

for (var i = 1; i <= size; i++) {
	var row = '';
	while (row.length < i) {
		row += hashtag
	}
	console.log(row);
}