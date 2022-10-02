const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.multiMonthCalendar = require("./multiMonthCalendar.model");
db.weeklyTaskList = require("./weeklyTaskList.model");

module.exports = db;