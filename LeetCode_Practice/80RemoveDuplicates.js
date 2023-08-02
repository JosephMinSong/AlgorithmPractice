var removeDuplicates = function(nums) {
    let i = 0 
    let count = 0
    let seen = nums[0]
    for (let j = 0; j < nums.length ; j++){
        if (nums[j] == seen && count >= 2){
            continue;
        } 
        
        if (nums[j] == seen) {
            nums[i] = nums[j]
            i++
            count++
        } else {
            count = 1
            seen = nums[j]
            nums[i] = nums[j]
            i++
        } 
    }
    return i
};

// 80. Remove Duplicates from sorted array II

var removeDuplicates = function(nums) {
    let i = 0;
    let seen = nums[0];
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
        // count >= 2 && nums[j] == seen
        // skip
        if (count >= 2 && nums[j] == seen) continue;

        // reset count = 1 and set seen = nums[j]
        if (nums[j] != seen) {
            count = 1;
            seen = nums[j];
        }

        else {
            count++;
        }
        nums[i] = nums[j];
        i++;
    }
    return i;
};

// Joe's solution
var removeDuplicates = function(nums) {
    let i = 0 
    let count = 0
    let seen = nums[0]
    for (let j = 0; j < nums.length ; j++){
        if (nums[j] == seen && count >= 2) continue;
        if (nums[j] == seen) {
            nums[i] = nums[j]
            i++
            count++
        } else {
            count = 1
            seen = nums[j]
            nums[i] = nums[j]
            i++
        }
    }
    return i;
};