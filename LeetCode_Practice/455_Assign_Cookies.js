/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    if (s.length == 0) return 0

    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let ans = 0;

    let j = 0;

    for (let i = 0; i < s.length; i++) {
        const cookie = s[i];
        const greed = g[j];

        if (cookie >= greed) {
            ans++
            j++
        }
    }

    return ans
};