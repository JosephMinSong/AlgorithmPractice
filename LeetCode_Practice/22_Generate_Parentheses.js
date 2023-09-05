/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let stack = [];
    let ans = [];

    function backtrack(openN, closedN) {
        //base case
        if (openN == n && closedN == n) {
            const string = stack.join("")
            ans.push(string)
            return
        }

        if (openN < n) {
            stack.push("(")
            backtrack(openN + 1, closedN)
            stack.pop()
        }

        if (closedN < openN) {
            stack.push(")")
            backtrack(openN, closedN + 1)
            stack.pop()
        }
    }

    backtrack(0, 0)

    return ans

};