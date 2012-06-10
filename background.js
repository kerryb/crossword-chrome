function onRequest(request, sender, sendResponse) {
  enable(sender.tab);
  sendResponse({});
}

function onClicked(tab) {
  cleanPage();
}

function enable(tab) {
  chrome.pageAction.show(tab.id);
}

function cleanPage() {
  chrome.tabs.executeScript(null, { code: "setupPage();" });
}

chrome.extension.onRequest.addListener(onRequest);
chrome.pageAction.onClicked.addListener(onClicked);
