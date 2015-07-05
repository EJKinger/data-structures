var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null){
      list.head = Node(value);
      list.tail = list.head;
    } 
    else {
      var newTail = Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function(){
    var val = list.head.value;
    list.head = list.head.next;
    return val;
  };

  list.contains = function(target, node){
    if(node === undefined){
      node = list.head;
    }

    if(node.value === target){
      return true;
    }

    if(node.next !== null){
      return list.contains(target, node.next);
    }
    return false;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail O(1)
removeHead O(1)
contains O(n)

 */
