//Prim算法
//构建图，输入顶点数量
function Graph(v) {
  this.vertices = v; //顶点数
  this.edges = 0; //边数
  this.adj = [];
  //通过 for 循环为矩阵的每一个元素赋值0。
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    for (let j = 0; j < this.vertices; j++) this.adj[i][j] = 10000;
  }
  //为 Graph 类添加一个数组，用来存储已访问过的顶点，将它所有元 素的值全部初始化为 false。
  this.marked = [];
  for (var i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  //添加一个数组用于存储路径长度
  this.dist = [];
  this.dist[0] = 0;
  for (var i = 1; i < this.vertices; i++) {
    this.dist[i] = 10000; //取正无穷大
  }

  //用于存储路径
  this.path = [];
  for (var i = 1; i < this.vertices; i++) {
    this.path[i] = [];
  }

  this.addEdge = addEdge;
  this.showGraph = showGraph;

  this.Prim = Prim;
  this.djtPath = djtPath;
  this.showPrim = showPrim;
}

//添加边
function addEdge(v, w, k) {
  this.adj[v][w] = k; //存储正向边
  this.adj[w][v] = k; //存储反向边,若是有向图则删去
  this.edges++;
}

//输出所有顶点及其指向的顶点
function showGraph() {
  for (let i = 0; i < this.vertices; i++) {
    console.log(i, " -> ");
    for (let j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] < 10000) {
        console.log(j, " ");
      }
    }
    console.log("<br>");
  }
}

//最短路径
function Prim() {
  for (let i = 0; i < this.vertices; i++) {
    if (!this.marked[i]) {
      this.djtPath(i);
    }
  }
}
function djtPath(v) {
  this.marked[v] = true;
  let t = this.dist[v];
  for (let w in this.adj[v]) {
    let k = t + this.adj[v][w]; //原点到当前节点的距离加当前节点到下一节点的距离
    if (this.dist[w] > k) {
      this.dist[w] = k;
      this.path[w] = [v, w]; //记录相应的节点
    }
  }
}
function showPrim() {
  for (let i = 1; i < this.vertices; i++) {
    console.log(
      this.path[i][0],
      "->",
      this.path[i][1],
      ":",
      this.dist[i],
      "<br>"
    );
  }
}
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
graphA.Prim();
console.log("The shortest distance is:<br>");
graphA.showPrim();
