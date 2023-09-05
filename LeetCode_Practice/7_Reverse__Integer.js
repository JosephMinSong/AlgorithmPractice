/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    x = x.toString().split("").reverse();
    if (isNaN(x[x.length - 1])) {
        x.pop()
        x.unshift("-")
    }
    x = parseInt(x.join(""));
    if (x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) return 0
    return x
};

/**
 * @param {number} x
 * @return {number}
 */

// 2^31 - 1 = 2147483647
// -2^31 = -2147483648

var reverse = function (x) {
    let ans = 0;

    while (x != 0) {
        const last = x % 10;

        if ((last > 7 && ans == 214748364) || ans > 214748364) return 0
        if ((last < -8 && ans == -214748364) || ans < -214748364) return 0

        ans = (ans * 10) + last
        console.log(last, ans, x)

        if (x < 0) {
            x = Math.ceil(x / 10)
        } else {
            x = Math.floor(x / 10)
        }
    }

    return ans
};