/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {

    let isPositive = true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) return 0

        const sign = nums[i] > 0;

        if (!sign && !isPositive) {
            isPositive = true
        } else if (!sign && isPositive) {
            isPositive = false
        }
    }

    return isPositive ? 1 : -1;
};