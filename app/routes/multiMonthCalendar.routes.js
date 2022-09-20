const { authJwt } = require("../middleware");
const controller = require("../controllers/multiMonthCalendar.controller");

module.exports = function(app) {
    app.get("/api/multiMonthCalendar"
        ,[authJwt.verifyToken]
        ,controller.retrieveMMCData);

    app.post("/api/multiMonthCalendar"
        ,[authJwt.verifyToken]
        ,controller.saveMMCData);
}