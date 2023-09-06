
/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
    let ans = ""
    for (let i = 0; i < C.length; i++) {
        if (C[i] == "A") {
            ans += "B"
        } else {
            ans += "A"
        }
    }
    return ans;
}
