/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let count = {};
    let left = {};
    let right = {};
    let degree = 0;
    let result = nums.length

    for (let i = 0; i < nums.length; i++) {
        if (!left.hasOwnProperty(nums[i])) {
            left[nums[i]] = i
        }

        right[nums[i]] = i

        if (!count.hasOwnProperty(nums[i])) {
            count[nums[i]] = 1
        } else {
            count[nums[i]]++
            if (count[nums[i]] > degree) {
                degree = count[nums[i]]
            }
        }
    }

    for (let key in count) {
        if (count[key] == degree) {
            const sub = right[key] - left[key] + 1
            if (sub < result) {
                result = sub
            }
        }
    }

    return result
};