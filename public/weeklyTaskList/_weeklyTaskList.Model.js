"use strict";

// export default class TaskList {
class TaskList {
    constructor(){
        this.TaskCategoryList = [new TaskCategory("Misc","Tasks with no other grouping")];
        this.StartDate = new Date(new Date().setUTCDate(new Date().getUTCDate() - new Date().getUTCDay())).getUTCDate();
        this.EndDate = new Date(new Date().setUTCDate(new Date().getUTCDate() + (6 - new Date().getUTCDay()))).getUTCDate();
    }

    // Contract:
    // categoryName is string; <=32chars
    // categoryNotes is string; <=128chars
    addTaskCategory(categoryName, categoryNotes){
        this.TaskCategoryList.push(new TaskCategory(categoryName,categoryNotes));
    }

    // Contract:
    // categoryName exists
    // categoryName is string; <=32chars
    // taskName exists
    // taskName is string; <=32chars
    // taskNotes is string; <=128chars
    // estimatedTimeToComplete is int; given in minutes
    addTaskToTaskCategory(categoryName, taskName, taskNotes, estimatedTimeToComplete){
        const index = this.TaskCategoryList.findIndex(taskCategory => taskCategory.Name === `${categoryName}`);
        this.TaskCategoryList[index].addTask(taskName, taskNotes, estimatedTimeToComplete);
    }

    // Contract:
    // categoryName exists
    // categoryName is string; <=32chars
    // taskName exists
    // taskName is string; <=32chars
    // newNotes is string; <=128chars
    // dueDate is date; YYYY-MM-DD
    // workDate is date; YYYY-MM-DD
    // newEstimatedTimeToComplete is int; given in minutes
    addInformationToTask(categoryName, taskName, newTaskName, newNotes, dueDate, workDate, newEstimatedTimeToComplete){
        const index = this.TaskCategoryList.findIndex(taskCategory => taskCategory.Name === `${categoryName}`);
        this.TaskCategoryList[index].addTaskInformation(taskName, newTaskName, newNotes, dueDate, workDate, newEstimatedTimeToComplete);
    }

    // Contract:
    // categoryName exists
    // categoryName is string; <=32chars
    // taskName exists
    // taskName is string; <=32chars
    toggleTaskComplete(categoryName, taskName){
        const index = this.TaskCategoryList.findIndex(taskCategory => taskCategory.Name === `${categoryName}`);
        this.TaskCategoryList[index].toggleTaskComplete(taskName);
    }

    // Contract:
    // categoryName exists
    // categoryName is string; <=32chars
    // taskName exists
    // taskName is string; <=32chars
    deleteTaskFromTaskCategory(categoryName, taskName){
        const index = this.TaskCategoryList.findIndex(taskCategory => taskCategory.Name === `${categoryName}`);
        this.TaskCategoryList[index].deleteTaskFromTaskList(taskName);
    }
} 

class TaskCategory {
    // Contract:
    // categoryName is string; <=32chars
    // categoryNotes is string; <=128chars
    constructor(categoryName, categoryNotes){
        this.Name = categoryName;
        this.Notes = categoryNotes;
        this.TaskList = [];
    }

    // Contract:
    // taskName is string; <=32chars
    // taskNotes is string; <=128chars
    // estimatedTimeToComplete is int; given in minutes
    addTask(taskName, taskNotes, estimatedTimeToComplete){
        this.TaskList.push(new Task(taskName, taskNotes, estimatedTimeToComplete));
    }

    // Contract:
    // taskName exists
    // taskName is string; <=32chars
    // newNotes is string; <=128chars
    // dueDate is date; YYYY-MM-DD
    // workDate is date; YYYY-MM-DD
    // newEstimatedTimeToComplete is int; given in minutes
    addTaskInformation(taskName, newTaskName, newNotes, dueDate, workDate, newEstimatedTimeToComplete){
        const index = this.TaskList.findIndex(task => task.Name === taskName);
        this.TaskList[index].updateTaskInformation(newTaskName, newNotes, dueDate, workDate, newEstimatedTimeToComplete);
    }

    // Contract:
    // taskName exists
    // taskName is string; <=32chars
    toggleTaskComplete(taskName){
        const index = this.TaskList.findIndex(task => task.Name === taskName);
        this.TaskList[index].Completed = !this.TaskList[index].Completed;
    }

    // Contract:
    // taskName exists
    // taskName is string; <=32chars
    deleteTaskFromTaskList(taskName){
        const index = this.TaskList.findIndex(task => task.Name === taskName);
        this.TaskList.splice(index,1);
    }
}


class Task {
    // Contract:
    // taskName is string; <=32chars
    // taskNotes is string; <=128chars
    // estimatedTimeToComplete is int; given in minutes
    constructor(taskName, taskNotes, estimatedTimeToComplete){
        this.Name = taskName;
        this.Notes = taskNotes;
        this.DueDate = null;
        this.WorkDate = null;
        this.EstimatedTimeToComplete = estimatedTimeToComplete;
        this.Completed = false;
    }

    // Contract:
    // newTaskName is string; <=32chars
    // newNotes is string; <=128chars
    // dueDate is date; YYYY-MM-DD
    // workDate is date; YYYY-MM-DD
    // newEstimatedTimeToComplete is int; given in minutes
    updateTaskInformation(newTaskName, newNotes, dueDate, workDate, newEstimatedTimeToComplete){
        this.Name = newTaskName;
        this.Notes = newNotes;
        this.DueDate = dueDate;
        this.WorkDate = workDate;
        this.EstimatedTimeToComplete = newEstimatedTimeToComplete;
    }
}
