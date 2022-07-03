/*
 * @Author: your name
 * @Date: 2021-10-08 16:14:24
 * @LastEditTime: 2021-10-09 14:29:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /算法/整数反转/循环翻转.js
 */
/**
 * @param {number} x
 * @return {number}
 */
/**
    解题思路
        反转数字的常见解法，就是不停的对参数x，%10得到余数，之后x除以10 目标数在与余数累加 直到x==0
        核心代码就是：while(x!==0){
        a=x%10
        x=parseInt(x/10)
        sum=sum*10+a
        }
        注意细节：
        x=parseInt(x/10)，不同于c语言，javaScript语言的变量是没有类型的，所以必须用parseInt(x/10)取整，不然的话循环永远不会退出。



        作者：duanyuxian
        链接：https://leetcode-cn.com/problems/reverse-integer/solution/js-qiu-yu-yun-suan-fu-by-priceless-engel-pk57/
        来源：力扣（LeetCode）
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
       */
// 121
// 1
// 1+2+1
const reverse = (x) => {
    let a,
        sum = 0,
        max = Math.pow(2, 31) - 1,
        min = -max - 1;
    if (x > max || x < min) return 0;
    while (x !== 0) {
        a = x % 10;
        x = parseInt(x / 10);
        sum = sum * 10 + a;
    }
    if (sum > max || sum < min) return 0;
    return sum;
};

console.log(reverse(1534236));