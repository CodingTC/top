const { describe, test } = require('node:test');
const assert = require('assert');
const leapYears = require('./leapYears');

describe('leapYears', function() {
  test('works with non century years', function() {
    assert.strictEqual(leapYears(1996), true);
  });
  test('works with non century years', function() {
    assert.strictEqual(leapYears(1997), false);
  });
  test('works with ridiculously futuristic non century years', function() {
    assert.strictEqual(leapYears(34992), true);
  });
  test('works with century years', function() {
    assert.strictEqual(leapYears(1900), false);
  });
  test('works with century years', function() {
    assert.strictEqual(leapYears(1600), true);
  });
  test('works with century years', function() {
    assert.strictEqual(leapYears(700), false);
  });
});
