
/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
    // Write your code here
    let ans = 0;
    let queue = new LinkedList; // to keep track of first in, first out dish. If we eat a new dish, we remove the first node.
    let map = {}; // to keep track of what dishes we've eaten. If we eat a new dish, we pop the beginning of our queue and remove it from map
    for (let i = 0; i < D.length; i++) {
        // check if we can eat it
        // if our map does not have it or it's been reset to 0, we can eat and then add to our queue
        if (!map[D[i]] || map[D[i]] == 0) {
            map[D[i]] = 1 // add it to our hash now
            ans++ // increase our ans

            // then we add it to our queue
            let newItem = new Node(D[i]);
            queue.addItem(newItem);

            // if by adding the new item, we go over the K value, we can remove the first one that we saw
            if (queue.length > K) {
                let removed = queue.removeFirst();
                let dish = removed.value
                // then we remove it from our hash so that we can eat it again
                map[dish] = 0
            }
        }
    }
    return ans;
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    addItem(newItem) {
        if (this.length === 0) {
            this.head = newItem
            this.tail = newItem
        } else {
            this.tail.next = newItem;
            this.tail = newItem
        }
        this.length++
    }

    removeFirst() {
        let removed = this.head;
        this.head = this.head.next;
        this.length--
        return removed
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}