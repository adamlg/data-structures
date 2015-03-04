var Queue = function() {
	this.line = {}
	this.nextInLine = 0
	this.endOfLine = 0
};

Queue.prototype.enqueue = function(val) {
	this.line[this.endOfLine] = val
	this.endOfLine++
}

Queue.prototype.dequeue = function() {
	var removed = this.line[this.nextInLine]
	delete this.line[this.nextInLine]
	if(this.nextInLine < this.endOfLine) {
		this.nextInLine++
	}
	return removed
}

Queue.prototype.size = function() {
	return this.endOfLine - this.nextInLine
}

