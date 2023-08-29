/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let perimeter = 0
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {

                perimeter += searchPerimeter(i, j, grid, rows, cols);

            }
        }
    }

    return perimeter
};

function searchPerimeter(row, col, grid, rows, cols) {
    let ans = 0;

    let above = row - 1;
    let below = row + 1;
    let right = col + 1;
    let left = col - 1;

    if (above < 0 || grid[above][col] == 0) ans++
    if (below >= rows || grid[below][col] == 0) ans++
    if (right >= cols || grid[row][right] == 0) ans++
    if (left < 0 || grid[row][left] == 0) ans++

    return ans
}