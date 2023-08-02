function isPangram(string) {
    let letters_hashmap = {
        'a': 1,
        'b': 1,
        'c': 1,
        'd': 1,
        'e': 1,
        'f': 1,
        'g': 1,
        'h': 1,
        'i': 1,
        'j': 1,
        'k': 1,
        'l': 1,
        'm': 1,
        'n': 1,
        'o': 1,
        'p': 1,
        'q': 1,
        'r': 1,
        's': 1,
        't': 1,
        'u': 1,
        'v': 1,
        'w': 1,
        'x': 1,
        'y': 1,
        'z': 1,
    }
    for (var i = 0; i < string.length; i++) {
        if (letters_hashmap.hasOwnProperty(string[i].toLowerCase())) {
            letters_hashmap[string[i].toLowerCase()]--
        }
    }
    console.log(letters_hashmap)
    for (let key in letters_hashmap) {
        if (letters_hashmap[key] > 0) {
            return false
        }
    }
    return true
}

let string1 = "Cwm fjord bank glyphs vext quiz"
let string2 = "This is not a pangram"

console.log(isPangram(string1))

