var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;					//size does not work, replaced with length
  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.length] = value;
	this.length++
};

stackMethods.pop = function() {
	this.length && this.length--;
	var res = this.storage[this.length];
	delete this.storage[this.length];
	return res;
};

stackMethods.size = function() {
	return this.length;
};





