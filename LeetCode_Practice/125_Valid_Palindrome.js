/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let lo = 0;
    let hi = s.length - 1;

    while (lo <= hi) {
        let first;
        let second;

        if (isLetter(s[lo])) {
            first = s[lo].toLowerCase()
        } else {
            lo++
            continue
        }

        if (isLetter(s[hi])) {
            second = s[hi].toLowerCase()
        } else {
            hi--
            continue
        }

        if (first !== second) return false
        lo++
        hi--
    }

    return true
};

function isLetter(str) {
    return str.match(/[a-z]/i) || str.match(/[0-9]/i);
}