/* Is Unique: Implement an alogrithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

const uniqueString = "abcdefg";
const string = "abbcdd";

// Missed base case - there are only 128 characters. String cannot be unique if length is greater than 128. 
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

// We could also make a hash of all the alphabet letters and then if we encounter that letter, set it to a true bool. If we encounter it again, if the bool is true, then we have a duplicate

console.log(isUnique1(uniqueString));
console.log(isUnique1(string));
// console.log(isUnique2(uniqueString));
// console.log(isUnique2(string));