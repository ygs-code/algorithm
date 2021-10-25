/*
 * @Author: your name
 * @Date: 2021-10-25 17:32:09
 * @LastEditTime: 2021-10-25 18:01:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/链表/单链表.js
 */
function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
}
LinkedList.prototype = {
    //插入链表
  insert(element, newElement) {
    const currentNode = this.find(element);
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  },
  // 查找链表
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element != element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
//  查找链表上一项
  findPrevious(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element != element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  // 删除链表某一项
  remove(element) {
    let prevNode = this.findPrevious(element);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  },
  // 循环链表
  display() {
    let currentNode = this.head;
    while (currentNode) {
      console.log("currentNode=", currentNode);
      currentNode = currentNode.next;
    }
  },
};

let l = new LinkedList();
l.insert("head", "1");
l.insert("1", "2");
l.insert("2", "3");
l.insert("3", "4");
l.remove("4");
// l.display();
// console.log(l.findPrevious("3"));

console.log(l);
