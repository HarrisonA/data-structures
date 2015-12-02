var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    stackTotal: 0
  };
  extend(someInstance,stackMethods);
  return someInstance;
};

var extend = function(to, from){
  for (var key in from){
    to[key]=from[key];
  }
  console.log(to);
};

var stackMethods = {};
stackMethods.pop = function () {
  if ( this.stackTotal > 0 ) {
    this.stackTotal--;
    var returnVal = this.storage[this.stackTotal];
    this.storage[this.stackTotal] = undefined;
    return returnVal;
  }
};
stackMethods.push = function (val) {
  this.storage[this.stackTotal] = val;
  this.stackTotal++
};


stackMethods.size = function () {
  return this.stackTotal;
};
