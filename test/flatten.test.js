import * as _ from 'lodash';

/**
 * Flattens an array a single level deep.
 *
 * @param array <Array> The array to flatten.
 *
 * @return {Array} A new array.
 */
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

describe('flatten', () => {
    it('flattens an empty array', () => {
        const array = flatten([]);
        expect(array).toEqual([]);
    });

    it('flattens an already flattened array', () => {
        const array = flatten([1, 2, 3, 4, 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('flattens a nested array', () => {
        const array = flatten([1, 2, [3, 4], 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('does not complete flatten a deeply nested array', () => {
        const array = flatten([1, 2, [[3, 4], 5]]);
        expect(array).toEqual([1, 2, [3, 4], 5]);
    });
});
