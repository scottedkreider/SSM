"use strict";

import MultiMonthCalendarDisplay from "./multiMonthCalendar.Interface.js";

export default function displayMultiMonthCalendar(){
    const multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");
    multiMonthCalendarDiv.replaceChildren();
    const multiMonthCalendarDiv_text = document.createElement("h1");
    multiMonthCalendarDiv_text.innerText = "MultiMonth Calendar";
    multiMonthCalendarDiv_text.setAttribute("class","row justify-content-center")
    multiMonthCalendarDiv.setAttribute("class","flex-container justify-content-center")
    multiMonthCalendarDiv.appendChild(multiMonthCalendarDiv_text);

    var multiMonthCalendarDisplay = new MultiMonthCalendarDisplay();

    if(!localStorage.getItem("_multiMonthCalendar")){
        multiMonthCalendarDisplay.buildMultiMonthCalendarDateEntryDisplay();
    } else {

        var _mgr = JSON.parse(localStorage.getItem("_multiMonthCalendar"));
        console.log(_mgr);

        multiMonthCalendarDisplay.insertMultiMonthCalendarToDisplay(JSON.parse(localStorage.getItem("_multiMonthCalendar")));
        multiMonthCalendarDisplay.buildMultiMonthCalendarDisplay();
    }

    window.addEventListener("beforeunload",() => {
        console.log("before I go");
        fetch('/api/multiMonthCalendar', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_mgr)
        })
            .then((response) => {
                console.log(response);
            }
            )
    });
}

displayMultiMonthCalendar();