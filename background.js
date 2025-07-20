let latestMessage = null;
// Listen for message from content script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === "content") {
    latestMessage = message.data;
    // no sendResponse needed, don't return true
  } else if (message.from === "popup") {
    sendResponse({ data: latestMessage });
    return true; // async response — but actually sent here immediately
  }
});