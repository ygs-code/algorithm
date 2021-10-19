/*
 * @Author: your name
 * @Date: 2021-10-09 14:24:29
 * @LastEditTime: 2021-10-19 14:22:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /算法/二叉树查找/非递归法.js
 */
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype = {
  show() {
    return this.data;
  },
};

function BST() {
  this.root = null;
}
BST.prototype = {
  insert(data) {
    let node = new Node(data, null, null);
    if (this.root == null) {
      // root 节点永远不被替换，替换的是left和right
      this.root = node;
    } else {
      //  获取root节点
      let currentNode = this.root;
      let parentNode;
      while (true) {
        //记录父节点
        parentNode = currentNode;
        if (data < currentNode.data) {
          // 替换当前节点，
          currentNode = currentNode.left;
          //如果左边是空则插入左边
          if (currentNode == null) {
            parentNode.left = node;
            break;
          }
        } else {
          // 替换当前节点，
          currentNode = currentNode.right;
          //如果右边是空则插入左边
          if (currentNode == null) {
            parentNode.right = node;
            break;
          }
        }
      }
    }
  },
  //中序遍历的代码如下：
  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  },
};

let bst = new BST();

var nums = [8, 4, 2, 7, 87, 23, 56,21,100,90,95,110,88,89];
for (var i = 0; i < nums.length; i++) {
  bst.insert(nums[i]);
}

console.log(bst);
bst.inOrder(bst.root);
