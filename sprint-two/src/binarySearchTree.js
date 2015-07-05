var BinarySearchTree = function(value){

  //Create object with binarySearchTreeMethods
  var tree = Object.create(binarySearchTreeMethods);
  //define value of BinarySearchTree
  tree.value = value;
  //define left: lower property and a right: higher property
  tree.left = null;
  tree.right = null;
  //return object
  return tree;
};

var binarySearchTreeMethods = {
  insert: function(nextVal, node){
    if (node === undefined){
      node = this;
    }
    if (nextVal > node.value){
      if (node.right === null){
        node.right = BinarySearchTree(nextVal);  
      }
      else{
        //recursive insert on right node
        this.insert(nextVal, node.right);

      }
    }
    else {
      if (nextVal < node.value){
        if (node.left === null){
          node.left = BinarySearchTree(nextVal);
        }
        else {
          //recursive insert on left
          this.insert(nextVal, node.left);
        }
      }
    }
  },
  contains: function(checkVal, node){
    if (node === undefined){
      node = this;
    }
    if (checkVal > node.value){
      //run contains for the right node 
      if (node.right === null){
        return false;
      }
      return this.contains(checkVal, node.right);
    }
    if (checkVal < node.value){
      //run contains for left node
      if (node.left === null){
        return false;
      }
      return this.contains(checkVal, node.left)
    }
    if (checkVal === node.value){
      return true;
    }
    else {
      return false;
    }
  },
  depthFirstLog: function(func, node){
    node = node || this;
    func(node.value);

    if(node.right){
      this.depthFirstLog(func, node.right);
    }
    if(node.left){
      this.depthFirstLog(func, node.left);
    }
  }
};
//binarySearchTreeMethods
  //insert function defines left or right node of BinarySearchTree
    //decide wheter to put it in left or right
  //contains function to search for stuff
  //depthFirstLaw function that executes a function on every value in the tree


/*
 * Complexity: What is the time complexity of the above functions?
    O(log(n))
      -for each element that you add, you have to search through a fraction of 1 element 
        -for example: add 10 elements, only search through 4 to return match
 */
