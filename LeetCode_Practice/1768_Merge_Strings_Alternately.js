/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word1runner = 0;
    let word2runner = 0;
    let result = "";

    while(word1runner < word1.length || word2runner < word2.length){
        if(word1[word1runner]){
            result = result + word1[word1runner]
        }

        if(word2[word2runner]){
            result = result + word2[word2runner]
        }

        word1runner++;
        word2runner++;
    }

    return result
};