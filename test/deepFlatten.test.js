import * as _ from 'lodash';

/**
 * Recursively flattens an array.
 *
 * @param array <Array> The array to flatten.
 *
 * @return {Array} A new array.
 */

function flattenDeep(array) {
  let newArray = [];
  for (var el of array) {
    if (Array.isArray(el)) {
      newArray = newArray.concat(flattenDeep(el));
    } else {
      newArray.push(el);
    }
  }
  return newArray;
}

function whileDeepFlatten(array) {
  let newArray = array.slice();
  while(newArray.find(el => Array.isArray(el))) {
   newArray = flatten(newArray)
  }
  return newArray;
}

function flatten(array) {
  var newArray = [];
  for (var el of array) {
    if (Array.isArray(el)) {
      newArray = newArray.concat(el);
    } else {
      newArray.push(el);
    }
  }
  return newArray;
}

describe('flattenDeep', () => {
    it('flattens an already flattened array', () => {
        const array = flattenDeep([1, 2, 3, 4, 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('flattens a nested array', () => {
        const array = flattenDeep([1, 2, [3, 4], 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('flattens a deeply nested array', () => {
        const array = flattenDeep([1, 2, [[3, 4], 5]]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});
