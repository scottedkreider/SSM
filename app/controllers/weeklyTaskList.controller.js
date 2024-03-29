const db = require("../models");
const WeeklyTaskList = db.weeklyTaskList;

exports.saveWeeklyTaskListData = (req, res) => {
    WeeklyTaskList.replaceOne(
        {
            username: req.headers.authorization
        },
        {
            username: req.headers.authorization,
            idIncrementer: JSON.parse(req.body._wtl).idIncrementer,
            numberOfActiveCategories: JSON.parse(req.body._wtl).numberOfActiveCategories,
            categoryList: JSON.parse(req.body._wtl).categoryList
        },
        {
            upsert: true,
        },
        (err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
}

exports.getWeeklyTaskListData = (req, res) => {
    WeeklyTaskList.findOne({
      username: req.headers.authorization
    })
      .exec((err, wtl) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (!wtl) {
            res.status(401).send({ message: "Failed! WTL not found!" });
            return;
          }
  
        res.status(200).send(
            {
                message: "data successfully found",
                wtl: wtl
            });
      });
}