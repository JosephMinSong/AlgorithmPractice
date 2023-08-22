/* Given a string, write a function to check if it si a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters.
The palindrome does not need to be limited to just dictionary words. 
You can ignore casing and non-letter characters. */

const palindromeStr = "taco cat";
const string = "dictionary"

function isPalindromePermutation(str) {
    let hash = {}

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            if (hash.hasOwnProperty(str[i])) {
                hash[str[i]]++;
            } else {
                hash[str[i]] = 1;
            }
        }
    }

    let length = 0;
    let oddCount = 0;

    for (let key in hash) {
        length += hash[key];
        if (hash[key] % 2 == 1) {
            oddCount++
            if (oddCount > 1) {
                return false
            }
        }
    }

    if (length % 2 == 0 && oddCount == 0) {
        return true
    } else if (length % 2 == 1 && oddCount == 1) {
        return true
    } else {
        return false
    }
}

console.log(isPalindromePermutation(palindromeStr))
console.log(isPalindromePermutation(string))