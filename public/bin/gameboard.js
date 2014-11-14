var BLACK = 0x000000

function initializeGameBoard() {

	var gameBoard = [];
	for(i = 0; i < HEIGHT; i++) {
		gameBoard.push([]);
	}

	/* Initialize the Game Array */
	for(var w = 0; w < HEIGHT; w++) {
		for(var j = 0; j < WIDTH; j++) {
				gameBoard[w].push(0);
		}
	}

	return gameBoard;
}

function setWalls(levelMaps) {

	/* Open the JSON file defining the walls */
	//var levelMaps = JSON.parse(Levels);
	alert(levelMaps.Walls[0].start[0][0]);
	//alert(levelMaps);

	/* Add the walls to the graphics image */
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(5, BLACK);
	for(var i = 0; i < levelMaps.Walls[0].start.length; i++) {
		graphics.beginFill(0xFF0000);
		graphics.moveTo(levelMaps.Walls[0].start[i][0], levelMaps.Walls[0].start[i][1]);
		graphics.lineTo(levelMaps.Walls[0].end[i][0], levelMaps.Walls[0].end[i][1]);
		graphics.endFill();

		/* Now add the wall to the gameBoard object for collision detection */
		var slope = (levelMaps.Walls[0].end[i][1] - levelMaps.Walls[0].start[i][1])/(levelMaps.Walls[0].end[i][0] - levelMaps.Walls[0].start[i][0]);
		var y = levelMaps.Walls[0].start[i][1];
		var x = levelMaps.Walls[0].start[i][0];
		var y_int = (y - (x * slope));
		while(x < levelMaps.Walls[0].end[i][0] || y < levelMaps.Walls[0].end[i][1]) {
			gameBoard[x][y] = 1
			if(Math.abs(slope) == Number.POSITIVE_INFINITY) {
				y += 1;
			}
			else if(slope == 0) {
				x += 1;
			}
			else if(slope != 0) {
				x += 1;
				y = (x*slope) + y_int;
			}
		}
	}

	/* Draw a rectangle test */
	//graphics.beginFill(0x00FF00);
	//graphics.moveTo(0,0);
	//graphics.lineTo(-50,100);
	//graphics.lineTo(50,100);
	//graphics.endFill();

	return graphics;
}

function setBackground() {

}
