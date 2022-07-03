/*
 * @Date: 2022-02-17 18:25:04
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 18:52:43
 * @FilePath: /algorithm/javascript/leetcode/简单/仅执行一次字符串交换能否使两个字符串相等.js
 * @Description:
 */
/*
 给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。

如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。

 

示例 1：

输入：s1 = "bank", s2 = "kanb"
输出：true
解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
示例 2：

输入：s1 = "attack", s2 = "defend"
输出：false
解释：一次字符串交换无法使两个字符串相等
示例 3：

输入：s1 = "kelb", s2 = "kelb"
输出：true
解释：两个字符串已经相等，所以不需要进行字符串交换
示例 4：

输入：s1 = "abcd", s2 = "dcba"
输出：false


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-if-one-string-swap-can-make-strings-equal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var areAlmostEqual = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  let sum = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      sum.push({
        s1: s1[i],
        s2: s2[i],
      });
      if (sum.length == 2) {
        if (sum[0].s1 != s2[i] || sum[0].s2 != s1[i]) {
          return false;
        }
      }
      if (sum.length > 2) {
        return false;
      }
    }
  }

  return sum.length == 0 || sum.length == 2;
};

let s1 = "bank";
let s2 = "kanb";
console.log(areAlmostEqual(s1, s2));
