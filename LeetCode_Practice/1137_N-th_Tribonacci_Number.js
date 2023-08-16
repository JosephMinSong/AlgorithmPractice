/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let arr = [0, 1, 1]

    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1]
    }

    return arr[arr.length - 1]
};

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let a = 0;
    let b = 1;
    let c = 1;
    let count = 3

    if (n < count) return 1

    // n = 4
    // count = 3

    while (count <= n) {
        const sum = a + b + c
        a = b
        b = c
        c = sum

        count++
    }

    return c
};