/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// [1, 0, 0, 3, 12]
var moveZeroes = function (nums) {
    let runner = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            runner = i
            while (runner < nums.length) {
                if (nums[runner] != 0) {
                    [nums[i], nums[runner]] = [nums[runner], nums[i]]
                    break
                } else {
                    runner++
                }
            }
        }
    }
};