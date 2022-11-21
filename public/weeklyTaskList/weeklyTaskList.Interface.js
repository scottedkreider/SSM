import {
    addTaskCategoryButton, saveTaskListToDBButton, editCategoryButton
        ,deleteCategoryButton,addTaskButton, taskToDisplayDiv
} from "./weeklyTaskList.divSnippets.js";



///////////////////////////////////////
// WTL Header
export function weeklyTaskListHeaderDiv(){
    const weeklyTaskListHeaderDiv = document.createElement("div");

    const taskListHeader_h1 = document.createElement("h1");
    taskListHeader_h1.innerText = "Weekly Task List"

    weeklyTaskListHeaderDiv.appendChild(taskListHeader_h1);
    weeklyTaskListHeaderDiv.appendChild(saveTaskListToDBButton());
    weeklyTaskListHeaderDiv.appendChild(addTaskCategoryButton());

    return weeklyTaskListHeaderDiv;
}
///////////////////////////////////////


///////////////////////////////////////
// WTL Body
export function weeklyTaskListBodyDiv(){
    const weeklyTaskListBodyDiv = document.createElement("div");
    weeklyTaskListBodyDiv.id = "weeklyTaskListBodyDiv";
        
    if(!localStorage.getItem("_weeklyTaskList")){
        initializeTaskList();
        console.log("not here")
    }

    // Get weeklyTaskList from localStorage
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));

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

function initializeTaskList() {
    const taskNew1 = {
        done: 0,
        id: 1,
        name: "example task name",
        worktime: ["2022-12-24"],
        workstarttime: "11:20",
        workduration: 2,
        duedate: "2022-12-25",
        numberOfUpdates: 0
    }

    const taskNew2 = {
        done: 0,
        id: 2,
        name: "example task name",
        worktime: ["2022-12-24"],
        workstarttime: "11:20",
        workduration: 3,
        duedate: "2022-12-25",
        numberOfUpdates: 0
    }

    const categoryNew1 = {
        name: "example category name 1",
        id: 1,
        idIncrementer: 2,
        numberOfActiveTasks: 2,
        tasks: [taskNew1, taskNew2]
    }

    const categoryNew2 = {
        name: "example category name 2",
        id: 2,
        idIncrementer: 2,
        numberOfActiveTasks: 2,
        tasks: [taskNew1, taskNew2]
    }

    const weeklyTaskListNew = {
        idIncrementer: 2,
        numberOfActiveCategories: 1,
        categoryList: [categoryNew1, categoryNew2]
    }

    localStorage.setItem("_weeklyTaskList", JSON.stringify(weeklyTaskListNew))
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
///////////////////////////////////////