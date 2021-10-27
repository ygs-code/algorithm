/*
 * @Author: your name
 * @Date: 2021-10-27 17:01:21
 * @LastEditTime: 2021-10-27 17:16:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/对象key,value.js
 */

function set(key, value, obj = {}) {
  let keys = key.split(".");
  let $key = keys.shift();
  if (!keys.length) {
    obj[$key] = value;
  } else {
    obj[$key] = {};
    set(keys.join("."), value, obj[$key]);
  }
  return obj;
}

console.log(set("a.b.c.dddd.xw", 123));
