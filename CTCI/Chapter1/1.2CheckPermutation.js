// Given two strings, write a method to decide if one is a permutation of the other

const firstString = "abcdea"
const secondString = "decba"

// Forgot base case where if the two strings are not equal in length, then they are obviously not permutations of each other

function checkPermutation(str1, str2) {
    let hash = {};
    for (let i = 0; i < str1.length; i++) {
        if (hash.hasOwnProperty(str1[i])) {
            hash[str1[i]]++
        } else {
            hash[str1[i]] = 1
        }
    }

    for (let j = 0; j < str2.length; j++) {
        if (hash[str2[j]]) {
            hash[str2[j]]--;
            if (hash[str2[j]] < 0) {
                return false
            }
        } else {
            return false
        }
    }

    for (let key in hash) {
        if (key) {
            return false
        }
    }

    return true
}

console.log(checkPermutation(firstString, secondString));