const shiftToStr = (shift) => {
    return "From " + shift.shift.start + " to " + shift.shift.end + " on " + shift.date;
};

browser.runtime.sendMessage({ from: "popup" }).then((response) => {
    const shifts = response.data;
    console.log('getting shifts');
    console.log(shifts);
    document.getElementById('shiftNumber').textContent = shifts?.length ?? "No message yet.";
    shifts.forEach(element => {
        let li = document.createElement('li');
        li.textContent = shiftToStr(element);
        document.getElementById('shiftList').appendChild(li);
    });
});