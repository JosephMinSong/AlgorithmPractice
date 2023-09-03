/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        const index = nums[i];
        const num = nums[index];
        ans.push(num);
    }

    return ans
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map(num => nums[num])
}