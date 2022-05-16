Array.prototype.slice = function (start, end = this.length) {
    const newArray = []
    if(isNaN(start)) start = 0

    if (start < 0) {
        start = this.length + start
        if (start < 0) start = 0
    }
    if (end < 0) {
        end = this.length + end
        if (end < 0) end = 0
    }

    for (let index = start; index < end; index++) {
        newArray[newArray.length] = this[index]
    }
    return newArray
}