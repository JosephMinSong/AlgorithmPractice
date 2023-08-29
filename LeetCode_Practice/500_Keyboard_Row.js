/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const ans = [];

    for (let i = 0; i < words.length; i++) {

        const word = words[i]

        if (isInFirstRow(word) || isInSecondRow(word) || isInThirdRow(word)) {
            ans.push(word)
        }
    }

    return ans
};

function isInFirstRow(word) {
    let canMake = true;
    const firstRow = "qwertyuiop";
    let firstRowHash = {};
    for (let letter of firstRow) {
        firstRowHash[letter] = true
    }

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (!firstRowHash[letter]) {
            canMake = false
            break
        }
    }

    return canMake
}

function isInSecondRow(word) {
    let canMake = true;
    const secondRow = "asdfghjkl";
    let secondRowHash = {};
    for (let letter of secondRow) {
        secondRowHash[letter] = true
    }

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (!secondRowHash[letter]) {
            canMake = false
            break
        }
    }

    return canMake
}

function isInThirdRow(word) {
    let canMake = true
    const thirdRow = "zxcvbnm";
    let thirdRowHash = {};
    for (let letter of thirdRow) {
        thirdRowHash[letter] = true
    }

    for (let i = 0; i < word.length; i++) {
        const letter = word[i].toLowerCase();
        if (!thirdRowHash[letter]) {
            canMake = false
            break
        }
    }

    return canMake
}

