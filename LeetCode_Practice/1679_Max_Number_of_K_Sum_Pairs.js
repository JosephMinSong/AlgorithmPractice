/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums = nums.sort((a, b) => a - b);


    let lo = 0;
    let hi = nums.length - 1;
    let operations = 0;

    while (lo < hi) {

        const sum = nums[lo] + nums[hi]

        if (sum == k) {
            operations++
            lo++
            hi--
        } else if (sum > k) {
            hi--
        } else {
            lo++
        }
    }

    return operations
};