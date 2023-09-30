/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    const sumIndices = new Map();
    let maxLength = 0;
    let runningSum = 0;

    // Initialize the map with a sum of 0 at index -1
    sumIndices.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        // Convert 0 to -1 and 1 to 1
        runningSum += nums[i] === 0 ? -1 : 1;

        // If the running sum has been seen before, update the max length
        if (sumIndices.has(runningSum)) {
            maxLength = Math.max(maxLength, i - sumIndices.get(runningSum));
        } else {
            sumIndices.set(runningSum, i);
        }
    }

    return maxLength;
};