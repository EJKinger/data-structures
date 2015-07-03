var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;
  
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    var val = storage[start];
    delete storage[start];
    if(start < end){
      start++;
    }
    return val;
  };

  someInstance.size = function(){
    return end - start;
  };

  return someInstance;
};
