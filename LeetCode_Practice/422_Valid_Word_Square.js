/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
    for (let i = 0; i < words.length; i++) {
        let j = 0;
        while (j < words[i].length) {
            if (j >= words.length || words[i][j] != words[j][i]) {
                return false
            }
            j++
        }
    }
    return true
};
