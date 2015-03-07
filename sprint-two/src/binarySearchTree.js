var BinarySearchTree = function(value){
	var newBst = {};
	newBst = Object.create(bstMethods)
	newBst.left = {}
	newBst.right = {}
	newBst.value = value
	return newBst;
};



var bstMethods = {}

bstMethods.insert = function(value) {
	var newNode = BinarySearchTree(value)

	var search = function (node) {				
		if (value > node.value) {						//compare newnode value with firstnode value		
			if (node.right.hasOwnProperty("value")) {	//look at the right		
				search(node.right)						//recurse on right node if it already exists
			}
			else node.right = newNode					//if right node doesn't exist, push newnode there				
		}
		else if (value < node.value) {					//look to the left
			if (node.left.hasOwnProperty("value")) {
				search(node.left)
			}
			else node.left = newNode
		}				
	}
	search(this)
}

bstMethods.contains = function(target) {
	var boo = false
	var search = function(node) {
		if (target === node.value) {
			return boo = true
		}
		else if (target > node.value) {					//look to right
			search(node.right)
		}
		else if (target < node.value) {					//look to left
			search(node.left)
		}
	}
	search(this)
	return boo
}

bstMethods.depthFirstLog = function(cb) {
	var cbSearch = function(node) {
		cb.call(null, node.value)
		
		if (node.left.value) {
			cbSearch(node.left)
		}
		if (node.right.value) {
			cbSearch(node.right)
		}
	}
	return cbSearch(this)
}



/*
 * Complexity: What is the time complexity of the above functions?

	insert: O(log(n))
	contains: O(log(n))
	depthFirstLog: O(log(n))

 */