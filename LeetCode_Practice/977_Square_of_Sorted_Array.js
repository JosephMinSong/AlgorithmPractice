/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(num => Math.pow(num, 2)).sort((a, b) => a-b)
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];
    let left = 0;
    let right = nums.length - 1;

    for(let i = nums.length - 1; i >= 0; i--){

        const rightNum = nums[right];
        const leftNum = nums[left];
        let square;

        if(Math.abs(rightNum >= Math.abs(leftNum))){
            square = Math.pow(rightNum, 2);
            right--
        } else {
            square = Math.pow(leftNum, 2);
            left++
        }

        result[i] = square
    }

    return result
};