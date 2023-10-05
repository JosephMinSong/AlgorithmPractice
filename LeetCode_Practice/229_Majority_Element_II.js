/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    const target = nums.length / 3;

    let map = {};

    let set = new Set();

    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!map[num]) {
            map[num] = 1
        } else {
            map[num] += 1
        }

        if (map[num] > target) set.add(num)
    }

    set.forEach(value => ans.push(value))
    return ans
};