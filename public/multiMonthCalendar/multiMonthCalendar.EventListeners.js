"use strict";

import MultiMonthCalendarManager from "./multiMonthCalendar.Model.js";
import displayMultiMonthCalendar from "./multiMonthCalendar.DisplayManager.js";

export function submitDatesListener(){
    const _submitButton = document.getElementById("mmcDateEntrySubmit_button");

    let _mmc_mgr;

    _submitButton.addEventListener("click",() => {
        // console.log("weSubmitting");
        const _startDate = document.getElementById("mmcDateEntryStartDate");
        const _endDate = document.getElementById("mmcDateEntryEndDate");
        const _mmcTitle = document.getElementById("mmcDateEntryTitle");

        _mmc_mgr = new MultiMonthCalendarManager(_startDate.value, _endDate.value, _mmcTitle.value);

        localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc_mgr._mmc));

        displayMultiMonthCalendar();
    })    
}


export function checkOffDaysListener(_mmc){
    var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    
    const _checkBoxes = document.querySelectorAll(".dayCheckbox");

    _checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener('change',() => {
            var cBoxId = checkbox.id.replace("cbox_","");
            if(checkbox.checked){
                // console.log(cBoxId);

                var day = _mmc.ListOfDays[cBoxId];
                var _d = new Date(day.FullYear, day.Month12 - 1, day.DayOfTheMonth);
                if(_d < yesterday){
                    day.Completed = true;
                    localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc));
                    checkbox.parentElement.innerHTML = "complete";
                    // console.log("checked");
                } else {
                    checkbox.checked = false;
                }
            }
        });
    })
}

export function deleteMMCListener(){
    const _deleteButton = document.getElementById("_deleteMMCButton");
    _deleteButton.addEventListener("click",() => {
        // console.log("weDeleting");
        if(confirm("are you sure?")){
            localStorage.removeItem("_multiMonthCalendar");
            localStorage.removeItem("_mgr");
            displayMultiMonthCalendar();
        }
    })

}

export function checkAllDaysListener(_mmc){
    var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
    const _checkAllDaysButton = document.getElementById("_checkAllDaysButton");
    _checkAllDaysButton.addEventListener("click",() => {
        // console.log("weBeChecking")
        _mmc.ListOfDays.forEach((day) => {
            var _d = new Date(day.FullYear, day.Month12 - 1, day.DayOfTheMonth);
            if(_d < yesterday){
                day.Completed = true;
            }
        });

        // console.log(_mmc);
        localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc));

        displayMultiMonthCalendar();
    });
}


export function editDailyInfoListener(_mmc){

    const _editDailyInfoButton = document.getElementById("_editDailyInfoButton");

    _editDailyInfoButton.addEventListener("click",() => {
        const _infoFields = document.querySelectorAll(".mmcInfoFields");
        
        _infoFields.forEach(field => {
            field.disabled = false;
        });

        _editDailyInfoButton.innerHTML = "Save information";
        _editDailyInfoButton.setAttribute("id","_saveDailyInfoButton");

        saveDailyInfoListener(_mmc);
    });   
}



export function saveDailyInfoListener(_mmc){

    const _saveDailyInfoButton = document.getElementById("_saveDailyInfoButton");

    _saveDailyInfoButton.addEventListener("click",() => {
        const _infoFields = document.querySelectorAll(".mmcInfoFields");
        
        _infoFields.forEach(field => {
            field.disabled = true;
            if(field.value !== field.defaultValue){
                var itemNumber = field.id.replace("info_","");
                var dayNumber = field.parentElement.parentElement.id.replace("day_","");

                _mmc.ListOfDays[dayNumber].Info[itemNumber] = field.value;
                localStorage.setItem("_multiMonthCalendar",JSON.stringify(_mmc));
            }
        });

        _saveDailyInfoButton.innerHTML = "Edit Daily Information";
        _saveDailyInfoButton.setAttribute("id","_editDailyInfoButton");

        editDailyInfoListener(_mmc);
        displayMultiMonthCalendar();
    });   
}

export async function sendMMCToDatabase(){
    await fetch('/api/multiMonthCalendar', {
        method: "POST",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _mgr: localStorage.getItem("_multiMonthCalendar")
        })
    })
        .then(async (response) => {
            console.log(response);
        }
        )
}

export function saveMMCListener(_mmc){
    const _deleteButton = document.getElementById("_saveCalendarToDBButton");
    _deleteButton.addEventListener("click",() => {
        if(confirm("are you sure?")){
            console.log("here")
            sendMMCToDatabase();
        }
    })

}


export default async function getMMCFromDatabase(){
    var res;
    await fetch('/api/multiMonthCalendar', {
        method: "GET",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`
        }
    })
        .then(async (response) => {
            res = {
                statusCode: response.status,
                payload: await response.json()
            }
        }
        )
    return res;
}