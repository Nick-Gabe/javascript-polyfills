Array.prototype.reduce = function (callback, initialValue) {
    if(typeof callback !== 'function') throw Error(`TypeError: ${callback} is not a function`)
    let accumulator = initialValue === undefined ? this[0] : initialValue;

    for (let index = initialValue ? 0 : 1; index < this.length; index++) {
        if (this[index] === undefined) continue
        accumulator = callback(accumulator, this[index], index, this)
    }
    return accumulator
}
