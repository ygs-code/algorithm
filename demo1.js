/*
 * @Author: your name
 * @Date: 2021-11-01 10:32:39
 * @LastEditTime: 2021-11-05 16:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/demo.js
 */

var tree = [
  {
    id: "1",
    title: "菜单1",
    selected: true,
    children: [
      {
        id: "1-1",
        title: "菜单1-1",
        selected: true,
        children: [
          {
            id: "1-1-1",
            title: "菜单1-1-1",
            selected: true,
            children: [],
          },
        ],
      },
      {
        id: "1-2",
        title: "菜单1-2",
        selected: true,
        children: [],
      },
      {
        id: "1-3",
        title: "菜单1-3",
        selected: true,
        children: [],
      },
      {
        id: "1-4",
        title: "菜单1-4",
        selected: true,
        children: [
          {
            id: "1-4-1",
            title: "菜单1-4-1",
            selected: true,
            children: [],
          },
          {
            id: "1-4-2",
            title: "菜单1-4-2",
            selected: true,
            children: [],
          },
          {
            id: "1-4-3",
            title: "菜单1-4-3",
            selected: false,
            children: [],
          },
        ],
      },
    ],
  },
];

function checkChildSelect(arr) {
  return arr.every((item) => {
    return item.selected;
  });
}

function checkSelect(arr, listArr = []) {
  return arr.map((item) => {
    const { children = [], selected, id } = item;
    const newChild = checkSelect(children,listArr);
    const newSelected = newChild.length ? checkChildSelect(newChild) : selected;
    newSelected && listArr.push(id);
    return {
      ...item,
      children: newChild,
      selected: newSelected,
    };
  });
}
let listKey=[]
console.log(checkSelect(tree,listKey));
console.log('listKey=',listKey);
