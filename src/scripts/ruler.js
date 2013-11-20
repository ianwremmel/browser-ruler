'use strict';

var $overlay = $('#ruler-overlay');
// If the overlay doesn't exist, create it.
if ($overlay.length === 0) {
  $overlay = $('<div>');

  $overlay.attr('id', 'ruler-overlay');
  $overlay.attr('class', 'ruler-overlay');
}

// TODO figure out why insertCSS wasn't working.
$overlay.css('position', 'fixed');
$overlay.css('top', 0);
$overlay.css('right', 0);
$overlay.css('bottom', 0);
$overlay.css('left', 0);

// Let's just make sure we're above everything else.
$overlay.css('z-index', 10000);

$overlay.css('background-color', '#000');
$overlay.css('opacity', '0.8');

$('body').append($overlay);

var Rect = function() {
  this.$rect = $('<div>');

  this.$rect.attr('id', 'ruler-rect');
  this.$rect.attr('class', 'ruler-rect');

  this.$rect.css('background-color', 'green');
};

Rect.prototype.setDimensions = function(point) {
  var width = Math.abs(this.origin.left - point.left);
  var height = Math.abs(this.origin.top - point.top);

  var origin = {
    left: Math.min(this.origin.left, point.left),
    top: Math.min(this.origin.top, point.top)
  };

  if (origin.left !== this.origin.left || origin.top !== this.origin.top) {
    this.$rect.offset(origin);
  }

  this.$rect.width(width);
  this.$rect.height(height);
};

Rect.prototype.setOrigin = function(event) {
  var point = {
    left: event.clientX,
    top: event.clientY
  };

  this.origin = point;

  this.$rect.offset(point);

  this.$rect.width(0);
  this.$rect.height(0);

  if (this.$rect.parents().length === 0) {
    $overlay.append(this.$rect);
  }

  $overlay.on('mousemove', $.proxy(this.followMouse, this));
  $overlay.one('click', $.proxy(this.stopFollowingMouse, this));
};

Rect.prototype.followMouse = function(event) {
  var point = {
    left: event.clientX,
    top: event.clientY
  };

  this.setDimensions(point);
};

Rect.prototype.stopFollowingMouse = function(event) {
  $overlay.off('mousemove', this.followMouse);

  var point = {
    left: event.clientX,
    top: event.clientY
  };

  this.setDimensions(point);

  $overlay.one('click', $.proxy(this.setOrigin, this));
};

var rect = new Rect();
$overlay.one('click', $.proxy(rect.setOrigin, rect));
