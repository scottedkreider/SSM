const weeklyCalendarDiv = document.getElementById("weeklyCalendarDiv");

let ec = new EventCalendar(document.getElementById('weeklyCalendarDiv'), {
    view: 'timeGridWeek',
    events: [
        // your list of events
    ]
});

// weeklyCalendarDiv.innerText = "Weekly Calendar"