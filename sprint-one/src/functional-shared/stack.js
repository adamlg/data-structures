var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.size = 0;
  extend(newStack, Stack.stackMethods);
};

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var stackMethods = {};

Stack.stackMethods.push = function(value) {
	this.storage[this.size] = value;
	this.size++
};

Stack.stackMethods.pop = function() {
	this.size && this.size--;
	var res = this.storage[this.size];
	delete this.storage[this.size];
	return res;
};

Stack.stackMethods.size = function() {
	return this.size;
}





