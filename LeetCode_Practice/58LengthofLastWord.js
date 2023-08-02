// 58. Length of Last Word
var lengthOfLastWord = function(s) {
    let last = s.length - 1;
    let len = 0;
    while (s[last] == " ") last--;
    while (last >= 0 && s[last] != " ") {
        len++;
        last--;
    }
    return len;
};

// Joe's solution
var lengthOfLastWord = function(s) {
    wordArray = s.split(' ')
    finalWordArray = []
    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i].length == 0){
            continue
        } else {
            finalWordArray.push(wordArray[i])
        }
    }

    finalWord = finalWordArray[finalWordArray.length - 1]
    return finalWord.length
};

// build in string function
// use trim() or trimEnd()
var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length - s.lastIndexOf(" ") - 1;
};