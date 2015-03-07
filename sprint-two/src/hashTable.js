var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
  	this._storage.set(i, [k,v])
  }        							
  else {
  	this._storage.get(i).push(k, v) //fix?
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keysandvalues = this._storage.get(i)
  var x = null
  for (var j = 0; j < keysandvalues.length; j+=2) {
  	if (keysandvalues[j] === k) {
  		x = keysandvalues[j+1]
  	} //what if k is not in the hash table?
  }
  return x
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keysandvalues = this._storage.get(i)
    for (var j = 0; j < keysandvalues.length; j+=2) {
		if (keysandvalues[j] === k) {
   		 keysandvalues[j+1] = null
		}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?

  insert: O(1)
  retrieve: O(N)
  remove: O(N)

 */
