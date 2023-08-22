// Assume you have a method isSubstring which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 if a rotation of s1 using only one call to isSubstring.


const word1 = "waterbottle"
const word2 = "erbottlewt"

function isSubstring(s1, s2) {
    let word = s1 + s1;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == s2[0]) {

            let pointer1 = i;
            let letterCount = 0

            for (let j = 0; j < s2.length; j++) {
                if (!word[pointer1] == s2[j]) {
                    break
                }

                pointer1++
                letterCount++
            }

            console.log(i, letterCount, s2.length)

            if (pointer1 == s2.length) return true
        }
    }

    return false
}

console.log(isSubstring(word1, word2))