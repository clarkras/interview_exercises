import * as _ from 'lodash';

/**
 * Recursively flattens an array.
 *
 * @param array <Array> The array to flatten.
 *
 * @return {Array} A new array.
 */
function deepflattenClone(array) {

}

describe('flattenDeep', () => {
    it('flattens an already flattened array', () => {
        const array = _.flattenDeep([1, 2, 3, 4, 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('flattens a nested array', () => {
        const array = _.flattenDeep([1, 2, [3, 4], 5]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });

    it('flattens a deeply nested array', () => {
        const array = _.flattenDeep([1, 2, [[3, 4], 5]]);
        expect(array).toEqual([1, 2, 3, 4, 5]);
    });
});
