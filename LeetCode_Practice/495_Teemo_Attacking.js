/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {

    if (duration == 0) return 0
    if (timeSeries.length == 1) return duration

    let poisoned = 0;

    for (let i = 1; i < timeSeries.length; i++) {
        const timeBefore = timeSeries[i - 1];
        const timeNow = timeSeries[i];
        const timeBetween = timeNow - timeBefore

        if (timeBetween < duration) {
            poisoned += timeBetween
        } else {
            poisoned += duration
        }
    }

    return poisoned + duration
};