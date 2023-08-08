/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let mCount = 0;
    let missing = 0;
    let count = 1;

    let i = 0;

    while (i < arr.length) {
        if (arr[i] != count) {
            mCount++;
            missing = count
            count++;
            if (mCount == k) {
                return missing
            }
        } else {
            i++
            count++
        }
    }

    let diff = k - mCount;

    return arr[i - 1] + diff
};