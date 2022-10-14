const db = require("../models");
const User = db.user;

  exports.deleteAccount = (req, res) => {
      User.deleteOne({
        username: req.body.username
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
          res.status(200).send({ message: "user successfully deleted" });
        });
  }