/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {

    if (nums.length == 2) {
        return nums[0] >= nums[1] ? 1 : 0
    }

    let leftSums = new Array(nums.length - 1);
    let rightSums = new Array(nums.length - 1);

    let lo = 0;
    let hi = nums.length - 1;

    let leftSum = 0;
    let rightSum = 0;

    let ans = 0;

    while (lo < nums.length - 1) {
        leftSum += nums[lo]
        rightSum += nums[hi]

        leftSums[lo] = leftSum
        rightSums[hi - 1] = rightSum

        lo++
        hi--
    }

    for (let i = 0; i < leftSums.length; i++) {
        if (leftSums[i] >= rightSums[i]) {
            ans++
        }
    }

    return ans
};

/*

    First make two arrays:
        - one array from the start and summing the elements = called left sums
        - one array from the end and summing the elements = called right sums
    
    (i.e. => {
        leftSums = [10, 14, 6, 13] => optimized only need first three [10, 14, 6]
        rightSums = [13, 3, -1, 7] => optimized only need last three [3, -1, 7]
    })

    - as long as leftSums[i] >= rightSums[i], it's a valid split and we increase counter
    - we only go to leftSums.length - 1

*/