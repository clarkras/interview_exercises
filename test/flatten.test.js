import * as _ from 'lodash';

/**
 * Flattens an array a single level deep.
 *
 * @param array <Array> The array to flatten.
 *
 * @return {Array} A new array.
 */
function flatten(array) {
  return _.flatten(array);
}

describe('flatten', () => {
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
