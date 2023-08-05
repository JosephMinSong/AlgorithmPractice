/* There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.
Given two strings, write a function to check if they are one edit (or 0 edits) away. 

Example: 
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

const string1 = "pale"
const string2 = "ple"
const string3 = "bale"
const string4 = "bake"

function oneAway(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false

    let changes = 0;

    let idx1 = 0;
    let idx2 = 0;

    const shorterStr = str1.length < str2.length ? str1 : str2;
    const longerStr = str1.length < str2.length ? str2 : str1;

    while (idx1 < shorterStr.length && idx2 < longerStr.length) {
        if (shorterStr[idx1] != longerStr[idx2]) {
            if (idx1 != idx2) {
                return false;
            }
            changes++
            if (shorterStr.length == longerStr.length) idx1++
        } else {
            idx1++
        }
        idx2++
    }

    return changes > 1 ? false : true;
}

console.log(oneAway(string1, string2)) // true
console.log(oneAway(string1, string3)) // true 
console.log(oneAway(string1, string4)) // false
console.log(oneAway(string2, string3)) // false 