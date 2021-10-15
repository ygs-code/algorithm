/*
 * @Author: your name
 * @Date: 2021-10-15 17:38:07
 * @LastEditTime: 2021-10-15 17:55:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/散列/01.js
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
   var n=0;
   for(){
       
   }
  },
  put(data) {
    var positon = this.simpleHash(data);
      this.table[positon]=data;
  },
};
