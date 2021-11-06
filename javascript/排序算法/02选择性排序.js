/*
 * @Author: your name
 * @Date: 2021-11-04 15:10:43
 * @LastEditTime: 2021-11-04 16:14:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/排序算法/选择性排序.js
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

//二，选择排序，先定义一个元素的最大值与最小值，拿 每个元素与最值比较，取大值放到元素最右端，层 层比较，#互换元素下标位置，再赋值，所以比冒泡排序的效率高，

// function selectSort(arr) {
//   console.time("选择排序耗时");
//   var len = arr.length;
//   var minIndex, temp;
//   for (i = 0; i < len - 1; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   console.timeEnd("选择排序耗时");
//   return arr;
// }

function selectSort(arr) {
  console.time("选择排序耗时");
  var len = arr.length;
  var temp;
  for (i = 0; i < len - 1; i++) {
    temp = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < temp) {
        arr[i] = arr[j];
        arr[j] = temp;
        temp = arr[i];
        // console.log(arr);
      }
    }
  }
  console.timeEnd("选择排序耗时");
  return arr;
}

// console.log(bubbleSort(example));
console.log(selectSort(example));
