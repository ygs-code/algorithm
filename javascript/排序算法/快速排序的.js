function quickSort(arr) {
    if (arr.length <= 1) { return arr }
    var pivotIndex = Math.floor(arr.length / 2); //基准的下标
    var pivot = arr.splice(pivotIndex, 1)[0]; // 把基准从数组分离出来
    var left = []; // 基准左边子集存放变量
    var right = []; // 基准右边子集存放变量
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pointNum) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pointNum], quickSort(right))
}
var example = [94, 15, 88, 1, 55, 76, 21, 39];

console.log(quickSort(example));