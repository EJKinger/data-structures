var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[i] = value;
  };

  someInstance.dequeue = function(){
  };

  someInstance.size = function(){
    if(i === 0){
      return 0;
    }

  };

  return someInstance;
};
