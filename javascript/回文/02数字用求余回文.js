var isPalindrome = function(x) {
    if (x < 0) return false
    var curr = x
    var unm = x
    var sum = 0
    while (curr != 0) {
        // 获取到 第一位
        unm = curr % 10;
        // 进位
        curr = parseInt(curr / 10)
        sum = sum * 10 + unm
    }
    console.log('sum=', sum)
    return sum == x;
};

console.log(isPalindrome(121))