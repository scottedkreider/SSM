const { authJwt } = require("../middleware");
const controller = require("../controllers/weeklyTaskList.controller");

module.exports = function(app) {
    app.get("/api/weeklyCalendar"
        ,[authJwt.verifyToken]
        ,controller.getWeeklyCalendarData);

    app.post("/api/weeklyCalendar"
        ,[authJwt.verifyToken]
        ,controller.saveWeeklyCalendarData);
};