/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = [1];

    // [1, 1, 2, 6] -> L side tracker stored inside answer array
    // [24, 12, 4, 1] -> R side tracker 

    // Left side tracker
    for (let i = 1; i < nums.length; i++) {
        answer.push(nums[i - 1] * answer[i - 1]);
    }

    // Right side tracker stored inside variable
    let R = 1;

    // Build answer with stored value
    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= R
        R *= nums[j]
    }

    return answer
};