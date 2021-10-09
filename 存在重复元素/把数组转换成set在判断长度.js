/*
 * @Author: your name
 * @Date: 2021-10-08 17:01:47
 * @LastEditTime: 2021-10-09 14:26:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/存在重复元素/把数组转换成set在判断长度.js
 */
var containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};
console.log(containsDuplicate([1, 2, 3, 1]));
