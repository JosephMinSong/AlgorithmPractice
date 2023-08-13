/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let zeroCount = 0;
    let left = 0;
    let right = 0;
    let maxLength = 0;

    while (right < nums.length) {

        if (nums[right] == 0) {
            const diff = right - left - 1;
            if (diff > maxLength) maxLength = diff

            zeroCount++
        }

        if (zeroCount > 1) {
            if (nums[left] == 0) zeroCount--
            left++
        }

        right++
    }

    const finalDiff = right - left - 1;

    if (finalDiff > maxLength) maxLength = finalDiff

    return maxLength
};