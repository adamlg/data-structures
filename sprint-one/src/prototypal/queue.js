var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function() {
	var newQueue = Object.create(queueMethods)
	newQueue.nextInLine = 0
	newQueue.endOfLine = 0
	newQueue.line = {}

	return newQueue
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
	this.line[this.endOfLine] = val
	this.endOfLine++
}

queueMethods.dequeue = function() {
	var removed = this.line[this.nextInLine]
	delete this.line[this.nextInLine]
	if (this.nextInLine < this.endOfLine) {
		this.nextInLine++
	}
	return removed
}

queueMethods.size = function() {
	return this.endOfLine-this.nextInLine
}


