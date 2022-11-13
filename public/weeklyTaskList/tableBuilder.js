// const weeklyTaskListDiv = document.getElementById("weeklyTaskListDiv");

// function displayWeeklyTaskListContent(){
//     weeklyTaskListDiv.appendChild(weeklyTaskListHeaderDiv());
//     weeklyTaskListDiv.appendChild(weeklyTaskListBodyDiv());
// }



// function weeklyTaskListHeaderDiv(){
//     // will contain the entirety of the nested content that goes into the HEADER
//     const weeklyTaskListHeaderContentDiv = document.createElement("div");

//     // The content to attach to the DIV
//     weeklyTaskListHeaderContentDiv.innerText = "Weekly Task List Header Content";

//     // Returning a div object with all the header content
//     return weeklyTaskListHeaderContentDiv;
// }

// function weeklyTaskListBodyDiv(){
//     // will contain the entirety of the nested content that goes into the BODY
//     const weeklyTaskListBodyContentDiv = document.createElement("div");

//     // The content to attach to the DIV
//     weeklyTaskListBodyContentDiv.innerText = "Weekly Task List Body Content";

//     weeklyTaskListBodyContentDiv.appendChild(weeklyTaskListTableDisplayDiv());

//     // Returning a div object with all the body content
//     return weeklyTaskListBodyContentDiv;
// }

// function weeklyTaskListTableDisplayDiv(){
//     // will contain the entirety of the nested content that goes into the Task List Table Display (cats, tasks)
//     const weeklyTaskListTableDisplayDiv = document.createElement("div");

//     weeklyTaskListTableDisplayDiv.appendChild(newTaskDisplay("task 1"));

//     return weeklyTaskListTableDisplayDiv;
// }

// function newTaskDisplay(taskName){
//     const newTaskDisplayDiv = document.createElement("div");
//     newTaskDisplayDiv.innerText = "taskName"

//     return newTaskDisplayDiv;
// }

// displayWeeklyTaskListContent()