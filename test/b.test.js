/**
 * ut for bMath.js
 */

'use strict';

var b = require('../bmath')
  , assert = require('assert');

// bMath#isPos
describe('bMath', function() {
  describe('#isPos', function() {
    it('如果为负数返回false', function() {
      assert.equal(false, b.isPos(-12));
    });
  });
});

// bMath#swap
describe('bMath', function() {
  describe('#swap', function() {
    it('P的值将变成12', function() {
      var P = 5
        , N = 12;
      b.voidSwap(P, N);
      assert(12, P);
    });
  });
});
