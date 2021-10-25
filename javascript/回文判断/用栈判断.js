/*
 * @Author: your name
 * @Date: 2021-10-25 15:31:06
 * @LastEditTime: 2021-10-25 15:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/回文判断/用栈判断.js
 */
function Stack() {
  this.dataStore = [];
  this.length = 0;
}

Stack.prototype = {
  push(elemnt) {
    this.dataStore[this.length] = elemnt;
    this.length++;
  },
  pop() {
    const arr = new Array(--this.length);
    const lastChild = this.dataStore[this.length];
    for (let index = 0; index < this.length; index++) {
      arr[index] = this.dataStore[index];
    }
    this.dataStore = arr;
    return lastChild;
  },
};

// const s = new Stack();
// s.push(1);
// s.push(2);
// s.push(3);
// console.log(s.dataStore);
// s.pop();
// console.log(s.dataStore);

//利用栈方式来实现
function isPalindrome(str) {
  const s = new Stack();
  let newStr = "";
  for (let index = 0; index < str.length; index++) {
    s.push(str[index]);
  }
  let i = 0;
  while (s.dataStore.length) {
    newStr += s.pop();
  }
  console.log(newStr);
  return newStr== str;
}

console.log(isPalindrome("racecar"));
