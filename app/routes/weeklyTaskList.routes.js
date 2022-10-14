const { authJwt } = require("../middleware");
const controller = require("../controllers/weeklyTaskList.controller");

module.exports = function(app) {
    app.get("/api/weeklyTaskList"
        ,[authJwt.verifyToken]
        ,controller.getWeeklyTaskListData);

    app.post("/api/weeklyTaskList"
        ,[authJwt.verifyToken]
        ,controller.saveWeeklyTaskListData);
};