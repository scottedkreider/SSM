"use strict";

import MultiMonthCalendarDisplay from "./multiMonthCalendar.Interface.js";
import getMMCFromDatabase from "./multiMonthCalendar.EventListeners.js";

async function loadMMCOnPageLoad(){
    window.addEventListener("load",async () => {
        getMMCFromDatabase()
            .then((res) => {
                if(res.statusCode === 200){
                    localStorage.setItem("_multiMonthCalendar",JSON.stringify(res.payload.mmc));
                } else if (res.statusCode === 401) {
                    localStorage.removeItem("_multiMonthCalendar");
                } else {
                    console.log("load MMC error")
                }
            })
    });
}

export default async function displayMultiMonthCalendar() {
    const multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");
    multiMonthCalendarDiv.replaceChildren();
    const multiMonthCalendarDiv_text = document.createElement("h1");
    multiMonthCalendarDiv_text.innerText = "MultiMonth Calendar";
    multiMonthCalendarDiv_text.setAttribute("class", "row justify-content-center")
    multiMonthCalendarDiv.setAttribute("class", "flex-container justify-content-center")
    multiMonthCalendarDiv.appendChild(multiMonthCalendarDiv_text);

    var multiMonthCalendarDisplay = new MultiMonthCalendarDisplay();

    if (!localStorage.getItem("_multiMonthCalendar")) {
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

await loadMMCOnPageLoad()
    .then(async () => await displayMultiMonthCalendar());
