var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //run getIndex, returns an index
  //check whether the key === key @ index location
  //if it is, overwrite 
  //if it isn't, find a new index to store
  var i = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(i);
  if((storage === undefined) || (k in storage)){
    var obj = {};
    obj[k] = v;
    this._storage.set(i, obj);

  }
  else{
    var obj = {};
    obj[k] = v;
    this._storage.set(i+1, obj);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(i);
  if(k in obj){
    return obj[k];
  }
  else{
    return this._storage.get(i+1)[k];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var obj = {};
  obj[k] = null;
  delete this._storage.set(i, obj);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

