// 封装集合类
var Ste = (() => {
    function Set() {
        this.items = {}
    }

    // 方法
    Set.prototype = {
        //添加元素
        add(value) {
            //包含集合元素
            if (this.has(key)) {
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
    }
})()