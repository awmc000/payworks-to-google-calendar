let latestMessage = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === "content") {
    latestMessage = message.data;
  } else if (message.from === "popup") {
    sendResponse({ data: latestMessage });
    return true;
  }
});