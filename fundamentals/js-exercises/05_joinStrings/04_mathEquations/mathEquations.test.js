const { describe, test } = require('node:test');
const assert = require('assert');
const {a, b, c, d, e, f} = require('./mathEquations');

describe('math', function() {
  test('a is 0', function() {
    assert.strictEqual(a, 0);
  });
  test('b is 9', function() {
    assert.strictEqual(b, 9);
  });
  test('c is 66', function() {
    assert.strictEqual(c, 66);
  });
  test('d is 1', function() {
    assert.strictEqual(d, 1);
  });
  test('e is -8', function() {
    assert.strictEqual(e, -8);
  });
  test('f is 68', function() {
    assert.strictEqual(f, 68);
  });
});
