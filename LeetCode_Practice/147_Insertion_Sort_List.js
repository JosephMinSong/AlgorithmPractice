/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToFront(node) {
        let oldHead = this.head;
        this.head = node
        node.next = oldHead
        return this
    }

    add(node) {
        let runner = this.head;

        // if the first node val is less than our node val
        // or if the list is empty
        // add to the front of the list
        if (runner == null || node.val < runner.val) {
            this.addToFront(node)
            return this
        }

        while (runner.next != null && runner.next.val < node.val) {
            // this will stop when the next node val is bigger than our node val or we have reached the end
            runner = runner.next
        }

        // add the new node into the list
        let nextNode = runner.next
        runner.next = node
        node.next = nextNode

        return this
    }
}

var insertionSortList = function (head) {
    let runner = head;
    const sortedList = new LinkedList()

    while (runner) {
        const nextNode = runner.next
        runner.next = null;
        sortedList.add(runner)

        runner = nextNode
    }

    return sortedList.head
};