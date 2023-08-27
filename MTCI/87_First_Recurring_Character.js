// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// Return the first recurring element

const myArray = [2, 5, 1, 2, 3, 5, 1, 2, 4]

function firstRecurringElement(arr) {
    let hash = {};

    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            hash[arr[i]] = true
        } else {
            return arr[i]
        }
    }

    return undefined
}

console.log(firstRecurringElement(myArray))