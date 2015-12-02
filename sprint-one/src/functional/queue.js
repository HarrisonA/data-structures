// fast but terrible on mem over time.  For repeated use.
var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // size is the actual amount of elements in the queue;
  var size = 0;
  // define a var to store the position of the end of the queue.
  var lastElementIndex = 0;
  // define a var to store the position of the front of the queue.
  var firstElementIndex = 0;
  // Implement the methods below
  // adds a value to the front of the queue.
  someInstance.enqueue = function(value){
    // save the value to storage at the last index
    storage[lastElementIndex] = value;
    // increment the end of the que
    lastElementIndex++;
    // increment the size
    size++;
  };

  someInstance.dequeue = function(){
    // check if there are elements to dequeue by checking if the lastElementIndex higher than the firstElementIndex. Which means we've queued more items than we've dequeued
    if (lastElementIndex > firstElementIndex) {
      // save the value at the front of the queue.
      var returnValue = storage[firstElementIndex];
      // remove the value from the front of the queue.
      storage[firstElementIndex] = undefined;
      // increment the firstElement var to the next element in the queue. 
      firstElementIndex ++;
      // decrement the size;
      size--;
      // return the dequeued value;
      return returnValue;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

// alternate implementaion with a for loop.  optimized for longevity and mem usage

var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // size is the actual amount of elements in the queue;
  var size = 0;
  
  
  someInstance.enqueue = function(value){
    // save the value to storage at the last index
    storage[size] = value;
    // increment the size;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0) {

      var returnValue = storage[0];
      size --;
      for (var i = 0; i < size; i++) {
        storage[i] = storage[i+1];
      }
      storage[size] = undefined;
        return returnValue;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};



