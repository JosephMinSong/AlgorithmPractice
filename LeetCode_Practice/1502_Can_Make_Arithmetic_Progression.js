/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Better runtime, worse space
var canMakeArithmeticProgression = function (arr) {

    if (arr.length == 2) return true

    arr = arr.sort((a, b) => a - b);

    const diff = arr[1] - arr[0]

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != diff) {
            return false
        }
    }

    return true
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */

// Better space, worse runtime
var canMakeArithmeticProgression = function (arr) {

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
    }

    if (max - min == 0) {
        return true
    }

    const progression = (max - min) / (arr.length - 1)

    if (progression % 1 != 0) return false

    let set = new Set();

    for (let j = 0; j < arr.length; j++) {

        const diff = arr[j] - min

        if (diff % progression != 0) {
            return false
        }

        set.add(arr[j])
    }

    return arr.length == set.size
};