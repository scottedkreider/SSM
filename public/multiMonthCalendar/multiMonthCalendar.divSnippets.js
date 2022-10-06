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
    _deleteMMCButton.innerHTML = "Delete MMC";
    deleteMMCDiv.appendChild(_deleteMMCButton);

    return deleteMMCDiv;
}

export function checkAllDaysDiv(){
    var checkAllDaysDiv = document.createElement("div");
    var _checkAllDaysButton = document.createElement("button");
    _checkAllDaysButton.setAttribute("id","_checkAllDaysButton");
    _checkAllDaysButton.innerHTML = "Check Off All Days";
    checkAllDaysDiv.appendChild(_checkAllDaysButton);

    return checkAllDaysDiv;
}

export function editDailyInfoDiv(){
    var editDailyInfoDiv = document.createElement("div");
    var _editDailyInfoButton = document.createElement("button");
    _editDailyInfoButton.setAttribute("id","_editDailyInfoButton");
    _editDailyInfoButton.innerHTML = "Edit Daily Information";
    editDailyInfoDiv.appendChild(_editDailyInfoButton);

    return editDailyInfoDiv;
}