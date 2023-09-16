/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const arr = [];
    let runner = head;
    while (runner != null) {
        arr.push(runner.val)
        runner = runner.next
    }

    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        if (arr[lo] != arr[hi]) {
            return false
        } else {
            lo++
            hi--
        }
    }

    return true
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

//  1 --> 2 --> 3 --> 4 --> 5
//              S                    F

// 1 --> 2 <-- 3 <-- 4
//       S           F
var isPalindrome = function (head) {
    // fast and slow runner method
    // starting at the slow runner, we reverse the list in place, using the slow runner as the first "previous"

    let slow = head;
    let fast = head.next;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next
    }

    // now reverse the linked list in place
    let previous = null;
    let start = slow.next;
    while (start) {
        const nextUp = start.next;
        start.next = previous;
        previous = start
        start = nextUp
    }


    // start at both ends and see if they're matching
    let runner1 = head;
    let runner2 = previous;
    while (runner1 && runner2) {
        if (runner1.val != runner2.val) {
            return false
        } else {
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
    }

    return true

}