/*
 * @Author: your name
 * @Date: 2021-10-23 17:09:53
 * @LastEditTime: 2021-10-23 17:20:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /算法/队列/01.js
 */
/*
 队列是先进后出规律。就像我们在食堂排队一样，先排队人先打饭吃
 队列的两种主要操作是:向队列中插入新元素和删除队列中的元素。
 插入操作也叫做入 队，删除操作也叫做出队。入队操作在队尾插入新元素，出队操作删除队头的元素
 */

function Queue() {
  this.queue = [];
}
Queue.prototype = {
  // 队列元素个数
  size() {
    return this.queue.length;
  },
  // 入队
  enqueue(item) {
    this.queue.push(item);
  },
  // 出队
  dequeue() {
    return this.queue.shift();
  },
  // 队列是否为空
  isEmpty() {
    return !this.queue.length;
  },
  // 队列第一个元素
  front() {
    return this.queue[0];
  },
  // 清空队列
  clear() {
    this.queue = [];
  },
};
