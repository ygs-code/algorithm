/*
 * @Author: your name
 * @Date: 2021-10-15 15:32:56
 * @LastEditTime: 2021-10-15 16:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/链表/循环链表.js
 */
// 节点
function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  // 创建头节点
  this.head = new Node("head");
  // 循环链表的关键信息
  this.head.next = this.head;
}

// 链表类
LinkedList.prototype = {
  // 插入节点方法
  insert(
    currentElement, // 当前元素
    newElement //新的元素
  ) {
    let currentNode = this.find(currentElement);
    let newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  },
  find(element) {
    let currentNode = this.head;
    do {
      if (currentNode.element == element) {
        break;
      }
      currentNode = currentNode.next;
    } while (currentNode);
    return currentNode;
  },
  findPrev(element) {
    let currentNode = this.head;
    do {
      if (currentNode.next.element == element) {
        break;
      }
      currentNode = currentNode.next;
    } while (currentNode.next);
    return currentNode;
  },
  //删除
  remove(element) {
    let prevNode = this.findPrev(element);
    console.log("prevNode=", prevNode);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  },
  display(callback) {
    // 循环
    let currentNode = this.head;
    do {
      callback(currentNode);
      currentNode = currentNode.next;
    } while (currentNode.element != "head");
  },
};

let l = new LinkedList();
l.insert("head", 1);
l.insert(1, 2);
l.insert(2, 3);
l.insert(3, 4);
l.insert(4, 5);
l.insert(5, 6);
// l.remove(6);
l.display((item) => {
  console.log("item===", item);
});
console.log(l);
