function getActiveTab() {
    return browser.tabs.query({active: true, currentWindow: true});
}

function cookieUpdate() {
    getActiveTab().then((tabs) => {
        var gettingCookies = browser.cookies.get({
            url: tabs[0].url,
            name: "bgpicker"
        });
        
gettingCookies.then((cookie) => {
    if (cookie) {
        var cookieVal = JSON.parse(cookie.value);
            browser.tabs.sendMessage(tabs[0].id, {image: cookieVal.image});
            browser.tabs.sendMessage(tabs[0].id, {color: cookieVal.color});
            }
     });
    });
}

browser.tabs.onUpdate.addListener(cookieUpdate);
browser.tabs.onActived.addListener(cookieUpdate);