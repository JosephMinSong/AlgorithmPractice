/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;

    let top = 0;
    let bottom = m - 1
    let left = 0;
    let right = n - 1

    while (result.length < m * n) {

        // start from left to right
        for (let i = left; i < right + 1; i++) {
            result.push(matrix[top][i])
        }

        // then go down the right hand side
        for (let j = top + 1; j < bottom; j++) {
            result.push(matrix[j][right])
        }

        // if the top line is not equal to the bottom, we are on a new line
        // go from right to left on the bottom line
        if (top != bottom) {
            for (let k = right; k >= left; k--) {
                result.push(matrix[bottom][k])
            }
        }

        // if the right line is not equal to the left, we are on a new line
        // go from the bottom to the top on the left side
        if (left != right) {
            for (let p = bottom - 1; p > top; p--) {
                result.push(matrix[p][left])
            }
        }

        // update our new boundries for the next iteration
        top++;
        bottom--;
        left++;
        right--;
    }

    return result
};