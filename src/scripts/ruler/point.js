'use strict';

function Point(x, y) {
  let _x = x;
  let _y = y;

  if (typeof x === `object`) {
    _y = x.y;
    _x = x.x;
  }

  Object.defineProperties(this, {
    x: {
      get() {
        return _x;
      },
      set(value) {
        console.debug(`set() x`, value);
        _x = value;
      }
    },
    y: {
      get() {
        return _y;
      },
      set(value) {
        console.debug(`set() y`, value);
        _y = value;
      }
    }
  });
}

Point.prototype.equals = function equals(point) {
  return point && this.x === point.x && this.y === point.y;
};

module.exports = Point;
