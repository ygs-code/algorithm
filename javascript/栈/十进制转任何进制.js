/*
 * @Author: your name
 * @Date: 2021-10-25 14:32:06
 * @LastEditTime: 2021-10-25 15:21:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/栈/数制之间转换.js
 */
/*
 可以利用栈将一个数字从一种数制转换成另一种数制。 假设想将数字 n 转换为以 b 为基数
的数字， 实现转换的算法如下。
(1) 最高位为 n % b， 将此位压入栈。
(2) 使用 n/b 代替 n。
(3) 重复步骤 1 和 2， 直到 n 等于 0， 且没有余数。
(4) 持续将栈内元素弹出， 直到栈为空， 依次将这些元素排列， 就得到转换后数字的字符
串形式
function mulBase(num, base) {
   
}

10 进制=> 2转

输入  3 ->      11


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
    let lastChild = null;
    if (!this.length) {
      return;
    }
    lastChild = this.dataStore[this.length - 1];
    this.length--;
    let arr = new Array(this.length);
    for (let index = 0; index < this.length; index++) {
      arr[index] = this.dataStore[index];
    }

    this.dataStore = arr;
    return lastChild;
  },
  //清理栈
  clear() {
    this.dataStore = [];
  },
};

function mulBase(num, base) {
  let S = new Stack();
  let s = "";
  //入栈
  do {
    S.push(num % base);
    num = parseInt(num / base);
  } while (num > 0);

  // 出栈
  while (S.dataStore.length) {
    s += `${S.pop()}`;
  }
  return  parseInt(s)
}

// 十进制转2进制
console.log(mulBase(18, 16));
