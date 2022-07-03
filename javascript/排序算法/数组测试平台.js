/*
 * @Date: 2022-01-05 12:18:54
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-01-05 12:28:04
 * @FilePath: /algorithm/javascript/排序算法/数组测试平台.js
 * @Description:
 */
function CArray(numElements) {
  this.dataStrore = [];
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

CArray.prototype = {
  insert(element) {
    this.dataStore[this.pos++] = element;
  },
  toString() {
    var restr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      restr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        restr += "\n";
      }
    }
    return restr;
  },
  clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
    }
  },
  setData() {
    for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
  },
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