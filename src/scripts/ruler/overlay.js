'use strict';

var assign = require('object-assign');
var pc = require('../lib/prevent-collision');
var Point = require('./point');
var Ruler = require('./ruler');

var Overlay = function() {
  this.onMousedown = this.onMousedown.bind(this);
  this.onMousemove = this.onMousemove.bind(this);
  this.onMouseup = this.onMouseup.bind(this);

  this.el = document.getElementById(pc('ruler-overlay'));
  if (!this.el) {
    this.el = document.createElement('div');
    this.el.id = pc('ruler-overlay');
    this.el.classList.add(pc('ruler-overlay'));

    this.el.addEventListener('mousedown', this.onMousedown);
    this.el.addEventListener('mouseup', this.onMouseup);
  }

  this.ruler = new Ruler(this.el);
};

assign(Overlay.prototype, {
  add: function() {
    document.body.appendChild(this.el);
  },

  isVisible: function() {
    return this.el && this.el.style.display !== 'none' && document.body.contains(this.el);
  },

  onMousedown: function(event) {
    var point = new Point(event);
    console.debug('onMousedown', point);

    if (!this.ruler.isDrawing()) {
      this.ruler.setOrigin(point);
      this.el.addEventListener('mousemove', this.onMousemove);
    }
  },

  onMousemove: function(event) {
    var point = new Point(event);
    console.debug('onMousemove', point);

    this.ruler.draw(undefined, point);
  },

  onMouseup: function(event) {
    var point = new Point(event);
    console.debug('onMouseup', point);

    // FIXME: leaky demeter
    console.log(point, this.ruler.rect.origin, this.ruler.rect.terminus);
    if (!point.equals(this.ruler.rect.origin)) {
      this.el.removeEventListener('mousemove', this.onMousemove);
      this.ruler.setTerminus(point);
    }
  },

  remove: function() {
    if (this.el) {
      this.el.removeEventListener('mousedown', this.onMousedown);
      this.el.removeEventListener('mousemove', this.onMousemove);
      this.el.removeEventListener('mouseup', this.onMouseup);
      document.body.removeChild(this.el);
    }
  }
});

module.exports = Overlay;
