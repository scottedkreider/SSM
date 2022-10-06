"use strict";

// import
//     { submitDatesListener }
//     from "./multiMonthCalendar.EventListeners.js";
// import
//     {   mmcDateEntryForm    }
//     from "./multiMonthCalendar.divSnippets.js";

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
}

function mmcDateEntryForm(){
    var today = new Date();

    var _mmcDateEntryDiv = document.createElement('div');
    _mmcDateEntryDiv.setAttribute("class","mmcDateEntryDiv");

    var _mmcDateEntryForm = document.createElement('form');
    _mmcDateEntryForm.setAttribute("class","mmcDateEntryForm");

    var startDateDiv = document.createElement("div");
    startDateDiv.innerHTML = "Enter MultiMonth Period Start Date";
    var startDateInput = document.createElement("input");
    startDateInput.setAttribute("type","date");
    startDateInput.setAttribute("id","mmcStartDate");
    // Update to have dynamic date around the current date
    startDateInput.setAttribute("value","2022-05-01");
    startDateDiv.appendChild(startDateInput);

    var endDateDiv = document.createElement("div");
    endDateDiv.innerHTML = "Enter MultiMonth Period End Date";
    var endDateInput = document.createElement("input");
    endDateInput.setAttribute("type","date");
    endDateInput.setAttribute("id","mmcEndDate");
    // Update to have dynamic date around the current date
    endDateInput.setAttribute("value","2022-08-19");
    endDateDiv.appendChild(endDateInput);

    var mmcTitleDiv = document.createElement("div");
    mmcTitleDiv.innerHTML = "Enter MultiMonth Period Title";
    var mmcTitleInput = document.createElement("input");
    mmcTitleInput.setAttribute("id","mmcTitle");
    mmcTitleInput.setAttribute("placeholder","Title");
    mmcTitleDiv.appendChild(mmcTitleInput);

    var submitDatesButton = document.createElement("button");
    submitDatesButton.setAttribute("type","button");
    submitDatesButton.setAttribute("id","mmcDateSubmitButton");
    submitDatesButton.innerHTML = "Submit";

    _mmcDateEntryForm.appendChild(startDateDiv);
    _mmcDateEntryForm.appendChild(endDateDiv);
    _mmcDateEntryForm.appendChild(mmcTitleDiv);
    _mmcDateEntryForm.appendChild(submitDatesButton);

    return _mmcDateEntryForm;
}


function submitDatesListener(){
    const _submitButton = document.getElementById("mmcDateSubmitButton");
    // console.log(_submitButton);

    let _mmc_mgr;

    _submitButton.addEventListener("click",() => {
        // console.log("weSubmitting");
        const _startDate = document.getElementById("mmcStartDate");
        const _endDate = document.getElementById("mmcEndDate");
        const _mmcTitle = document.getElementById("mmcTitle");

        _mmc_mgr = {
            startdate: _startDate.value,
            enddate: _endDate.value,
            _mmcTitle: _mmcTitle.value
        }

        localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc_mgr));
        // localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc_mgr._mmc));
        // localStorage.setItem("_mgr",JSON.stringify(_mmc_mgr));
        // localStorage.setItem("_lastSent",JSON.stringify(true));

        // sendMultiMonthCalendarToDb(_mmc_mgr);

        // displayMultiMonthCalendar();
    })    
}

displayMultiMonthCalendar();
