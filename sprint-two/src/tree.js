var Tree = function(value){
  var newTree = {};
  newTree = Object.create(treeMethods)
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

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
				console.log(node.children[i])
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

/*	if (this.value === target) {
		return true
	} 
	else return false
	// else {
	// 	if (this.hasChildNodes) {
	// 		return this.children.forEach(this.contains(target))
	// 	} else {
	// 		return false
	// 	}
	// }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
