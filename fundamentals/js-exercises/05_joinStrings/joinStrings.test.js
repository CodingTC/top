const { describe, test } = require('node:test');
const assert = require('assert');
const values = require('./joinStrings');

describe('step 2', function() {
  test('firstName is Carlos', function() {
    assert.strictEqual(values.firstName, 'Carlos');
  });
  test('lastName is Stevenson', function() {
    assert.strictEqual(values.lastName, 'Stevenson');
  });
  test('thisYear is 1965', function() {
    assert.strictEqual(values.thisYear, 1965);
  });
  test('birthYear is 1947', function() {
    assert.strictEqual(values.birthYear, 1947);
  });
  test('greeting is properly output', function() {
    assert.strictEqual(values.greeting, 'Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});

describe('step 3', function() {
  test('fullName is Carlos Stevenson', function() {
    assert.strictEqual(values.fullName, 'Carlos Stevenson');
  });
  test('age is 18', function() {
    assert.strictEqual(values.age, 18);
  });
});
