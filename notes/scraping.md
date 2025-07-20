# Scraping the shifts in the browser with js

## How to figure out what month is selected

## How to get the shifts

```js
citems = document.querySelectorAll('.calendar__day-content');
```

- get .calendar__day-content divs
- find .calendar__items div inside each
- find data-autom attribute of .calendar__items
- last 10 chars of data-autom are date in form "YYYY-MM-DD"
- inside .calendar__items, find .calendar__item-text
- find the div inside that div which has attribute data-bind="text : item.header"
- the content of this last div should be the shift in the easily parsed form "2p - 7p"

### LLM generated code from my analysis

```js
document.querySelectorAll('.calendar__day-content').forEach(dayContent => {
  const itemsDiv = dayContent.querySelector('.calendar__items');
  if (!itemsDiv) return;

  const dataAutom = itemsDiv.getAttribute('data-autom');
  if (!dataAutom || dataAutom.length < 10) return;

  const date = dataAutom.slice(-10); // format: "YYYY-MM-DD"

  itemsDiv.querySelectorAll('.calendar__item-text').forEach(itemText => {
    const shiftDiv = itemText.querySelector('div[data-bind="text : item.header"]');
    if (!shiftDiv) return;

    const shift = shiftDiv.textContent.trim();
    if (shift) {
      console.log(`${date}: ${shift}`);
    }
  });
});

```

### Improved, as a function
```js
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

      const shift = shiftDiv.textContent.trim();
      if (shift) {
        const splitShift = shift.split('–').map(s => s.trim());
        results.push({"date": date, "shift": {"start": splitShift[0], "end": splitShift[1]}});
      }
    });
  });

  return results;
};
```