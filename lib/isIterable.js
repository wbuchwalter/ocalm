module.exports = function(obj) {
  if(obj == undefined) return undefined //check for undefined and null values
  return typeof obj.length === 'undefined' ? typeof obj === 'object' : obj.length > 0
}
