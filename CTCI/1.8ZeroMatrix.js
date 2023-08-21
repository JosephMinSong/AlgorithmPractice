// Write an algorithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0



const matrix = [
    [1, 2, 3, 4, 5],
    [0, 6, 7, 8, 9],
]

function ZeroMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let rowHash = {};
    let colHash = {};

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                rowHash[i] = true
                colHash[j] = true
            }
        }
    }

    for (let key in rowHash) {
        zeroRow(key, matrix)
    }

    for (let key in colHash) {
        zeroCol(key, matrix)
    }

    return matrix
}

function zeroRow(rowIndex, matrix) {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[rowIndex][i] = 0
    }
}

function zeroCol(colIndex, matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][colIndex] = 0
    }
}


console.log(ZeroMatrix(matrix))