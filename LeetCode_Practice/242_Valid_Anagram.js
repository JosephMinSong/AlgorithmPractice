/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]]) {
            return false
        } else {
            map[t[j]]--
            if (map[t[j]] < 0) {
                return false
            }
        }
    }

    for (let key in map) {
        if (map[key] !== 0) {
            return false
        }
    }

    return true
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    s = sortString(s);
    t = sortString(t);

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) return false
    }

    return true
};

function sortString(str) {
    return str.split("").sort().join("");
}