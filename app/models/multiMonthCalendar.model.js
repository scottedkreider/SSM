const mongoose = require("mongoose");

const MultiMonthCalendar = mongoose.model(
  "MultiMonthCalendar",
  new mongoose.Schema({
    name: String,
  })
);

module.exports = MultiMonthCalendar;