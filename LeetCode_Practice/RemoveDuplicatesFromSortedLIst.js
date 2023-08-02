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
var deleteDuplicates = function (head) {
    if (!head) return head
    let runner = head.next;
    let tracker = head;

    while (runner != null) {
        if (runner.val == tracker.val) {
            runner = runner.next
        } else {
            tracker.next = runner;
            tracker = runner;
            runner = runner.next;
        }
    }
    tracker.next = null
    return head
};

var deleteDuplicates = function (head) {
    // Special case...
    if (head == null || head.next == null)
        return head;
    // Initialize a pointer curr with the address of head node...
    let curr = head;
    // Traverse all element through a while loop if curr node and the next node of curr node are present...
    while (curr != null && curr.next != null) {
        // If the value of curr is equal to the value of prev...
        // It means the value is present in the linked list...
        if (curr.val == curr.next.val) {
            // Hence we do not need to include curr again in the linked list...
            // So we increment the value of curr...
            curr.next = curr.next.next;
        }
        // Otherwise, we increment the curr pointer...
        else {
            curr = curr.next;
        }
    }
    return head;        // Return the sorted linked list without any duplicate element...
};