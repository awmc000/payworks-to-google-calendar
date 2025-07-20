# How this extension works

## Purpose of this document

- Answer questions that might be asked by users, other developers, and myself in the development, deployment, and usage process for the Payworks to Google Calendar browser extension.

## How does the extension work?
- To get a list of shifts, it scrapes the calendar when the user has it open.
- The browser extension is made up of a content script, a background script, and a toolbar popup page with a script.
- Ideally the pop-up page will interact directly with the Google Calendar API with no need for an extension backend API.

## How does the extension find my shifts?

- It reads the information from the calendar when the user opens it.

## How does the user create calendar events?

- User should do the following:
- open the Payworks calendar, 
- open the toolbar popup, 
- sign in to Google and grant permissions if they have not already,
- then press Send.


## What kind of information is relevant to interacting with the calendar?

- A unique deterministic ID can be drawn from the day of the shift.
    - Could have the form "YYYY-MM-DD"
    - We can use this ID to avoid creating duplicate events when we update a single shift or many.

## Resources used

- This section doubles as a "Recommended Reading" 😄

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity/launchWebAuthFlow
https://github.com/mdn/webextensions-examples/blob/main/google-userinfo/options/options.js
https://github.com/mdn/webextensions-examples/tree/main/google-userinfo
https://developers.google.com/workspace/calendar/api/quickstart/js
