"use strict";

import {
    deleteButtonDiv, editSaveToggleButtonDiv, editableTextInputDiv, editableDateInputDiv
    , addButtonDiv, taskCategoryDiv, taskDiv
} from "./weeklyTaskList.divSnippets.js";
import { editorButtonsListener, addButtonsListener } from "./weeklyTaskList.EventListeners.js";
import TaskList from "./weeklyTaskList.Model.js";


export default class TaskListDisplay {
    constructor() {
        // Div holding the entire Weekly Task List

        this._taskList = null;
    }

    // Take in a taskList to display on the screen

    // Contract: taskList is not null
    //           taskList is of type TaskList
    insertTaskListToDisplay(taskList) {
        this._taskList = taskList;
    }

    buildTaskListHeader() {
        const weeklyTaskListDiv = document.getElementById("weeklyTaskListDiv");
        weeklyTaskListDiv.setAttribute("class", "weeklyTaskListDisplay");
        weeklyTaskListDiv.innerHTML = "<h1>Weekly Task List</h1>";
        weeklyTaskListDiv.appendChild(addButtonDiv('taskCategory'));
    }

    // Populate the weeklyTaskListDiv with task categories and tasks
    buildTaskDisplay() {
        document.addEventListener("DOMContentLoaded", () => {
            if(!this._taskList){
                this.buildTaskListHeader();
                addButtonsListener();
            } else {
                this.buildTaskListHeader();
                this._taskList.TaskCategoryList.forEach(taskCategory => {
                    var _taskCategoryDiv = taskCategoryDiv(taskCategory);
                    weeklyTaskListDiv.appendChild(_taskCategoryDiv);
                })
                addButtonsListener();
                editorButtonsListener();
            }
        })
    }

    addNewTaskList(){
        this._taskList = new TaskList();
        const weeklyTaskListDiv = document.getElementById("weeklyTaskListDiv");
        weeklyTaskListDiv.appendChild(addButtonDiv('taskList'));
        addButtonsListener();
        return this._taskList;
    }
}







