/**
 * Background script
 * 
 * Part of Payworks 2 Google Calendar browser extension
 */

// Message handling ===========================================================
let latestMessage = null;

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.from === "content") {
    latestMessage = message.data;
  } else if (message.from === "popup") {
    sendResponse({ data: latestMessage });
    return true;
  }
});