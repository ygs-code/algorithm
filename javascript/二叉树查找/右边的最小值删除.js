/*
 * @Author: your name
 * @Date: 2021-10-09 14:24:29
 * @LastEditTime: 2021-10-20 09:45:10
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
  //先序遍历的代码如下：
  perOrder(node) {
    if (node) {
      console.log(node.show());
      this.perOrder(node.left);
      this.perOrder(node.right);
    }
  },
  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  },
  // 查找最小值
  getMin(node) {
    let currentNode = node || this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  },
  // 查找最大值
  getMax(node) {
    let currentNode = node || this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  },
  // 查询节点
  find(data, node) {
    let currentNode = node || this.root;
    while (currentNode) {
      if (currentNode.data == data) {
        break;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  },
  // 递归删除
  removeNode(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      // 没有子节点（子树）
      if (node.left == null && node.right == null) {
        node = null;
      } else if (node.left == null) {
        // 只有右子节点（子树）
        node = node.right;
      } else if (node.right == null) {
        // 只有左子节点（子树）
        node = node.left;
      } else {
        // 有两个子节点（子树）
        //如果待删除节点包含两个子节点， 正确的做法有两种：要么查找待删除节点左子树 上的最大值， 要么查找其右子树上的最小值
        // 找到右边的最小left节点
        var nodeData = this.getMin(node.right);
        node.data = nodeData; // 替换值
        //删除最小节点删除原来替换的node,  node.right 没有改变
        node.right = this.removeNode(node.right, nodeData);
      }
    } else if (data < node.data) {
      // 如果小于 则是左边节点
      node.left = this.removeNode(node.left, data);
    } else {
      // 右边节点
      node.right = this.removeNode(node.right, data);
    }
    return node;
  },
};

let bst = new BST();

var nums = [8, 4, 2, 7, 87, 23, 56, 21, 100, 90, 95, 110, 88, 89];
for (var i = 0; i < nums.length; i++) {
  bst.insert(nums[i]);
}

console.log("bst1=", bst);
console.log(bst.removeNode(bst.root, 4));
console.log("bst2=", bst);
