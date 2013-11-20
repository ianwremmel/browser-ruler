// jshint global $
// jshint global _
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

var start, stop;

var startBox = function(event) {
	console.log(event);
	$overlay.one(endBox);
};

var endBox = function(event) {
	console.log(event);
	$overlay.one(startBox);
};

$overlay.one('click', startBox);