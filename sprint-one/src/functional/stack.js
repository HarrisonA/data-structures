var Stack = function(){
  var someInstance = {};
  

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if (size > 0){
      size--;
      var returnValue = storage[size];
      storage[size] = undefined;
      return returnValue;
    }

  };
  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
