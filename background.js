//initialise a location to append tabs results too (in the window)
window.bears = {};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  return (window.bears[request.url] = request.count);
});

chrome.browserAction.onClicked.addListener(function (tabs) {
  chrome.tabs.create({ url: "popup.html" });
});
