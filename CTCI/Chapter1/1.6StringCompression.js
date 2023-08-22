/* Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3.
If the "compressed" string would not become smaller than the original string, your method should return the original string. 
You can assume the string has only uppercase and lowercase letters. */

const string = "aabcccccaaa";
const string2 = "ab"
const string3 = "aaaabbbbdddd"

function strCompression(str) {

    if (str.length <= 2) return str;

    let seen = str[0];
    let count = 1;
    let result = "";

    for (let i = 1; i < str.length; i++) {
        if (str[i] != seen) {
            result += seen + count.toString();
            seen = str[i];
            count = 1
        } else {
            count++
        }
    }

    result += seen + count.toString();

    return result.length < str.length ? result : str;
}

console.log(strCompression(string));
console.log(strCompression(string2));
console.log(strCompression(string3)); 