/*
 * @Author: your name
 * @Date: 2021-10-08 15:49:59
 * @LastEditTime: 2021-10-09 14:26:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/回文判断/循环两头对比.js
 */
var isPalindrome = function(x) {
    x = x.toString();
    let start = 0;
    let end = x.length - 1;
    while (start >= end) {
        if (x[start] != x[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
console.log(isPalindrome('racecar'));