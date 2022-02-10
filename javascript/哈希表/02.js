/*
 哈希函数数据结构是一个二维散列数组数据存储的

*/

function HashTable() {
  this.storage = [];
  this.count = 0;
  this.limit = 7;
  HashTable.prototype.hashFunc = function (str, size) {
    //1.定义hashCode变量
    var hashCode = 0;
    //2.根据霍纳算法,计算hashCode的值
    //借助Unicode编码计算
    for (var i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    //3.取余操作 5%4=1
    var index = hashCode % size;
    return index;
  };

  HashTable.prototype.put = function (key, value) {
    //1.根据key获取对应的index
    var index = this.hashFunc(key, this.limit);
    console.log('index====',index)

    //2.根据index取得对应的bucket(bucket是key的hashCode对应下表位置，)
    var bucket = this.storage[index];
    //3.判断当前bucket是否为空
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    //4.判断是否修改数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        tuple[1] = value;
        return;
      }
    }

    //5.当前bucket(链表)中没有该数据,就直接添加该数据
    bucket.push([key, value]);
    this.count += 1;
  };

  //get获取元素
  HashTable.prototype.get = function (key) {
    /**
     *1.根据key,获得index;
     * 2.根据index,获得bucket;
     * 3.判断bucket是否为null,为null就直接返回null
     * 4.bucket不为null，则遍历找到对应的key
     * 5.遍历完后，没有找到对应的key，就返回null
     **/
    var index = this.hashFunc(key, this.limit);
    var bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        return tuple[1];
      }
    }
    //在index对应的bucket（不为null）中没有找到对应的key
    return null;
  };

  //remove方法
  HashTable.prototype.remove = function (key) {
    var index = this.hashFunc(key, this.limit);
    var bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] == key) {
        bucket.splice(i, 1); //删除当前位置的元素https://wangdoc.com/javascript/stdlib/array.html#splice
        this.count--;
        return tuple[1];
      }
    }

    return null;
  };

  HashTable.prototype.isEmpty = function () {
    return this.count == 0;
  };
  HashTable.prototype.size = function () {
    return this.count;
  };
}

var ht = new HashTable();

ht.put("abc", "123");
ht.put("abd", "456");
ht.put("cbd", "789");
ht.put("aee", "235");

// console.log(ht.get("abc"));

ht.put("abc", "111");
ht.put("aetr", "3145678956781");
// console.log(ht.get("abc"));

// ht.remove("abc");
// console.log(ht.get("abc"));
console.log(ht);