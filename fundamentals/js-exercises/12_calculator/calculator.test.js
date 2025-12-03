const { describe, test } = require('node:test');
const assert = require('assert');
const calculator = require('./calculator');

describe('add', function() {
  test('adds 0 and 0', function() {
    assert.strictEqual(calculator.add(0, 0), 0);
  });
  test('adds 2 and 2', function() {
    assert.strictEqual(calculator.add(2, 2), 4);
  });
  test('adds positive numbers', function() {
    assert.strictEqual(calculator.add(2, 6), 8);
  });
});

describe('subtract', function() {
  test('subtracts numbers', function() {
    assert.strictEqual(calculator.subtract(10, 4), 6);
  });
  test('subtracts negative numbers', function() {
    assert.strictEqual(calculator.subtract(-10, -4), -6);
  });
  test('subtracts numbers of mixed parity', function() {
    assert.strictEqual(calculator.subtract(-8, 7), -15);
  });
});

describe('sum', function() {
  test('computes the sum of an empty array', function() {
    assert.strictEqual(calculator.sum([]), 0);
  });
  test('computes the sum of an array of one number', function() {
    assert.strictEqual(calculator.sum([7]), 7);
  });
  test('computes the sum of an array of two numbers', function() {
    assert.strictEqual(calculator.sum([7, 11]), 18);
  });
  test('computes the sum of an array of many numbers', function() {
    assert.strictEqual(calculator.sum([1, 3, 5, 7, 9]), 25);
  });
});

describe('multiply', function() {
  test('multiplies two numbers', function() {
    assert.strictEqual(calculator.multiply([2, 4]), 8);
  });
  test('multiplies several numbers', function() {
    assert.strictEqual(calculator.multiply([2, 4, 6, 8, 10, 12, 14]), 645120);
  });
});

describe('power', function() {
  test('raises one number to the power of another number', function() {
    assert.strictEqual(calculator.power(4, 3), 64);
  });
  test('raises one number to the power of a large number', function() {
    assert.strictEqual(calculator.power(3, 10), 59049);
  });
});

describe('factorial', function() {
  test('computes the factorial of 0', function() {
    assert.strictEqual(calculator.factorial(0), 1);
  });
  test('computes the factorial of 1', function() {
    assert.strictEqual(calculator.factorial(1), 1);
  });
  test('computes the factorial of 2', function() {
    assert.strictEqual(calculator.factorial(2), 2);
  });
  test('computes the factorial of 5', function() {
    assert.strictEqual(calculator.factorial(5), 120);
  });
  test('computes the factorial of 10', function() {
    assert.strictEqual(calculator.factorial(10), 3628800);
  });
});
