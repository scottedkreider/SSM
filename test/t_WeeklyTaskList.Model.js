// // import TaskList from "../public/weeklyTaskList/weeklyTaskList.Model.js";

// const TaskList = require("../public/weeklyTaskList/weeklyTaskList.Model");

// QUnit.module('(WTL.M) Start new weekly task list for the first time');

// QUnit.test('(1) Sets start date and end date (Sunday - Saturday)', assert => {
//     var _taskList = new TaskList();

//     var thisWeekStartDay = new Date("2022-04-17");
//     var thisWeekEndDay = new Date("2022-04-23");

//     assert.equal(new Date(_taskList.StartDate).getUTCDay,thisWeekStartDay.getUTCDay);
//     assert.equal(new Date(_taskList.StartDate).getUTCMonth,thisWeekStartDay.getUTCMonth);
//     assert.equal(new Date(_taskList.StartDate).getUTCYear,thisWeekStartDay.getUTCYear);

//     assert.equal(new Date(_taskList.EndDate).getUTCDay,thisWeekEndDay.getUTCDay);
//     assert.equal(new Date(_taskList.EndDate).getUTCMonth,thisWeekEndDay.getUTCMonth);
//     assert.equal(new Date(_taskList.EndDate).getUTCYear,thisWeekEndDay.getUTCYear);
// })

// QUnit.test('(2) Initializes TaskCategories and auto-adds Misc', assert => {
//     var _taskList = new TaskList();
//     assert.equal(_taskList.TaskCategoryList.length,1);
//     assert.equal(_taskList.TaskCategoryList[0].Name,"Misc");
// })



// QUnit.module('(WTL.M) Add new task category');

// QUnit.test('(3) Adds new Task Category to TaskCategories', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");

//     assert.equal(_taskList.TaskCategoryList.length,2);
//     assert.equal(_taskList.TaskCategoryList[1].Name,"CSCI5900");
//     assert.equal(_taskList.TaskCategoryList[1].Notes,"grad project prep");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,0);
// })



// QUnit.module('(WTL.M) Add new task to task list');

// QUnit.test('(4.1) Adds new task to existing task category when there are no other tasks', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,1);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Grad project presentation");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Notes,"To be done by the end of the Fall semester");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].EstimatedTimeToComplete,30);
// })

// QUnit.test('(4.2) Adds new task to existing task category when there is at least one other task', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.addTaskToTaskCategory("CSCI5900","Final deliverables","Word docs, astah files, code");

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,2);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Grad project presentation");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Notes,"To be done by the end of the Fall semester");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].EstimatedTimeToComplete,30);

//     assert.equal(_taskList.TaskCategoryList[1].TaskList[1].Name,"Final deliverables");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[1].Notes,"Word docs, astah files, code");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[1].EstimatedTimeToComplete,null);
// })



// QUnit.module('(WTL.M) Add task information to existing task');

// QUnit.test('(5) Adds information to an existing task', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.addInformationToTask("CSCI5900"
//                                         ,"Grad project presentation"
//                                         ,"Grad project Powerpoint presentation"
//                                         ,"To be done by the end of the Fall 22 semester"
//                                         ,"2022-03-14"
//                                         ,"2022-03-10"
//                                         ,20);

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,1);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Grad project Powerpoint presentation");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Notes,"To be done by the end of the Fall 22 semester");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].DueDate,"2022-03-14");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].WorkDate,"2022-03-10");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].EstimatedTimeToComplete,20);
// })




// QUnit.module('(WTL.M) Mark task as complete');

// QUnit.test('(6) Successfully mark a task as complete', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.toggleTaskComplete("CSCI5900","Grad project presentation");

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,1);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Grad project presentation");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Completed,true);
// })


// QUnit.test('(7) Successfully mark a task as complete and then unmark it as complete', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.toggleTaskComplete("CSCI5900","Grad project presentation");
//     _taskList.toggleTaskComplete("CSCI5900","Grad project presentation");

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,1);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Grad project presentation");
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Completed,false);
// })



// QUnit.module('(WTL.M) Delete task from the task list');

// QUnit.test('(8.1) Delete a task from the task list when there is only one', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.deleteTaskFromTaskCategory("CSCI5900","Grad project presentation");

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,0);
// })

// QUnit.test('(8.2) Delete a task from the task list when there is more than one', assert => {
//     var _taskList = new TaskList();
//     _taskList.addTaskCategory("CSCI5900","grad project prep");
//     _taskList.addTaskToTaskCategory("CSCI5900","Grad project presentation","To be done by the end of the Fall semester",30);
//     _taskList.addTaskToTaskCategory("CSCI5900","Final deliverables","Word docs, astah files, code");
//     _taskList.deleteTaskFromTaskCategory("CSCI5900","Grad project presentation");

//     assert.equal(_taskList.TaskCategoryList[1].TaskList.length,1);
//     assert.equal(_taskList.TaskCategoryList[1].TaskList[0].Name,"Final deliverables");
// })
