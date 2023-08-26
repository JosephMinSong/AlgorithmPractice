/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let hash = {};
    let answer = [];
    
    for(let i = 0; i < nums2.length; i++){
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            hash[stack[stack.length-1]] = nums2[i]
            stack.pop() 
        }
        stack.push(nums2[i])
    }

    while(stack.length > 0){
        hash[stack[stack.length - 1]] = -1
        stack.pop()
    }

    for(let j = 0; j < nums1.length; j++){
        answer.push( hash[nums1[j]] )
    }

    return answer
};