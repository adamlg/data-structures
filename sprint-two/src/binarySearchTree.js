var BinarySearchTree = function(value){
	var newBst = {};
	newBst = Object.create(bstMethods)
	var firstNode = {}
	firstNode.left = []
	firstNode.right = []
	firstNode.value = value
	newBst.storage = [firstNode]; 

	return newBst;
};



var bstMethods = {}

bstMethods.insert = function(value) {
	var newNode = BinarySearchTree(value)

	var search = function (node) {				
		if (value > node.value) {				//compare newnode value with firstnode value
			if (node.right.length) {			//look at the right		
				search(node.right[0])			//recurse on right node if it already exists
			}
			else node.right.push(newNode.storage[0])		//if right node doesn't exist, push newnode there				
		}
		else if (value < node.value) {			//look to the left
			if (node.left.length) {
				search(node.left[0])
			}
			else node.left.push(newNode.storage[0])
		}				
	}

	search(this.storage[0])


	//function we use for recursion

	//check if any nodes exist
	// if (!this.storage.length) {		//if no nodes exist, this will be the first node
	// 	this.storage.push(newNode)
	// 	return
	// }
	
	// var search = function(value) {		//function starts here
	// 	if (value < this.value) {
	// 		if (this.left.length === 0) {
	// 			this.left.push(newNode)
	// 			this.left.children.push(newNode)
	// 		} else {
	// 			search(this.left)
	// 		}
	// 	} else if (value > this.value) {
	// 		if (this.right.length === 0) {
	// 			this.right.push(newNode)
	// 			this.right.children.push(newNode)
	// 		} else {
	// 			search(this.right)
	// 		}
	// 	} else {
	// 		return "This value is already in the tree."
	// 	}
		
	// }

	// search(newBst.children)

	// }
	// //if nodes exist, check value against node value
	// //if value<existing, node, recurse this function on left node, else recurse on right node
	// //once there are no more left or right children, add value as left or right on final node

	// if (value > this.value && this.children.length !== 0) {
	// 	this.right = newNode
	// }
	// else this.left = newNode
}

bstMethods.contains = function(target) {

}

bstMethods.depthFirstLog = function(cb) {

}



/*
 * Complexity: What is the time complexity of the above functions?
 */