/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let hash = {};
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        hash[nums1[i]] = true;
    }

    for (let j = 0; j < nums2.length; j++) {
        if (hash[nums2[j]]) {
            result.push(nums2[j])
            hash[nums2[j]] = false

        }
    }

    return result
};