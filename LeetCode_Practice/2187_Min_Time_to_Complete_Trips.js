/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
    let min = time[0];
    for (let num of time) {
        min = Math.min(min, num)
    }

    let left = 1;
    let right = totalTrips * min;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (isEnough(mid, totalTrips, time)) {
            // if this is true, then we have enough trips and we can bring the time down
            right = mid
        } else {
            // if it's not true, then we need to increase our time
            left = mid + 1
        }
    }

    return left
};

function isEnough(givenTime, goal, time) {
    let trips = 0;
    for (let t of time) {
        trips += Math.floor(givenTime / t)
    }

    return trips >= goal
}



