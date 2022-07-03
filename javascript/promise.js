/*
 * @Date: 2022-02-16 12:02:14
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-16 12:23:48
 * @FilePath: /algorithm/javascript/promise.js
 * @Description:
 */
console.log("main");
setTimeout(() => {
  console.log("setTimeout1");
}, 0);

let P1 = new Promise((resolve, reject) => {
  resolve(1);
});
let P2 = new Promise((resolve, reject) => {
  resolve(1);
});

async function asyncFn() {
  console.log("asyncFn");
  P2.then(() => {
    console.log("P2 then");
    setTimeout(() => {
      console.log("setTimeout2");-
    }, 0);
  });

}

new Promise((resolve, reject) => {
  console.log("Promise Pind");
  resolve();
}).then(() => {
  console.log("Promise then");
  P1.then(() => {
    console.log("P1 then");
  });
});

asyncFn();
