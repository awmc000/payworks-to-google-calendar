const shiftToStr = (shift) => {
  return "From " + shift.shift.start + " to " + shift.shift.end + " on " + shift.date;
};

browser.runtime.sendMessage({ from: "popup" }).then((response) => {
  const shifts = response.data;
  document.getElementById('shiftNumber').textContent = shifts?.length ?? "No message yet.";
  shifts.forEach(element => {
    let li = document.createElement('li');
    li.textContent = shiftToStr(element);
    document.getElementById('shiftList').appendChild(li);
  });
});

/**
* "Send Shifts" button handler. 
*/
const sendShifts = () => {
  console.log("TODO: Send shifts to google API");
};