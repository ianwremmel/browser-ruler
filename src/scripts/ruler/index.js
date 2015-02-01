'use strict';

var Overlay = require('./overlay');

var overlay = new Overlay();
if (overlay.isVisible()) {
  overlay.remove();
}
else {
  overlay.add();
}
