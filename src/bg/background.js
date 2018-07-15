// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    sendResponse();
  });

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    tabs.forEach(element => {
      chrome.tabs.sendMessage(element.id, {}, function (response) {
        return;
      });
    });
  });
});