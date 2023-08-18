/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let result = "";
    let starCount = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == "*") {
            starCount++
        } else {
            if (starCount > 0) {
                starCount--
            } else {
                result = s[i] + result
            }
        }
    }

    return result
};

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "*") {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join("")
};