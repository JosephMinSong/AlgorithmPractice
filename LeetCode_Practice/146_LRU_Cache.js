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

    add(newNode) {
        const prevTail = this.tail.prev;
        prevTail.next = newNode; // the previous tails next is now the new node
        newNode.prev = prevTail; // the new nodes previous was the previous tail
        newNode.next = this.tail; // the new nodes next is the tail (-1, -1) node
        this.tail.prev = newNode; // the tail node's previous is the new node
        this.length++
        return this
    }

    // Remove any node from our list
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--
        return node
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
    // check our map to see if we have the key
    if (this.map[key]) {
        const node = this.map[key]
        this.queue.remove(node); // move it to the back since we used it
        this.queue.add(node);
        return node.value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // first check if we're at capacity, if we're not, simply add the key value pair into our map and add it to the back of the queue
    // if we're at capacity, then remove the first item from the queue, then remove that key from the map

    // check to see if we already have this in our map
    if (this.map[key]) {
        // we can just remove it and put it in the back
        this.queue.remove(this.map[key]) // remove the node from the queue
        let newNode = new Node(key, value) // add the new node to the queue
        this.queue.add(newNode);
        this.map[key] = newNode; // update the map
        return // break
    }

    // check to see if we are at capacity
    // if we are, then we have to delete the first item in our queue
    if (this.queue.length == this.capacity) {
        let firstNode = this.queue.head.next;
        this.queue.remove(firstNode)
        delete this.map[firstNode.key]
    }

    // add the new node to the queue and map
    let newNode = new Node(key, value);
    this.queue.add(newNode)
    this.map[key] = newNode;
    return
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */