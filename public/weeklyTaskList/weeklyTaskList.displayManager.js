"use strict";

import {
    weeklyTaskListHeaderDiv, weeklyTaskListBodyDiv
} from "./weeklyTaskList.Interface.js";

import {
    connectWeeklyTaskListEventListeners
} from "./weeklyTaskList.EventListeners.js";

///////////////////////////////////////
const weeklyTaskListDiv = document.getElementById("weeklyTaskListDiv");
///////////////////////////////////////


///////////////////////////////////////
// Apply dynamic visual elements
//      such as highlighting of rows when checked off

function applyCheckboxVisualElementUpdates(){
    const checkBoxes = document.querySelectorAll(".doneCheckBox");
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked){
            checkbox.parentElement.parentElement.classList += "done";
        } else {
            checkbox.parentElement.parentElement.classList.remove("done");
        }
    })
}

function applyDynamicVisualElements(){
    applyCheckboxVisualElementUpdates();
}
///////////////////////////////////////



///////////////////////////////////////
// WTL Div
export function displayWeeklyTaskListDiv(weeklyTaskListDiv){
    weeklyTaskListDiv.replaceChildren();
    weeklyTaskListDiv.appendChild(weeklyTaskListHeaderDiv());
    weeklyTaskListDiv.appendChild(weeklyTaskListBodyDiv());
    connectWeeklyTaskListEventListeners(weeklyTaskListDiv);
    applyDynamicVisualElements();
}

displayWeeklyTaskListDiv(weeklyTaskListDiv);
///////////////////////////////////////

// const taskCategoryData = 
// {"name":"CRSE-1111","tasks":[{"done":1,"name":"Task 11","worktime":["12/15/2022","12/16/2022"],"duedate":"12/31/2022"},{"done":0,"name":"Task 12","worktime":["12/17/2022"],"duedate":"12/30/2022"},{"done":0,"name":"Task 13","worktime":["12/15/2022","12/17/2022","12/19/2022"],"duedate":"12/29/2022"}]}
// const taskData = 
// {"done":1,"name":"Task 11","worktime":["12/15/2022","12/16/2022"],"duedate":"12/31/2022"}
