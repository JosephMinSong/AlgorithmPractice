/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }

    avg = sum / k;

    for (let j = k; j < nums.length; j++) {
        sum += nums[j] - nums[j - k];
        let newAvg = sum / k
        if (newAvg > avg) avg = newAvg
    }

    return avg
};