const { describe, test } = require('node:test');
const assert = require('assert');
const fibonacci = require('./fibonacci');

describe('fibonacci', function() {
  test('4th fibonacci number is 3', function() {
    assert.strictEqual(fibonacci(4), 3);
  });
  test('6th fibonacci number is 8', function() {
    assert.strictEqual(fibonacci(6), 8);
  });
  test('10th fibonacci number is 55', function() {
    assert.strictEqual(fibonacci(10), 55);
  });
  test('15th fibonacci number is 610', function() {
    assert.strictEqual(fibonacci(15), 610);
  });
  test('25th fibonacci number is 75025', function() {
    assert.strictEqual(fibonacci(25), 75025);
  });
  test('0th fibonacci number is 0', function() {
    assert.strictEqual(fibonacci(0), 0);
  });
  test('doesn\'t accept negatives', function() {
    assert.strictEqual(fibonacci(-25), "OOPS");
  });
  test('DOES accept strings', function() {
    assert.strictEqual(fibonacci("0"), 0);
  });
  test('DOES accept strings', function() {
    assert.strictEqual(fibonacci("1"), 1);
  });
  test('DOES accept strings', function() {
    assert.strictEqual(fibonacci("2"), 1);
  });
  test('DOES accept strings', function() {
    assert.strictEqual(fibonacci("8"), 21);
  });
});
