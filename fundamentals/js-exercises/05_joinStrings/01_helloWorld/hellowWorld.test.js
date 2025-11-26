const { test, describe } = require('node:test');
const assert = require('assert');
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    assert.strictEqual(helloWorld(), 'Hello, World!');
  });
});
