
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