/*
 * @Author: your name
 * @Date: 2021-11-01 10:32:39
 * @LastEditTime: 2021-11-01 10:35:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/demo.js
 */
function a() {
    return 1
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}
async function demo() {
  let b = await a();
  console.log(b);
}
demo();
