export function addTaskCategoryButton(){
    const addTaskCategoryButtonDiv = document.createElement("div");

    const addTaskCategoryButton = document.createElement("button");
    addTaskCategoryButton.id = "addTaskCategoryButton";
    addTaskCategoryButton.innerText = "Add New Task Category";

    addTaskCategoryButtonDiv.appendChild(addTaskCategoryButton);

    return addTaskCategoryButtonDiv;
}


export function editCategoryButton(categoryId){
    const editCategoryButtonDiv = document.createElement("div");
    const editCategoryButton = document.createElement("button");
    editCategoryButton.classList += "editTaskCategory";
    editCategoryButton.id = `editCategory_${categoryId}`;
    editCategoryButton.innerText = "Edit Category";

    editCategoryButtonDiv.appendChild(editCategoryButton);

    return editCategoryButtonDiv;
}


export function deleteCategoryButton(categoryId){
    const deleteCategoryButtonDiv = document.createElement("div");
    const deleteCategoryButton = document.createElement("button");
    deleteCategoryButton.classList += "deleteTaskCategory";
    deleteCategoryButton.id = `deleteCategory_${categoryId}`;
    deleteCategoryButton.innerText = "Delete Category";

    deleteCategoryButtonDiv.appendChild(deleteCategoryButton);

    return deleteCategoryButtonDiv;
}


export function addTaskButton(categoryId){
    const addTaskButtonDiv = document.createElement("div");

    const addTaskButton = document.createElement("button");
    addTaskButton.classList += "addTask";
    addTaskButton.id = `addTask_${categoryId}`;
    addTaskButton.innerText = "Add New Task";

    addTaskButtonDiv.appendChild(addTaskButton);

    return addTaskButtonDiv;
}



export function taskToDisplayDiv(categoryId, taskToDisplay){
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