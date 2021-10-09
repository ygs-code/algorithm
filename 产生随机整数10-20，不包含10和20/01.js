/*
 * @Author: your name
 * @Date: 2021-10-08 17:20:26
 * @LastEditTime: 2021-10-09 14:31:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/产生随机整数10-20，不包含10和20/01.js
 */
const $random = () => {
  return 11 + Math.floor(Math.random() * 9);
};
console.log($random());
