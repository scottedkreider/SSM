const mongoose = require("mongoose");

const WeeklyTaskList = mongoose.model(
  "Weekly Task List",
  new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    idIncrementer: Number,
    numberOfActiveCategories: Number,
    categoryList: []

  })
);

module.exports = WeeklyTaskList;