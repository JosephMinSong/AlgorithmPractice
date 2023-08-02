// 88. Merge Sorted Array

// Interview Tip: Whenever you're trying to solve an array problem in-place, 
// always consider the possibility of iterating backwards instead of forwards through the array. 
// It can completely change the problem, and make it a lot easier.

function sortfunction(a, b) {
    return a - b;
}

// O(nlog(n))
var merge = function(nums1, m, nums2, n) {
    // edge cases
    // if m = 0
    // if n = 0
    if (n === 0) return nums1;
    else if (m === 0) {
        // nums1 = nums2;
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }
    
    // merge nums2 into nums1
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    
    // sort nums1
    nums1.sort(sortfunction);
};

// optimal solution
let nums1Runner = m - 1
let nums2Runner = n - 1
let j = m + n - 1

// O(m+n)
while (j >= 0) {
    if (nums2Runner < 0) break;
    if (nums1Runner >= 0 && nums2[nums2Runner] < nums1[nums1Runner]){
        nums1[j] = nums1[nums1Runner--]
        j --
    } else {
        nums1[j] = nums2[nums2Runner--]
        j -- 
    }  
}