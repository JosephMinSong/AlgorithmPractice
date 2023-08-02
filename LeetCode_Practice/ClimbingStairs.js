/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

This is essentially Fibronacci's sequence. Next time, work out the problem using multiple paths. 
*/

var climbStairs = function (n) {
    let one = 1;
    let two = 1;
    let count = 0;
    while (count < n - 1) {
        const temp = one;
        one += two;
        two = temp;
        count++;
    }
    return one;
};