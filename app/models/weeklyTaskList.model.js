const mongoose = require("mongoose");

const WeeklyTaskList = mongoose.model(
  "Weekly Task List",
  new mongoose.Schema({
    name: String
  })
);

module.exports = WeeklyTaskList;


// const WeeklyTaskList = mongoose.model(
//     "Weekly Task List",
//     new mongoose.Schema({
//       username: String,
//       email: String,
//       password: String
//     })
//   );
  