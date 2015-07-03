

var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node){
  if (node === undefined){
    node = this.children;
  }
  for (var i = 0; i < node.length; i++){
    //if this.children[i].children.length > 0
    //check those
    if (node[i].value === target){
      return true;
    }
    if (node[i].children.length > 0){
      if (treeMethods.contains(target, node[i].children) === true){
        return true;
      }
    }
  }
  return false;
};

var extend = function(obj, extension){
  for (var item in extension){
    obj[item] = extension[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
