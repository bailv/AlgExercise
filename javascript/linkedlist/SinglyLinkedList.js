// import LinkNode from './LinkedNode';
const LinkNode = require("./LinkedNode");

class SinglyLinkedList {
  constructor() {
    //链表带头——不存储具体数据
    this.head = new LinkNode("head");
  }

  first() {
    return this.head.next;
  }

  // 链尾追加
  append(node) {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
  }

  //逆序插入
  insert(node) {
    node.next = this.head.next;
    this.head.next = node;
  }

  // 指定节点插入
  insertTo(newNode, node) {
    const currentNode = this.findByValue(node);
    if (!currentNode) {
      return false;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return true;
  }

  deleteByNode(node) {
    if (node === null || this.isEmpty()) {
      return;
    }

    if (this.head.next === node) {
      this.head.next = null;
      return;
    }

    let tmpNode = this.head.next;
    while (tmpNode !== null && tmpNode.next !== node) {
      tmpNode = tmpNode.next;
    }
    if (tmpNode === null) {
      return;
    }
    tmpNode.next = tmpNode.next.next;
  }

  // 查找前一个
  findPrev(node) {}

  findByValue(value) {
    let p = this.head.next;
    while (p !== null && p.value !== value) {
      p = p.next;
    }

    return p === null ? null : p;
  }

  findByIndex(index) {
    let pos = 0;
    let p = this.head.next;
    while (p !== null && pos !== index) {
      p = p.next;
      ++pos;
    }

    return p === null ? -1 : pos;
  }

  isEmpty() {
    return this.head.next === null;
  }

  //链表反转
  revers() {
    if (this.isEmpty()) return;
    let prev = new LinkNode("tmp");
    let current = this.head.next;
    while (current !== null) {
      const next = current.next;
      current.next = prev.next;
      prev.next = current;
      current = next;
    }
    this.head = prev;
  }

  // 两个有序链表合并
  merageSortedList(list1, list2) {}

  length() {
    let len = 0;
    let p = this.head.next;
    while (p !== null) {
      len += 1;
      p = p.next;
    }
    return len;
  }

  display() {
    if (this.isEmpty()) {
      return "";
    }

    let rst = "{";
    let p = this.head.next;
    while (p !== null) {
      if (p.next === null) {
        rst += p.value + "}";
      } else {
        rst += p.value + ",";
      }
      p = p.next;
    }
    return rst;
  }
}

// export default SinglyLinkedList;
module.exports = SinglyLinkedList;
