var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.total = 0;

};


Stack.prototype.size = function(){
  return this.total;
};

Stack.prototype.push = function(val){
 this.storage[this.total] = val;
 this.total++;
};

Stack.prototype.pop = function(){
 if (this.total>0){
  this.total--;
  var returnVal = this.storage[this.total];
  this.storage[this.total] = undefined;
  return returnVal;
 }
};