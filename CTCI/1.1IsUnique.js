/* Is Unique: Implement an alogrithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

const uniqueString = "abcdefg";
const string = "abbcdd";

// With hash table
function isUnique1(str) {
    let hash = {};
    for (let i = 0; i < str.length; i++) {
        hash[str[i]] = i;
    }
    for (let j = 0; j < str.length; j++) {
        if (hash.hasOwnProperty(str[j]) && hash[str[j]] != j) {
            return false
        }
    }
    return true
}

// No additional data structures
function isUnique2(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = 1; j < str.length; j++) {
            if (str[i] == str[j] && i != j) {
                return false
            }
        }
    }
    return true
}



console.log(isUnique1(uniqueString));
console.log(isUnique1(string));
// console.log(isUnique2(uniqueString));
// console.log(isUnique2(string));