
class Bucket {
    constructor() {
        this.bucket = []
    }

    put(key, value) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i][0] == key) {
                // instead of adding the new key, value pair, update it
                this.bucket[i] = [key, value]
                return
            }
        }

        // if we didn't find it and return early, we don't have this key
        this.bucket.push([key, value])
        return
    }

    get(key) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i][0] == key) {
                return this.bucket[i][1]
            }
        }

        return -1
    }

    remove(key) {
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i][0] == key) {
                this.bucket.splice(i, 1)
                return
            }
        }

        return
    }
}

var MyHashMap = function () {
    this.space = 1999;
    this.map = new Array(this.space).fill(new Bucket())
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const index = key % this.space;
    this.map[index].put(key, value)
    return null
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const index = key % this.space;
    return this.map[index].get(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const index = key % this.space;
    this.map[index].remove(key)
    return null
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */


class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    put(key, value) {
        let runner = this.head.next;

        if (runner == this.tail) {
            const newNode = new Node(key, value);
            this.head.next = newNode;
            this.tail.prev = newNode;
            newNode.next = this.tail;
            newNode.prev = this.head;
            return
        }

        while (runner) {
            if (runner.key == key) {
                runner.value = value
                return
            }

            runner = runner.next
        }

        const newNode = new Node(key, value);
        const prev = this.tail.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = this.tail;
        this.tail.prev = newNode;
        return
    }

    get(key) {
        let runner = this.head.next;
        while (runner) {
            if (runner.key == key) {
                return runner.value
            }

            runner = runner.next
        }

        return -1
    }

    remove(key) {
        let runner = this.head.next;
        while (runner) {
            if (runner.key == key) {
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                return
            }

            runner = runner.next
        }

        return
    }
}

var MyHashMap = function () {
    this.space = 1999;
    this.map = new Array(this.space).fill(new LinkedList())
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    const index = key % this.space;
    this.map[index].put(key, value)
    return null
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    const index = key % this.space;
    return this.map[index].get(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    const index = key % this.space;
    this.map[index].remove(key)
    return null
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */