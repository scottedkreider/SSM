const { authJwt } = require("../middleware");
const controller = require("../controllers/weeklyTaskList.controller");

module.exports = function(app) {
    app.post("/api/weeklyTaskList",
        controller.saveWeeklyTaskListData);
};