var TwoSum = function () {
    this.arr = []
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    this.arr.push(number)

    return null
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    let diffHash = {};

    for (let i = 0; i < this.arr.length; i++) {
        const diff = value - this.arr[i]

        if (diffHash.hasOwnProperty(diff)) {
            return true
        } else {
            diffHash[this.arr[i]] = true
        }
    }

    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */