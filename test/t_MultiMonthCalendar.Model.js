// // import MultiMonthCalendarManager from "../public/multiMonthCalendar/multiMonthCalendar.Model.js";
// const MultiMonthCalendarManager = require("../public/multiMonthCalendar/multiMonthCalendar.Model");

// QUnit.module('(MMC.M) Start new multimonth calendar');

// QUnit.test('(1) Sets start date and end date and title based on inputs', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     assert.equal(_mmc_manager._mmc.StartDate,"2022/05/01");
//     assert.equal(_mmc_manager._mmc.EndDate,"2022/08/21");
//     assert.equal(_mmc_manager._mmc.Title,"Summer Semester");
// })

// QUnit.test('(2) Creates ListOfDays with Date objects for each day', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     var days = [];
//     var sDate = new Date(startDate);
//     var eDate = new Date(endDate);
//     var cDate = sDate;
//     do{
//         days.push({DayOfTheMonth: cDate.getUTCDate(), DayOfTheWeek7: cDate.getUTCDay() + 1, FullYear: cDate.getUTCFullYear(), Month12: cDate.getUTCMonth() + 1});
//         cDate.setDate(cDate.getDate() + 1);
//     } while(cDate <= eDate);

//     assert.equal(_mmc_manager._mmc.ListOfDays.length,113);
//     // Come back to - compare ListOfDays to days from above in some way
// })


// QUnit.module('(MMC.M) Check day off on MultiMonthCalendar');

// QUnit.test('(3) Successfully check a day off that is in the past', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.checkDayAsComplete("2022/05/01");

//     assert.equal(_mmc_manager._mmc.ListOfDays[0].Completed,true);
// })



// QUnit.module('(MMC.M) Add Daily Info to MultiMonthCalendar');

// QUnit.test('(4.1) Successfully add info to a day that has no info currently', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.addInfoToDay("2022/05/01","Why this");

//     var testInfo = [];
//     testInfo.push("Why this");

//     assert.equal(_mmc_manager._mmc.ListOfDays[0].Info.toString(),testInfo.toString());
// })

// QUnit.test('(4.2) Successfully add info to a day that has info currently', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.addInfoToDay("2022/05/01","Why this");
//     _mmc_manager.addInfoToDay("2022/05/01","And this");

//     var testInfo = [];
//     testInfo.push("Why this");
//     testInfo.push("And this");

//     assert.equal(_mmc_manager._mmc.ListOfDays[0].Info.toString(),testInfo.toString());
// })


// QUnit.module('(MMC.M) Update Daily Info on MultiMonthCalendar');

// QUnit.test('(5.1) Successfully update info on a day that has no info currently', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.addInfoToDay("2022/05/01","Why this");
//     _mmc_manager.updateInfoOnDay("2022/05/01","Why this","Why that");

//     var testInfo = [];
//     testInfo.push("Why that");

//     assert.equal(_mmc_manager._mmc.ListOfDays[0].Info.toString(),testInfo.toString());
// })

// QUnit.test('(5.2) Successfully update info on a day that has info currently', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.addInfoToDay("2022/05/01","Why this");
//     _mmc_manager.addInfoToDay("2022/05/01","Why that");

//     _mmc_manager.updateInfoOnDay("2022/05/01","Why that","Why those");

//     var testInfo = [];
//     testInfo.push("Why this");
//     testInfo.push("Why those");

//     assert.equal(_mmc_manager._mmc.ListOfDays[0].Info.toString(),testInfo.toString());
// })


// QUnit.module('(MMC.M) Delete Current MultiMonthCalendar');

// QUnit.test('(6) Successfully delete the current MultiMonthCalendar', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.deleteMultiMonthCalendar();
//     assert.equal(_mmc_manager._mmc, null);
// })



// QUnit.module('(MMC.M) Check off all available days on MultiMonthCalendar');

// QUnit.test('(7.1) Successfully check of all days prior to today', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/08/21";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.checkAllAvailableDaysAsComplete();

//     var today = new Date();
//     var cDate = new Date(startDate);
//     var i = 0;

//     do{
//         assert.equal(_mmc_manager._mmc.ListOfDays[i].Completed,true);
//         i++;
//         cDate.setDate(cDate.getDate() + 1);
//     } while(cDate < today);
// })


// QUnit.test('(7.2) Successfully check of all days for calendar entirely prior to today', assert => {
//     var startDate = "2022/05/01";
//     var endDate = "2022/05/23";
//     var mmcName = "Summer Semester";

//     var _mmc_manager = new MultiMonthCalendarManager(startDate,endDate,mmcName);

//     _mmc_manager.checkAllAvailableDaysAsComplete();

//     var today = new Date();
//     var eDate = new Date(endDate);

//     var finalDate = Math.min(today, eDate);

//     var cDate = new Date(startDate);
//     var i = 0;

//     do{
//         assert.equal(_mmc_manager._mmc.ListOfDays[i].Completed,true);
//         i++;
//         cDate.setDate(cDate.getDate() + 1);
//     } while(cDate < finalDate);
// })