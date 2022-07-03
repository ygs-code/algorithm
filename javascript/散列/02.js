/*
 * @Author: your name
 * @Date: 2021-10-15 17:38:07
 * @LastEditTime: 2022-01-24 11:50:01
 * @LastEditors: Yao guan shou
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/散列/02.js
 */
function HashTable() {
  this.table = new Array(137);
}

HashTable.prototype = {
  simpleHash(data) {
    var total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  },
  showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  },
  betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return console.log(total);
  },
  put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
  },
};

var someNames = [
  "David",
  "Jennifer",
  "Donnie",
  "Raymond",
  "Cynthia",
  "Mike",
  "Clayton",
  "Danny",
  "Jonathan",
];

var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
