/**
 * send.js
 * 
 * Primary popup script
 */

/**
 * Creates a GC event creating link for the event described.
 * @param {Date} startDateTime 
 * @param {Date} endDateTime 
 * @returns A string which is a valid Google Calendar event creating link
 */
function generateGcLink({
  title = 'Work',
  startDateTime, // Date object or ISO string
  endDateTime,   // Date object or ISO string
  details = '',
  location = '',
  timeZone = 'America/Vancouver'
}) {
  const formatLocal = (dt) => {
    const date = new Date(dt);
    const pad = (n) => n.toString().padStart(2, '0');

    const yyyy = date.getFullYear();
    const MM = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const HH = pad(date.getHours());
    const mm = pad(date.getMinutes());

    return `${yyyy}${MM}${dd}T${HH}${mm}00`;
  };

  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: title,
    dates: `${formatLocal(startDateTime)}/${formatLocal(endDateTime)}`,
    details,
    location,
    ctz: timeZone
  });

  return `${base}&${params.toString()}`;
}

/**
 * Wrapper for generateGcLink() tuned to the specifics of a shift object.
 * @param {*} shift Shift object
 * @returns Valid GC event creation link
 */
const shiftToEventLink = (shift) => {

  // startDate and endDate pass constructors strings of the form "2025-07-05 16:00"
  let startDate = new Date(shift.date + " " + shift.shift.start);
  let endDate = new Date(shift.date + " " + shift.shift.end);
  let detail = shift.shift.description;

  return generateGcLink({
    title: "Work: " + shift.shift.description, 
    startDateTime: startDate, 
    endDateTime: endDate,
    details: detail  
  });
};

const shiftToStr = (shift) => {
  return shift.shift.startOriginal + " - " + shift.shift.endOriginal + " on " + shift.date.substr(6);
};

/**
 * Send a message to the background script to request the shifts object.
 * Then construct its representation on the DOM.
 */
browser.runtime.sendMessage({ from: "popup" }).then((response) => {
  const shifts = response.data;
  document.getElementById('shiftNumber').textContent = shifts?.length ?? "No message yet.";
  shifts.forEach(element => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = shiftToEventLink(element);
    a.textContent = shiftToStr(element);
    li.appendChild(a);
    document.getElementById('shiftList').appendChild(li);
  });
});

// Interactions with OAuth and Google Calendar API ============================

/**
* "Send Shifts" button handler. 
*/
const sendShifts = () => {
  console.log("TODO: Send shifts to google API");
};

// WEB type
const CLIENT_ID = "977868162840-b76madpnpo44r7jud93d4lpodnnbkfeb.apps." + 
  "googleusercontent.com";
const REDIRECT_URI = "https://amccolm.codes/p2gcauth";
const SCOPE = "https://www.googleapis.com/auth/calendar";
const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";

/**
 * Entry point to OAuth 2.0 PKCE flow 
 * */
const authorize = async () => {

  // Create the code verifier: 128 chars in [A-Za-z0-9\-._~]
  let charsAvailable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";

  let codeVerifier = "";

  for (let i = 0; i < 128; i++) {
    codeVerifier = codeVerifier + charsAvailable.charAt(Math.floor(Math.random() * charsAvailable.length));
  }

  // Create code challenge: Base64URL (with no padding) encoded SHA256 hash of the code verifier.
  // BASE64URL-ENCODE(SHA256(ASCII(code_verifier)))
  // SHA-256 encode the code verifier.
  let shaEncodedVerifier = await window.crypto.subtle
    .digest('SHA-256', new TextEncoder().encode(codeVerifier));

  // Base 64 encode the SHA-256 ciphertext
  let binary = '';
  const bytes = new Uint8Array(shaEncodedVerifier);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  binary = btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  let codeChallenge = binary;

  // Prepare the Google OAuth URL with parameters
  let authUrlQuery = new URL(AUTH_URL);

  authUrlQuery.searchParams.append('client_id', CLIENT_ID);
  authUrlQuery.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrlQuery.searchParams.append('scope', SCOPE);
  authUrlQuery.searchParams.append('code_challenge', codeChallenge);
  authUrlQuery.searchParams.append('code_challenge_method', "S256");
  authUrlQuery.searchParams.append('response_type', "code");

  const authRequest = new Request(authUrlQuery, {method: "GET" });

  window
    .fetch(authRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
  });
};

window.addEventListener("message", (event) => {
  if (event.data?.type === "oauth2_callback") {
    const { code, state } = event.data;
    console.log("Received code:", code);

    // Continue with token exchange using fetch
    // exchangeCodeForToken(code);
  }
});