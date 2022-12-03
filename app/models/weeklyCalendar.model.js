const mongoose = require("mongoose");

const WeeklyCalendar = mongoose.model(
  "Weekly Calendar",
  new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    calendarData: []
  })
);

module.exports = WeeklyCalendar;