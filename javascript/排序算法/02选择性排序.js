/*
 * @Author: your name
 * @Date: 2021-11-04 15:10:43
 * @LastEditTime: 2021-11-04 16:14:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/排序算法/选择性排序.js
 */
var example = [8, 94, 15, 88, 55, 76, 21, 39];



//二，选择排序，先定义一个元素的最大值与最小值，拿 每个元素与最值比较，取大值放到元素最右端，层 层比较，#互换元素下标位置，再赋值，所以比冒泡排序的效率高，

function selectSort1(arr) {
    console.time("选择排序耗时");
    var len = arr.length;
    var minIndex, temp;
    for (i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.timeEnd("选择排序耗时");
    return arr;
}

function selectSort2(arr) {
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


console.log(selectSort1(example));
console.log(selectSort2(example));