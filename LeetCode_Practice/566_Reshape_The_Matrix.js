/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    let m = mat.length;
    let n = mat[0].length;

    if (m * n != r * c) return mat;

    let ans = [];

    let newRow = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            newRow.push(mat[i][j])
            if (newRow.length == c) {
                ans.push(newRow);
                newRow = [];
            }
        }
    }

    return ans
};