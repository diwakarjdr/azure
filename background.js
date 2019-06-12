chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason.search(/install/g) === -1) {
        return
    }
    chrome.tabs.create({
        url: chrome.extension.getURL("welcome.html"),
        active: true
    })
})
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   // alert('updated from background');
   //window.alert('open extension to avail its services');
   //chrome.browserAction.openPopup();
  //chrome.browserAction(chrome.extension.getURL("popup.html"));
  //window.open(chrome.extension.getURL("//bkobcdnakgggeflgeeaadloglekjimpl/popup.html"));
   
});

chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
         console.log("message recieved" + msg);
         port.postMessage("Hi Popup.js");
    });
})