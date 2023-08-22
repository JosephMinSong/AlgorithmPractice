// Implement an algorithm to find the kth to last element of a singly linked list

function returnKthToLast(head, k) {
    let count = 0;
    let runner = head;

    while (runner != null) {
        count++
        runner = runner.next
    }

    runner = head;
    let i = 0;
    let kth = count - k

    while (runner != null) {
        i++

        if (i == kth) {
            return runner
        }

        runner = runner.next
    }
}


function betterReturnKthToLast(head, k) {
    let runner1 = head;
    let runner2 = head;

    for (let i = 0; i < k; i++) {
        runner1 = runner1.next
    }

    while (runner1 != null) {
        runner1 = runner1.next;
        runner2 = runner2.next;
    }

    return runner2
}