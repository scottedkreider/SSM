const { authJwt } = require("../middleware");
const controller = require("../controllers/multiMonthCalendar.controller");

module.exports = function(app) {
    app.get("/api/multiMonthCalendar"
        ,[authJwt.verifyToken]
        ,controller.retrieveMMCData);

    app.post("/api/multiMonthCalendar"
        ,[authJwt.verifyToken]
        ,controller.saveMMCData);

    app.post("/api/test",(req, res) => {
        console.log("we are in");
        console.log(req.body.Title)
    })
}