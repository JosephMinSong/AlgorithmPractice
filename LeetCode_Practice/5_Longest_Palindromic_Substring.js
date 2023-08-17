/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longest = 0;
    let l_i = 0;
    let r_i = 0;
    4
    for (let i = 0; i < s.length; i++) {

        // checking odd length palindromes
        let l = i;
        let r = i;

        while (l >= 0 && r < s.length && s[l] == s[r]) {
            const length = r - l + 1;

            if (length > longest) {
                l_i = l;
                r_i = r;
                longest = length
            }
            l--
            r++
        }

        // checking even length palindromes
        l = i
        r = i + 1

        while (l >= 0 && r < s.length && s[l] == s[r]) {
            const length = r - l + 1;

            if (length > longest) {
                l_i = l;
                r_i = r;
                longest = length
            }
            l--
            r++
        }
    }

    return s.substring(l_i, r_i + 1)
};