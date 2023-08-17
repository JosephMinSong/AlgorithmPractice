/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == "1") {
                islands++
                dfs(i, j, rows, cols, grid)
            }
        }
    }

    return islands

};

function dfs(r, c, rows, cols, grid) {
    // base case
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == "0") {
        return
    }

    // mark sqaure as visited
    grid[r][c] = "0";

    // then keep going until we hit a base case
    dfs(r + 1, c, rows, cols, grid) // below
    dfs(r - 1, c, rows, cols, grid) // above
    dfs(r, c - 1, rows, cols, grid) // left
    dfs(r, c + 1, rows, cols, grid) // right
}
