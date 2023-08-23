// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

const array1 = ["a", "b", "c", "x"] // compare to

const array2 = ["z", "y", "i"] // false
const array3 = ["z", "y", "x"] // true

function compareCommonItems(arr1, arr2) {
    let hash = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!hash.hasOwnProperty(arr1[i])) {
            hash[arr1[i]] = true
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (hash.hasOwnProperty(arr2[j])) {
            return true
        }
    }

    return false
}


console.log(compareCommonItems(array1, array2))
console.log(compareCommonItems(array1, array3))