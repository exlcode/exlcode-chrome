// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-121570714-3']);
_gaq.push(['_trackPageview']);

function trackEvent(cat, action) {
  _gaq.push(["_trackEvent", cat, action]);
}

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.reqType == "track") {
      trackEvent(request.category, request.action);
    }
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