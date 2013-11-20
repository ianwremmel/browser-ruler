'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
    file: 'bower_components/jquery/jquery.js'
  });

  chrome.tabs.executeScript({
    file: 'scripts/ruler.js'
  });
});
