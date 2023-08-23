/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length

    let maxLength = 0;

    let hash = {};

    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (hash.hasOwnProperty(s[i])) {
            start = Math.max(hash[s[i]] + 1, start)
        }

        maxLength = Math.max(maxLength, i - start + 1)
        hash[s[i]] = i
    }

    return maxLength
};