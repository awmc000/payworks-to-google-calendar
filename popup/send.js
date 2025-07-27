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

/**
* "Send Shifts" button handler. 
*/
const sendShifts = () => {
  console.log("TODO: Send shifts to google API");
};