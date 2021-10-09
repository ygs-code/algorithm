/*
 * @Author: your name
 * @Date: 2021-10-08 15:53:34
 * @LastEditTime: 2021-10-09 14:29:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/整数反转/变成字符串翻转.js
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let max = Math.pow(2, 31) - 1,
    min = -max - 1;
  x = x.toString().split("").reverse().join("");
  x = x[x.length - 1] == "-" ? "-" + x.substring(0, x.length - 1) : x;
  if (x > max || x < min) return 0;
  return parseInt(x);
};

console.log(reverse(1534236469));
