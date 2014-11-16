var Key = function() {

	this.pressed = new Object();
	this.LEFT = 37; 
	this.UP = 38;
	this.RIGHT = 39;
	this.DOWN = 40;
};

Key.prototype.isDown = function(keyCode) {
	return this.pressed[keyCode];
};

Key.prototype.onKeyDown = function(keyCode) {
	this.pressed[keyCode] = true;
};

Key.prototype.onKeyUp = function(keyCode) {
	delete this.pressed[keyCode];
};
