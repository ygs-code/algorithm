/*
 * @Author: your name
 * @Date: 2021-10-25 14:32:06
 * @LastEditTime: 2021-10-25 15:20:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/栈/数制之间转换.js
 */
/*
 
101011


 
function mulBase(num, base) {
   
}

2 进制=> 10进制

输入  3->      11


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
    return element;
  },
  // 删除数据
  shift() {
    if (!this.length) {
      return false;
    }
    let firstChild = this.dataStore[0];
    this.length--;
    let arr = new Array(this.length);
    for (let index = 1; index < this.length; index++) {
      arr[index - 1] = this.dataStore[index];
    }
    this.dataStore = arr;
    return firstChild;
  },
};

// 任何进制转10进制
function mulBase(
  num, // 数值
  base // 多少进制
) {
  var q = new Queue();
  let sum = 0;
  do {
    q.push(num % 10);
    num = parseInt(num / 10);
  } while (num > 0);
  let index = 0;
  while (q.length && q.length > index) {
    // 多少次幂
    sum += Math.pow(base, index);
    index++;
  }

  return sum;
}

//
console.log(mulBase(11, 16));
