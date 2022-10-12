const mongoose = require("mongoose");

const MultiMonthCalendar = mongoose.model(
  "MultiMonthCalendar",
  new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },    
    Title: String,
    StartDate: String,
    EndDate: String,
    ListOfDays: []
  })
);

module.exports = MultiMonthCalendar;