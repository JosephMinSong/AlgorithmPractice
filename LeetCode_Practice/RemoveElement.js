// 27. Remove Element

// solution using splice
// worst time of splice is O(n)
// Total run time would be O(n^2)

// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] === val) {
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return nums.length;
// };

// O(n)
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// optimized version
var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;

    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
        } else {
            i++;
        }
    }
    return n;
};

// 169. Majority Element

// Use hasp map
// O(n) time with O(n) space
var majorityElement = function(nums) {
    let count = {};
    let n = Math.floor(nums.length/2);
    for (const num of nums) {
        if (count.hasOwnProperty(num)) {
            count[num]++;
            if (count[num] > n) return count[num];
        } else {
            count[num] = 1;
        }
    }

    for (let key in count){
        if (count[key] > n){
            return key
        }
    }
};


// Optimal solution
// Boyer-Moore Voting Algorithm
// O(n) time and O(1) space
var majorityElement = function(nums) {
    let count = 0;
    let ans;
    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] == ans) {
        //     count++;
        // } else {
        //     count--;
        //     if (count < 0) {
        //         ans = nums[i];
        //         count = 1;
        //     }
        // }

        if (count == 0) {
            ans = nums[i];
        }
        count += (nums[i] == ans) ? 1 : -1;
    }
    return ans;
};