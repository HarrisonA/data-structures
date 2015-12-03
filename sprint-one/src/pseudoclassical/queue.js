var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  //make storage
  this.storage = {};
  //make elemsinQueue
  this.elemsinQueue = 0;

};

Queue.prototype.size = function () {
  return this.elemsinQueue;
};
Queue.prototype.enqueue = function (val) {
  this.storage[this.elemsinQueue] = val;
  this.elemsinQueue++;
};

Queue.prototype.dequeue = function() {
  if (this.elemsinQueue > 0) {
    var returnVal = this.storage[0];
    for ( var i = 0; i < this.elemsinQueue; i++ ) {
      this.storage[i] = this.storage[i+1];
    };
    this.elemsinQueue--;
    this.storage[this.elemsinQueue] = undefined;
    return returnVal;
  }
};


