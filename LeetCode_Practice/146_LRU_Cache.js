/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = {}
        this.queue = new LinkedList()
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // first in, first out methodology == queue
    // but if we use it, then that gets put to the back
    // if key exists, we store it as recently used, meaning we put it to the back

    if (this.map[key]) {
        const currentNode = this.map[key]
        // move the node to the back
        this.queue.moveToBack(currentNode);
        return currentNode.value // returns the value
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
    // if at capacity, get rid of front of queue and then add node to back of queue and to map
    if (!this.map[key]) { // if it doesn't exist 
        if (this.queue.length >= this.capacity) { // and we are at capacity - we must remove the LRU
            let removedNode = this.queue.removeFront()
            delete this.map[removedNode.key]
        }
        const newNode = new Node(key, value)
        this.map[key] = newNode
        this.queue.addToBack(newNode)
        return
    } else { // if we do have it in our map
        let updatedNode = this.map[key]
        updatedNode.value = value; // update the value in our map
        this.queue.moveToBack(updatedNode)
        return
    }
};

// doubly linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToBack(node) {
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
            this.length++
            return this
        } else {
            this.tail.next = node; // set the tails' next to the new node
            node.prev = this.tail; // set the new nodes prev to the tail (previously last one)
            this.tail = node // set the new tail to the new node
            this.length++
            return this
        }
    }

    moveToBack(node) {
        if (this.length == 1 || this.length == 0 || this.tail == node) {
            return
        } else {
            if (!node.prev) {
                // meaning this is the head
                this.head = node.next; // new head is the next one
            } else {
                // if we're somewhere in the middle
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }
            this.tail.next = node; // put this at the back
            node.prev = this.tail; // set the prev to the tail
            node.next = null; // set the new next to null
            this.tail = node; // set the new tail to the node
            return
        }
    }

    removeFront() {
        if (this.length == 0) {
            return
        }
        let removedNode = this.head; // store it temporarily to return it
        this.head = removedNode.next; // move the head up one spot
        removedNode.next = null; // remove the pointer from the previous head
        if (this.head) {
            this.head.prev = null; // set the new head's previous to null to get rid of the pointer
        }
        this.length--
        return removedNode
    }

    printList() {
        let runner = this.head;
        let count = 1
        console.log("Printing the new list!")
        while (runner != null) {
            console.log(count + " " + runner.key + " " + runner.value)
            runner = runner.next
        }
        return
    }
}

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

