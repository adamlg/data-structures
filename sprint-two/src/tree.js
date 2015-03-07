var Tree = function(value){
  var newTree = {};
  newTree = Object.create(treeMethods)
  newTree.value = value;
  newTree.children = []; 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var newNode = Tree(value)
	this.children.push(newNode)
};

treeMethods.contains = function(target) {
	if (this.value === target) {
		return true
	} else if (this.children.length) {
		return this.children.some(function(item) {return item.contains(target)})
	} else {
		return false
	}
}

/*
 * Complexity: What is the time complexity of the above functions?

	addChild: O(1)
	contains: O(N) 

 */
