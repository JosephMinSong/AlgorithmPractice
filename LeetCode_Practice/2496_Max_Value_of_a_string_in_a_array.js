/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {

    let ans = -Infinity
    var reg = /^\d+$/;

    for (let i = 0; i < strs.length; i++) {
        const number = reg.test(strs[i])
        if (number) {
            ans = Math.max(parseInt(strs[i]), ans)
        } else {
            ans = Math.max(strs[i].length, ans)
        }
    }

    return ans
};