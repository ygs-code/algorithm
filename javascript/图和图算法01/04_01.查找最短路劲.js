/*
 * @Author: your name
 * @Date: 2021-10-25 11:11:37
 * @LastEditTime: 2021-10-25 12:25:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/javascript/图和图算法/04.查找最短路劲.js
 */
//地图实现
class Map {
  constructor(cities) {
    this.cities = cities; //保存所有城市
    this.road = {}; //保存所有城市道路
    this.res = []; //最短路径结果
    this.hasRes = false; //是否至少有一个可以到达的路径
  }
  addRoad(v, w) {
    //这里实现道路是否双向，如果只是单向，只需一个_addRoad操作。
    this._addRoad(v, w);
    this._addRoad(w, v);
  }
  _addRoad(v, w) {
    !this.road[v] && (this.road[v] = []);
    if (!this.road[v].includes(w)) {
      this.road[v].push(w);
    }
  }
  minPath(v, w) {
    this.res = [];
    this.hasRes = false;
    this.step(this.road[v], [v], w);
    return this.res;
  }
  step(adjacentcities, tempRes, w) {
    //当前城市没有相邻城市
    if (!adjacentcities) {
      return;
    }
    //存在可以到达的路径，并且比正在探测的路径短则直接退出探测
    if (this.hasRes && this.res.length < tempRes.length) {
      return;
    }
    adjacentcities.forEach((item) => {
      //当前探测的城市已经走过了，不再重复走
      if (tempRes.indexOf(item) !== -1) {
        return;
      }
      //添加到临时结果里
      let newTempRes = tempRes.concat(item);
      //到达终点
      if (item === w) {
        if (this.hasRes) {
          if (newTempRes.length < this.res.length) {
            //已有最短路径，且比当前路径更短，替换
            this.res = newTempRes;
          }
        } else {
          //目前没有最短路径，替换
          this.res = newTempRes;
          this.hasRes = true;
        }
      } else {
        //递归遍历
        this.step(this.road[item], newTempRes, w);
      }
    });
  }
}
//初始化一个地图对像，传入城市列表。
let map = new Map(["1", "2", "3", "4"]);
//添加城市之间的道路
map.addRoad("1", "2");
map.addRoad("1", "4");
map.addRoad("3", "4");
//获取两城市之间的最短路径。
console.log(map.minPath("1", "3"));
