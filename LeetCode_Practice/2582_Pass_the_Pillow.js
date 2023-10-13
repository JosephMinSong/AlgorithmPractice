/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    const diff = time % (n - 1);
    // figure out which direction we're headed
    //  - if the direction is odd, then we are travelling left
    //  - if the direction is even, then we are travelling right
    const direction = (Math.floor(time / (n - 1))) % 2 == 0 ? "right" : "left";

    if (direction == "left") {
        return n - diff
    } else {
        return 1 + diff
    }
};