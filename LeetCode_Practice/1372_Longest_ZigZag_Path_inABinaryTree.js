/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {

    let length = 0;

    function dfs(root, left, steps) {
        if (root) {
            length = length > steps ? length : steps;
            if (left) {
                dfs(root.left, false, steps + 1)
                dfs(root.right, true, 1)
            } else {
                dfs(root.left, false, 1)
                dfs(root.right, true, steps + 1)
            }
        }
    }

    dfs(root, false, 0)
    dfs(root, true, 0)
    return length

};

