var Camera = function(cameraSprite) {

	this.sprite = cameraSprite;
	this.sprite.buttonMode = true;
	this.sprite.interactive = true;
	this.rotationNum = 7;
	this.rotationDirection = true;
	this.rotationTicks = 14;
	this.rotationAmount = 0.1;
	this.sprite.pivot.y =  (this.sprite.height/2);
};

Camera.prototype.updateSprite = function(characterSprite) {
	this.sprite = characterSprite;
};

Camera.prototype.setPosition = function(x, y) {
		this.sprite.position.x = x;
		this.sprite.position.y = y;
};

Camera.prototype.translation = function(xAmount, yAmount) {

	/* Get the rectangle object that defines our coordinates */
	var bounds = this.sprite.getLocalBounds();

	/* Let the Game Board detect the entire rectangle for collision */
	var collisionDetected = gameBoard.detectCollision(this.sprite.position.x + xAmount, this.sprite.position.y + yAmount, bounds.width, bounds.height);

	/* Only move if no collision was detected */
	if(!collisionDetected) {
		this.setPosition(this.sprite.position.x + xAmount, this.sprite.position.y + yAmount);
	}
};

Camera.prototype.getPosition_x = function() {
	return this.sprite.position.x;
};

Camera.prototype.getPosition_y = function() {
	return this.sprite.position.y;
};

Camera.prototype.updatePosition = function() {

	this.sprite.rotation += this.rotationAmount;
	this.rotationNum += 1;
	if(this.rotationNum > this.rotationTicks) {
		this.rotationAmount = -this.rotationAmount;
		this.rotationNum = 0;
	}
};
