require('./flat');
require('./slice');
require('./push');

Array.prototype.concat = function (...values) {
    const newArray = this.slice()
    Array.prototype.push.apply(newArray, values.flat(1))
    return newArray
}