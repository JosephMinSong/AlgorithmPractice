/* Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function (numRows) {
    if (numRows < 2) return [[1]]
    let count = 1;
    let result = [[1], [1, 1]];

    while (count < numRows - 1) {
        let newRow = [1]
        for (let i = 0; i < result[count].length - 1; i++) {
            const num = result[count][i] + result[count][i + 1]
            newRow.push(num);
        }
        newRow.push(1);
        result.push(newRow);
        count++;
    }
    return result
};