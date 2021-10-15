/*
 * @Author: your name
 * @Date: 2021-10-15 16:30:10
 * @LastEditTime: 2021-10-15 16:57:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/字典/01.js
 */
function Dictionary() {
  this.dataStore = new Array();
}

Dictionary.prototype = {
  add(key, value) {
    this.dataStore[key] = value;
  },
  find(key) {
    return this.dataStore[key];
  },
  remove(key) {
    delete this.dataStore[key];
  },
  map(callback = () => {}) {
    for (let key of Object.keys(this.dataStore)) {
      callback(this.dataStore[key], key);
    }
  },
};

let d = new Dictionary();
d.add("a", 1);
d.add("b", 2);
d.add("c", 3);
d.add("d", 4);
d.add("e", 5);
d.add("f", 6);
d.add("g", 7);
d.map((item,key)=>{
    console.log('item=======',item)
    console.log('key=======',key)
})

// console.log("d======", Object.keys(d.dataStore));
