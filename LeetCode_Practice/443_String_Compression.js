/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let seen = chars[0];
    let count = 1;
    let s = ""

    for (let i = 1; i < chars.length; i++) {
        if (chars[i] != seen) {
            if (count == 1) {
                s += seen
            } else {
                s += seen + count.toString()
                count = 1
            }
            seen = chars[i];
        } else {
            count++
        }
    }

    if (count > 1) {
        s += seen + count.toString()
    } else {
        s += seen
    }


    for (let j = 0; j < s.length; j++) {
        chars[j] = s[j];
    }

    chars = chars.slice(0, s.length);

    return chars.length
};