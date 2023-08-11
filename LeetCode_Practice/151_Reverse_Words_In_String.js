/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let resultArr = [];
    let word = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            word = s[i] + word;
        } else {
            if (word) {
                resultArr.push(word)
                word = ""
            }
        }
    }

    if (word) resultArr.push(word)

    return resultArr.join(" ")
};