
/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */
function getMinProblemCount(N, S) {
    // Write your code here
    let odd = false;
    let max = S[0]

    for (let i = 0; i < S.length; i++) {
        if (S[i] % 2 == 1) {
            odd = true
        }

        if (S[i] > max) {
            max = S[i]
        }
    }

    let ans = Math.floor(max / 2)
    if (odd) {
        ans += 1
    }
    return ans;
}
