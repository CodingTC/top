const { describe, test } = require('node:test');
const assert = require('assert');
const removeFromArray = require('./removeFromArray');

describe('removeFromArray', function() {
  test('removes a single value', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3, 4], 3), [1, 2, 4]);
  });
  test('removes multiple values', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3, 4], 3, 2), [1, 4]);
  });
  test('removes multiple of the same value', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 2, 3], 2), [1, 3]);
  });
  test('ignores non present values', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3, 4], 7, "tacos"), [1, 2, 3, 4]);
  });
  test('ignores non present values, but still works', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3, 4], 7, 2), [1, 3, 4]);
  });
  test('can remove all values', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4), []);
  });
  test('works with strings', function() {
    assert.deepStrictEqual(removeFromArray(["hey", 2, 3, "ho"], "hey", 3), [2, "ho"]);
  });
  test('only removes same type', function() {
    assert.deepStrictEqual(removeFromArray([1, 2, 3], "1", 3), [1, 2]);
  });
});
