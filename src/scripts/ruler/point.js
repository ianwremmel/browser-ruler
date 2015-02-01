'use strict';

var Point = function(x, y) {
  if (typeof x === 'object') {
    y = x.y;
    x = x.x;
  }

  Object.defineProperties(this, {
    x: {
      get: function() {
        return x;
      },
      set: function(value) {
        console.debug('set() x', value);
        x = value;
      }
    },
    y: {
      get: function() {
        return y;
      },
      set: function(value) {
        console.debug('set() y', value);
        y = value;
      }
    }
  });
};

Point.prototype.equals = function(point) {
  return point && this.x === point.x && this.y === point.y;
};

module.exports = Point;
