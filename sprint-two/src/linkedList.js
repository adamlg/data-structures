var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = new Node(value) //create new node with node.value, but node.next is null
    if (this.head === null) {
      this[value] = newNode
      this.head = newNode            //if there is no existing head, the node added is the head
      this.tail = newNode
    } 
    else {
      this[value] = newNode
      var oldTail = this[this.tail.value]    //find the object that used to be the tail
      oldTail.next = value                  //change the old tail's next value to point to our new tail
      this.tail = newNode             //redefine list.tail
    }
  };

  list.removeHead = function(){
    var removed = this.head
    console.log(removed)
    this.head = this[removed.next]
    delete this[removed.value]
    return removed.value
  };

  list.contains = function(target){
    if (this[target]) {
      return true
    } 
    else return false
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
