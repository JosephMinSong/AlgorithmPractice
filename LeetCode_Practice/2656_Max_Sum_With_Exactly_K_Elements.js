/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    // find max
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i]
    }

    let ans = 0;
    for (let j = 0; j < k; j++) {
        ans += max + j
    }

    return ans
};

/*
    k = 1 --> +0
    k = 2 --> +1
    k = 3 --> +3
    k = 4 --> +6
    k = 5 --> +10
    k = 6 --> +15
*/