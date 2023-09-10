/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    const length = nums.length
    let ans = new Array(length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + length] = nums[i]
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    return nums.concat(nums);
};