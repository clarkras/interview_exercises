import * as _ from 'lodash';

/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the
 * function return the value of the first invocation. The func is invoked with the
 * this binding and arguments of the created function.
 *
 * @param {Function} func The function to restrict.
 *
 * @return {Function} The new restricted function.
 */
function once(func) {
  return _.once(func);
}

describe('once', () => {
    let mock;

    beforeEach(() => {
        mock = jest.fn();
    });

    it('calls the function once', () => {
        const mockOnce = once(mock);
        mockOnce(1);
        mockOnce(2);
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenLastCalledWith(1);
    });
});
