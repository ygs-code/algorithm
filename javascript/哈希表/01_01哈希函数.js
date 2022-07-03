/*
 * @Date: 2022-01-21 12:08:57
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-01-21 12:10:11
 * @FilePath: /algorithm/javascript/哈希表/01_01哈希函数.js
 * @Description: 
 */
//设计哈希函数
//1>将字符串转成比较大的数字：hashCode
//2>将大的数字hashCode压缩到数组范围
function hashFunc(str,size){
    //1.定义hashCode变量
    var hashCode=0
    //2.霍纳算法，来计算 hashCode的值
    for(var i=0;i<str.length;i++){
       hashCode=37* hashCode + str.charCodeAt(i) //获取编码
    }
    //3.取余状态
    var index=hashCode%size
    return index 
}

//测试哈希函数
console.log(hashFunc('abc',7))
console.log(hashFunc('cba',7))
console.log(hashFunc('nba',7))
console.log(hashFunc('mba',7))
console.log(hashFunc('4ba',7))
console.log(hashFunc('oba',7))