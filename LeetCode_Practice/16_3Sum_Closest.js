/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    if (nums.length === 3) return nums[0] + nums[1] + nums[2]

    nums = nums.sort((a, b) => a - b);

    let minDiff = Infinity
    let closestSum = 0

    for (let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];

            if (sum == target) return sum

            const diff = Math.abs(target - sum);

            if (diff < minDiff) {
                minDiff = diff
                closestSum = sum
            }

            if (sum < target) lo++
            else hi--
        }
    }

    return closestSum
};