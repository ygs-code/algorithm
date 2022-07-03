/**
 * @param {string} s
 * @return {number}
 * 
 * 定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
示例 2:

输入:s = "a"
输入:1
示例 3:

输入:s = "bb"
输入: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
 */
var longestPalindrome = function(s) {
    let map = new Map();
    let count = 0;
    let arrS = s.split("");
    for (let a of arrS) {
        if (map.has(a)) {
            // 有相同的字符存在，就相当于找到了可以回文的字符
            map.delete(a);
            // 结果数加2
            count += 2;
        } else {
            map.set(a);
        }
    }
    // 回文串如果是奇数的话，中心节点是单一节点，但最多只能有一个中间节点
    return count + (map.size ? 1 : 0);
};

console.log(longestPalindrome('cabbad'))