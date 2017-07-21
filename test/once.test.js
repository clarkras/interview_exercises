import * as _ from 'lodash';

/**
 * Creates a function that is restricted to invoking a function once. Repeat calls to the
 * function return the value of the first invocation.
 *
 * The function is invoked with the this binding and arguments of the created function.
 *
 * @param {Function} func The function to restrict.
 *
 * @return {Function} The new restricted function.
 */
function once(func) {
  var called = false;
  var value;

  return function(...args) {
    if (!called) {
      value = func.call(undefined, ...args);
      called = true;
    }
    return value;
  };
}

describe('once', () => {
    let subject;

    beforeEach(() => {
        subject = jest.fn();
        subject.mockImplementation(x => x * x);
    });

    it('does not call the subject function during setup', () => {
        const onceWrapper = once(subject);
        expect(subject).not.toHaveBeenCalled();
    });

    it('only calls the subject once', () => {
        const onceWrapper = once(subject);
        onceWrapper();
        onceWrapper();
        expect(subject).toHaveBeenCalledTimes(1);
    });

    it('always returns the first result', () => {
        const onceWrapper = once(subject);
        const result1 = onceWrapper(2);
        const result2 = onceWrapper(3);
        expect(result1).toBe(4);
        expect(result2).toBe(4);
    });
});
