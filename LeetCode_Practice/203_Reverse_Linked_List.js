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
var reverseList = function (head) {

    if (!head) return null
    if (!head.next) return head

    let previous = null;
    let runner = head;
    let newHead = null;

    while (runner != null) {
        let next = runner.next;
        if (!next) newHead = runner
        runner.next = previous;
        previous = runner
        runner = next
    }

    return newHead
};

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

var reverseList = function (head) {

    if (!head) return null
    if (!head.next) return head

    let runner = head;
    let prev = null;

    while (runner) {
        const next = runner.next;
        runner.next = prev;
        prev = runner;
        runner = next;
    }

    return prev
};