const SinglyLinkedList = require("./SinglyLinkedList");
const Node = require("./LinkedNode");
const {
  reversList,
  display,
  findMiddleNode,
  haveCircle,
  getCircleIndex
} = require("./NodeListUtils");

const singlylist = new SinglyLinkedList();

singlylist.append(new Node("1"));
singlylist.append(new Node("2"));
singlylist.append(new Node("3"));
singlylist.append(new Node("4"));
singlylist.append(new Node("5"));
singlylist.append(new Node("6"));
singlylist.append(new Node("7"));
console.log(singlylist.display());
console.log("length:", singlylist.length());
// singlylist.revers();
// console.log("revers:", circleList.display());

console.log("Utils");
console.log("middle:", findMiddleNode(singlylist.first()).value);
console.log("revers:", display(reversList(singlylist.first())));

const circleList = new SinglyLinkedList();
circleList.append(new Node("1"));
circleList.append(new Node("1"));
circleList.append(new Node("2"));
const node3 = circleList.append(new Node("3"));
circleList.append(new Node("4"));
circleList.append(new Node("5"));
circleList.append(new Node("6")).next = node3;
console.log("isCircle", haveCircle(circleList.first()));
console.log("circleIndex", getCircleIndex(circleList.first()).value);
