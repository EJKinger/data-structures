 

var Graph = function(){
  //returns obj automatically
  this.storage = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  this.storage.push(node);
};

Graph.prototype.contains = function(node){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i] === node){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for(var i = 0; i < this.storage.length; i++){
    if(this.storage[i] === node){
      delete this.storage[i];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    if((this.edges[i][0] === fromNode) && (this.edges[i][1] === toNode)){
      return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  for(var i = 0; i < this.edges.length; i++){
    if((this.edges[i][0] === fromNode) && (this.edges[i][1] === toNode)){
     this.edges[i] = [];
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  this.storage.forEach(function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



