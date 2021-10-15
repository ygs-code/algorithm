/*
 * @Author: your name
 * @Date: 2021-10-25 18:08:21
 * @LastEditTime: 2021-10-15 15:57:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/链表/双链表.js
 */
// 创建节点
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LinkedList() {
  this.head = new Node("head");
}

LinkedList.prototype = {
  // 插入链表
  insert(nowElement, newElement) {
    let nowNode = this.find(nowElement);
    let newNode = new Node(newElement);
    newNode.next = nowNode.next;
    nowNode.next = newNode;
    //新节点的上一级 给当前这级
    newNode.previous = nowNode;
  },
  // 查询链表
  find(element) {
    let currentNode = this.head;
    while (currentNode && currentNode.element != element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  },
  //删除节点
  reomve(element) {
    // 获取当前节点
    let crrentNode = this.find(element);
    // 当前的上一级节点
    let prevNode = crrentNode.previous;
    // 上一级的下一级节点                // 下一级节点
    prevNode.next = crrentNode.next;
    if (crrentNode.next) {
      crrentNode.next.previous = prevNode;
    }
  },
  display(callback) {
    // 循环
    let currentNode = this.head;
    do {
      callback(currentNode);
      currentNode = currentNode.next;
    } while (currentNode);
  },
};

let l = new LinkedList();
l.insert("head", 1);
l.insert(1, 2);
l.insert(2, 3);
l.insert(3, 4);
l.insert(4, 5);
l.insert(5, 6);
l.reomve(6);
l.display((item)=>{
  console.log('item=',item)
})
// console.log(l);
