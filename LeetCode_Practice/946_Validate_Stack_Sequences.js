/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let poppedPointer = 0

    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])

        while (true) {
            let stackPointer = stack.length - 1
            if (stackPointer >= 0 && stack[stackPointer] == popped[poppedPointer]) {
                stack.pop()
                poppedPointer++
                stackPointer--
            } else {
                break
            }
        }
    }

    return stack.length ? false : true
};

/*

    add elements from pushed into stack
    if the element we pushed matches where we are at popped, 
        - enter while loop to keep popping until they don't match

    if at the end, stack is emtpy, return true - else, return false

*/
