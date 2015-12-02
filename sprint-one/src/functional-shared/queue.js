var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // define a var to store our Queue's methods
  var someInstanceOfQueue = { 
    storage:  {},
    totalElemsInQueue: 0 
  };
  // add our shared methods from queueMethods with extend;
  extend(someInstanceOfQueue, queueMethods);
  // return the instance with its brand new awesome methods;
  return someInstanceOfQueue;
};

// adds methods from from obj to to obj.
var extend = function(to, from){
  for (var key in from){
    to[key]=from[key];
  }
  console.log(to);
};

// define an object to hold our shared methods that will be created below.
var queueMethods = {};

// add enqueue method.
queueMethods.enqueue = function(val) {
  // store the val in our instances queue at the end.
  this.storage[this.totalElemsInQueue] = val;
  // increment the totalElementsinQueue.
  this.totalElemsInQueue++;
};
// remove an element from the front (first position) of the queue. 
queueMethods.dequeue = function (){
  // check that there is an element in the queue.
  if (this.totalElemsInQueue > 0){
    // store the value from the front of the queue to be returned.
    var returnValue = this.storage[0];
    // reduce the total number of elements in the queue.
    this.totalElemsInQueue--;
    // move all the elements in the queue up one position.
    for (var i=0; i<this.totalElemsInQueue; i++){
      this.storage[i] = this.storage[i+1];
    }
    // clear out value at the position that was the last position in the queue.
    this.storage[this.totalElemsInQueue] = undefined;
    // return the value.
    return returnValue;
  }
};

queueMethods.size = function (){
  // returing the total elements in the queue!!!
  return this.totalElemsInQueue; 
};