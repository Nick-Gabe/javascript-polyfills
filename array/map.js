Array.prototype.map = function (callback, thisArg = this) {
    if(typeof callback !== 'function') throw Error(`TypeError: ${callback} is not a function`)
    const newArray = []
    for(let index = 0; index < thisArg.length; index++) {
        if(this[index] === undefined) continue
        newArray[index] = callback(thisArg[index], index, thisArg)
    }
    return newArray
}