/* Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hld the additional characters, 
and that you are given thte "true" length of the string. 

Example
Input: "Mr John Smith         ", 13
Output: "Mr%20John%20Smith"
*/

const string = "Mr John Smith         "

// Using built ins
function URLify1(str, length) {
    let newStr = str.slice(0, length)

    let strArray = newStr.split(" ");

    return strArray.join("%20")
}

// No built ins
function URLify2(str, length) {

}


console.log(URLify1(string, 13))

