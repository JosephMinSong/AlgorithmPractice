/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    if (matrix.length == 1 && matrix[0].length == 1) {
        return matrix[0][0] == target
    }

    const r = matrix.length;
    const c = matrix[0].length;

    let row = binarySearchRow(0, r - 1, matrix, target, c - 1);

    if (row == -1) {
        return false
    }

    return binarySearchCol(0, c - 1, matrix, target, row)
};

function binarySearchRow(lo, hi, matrix, target, c) {
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)

        if (matrix[mid][0] <= target && matrix[mid][c] >= target) {
            return mid
        }

        if (matrix[mid][0] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return -1
}

function binarySearchCol(lo, hi, matrix, target, row) {
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2)

        if (matrix[row][mid] == target) {
            return true
        }

        if (matrix[row][mid] > target) {
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }

    return false
}