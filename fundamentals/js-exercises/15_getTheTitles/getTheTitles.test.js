const { describe, test } = require('node:test');
const assert = require('assert');
const getTheTitles = require('./getTheTitles');

describe('getTheTitles', function() {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]
  test('gets titles', function() {
    assert.deepStrictEqual(getTheTitles(books), ['Book','Book2']);
  });
});
