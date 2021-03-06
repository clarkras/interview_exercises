import * as _ from 'lodash';

/**
 * Recursively flattens an array.
 *
 * @param array <Array> The array to flatten.
 *
 * @return {Array} A new array.
 */
function flattenDeep(array) {
  return _.flattenDeep(array);
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
