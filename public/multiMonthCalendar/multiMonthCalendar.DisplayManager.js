"use strict";

import
    { submitDatesListener }
    from "./public/multiMonthCalendar/multiMonthCalendar.EventListeners.js";
import
    {   mmcDateEntryForm    }
    from "./public/multiMonthCalendar/multiMonthCalendar.divSnippets.js";

export default function displayMultiMonthCalendar(){
    const indexDiv = document.getElementById("multiMonthCalendarDiv");
    const indexH1 = document.createElement("h1");
    indexH1.innerText = "MultiMonth Calendar";

    // if(!localStorage.getItem("_multiMonthCalendar")){
    function buildMultiMonthCalendarDateEntryDisplay(){
        multiMonthCalendarDiv.appendChild(mmcDateEntryForm());
        submitDatesListener();
    }
    buildMultiMonthCalendarDateEntryDisplay();


    // } else {

    //     var _mgr = JSON.parse(localStorage.getItem("_multiMonthCalendar"));
    //     Object.assign(new MultiMonthCalendarManager, _mgr);
    //     console.log(_mgr);

    //     multiMonthCalendarDisplay.insertMultiMonthCalendarToDisplay(JSON.parse(localStorage.getItem("_multiMonthCalendar")));
    //     multiMonthCalendarDisplay.buildMultiMonthCalendarDisplay();
    // }
}

displayMultiMonthCalendar();
