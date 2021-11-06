/*
 * @Author: your name
 * @Date: 2021-11-04 11:54:20
 * @LastEditTime: 2021-11-04 14:20:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/排序算法/01.js
 */
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }
}

CArray.prototype = {
  // 设置数据
  setData() {
    for (var i = 0; i < this.numElements; ++i) {
        //生成100内的随机数
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  },
  // 清除数据
  clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
      this.dataStore[i] = i;
    }
  },
  // 插入数据
  insert(element) {
    this.dataStore[this.pos++] = element;
  },
  toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {  //10个数就换行
        retstr += "\n";
      }
    }
    return retstr;
  },
  // 对换
  swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  },
};

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
