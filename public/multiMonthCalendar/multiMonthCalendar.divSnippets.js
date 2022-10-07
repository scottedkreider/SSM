"use strict";

const DayOfTheWeek = {
    1: "Sun",
    2: "Mon",
    3: "Tue",
    4: "Wed",
    5: "Thu",
    6: "Fri",
    7: "Sat"
}

// MMC
export function mmcDateEntryForm(){
    const today = new Date();
    const today_formatted = `${today.getUTCFullYear()}-${(today.getUTCMonth()+1).toString().padStart(2,"0")}-${today.getUTCDate().toString().padStart(2,"0")}`;
    console.log(today_formatted)
    console.log(today)


    // Div to hold the MMC date entry form
    const mmcDateEntry_div = document.createElement("div");

        // Form element
        const mmcDateEntry_form = document.createElement("form");

            // Period start date element
            const mmcDateEntryStartDate_div = document.createElement("div");
            mmcDateEntryStartDate_div.setAttribute("class","row justify-content-center");
            const mmcDateEntryStartDate_title = document.createTextNode("Enter MultiMonth Period Start Date")
            const mmcDateEntryStartDate_input = document.createElement("input");
            mmcDateEntryStartDate_input.setAttribute("type","date");
            mmcDateEntryStartDate_input.setAttribute("id","mmcDateEntryStartDate");
            mmcDateEntryStartDate_input.setAttribute("value",`${today_formatted}`);
            mmcDateEntryStartDate_div.appendChild(mmcDateEntryStartDate_title);
            mmcDateEntryStartDate_div.appendChild(mmcDateEntryStartDate_input);

            // Period end date element
            const mmcDateEntryEndDate_div = document.createElement("div");
            mmcDateEntryEndDate_div.setAttribute("class","row justify-content-center");
            const mmcDateEntryEndDate_title = document.createTextNode("Enter MultiMonth Period Start Date")
            const mmcDateEntryEndDate_input = document.createElement("input");
            mmcDateEntryEndDate_input.setAttribute("type","date");
            mmcDateEntryEndDate_input.setAttribute("id","mmcDateEntryEndDate");
            mmcDateEntryEndDate_input.setAttribute("value",`${today_formatted}`);
            mmcDateEntryEndDate_div.appendChild(mmcDateEntryEndDate_title);
            mmcDateEntryEndDate_div.appendChild(mmcDateEntryEndDate_input);

            // Period title element
            const mmcDateEntryTitle_div = document.createElement("div");
            mmcDateEntryTitle_div.setAttribute("class","row justify-content-center");
            const mmcDateEntryTitle_title = document.createTextNode("Enter MultiMonth Period Title");
            const mmcDateEntryTitle_input = document.createElement("input");
            mmcDateEntryTitle_input.setAttribute("id","mmcDateEntryTitle");
            mmcDateEntryTitle_input.setAttribute("placeholder","Title");
            mmcDateEntryTitle_div.appendChild(mmcDateEntryTitle_title);
            mmcDateEntryTitle_div.appendChild(mmcDateEntryTitle_input);

            // Period submit button
            const mmcDateEntrySubmit_div = document.createElement("div");
            mmcDateEntrySubmit_div.setAttribute("class","row justify-content-center");
            const mmcDateEntrySubmit_button = document.createElement("button");
            mmcDateEntrySubmit_button.setAttribute("id","mmcDateEntrySubmit_button");
            mmcDateEntrySubmit_button.setAttribute("type","button");
            mmcDateEntrySubmit_button.setAttribute("class","entryButton");            
            // mmcDateEntrySubmit_button.setAttribute("action","/");
            mmcDateEntrySubmit_button.innerText = "Submit";
            mmcDateEntrySubmit_div.appendChild(mmcDateEntrySubmit_button);

        mmcDateEntry_form.appendChild(mmcDateEntryStartDate_div);
        mmcDateEntry_form.appendChild(mmcDateEntryEndDate_div);
        mmcDateEntry_form.appendChild(mmcDateEntryTitle_div);
        mmcDateEntry_form.appendChild(mmcDateEntrySubmit_div);

    mmcDateEntry_div.appendChild(mmcDateEntry_form);

    return mmcDateEntry_div;
}


// MMC
export function mmcCalendarDiv(calendarDiv, _mmcToDisplay){
    var _mmc = _mmcToDisplay;

// Calendar Playground
    var mmcCalendar = document.createElement("div");
    mmcCalendar.setAttribute("id","calendarFlexContainer");
    mmcCalendar.setAttribute("class","wrapper");

    // Build day of the Week header
    for(var i = 1; i < 8; i++){
        var dayElt = document.createElement("div");
        dayElt.innerHTML = `${DayOfTheWeek[i]}`;
        mmcCalendar.appendChild(dayElt);
    }

    // Build first week of days - days prior to startDate are blank
    var firstDayOfTheWeek = _mmc.ListOfDays[0].DayOfTheWeek7;
    for(var i = 0; i < firstDayOfTheWeek - 1; i++){
        var holdElt = document.createElement("div");
        holdElt.innerHTML = "";
        mmcCalendar.appendChild(holdElt);
    }

    // Create new DayDiv for each day in our list
    _mmc.ListOfDays.forEach((day, index) => {
        var newElt = mmcCalendarDayDiv(day, index);
        mmcCalendar.appendChild(newElt);
    });
// Calendar Playground

    calendarDiv.appendChild(mmcCalendar);
}


// MMC
function mmcCalendarDayDiv(day, index){

    var calDayDiv = document.createElement("div");
    calDayDiv.setAttribute("id",`day_${index}`);
    calDayDiv.innerHTML = `${day.Month12}/${day.DayOfTheMonth}`;

    var cBoxDiv = document.createElement("div");
    if(day.Completed === true){
        cBoxDiv.innerHTML = "complete";
    } else {
        var cBox = document.createElement("input");
        cBox.setAttribute("type","checkbox");
        cBox.setAttribute("class","dayCheckbox");
        cBox.setAttribute("id",`cbox_${index}`);
        cBoxDiv.appendChild(cBox);
    }

    var infoDiv = document.createElement("div");
    for(var i = 0; i < 5; i++){
        var infoField = document.createElement("input");
        infoField.setAttribute("value",`${day.Info[i] ? day.Info[i] : ""}`);
        infoField.setAttribute("type","text");
        infoField.setAttribute("id",`info_${i}`);
        infoField.setAttribute("class","mmcInfoFields");
        infoField.setAttribute("size","16");
        infoField.setAttribute("disabled",true);
        infoDiv.appendChild(infoField);
    }

    calDayDiv.appendChild(cBoxDiv);
    calDayDiv.appendChild(infoDiv);
    return calDayDiv;
}


export function deleteMMCDiv(){
    var deleteMMCDiv = document.createElement("div");
    var _deleteMMCButton = document.createElement("button");
    _deleteMMCButton.setAttribute("id","_deleteMMCButton");
    _deleteMMCButton.setAttribute("class","entryButton");
    _deleteMMCButton.innerHTML = "Delete MMC";
    deleteMMCDiv.appendChild(_deleteMMCButton);

    return deleteMMCDiv;
}

export function checkAllDaysDiv(){
    var checkAllDaysDiv = document.createElement("div");
    var _checkAllDaysButton = document.createElement("button");
    _checkAllDaysButton.setAttribute("id","_checkAllDaysButton");
    _checkAllDaysButton.setAttribute("class","entryButton");
    _checkAllDaysButton.innerHTML = "Check Off All Days";
    checkAllDaysDiv.appendChild(_checkAllDaysButton);

    return checkAllDaysDiv;
}

export function editDailyInfoDiv(){
    var editDailyInfoDiv = document.createElement("div");
    var _editDailyInfoButton = document.createElement("button");
    _editDailyInfoButton.setAttribute("id","_editDailyInfoButton");
    _editDailyInfoButton.setAttribute("class","entryButton");    
    _editDailyInfoButton.innerHTML = "Edit Daily Information";
    editDailyInfoDiv.appendChild(_editDailyInfoButton);

    return editDailyInfoDiv;
}