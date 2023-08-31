var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
    return this
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {

    if (this.empty()) return null

    if (this.stack2.length > 0) {
        return this.stack2.pop()
    } else {
        while (this.stack1.length > 0) {
            const next = this.stack1.pop()
            this.stack2.push(next)
        }
        return this.stack2.pop()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {

    if (this.empty()) return null

    if (this.stack2.length > 0) {
        return this.stack2[this.stack2.length - 1]
    } else {
        return this.stack1[0]
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length == 0 && this.stack2.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)c
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */