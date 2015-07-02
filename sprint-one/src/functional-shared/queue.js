var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;
  extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.end] = value;
    this.end++;
    },

  dequeue: function() {
    var val = this.storage[this.start];
    delete this.storage[this.start];
    if(this.start < this.end){
      this.start++;
    }
    return val;
  },

  size: function(){
    return (this.end - this.start);

  }

};

var extend = function(obj, extension){
  for(var item in extension){
    obj[item] = extension[item];
  }
};