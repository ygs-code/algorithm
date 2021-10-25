/*
 * @Author: your name
 * @Date: 2021-10-23 17:09:53
 * @LastEditTime: 2021-10-23 17:32:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /算法/队列/01.js
 */
/*
 在一般情况下，从队列中删除的元素，一定是率先入队的元素。
 但是也有一些使用队列的 应用，在删除元素时不必遵守先进先出的约定。
 这种应用，需要使用一个叫做优先队列的 数据结构来进行模拟。
 priority 大的 都在前面
 */

function PriorityQueue() {
  this.queue = [];
}

PriorityQueue.prototype = {
  // 队列是否为空
  isEmpty() {
    return !this.queue.length;
  },
  value() {
    return this.queue;
  },
  // 入队 增加 priority 字段来判断优先队列插入问题
  enqueue(item) {
    if (this.isEmpty()) {
      this.queue.push(item);
    } else {
      var flag = false; //判断是否排队
      for (let i = 0; i < this.queue.length; i++) {
        // 判断优先级
        if (item.priority >= this.queue[i].priority) {
          this.queue.splice(i, 0, item);
          flag = true;
          break;
        }
      }
      // 循环后未入队，优先级最小，插入到第最后一位
      if (!flag) {
        this.queue.push(item);
      }
    }
  },
};

//创建一个队列
let Queue = new PriorityQueue();
// 插入一个队列
Queue.enqueue({
  name: "1",
  priority: 1,
});
Queue.enqueue({
  name: "3",
  priority: 3,
});
Queue.enqueue({
  name: "0",
  priority: 0,
});

console.log(Queue.queue);
