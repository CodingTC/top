const { describe, test } = require('node:test');
const assert = require('assert');
const repeatString = require('./repeatString');

describe('repeatString', function() {
  test('repeats the string', function() {
    assert.strictEqual(repeatString('hey', 3), 'heyheyhey');
  });
  test('repeats the string many times', function() {
    assert.strictEqual(repeatString('hello', 10), 'hellohellohellohellohellohellohellohellohellohello');
  });
  test('repeats the string 1 time', function() {
    assert.strictEqual(repeatString('hi', 1), 'hi');
  });
  test('repeats the string 0 times', function() {
    assert.strictEqual(repeatString('bye', 0), '');
  });
  test('does not use the built-in String repeat method', function() {
    repeatString("don't use the built-in repeat method!", 1);
    // Note: This test checks that you don't use the built-in repeat method
    // You'll need to implement this with a loop instead
  });
  test('returns ERROR with negative numbers', function() {
    assert.strictEqual(repeatString('goodbye', -1), 'ERROR');
  });
  test('repeats the string a random amount of times', function() {
    const number = Math.floor(Math.random() * 1000);
    assert.strictEqual(repeatString('hey', number), 'hey'.repeat(number));
  });
  test('works with blank strings', function() {
    assert.strictEqual(repeatString('', 10), '');
  });
});
