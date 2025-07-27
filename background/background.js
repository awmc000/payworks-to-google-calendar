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

// Hitting Google APIs ========================================================
const REDIRECT_URL = browser.identity.getRedirectURL();
const CLIENT_ID = "977868162840-b76madpnpo44r7jud93d4lpodnnbkfeb.apps." + 
  "googleusercontent.com";