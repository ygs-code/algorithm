/*
 * @Author: your name
 * @Date: 2021-10-23 17:09:53
 * @LastEditTime: 2021-10-23 17:16:23
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
  this.dataStore = [];
  this.length = 0;
}

Queue.prototype = {
  // 插入数据
  push(element) {
    this.dataStore[this.length] = element;
    this.length++;
  },
  // 删除数据
  shift() {
    if (!this.length) {
      return false;
    }
    this.length--;
    let arr = new Array(this.length);
    for (let index = 0; index < this.length; index++) {
      arr[index] = this.dataStore[index];
    }
    this.dataStore = arr;
  },
};
