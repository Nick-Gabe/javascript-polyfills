module.exports = function () {
    const arr = [1, 2, 3, ['4', '5'], true, [[{ a: 'sample', b: false }]]]
    return arr.flat()
}