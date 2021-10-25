/*
 列表是一组有序的数据。
 每个列表中的数据项称为元素。在 JavaScript 中，
 列表中的元素 可以是任意数据类型。列表中可以保存多少元素并没有事先限定，
 实际使用时元素的数量 受到程序内存的限制。
 */
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; //初始化一个空数组来保存列表元素
}

List.prototype = {
  //末端插入元素
  append(element) {
    this.dataStore[this.listSize] = element;
    this.listSize++;
  },
  // 中间插入元素根据值插入
  insert(element, after) {
    var insertPos = this.findIndx(after);
    if (insertPos > -1) {
      this.dataStore.splice(after, 0, element);
      this.listSize++;
      //移动索引
      if (this.pos >= insertPos) {
        this.next();
      }
      return true;
    }
    return false;
  },
  //   find:判断给定值是否在列表中
  find(element) {
    for (let index = 0; index < this.dataStore.length; index++) {
      if (this.dataStore[index] == element) {
        return element;
      }
    }
    return null;
  },
  // 查找元素所在位置
  findIndx(element) {
    for (let index = 0; index < this.dataStore.length; index++) {
      if (this.dataStore[index] == element) {
        return index;
      }
    }
    return -1;
  },
  // 删除元素
  remove(element) {
    let index = this.findIndx(element);
    if (index != -1) {
      this.dataStore.splice(index, 1);
      this.listSize--;
      //移动索引
      if (this.pos >= index) {
        this.prev();
      }
    }
  },
  // 获取元素长度
  length() {
    return this.listSize;
  },
  // 获取列表
  toString() {
    return this.dataStore;
  },
  // 清理所有元素
  clear() {
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
  },
  // pos 是当前索引的位置
  front() {
    this.pos = 0;
    return this.pos;
  },
  //把指针指向末端
  end() {
    this.pos = this.listSize - 1;
  },
  // 指针指向上一个
  prev() {
    if (this.pos > 0) {
      this.pos--;
    }
  },
  // 指针指向下一个
  next() {
    if (this.pos < this.listSize) {
      this.pos++;
    }
  },
  // 获取当前指针
  currPos() {
    return this.pos;
  },
  // 移动指针
  moveTo(prosition) {
    this.pos = prosition;
  },
  //   获取当前元素
  getElement() {
    return this.dataStore[this.pos];
  },
  // 循环
  forEach(callback) {
    for (this.front(); this.currPos() < this.length(); this.next()) {
      callback && callback(this.getElement(), this.pos);
    }
  },
};

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.forEach((targe, index) => {
  console.log("targe=", targe);
  console.log("index=", index);
});
