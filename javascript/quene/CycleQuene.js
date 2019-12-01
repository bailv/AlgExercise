class CycleQuene {
  constructor(size) {
    this.quene = new Array(size);
    this.head = 0;
    this.tail = 0;
    this.n = size;
  }

  put(value) {
    if (this.head === (this.tail + 1) % this.n) {
      console.log(`quene 满了 value: ${value}`);
      return false;
    }
    this.quene[this.tail++] = value;
    this.tail %= this.n;
    return true;
  }

  pop() {
    if (this.tail === this.head) {
      return false;
    }
    const rst = this.quene[this.head++];
    this.head %= this.n;
    return rst;
  }

  display() {
    let rst = "[";
    for (let v of this.quene) {
      rst += v + ", ";
    }
    rst += "]";
    console.log(rst);
    console.log(`head: ${this.head}  tail: ${this.tail}`);
  }
}

module.exports = CycleQuene;
