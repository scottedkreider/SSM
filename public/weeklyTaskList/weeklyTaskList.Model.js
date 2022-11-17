
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


export function deleteTaskCategory(categoryId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
    weeklyTaskList.categoryList.splice(weeklyTaskList.categoryList.findIndex(function(i){
        return i.id == categoryId;
    }), 1);
    weeklyTaskList.numberOfActiveCategories--;
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}


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


export function deleteTaskFromTaskCategory(categoryId, taskId){
    const weeklyTaskList = JSON.parse(localStorage.getItem("_weeklyTaskList"));
    const categoryRow = weeklyTaskList.categoryList.find(category => category.id == categoryId);

    categoryRow.tasks.splice(categoryRow.tasks.findIndex(function(task){
        return task.id == taskId;
    }), 1);
    categoryRow.numberOfActiveTasks--;
    localStorage.setItem("_weeklyTaskList",JSON.stringify(weeklyTaskList));
}