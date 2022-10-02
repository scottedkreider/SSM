"use strict";
// Get div element to hold the Weekly Task List
const weeklyTaskList_div = document.getElementById("weeklyTaskListDiv");

// If there is not a currently existing weekly task list in
//      local storage then show the "Create new weekly task
//      list" button
// Else display the weekly task list that is in local storage

const currentWeeklyTaskList = localStorage.getItem("weeklyTaskList_model")

!currentWeeklyTaskList
    ? displayStartNewWeeklyTaskListButton()
    : displayWeeklyTaskList(currentWeeklyTaskList);


function displayStartNewWeeklyTaskListButton() {
    // Build the button
    // startNewWeeklyTaskListButton_div: Start New Weekly Task List Button
    const startNewWeeklyTaskListButton_div = document.createElement("div");
    const startNewWeeklyTaskList_button = document.createElement("button");
    startNewWeeklyTaskList_button.textContent = "Start New Weekly Task List"
    startNewWeeklyTaskList_button.id = "startNewWeeklyTaskList_button"
    startNewWeeklyTaskListButton_div.append(startNewWeeklyTaskList_button);

    // Display the button on the interface
    weeklyTaskList_div.append(startNewWeeklyTaskList_button)

    startNewWeeklyTaskList_button.addEventListener('click',
        () => startNewWeeklyTaskList());
}


// Upon hearing the button - start a new Weekly Task List
function startNewWeeklyTaskList() {
    const weeklyTaskList_model =
    {
        name: "week 1"
    };

    // Save the new Weekly Task List to local storage
    localStorage.setItem("weeklyTaskList_model", JSON.stringify(weeklyTaskList_model));

    // Clear the screen
    weeklyTaskList_div.replaceChildren();

    // Display the Weekly Task List on the screen
    const newWeeklyTaskList_div = document.createElement("div");
    const newWeeklyTaskListTitle_text =
        document.createTextNode(localStorage.getItem("weeklyTaskList_model"));
    newWeeklyTaskList_div.append(newWeeklyTaskListTitle_text);
    weeklyTaskList_div.append(newWeeklyTaskList_div);

    // Listen for navigating away from the page and send weeklyTaskList_model to the database
    fetch('http://localhost:5000/api/weeklyTaskList', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: `${localStorage.getItem("weeklyTaskList_model")}`
    })
        .then((response) => {
            console.log(response.status);
        }
        );


}

function displayWeeklyTaskList(currentWeeklyTaskList) {
    console.log("lmao");
    console.log(currentWeeklyTaskList);
}
