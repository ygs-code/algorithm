/*
 * @Author: your name
 * @Date: 2021-10-27 12:24:52
 * @LastEditTime: 2021-10-27 12:25:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/二叉树查找/二叉树广度优先搜索(BFS).js
 */
//节点构造函数
function Node(key){
    this.children = [] //用数组来存放子节点
    this.key = key //当前节点序号
}
 
//创建节点
let n1 = new Node(1),
    n2 = new Node(2),
    n3 = new Node(3),
    n4 = new Node(4),
    n5 = new Node(5),
    n6 = new Node(6);
 
//构建树
n1.children.push(n2, n5)
n2.children.push(n3, n4)
n5.children.push(n6)
 
//广度优先搜索算法实现
function bfs(node){
    const queue = [node] //创建一个队列
    while(queue.length){ //队列存在元素
        const first = queue.shift() //先出
        console.log(first.key) //出列元素序号
        first.children.forEach(
            child => queue.push(child) //子节点进入队列
        )
    }
}
 
bfs(n1)  //1,2,5,3,4,6