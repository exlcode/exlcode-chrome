chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			if (isDesktopRepoPage()) {
				loadDesktopRepoBtn();
				return;
			}
		}
	}, 10);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (isDesktopRepoPage()) {
		loadDesktopRepoBtn();
		return;
	}
	sendResponse();
});