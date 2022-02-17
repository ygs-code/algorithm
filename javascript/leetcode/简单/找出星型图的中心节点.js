/*
 * @Date: 2022-02-17 18:56:19
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 19:12:11
 * @FilePath: /algorithm/javascript/leetcode/简单/找出星型图的中心节点.js
 * @Description:
 */

let edges = [
  [1, 2],
  [2, 3],
  [4, 4],
];

var findCenter = function (edges) {
  let i = 1;
  let nowData = edges[0];
  while (i < edges.length) {
    let [left, right] = edges[i];
    if (nowData[0] == left || nowData[1] == left) {
      nowData = [left, left];
    } else if (nowData[0] == right || nowData[1] == right) {
      nowData = [right, right];
    } else {
      return false;
    }
    i++;
  }
  return nowData[0];
};


console.log(findCenter(edges))