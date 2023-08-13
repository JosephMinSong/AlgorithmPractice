/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {

    let vowelHash = {
        "a": true,
        "e": true,
        "u": true,
        "i": true,
        "o": true,
    }

    let maxCount = 0;

    for (let i = 0; i < k; i++) {
        if (vowelHash.hasOwnProperty(s[i])) {
            maxCount++
        }
    }

    let count = maxCount;

    for (let j = k; j < s.length; j++) {
        if (vowelHash.hasOwnProperty(s[j])) {
            count++
        }

        if (vowelHash.hasOwnProperty(s[j - k])) {
            count--
        }

        if (count > maxCount) maxCount = count
    }

    return maxCount
};