/*
 * @Author: your name
 * @Date: 2021-10-27 12:27:03
 * @LastEditTime: 2021-10-27 12:27:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/二叉树查找/01_02二叉树深度优先搜索(DFS).js
 */
//节点构造函数
function Node(key){
    this.children = []  //不确定当前节点子节点数,使用数组表示
    this.key = key    //当前节点序号
}
 
//创建节点
let n1 = new Node(1),
    n2 = new Node(2),
    n3 = new Node(3),
    n4 = new Node(4),
    n5 = new Node(5),
    n6 = new Node(6);
 
//构建数
n1.children.push(n2, n5)
n2.children.push(n3, n4)
n5.children.push(n6)
 
//深度优先搜索算法实现
function dfs(node){
    const stack = [node]  //模拟栈
    while( stack.length > 0){ //栈中存在数据
        const first = stack.shift();  //从头部获取出栈元素
        console.log(first.key)  //打印出出栈元素序号
        first.children.slice().reverse().forEach(  
            child => stack.unshift(child) //从头部插入进栈元素
        )
    }
}
 
dfs(n1)  // 1,2,3,4,5,6