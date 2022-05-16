Array.prototype.at = function (index = 0) {
    if(index < 0) index = this.length + index
    return this[index]
}