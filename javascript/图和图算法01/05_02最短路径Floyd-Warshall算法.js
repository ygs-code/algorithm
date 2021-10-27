/*
 * @Author: your name
 * @Date: 2021-10-27 16:32:50
 * @LastEditTime: 2021-10-27 16:33:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/图和图算法/05_02最短路径Floyd-Warshall算法.js
 */
//Floyd算法
//使用邻接矩阵构建图，输入顶点数量
function Graph(v) {
  this.vertices = v; //顶点数
  this.edges = 0; //边数
  this.adj = [];
  //通过 for 循环为矩阵的每一个元素赋值0。
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    for (let j = 0; j < this.vertices; j++) this.adj[i][j] = Infinity;
  }

  //添加一个数组用于存储路径长度
  this.dist = [];

  this.addEdge = addEdge;
  this.showGraph = showGraph;

  this.floyd = floyd;
  this.showFloyf = showFloyf;
}

//添加边
function addEdge(v, w, k) {
  this.adj[v][w] = k;
  this.edges++;
}

//输出所有顶点及其指向的顶点
function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i, " -> ");
    for (let j = 0; j < this.vertices; j++) {
      if (isFinite(this.adj[i][j])) {
        console.log(j, " ");
      }
    }
    console.log("<br>");
  }
}

function floyd() {
  for (let i = 0; i < this.vertices; i++) {
    this.dist[i] = [];
    for (let j = 0; j < this.vertices; j++) {
      if (i === j) {
        this.dist[i][j] = 0;
      } else if (!isFinite(this.adj[i][j])) {
        this.dist[i][j] = 10000;
      } else {
        this.dist[i][j] = this.adj[i][j];
      }
    }
  }
  for (let k = 0; k < this.vertices; k++) {
    for (let i = 0; i < this.vertices; i++) {
      for (let j = 0; j < this.vertices; j++) {
        if (this.dist[i][k] + this.dist[k][j] < this.dist[i][j]) {
          this.dist[i][j] = this.dist[i][k] + this.dist[k][j];
        }
      }
    }
  }
}

function showFloyf() {
  for (let i = 0; i < this.vertices; i++) {
    for (let j = 0; j < this.vertices; j++) {
      if (this.dist[i][j] < 10000) {
        console.log(this.dist[i][j], "          ");
      } else {
        console.log("INF ");
      }
    }
    console.log("<br>");
  }
}

//最短路径
graphA = new Graph(6);
graphA.addEdge(0, 1, 2);
graphA.addEdge(0, 2, 4);
graphA.addEdge(1, 2, 2);
graphA.addEdge(1, 3, 4);
graphA.addEdge(1, 4, 2);
graphA.addEdge(2, 4, 3);
graphA.addEdge(3, 5, 2);
graphA.addEdge(4, 3, 3);
graphA.addEdge(4, 5, 2);
console.log("Show all vertices and their neighbors:<br>");
graphA.showGraph();
graphA.floyd();
console.log("The shortest distance is:<br>");
graphA.showFloyf();
