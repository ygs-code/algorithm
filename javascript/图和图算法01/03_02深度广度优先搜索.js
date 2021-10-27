//无向图
//构建图，输入顶点数量
function Graph(v) {
  this.vertices = v; //顶点数
  this.edges = 0; //边数

  this.adj = [];
  //通过 for 循环为数组中的每个元素添加一个子数组来存储所有的相邻顶点，并 将所有元素初始化为空字符串。
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }

  //为 Graph 类添加一个数组，用来存储已访问过的顶点，将它所有元 素的值全部初始化为 false。
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;

  this.DFS = DFS;
  this.DFSTraverse = DFSTraverse;
  this.BFS = BFS;
  this.BFSTraverse = BFSTraverse;
}

//添加边
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

//输出所有顶点及其相邻顶点
function showGraph() {
  for (var i in this.adj) {
    console.log(i, " -> ");
    for (var j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] != undefined) {
        console.log(this.adj[i][j], " ");
      }
    }
    console.log("<br>");
  }
}

//深度优先
function DFSTraverse() {
  let v = this.vertices;
  for (let i = 0; i < v; ++i) {
    if (!this.marked[i]) {
      this.DFS(i);
    }
  }
}
function DFS(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: ", v, "<br>");
  }
  for (var w in this.adj[v]) {
    let k = this.adj[v][w];
    if (!this.marked[k]) {
      this.DFS(k);
    }
  }
}

//广度优先
function BFSTraverse() {
  for (let i = 0; i < this.vertices; ++i) {
    if (!this.marked[i]) {
      this.BFS(i);
    }
  }
}
function BFS(v) {
  this.marked[v] = true;
  if (this.adj[v] != undefined) {
    console.log("Visited vertex: ", v, "<br>");
  }
  for (let w in this.adj[v]) {
    let k = this.adj[v][w];
    if (!this.marked[k]) {
      this.marked[k] = true;
      if (this.adj[k] != undefined) {
        console.log("Visited vertex: ", k, "<br>");
      }
    }
  }
}

graphA = new Graph(5);
graphA.addEdge(0, 1);
graphA.addEdge(0, 2);
graphA.addEdge(1, 3);
graphA.addEdge(2, 4);
console.log("Show all vertices and their neighbors:<br>");
// graphA.showGraph();
// console.log("Depth first traversal:<br>");
// graphA.DFSTraverse();
console.log("Breadth first traversal:<br>");
graphA.BFSTraverse();
