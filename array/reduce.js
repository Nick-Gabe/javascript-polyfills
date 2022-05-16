Array.prototype.reduce = function (callback, initialValue) {
    if(typeof callback !== 'function') throw Error(`TypeError: ${callback} is not a function`)
    let accumulator = initialValue || this[0]

    for (let index = initialValue ? 0 : 1; index < this.length; index++) {
        if (this[index] === undefined) continue
        accumulator = callback(accumulator, this[index], index, this)
    }
    return accumulator
}