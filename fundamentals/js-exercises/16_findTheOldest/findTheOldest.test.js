const { describe, test } = require('node:test');
const assert = require('assert');
const findTheOldest = require('./findTheOldest');

describe('findTheOldest', function() {
  test('finds the person with the greatest age!', function() {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    assert.strictEqual(findTheOldest(people).name, 'Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined on a non-oldest person', function() {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    assert.strictEqual(findTheOldest(people).name, 'Ray');
  });
  test('finds the oldest person if yearOfDeath field is undefined for the oldest person', function() {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    assert.strictEqual(findTheOldest(people).name, 'Carly');
  });
});
