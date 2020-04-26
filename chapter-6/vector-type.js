function Vector (x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function (v) {
	return new Vector(this.x + v.x, this.y + v.y);
};

Vector.prototype.minus = function (v) {
	return new Vector(this.x - v.x, this.y - v.y);
};

Object.defineProperty (Vector.prototype, "length", {
	get: function () {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
});