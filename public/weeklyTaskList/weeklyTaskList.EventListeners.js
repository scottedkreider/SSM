import {
    displayWeeklyTaskListDiv
} from "./weeklyTaskList.displayManager.js";

import {
    addNewTaskCategory, deleteTaskCategory, addNewTaskToTaskCategory
        ,deleteTaskFromTaskCategory
} from "./weeklyTaskList.Model.js";

///////////////////////////////////////
// Event Listeners

// export async function connectLoadTaskListFromDBListener(){
//     window.addEventListener("load",async () => {
//         // On click
//         //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
//         getWTLFromDatabase()
//         .then((res) => {
//             if(res.statusCode === 200){
//                 localStorage.setItem("_weeklyTaskList",JSON.stringify(res.payload.wtl));
//             } else if (res.statusCode === 401) {
//                 localStorage.removeItem("_weeklyTaskList");
//             } else {
//                 console.log("load WTL error")
//             }
//         })
//     });
// }

// export default async function getWTLFromDatabase(){
//     var res;
//     await fetch('/api/weeklyTaskList', {
//         method: "GET",
//         headers: {
//             'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
//             'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`
//         }
//     })
//         .then(async (response) => {
//             res = {
//                 statusCode: response.status,
//                 payload: await response.json()
//             }
//         }
//         )
//     return res;
// }

function connectSaveTaskListToDBListener(divToRefresh){
    document.getElementById("saveTaskListToDBButton").addEventListener("click",() => {
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
        
        if(confirm("Are you sure you want to save?")){
            sendWTLToDatabase();
        }
        displayWeeklyTaskListDiv(divToRefresh);
    });
}


export async function sendWTLToDatabase(){
    await fetch('/api/weeklyTaskList', {
        method: "POST",
        headers: {
            'Authorization': `${JSON.parse(localStorage.getItem("auth")).username}`,
            'x-access-token': `${JSON.parse(localStorage.getItem("auth")).accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _wtl: localStorage.getItem("_weeklyTaskList")
        })
    })
        .then(async (response) => {
            console.log(response);
        }
        )
}

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

            const catHeader = document.getElementById(`catHeader_${categoryId}`);
            if(catHeader.disabled){
                button.innerText = "Save Category"
                catHeader.removeAttribute("disabled");
            } else{
                button.innerText = "Edit Category"
                catHeader.setAttribute("disabled","true")

                const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
                const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
                categoryRow.name = catHeader.value;
                localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));

                displayWeeklyTaskListDiv(divToRefresh);
            }
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

            const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
            const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
            const taskRow = categoryRow.tasks.find(task => task.id == taskId);
            taskRow.done = checkbox.checked;

            localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
            displayWeeklyTaskListDiv(divToRefresh);
        });
    })
}

// id #
// class .

export function connectWeeklyTaskListEventListeners(divToRefresh){
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