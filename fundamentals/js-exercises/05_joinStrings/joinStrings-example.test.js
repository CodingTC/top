const { describe, test } = require('node:test');
const assert = require('assert');
const values = require('./joinStrings-example');

describe('joinStrings-example', function() {
  test('birthYear is 1947', function() {
    assert.strictEqual(values.birthYear, 1947);
  });
  test('thisYear is 1965', function() {
    assert.strictEqual(values.thisYear, 1965);
  });
  test('firstName is Carlos', function() {
    assert.strictEqual(values.firstName, 'Carlos');
  });
  test('lastName is Stevenson', function() {
    assert.strictEqual(values.lastName, 'Stevenson');
  });
  test('greeting is put together correctly', function() {
    assert.strictEqual(values.greeting, 'Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});
