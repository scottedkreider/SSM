const db = require("../models");
const MultiMonthCalendar = db.multiMonthCalendar;

exports.retrieveMMCData = (req, res) => {
    console.log("retrieving");
    console.log(req.headers.authorization);
    MultiMonthCalendar.findOne({
      username: req.headers.authorization
    })
      .exec((err, mmc) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (!mmc) {
            res.status(401).send({ message: "Failed! MMC not found!" });
            return;
          }
  
        res.status(200).send(
            {
                message: "data successfully found",
                mmc: mmc
            });
      });
}

exports.saveMMCData = (req, res) => {
      MultiMonthCalendar.replaceOne(
        {
            username: req.headers.authorization
        },
        {
            username: req.headers.authorization,
            Title: JSON.parse(req.body._mgr).Title,
            StartDate: JSON.parse(req.body._mgr).StartDate,
            EndDate: JSON.parse(req.body._mgr).EndDate,
            ListOfDays: JSON.parse(req.body._mgr).ListOfDays
        },
        {
            upsert: true,
        },
        (err, mmc) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
}
