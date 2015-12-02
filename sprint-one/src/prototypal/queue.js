var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var returnQueue = Object.create(queueMethods);
  returnQueue.storage = {};
  returnQueue.totalElemsInQueue = 0;
  return returnQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.totalElemsInQueue;
};

queueMethods.enqueue = function (val) {
  this.storage[this.totalElemsInQueue] = val;
  this.totalElemsInQueue++;
};

queueMethods.dequeue = function () {
  if ( this.totalElemsInQueue > 0 ) {
    // take the first thing zero-ith thing
    var returnElem = this.storage[0];
    // loop and shift
    for(var i = 0; i < this.totalElemsInQueue; i++) {
      this.storage[i] = this.storage[i+1];
    }
    // decrement
    this.totalElemsInQueue--;
    // clear 
    this.storage[this.totalElemsInQueue] = undefined;
    return returnElem;
  }
};



//  at Context.<anonymous> (file:///Users/student/Desktop/2015-11-data-structures/sprint-one/spec/specs.js:114:15)



   




