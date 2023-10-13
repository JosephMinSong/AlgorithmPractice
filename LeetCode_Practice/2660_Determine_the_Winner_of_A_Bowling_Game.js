/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {

    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < player1.length; i++) {
        // check previous two scores to see if they're strikes 
        if ((player1[i - 2] && player1[i - 2] == 10) || (player1[i - 1] && player1[i - 1] == 10)) {
            player1Score += player1[i] * 2
        } else {
            player1Score += player1[i]
        }

        if ((player2[i - 2] && player2[i - 2] == 10) || (player2[i - 1] && player2[i - 1] == 10)) {
            player2Score += player2[i] * 2
        } else {
            player2Score += player2[i]
        }
    }

    return player1Score == player2Score ? 0 :
        player1Score > player2Score ? 1 : 2
};