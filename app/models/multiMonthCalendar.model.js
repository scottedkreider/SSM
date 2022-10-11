const mongoose = require("mongoose");

const MultiMonthCalendar = mongoose.model(
  "MultiMonthCalendar",
  new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },    
    Title: String,
    _mgr: String
  })
);

module.exports = MultiMonthCalendar;