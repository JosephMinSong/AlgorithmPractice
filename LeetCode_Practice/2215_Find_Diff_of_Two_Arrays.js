/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {

    let hash1 = {};
    let hash2 = {};

    let result = []

    for (let i = 0; i < nums1.length; i++) {
        hash1[nums1[i]] = true;
    }

    for (let j = 0; j < nums2.length; j++) {
        hash2[nums2[j]] = true;
    }

    let diff1 = [];
    let diff2 = [];

    for (let key in hash1) {
        if (!hash2.hasOwnProperty(key)) {
            diff1.push(key)
        }
    }

    for (let key in hash2) {
        if (!hash1.hasOwnProperty(key)) {
            diff2.push(key)
        }
    }

    result.push(diff1, diff2)

    return result
};