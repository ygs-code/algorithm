/*
斐波那契数列指的是这样一个数列：1，1，2，3，5，8，13，21，34，55，89...
自然中的斐波那契数列
自然中的斐波那契数列
这个数列从第3项开始，每一项都等于前两项之和。
*/
// 递归法
var fib = function(n) {
    if (n <= 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
};

console.log(fib(5))


//动态规划法
function dpFn(n) {
    var dp = Array(n + 1).fill(1);
    for (let i = 0; i < dp.length; i++) {
        if (i <= 1) {
            dp[i] = 1
        } else {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
    }
    return dp.pop()
}

console.log(dpFn(5))