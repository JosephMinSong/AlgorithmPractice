/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        const first = s[i];
        const second = s[s.length - i - 1];
        [s[i], s[s.length - i - 1]] = [second, first]
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]]
    }
};