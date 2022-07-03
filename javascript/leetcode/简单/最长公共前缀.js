/*
 * @Date: 2022-02-17 17:58:31
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 18:21:49
 * @FilePath: /algorithm/javascript/leetcode/简单/最长公共前缀.js
 * @Description: 
 */
/*
 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var longestCommonPrefix = function (strs) {
  let length = strs[0].length;
  let y = 0;
  let strCount = "";
  let str = "";
  while (y < length && strs[0][y]) {
    str = strs[0][y];
    for (let i = 0; i < strs.length; i++) {
      if (str !== strs[i][y]) {
        return strCount;
      } else if (i == strs.length - 1) {
        strCount += strs[i][y];
      }
    }
    y++;
  }
  return strCount
};
console.log(longestCommonPrefix(["dog","racecar","car"]));
