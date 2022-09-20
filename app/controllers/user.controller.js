const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };

  exports.deleteAccount = (req, res) => {
    console.log(req.body.username)
      User.deleteOne({
        username: req.body.username
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
          res.status(200).send({
            username: user.username,
            message: "deleted"
          });
        });
  }