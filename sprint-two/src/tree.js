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
	var boo = false
	var search = function(node) {
		for (var i = 0; i < node.children.length; i++) {
			if (node.children[i].value === target) {
				boo = true
			} 
			else {
				if (node.children[i]) {
					search(node.children[i])
				}
			}
		}
	}
	search(this)
	return boo
}

/*
 * Complexity: What is the time complexity of the above functions?

	addChild: O(1)
	contains: O(N) 

 */
