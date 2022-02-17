/*
 * @Date: 2022-02-17 19:35:18
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 20:03:35
 * @FilePath: /algorithm/javascript/leetcode/简单/无重复字符的最长子串.js
 * @Description:
 */
var lengthOfLongestSubstring = function (s) {
  let maxStr = s[0]||'';
  let nowStr = s[0]||'';
  for (let i = 1; i < s.length; i++) {
    if (nowStr.indexOf(s[i]) == -1) {
      nowStr += s[i];
      console.log("nowStr=", nowStr);
    } else if (nowStr.length > maxStr.length) {
      maxStr = nowStr;
      console.log("nowStr=", nowStr);
      nowStr = s[i];
    }
  }
  if (nowStr.length > maxStr.length) {
    maxStr = nowStr;
  }
  //   return maxStr;
  return (maxStr || "").length;
};

// "abcabcbb"

console.log(lengthOfLongestSubstring(""));
