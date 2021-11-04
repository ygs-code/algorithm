/*
 * @Author: your name
 * @Date: 2021-11-04 14:24:07
 * @LastEditTime: 2021-11-04 16:26:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/排序算法/02冒泡算法.js
 */
var example = [8, 94, 15, 88, 55, 76, 21, 39];

// 冒泡算法
//一；冒泡排序：相邻两元素之间两两比较，比较出大值进行赋值互换，再依次与相邻的元素比较，层层递进 #互换元素位置，相互赋值。

function bubbleSort(arr) {
  console.time("冒泡排序耗时");
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比，元素交换，大的元素交换到后面
      // 下一次就不需要比较刚才那个大的值了
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.timeEnd("冒泡排序耗时");
  return arr;
}