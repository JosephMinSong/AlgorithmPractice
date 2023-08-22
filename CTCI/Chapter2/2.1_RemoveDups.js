// Write code to remove duplicates from an unsorted linked list

// Follow up: how would you solve this problem if a temporary buffer is not allowed?

// 1 -> 3 -> 1 -> 5

function removeDupes(head) {
    let hash = {};
    let runner = head;
    let prev = null;

    while (runner != null) {
        if (hash.hasOwnProperty(runner.val)) {
            prev.next = runner.next
        } else {
            hash[runner.val] = true
            prev = runner
        }

        runner = runner.next
    }

    return head
}

// temporary buffer is not allowed 
// O(1) space, O(N^2) runtime

function removeDupes2(head) {
    let runner = head;

    while (runner != null) {
        let sprinter = runner.next
        let prev = runner
        let target = runner.val
        while (sprinter != null) {
            if (sprinter.val == target) {
                prev.next = sprinter.next
            } else {
                prev = sprinter
            }

            sprinter = sprinter.next
        }
    }

    return head
}