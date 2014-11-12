function test2() {
	alert("Testing");
}

function initializeGameBoard() {

	var gameBoard = [];
	for(i = 0; i < HEIGHT; i++) {
		gameBoard.push([]);
	}

	/* Initialize the Game Array */
	for(var w = 0; w < HEIGHT; w++) {
		for(var j = 0; j < WIDTH; j++) {
			if(j == 100)
				gameBoard[w].push(1);
			else
				gameBoard[w].push(0);
		}
	}

	return gameBoard;
}

function setBackground() {



}
