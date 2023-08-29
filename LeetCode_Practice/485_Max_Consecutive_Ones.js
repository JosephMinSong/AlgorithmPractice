/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxOnes = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
        } else {
            maxOnes = Math.max(count, maxOnes);
            count = 0;
        }
    }

    return Math.max(count, maxOnes);
};