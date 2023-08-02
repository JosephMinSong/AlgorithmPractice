/* Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node. */

var middleNode = function(head) {
    let slow_runner = head
    let fast_runner = head
    while (fast_runner != 0 || fast_runner.next != null){
        slow_runner = this.next
        fast_runner = this.next.next
    }
    return slow_runner
};