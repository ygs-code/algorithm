/*
 * @Date: 2022-02-17 17:44:09
 * @Author: Yao guan shou
 * @LastEditors: Yao guan shou
 * @LastEditTime: 2022-02-17 17:57:34
 * @FilePath: /algorithm/javascript/检查二进制字符串字段.js
 * @Description: 
 */
var checkOnesSegment = function (s) {
    if(s.indexOf('01')!=-1){
        return false
     }
     return true
  };
  
  console.log(checkOnesSegment("111111111000000"))