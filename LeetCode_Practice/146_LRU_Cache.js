/**
 * @param {number} capacity
 */

// Classes to use
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
        this.head = new Node(-1, -1); // this way we can implement our remove function better
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0;
    }

    // Node(-1, -1) <--> newNode <--> Node(-1, -1)

    add(key, value) {
        const newNode = new Node(key, value);
        const prevTail = this.tail.prev;
        prevTail.next = newNode; // the previous tails next is now the new node
        newNode.prev = prevTail; // the new nodes previous was the previous tail
        newNode.next = this.tail; // the new nodes next is the tail (-1, -1) node
        this.tail.prev = newNode; // the tail node's previous is the new node
        this.length++
        return this
    }

    remove(node) {

    }
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = {};
    this.queue = new LinkedList()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // first check if we're at capacity, if we're not, simply add the key value pair into our map and add it to the back of the queue
    // if we're at capacity, then remove the first item from the queue, then remove that key from the map
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */