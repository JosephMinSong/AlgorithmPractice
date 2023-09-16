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