/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let leaves1 = [];
    let leaves2 = [];

    dfs(root1, leaves1)
    dfs(root2, leaves2)

    if (leaves1.length != leaves2.length) return false
    else {
        for (let i = 0; i < leaves1.length; i++) {
            if (leaves1[i] != leaves2[i]) {
                return false
            }
        }
    }

    return true
};

function dfs(root, leaves) {
    // base case
    if (root) {
        if (!root.left && !root.right) {
            leaves.push(root.val)
        }
        dfs(root.left, leaves)
        dfs(root.right, leaves)
    }
}