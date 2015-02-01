'use strict';

// TODO replace with sweet.js?

/**
 * Modifies a CSS class or id to prevent collisions with local styles
 * @param  {string} selector
 * @return {string}
 */
module.exports = function(selector) {
  // 7299d2d29ee0de87bd5e67ed9e6d7a0d is the md5 of "ruler" and it's extremely
  // unlikely any other styles would include it in their last 32 characters.
  return selector + '-' + '7299d2d29ee0de87bd5e67ed9e6d7a0d';
};
