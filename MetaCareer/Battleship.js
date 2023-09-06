
/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
    let shipCount = 0
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (G[i][j] == 1) {
                shipCount++
            }
        }
    }
    return shipCount / (R * C);
}
