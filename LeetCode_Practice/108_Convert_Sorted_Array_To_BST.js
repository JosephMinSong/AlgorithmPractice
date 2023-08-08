/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return helper(0, nums.length - 1, nums)
};

function helper(left, right, nums) {
    // let root = TreeNode(middle)
    // root.left = helperFxn(beginning, middle - 1)
    // root.right = helperFxn(middle + 1, end)

    // base cases
    if (left > right) return null

    let middle = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[middle]);
    root.left = helper(left, middle - 1, nums);
    root.right = helper(middle + 1, right, nums);
    return root
}