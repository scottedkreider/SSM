
///////////////////////////////////////
const weeklyTaskListDiv = document.getElementById("weeklyTaskListDiv");
///////////////////////////////////////




///////////////////////////////////////
// WTL Header
function weeklyTaskListHeaderDiv(){
    const weeklyTaskListHeaderDiv = document.createElement("div");

    const taskListHeader_h1 = document.createElement("h1");
    taskListHeader_h1.innerText = "DISPLAY MANAGER FILE: Weekly Task List"

    weeklyTaskListHeaderDiv.appendChild(taskListHeader_h1);
    weeklyTaskListHeaderDiv.appendChild(addTaskCategoryButton());

    return weeklyTaskListHeaderDiv;
}



function addTaskCategoryButton(){
    const addTaskCategoryButtonDiv = document.createElement("div");

    const addTaskCategoryButton = document.createElement("button");
    addTaskCategoryButton.id = "addTaskCategoryButton";
    addTaskCategoryButton.innerText = "Add New Task Category";

    addTaskCategoryButtonDiv.appendChild(addTaskCategoryButton);

    return addTaskCategoryButtonDiv;
}
///////////////////////////////////////





///////////////////////////////////////
// WTL Body
function weeklyTaskListBodyDiv(){
    const weeklyTaskListBodyDiv = document.createElement("div");
    weeklyTaskListBodyDiv.id = "weeklyTaskListBodyDiv";
    
    // Get weeklyTaskList from localStorage
    const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));

    // WTL Category List
    const weeklyTaskListBodyDisplayDiv = document.createElement("div");
    weeklyTaskListBodyDisplayDiv.id = "weeklyTaskListBodyDisplayDiv";
    weeklyTaskListBodyDisplayDiv.classList += "container column";

    weeklyTaskList.categoryList.forEach((category) => {
        weeklyTaskListBodyDisplayDiv.appendChild(displayTaskCategory(category));
    })

    weeklyTaskListBodyDiv.appendChild(weeklyTaskListBodyDisplayDiv);

    return weeklyTaskListBodyDiv;
}

function displayTaskCategory(categoryToDisplay){
    // Div to return to the attach to parent div
    const categoryToDisplayDiv = document.createElement("div");
    categoryToDisplayDiv.id = `cat_${categoryToDisplay.id}`;
    categoryToDisplayDiv.classList += "container column taskCategory";

    // Category Header
    const categoryHeader = document.createElement("input");
    categoryHeader.value = `${categoryToDisplay.name}`;
    categoryHeader.disabled = true;
    categoryHeader.classList += "categoryHeader";
    categoryHeader.id = `catHeader_${categoryToDisplay.id}`;
    categoryToDisplayDiv.appendChild(categoryHeader);

    categoryToDisplayDiv.appendChild(editCategoryButton(categoryToDisplay.id));
    categoryToDisplayDiv.appendChild(deleteCategoryButton(categoryToDisplay.id));
    categoryToDisplayDiv.appendChild(addTaskButton(categoryToDisplay.id));

    categoryToDisplay.tasks.forEach((task) => {
        categoryToDisplayDiv.appendChild(taskToDisplayDiv(categoryToDisplay.id,task));
    })

    return categoryToDisplayDiv;
}

function editCategoryButton(categoryId){
    const editCategoryButtonDiv = document.createElement("div");
    const editCategoryButton = document.createElement("button");
    editCategoryButton.classList += "editTaskCategory";
    editCategoryButton.id = `editCategory_${categoryId}`;
    editCategoryButton.innerText = "Edit Category";

    editCategoryButtonDiv.appendChild(editCategoryButton);

    return editCategoryButtonDiv;
}

function deleteCategoryButton(categoryId){
    const deleteCategoryButtonDiv = document.createElement("div");
    const deleteCategoryButton = document.createElement("button");
    deleteCategoryButton.classList += "deleteTaskCategory";
    deleteCategoryButton.id = `deleteCategory_${categoryId}`;
    deleteCategoryButton.innerText = "Delete Category";

    deleteCategoryButtonDiv.appendChild(deleteCategoryButton);

    return deleteCategoryButtonDiv;
}

function addTaskButton(categoryId){
    const addTaskButtonDiv = document.createElement("div");

    const addTaskButton = document.createElement("button");
    addTaskButton.classList += "addTask";
    addTaskButton.id = `addTask_${categoryId}`;
    addTaskButton.innerText = "Add New Task";

    addTaskButtonDiv.appendChild(addTaskButton);

    return addTaskButtonDiv;
}

function taskToDisplayDiv(categoryId, taskToDisplay){
    // Div to return to the attach to parent div
    const taskToDisplayDiv = document.createElement("div");
    taskToDisplayDiv.id = "taskToDisplayDiv";

    // Task Name
    const taskDisplay = document.createElement("div");
    taskDisplay.appendChild(taskDisplayRow(categoryId, taskToDisplay));
    taskToDisplayDiv.appendChild(taskDisplay);

    return taskToDisplayDiv;
}

function taskDisplayRow(categoryId, taskToDisplay){
    const rowToDisplay = document.createElement("div");
    rowToDisplay.classList += "container row taskItem";

    const doneDataDiv = document.createElement("div");
    doneDataDiv.id = `doneData_${categoryId}`;
    const doneData = document.createElement("input");
    doneData.classList += "doneCheckBox";
    doneData.id = `doneData_${taskToDisplay.id}`;
    doneData.type = "checkbox";
    doneData.checked = taskToDisplay.done;
    doneDataDiv.appendChild(doneData);

    const nameDataDiv = document.createElement("div");
    const nameData = document.createTextNode(`${taskToDisplay.name}`);
    nameDataDiv.appendChild(nameData);

    const workTimeDataDiv = document.createElement("div");
    const workTimeData = document.createTextNode(`${taskToDisplay.worktime}`);
    workTimeDataDiv.appendChild(workTimeData);

    const dueDateDataDiv = document.createElement("div");
    const dueDateData = document.createElement("input");
    dueDateData.type = "date";
    dueDateData.disabled = "true";
    dueDateData.value = `${taskToDisplay.duedate}`
    dueDateDataDiv.appendChild(dueDateData)

    const editTaskButtonDiv = document.createElement("div");
    const editTaskButton = document.createElement("button");
    editTaskButton.id = `editTask_${taskToDisplay.id}`;
    editTaskButton.innerText = "Edit";
    editTaskButtonDiv.appendChild(editTaskButton)

    const deleteTaskButtonDiv = document.createElement("div");
    deleteTaskButtonDiv.id = `deleteTask_${categoryId}`;
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList += "deleteTask";
    deleteTaskButton.id = `deleteTask_${taskToDisplay.id}`;
    deleteTaskButton.innerText = "Delete";
    deleteTaskButtonDiv.appendChild(deleteTaskButton)

    rowToDisplay.appendChild(doneDataDiv);
    rowToDisplay.appendChild(nameDataDiv);
    rowToDisplay.appendChild(workTimeDataDiv);
    rowToDisplay.appendChild(dueDateDataDiv);
    rowToDisplay.appendChild(editTaskButtonDiv);
    rowToDisplay.appendChild(deleteTaskButtonDiv);

    return rowToDisplay;
}
///////////////////////////////////////





///////////////////////////////////////
// Event Listeners
function connectAddNewTaskCategoryListener(){
    document.getElementById("addTaskCategoryButton").addEventListener("click",() => {
        console.log("hello");
        // On click
        //      Add new row with places to fill in the new info for the task category at the bottom of the category list (but before MISC)
        const categoryName = window.prompt("Category name", "enter category name");
        if(categoryName) addNewTaskCategory(categoryName);
        displayWeeklyTaskListDiv(weeklyTaskListDiv);
    });
}

function addNewTaskCategory(categoryName){
    const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));

    const taskNew = {
        done: 0,
        id: 1,
        name: "new task name",
        worktime: ["2022-12-24"],
        duedate: "2022-12-25",
        numberOfUpdates: 0
    }
    
    const categoryNew = {
            name: categoryName,
            id: weeklyTaskList.idIncrementer + 1,
            idIncrementer: 1,
            numberOfActiveTasks: 1, 
            tasks: [taskNew]
        }

    weeklyTaskList.idIncrementer++;
    weeklyTaskList.numberOfActiveCategories++;
    weeklyTaskList.categoryList.push(categoryNew);
    localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
}

function connectDeleteTaskCategoryListener(){
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
                displayWeeklyTaskListDiv(weeklyTaskListDiv);
            };
        });
    })
}

function deleteTaskCategory(categoryId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
    weeklyTaskList.categoryList.splice(weeklyTaskList.categoryList.findIndex(function(i){
        return i.id == categoryId;
    }), 1);
    weeklyTaskList.numberOfActiveCategories--;
    localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
}



function connectEditTaskCategoryListener(){

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
                const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
                const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
                categoryRow.name = input.value;
                localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
            }
        });
    })
}



function connectAddNewTaskToTaskCategoryListener(){
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
                displayWeeklyTaskListDiv(weeklyTaskListDiv);
            }
        });
    })
}



function addNewTaskToTaskCategory(taskCategoryId, taskName){
    const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
    const categoryRow = weeklyTaskList.categoryList.find(category => category.id == taskCategoryId);

    const taskNew = {
        done: 0,
        id: categoryRow.idIncrementer + 1,
        name: taskName,
        worktime: ["2022-12-24"],
        duedate: "2022-12-25",
        numberOfUpdates: 0
    }

    categoryRow.idIncrementer++;
    categoryRow.tasks.push(taskNew)
    localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
}


function connectEditTaskInTaskCategoryListener(){
    // On toggle click (EDIT)
    //      Open input fields for editing
    // On toggle click (SAVE)
    //      Close input fields for editing
    //      Update dataset in LocalStorage
    //      Refresh current div

}

function connectDeleteTaskFromTaskCategoryListener(){
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
                displayWeeklyTaskListDiv(weeklyTaskListDiv);
            };
        });
    })
}

function deleteTaskFromTaskCategory(categoryId, taskId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
    const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);

    categoryRow.tasks.splice(categoryRow.tasks.findIndex(function(task){
        return task.id == taskId;
    }), 1);
    categoryRow.numberOfActiveTasks--;
    localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
}




function connectCheckBoxListener(){
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
            console.log(checkbox.checked);
            console.log(checkbox.id);
            console.log(checkbox.parentElement.id);

            const categoryId = checkbox.parentElement.id.split("_")[1];
            const taskId = checkbox.id.split("_")[1];

            const weeklyTaskList = JSON.parse(localStorage.getItem("weeklyTaskList"));
            const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);
            const taskRow = categoryRow.tasks.find(task => task.id == taskId);
            taskRow.done = checkbox.checked;
            console.log(taskRow);

            localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList));
            displayWeeklyTaskListDiv(weeklyTaskListDiv);
        });
    })
}

// id #
// class .

function connectWeeklyTaskListEventListeners(){
    connectAddNewTaskCategoryListener();
    connectDeleteTaskCategoryListener();
    connectEditTaskCategoryListener();
    connectAddNewTaskToTaskCategoryListener();
    connectEditTaskInTaskCategoryListener();
    connectDeleteTaskFromTaskCategoryListener();
    connectCheckBoxListener();
}
///////////////////////////////////////



///////////////////////////////////////
// Apply dynamic visual elements
//      such as highlighting of rows when checked off

function applyCheckboxElementUpdates(){
    const checkBoxes = document.querySelectorAll(".doneCheckBox");
    checkBoxes.forEach((checkbox) => {
        if(checkbox.checked){
            checkbox.parentElement.classList += "done";
        } else {
            checkbox.parentElement.classList.remove("done");
        }
    })
}

function applyDynamicVisualElements(){
    applyCheckboxElementUpdates();
}
///////////////////////////////////////





///////////////////////////////////////
// WTL Div
function displayWeeklyTaskListDiv(weeklyTaskListDiv){
    weeklyTaskListDiv.replaceChildren();
    weeklyTaskListDiv.appendChild(weeklyTaskListHeaderDiv());
    weeklyTaskListDiv.appendChild(weeklyTaskListBodyDiv());
    connectWeeklyTaskListEventListeners();
    applyDynamicVisualElements();
}

displayWeeklyTaskListDiv(weeklyTaskListDiv);
///////////////////////////////////////

// const taskCategoryData = 
// {"name":"CRSE-1111","tasks":[{"done":1,"name":"Task 11","worktime":["12/15/2022","12/16/2022"],"duedate":"12/31/2022"},{"done":0,"name":"Task 12","worktime":["12/17/2022"],"duedate":"12/30/2022"},{"done":0,"name":"Task 13","worktime":["12/15/2022","12/17/2022","12/19/2022"],"duedate":"12/29/2022"}]}
// const taskData = 
// {"done":1,"name":"Task 11","worktime":["12/15/2022","12/16/2022"],"duedate":"12/31/2022"}