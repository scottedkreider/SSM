"use strict";


const task11 = {
    done: 1,
    id: 1,
    name: "Task 11",
    worktime: ["2022-12-15",
                "2022-12-16"],
    duedate: "2022-12-31",
    numberOfUpdates: 0
}

const task12 = {
    done: 0,
    id: 2,
    name: "Task 12",
    worktime: ["2022-12-17"],
    duedate: "2022-12-30",
    numberOfUpdates: 0
}

const task13 = {
    done: 0,
    id: 3,
    name: "Task 13",
    worktime: ["2022-12-15",
                "2022-12-17",
                "2022-12-19"],
    duedate: "2022-12-29",
    numberOfUpdates: 0
}

const category1 = {
    name: "CRSE-1111",
    id: 1,
    idIncrementer: 3,
    numberOfActiveTasks: 3,
    tasks: [task11, task12, task13]
}

const task21 = {
    done: 1,
    id: 1,
    name: "Task 21",
    worktime: ["2022-12-16",
                "2022-12-19"],
    duedate: "2022-12-28",
    numberOfUpdates: 0
}

const task22 = {
    done: 0,
    id: 2,
    name: "Task 22",
    worktime: ["2022-12-14"],
    duedate: "2022-12-27",
    numberOfUpdates: 0
}

const category2 = {
    name: "CRSE-2222",
    id: 2,
    idIncrementer: 2,
    numberOfActiveTasks: 2,
    tasks: [task21, task22]
}

const taskM1 = {
    done: 0,
    id: 1,
    name: "Task M1",
    worktime: ["2022-12-14",
                "2022-12-20"],
    duedate: "2022-12-26",
    numberOfUpdates: 0
}
const categoryM = {
    name: "MISC",
    id: 999,
    idIncrementer: 1,
    numberOfActiveTasks: 1,
    tasks: [taskM1]
}


var categoryList = [];
categoryList.push(category1)
categoryList.push(category2)
categoryList.push(categoryM)

var weeklyTaskList = {
    numberOfActiveCategories: 3,
    idIncrementer: 3,
    categoryList: categoryList
}

// console.log(taskList)
localStorage.setItem("weeklyTaskList_initialize",JSON.stringify(weeklyTaskList))
// localStorage.setItem("weeklyTaskList",JSON.stringify(weeklyTaskList))

