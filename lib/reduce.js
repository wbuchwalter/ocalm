'use strict';
const isIterable = require('./isIterable')

function reduce(collection, iteratee, seed) {
  if(!isIterable(collection)) {
    return undefined
  }

  let index = 0;

  if(collection.length !== undefined) {
    if(typeof seed === 'undefined') {
      seed = collection[0]
      index++
    }
    while(index < collection.length) {
      seed = iteratee(seed, collection[index])
      index++
    }
    return seed
  }

  const keys = Object.keys(collection)
  if(typeof seed === 'undefined') {
    seed = collection[keys[0]]
    index++
  }
  while(index < keys.length) {
    seed = iteratee(seed, collection[keys[index]], keys[index])
    index++
  }
  return seed;
}

module.exports = reduce
