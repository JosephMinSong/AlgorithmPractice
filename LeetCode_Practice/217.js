/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash.hasOwnProperty(nums[i])) {
            return true
        } else {
            hash[nums[i]] = true
        }
    }
    return false
};