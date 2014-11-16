var GameBoard = function() {

	this.board = [];
	for(i = 0; i < WIDTH; i++) {
		this.board.push([]);
	}

	/* Initialize the Game Array */
	for(var w = 0; w < WIDTH; w++) {
		for(var j = 0; j < HEIGHT; j++) {
				this.board[w].push(0);
		}
	}
};

GameBoard.prototype.setWalls = function(levelMaps) {

	/* Add the walls to the graphics image */
	var graphics = new PIXI.Graphics();
	graphics.lineStyle(5, 0x000000);
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
			this.board[x][y] = 1
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

	return graphics;
};

GameBoard.prototype.setCameras = function(levelMaps) {


	/* Get the location from the levels file */
	for(var i = 0; i < levelMaps.Cameras[0].position.length; i++) {
		/* Load the camera image */
		var camera = new Camera(PIXI.Sprite.fromImage("/images/camera.png"));
		cameraList.push(camera);
		camera.sprite.position.x = levelMaps.Cameras[0].position[i][0];
		camera.sprite.position.y = levelMaps.Cameras[0].position[i][1];
		gameContainer.addChild(camera.sprite);
	}
};

GameBoard.prototype.detectCollision = function(x, y, width, height) {

	for(var i = x; i < x + width; i++) {
		for(var j = y; j < y + height; j++) {

			/* If we hit anything but an empty space */
			if(this.board[i][j] != 0) {
				return true;
			}
		}
	}
	return false;
};
