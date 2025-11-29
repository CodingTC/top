const { describe, test } = require('node:test');
const assert = require('assert');
const sumAll = require('./sumAll');

describe('sumAll', function() {
  test('sums numbers within the range', function() {
    assert.strictEqual(sumAll(2, 4), 9);
  });
  test('works with large numbers', function() {
    assert.strictEqual(sumAll(1, 4000), 8002000);
  });
  test('works with larger number first', function() {
    assert.strictEqual(sumAll(123, 1), 7626);
  });
  test('returns ERROR with negative numbers', function() {
    assert.strictEqual(sumAll(-10, 4), 'ERROR');
  });
  test('returns ERROR with non-integer parameters', function() {
    assert.strictEqual(sumAll(2.5, 4), 'ERROR');
  });
  test('returns ERROR with non-number parameters', function() {
    assert.strictEqual(sumAll(10, "90"), 'ERROR');
  });
  test('returns ERROR with non-number parameters', function() {
    assert.strictEqual(sumAll(10, [90, 1]), 'ERROR');
  });
});
