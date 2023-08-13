/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let highest = 0;
    let runner = 0;

    for (let i = 0; i < gain.length; i++) {
        runner += gain[i];
        if (runner > highest) highest = runner
    }

    return highest
};
