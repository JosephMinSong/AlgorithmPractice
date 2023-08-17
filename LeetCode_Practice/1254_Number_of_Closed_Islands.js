/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let islands = 0;

    // search area
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (grid[i][j] == "0") {
                if (dfs(i, j, rows, cols, grid)) {
                    islands++
                }
            }
        }
    }

    return islands
};

function dfs(r, c, rows, cols, grid) {
    // base case
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
        return false
    }

    if (grid[r][c] == "visited" || grid[r][c] == "1") {
        return true
    }

    let isClosed = true

    grid[r][c] = "visited"

    let dirX = [1, -1, 0, 0]
    let dirY = [0, 0, 1, -1]

    for (let i = 0; i < dirX.length; i++) {
        const x = r + dirX[i];
        const y = c + dirY[i]

        if (!dfs(x, y, rows, cols, grid)) {
            isClosed = false
        }
    }

    return isClosed
}

/*

[0, 1, 1, 1, 0]
[1, 0, 1, 0, 1]
[1, 0, 1, 0, 1]
[1, 0, 0, 0, 1]
[0, 1, 1, 1, 0]

*/
