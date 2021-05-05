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

browser.browserAction.onClicked.addListener(download);

function download() {
    console.log('send download command')
}