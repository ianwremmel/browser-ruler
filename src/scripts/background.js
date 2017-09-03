/* eslint-disable import/unambiguous */

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.insertCSS({file: `styles/main.css`});

  chrome.tabs.executeScript({file: `scripts/bundle.js`});
});
