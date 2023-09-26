/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function deleted(str1, str2) {
    // abc --> ac

    let [one, two] = [0, 0]

    let count = 1;

    while (one < str1.length) {
        if (str1[one] != str2[two]) {
            if (count) {
                one++
                count--
                continue
            } else {
                return false
            }
        }

        one++
        two++
    }

    return true
}

function inserted(str1, str2) {
    // ab --> acb

    let [one, two] = [0, 0]

    let count = 1;

    while (two < str2.length) {
        if (str1[one] != str2[two]) {
            if (count) {
                two++
                count--
                continue
            } else {
                return false
            }
        }

        one++
        two++
    }

    return true
}

function replaced(str1, str2) {
    // abc --> acc

    let [one, two] = [0, 0]

    let count = 1;

    while (one < str2.length) {
        if (str1[one] != str2[two]) {
            if (count) {
                count--
            } else {
                return false
            }
        }
        one++
        two++
    }

    return true
}

var isOneEditDistance = function (s, t) {

    if (s == t) {
        return false
    }

    const diff = s.length - t.length; // 1 means delete, 0 means replace, -1 means insert


    if (diff == 1) {
        return deleted(s, t)
    } else if (diff == 0) {
        return replaced(s, t)
    } else if (diff == -1) {
        return inserted(s, t)
    } else {
        return false
    }
};