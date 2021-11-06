function Node(key, data) {
    this.key = key
    this.next = null
    this.data = data;
}

function LinkedList(data) {
    // 头部
    this.head = new Node('head', data);
    this.next = null;
    this.lastKey = 'head'
    this.lastNode = this.head
    this.length = 1
}
LinkedList.prototype = {
    // 尾部插入
    push(newKey, data) {
        this.insert(this.lastKey, newKey, data)
    },
    //尾部删除
    pop() {
        this.remove(this.lastKey)
    },
    //中间插入
    insert(previousKey, newKey, data) {
        const currentNode = this.findNode(previousKey)
        const newNode = new Node(newKey, data)
        newNode.next = currentNode.next
        currentNode.next = newNode
        this.lastKey = newKey;
        this.length += 1
    },
    // 找到当前的node
    findNode(key) {
        let currentNode = this.head;
        do {
            if (currentNode.key == key) {
                return currentNode
            }
            currentNode = currentNode.next
        } while (currentNode)
        return currentNode
    },
    //找到上一个node
    findPrevious(key) {
        let currentNode = this.head;
        do {
            if (currentNode && currentNode.next && currentNode.next.key == key) {
                return currentNode
            }
            currentNode = currentNode.next
        } while (currentNode)
        return currentNode
    },
    // 删除
    remove(key) {
        const findPreviousNode = this.findPrevious(key);
        if (findPreviousNode && findPreviousNode.next && findPreviousNode.next.next) {
            findPreviousNode.next = findPreviousNode.next.next;
            this.length -= 1
        } else if (findPreviousNode && findPreviousNode.next && !findPreviousNode.next.next) {
            findPreviousNode.next = null
            this.lastKey = findPreviousNode.key
            this.length -= 1
        }
    },
    // 链表变数组
    toArray() {
        let arr = [];
        let crrentNode = this.head;
        do {
            arr.push(crrentNode.data)
            crrentNode = crrentNode.next
        } while (crrentNode)
        return arr
    },
    // 数组变链表
    toLinked(arr, key) {
        this.head.data = arr[0]
        for (let index = 1; index < arr.length; index++) {
            this.push(arr[index][key], arr[index])
        }
    }
}

let A = new LinkedList({ name: '0', id: '0' })
A.insert('head', 1, { name: '1', id: '1' })
A.insert('1', 2, { name: '2', id: '2' })
A.push(3, { name: '3', id: '3' })
A.push(4, { name: '4', id: '4' })
A.remove(2)
A.pop()
A.toArray()
console.log(A)
console.log(A.toArray())

let arr = [
    { name: "0", id: "0" },
    { name: "1", id: "1" },
    { name: "3", id: "3" },
    { name: "4", id: "4" },
    { name: "5", id: "5" },
    { name: "6", id: "6" },
]
let B = new LinkedList({ name: '0', id: '0' })
B.toLinked(arr, 'id')
console.log('b=', B)