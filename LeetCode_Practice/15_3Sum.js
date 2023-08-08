/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let hi = nums.length - 1;
        let lo = i + 1;

        if (nums[i] > 0) break

        if (i == 0 || nums[i] != nums[i - 1]) {
            while (lo < hi) {
                let sum = nums[i] + nums[lo] + nums[hi]
                if (sum == 0) {
                    result.push([nums[i], nums[lo], nums[hi]])
                    lo++
                    hi--
                    while (lo < hi && nums[lo] == nums[lo - 1]) {
                        lo++
                    }
                } else if (sum < 0) {
                    lo++
                } else if (sum > 0) {
                    hi--
                }
            }
        }
    }

    return result
};