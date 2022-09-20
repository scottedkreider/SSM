"use strict";

import MultiMonthCalendarDisplay from "./multiMonthCalendar.Interface.js";
import MultiMonthCalendarManager from "./multiMonthCalendar.Model.js";

export default function displayMultiMonthCalendar(){
    const indexDiv = document.getElementById("multiMonthCalendarDiv");
    indexDiv.innerHTML = "<h1>MultiMonth Calendar</h1>";

    var multiMonthCalendarDisplay = new MultiMonthCalendarDisplay();

    if(!localStorage.getItem("_multiMonthCalendar")){
        multiMonthCalendarDisplay.buildMultiMonthCalendarDateEntryDisplay();
    } else {

        var _mgr = JSON.parse(localStorage.getItem("_multiMonthCalendar"));
        Object.assign(new MultiMonthCalendarManager, _mgr);
        console.log(_mgr);

        multiMonthCalendarDisplay.insertMultiMonthCalendarToDisplay(JSON.parse(localStorage.getItem("_multiMonthCalendar")));
        multiMonthCalendarDisplay.buildMultiMonthCalendarDisplay();
    }
}

displayMultiMonthCalendar();
