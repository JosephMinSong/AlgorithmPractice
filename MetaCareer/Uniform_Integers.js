
/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
function getUniformIntegerCountInInterval(A, B) {
    // Write your code here
    let count = 0;

    function validUniformNumbers(number) {
        let parsedNumber = parseInt(number);
        while (parsedNumber <= B) {
            if (parsedNumber >= A) {
                count++
            }

            parsedNumber = parsedNumber.toString()
            parsedNumber = parsedNumber + number
            parsedNumber = parseInt(parsedNumber)
        }
    }

    for (let i = 1; i < 10; i++) {
        validUniformNumbers(i.toString())
    }

    return count
}
