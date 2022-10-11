"use strict";

import MultiMonthCalendarDisplay from "./multiMonthCalendar.Interface.js";


export default async function displayMultiMonthCalendar(){
    const multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");
    multiMonthCalendarDiv.replaceChildren();
    const multiMonthCalendarDiv_text = document.createElement("h1");
    multiMonthCalendarDiv_text.innerText = "MultiMonth Calendar";
    multiMonthCalendarDiv_text.setAttribute("class","row justify-content-center")
    multiMonthCalendarDiv.setAttribute("class","flex-container justify-content-center")
    multiMonthCalendarDiv.appendChild(multiMonthCalendarDiv_text);

    var multiMonthCalendarDisplay = new MultiMonthCalendarDisplay();

    window.addEventListener("load",async () => {
        // await getMMCFromDatabase();
    });

    if(!localStorage.getItem("_multiMonthCalendar")){
        multiMonthCalendarDisplay.buildMultiMonthCalendarDateEntryDisplay();
    } else {

        var _mgr = JSON.parse(localStorage.getItem("_multiMonthCalendar"));

        multiMonthCalendarDisplay.insertMultiMonthCalendarToDisplay(_mgr);
        multiMonthCalendarDisplay.buildMultiMonthCalendarDisplay();
    }

    // window.addEventListener("onunload",async () => {
    //     console.log("at the end");
    //     await sendMMCToDatabase();
    // });
}


await displayMultiMonthCalendar();