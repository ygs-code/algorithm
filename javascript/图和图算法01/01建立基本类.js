/*
 * @Author: your name
 * @Date: 2021-10-20 14:10:53
 * @LastEditTime: 2021-10-27 10:59:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/图和图算法/01建立基本类.js
 */


// 构建图
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    // this.adj[i].push("");
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
};

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

