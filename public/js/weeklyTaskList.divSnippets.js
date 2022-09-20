"use strict";

// WTL
export function deleteButtonDiv(className){
    var _deleteButtonDiv = document.createElement("div");
    _deleteButtonDiv.setAttribute("class",`delete_${className}`);

    var _deleteButton = document.createElement("button");
    _deleteButton.innerHTML = "Delete";
    _deleteButtonDiv.appendChild(_deleteButton);
    return _deleteButtonDiv;
}

// WTL
export function addButtonDiv(textValue){
    var _addButtonDiv = document.createElement("div");

    var _addButton = document.createElement("button");
    _addButton.innerHTML = `Add ${textValue}`;
    _addButton.setAttribute("class","adder");
    _addButtonDiv.appendChild(_addButton);
    return _addButtonDiv;
}

// WTL
export function editSaveToggleButtonDiv(className){
    var _editSaveButtonDiv = document.createElement("div");
    _editSaveButtonDiv.setAttribute("class",`save_${className}`);

    var _saveButton = document.createElement("button");
    _saveButton.setAttribute("class","editor");
    _saveButton.innerHTML = "Edit";
    _editSaveButtonDiv.appendChild(_saveButton);
    return _editSaveButtonDiv;
}

// WTL
export function editableTextInputDiv(textValue){
    var _textInputDiv = document.createElement("div");
    _textInputDiv.setAttribute("class","editable");

    var _textInputField = document.createElement("input");
    _textInputField.setAttribute("value",`${textValue}`);

    _textInputField.setAttribute("class","editable");
    _textInputField.setAttribute("disabled",true);

    _textInputDiv.appendChild(_textInputField);
    return _textInputDiv;
}

// WTL
export function editableDateInputDiv(dateValue){
    var _dateInputDiv = document.createElement("div");
    _dateInputDiv.setAttribute("class","editable");

    var _dateInputField = document.createElement("input");
    _dateInputField.setAttribute("type","date");
    _dateInputField.setAttribute("value",`${dateValue}`);

    _dateInputField.setAttribute("class","editable");
    _dateInputField.setAttribute("disabled",true);

    _dateInputDiv.appendChild(_dateInputField);
    return _dateInputDiv;
}


// WTL
// Div to hold a specific task category and its information
// Contract: taskCategory is not null
//           taskCategory is of type TaskCategory
export function taskCategoryDiv(taskCategory) {
    var _taskCategoryDiv = document.createElement('div');
    _taskCategoryDiv.setAttribute("class", "taskCategoryDiv");

    _taskCategoryDiv.appendChild(editableTextInputDiv(taskCategory.Name));
    _taskCategoryDiv.appendChild(editSaveToggleButtonDiv('taskCategory'));
    _taskCategoryDiv.appendChild(deleteButtonDiv('taskCategory'));
    _taskCategoryDiv.appendChild(addButtonDiv('task'));

    taskCategory.TaskList.forEach(task => {
        var _taskDiv = taskDiv(task);
        _taskCategoryDiv.appendChild(_taskDiv);
    })

    return _taskCategoryDiv;
}

// WTL
// Div to hold a specific task and its information
// Contract: task is not null
//           task is of type Task
export function taskDiv(task) {
    var _taskDiv = document.createElement('div');
    _taskDiv.setAttribute("class", "taskDiv");

    _taskDiv.innerHTML = `--`;
    _taskDiv.appendChild(editableTextInputDiv(task.Name));
    _taskDiv.appendChild(editableTextInputDiv(task.Notes));
    _taskDiv.appendChild(editableTextInputDiv(task.Name));
    _taskDiv.appendChild(editableDateInputDiv(task.DueDate));
    _taskDiv.appendChild(editableDateInputDiv(task.WorkDate));
    _taskDiv.appendChild(editSaveToggleButtonDiv('task'));
    _taskDiv.appendChild(deleteButtonDiv('task'));

    return _taskDiv;
}
