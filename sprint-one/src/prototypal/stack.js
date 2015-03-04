var Stack = function() {
	var newStack = Object.create(stackMethods)
	newStack.length = 0
	newStack.line = {}

	return newStack
};

var stackMethods = {};

stackMethods.push = function(val) {
	this.line[this.length] = val
	this.length++
}

stackMethods.pop = function() {
	this.length && this.length--
	var removed = this.line[this.length]
	delete this.line[this.length]
	return removed
}

stackMethods.size = function() {
	return this.length
}
