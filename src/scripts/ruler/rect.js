'use strict';

const Point = require(`./point`);

function Rect(o, t) {
  let origin = o || new Point();
  let terminus = t || new Point();

  Object.defineProperties(this, {
    bottom: {
      get() {
        return Math.max(origin.y, terminus.y);
      }
    },

    height: {
      get() {
        return Math.abs(origin.y - terminus.y);
      }
    },

    left: {
      get() {
        return Math.min(origin.x, terminus.x);
      }
    },

    origin: {
      get() {
        return origin;
      },
      set(point) {
        console.debug(`set() origin`, point);
        origin = point;
      }
    },

    right: {
      get() {
        return Math.max(origin.x, terminus.x);
      }
    },

    terminus: {
      get() {
        return terminus;
      },
      set(point) {
        console.debug(`set() terminus`, point);
        terminus = point;
      }
    },

    top: {
      get() {
        return Math.min(origin.y, terminus.y);
      }
    },

    width: {
      get() {
        return Math.abs(origin.x - terminus.x);
      }
    }
  });
}

module.exports = Rect;
