const db = require("../models");
const MultiMonthCalendar = db.multiMonthCalendar;

exports.retrieveMMCData = (req, res) => {
    MultiMonthCalendar.findOne({
      username: req.body.name
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
  
        res.status(200).send({ message: "data successfully found" });
      });
}

exports.saveMMCData = (req, res) => {
    console.log(req.body.name)
    const mmc = new MultiMonthCalendar({
        name: req.body.name
      });

      mmc.save((err, mmc) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
}
