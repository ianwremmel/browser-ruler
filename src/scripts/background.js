'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
    file: 'bower_components/zepto/zepto.js'
  });

  chrome.tabs.executeScript({
    file: 'scripts/ruler.js'
  });
});
