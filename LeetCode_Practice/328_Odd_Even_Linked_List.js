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
var oddEvenList = function (head) {

    if (!head) return null

    let secondHead = head.next;

    let runner1 = head;
    let runner2 = secondHead;

    while (runner2 != null && runner2.next != null) {
        runner1.next = runner2.next;
        runner1 = runner1.next;
        runner2.next = runner1.next;
        runner2 = runner2.next
    }

    runner1.next = secondHead

    return head
};