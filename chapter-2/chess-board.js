var size = 8;
var chessBoard = '';

for (var i = 0; i < size; i++) {
	for (var j = 0; j < size; j++) {
		
		if ((i - j) % 2 == 0) {
			chessBoard += ' ';
		} else {
			chessBoard += '#';
		}
		//chessBoard += (i - j) % 2 == 0) ? ' ' : '#'; //Alternative option using the ternary operator
	}
	chessBoard += '\n';
}

console.log(chessBoard);