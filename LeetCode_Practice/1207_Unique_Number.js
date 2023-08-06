// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/* 
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
*/

var uniqueOccurrences = function (arr) {
    let occuranceHash = {};
    let countHash = {};

    for (let i = 0; i < arr.length; i++) {
        if (occuranceHash.hasOwnProperty(arr[i])) {
            occuranceHash[arr[i]]++
        } else {
            occuranceHash[arr[i]] = 1
        }
    }

    for (let key in occuranceHash) {
        if (countHash.hasOwnProperty(occuranceHash[key])) {
            return false
        } else {
            countHash[occuranceHash[key]] = true
        }
    }
    return true
};