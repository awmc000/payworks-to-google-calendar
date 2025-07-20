browser.runtime.sendMessage({ from: "popup" }).then((response) => {
    const shifts = response.data;
    alert(shifts);
    document.getElementById('shiftNumber').textContent = shifts?.payworksShifts.length ?? "No message yet.";
});