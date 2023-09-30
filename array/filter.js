require('./reduce');

Array.prototype.filter = function (callback, thisArg = this) {
    if(typeof callback !== 'function') throw TypeError(`${callback} is not a function`)
    return thisArg.reduce((acc, cur, index) => {
        if(callback(cur, index, thisArg)) acc[acc.length] = cur
        return acc
    }, [])
}