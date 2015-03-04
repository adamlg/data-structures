var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.length = 0;
  newQueue.position = 0;					
  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.length+this.position] = value
	this.length++
}

queueMethods.dequeue = function() {
	this.length && this.length--
	var temp = this.storage[this.position]
	delete this.storage[this.position]
	this.position++
	return temp
}

queueMethods.size = function() {
	return this.length
}




