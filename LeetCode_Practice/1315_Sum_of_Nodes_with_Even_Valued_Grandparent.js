/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

class Node {
    constructor(node) {
        this.node = node;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.length = 0
    }

    getFirst() {
        const oldHead = this.head.next;
        this.head.next = oldHead.next;
        oldHead.next.prev = this.head;
        this.length--
        return oldHead.node
    }

    add(node) {
        this.tail.prev.next = node;
        node.next = this.tail;
        this.tail.prev = node;
        this.length++
        return
    }
}

var sumEvenGrandparent = function (root) {
    let queue = new LinkedList()
    let ans = 0;
    queue.add(new Node(root))

    while (queue.length) {
        const currentNode = queue.getFirst();
        if (currentNode.val % 2 == 0) {
            if (currentNode.left) {
                ans += currentNode.left.left ? currentNode.left.left.val : 0;
                ans += currentNode.left.right ? currentNode.left.right.val : 0;
            }

            if (currentNode.right) {
                ans += currentNode.right.left ? currentNode.right.left.val : 0;
                ans += currentNode.right.right ? currentNode.right.right.val : 0;
            }
        }

        if (currentNode.left) {
            queue.add(new Node(currentNode.left))
        }

        if (currentNode.right) {
            queue.add(new Node(currentNode.right))
        }
    }

    return ans
};