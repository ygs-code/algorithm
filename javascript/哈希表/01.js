/**
 * 哈希表 链地址法
 */
function HashTable() {
  this.storage = []; // 存放元素
  this.count = 0; // 存放的元素个数
  this.limit = 7; // 哈希表的长度 尽量为质数

  /**
   * 哈希函数
   * 作用：返回key在哈希表的中的下标位置
   * 参数：key（String） size(哈希表长度)
   */
  HashTable.prototype.hashFunc = function (key, size) {
    // 1.定义hashCode变量
    var hashCode = 0;

    // 2.霍纳法则计算hashCode的值
    for (var i = 0; i < key.length; i++) {
      var zishu = 37; // 赋值成质数
      //返回字符串第一个字符的 Unicode 编码(H 的 Unicode 值):
      hashCode = hashCode * zishu + key.charCodeAt(i);
    }

    // 3.取余操作
    var index = hashCode % size;
    console.log("index===========", index);
    return index;
  };

  /**
   * 作用：添加或者修改操作
   * 参数：key（String） value(Any)
   */
  HashTable.prototype.push = function (key, value) {
    // 1.根据key获取index
    var index = this.hashFunc(key, this.limit);

    // 2.根据index获取bukcet
    var bucket = this.storage[index]; // bucket 代表存储相同key的桶

    // 3.判断bucket是否存在,如果不存在 则赋值为[]
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4.判断bucket里面的tuple是修改还是添加
    for (var i = 0; i < bucket.length; i++) {
      var temp = bucket[i];
      if (temp[0] == key) {
        temp[1] = value;
        return; // 这里判断为修改 直接结束该方法
      }
    }
    bucket.push([key, value]); // 添加

    // 5.当前哈希表元素个数+1
    this.count++;

    // 6.判断是否需要扩容
    var loadFactor = this.count / this.limit;
    console.log("this.count=", this.count);
    console.log("this.limit=", this.limit);
    console.log("loadFactor=", loadFactor);
    if (loadFactor > 0.75) {
      var newLimit = this.limit * 2;
      while (!this.isPrime(newLimit)) {
        newLimit++;
      }
      this.reSize(newLimit);
    }
  };
  /**
   * 作用：根据key获取value
   * 参数: key(String)
   * 返回：找的到返回value 找不到返回null
   */
  HashTable.prototype.get = function (key) {
    //1.根据key获取index
    var index = this.hashFunc(key, this.limit);

    //2.根据index获取bucket(array)
    var bucket = this.storage[index];

    //3.判断bucket是否存在
    if (bucket == null) {
      return null;
    }

    //4.根据key从bucket中获取tuple(数组)
    var tuple = [];
    for (var i = 0; i < bucket.length; i++) {
      tuple = bucket[i];
      if (tuple[0] == key) {
        break;
      }
    }

    //5.根据tuple返回结果
    return tuple.length == 0 ? null : tuple[1];
  };

  /**
   * 作用：根据key删除一个truple(array)
   * 参数: key(String)
   * 返回: 删除的元素的value
   */
  HashTable.prototype.remove = function (key) {
    // 1.根据key找到index
    var index = this.hashFunc(key, this.limit);

    // 2.根据index获取bucket
    var bucket = this.storage[index];

    // 3.判断bucket是否存在
    if (bucket == null) return;

    // 4.根据key从bucket中删除tuple(数组)
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        // delete tuple;     // 这种可行否？ 不行，delete 只对对象的属性有效
        bucket.splice(i, 1);
        break;
      }
    }
    // 5.哈希表长度-1
    this.count--;

    // 6.判断是否需要缩容
    var loadFactor = this.count / this.limit;
    if (loadFactor < 0.25 && this.limit < 7) {
      var newLimit = parseInt(Math.floor(limit / 2));
      while (!this.isPrime(newLimit)) {
        newLimit++;
      }
      this.reSize(newLimit);
    }

    return tuple[1];
  };

  /**
   * 判断哈希表是否为空
   */
  HashTable.prototype.isEmpty = function () {
    return this.count == 0 ? true : false;
  };
  /**
   * 判断哈希表元素的个数
   */
  HashTable.prototype.size = function () {
    return this.count;
  };

  /**
   * 哈希表扩容
   * 参数limit哈希表新的长度。
   */
  HashTable.prototype.reSize = function (limit) {
    //1.创建oldStorage指向当前storage
    var oldStorage = this.storage;
    //2.重置当前链表属性
    this.storage = [];
    this.limit = limit;
    this.count = 0;
    //3.逐个赋值
    for (var i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i];
      if (bucket == null) {
        continue;
      }
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        this.push(tuple[0], tuple[1]);
        console.log("reSize=", this);
      }
    }
  };

  /**
   * 判断是否为质数
   * 参数num
   */
  HashTable.prototype.isPrime = function (num) {
    var temp = parseInt(Math.sqrt(num));

    for (var i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };

  /**
   * 打印哈希表
   */
  HashTable.prototype.toString = function () {
    for (const key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        let bucket = this.storage[key];
        let str = "";
        for (const key1 in bucket) {
          if (bucket.hasOwnProperty(key1)) {
            let tuple = bucket[key1];
            str = str + " " + tuple[1];
          }
        }
        console.log(str);
      }
    }
  };
}

var hash = new HashTable();

hash.push("我", "wo");
hash.push("是", "shi");
hash.push("你", "ni");
hash.push("你3", "ni1");
hash.push("你1", "ni2");
hash.push("你3", "ni3");
hash.push("你5", "ni5");
hash.push("你6", "ni6");
hash.push("你8", "ni8");
hash.push("你9", "ni9");
hash.push("你01", "ni10");
hash.push("你1", "ni8");
hash.push("你3", "ni9");
hash.push("你9", "ni10");
hash.push("1", "ni10");
hash.push("2", "ni10");
hash.push("3", "ni10");
hash.push("4", "ni10");
hash.push("5", "ni10");
hash.push("6", "ni10");
hash.push("7", "ni10");
hash.push("8", "ni10");
hash.push("9", "ni10");
hash.push("10", "ni10");
hash.push("11", "ni10");
hash.push("12", "ni10");

hash.toString();
console.log("------------------------------------");
// hash.remove("是");
hash.toString();

console.log(hash);
