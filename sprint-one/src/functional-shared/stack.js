var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  extend(instance, stackMethods);
  instance.counter = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {

  push: function(value){
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function(){
    if(this.counter > 0){
      this.counter--;
    }
    var val = this.storage[this.counter];
    delete this.storage[this.counter];
    return val;

  },

  size: function(){
    return this.counter;

  }

};

var extend = function(obj, extensions){
  for(var item in extensions){
    obj[item] = extensions[item];
  }

}


