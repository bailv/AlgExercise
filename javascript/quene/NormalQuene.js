class NormalQuene {
  constructor(size) {
    this.quene = new Array(size);
    this.head = 0;
    this.tail = 0;
  }

  put(value) {
    if (this.tail === this.quene.length) {
      if (this.head > 0 && this.head !== this.tail) {
        for (let i = this.head; i < this.tail; i++) {
          this.quene[i - this.head] = this.quene[i];
        }
        this.tail = this.quene.length - this.head;
        this.head = 0;
      } else return false;
    }
    this.quene[this.tail++] = value;
    return true;
  }

  pop() {
    if (this.head === this.tail) return null;
    return this.quene[this.head++];
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

module.exports = NormalQuene;
