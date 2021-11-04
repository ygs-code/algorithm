/*
 * @Author: your name
 * @Date: 2021-11-04 16:24:36
 * @LastEditTime: 2021-11-04 17:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/排序算法/03.插入排序.js
 */
var example = [8, 94, 15, 88, 55, 76, 21, 39];
function Insertion(arr) {
    // 获取数组长度
    let len = arr.length;
    let preIndex,  // 上一次索引
    // 当前元素
    current;
    // 循环 
    for (let i = 1; i < len; i++) {
      preIndex = i - 1;
      // 当前
      current = arr[i];
      while (preIndex >= 0 && current < arr[preIndex]) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex--;
      }
      arr[preIndex + 1] = current;
      console.log('arr=',arr)
    }
    return arr;
  }
   
   
 
  console.log(Insertion(example));
  