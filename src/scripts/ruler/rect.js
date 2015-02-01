'use strict';

var Point = require('./point');

var Rect = function(o, t) {
  var origin = o || new Point();
  var terminus = t || new Point();

  Object.defineProperties(this, {
    origin: {
      get: function() {
        return origin;
      },
      set: function(point) {
        console.debug('set() origin', point);
        origin = point;
      }
    },

    terminus: {
      get: function() {
        return terminus;
      },
      set: function(point) {
        console.debug('set() terminus', point);
        terminus = point;
      }
    },

    top: {
      get: function() {
        return Math.min(origin.y, terminus.y);
      }
    },

    right: {
      get: function() {
        return Math.max(origin.x, terminus.x);
      }
    },

    bottom: {
      get: function() {
        return Math.max(origin.y, terminus.y);
      }
    },

    left: {
      get: function() {
        return Math.min(origin.x, terminus.x);
      }
    },

    height: {
      get: function() {
        return Math.abs(origin.y - terminus.y);
      }
    },

    width: {
      get: function() {
        return Math.abs(origin.x - terminus.x);
      }
    }
  });
};

module.exports = Rect;
