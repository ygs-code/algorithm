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
    set(key, value) {
        this.dataStore[key] = value;
    },

    get(key) {
        return this.dataStore[key];
    },
    delete(key) {
        delete this.dataStore[key];
    },
    has(key) { // 判断给定的键值是否存在于字典中
        return this.dataStore.hasOwnProperty(key);
    },
    clear() { // 清空字典内容
        this.dataStore = {};
    },
    keys() { // 返回字典中所有的键值
        return Object.keys(this.dataStore);
    },
    values() { // 返回字典中所有的值
        return Object.values(this.items);
    },
    getItems() { // 返回字典中的所有元素
        return this.items;
    },
    map(callback = () => {}) {
        for (let key of Object.keys(this.dataStore)) {
            callback(this.dataStore[key], key);
        }
    },
};

let d = new Dictionary();
d.set("a", 1);
d.set("b", 2);
d.set("c", 3);
d.set("d", 4);
d.set("e", 5);
d.set("f", 6);
d.set("g", 7);
d.map((item, key) => {
    console.log('item=======', item)
    console.log('key=======', key)
})

// console.log("d======", Object.keys(d.dataStore));