var Stack = function() {
	this.line = {}
	this.span = 0;
};

Stack.prototype.push = function(val) {
	this.line[this.span] = val
	this.span++
}

Stack.prototype.pop = function() {
	this.span && this.span--
	var removed = this.line[this.span]
	delete this.line[this.span]
	return removed
}

Stack.prototype.size = function() {
	return this.span
}



