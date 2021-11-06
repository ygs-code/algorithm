/*
 思路为；
   15和94比较，15小于94 则 出现两个 94   arr[preIndex + 1] = arr[preIndex]; [94,  94, 88, 1, 55, 76, 21, 39];
   然后   arr[preIndex + 1] = current;  把15 放到第一个94中
   一次类推

   如果到1的位置的时候 
     此时 数据结构为  [15,  88, 94, 1, 55, 76, 21, 39];
     先缓存 current = arr[i];  current等于 1   i=3  preIndex=2
     1和94比较1小于94  然后 94替换1的位置 则出现数据结构[15,  88, 94, 94, 55, 76, 21, 39];
     然后此时 指针则 减减 preIndex--;    i=3  preIndex=1 
     则1和88比较 1小于88  则88的位置则会添加到第一个94位置上，则出现数据结构[15,  88, 88, 94, 55, 76, 21, 39];
     然后此时 指针则 减减 preIndex--;    i=3  preIndex=0
     则1和88比较 1小于15  则88的位置则会添加到第一个88位置上，则出现数据结构[15,  15, 88, 94, 55, 76, 21, 39];

    然后此时 指针则 减减 preIndex--;   i=3  preIndex=-1
    此时不在进入while循环 因为 preIndex<=0 了 然后
    arr[preIndex + 1] = current;  此时 第一个15被替换掉 则数据结构出现 为 [1,  15, 88, 94, 55, 76, 21, 39];
 */
var example = [94, 15, 88, 1, 55, 76, 21, 39];
function Insertion(arr) {
  // 获取数组长度
  let len = arr.length;
  let preIndex, // 上一次索引
    // 当前元素
    current;
  // 循环
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    // 当前
    current = arr[i];
    console.log("i=", i);
    while (preIndex >= 0 && current < arr[preIndex]) {
      console.log("preIndex=", preIndex);
      console.log(" arr[preIndex]=", arr[preIndex]);
      console.log(" arr[preIndex + 1] =", arr[preIndex + 1]);
      arr[preIndex + 1] = arr[preIndex];

      preIndex--;
    }
    arr[preIndex + 1] = current;
    console.log("arr=", arr);
  }
  return arr;
}

console.log(Insertion(example));
