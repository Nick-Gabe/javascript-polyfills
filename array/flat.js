require('./reduce');
require('./push');

Array.prototype.flat = function (depth = 1) {
    if (isNaN(depth) || !depth) return this

    return this.reduce((acc, cur) => {
        if (!Array.isArray(cur)) acc.push(cur)
        else Array.prototype.push.apply(acc, cur.flat(depth - 1))

        return acc
    }, [])
}