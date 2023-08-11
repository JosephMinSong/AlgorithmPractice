/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 != str2 + str1) return ""

    const length = str1.length < str2.length ? str1.length : str2.length;

    for (let i = length - 1; i >= 0; i--) {
        const substringLength = i + 1
        if (str1.length % substringLength == 0 && str2.length % substringLength == 0) {
            const x1 = str1.length / substringLength;
            const x2 = str2.length / substringLength;
            const substring = str1.slice(0, substringLength);

            if (substring.repeat(x1) == str1 && substring.repeat(x2) == str2) {
                return substring
            }
        }
    }

    return ""
};