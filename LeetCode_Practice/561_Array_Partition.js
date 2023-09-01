/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => a - b);

    let maxSum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i]
    }

    return maxSum
};

/*

    [1,2,3,4] => [1,2] & [3, 4]

    [1, 2, 2, 5, 6, 6] => [1, 2] & [2, 5] & [6, 6]

*/