/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]);

        if (nums[index - 1] > 0) {
            nums[index - 1] *= -1;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > 0) {
            ans.push(j + 1)
        }
    }

    console.log(nums)

    return ans
};