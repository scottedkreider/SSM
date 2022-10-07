"use strict";

import MultiMonthCalendarDisplay from "./multiMonthCalendar.Interface.js";
// import MultiMonthCalendarManager from "./multiMonthCalendar.Model";

export default function displayMultiMonthCalendar(){
    const multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");
    multiMonthCalendarDiv.innerHTML = "<h1>MultiMonth Calendar</h1>";

    var multiMonthCalendarDisplay = new MultiMonthCalendarDisplay();

    if(!localStorage.getItem("_multiMonthCalendar")){
        multiMonthCalendarDisplay.buildMultiMonthCalendarDateEntryDisplay();
    } else {

        var _mgr = JSON.parse(localStorage.getItem("_multiMonthCalendar"));
        console.log(_mgr);

        multiMonthCalendarDisplay.insertMultiMonthCalendarToDisplay(JSON.parse(localStorage.getItem("_multiMonthCalendar")));
        multiMonthCalendarDisplay.buildMultiMonthCalendarDisplay();
    }
}

displayMultiMonthCalendar();