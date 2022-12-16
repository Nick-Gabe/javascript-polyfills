Array.prototype.reduce = function (callback, initialValue) {
    if(typeof callback !== 'function') throw Error(`TypeError: ${callback} is not a function`)
    const initalIsUndefined = initialValue === undefined;
    let accumulator = initalIsUndefined ? this[0] : initialValue;

    for (let index = initalIsUndefined ? 1 : 0; index < this.length; index++) {
        if (this[index] === undefined) continue
        accumulator = callback(accumulator, this[index], index, this)
    }
    return accumulator
}
