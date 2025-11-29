const { describe, test } = require('node:test');
const assert = require('assert');
const reverseString = require('./reverseString');

describe('reverseString', function() {
  test('reverses single word', function() {
    assert.strictEqual(reverseString('hello'), 'olleh');
  });
  test('reverses multiple words', function() {
    assert.strictEqual(reverseString('hello there'), 'ereht olleh');
  });
  test('works with numbers and punctuation', function() {
    assert.strictEqual(reverseString('123! abc! Hello, Odinite.'), '.etinidO ,olleH !cba !321');
  });
  test('works with blank strings', function() {
    assert.strictEqual(reverseString(''), '');
  });
});
