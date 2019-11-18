function reversList(node) {
  let pre = null,
    current = node;
  while (current !== null) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}

// 利用龟兔赛跑算法
function haveCircle(node) {
  let slow = node,
    fast = node;
  while (fast !== null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}

// 找到环入口点
function getCircleIndex(node) {
  const head = node;
  let slow = node,
    fast = node;
  while (fast !== null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) break;
  }
  if (!fast || !fast.next) return null;
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// 巧妙运用快慢指针，快指针是慢指针的2倍速度，当快指针遍历完时，慢指针刚好处于中间节点
function findMiddleNode(node) {
  let slow = node,
    fast = node;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function mergeSortedList(node1, node2) {}

function display(node) {
  let rst = "{";
  let p = node;
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

module.exports = {
  display,
  reversList,
  findMiddleNode,
  haveCircle,
  getCircleIndex
};
