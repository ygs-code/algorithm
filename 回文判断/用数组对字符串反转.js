/*
 * @Author: your name
 * @Date: 2021-10-08 15:44:02
 * @LastEditTime: 2021-10-09 14:27:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/回文判断/用数组对字符串反转.js
 */
let isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};
console.log(isPalindrome(121));
