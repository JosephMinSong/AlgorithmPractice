/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let visit = new Array(isConnected.length).fill(false);
    let provinces = 0;

    for (let i = 0; i < visit.length; i++) {
        if (visit[i] == false) {
            provinces++
            dfs(i, isConnected, visit)
        }
    }

    return provinces
};

function dfs(i, isConnected, visit) { // i = 0
    if (visit[i] == true) return

    visit[i] = true

    for (let j = 0; j < isConnected.length; j++) {
        if (isConnected[i][j] == 1 && visit[j] == false) {
            dfs(j, isConnected, visit)
        }
    }
};
