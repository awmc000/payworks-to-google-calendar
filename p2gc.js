/**
 * p2gc.js
 * 
 * Payworks to Google Calendar browser extension, main content script
 *
 * Alex McColm, july 20 2025
 *
 */

// GLOBALS
let payworksShifts;

/**
 * Converts a 12 hour time with meridian to a 24 hour time.
 * @param {string} timeStr A string in the form "2a", "7:30p", etc.
 * @returns A string in the form "02:00", "19:30", etc.
 */
function to24Hour(timeStr) {
  const match = timeStr.match(/^(\d{1,2})(?::(\d{2}))?([ap])$/i);
  if (!match) throw new Error("Invalid time format");

  let [ , hour, minute, meridian ] = match;
  hour = parseInt(hour, 10);
  minute = minute ? parseInt(minute, 10) : 0;

  if (meridian.toLowerCase() === 'p' && hour !== 12) hour += 12;
  if (meridian.toLowerCase() === 'a' && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
}

/**
 * Collects shifts from the Payworks Time Off Calendar while it is 
 * open in the browser.
 * @returns A list of shifts of the form 
 *  { date: "YYYY-MM-DD", "shift": {"start": "2p", "end": "7p"} }
 */
const getShifts = () => {
  let results = [];
  
  const calendarDays = document.querySelectorAll('.calendar__day-content');
  
  calendarDays.forEach(dayContent => {
    const items = dayContent.querySelector('.calendar__items');
    if (!items) return;
    
    const dataAutom = items.getAttribute('data-autom');
    if (!dataAutom || dataAutom.length < 10) return;
    
    const date = dataAutom.slice(-10); // format: "YYYY-MM-DD"
    
    items.querySelectorAll('.calendar__item-text').forEach(itemText => {
      const shiftDiv = itemText.querySelector('div[data-bind="text : item.header"]');
      if (!shiftDiv) return;
      
      const descDiv = itemText.querySelector('div[data-bind="text : item.subHeader"');
      if (!descDiv) return;

      const shift = shiftDiv.textContent.trim();
      if (shift) {
        const splitShift = shift.split('–').map(s => s.trim());
        results.push({
          "date": date, 
          "shift": {
            "start": to24Hour(splitShift[0]), 
            "end": to24Hour(splitShift[1]),
            "startOriginal": splitShift[0],
            "endOriginal": splitShift[1],
            "description": descDiv.textContent.trim()
          }
        });
      }
    });
  });
  
  return results;
};

async function waitForCalendarToLoad({
  itemClass = 'calendar__item',
  dayContentClass = 'calendar__day-content',
  spinnerId = 'pendingSpinner',
} = {}) {
  const itemsExist = () =>
    document.getElementsByClassName(itemClass).length > 0;

  const dayContentExists = () =>
    document.getElementsByClassName(dayContentClass).length > 30;

  const pendingSpinnerGone = () =>
    document.getElementById(spinnerId) == null;

  while (!(itemsExist() && dayContentExists() && pendingSpinnerGone())) {
    await new Promise((r) => setTimeout(r, 200));
  }
}

const loadShiftData = () => {
  waitForCalendarToLoad().then(() => {
    const payworksShifts = getShifts();
    browser.runtime.sendMessage({ from: 'content', data: payworksShifts });
    console.log(payworksShifts);
  });
};

loadShiftData();
document.querySelector('.date-card-selector__cards').onclick = loadShiftData;