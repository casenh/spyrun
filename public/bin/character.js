var Character = function(characterSprite) {

	this.sprite = characterSprite;
	this.sprite.buttonMode = true;
	this.sprite.interactive = true;
};

Character.prototype.updateSprite = function(characterSprite) {
	this.sprite = characterSprite;
};

Character.prototype.setPosition = function(x, y) {
		this.sprite.position.x = x;
		this.sprite.position.y = y;
};

Character.prototype.translation = function(xAmount, yAmount) {

	/* Get the rectangle object that defines our coordinates */
	var bounds = this.sprite.getLocalBounds();

	/* Let the Game Board detect the entire rectangle for collision */
	var collisionDetected = gameBoard.detectCollision(this.sprite.position.x + xAmount, this.sprite.position.y + yAmount, bounds.width, bounds.height);

	/* Only move if no collision was detected */
	if(!collisionDetected) {
		this.setPosition(this.sprite.position.x + xAmount, this.sprite.position.y + yAmount);
	}
};

Character.prototype.getPosition_x = function() {
	return this.sprite.position.x;
};

Character.prototype.getPosition_y = function() {
	return this.sprite.position.y;
};

Character.prototype.updatePosition = function() {

	if(key.isDown(key.LEFT)) this.translation(-2,0);
	if(key.isDown(key.UP)) this.translation(0,-2);
	if(key.isDown(key.DOWN)) this.translation(0,2);
	if(key.isDown(key.RIGHT)) this.translation(2,0);

};
