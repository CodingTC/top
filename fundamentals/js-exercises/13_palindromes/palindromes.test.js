const { describe, test } = require('node:test');
const assert = require('assert');
const palindromes = require('./palindromes');

describe('palindromes', function() {
  test('works with single words', function() {
    assert.strictEqual(palindromes('racecar'), true);
  });
  test('works with punctuation ', function() {
    assert.strictEqual(palindromes('racecar!'), true);
  });
  test('works with upper-case letters ', function() {
    assert.strictEqual(palindromes('Racecar!'), true);
  });
  test('works with multiple words', function() {
    assert.strictEqual(palindromes('A car, a man, a maraca.'), true);
  });
  test('works with multiple words', function() {
    assert.strictEqual(palindromes('Animal loots foliated detail of stool lamina.'), true);
  });
  test('doesn\'t just always return true', function() {
    assert.strictEqual(palindromes('ZZZZ car, a man, a maracaz.'), false);
  });
  test('works with numbers in a string', function() {
    assert.strictEqual(palindromes('rac3e3car'), true);
  });
  test('works with unevenly spaced numbers in a string', function() {
    assert.strictEqual(palindromes('r3ace3car'), false);
  });
});
