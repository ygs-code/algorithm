/*
 * @Author: your name
 * @Date: 2021-10-08 16:56:23
 * @LastEditTime: 2021-10-09 14:26:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/存在重复元素/利用循环方式对比.js
 */
var containsDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let middle = nums.length / 2;
  let arr = [];
  while (start <= middle || end > middle) {
    if (start <= middle) {
      if (arr.includes(nums[start])) {
        return true;
      }
      arr.push(nums[start]);
      start++;
    }
    if (end > middle) {
      if (arr.includes(nums[end])) {
        return true;
      }
      arr.push(nums[end]);
      end--;
    }
  }
  return false;
};

console.log(containsDuplicate([2, 3, 1]));
