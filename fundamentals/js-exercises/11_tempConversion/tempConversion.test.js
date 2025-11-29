const { describe, test } = require('node:test');
const assert = require('assert');
const {convertToCelsius, convertToFahrenheit} = require('./tempConversion');

describe('convertToCelsius', function() {
  test('works', function() {
    assert.strictEqual(convertToCelsius(32), 0);
  });
  test('rounds to 1 decimal', function() {
    assert.strictEqual(convertToCelsius(100), 37.8);
  });
  test('works with negatives', function() {
    assert.strictEqual(convertToCelsius(-100), -73.3);
  });
});

describe('convertToFahrenheit', function() {
  test('works', function() {
    assert.strictEqual(convertToFahrenheit(0), 32);
  });
  test('rounds to 1 decimal', function() {
    assert.strictEqual(convertToFahrenheit(73.2), 163.8);
  });
  test('works with negatives', function() {
    assert.strictEqual(convertToFahrenheit(-10), 14);
  });
});
