var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0, position = 0


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size+position] = value
    size++
  };

  someInstance.dequeue = function(){
    size && size--
    var temp = storage[position]
    delete storage[position]
    position++
    return temp
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
