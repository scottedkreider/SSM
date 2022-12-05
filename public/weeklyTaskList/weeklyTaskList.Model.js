// Add a new task category to the dataset in local storage
//      With the given categoryName
export function addNewTaskCategory(categoryName){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));

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
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}


// Delete the specified task category from the dataset in LocalStorage
export function deleteTaskCategory(categoryId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
    weeklyTaskList.categoryList.splice(weeklyTaskList.categoryList.findIndex(function(i){
        return i.id == categoryId;
    }), 1);
    weeklyTaskList.numberOfActiveCategories--;
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}

// Add new task to the specified task category in the dataset in LocalStorage
export function addNewTaskToTaskCategory(taskCategoryId, taskName){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
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
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}

// Remove the specified task from the specified task category in the dataset in LocalStorage
export function deleteTaskFromTaskCategory(categoryId, taskId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
    const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);

    categoryRow.tasks.splice(categoryRow.tasks.findIndex(function(task){
        return task.id == taskId;
    }), 1);
    categoryRow.numberOfActiveTasks--;
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}


// Initializes a weekly task list with 2 categories and 2 tasks per category
//      Used upon initial creation of a weekly task list
export function initializedTaskList() {
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

    return weeklyTaskListNew;
}