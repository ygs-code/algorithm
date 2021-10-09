/*
 * @Author: your name
 * @Date: 2021-10-08 15:08:18
 * @LastEditTime: 2021-10-09 14:27:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/两数之和/ 哈希表的优化.js
 */
 
      /*
   要对上述优化，就要深入细节了。比如有一个表超级大，但前两个元素就能够满足题目要求。在上述解法中，依然要建一个完整的哈希表，空间占用一点没省下来，理想解法是边查边存：

 从结果可以看到，其提升其实有限。
思考
从上述解题过程和分析可以看出，对于算法上一些边角优化并不能从根本上降低该解法的时间复杂度和空间复杂度，反而提升了该解法的理解复杂度和 coding 复杂度。

因此，我对自己的要求是能够想到暴力解法，然后通过时间空间的操作把整体复杂度降低一个数量级。对于自己 AC 不出的题，我也不会追求极致优化，谋求双 100% 成就。

 
   */
      const twoSum = function (nums, target) {
        const len = nums.length;
        const map = new Map();

        for (let i = 0; i < len; i++) {
          const needNum = target - nums[i];

          if (map.has(needNum) && i !== map.get(needNum)) {
            return [i, map.get(needNum)];
          }

          // 边读边存 记忆法
          map.set(nums[i], i);
        }
      };
     
 