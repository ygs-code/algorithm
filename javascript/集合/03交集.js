// 封装集合类
let Set = (function() {
    function Set() {
        this.items = {}
    }

    // 方法
    Set.prototype = {
        //添加元素
        add(value) {
            //包含集合元素
            if (this.has(value)) {
                return false
            }
            this.items[value] = value
            return true
        },
        //判断集合是否存在
        has(key) {
            return key in this.items && this.items.hasOwnProperty(key);
        },
        // 判断集合的长度
        size() {
            return Object.keys(this.items).length
        },
        //获取集合中所有值
        values() {
            return Object.keys(this.items)
        },
        // 删除
        clear() {
            this.items = {}
        },
        // 并集
        union(otherSet) {
            // this.集合a
            // otherSet 集合B
            //创建集合a
            var unionSet = new Set()
                // 将集合a 所有元素添加到新的集合中
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                //把a的集合添加进去
                unionSet.add(values[i])
            }

            // 3.取出B集合中元素，判断是否需要添加到新集合
            values = otherSet.values();
            for (var i = 0; i < values.length; i++) {
                // 把b的集合添加到里面
                unionSet.add(values[i])
            }

            return unionSet;
        },
        // 交集
        intersection(otherSet) {
            var intersectionSet = new Set();
            var values = this.values();
            for (let item of values) {
                if (otherSet.has(item)) {
                    intersectionSet.add(item)
                }
            }
            return intersectionSet
        }
    }
    return Set;
})()



console.log(Set)

let A = new Set();
A.add(1)
A.add(2)
A.add(3)

let B = new Set()

B.add(2)
B.add(3)
B.add(4)
B.add(5)
B.add(6)

console.log(A.union(B).values())
console.log(A.intersection(B).values())