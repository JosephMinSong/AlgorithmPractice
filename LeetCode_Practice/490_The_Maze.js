/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
    const m = maze.length;
    const n = maze[0].length;
    const visit = [];

    // build a visit matrix that is a replica of maze
    // false means we have not visited it yet
    for (let i = 0; i < m; i++) {
        const newRow = [];
        for (let j = 0; j < n; j++) {
            newRow.push(false)
        }
        visit.push(newRow)
    }

    return dfs(m, n, start, destination, maze, visit)
};

function dfs(m, n, start, destination, maze, visit) {

    // m == maze.length
    // n == maze[i].length

    // base cases

    // if we have gotten to our destination, return true
    if (start[0] == destination[0] && start[1] == destination[1]) {
        return true
    }

    // if we've already visited this square, return false
    if (visit[start[0]][start[1]]) {
        return false
    }

    // set the visited square to true
    visit[start[0]][start[1]] = true

    // coordinates to move around the maze in
    // since we can only move in one direction before hitting a wall, we increment in one direction
    // i.e @ i = 1, we move up until we can't (+(0, 1))
    let dirX = [0, 1, 0, -1];
    let dirY = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {

        // set row and column variables starting at our coordinates
        // r = x axis
        // c = y axis
        let r = start[0];
        let c = start[1];


        // while we are inside the edges of the maze AND we have not hit a wall
        // keep going in the direction that we set out to
        while (r >= 0 && r < m && c >= 0 && c < n && maze[r][c] == 0) {
            r += dirX[i];
            c += dirY[i];
        }

        // take a step back and now see if we either already visited the square or if the square is our destination
        if (dfs(m, n, [r - dirX[i], c - dirY[i]], destination, maze, visit)) {
            return true
        }
    }

    // if we went through all the maze and still have not reached our destination, we return false
    return false
}