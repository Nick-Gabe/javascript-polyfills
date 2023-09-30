Array.prototype.includes = function (searchElement, fromIndex = 0) {
  if(isNaN(fromIndex)) fromIndex = 0
  let computedIndex = fromIndex
  if(fromIndex >= this.length) return false
  if(fromIndex < 0) computedIndex = Math.max(fromIndex + this.length, 0)
  
  for(let index = computedIndex; index < this.length; index++) {
    if(this[index] === searchElement) return true
  }
  return false
}
