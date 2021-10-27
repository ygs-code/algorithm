/*
 * @Author: your name
 * @Date: 2021-10-20 14:10:53
 * @LastEditTime: 2021-10-27 11:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/图和图算法/01.js
 */
// 定点表示
function Vertex(label) {
  this.label = label;
}

// 构建图
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    // this.adj[i].push("");
  }
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}
//展示了一个 Graph 类的完整定义
Graph.prototype = {
  // 添加数据
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  },
  // 显示数据
  showGraph() {
    for (var i = 0; i < this.vertices; i++) {
      console.log(i + "->");
      for (var j = 0; j < this.vertices; j++) {
        if (this.adj[i][j] != undefined) {
          console.log(this.adj[i][j] + " ");
        }
      }
    }
  },
  // 递归深度优先搜索
  dfs(v) {
    this.marked[v] = true;
    // 用于输出的 if 语句在这里不是必须的
    if (this.adj[v] != undefined) {
      console.log("Visited vertex: " + v);
      for (var w of this.adj[v]) {
        // console.log('w=',w)
        if (!this.marked[w]) {
          this.dfs(w);
        }
      }
    }
 
  },
};

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
console.log('g==',g)
