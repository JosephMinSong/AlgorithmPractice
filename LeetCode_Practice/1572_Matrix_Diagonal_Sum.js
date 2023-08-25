/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let top = 0;
    let left = 0;
    let right = mat.length - 1;
    let sum = 0;

    while (top < mat.length) {
        sum += mat[top][left]
        mat[top][left] = 0

        sum += mat[top][right]
        mat[top][right] = 0

        top++
        left++
        right--
    }

    return sum

};