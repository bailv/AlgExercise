/**
 * 基于数组实现的栈
 *
 * Author: clanaid
 */

class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.count = 0;
  }

  pop() {
    if (this.count > 0) return this.stack[--this.count];
    return false;
  }

  put(value) {
    if (this.count === this.stack.length) {
      return false;
    }
    this.stack[this.count++] = value;
    return true;
  }

  display() {
    let rst = "[";
    for (let v of this.stack) {
      rst += v + ", ";
    }
    rst += "]";
    return rst;
  }
}

module.exports = Stack;
