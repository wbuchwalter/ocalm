const expect = require('expect');
const reduce = require('../lib/reduce');

//simple case with accumulator
expect(reduce([1,2,3], (acc, el) => acc+el, 0)).toBe(6)

//simple case, no accumulator
expect(reduce([1,2,3], (acc, el) => acc+el)).toBe(6)

expect(reduce([1,2,3], (acc, el) => {
  acc.push(el)
  return acc
}, [])).toEqual([1,2,3])

const testObj = {a:1, b:2, c:3}
var nbPass = 0

reduce(testObj, (acc, val, key) => {
  expect(testObj[key]).toBe(val)
  nbPass++
}, [])

expect(nbPass).toBe(Object.keys(testObj).length)

expect(reduce(testObj, (acc, val) => acc + val, 0)).toBe(6)
expect(reduce(testObj, (acc, val) => acc + val)).toBe(6)

expect(reduce(undefined, () => new Error('should not execute this'))).toBe(undefined)
expect(reduce(1, () => new Error('should not execute this'))).toBe(undefined)
expect(reduce([], () => new Error('should not execute this'))).toBe(undefined)
expect(reduce({}, () => new Error('should not execute this'))).toBe(undefined)
expect(reduce(null, () => new Error('should not execute this'))).toBe(undefined)

console.log('all reduce test passed')