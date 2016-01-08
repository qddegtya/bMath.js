/**
 * bMath.js
 * bit operations in javascript.
 *
 * Created by archer on 2016/01/08.
 *
 */

'use strict';

(function(root, factory){
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function() { return factory(); });
  } else {
    root.bMath = factory();
  }
})((typeof window === 'undefined' ? global : window), function() {

  var VERSION = '0.1.0';

  /**
  * 判断一个数是否为正数
  * @param {Number} b
  * @returns {Boolean} isPos
  */
  function isPos(b) {
    return b === b >>> 1;
  }

  /**
  * 交换两个数的值
  * @param {Number} a
  * @param {Number} b
  */
  function voidSwap(x, y) {
    x ^= y;
    y ^= x;
    x ^= y;
  }

  /**
   * 
   */

  // Module exports.
  return {
    VERSION: VERSION,
    isPos: isPos,
    voidSwap: voidSwap
  };
});
