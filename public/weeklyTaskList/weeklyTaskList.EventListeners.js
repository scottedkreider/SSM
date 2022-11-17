import {
    displayWeeklyTaskListDiv
} from "./weeklyTaskList.displayManager.js";

import {
    addNewTaskCategory, deleteTaskCategory, addNewTaskToTaskCategory
        ,deleteTaskFromTaskCategory
} from "./weeklyTaskList.Model.js";

///////////////////////////////////////
// Event Listeners
function connectAddNewTaskCategoryListener(divToRefresh){
    document.getElementById("addTaskCategoryButton").addEventListener("click",() => {
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
        const categoryName = window.prompt("Category name", "enter category name");
        if(categoryName) addNewTaskCategory(categoryName);
        displayWeeklyTaskListDiv(divToRefresh);
    });
}


function connectDeleteTaskCategoryListener(divToRefresh){
    const deleteTaskCategoryButtons = document.querySelectorAll(".deleteTaskCategory");
    deleteTaskCategoryButtons.forEach((button) => {
        button.addEventListener("click",() => {
            // On click
            //      Require confirmation of deletion
            //      Upon confirmation click
            //              Update dataset in LocalStorage
            //              Refresh current div
            if(window.confirm("Are you sure you want to delete this task category?")){
                deleteTaskCategory(button.id.split("_")[1]);
                displayWeeklyTaskListDiv(divToRefresh);
            };
        });
    })
}


function connectEditTaskCategoryListener(divToRefresh){

    const editTaskCategoryButtons = document.querySelectorAll(".editTaskCategory");
    editTaskCategoryButtons.forEach((button) => {
        button.addEventListener("click",() => {
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

            const input = document.getElementById(`catHeader_${categoryId}`);
            input.disabled ? button.innerText = "Save Category" : button.innerText = "Edit Category"
            input.disabled = !input.disabled;
            if(input.disabled){
                const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
                const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
                categoryRow.name = input.value;
                localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
            }
            displayWeeklyTaskListDiv(divToRefresh);
        });
    })
}

function connectAddNewTaskToTaskCategoryListener(divToRefresh){
    const addTaskButtons = document.querySelectorAll(".addTask");
    addTaskButtons.forEach((button) => {
        button.addEventListener("click",() => {
            // On click
            //      Add new row with places to fill in the new info for the task at the bottom of the current category
            //
            //      Add new row to the dataset in LocalStorage with default information and then reload the div

            const taskName = window.prompt("Task name", "enter task name");
            if(taskName){
                addNewTaskToTaskCategory(button.id.split("_")[1], taskName);
                displayWeeklyTaskListDiv(divToRefresh);
            }
        });
    })
}


function connectEditTaskInTaskCategoryListener(divToRefresh){
    // On toggle click (EDIT)
    //      Open input fields for editing
    // On toggle click (SAVE)
    //      Close input fields for editing
    //      Update dataset in LocalStorage
    //      Refresh current div

}

function connectDeleteTaskFromTaskCategoryListener(divToRefresh){
    const deleteTaskButtons = document.querySelectorAll(".deleteTask");
    deleteTaskButtons.forEach((button) => {
        button.addEventListener("click",() => {
            // On click
            //      Require confirmation of deletion
            //      Upon confirmation click
            //              Update dataset in LocalStorage
            //              Refresh current div
            if(window.confirm("Are you sure you want to delete this task?")){
                deleteTaskFromTaskCategory(button.parentElement.id.split("_")[1],button.id.split("_")[1]);
                displayWeeklyTaskListDiv(divToRefresh);
            };
        });
    })
}


function connectCheckBoxListener(divToRefresh){
    const checkBoxes = document.querySelectorAll(".doneCheckBox");
    checkBoxes.forEach((checkbox) => {
        checkbox.addEventListener("click",() => {
            //  Static
            //      On checked
            //          Entire row is highlighted in red / text is strikethrough / greyed out
            //      On unchecked
            //          Row looks like a default row
            //  On click
            //      Toggle checkbox and update appearance accordingly
            //
            const categoryId = checkbox.parentElement.id.split("_")[1];
            const taskId = checkbox.id.split("_")[1];

            const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
            const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
            const taskRow = categoryRow.tasks.find(task => task.id == taskId);
            taskRow.done = checkbox.checked;

            localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
            displayWeeklyTaskListDiv(divToRefresh);
        });
    })
}

// id #
// class .

export function connectWeeklyTaskListEventListeners(divToRefresh){
    connectAddNewTaskCategoryListener(divToRefresh);
    connectDeleteTaskCategoryListener(divToRefresh);
    connectEditTaskCategoryListener(divToRefresh);
    connectAddNewTaskToTaskCategoryListener(divToRefresh);
    connectEditTaskInTaskCategoryListener(divToRefresh);
    connectDeleteTaskFromTaskCategoryListener(divToRefresh);
    connectCheckBoxListener(divToRefresh);
}
///////////////////////////////////////