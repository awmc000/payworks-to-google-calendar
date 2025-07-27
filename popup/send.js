/**
 * send.js
 * 
 * Primary popup script
 */


function generateGoogleCalendarLinkLocal({
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

const shiftToEventLink = (shift) => {
  let startDate = new Date(shift.date + " " + shift.shift.start);
  let endDate = new Date(shift.date + " " + shift.shift.end);
  let detail = shift.shift.description;
  return generateGoogleCalendarLinkLocal({
    title: "Work: " + detail, 
    startDateTime: startDate, 
    endDateTime: endDate}
  );
};

const shiftToStr = (shift) => {
  return shift.shift.startOriginal + " - " + shift.shift.endOriginal + " on " + shift.date.substr(6);
};

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