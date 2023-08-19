/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {

    if (nums.length == 0) return [[lower, upper]]

    let result = [];

    if (nums[0] > lower) {
        result.push([lower, nums[0] - 1])
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1] + 1) {
            result.push([nums[i - 1] + 1, nums[i] - 1])
        }
    }

    if (nums[nums.length - 1] < upper) {
        result.push([nums[nums.length - 1] + 1, upper])
    }

    return result
};