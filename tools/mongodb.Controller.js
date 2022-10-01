const db = require("../app/models");
const User = db.user;

exports.deleteUser = (username, res) => {
    initializeDbConnection();

    User.deleteOne({
        username: username
      }).exec((err, user) => {
        if (err) {
          return;
        }
        console.log("user successfully deleted");
      });

      closeDbConnection();
}

exports.addUser = (accountInfo, res) => {
    initializeDbConnection();

    const user = new User({
        username: accountInfo.username,
        email: accountInfo.email,
        password: bcrypt.hashSync(accountInfo.password, 8)
      });
    
      user.save((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });

      closeDbConnection();
}

initializeDbConnection = () => {
    db.mongoose
    .connect("mongodb+srv://scottedkreider:MongoAdmin1234@cluster0.xfkqs.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("TEST: Successfully connected to MongoDB");
    })
    .catch(err => {
        console.error("TEST: Connection error", err);
        process.exit();
    });
}

closeDbConnection = () => {
    db.mongoose.connection.close()
}