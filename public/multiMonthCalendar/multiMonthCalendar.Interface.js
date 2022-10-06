"use strict";

// import {
//     mmcDateEntryForm, mmcCalendarDiv, deleteMMCDiv, checkAllDaysDiv,
//     editDailyInfoDiv
// } from "./multiMonthCalendar.divSnippets.js";
// import {
//     submitDatesListener, checkOffDaysListener,
//     deleteMMCListener, checkAllDaysListener,
//     editDailyInfoListener
// } from "./multiMonthCalendar.EventListeners.js";
// import MultiMonthCalendarManager from "./multiMonthCalendar.Model.js";

// export default class MultiMonthCalendarDisplay {
        // var _mmc = null;
        const multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");


    // Take in a mmc to display on the screen
    // Contract: mmc is not null
    //           mmc is of type MultiMonthCalendarManager
    export default function insertMultiMonthCalendarToDisplay(mmc) {
        _mmc = mmc;
    }

    export function buildMultiMonthCalendarHeader() {
        this.multiMonthCalendarDiv.setAttribute("class", "multiMonthCalendarDisplay");

        const mmcH1 = document.createElement("h1");
        mmcH1.innerText = "MultiMonthCalendar"

        const mmcH2 = document.createElement("h1");
        mmcH2.innerText = `Title: ${_mmc.Title}`;

        const mmcp = document.createElement("p");
        mmcp.innerText = `Dates: ${_mmc.StartDate} to ${this._mmc.EndDate}`;
        
        multiMonthCalendarDiv.appendChild(mmcH1);
        multiMonthCalendarDiv.appendChild(mmcH2);
        multiMonthCalendarDiv.appendChild(mmcp);

        multiMonthCalendarDiv.appendChild(deleteMMCDiv());
        deleteMMCListener();

        multiMonthCalendarDiv.appendChild(checkAllDaysDiv());
        checkAllDaysListener(_mmc);

        multiMonthCalendarDiv.appendChild(editDailyInfoDiv());
        editDailyInfoListener(_mmc);
    }

    // Populate the mmcDiv with the calendar
    export function buildMultiMonthCalendarDisplay() {
        buildMultiMonthCalendarHeader();
        mmcCalendarDiv(multiMonthCalendarDiv, _mmc);
        checkOffDaysListener(_mmc);
    }

    export function addNewMultiMonthCalendar(startDate, endDate, title){
        this._mmc = new MultiMonthCalendarManager(startDate, endDate, title)._mmc;

        return this._mmc;
    }

    export default function buildMultiMonthCalendarDateEntryDisplay(){
        multiMonthCalendarDiv.appendChild(mmcDateEntryForm());
        submitDatesListener();
    }
// }