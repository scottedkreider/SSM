import {
    displayWeeklyTaskListDiv
} from "./weeklyTaskList.displayManager.js";

import {
    addNewTaskCategory, deleteTaskCategory, addNewTaskToTaskCategory
    , deleteTaskFromTaskCategory
} from "./weeklyTaskList.Model.js";

import {
    sendWTLToDatabase
} from "./weeklyTaskList.apiCalls.js";


function connectSaveTaskListToDBListener(divToRefresh) {
    document.getElementById("saveTaskListToDBButton").addEventListener("click", () => {
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)

        if (confirm("Are you sure you want to save?")) {
            sendWTLToDatabase();
        }
        displayWeeklyTaskListDiv(divToRefresh);
    });
}

function connectAddNewTaskCategoryListener(divToRefresh) {
    document.getElementById("addTaskCategoryButton").addEventListener("click", () => {
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
        const categoryName = window.prompt("Category name", "enter category name");
        if (categoryName) addNewTaskCategory(categoryName);
        displayWeeklyTaskListDiv(divToRefresh);
    });
}

function connectDeleteTaskCategoryListener(divToRefresh) {
    const deleteTaskCategoryButtons = document.querySelectorAll(".deleteTaskCategory");
    deleteTaskCategoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // On click
            //      Require confirmation of deletion
            //      Upon confirmation click
            //              Update dataset in LocalStorage
            //              Refresh current div
            if (window.confirm("Are you sure you want to delete this task category?")) {
                deleteTaskCategory(button.id.split("_")[1]);
                displayWeeklyTaskListDiv(divToRefresh);
            };
        });
    })
}


function connectEditTaskCategoryListener(divToRefresh) {

    const editTaskCategoryButtons = document.querySelectorAll(".editTaskCategory");
    editTaskCategoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // On toggle click (EDIT)
            //      Open input fields for editing
            // On toggle click (SAVE)
            //      Close input fields for editing
            //      Update dataset in LocalStorage
            //      Refresh current div
            // const taskName = window.prompt("Task name", "enter task name");
            // if(taskName){
            //     addNewTaskToTaskCategory(button.id.split("_")[1], taskName);
            //     displayWeeklyTaskListDiv(weeklyTaskListDiv);
            // }
            const categoryId = button.id.split("_")[1];

            const catHeader = document.getElementById(`catHeader_${categoryId}`);
            if (catHeader.disabled) {
                button.innerText = "Save"
                catHeader.removeAttribute("disabled");
            } else {
                button.innerText = "Edit"
                catHeader.setAttribute("disabled", "true")

                const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
                const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
                categoryRow.name = catHeader.value;
                localStorage.setItem("_weeklyTaskList", JSON.stringify(weeklyTaskList));

                displayWeeklyTaskListDiv(divToRefresh);
            }
        });
    })
}

function connectAddNewTaskToTaskCategoryListener(divToRefresh) {
    const addTaskButtons = document.querySelectorAll(".addTask");
    addTaskButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // On click
            //      Add new row with places to fill in the new info for the task at the bottom of the current category
            //
            //      Add new row to the dataset in LocalStorage with default information and then reload the div

            const taskName = window.prompt("Task name", "enter task name");
            if (taskName) {
                addNewTaskToTaskCategory(button.id.split("_")[1], taskName);
                displayWeeklyTaskListDiv(divToRefresh);
            }
        });
    })
}


function connectEditTaskInTaskCategoryListener(divToRefresh) {
    const editTaskCategoryButtons = document.querySelectorAll(".editTask");
    editTaskCategoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // On toggle click (EDIT)
            //      Open input fields for editing
            // On toggle click (SAVE)
            //      Close input fields for editing
            //      Update dataset in LocalStorage
            //      Refresh current div

            const taskId = button.id.split("_")[1];
            const categoryId = button.parentElement.parentElement.parentElement.parentElement.id.split("_")[1];

            if (button.innerText == "Edit") {
                button.innerText = "Save"
            } else {
                button.innerText = "Edit"
            }

            const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
            const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
            const taskRow = categoryRow.tasks.find(task => task.id == taskId);

            const displayRows = Array.from(document.getElementById(`taskToDisplayDiv_${categoryId}_${taskId}`).firstElementChild.children);

            displayRows.forEach((childElement) => {
                childElement.firstElementChild.disabled = !childElement.firstElementChild.disabled;
            })

            button.disabled = !button.disabled;

            taskRow.duedate = document.getElementById(`duedate_${categoryId}_${taskId}`).value;
            taskRow.name = document.getElementById(`taskname_${categoryId}_${taskId}`).value;
            taskRow.worktime[0] = document.getElementById(`worktime_${categoryId}_${taskId}`).value;
            taskRow.workstarttime = document.getElementById(`workstarttime_${categoryId}_${taskId}`).value;
            taskRow.workduration = document.getElementById(`workduration_${categoryId}_${taskId}`).value;
            localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));

            // displayWeeklyTaskListDiv(divToRefresh);
        });
    })
}

function connectDeleteTaskFromTaskCategoryListener(divToRefresh) {
    const deleteTaskButtons = document.querySelectorAll(".deleteTask");
    deleteTaskButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // On click
            //      Require confirmation of deletion
            //      Upon confirmation click
            //              Update dataset in LocalStorage
            //              Refresh current div
            if (window.confirm("Are you sure you want to delete this task?")) {
                deleteTaskFromTaskCategory(button.parentElement.id.split("_")[1], button.id.split("_")[1]);
                displayWeeklyTaskListDiv(divToRefresh);
            };
        });
    })
}


function connectCheckBoxListener(divToRefresh) {
    const checkBoxes = document.querySelectorAll(".doneCheckBox");
    checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click", () => {
            //  Static
            //      On checked
            //          Entire row is highlighted in red / text is strikethrough / greyed out
            //      On unchecked
            //          Row looks like a default row
            //  On click
            //      Toggle checkbox and update appearance accordingly
            //
            const categoryId = checkbox.parentElement.parentElement.parentElement.parentElement.id.split("_")[1];
            const taskId = checkbox.parentElement.parentElement.id.split("_")[1];

            const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
            const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
            const taskRow = categoryRow.tasks.find(task => task.id == taskId);
            taskRow.done = checkbox.checked;

            localStorage.setItem("_weeklyTaskList", JSON.stringify(weeklyTaskList));
            displayWeeklyTaskListDiv(divToRefresh);
        });
    })
}

// id #
// class .

export function connectWeeklyTaskListEventListeners(divToRefresh) {
    connectSaveTaskListToDBListener(divToRefresh);
    connectAddNewTaskCategoryListener(divToRefresh);
    connectDeleteTaskCategoryListener(divToRefresh);
    connectEditTaskCategoryListener(divToRefresh);
    connectAddNewTaskToTaskCategoryListener(divToRefresh);
    connectEditTaskInTaskCategoryListener(divToRefresh);
    connectDeleteTaskFromTaskCategoryListener(divToRefresh);
    connectCheckBoxListener(divToRefresh);
}
///////////////////////////////////////