const { authJwt } = require("../middleware");
const path = require("path");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    // Root route
    app.get('/',(req, res) => {
        // console.log('dashboard');
        res.render(path.join("pages/login"));
    })

    // Create Account route
    app.get('/createAccount',(req, res) => {
        // console.log('createAccount');
        res.render(path.join("pages/createAccount"));
    })

    // Dashboard route
    // Verify access
    app.get('/dashboard',
        (req, res) => {
            // console.log('dashboard');
            res.render(path.join("pages/dashboard"));
    })

    // Weekly Task List route
    // Verify access
    app.get('/weeklyTaskList',
        (req, res) => {
            // console.log('weeklyTaskList');
            res.render(path.join("pages/weeklyTaskList"));
    })

    // Weekly Calendar route
    // Verify access
    app.get('/weeklyCalendar',
        (req, res) => {
            // console.log('weeklyCalendar');
            res.render(path.join("pages/weeklyCalendar"));
    })

    // MultiMonthCalendar route
    // Verify access
    app.get('/multiMonthCalendar',
        (req, res) => {
            // console.log('multiMonthCalendar');
            res.render(path.join("pages/multiMonthCalendar"));
    })
  };






