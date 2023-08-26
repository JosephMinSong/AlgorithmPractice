/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++){
        let newRow = [];
        for(let j = 0; j < matrix.length; j++){
            newRow.push(matrix[j][i])
        }
        result.push(newRow)
    }
    return result
};

// 0, 0 -> 1, 0
// 0, 1 -> 1, 1
// 0, 2 -> 1, 2