const { describe, test } = require('node:test');
const assert = require('assert');
const addNumbers = require('./addNumbers');

describe('addNumbers', function() {
  test('adds the numbers together', function() {
    assert.strictEqual(addNumbers(), 2);
  });
});
