/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let original = [...score]
    const sortedScores = score.sort((a, b) => b - a); // descending order of scores
    let scoresHash = {};
    const ans = [];
    for (let i = 0; i < sortedScores.length; i++) {
        scoresHash[sortedScores[i]] = i + 1
    }

    for (let num of original) {
        if (scoresHash[num] == 1) ans.push("Gold Medal")
        else if (scoresHash[num] == 2) ans.push("Silver Medal")
        else if (scoresHash[num] == 3) ans.push("Bronze Medal")
        else ans.push(scoresHash[num].toString())
    }

    return ans
};