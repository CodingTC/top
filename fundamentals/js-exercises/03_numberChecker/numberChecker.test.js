const { describe, test } = require('node:test');
const assert = require('assert');
const numberChecker = require('./numberChecker');

describe('numberChecker', function() {
  test('returns true when number is 1000', function() {
    assert.strictEqual(numberChecker(1000), true);
  });
  test('returns true when number is 10', function() {
    assert.strictEqual(numberChecker(10), true);
  });
  test('returns false when number is 9', function() {
    assert.strictEqual(numberChecker(9), false);
  });
  test('returns false when number is 6', function() {
    assert.strictEqual(numberChecker(6), false);
  });
});
