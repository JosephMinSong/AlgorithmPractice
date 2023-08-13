/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // left side sums = left + nums[i]
    // right side sums = total sum - left - nums[i]

    let totalSum = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for (let j = 0; j < nums.length; j++) {
        const right = totalSum - left - nums[j];

        if (left == right) {
            return j
        }

        left += nums[j]
    }

    return -1
};