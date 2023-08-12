/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // to get the area = height[i] * (delta i)
    // start with two pointers at both ends, calculate the area
    // store area value in hash map ( hash[lo * 99 + hi] = area )
    // move the shorter height[i] closer to the middle
    // while(lo < hi)
    // for(key in hash) -> calculate biggest area


    let lo = 0;
    let hi = height.length - 1;
    let hash = {};
    let maxArea = 0;

    while (lo < hi) {
        const area = Math.min(height[lo], height[hi]) * (hi - lo);
        hash[lo * 999 + hi] = area;
        if (height[lo] <= height[hi]) {
            lo++
        } else {
            hi--
        }
    }

    for (let key in hash) {
        if (hash[key] > maxArea) {
            maxArea = hash[key]
        }
    }

    return maxArea
};