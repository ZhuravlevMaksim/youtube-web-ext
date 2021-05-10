browser.contextMenus.create({
    id: "send-uid",
    title: "Скачать аудио"
});

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "send-uid") {
        browser.tabs.executeScript({
            file: "youtube-web-ext.js"
        });
    }
});

browser.runtime.onMessage.addListener(({url}) => {
    if (url.startsWith("https://www.youtube.com/watch?v=")) {
        const uid = url.replaceAll("https://www.youtube.com/watch?v=", "")
        console.log(`Sending: ${uid}`);
        var sending = browser.runtime.sendNativeMessage("y_uid", uid);
        sending.then(onResponse, onError);
    }
})

browser.browserAction.onClicked.addListener(() => {
    browser.tabs.executeScript({
        file: "youtube-web-ext.js"
    });
});

function onResponse(response) {
    console.log("Received " + JSON.stringify(response));
}

function onError(error) {
    console.log(`Error: ${error}`);
}