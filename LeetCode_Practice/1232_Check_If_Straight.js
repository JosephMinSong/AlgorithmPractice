/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    // calculate slope because slope will be the same between any two points
    // go through coordinates to see if slope is the same throughout the coordinates

    // edge cases
    // if there are only two points, it's always going to be a straight line
    if (coordinates.length == 2) return true

    // slope = yDiff/xDiff

    // y1Diff/x1Diff = y2Diff/x2Diff
    // x2Diff * y1Diff = x1Diff * y2Diff

    const x = coordinates[1][0] - coordinates[0][0]; // x1Diff
    const y = coordinates[1][1] - coordinates[0][1]; // y1Diff

    for (let i = 0; i < coordinates.length; i++) {
        const xDiff = coordinates[i][0] - coordinates[0][0]; // x2Diff
        const yDiff = coordinates[i][1] - coordinates[0][1]; // y2Diff

        if (xDiff * y != x * yDiff) {
            return false
        }
    }

    return true

};