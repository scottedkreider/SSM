export function addTaskCategoryButton(){
    const addTaskCategoryButtonDiv = document.createElement("div");

    const addTaskCategoryButton = document.createElement("button");
    addTaskCategoryButton.id = "addTaskCategoryButton";
    addTaskCategoryButton.innerText = "Add New Task Category";

    addTaskCategoryButtonDiv.appendChild(addTaskCategoryButton);

    return addTaskCategoryButtonDiv;
}


export function saveTaskListToDBButton(){
    const saveTaskListToDBButtonDiv = document.createElement("div");

    const saveTaskListToDBButton = document.createElement("button");
    saveTaskListToDBButton.id = "saveTaskListToDBButton";
    saveTaskListToDBButton.innerText = "Save Task List to DB";

    saveTaskListToDBButtonDiv.appendChild(saveTaskListToDBButton);

    return saveTaskListToDBButtonDiv;
}


export function editCategoryButton(categoryId){
    const editCategoryButton = document.createElement("button");
    editCategoryButton.classList += "editTaskCategory";
    editCategoryButton.id = `editCategory_${categoryId}`;
    editCategoryButton.innerText = "Edit Category";

    return editCategoryButton;
}


export function deleteCategoryButton(categoryId){
    const deleteCategoryButton = document.createElement("button");
    deleteCategoryButton.classList += "deleteTaskCategory";
    deleteCategoryButton.id = `deleteCategory_${categoryId}`;
    deleteCategoryButton.innerText = "Delete Category";

    return deleteCategoryButton;
}


export function addTaskButton(categoryId){
    const addTaskButton = document.createElement("button");
    addTaskButton.classList += "addTask";
    addTaskButton.id = `addTask_${categoryId}`;
    addTaskButton.innerText = "Add New Task";

    return addTaskButton;
}



export function taskToDisplayDiv(categoryId, taskToDisplay){
    // Div to return to the attach to parent div
    const taskToDisplayDiv = document.createElement("div");
    taskToDisplayDiv.id = `taskToDisplayDiv_${categoryId}_${taskToDisplay.id}`;
    taskToDisplayDiv.classList += `taskToDisplayDiv_${categoryId}_${taskToDisplay.id}`;
    taskToDisplayDiv.appendChild(taskDisplayRow(categoryId, taskToDisplay));
    return taskToDisplayDiv;
}

// find row c_categoryId

// find row t_taskId

function taskDisplayRow(categoryId, taskToDisplay){
    const rowToDisplay = document.createElement("div");
    rowToDisplay.id = `t_${taskToDisplay.id}`;
    rowToDisplay.classList += "container row taskItem box";

    const doneDataDiv = document.createElement("div");
    doneDataDiv.classList += "doneDiv";
    const doneData = document.createElement("input");
    doneData.classList += "doneCheckBox";
    doneData.id = `doneData_${categoryId}_${taskToDisplay.id}`;
    doneData.type = "checkbox";
    doneData.checked = taskToDisplay.done;
    doneDataDiv.appendChild(doneData);

    const nameDataDiv = document.createElement("div");
    nameDataDiv.classList += "doneDiv";
    const nameData = document.createElement("input");
    nameData.id = `taskname_${categoryId}_${taskToDisplay.id}`;
    nameData.type = "input";
    nameData.disabled = "true";
    nameData.value = `${taskToDisplay.name}`
    nameDataDiv.appendChild(nameData)

    const workTimeDataDiv = document.createElement("div");
    workTimeDataDiv.classList += "doneDiv";
    const workTimeData = document.createElement("input");
    workTimeData.id = `worktime_${categoryId}_${taskToDisplay.id}`;
    workTimeData.type = "date";
    workTimeData.disabled = "true";
    workTimeData.value = `${taskToDisplay.worktime}`
    workTimeDataDiv.appendChild(workTimeData)

    const workStartTimeDataDiv = document.createElement("div");
    workStartTimeDataDiv.classList += "doneDiv";
    const workStartTimeData = document.createElement("input");
    workStartTimeData.id = `workstarttime_${categoryId}_${taskToDisplay.id}`;
    workStartTimeData.type = "time";
    workStartTimeData.disabled = "true";
    workStartTimeData.value = `${taskToDisplay.workstarttime}`
    workStartTimeDataDiv.appendChild(workStartTimeData)

    const workDurationDataDiv = document.createElement("div");
    workDurationDataDiv.classList += "doneDiv";
    const workDurationData = document.createElement("input");
    workDurationData.id = `workduration_${categoryId}_${taskToDisplay.id}`;
    workDurationData.type = "number";
    workDurationData.disabled = "true";
    workDurationData.value = `${taskToDisplay.workduration}`
    workDurationDataDiv.appendChild(workDurationData)

    const dueDateDataDiv = document.createElement("div");
    dueDateDataDiv.classList += "doneDiv";
    const dueDateData = document.createElement("input");
    dueDateData.id = `duedate_${categoryId}_${taskToDisplay.id}`;
    dueDateData.type = "date";
    dueDateData.disabled = "true";
    dueDateData.value = `${taskToDisplay.duedate}`
    dueDateDataDiv.appendChild(dueDateData)

    const editTaskButtonDiv = document.createElement("div");
    editTaskButtonDiv.classList += "doneDiv";
    const editTaskButton = document.createElement("button");
    editTaskButton.classList += "editTask";
    editTaskButton.id = `editTask_${taskToDisplay.id}`;
    editTaskButton.innerText = "Edit";
    editTaskButtonDiv.appendChild(editTaskButton)

    const deleteTaskButtonDiv = document.createElement("div");
    deleteTaskButtonDiv.classList += "doneDiv";
    deleteTaskButtonDiv.id = `deleteTask_${categoryId}`;
    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList += "deleteTask";
    deleteTaskButton.id = `deleteTask_${taskToDisplay.id}`;
    deleteTaskButton.innerText = "Delete";
    deleteTaskButtonDiv.appendChild(deleteTaskButton)

    rowToDisplay.appendChild(doneDataDiv);
    rowToDisplay.appendChild(nameDataDiv);
    rowToDisplay.appendChild(workTimeDataDiv);
    rowToDisplay.appendChild(workStartTimeDataDiv);    
    rowToDisplay.appendChild(workDurationDataDiv);  
    rowToDisplay.appendChild(dueDateDataDiv);
    rowToDisplay.appendChild(editTaskButtonDiv);
    rowToDisplay.appendChild(deleteTaskButtonDiv);

    return rowToDisplay;
}