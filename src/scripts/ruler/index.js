'use strict';

const Overlay = require(`./overlay`);

const overlay = new Overlay();
if (overlay.isVisible()) {
  overlay.remove();
}
else {
  overlay.add();
}
