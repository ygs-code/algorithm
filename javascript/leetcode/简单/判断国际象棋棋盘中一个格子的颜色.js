/*
 * @Date: 2022-02-17 19:18:19
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 19:29:40
 * @FilePath: /algorithm/javascript/leetcode/简单/判断国际象棋棋盘中一个格子的颜色.js
 * @Description: 
 */
/*
 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。



如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。

给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/determine-color-of-a-chessboard-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var squareIsWhite = function (coordinates) {
    let str = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let num = [1, 2, 3, 4, 5, 6, 7, 8];
    let color = "black";
    for (let i = 0; i < str.length; i++) {
      color = color == "white" ? "black" : "white";
      for (let z = 0; z < num.length; z++) {
        color = color == "white" ? "black" : "white";
        if(str[i] + num[z]==coordinates){
          return color == "white" 
        }
      }
    }
  };

console.log(squareIsWhite('a1'));
