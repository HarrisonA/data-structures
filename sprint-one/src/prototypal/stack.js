var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var returnStack = Object.create(stackMethods);
  returnStack.storage = {};
  returnStack.elemsInStack = 0;
  return returnStack;
};
// create shared method container
var stackMethods = {};
// returns stack instance size.
stackMethods.size = function () {
  return this.elemsInStack;
};
// adds element to top of the stack.
stackMethods.push = function (val) {
  this.storage[this.elemsInStack] = val;
  this.elemsInStack++;
};

// returns top element in stack.
// also clears that element from memory.

stackMethods.pop = function () {
  if (this.elemsInStack > 0) {
    this.elemsInStack--;
    var returnElem = this.storage[this.elemsInStack];
    this.storage[this.elemsInStack] = undefined;
    return returnElem;
  }
}


