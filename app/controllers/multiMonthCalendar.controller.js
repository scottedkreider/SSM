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
  
        res.status(200).send({ message: "data successfully found" });
      });
}

exports.saveMMCData = (req, res) => {
    // console.log(req.body._mgr)
    // console.log(req.headers.authorization)
    const mmc = new MultiMonthCalendar({
        username: req.headers.authorization,
        Title: JSON.parse(req.body._mgr).Title,
        _mgr: req.body._mgr
      });

      mmc.save((err, mmc) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
}
