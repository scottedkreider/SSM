"use strict";

import {
    taskCategoryDiv, taskDiv
} from "../js/weeklyTaskList.divSnippets.js";

export function editorButtonsListener(){
    const _editButtons = document.querySelectorAll(".editor");
    console.log(_editButtons);

    _editButtons.forEach((button) => {
        button.addEventListener('click',() => {
            button.innerHTML === "Edit"
                ? button.innerHTML = "Save"
                : (button.innerHTML = "Edit", console.log("weBeSaving"));
            const localEditableElements = button.parentElement.parentElement.children;
            Array.from(localEditableElements).forEach(element => {
                if(element.classList.contains("editable")){
                    element.firstChild.disabled = !element.firstChild.disabled;
                }
            })
        });
    })
}



export function addButtonsListener(){
    const _addButtons = document.querySelectorAll(".adder");
    console.log(_addButtons);

    _addButtons.forEach((button) => {
        button.addEventListener('click',() => {
            const localAddableElement = button.parentElement.parentElement;
            console.log("weAdding");
            console.log(localAddableElement);
            const testText = document.createElement("p");
            testText.innerHTML = "addedElement";
            var testTask = taskDiv("test Task");
            localAddableElement.appendChild(testTask);
        });
    })
}
