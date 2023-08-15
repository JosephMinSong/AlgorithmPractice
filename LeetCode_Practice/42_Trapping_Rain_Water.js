/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let leftDP = [];
    let rightDP = [];

    let leftMax = height[0];
    let rightMax = height[height.length - 1]

    let result = 0;

    for (let i = 0; i < height.length; i++) {
        if (height[i] > leftMax) {
            leftMax = height[i];
        }
        leftDP[i] = leftMax
    }

    for (let j = height.length - 1; j >= 0; j--) {
        if (height[j] > rightMax) {
            rightMax = height[j]
        }
        rightDP[j] = rightMax
    }

    for (let k = 0; k < leftDP.length; k++) {
        const minHeight = leftDP[k] < rightDP[k] ? leftDP[k] : rightDP[k];

        result += minHeight - height[k]
    }

    return result

};