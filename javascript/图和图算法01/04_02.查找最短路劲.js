/*
 * @Author: your name
 * @Date: 2021-10-20 14:10:53
 * @LastEditTime: 2021-10-27 10:45:54
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
  this.edgeTo = [];
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
  toString() {},
  // 递归深度优先搜索
  dfs(v) {
    this.marked[v] = true;
    // 用于输出的 if 语句在这里不是必须的
    if (this.adj[v] != undefined) {
      console.log("Visited vertex: " + v);
      for (var w of this.adj[v]) {
        if (!this.marked[w]) {
          this.dfs(w);
        }
      }
    }
  },
  // 广度优先搜索 for循环
  bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
      var v = queue.shift(); // 从队首移除
      if (v != undefined) {
        console.log("Visisted vertex: " + v);
        for (var w of this.adj[v]) {
          if (!this.marked[w]) {
            this.edgeTo[w] = v;
            this.marked[w] = true;
            //添加元素
            queue.push(w);
          }
        }
      }
    }
  },
  dfsManager(start, end) {
    let map = this.adj;
    var min = 9999,
      path = [],
      unvisited = [];
    for (let i = 0; i < 5; i++) {
      unvisited[i] = true;
    }

    (function dfs(map, start, end, step) {
      //unvisited[start] = false  //不重复访问最后的节点
      if (start === end) {
        console.log("step:", step);
        for (let i = 0; i < path.length; i++) {
          if (path[i] >= 0) {
            console.log(path[i] + "->");
          }
        }
        if (min > step) {
          min = step;
        }
        return;
      }
      unvisited[start] = false; //要重复访问最后的节点
      let len = map.length;

      for (let i = 0; i < len; i++) {
        if (map[start][i] === 1 && unvisited[i]) {
          path.push(i); //记录路径
          dfs(map, i, end, step + 1);
          path.pop(); //避免污染其他路径
        }
      }
    })(map, start, end, 0);

    return min;
  },
};

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);
console.log("g===", g);

console.log(g.dfsManager(1, 2));
