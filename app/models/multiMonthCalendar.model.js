const mongoose = require("mongoose");

const MultiMonthCalendar = mongoose.model(
  "MultiMonthCalendar",
  new mongoose.Schema({
    Title: String
  })
);

module.exports = MultiMonthCalendar;