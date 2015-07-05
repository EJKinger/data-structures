var Set = function(){
  var set = Object.create(setPrototype);
  set.counter = 0;
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage[item] = this.counter;
  this.counter++;
};

setPrototype.contains = function(item){
  if (item in this.storage){
    return true;
  }
  else {
    return false;
  }
};

setPrototype.remove = function(item){
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
    add is O(1)
    contains is O(1)
    remove is O(1)
 */
