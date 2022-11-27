import {
    addTaskCategoryButton, saveTaskListToDBButton, editCategoryButton
        ,deleteCategoryButton,addTaskButton, taskToDisplayDiv
} from "./weeklyTaskList.divSnippets.js";



///////////////////////////////////////
// WTL Header
export function weeklyTaskListHeaderDiv(){
    const weeklyTaskListHeaderDiv = document.createElement("div");
    // weeklyTaskListHeaderDiv.id = "weeklyTaskListHeaderDiv";

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
    }

    // Get weeklyTaskList from localStorage
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));

    // WTL Category List
    const weeklyTaskListBodyDisplayDiv = document.createElement("div");
    weeklyTaskListBodyDisplayDiv.classList += "container column";
    weeklyTaskListBodyDisplayDiv.id = "weeklyTaskListBodyDisplayDiv";

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

    const categoryTitle = document.createElement("div");
    categoryTitle.classList += "h3";
    categoryTitle.innerText = "Category";
    categoryToDisplayDiv.appendChild(categoryTitle);

    // Category Header
    const categoryHeader = document.createElement("input");
    categoryHeader.value = `${categoryToDisplay.name}`;
    categoryHeader.disabled = true;
    categoryHeader.id = `catHeader_${categoryToDisplay.id}`;
    categoryHeader.classList += "categoryHeader";
    categoryToDisplayDiv.appendChild(categoryHeader);

    const categoryHeaderButtons = document.createElement("div");
    categoryHeaderButtons.appendChild(editCategoryButton(categoryToDisplay.id));
    categoryHeaderButtons.appendChild(deleteCategoryButton(categoryToDisplay.id));
    categoryHeaderButtons.appendChild(addTaskButton(categoryToDisplay.id));

    categoryToDisplayDiv.appendChild(categoryHeaderButtons);

    categoryToDisplay.tasks.forEach((task) => {
        categoryToDisplayDiv.appendChild(taskToDisplayDiv(categoryToDisplay.id,task));
    })

    return categoryToDisplayDiv;
}
///////////////////////////////////////