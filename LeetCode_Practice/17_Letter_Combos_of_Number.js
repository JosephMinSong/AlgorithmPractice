/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
      "2" : ["a", "b", "c"],
      "3" : ["d", "e", "f"],
      "4" : ["g", "h", "i"],
      "5" : ["j", "k", "l"],
      "6" : ["m", "n", "o"],
      "7" : ["p", "q", "r", "s"],
      "8" : ["t", "u", "v"],
      "9" : ["w", "x", "y", "z"]
    }

    let stack = [];

    for(let char of digits){
      stack.push(map[char])
    }

    while(stack.length > 1){
      let combinations = [];
      const arr1 = stack.pop();
      const arr2 = stack.pop();
      for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
          combinations.push(arr2[i] + arr1[j])
        }
      }
      stack.push(combinations)
    }

    return stack[0] ? stack[0] : []
};