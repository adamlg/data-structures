

var Graph = function(){
	var obj = Object.create(Graph.prototype)
	obj.nodes = {}
	return obj
};

Graph.prototype.addNode = function(node){
	this.nodes[node] = {"value":node,"edges":[]}
};

Graph.prototype.contains = function(node){
	if (this.nodes[node]) {
		return true
	}
	else return false
};

Graph.prototype.removeNode = function(node){
	delete this.nodes[node]
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var check = this.nodes[fromNode]
	var correct = false
	for (var i = 0; i < check.edges.length; i++) {
		if (check.edges[i] === toNode) {
			correct = true
		}
	}
	return correct
};

Graph.prototype.addEdge = function(fromNode, toNode){
	var from = this.nodes[fromNode]
	var to = this.nodes[toNode]
	from.edges.push(toNode)
	to.edges.push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	var from = this.nodes[fromNode]
	var to = this.nodes[toNode]

	for (var i = 0; i < from.edges.length; i++) {
		if(from.edges[i] === toNode) {
			delete from.edges[i]
		}
	}
	for (var j = 0; j < to.edges.length; j++) {
		if(to.edges[j] === fromNode) {
			delete to.edges[j]
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	var nodes = this.nodes
	for (var i in nodes) {
		cb.call(null,nodes[i].value)
	}
};

/*
 * Complexity: What is the time complexity of the above functions?

	removeNode: O(1)
	hasEdge: O(N)
	addEdge: O(1)
	removeEdge: O(N)
	forEachNode: O(N)

 */



