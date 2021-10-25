/*
 * @Author: your name
 * @Date: 2021-10-23 16:32:04
 * @LastEditTime: 2021-10-25 14:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /算法/栈/01.js
 */
/*
 列表是一种最自然的数据组织方式。上一章已经介绍如何使用 List 类将数据组织成一个列 表。
 如果数据存储的顺序不重要，也不必对数据进行查找，那么列表就是一种再好不过的 数据结构。
 对于其他一些应用，列表就显得太过简陋了，我们需要某种和列表类似但是更 复杂的数据结构。
栈就是和列表类似的一种数据结构，它可用来解决计算机世界里的很多问题。栈是一种高 效的数据结构，
因为数据只能在栈顶添加或删除，所以这样的操作很快，而且容易实现。 
】栈的使用遍布程序语言实现的方方面面，从表达式求值到处理函数调用。
栈被称为一种后入先出(LIFO，last-in-first-out)的数据结构。
就好比桶装东西一样，只能先进后出
 */
/*
push()、pop() 和 peek() 是栈的 3 个主要方法，但是栈还有其他方法和属性。
clear() 方法 清除栈内所有元素，length 属性记录栈内元素的个数。我们还定义了一个
 empty 属性，用 以表示栈内是否含有元素，
 不过使用 length 属性也可以达到同样的目的。
*/

function Stack() {
  this.dataStore = [];
  this.length = 0;
}
Stack.prototype = {
  //尾部插入数据
  push(element) {
    this.dataStore[this.length] = element;
    this.length++;
  },
  //尾部删除数据
  pop() {
    if (!this.length) {
      return;
    }
    this.length--;
    let arr = new Array(this.length);
    for (let index = 0; index < this.length; index++) {
      arr[index] = this.dataStore[index];
    }

    this.dataStore = arr;
  },
  //清理栈
  clear() {
    this.dataStore = [];
  },
};

let S = new Stack();
S.push("a");
S.push("b");
S.push("c");
S.push("d");
console.log(S.dataStore);
S.pop();
console.log(S.dataStore);
