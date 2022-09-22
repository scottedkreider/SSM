"use strict";

import TaskListDisplay from "./weeklyTaskList.Interface.js";
import TaskList from "./weeklyTaskList.Model.js";

var taskListDisplay = new TaskListDisplay();
var _taskList;

// var _taskList = new TaskList();
// _taskList.addTaskCategory("CSCI5900", "grad project prep");
// _taskList.addTaskToTaskCategory("CSCI5900", "Grad project Powerpoint presentation", "", 180);
// _taskList.addInformationToTask("CSCI5900"
//                                 , "Grad project Powerpoint presentation"
//                                 , "Grad project Powerpoint presentation"
//                                 , "To be done by the end of the Fall 22 semester"
//                                 ,"2022-04-29"
//                                 ,"2022-04-19"
//                                 , 180);

function displayTaskList(){
    if(!localStorage.getItem("_taskList")){
        _taskList = taskListDisplay.addNewTaskList();
        localStorage.setItem("_taskList",JSON.stringify(_taskList));
    }
    taskListDisplay.insertTaskListToDisplay(JSON.parse(localStorage.getItem("_taskList")));
    taskListDisplay.buildTaskDisplay();
}



displayTaskList();




