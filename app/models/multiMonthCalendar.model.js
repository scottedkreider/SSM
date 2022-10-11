const mongoose = require("mongoose");

const MultiMonthCalendar = mongoose.model(
  "MultiMonthCalendar",
  new mongoose.Schema({
    username: String,
    Title: String,
    _mgr: String
  })
);

module.exports = MultiMonthCalendar;