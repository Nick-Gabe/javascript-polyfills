Array.prototype.push = function (...values) {
    for(let index = 0; index < values.length; index++) {
        this[this.length] = values[index]
    }
    return this.length
}