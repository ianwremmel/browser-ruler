'use strict';

var assign = require('object-assign');
var pc = require('../lib/prevent-collision');
var Rect = require('./rect');

var Ruler = function(overlay) {
  this.el = document.getElementById(pc('ruler-rect'));
  if (!this.el) {
    this.el = document.createElement('div');
    this.el.id = pc('ruler-rect');
    this.el.classList.add(pc('ruler-rect'));

    this.label = document.createElement('span');
    this.label.id = pc('ruler-label');
    this.label.classList.add(pc('ruler-label'));

    this.el.appendChild(this.label);

    overlay.appendChild(this.el);
  }

  this.rect = new Rect();
};

assign(Ruler.prototype, {
  draw: function(origin, terminus) {
    if (origin) {
      this.terminus.origin = origin;
    }

    if (terminus) {
      this.rect.terminus = terminus;
    }

    if (!this.rect.terminus.x || !this.rect.terminus.y) {
      this.rect.terminus = this.rect.origin;
    }

    console.debug('draw', this.rect.origin, this.rect.terminus);

    this.el.style.top = this.rect.top + 'px';
    this.el.style.right = this.rect.right + 'px';
    this.el.style.bottom = this.rect.bottom + 'px';
    this.el.style.left = this.rect.left + 'px';

    this.el.style.width = this.rect.width + 'px';
    this.el.style.height = this.rect.height + 'px';

    this.label.innerHTML = 'W:' + this.rect.width + ', H:' + this.rect.height;

    console.debug(this.rect.top, this.rect.right, this.rect.bottom, this.rect.left);
  },

  isDrawing: function() {
    return this._isDrawing;
  },

  setOrigin: function(point) {
    console.debug('setOrigin', point);

    this._isDrawing = true;

    this.rect = new Rect(point);
    this.draw();
  },

  setTerminus: function(point) {
    console.debug('setTerminus', point);

    this.rect.terminus = point;
    this.draw();

    this._isDrawing = false;
  }
});

module.exports = Ruler;
