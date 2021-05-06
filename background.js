browser.contextMenus.create({
    id: "send-uid",
    title: "Скачать аудио"
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "send-uid") {
        browser.tabs.executeScript({
            file: "youtube-web-ext.js"
        });
    }
});

browser.browserAction.onClicked.addListener(() => {
    console.log("Sending:  uid");
    var sending = browser.runtime.sendNativeMessage(
        "y_uid",
        document.documentURI);
    sending.then(onResponse, onError);
});

function onResponse(response) {
    console.log("Received " + JSON.stringify(response));
}

function onError(error) {
    console.log(`Error: ${error}`);
}