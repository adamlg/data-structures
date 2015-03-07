var BloomFilter = function(){
  this._limit = 18;
  this._storage = LimitedArray(this._limit);
  this.count = 0
};

BloomFilter.prototype.insert = function(k, v){
	var i = getIndexBelowMaxForKey(k, this._limit);
	  //we are only supposed to set the value to one, not insert a new value/array

	  /*if (!this._storage.get(i)) {
	  	this._storage.set(i, [k,v]) 
	  }        							
	  else {
	  	this._storage.get(i).push(k, v) 
	  }*/

	var j = getSecondIndexBelowMaxForKey(k, this._limit);
	  /*if (!this._storage.get(j)) {
	  	this._storage.set(j, [k,v])
	  }        							
	  else {
	  	this._storage.get(j).push(k, v) 
	  }*/
	  this._storage[i] = 1
	  this._storage[j] = 1

	this.count++    
};

BloomFilter.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var keysandvalues = this._storage.get(i)
  var x = null
  for (var j = 0; j < keysandvalues.length; j+=2) {
  	if (keysandvalues[j] === k) {
  		x = keysandvalues[j+1]
  	} //what if k is not in the hash table?
  }
  
  var p = getIndexBelowMaxForKey(k, this._limit);
  var keysandvalues = this._storage.get(p)
  var y = null
  for (var q = 0; q < keysandvalues.length; q+=2) {
  	if (keysandvalues[q] === k) {
  		y = keysandvalues[q+1]
  	} //what if k is not in the hash table?
  }

  var ex = -2*this.count/8
  var fx = 1-Math.exp(ex)
  var probability = fx*fx
  var demo = fx^2
  console.log(probability)
  return x&&y

};

BloomFilter.prototype.remove = function(k) {
	//does not exist
}
