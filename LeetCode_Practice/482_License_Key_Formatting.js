/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let count = 0;
    let ans = '';

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != "-") {
            ans = typeof s[i] == 'string' ? s[i].toUpperCase() + ans : s[i].toString() + ans
            count++
            if (count == k && i != 0) {
                ans = "-" + ans
                count = 0
            }
        }
    }

    return ans[0] == "-" ? ans.slice(1) : ans
};