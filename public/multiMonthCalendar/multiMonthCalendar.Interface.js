"use strict";

import {
    mmcDateEntryForm, mmcCalendarDiv, deleteMMCDiv, checkAllDaysDiv,
    editDailyInfoDiv, saveCalendarToDBDiv
} from "./multiMonthCalendar.divSnippets.js";
import {
    submitDatesListener, checkOffDaysListener,
    deleteMMCListener, checkAllDaysListener,
    editDailyInfoListener, saveMMCListener
} from "./multiMonthCalendar.EventListeners.js";
import MultiMonthCalendarManager from "./multiMonthCalendar.Model.js";

export default class MultiMonthCalendarDisplay {
    constructor() {
        // Div holding the entire MultiMonthCalendar

        this._mmc = null;
        this.multiMonthCalendarDiv = document.getElementById("multiMonthCalendarDiv");
    }

    // Take in a mmc to display on the screen
    // Contract: mmc is not null
    //           mmc is of type MultiMonthCalendarManager
    insertMultiMonthCalendarToDisplay(mmc) {
        this._mmc = mmc;
    }

    buildMultiMonthCalendarHeader() {
        this.multiMonthCalendarDiv.setAttribute("class", "multiMonthCalendarDisplay");
        this.multiMonthCalendarDiv.innerHTML =
            `<h1>MultiMonthCalendar</h1>
            <h2>Title: ${this._mmc.Title}</h2>
            <p>Dates: ${this._mmc.StartDate} to ${this._mmc.EndDate}</p>
            `;

        const mmcButtonsDiv = document.createElement("div");
        mmcButtonsDiv.classList += "container mmcButtonsDiv";
        mmcButtonsDiv.appendChild(deleteMMCDiv())
        mmcButtonsDiv.appendChild(checkAllDaysDiv())
        mmcButtonsDiv.appendChild(editDailyInfoDiv())
        mmcButtonsDiv.appendChild(saveCalendarToDBDiv())


        this.multiMonthCalendarDiv.appendChild(mmcButtonsDiv);
        deleteMMCListener();
        checkAllDaysListener(this._mmc);
        editDailyInfoListener(this._mmc);
        saveMMCListener(this._mmc);
    }

    // Populate the mmcDiv with the calendar
    buildMultiMonthCalendarDisplay() {
        this.buildMultiMonthCalendarHeader();
        mmcCalendarDiv(this.multiMonthCalendarDiv, this._mmc);
        checkOffDaysListener(this._mmc);
    }

    addNewMultiMonthCalendar(startDate, endDate, title){
        this._mmc = new MultiMonthCalendarManager(startDate, endDate, title)._mmc;

        return this._mmc;
    }

    buildMultiMonthCalendarDateEntryDisplay(){
        this.multiMonthCalendarDiv.appendChild(mmcDateEntryForm());
        submitDatesListener();
    }
}